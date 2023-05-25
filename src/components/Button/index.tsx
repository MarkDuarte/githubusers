import React from 'react'

type TypeButton = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export function Button({ children, onClick, type }: TypeButton) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="py-1 px-4 bg-gray-800 text-gray-50 rounded-md"
    >
      {children}
    </button>
  )
}
