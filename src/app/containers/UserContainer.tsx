import React, { FC } from 'react'
import { useParams } from 'react-router'
import { IUserDetails } from '@userstory/models/User'
import { ApiMethod } from '@userstory/models/Api'
import { useQuery } from '@userstory/hooks'
import { UserDetails } from '@userstory/components/common/User'

export const UserContainer: FC = () => {
  const { username } = useParams<{ username: string }>()

  const {
    data: user,
    loading,
    error,
  } = useQuery<IUserDetails>(ApiMethod.Get, `/users/${username}`)

  if (error) {
    return <p>Ошибка получения данных пользователя {username}</p>
  } if (loading) {
    return <p>Загрузка...</p>
  }

  return <UserDetails user={user} />
}