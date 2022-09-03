import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
 
const Navbar = () => {
    return (
        <nav className={styles.nav}>
                <Link href='/'><a>★ Home ★</a></Link>
                <Link href='../prices'><a>★ Prices ★</a></Link>
                <Link href='../gallery'><a>★ Gallery ★</a></Link>
                <Link href='../tos'><a>★ T.O.S ★</a></Link>
        </nav>
    )
}
 
export default Navbar