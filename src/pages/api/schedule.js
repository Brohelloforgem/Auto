import { google } from 'googleapis'
import { connectToDb, Schedule } from '../../utils/db'

export const config = { api: { bodyParser: false } }

export default async function handler(req, res) {
  const db = await connectToDb()
  if (req.method === 'POST') {
    // parse formData, upload to storage, schedule with YouTube API
    // save entry in MongoDB
    res.status(200).end()
  }
  if (req.method === 'GET') {
    const list = await Schedule.find().sort({ schedule: -1 })
    res.status(200).json(list)
  }
}
