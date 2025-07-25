import { useState } from 'react'
import LoginButton from '../components/LoginButton'
import VideoForm from '../components/VideoForm'
import AiGenerator from '../components/AiGenerator'
import Dashboard from '../components/Dashboard'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(true) // implement real check
  if (!loggedIn) return <LoginButton/>

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold">YouTube Automator</h1>
      <VideoForm onSuccess={() => window.location.reload()}/>
      <AiGenerator onSuccess={() => window.location.reload()}/>
      <Dashboard/>
    </div>
  )
}
