import styles from "./styles.module.css";
import Head from 'next/head';

export default function Tos() {
    return (
      <div className={styles.container}>
        <Head>
            <title> T.O.S</title>
        </Head>
        <main className={styles.main}>
         <p className={styles.box}>
         <h1> Terms of Service </h1>
             Test text and shit.
             A long boi text here
           </p>
           </main>
      </div>
    )
}