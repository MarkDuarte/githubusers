'use client'

import { useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import { NavLogo } from './NavLogo'
import { api } from '@/services/api'
import { ListUser } from '../Pagination'
import { User } from '@/types/users'
import { ErrorTooltip } from '../Tooltip'

export function Nav() {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState<User[]>([])
  const [messageTooltip, setMessageTooltip] = useState('')

  async function searchSubmit() {
    try {
      if (!search) {
        setMessageTooltip('O campo de busca está vazio.')
        throw new Error()
      }

      const response = await api(search)

      setUsers(response)
    } catch (error) {
      setMessageTooltip('Erro ao localizar usuario')
    }
  }

  return (
    <>
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
