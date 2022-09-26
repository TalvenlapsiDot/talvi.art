import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Hamburger from './Hamburger'

export default function Navbar() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <>
        <nav className={styles.nav}>
            <Link href='/'><a>Home</a></Link>
            <Link href='../prices'><a>Prices</a></Link>
            <Link href='../gallery'><a>Gallery</a></Link>
            <Link href='../tos'><a>Terms</a></Link>
        </nav>

        <div className={styles.hamburger} onClick={toggleHamburger}>
                <Hamburger />
        {!hamburgerOpen &&
            <>
                <Hamburger />
            <nav className={styles.burgernav}>
                <Link href='/'><a>Home</a></Link>
                <Link href='../prices'><a>Prices</a>
                </Link><Link href='../gallery'><a>Gallery</a>
                </Link><Link href='../tos'><a>Terms</a></Link>
                </nav>
            </>
        }
        </div>
        </>
    )
}