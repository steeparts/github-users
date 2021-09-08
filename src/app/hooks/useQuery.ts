import { useCallback, useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'
import httpService from '@userstory/services/httpService'

interface QueryResult<T> {
  data?: T
  loading: boolean
  error?: string
}

export function useQuery<T>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
): QueryResult<T> {
  const [data, setData] = useState<T | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)

  const onSuccess = useCallback((response: AxiosResponse<T>): void => {
    setData(response.data)
    setLoading(false)
  }, [])

  const onError = useCallback((err: any): void => {
    setError(err?.response?.data.message || 'Непредвиденная ошибка')
    setLoading(false)
  }, [])

  useEffect((): void => {
    setLoading(true)
    httpService[method]<T>(url).then(onSuccess).catch(onError)
  }, [method, url, onSuccess, onError])

  return { data, loading, error }
}