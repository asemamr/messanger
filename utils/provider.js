
import { SessionProvider } from "next-auth/react"

export default function Provider({ children, session }) {
  
  return (
    <div session={session}>
      {children}
    </div>
  )
}