import { NavLogo } from '@/components/Nav/NavLogo'
import { UserContext } from '@/context/userContext'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

export default function User() {
  const { selectedUser, dataGetUsers } = useContext(UserContext)
  console.log('Contexto ', dataGetUsers)

  return (
    <>
      <div>
        <nav className="w-full h-20 bg-gray-200 border-b border-gray-200">
          <div className="w-full h-full max-w-7xl m-auto flex items-center gap-4">
            <NavLogo />
          </div>
        </nav>

        <div className="px-20 mt-5 h-full w-full">
          <div className="py-5">
            <span className="font-bold text-2xl">Detahes do Usuário</span>
          </div>
          <Image
            src={selectedUser?.avatar_url || ''}
            width={200}
            height={200}
            className="rounded-full"
            alt="Foto do Usuário"
          />
          <div className="p-5 gap-8">
            <span>
              <p className="flex font-bold">Login:</p>
              {selectedUser?.login}
            </span>
            <span>
              <p className="flex font-bold">Id do Usuário:</p>
              {selectedUser?.id}
            </span>
            <span>
              <p className="flex font-bold">Página do Usuário:</p>
              {selectedUser?.html_url}
            </span>
          </div>
          <div className="p-5 mt-5">
            <Link
              className='bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded opacity-75 transition-opacity duration-300"'
              href="/"
            >
              Meu Botão
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
