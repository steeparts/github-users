import React, { FC, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { IUser } from '@userstory/models/User'
import { Button } from '@userstory/components/ui'

import S from './Users.styles.module.scss'

interface UsersListItemProps {
  user: IUser
}

export const UsersListItem: FC<UsersListItemProps> = ({ user }) => {
  const onClick = useCallback((): void => {
    window.open(user.html_url, '_blank')
  }, [user.html_url])

  return (
    <li className={S.Item}>
      <Link className={S.Link} to={`/users/${user.login}`}>
        <span className={S.Avatar}>
          <img width="70" height="70" src={user.avatar_url} alt={user.login} />
        </span>
        <span className={S.Data}>
          {user.login}
        </span>
      </Link>
      <Button kind="Primary" onClick={onClick}>GitHub</Button>
    </li>
  )
}