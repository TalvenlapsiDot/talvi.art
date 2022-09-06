import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Transition({ children }) {
  const { asPath } = useRouter();
    return (
      <div className={styles.effect1}>
        <AnimatePresence initial={false} exitBeforeEnter>
            <motion.div key={asPath} variants={variants} animate="in" initial="out" exit="out">
                {children}
            </motion.div>
        </AnimatePresence>
      </div>
    )
  };

  const variants = {
    in: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2
      }
    },

    out: {
      opacity: 0,
      scale: 1,
      y: 10,
      transition: {
        duration: 0.4
      }
    }
  };
