import React, { createContext, useState, ReactNode } from 'react'

interface User {
  id: string
  avatar_url: string
  login: string
  site_admin: Boolean
  html_url: string
}

interface UserContextProps {
  selectedUser: User | null
  selectUser: (user: User) => void
  dataGetUsers: User[] | null
  dataSetUsers: (users: User[]) => void
}

export const UserContext = createContext<UserContextProps>({
  selectedUser: null,
  selectUser: () => {},
  dataGetUsers: null,
  dataSetUsers: () => {},
})

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [dataGetUsers, setDataGetUsers] = useState<User[] | null>(null)

  const selectUser = (user: User) => {
    setSelectedUser(user)
  }

  const dataSetUsers = (users: User[]) => {
    setDataGetUsers(users)
  }

  return (
    <UserContext.Provider
      value={{ selectedUser, selectUser, dataSetUsers, dataGetUsers }}
    >
      {children}
    </UserContext.Provider>
  )
}
