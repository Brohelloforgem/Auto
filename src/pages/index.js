import { useState } from 'react'
import LoginButton from '../components/LoginButton.jsx'
import VideoForm from '../components/VideoForm.jsx'
import AiGenerator from '../components/AiGenerator.jsx'
import Dashboard from '../components/Dashboard.jsx'

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
