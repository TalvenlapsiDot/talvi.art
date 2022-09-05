import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <>
        <title className={styles.footer}> Talvi Art Elsewhere</title>
        <p className={styles.footer2}>
        <SocialIcon style={{ height: 35, width: 35 }} url="https://twitter.com/talvenlapsiDot" />
        <SocialIcon style={{ height: 35, width: 35 }} url="https://www.facebook.com/J.Kukka" />
        <SocialIcon style={{ height: 35, width: 35 }} url="https://www.instagram.com/talvenlapsi/" />
        <SocialIcon style={{ height: 35, width: 35 }} url="https://ko-fi.com/talvenlapsi" />
        <SocialIcon style={{ height: 35, width: 35 }} url="https://www.twitch.tv/talvenlapsi" />
        </p>
      </>
    );
}

export default Footer