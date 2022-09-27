import React from 'react'
import { SocialIcon } from 'react-social-icons';
import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <SocialIcon
        style={{ height: 35, width: 35 }}
        fgColor="#FFFFFF"
        bgColor='#73414c'
        url="https://twitter.com/talvenlapsiDot"
      />

      <SocialIcon
        style={{ height: 35, width: 35 }}
        fgColor="#FFFFFF"
        bgColor='#73414c'
        url="https://www.facebook.com/J.Kukka"
      />

      <SocialIcon
        style={{ height: 35, width: 35 }}
        fgColor="#FFFFFF"
        bgColor='#73414c'
        url="https://www.instagram.com/talvenlapsi/"
      />

      <SocialIcon
        style={{ height: 35, width: 35 }}
        fgColor="#FFFFFF"
        bgColor='#73414c'
        url="https://ko-fi.com/talvenlapsi"
      />

      <SocialIcon
        style={{ height: 35, width: 35 }}
        fgColor="#FFFFFF"
        bgColor='#73414c'
        url="https://www.twitch.tv/talvenlapsi"
      />
    </div>
  );
}