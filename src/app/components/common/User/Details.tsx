import React, { FC } from 'react'
import { IUserDetails } from '@userstory/models/User'
import { Typography } from '@userstory/components/ui'
import { formDateTime } from '@userstory/utils/format'

import S from './User.styles.module.scss'

interface UserDetailsProps {
  user: IUserDetails | undefined
}

export const UserDetails: FC<UserDetailsProps> = ({ user }) => {
  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className={S.Container}>
      <div className={S.Media}>
        <img
          className={S.Avatar}
          width="280"
          height="280"
          src={user.avatar_url}
          alt={user.login}
        />
        <div className={S.Data}>
          <Typography.H1 title={user.name || ''} />
          <Typography.H4 title={`@${user.login}`} />
          {user.email && <span className={S.Description}>{user.email}</span>}
        </div>
      </div>
      <div className={S.Details}>
        <Typography.H3 title="Данные аккаунта:" />
        <span className={S.Description}>
          Дата регистрации: <span>{formDateTime(user.created_at)}</span>
        </span>
        <span className={S.Description}>
          {user.location}
        </span>
        <span className={S.Description}>
          <a href={`${user.html_url}?tab=followers`} target="_blank" rel="noreferrer">
            Подписчиков
          </a>: <span>{user.followers}</span>
        </span>
        <span className={S.Description}>
          <a href={`${user.html_url}?tab=following`} target="_blank" rel="noreferrer">
            Подписок
          </a>: <span>{user.following}</span>
        </span>
        <span className={S.Description}>
          <a href={`${user.html_url}?tab=repositories`} target="_blank" rel="noreferrer">
            Публичных репозиториев
          </a>: <span>{user.public_repos}</span>
        </span>
      </div>
    </div>
  )
}