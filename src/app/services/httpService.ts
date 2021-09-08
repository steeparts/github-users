import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { config } from 'config'

const axiosInit = (): AxiosInstance => {
  const defaultConfig: AxiosRequestConfig = {
    baseURL: config.api.baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    timeout: 3000,
  }

  const axiosInstanceWithConfig = axios.create(defaultConfig)

  axiosInstanceWithConfig.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  )

  return axiosInstanceWithConfig
}

export const axiosInstance = axiosInit()

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
}