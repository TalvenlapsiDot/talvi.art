import styles from "./styles.module.css";
import Head from 'next/head';

export default function Gallery() {
    return (
      <div className={styles.container}>
        <Head>
            <title> Gallery</title>
        </Head>
        <main className={styles.main}>
         <p className={styles.box}>
         <h1> This is the gallery </h1>
             Test text and shit.
             Will be pictures one day.
           </p>
           </main>
      </div>
    )
}