import './globals.css'
import Header from './header'
import InputChat from './InputChat'
import { getServerSession } from 'next-auth/next'
import { authOption } from '@/pages/api/auth/[...nextauth]'

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOption)

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header session={session} />
        {children}
        <InputChat session={ session } />
      </body>
    </html>
  )
}
