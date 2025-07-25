import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

export default function Dashboard() {
  const { data } = useSWR('/api/schedule', fetcher)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data?.map(item => (
        <div key={item.id} className="p-4 bg-gray-800 rounded">
          <h3 className="text-xl">{item.title}</h3>
          <p>{new Date(item.schedule).toLocaleString()}</p>
          <p>Status: {item.status}</p>
        </div>
      ))}
    </div>
  )
}
