type Maybe<T> = T | null

export interface IUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface IUserDetails extends IUser {
  name: Maybe<string>
  company: Maybe<string>
  blog: Maybe<string>
  location: Maybe<string>
  email: Maybe<string>
  hireable: Maybe<boolean>
  bio: Maybe<string>
  twitter_username: Maybe<string>
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}