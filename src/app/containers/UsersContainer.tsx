import React, { FC } from 'react'
import { IUser } from '@userstory/models/User'
import { ApiMethod } from '@userstory/models/Api'
import { useQuery } from '@userstory/hooks'
import { UsersList } from '@userstory/components/common/Users'

export const UsersContainer: FC = () => {
  const {
    data: users,
    loading,
    error,
  } = useQuery<IUser[]>(ApiMethod.Get, '/users?per_page=10')

  if (error) {
    return <p>Ошибка получения списка пользователей</p>
  } if (loading) {
    return <p>Загрузка...</p>
  }

  return <UsersList users={users} />
}