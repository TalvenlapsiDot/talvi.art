import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Transition from '../components/Transition';

import '../styles/globals.css';
import styles from '../styles/Home.module.css';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Navbar />
      <Transition>
        <Component {...pageProps} />
      </Transition>
    <Footer />

    <div className={styles.background} />
  </>
  )
}

export default MyApp
