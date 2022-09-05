import React from 'react'
import styles from '../styles/Home.module.css'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className={styles.footer}>
        <p>
        <SocialIcon style={{ height: 35, width: 35 }} fgColor="#FFFFFF" url="https://twitter.com/talvenlapsiDot" />
        <SocialIcon style={{ height: 35, width: 35 }} fgColor="#FFFFFF" url="https://www.facebook.com/J.Kukka" />
        <SocialIcon style={{ height: 35, width: 35 }} fgColor="#FFFFFF" url="https://www.instagram.com/talvenlapsi/" />
        <SocialIcon style={{ height: 35, width: 35 }} fgColor="#FFFFFF" url="https://ko-fi.com/talvenlapsi" />
        <SocialIcon style={{ height: 35, width: 35 }} fgColor="#FFFFFF" url="https://www.twitch.tv/talvenlapsi" />
        </p>
      </div>
    );
}

export default Footer