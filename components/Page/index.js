import React from 'react'
import styles from './styles.module.css'

export default function Page({children}) {
    return (
          <main className={styles.main}>
           <div className={styles.box}>
              {children}
             </div>
           </main>
    )
}