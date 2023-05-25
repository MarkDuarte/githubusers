import { useEffect, useState } from 'react'

interface ErrorTooltipProps {
  message: string
}

export function ErrorTooltip({ message }: ErrorTooltipProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 bg-red-500 text-white p-2 rounded-md text-sm">
      {message}
    </div>
  )
}

export default ErrorTooltip
