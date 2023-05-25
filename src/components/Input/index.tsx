import React from 'react'

type InputType = {
  typeInput: string
  placeholder: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({ typeInput, placeholder, onChange }: InputType) {
  return (
    <input
      className="rounded-sm px-2 w-full md:w-64 h-7"
      type={typeInput}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
