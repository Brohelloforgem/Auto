import OpenAI from 'openai'
import { connectToDb, Schedule } from '../../utils/db'

export default async function handler(req, res) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  const { prompt } = req.body
  const resp = await openai.videos.generate({ prompt, size: '720p' })
  // save resp.url to Schedule with status Pending
  res.status(200).json({ url: resp.data[0].url })
}
