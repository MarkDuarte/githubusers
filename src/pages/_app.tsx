import { AppProps } from 'next/app'

import './../styles/globals.css'
import { UserProvider } from '@/context/userContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  )
}
