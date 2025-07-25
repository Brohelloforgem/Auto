import { useState } from 'react'
import axios from 'axios'

export default function AiGenerator({ onSuccess }) {
  const [prompt, setPrompt] = useState('')
  async function createVideo() {
    const { data } = await axios.post('/api/ai-generate', { prompt })
    // data.url is generated video file url
    onSuccess()
  }
  return (
    <div className="space-y-2">
      <textarea
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="Describe your video"
        className="w-full h-24 bg-gray-800 p-2 rounded"
      />
      <button onClick={createVideo} className="bg-purple-500 px-4 py-2 rounded">
        Generate with AI
      </button>
    </div>
  )
}
