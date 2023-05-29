'use client'

import { useContext, useState } from 'react'
import { api } from '@/services/api'
import { User } from '@/types/users'
import { UserContext } from '@/context/userContext'
import { NavLogo } from '@/components/Nav/NavLogo'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { ListUser } from '@/components/Pagination'
import ErrorTooltip from '@/components/Tooltip'
import Head from 'next/head'

export default function Home() {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState<User[]>([])
  const [messageTooltip, setMessageTooltip] = useState('')
  const { dataSetUsers } = useContext(UserContext)

  async function searchSubmit() {
    try {
      if (!search) {
        setMessageTooltip('O campo de busca está vazio.')
        throw new Error()
      }

      const response = await api(search)

      setUsers(response)
      dataSetUsers(response)
    } catch (error) {
      setMessageTooltip('Erro ao localizar usuario')
    }
  }

  return (
    <>
      <Head>
        <title>List GitHub Users</title>
      </Head>
      <nav className="w-full h-20 bg-gray-200 border-b border-gray-200">
        <div className="w-full h-full max-w-7xl m-auto flex items-center gap-4">
          <NavLogo />
          <Input
            typeInput="text"
            placeholder="Digite a sua Busca"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="button" onClick={searchSubmit}>
            Buscar
          </Button>
        </div>
      </nav>
      <ListUser users={users} />
      <ErrorTooltip message={messageTooltip} />
    </>
  )
}
