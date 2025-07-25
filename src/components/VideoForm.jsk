import { useState } from 'react'
import axios from 'axios'

export default function VideoForm({ onSuccess }) {
  const [data, setData] = useState({
    link: '', file: null, title: '', description: '', thumbnail: null, schedule: ''
  })
  function handleChange(e) {
    const { name, value, files } = e.target
    setData(prev => ({ ...prev, [name]: files ? files[0] : value }))
  }
  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData()
    Object.entries(data).forEach(([k, v]) => form.append(k, v))
    await axios.post('/api/schedule', form)
    onSuccess()
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="link" placeholder="Video URL" onChange={handleChange}/>
      <input type="file" name="file" onChange={handleChange}/>
      <input name="title" placeholder="Title" onChange={handleChange}/>
      <textarea name="description" placeholder="Description" onChange={handleChange}/>
      <input type="file" name="thumbnail" onChange={handleChange}/>
      <input type="datetime-local" name="schedule" onChange={handleChange}/>
      <button type="submit" className="bg-green-500 px-4 py-2 rounded">Schedule</button>
    </form>
  )
}
