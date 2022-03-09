import Header from '../componentes/utils/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <><Header />
    <Component {...pageProps} /></>
    )
}

export default MyApp
