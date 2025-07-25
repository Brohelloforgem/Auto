import { OAuth2Client } from 'google-auth-library'

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.NEXTAUTH_URL}/api/auth/callback`
)

export default async function handler(req, res) {
  // handle Google OAuth flow here
  res.status(200).json({ user: 'todo' })
}
