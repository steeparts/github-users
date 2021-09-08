import React, { FC } from 'react'
import { IUser } from '@userstory/models/User'
import { UsersListItem } from './Item'

import S from './Users.styles.module.scss'

interface UsersListProps {
  users: IUser[] | undefined
}

export const UsersList: FC<UsersListProps> = ({ users }) => (
  <div>
    {users && (
      <ul className={S.List}>
        {users.map((user) => <UsersListItem key={user.id} user={user} />)}
      </ul>
    )}
  </div>
)