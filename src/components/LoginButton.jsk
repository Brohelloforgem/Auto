import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GoogleAuth } from 'google-auth-library'

export default function LoginButton() {
  const router = useRouter()

  useEffect(() => {
    const auth = new GoogleAuth({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
    })
    auth.signIn().then(user => {
      router.push('/')
    })
  }, [])

  return (
    <button className="px-6 py-3 bg-indigo-600 rounded-lg">
      Sign in with Google
    </button>
  )
}
