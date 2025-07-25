import '../public/styles/global.css'
import ThreeBackground from '../components/ThreeBackground'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThreeBackground/>
      <Component {...pageProps}/>
    </>
  )
}
