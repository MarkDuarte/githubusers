export interface User {
  id: string
  avatar_url: string
  login: string
  site_admin: Boolean
  html_url: string
}

export interface UsersProps {
  users: User[]
}
