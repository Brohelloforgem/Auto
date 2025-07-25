import '/public/styles/global.css'
import ThreeBackground from '../components/ThreeBackground.jsx'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThreeBackground/>
      <Component {...pageProps}/>
    </>
  )
}
