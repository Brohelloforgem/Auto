import { google } from 'googleapis'

export function getYouTubeClient(tokens) {
  const auth = new google.auth.OAuth2()
  auth.setCredentials(tokens)
  return google.youtube({ version: 'v3', auth })
}
