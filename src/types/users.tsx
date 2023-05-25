export interface User {
  id: string
  avatar_url: string
  login: string
  site_admin: Boolean
}

export interface UsersProps {
  users: User[]
}
