import React, { useState } from 'react'
import { Table } from '../Table'
import { UsersProps } from '@/types/users'

export function ListUser({ users }: UsersProps) {
  const [pageCurrent, setPageCurrent] = useState(1)
  const usersPerPage = 10

  const getTotalPages = () => Math.ceil(users.length / usersPerPage)

  const getListPage = () => {
    const startIndex = (pageCurrent - 1) * usersPerPage
    const endIndex = startIndex + usersPerPage
    return users.slice(startIndex, endIndex)
  }

  const totalPages = getTotalPages()
  const listPage = getListPage()

  const handlePagePrevious = () => {
    if (pageCurrent > 1) {
      setPageCurrent(pageCurrent - 1)
    }
  }

  const handlePageNext = () => {
    if (pageCurrent < totalPages) {
      setPageCurrent(pageCurrent + 1)
    }
  }

  return (
    <div>
      <Table users={listPage} />
      <div className="p-5 h-full bg-gray-100">
        <div className="p-5 bg-gray-50 border-b-2 flex justify-between mt-4">
          <button
            onClick={handlePagePrevious}
            disabled={pageCurrent === 1}
            className="py-2 px-4 border rounded"
          >
            Anterior
          </button>
          <button
            onClick={handlePageNext}
            disabled={pageCurrent === totalPages}
            className="py-2 px-4 border rounded"
          >
            Próxima
          </button>
        </div>
      </div>
    </div>
  )
}
