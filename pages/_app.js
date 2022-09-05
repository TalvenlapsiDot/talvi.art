import '../styles/globals.css'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar />
  <Component {...pageProps} />
  <Footer />

  <div className={styles.background} />
  </>
  )
}

export default MyApp
