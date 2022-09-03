import styles from "./styles.module.css";
import Head from 'next/head';

export default function Prices() {
    return (
      <div className={styles.container}>
        <Head>
            <title>Prices</title>
        </Head>
        <main className={styles.main}>
         <p className={styles.box}>
         <h1> Pricelist yooo</h1>
             Test text and shit.
             Much of prices and some pictures here
           </p>
           </main>
      </div>
    )
}