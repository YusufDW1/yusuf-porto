'use client';

import { useState, useEffect } from 'react';
import styles from './RoleTyper.module.css';

const ROLES = ['Frontend Developer', 'Game Developer'];

export default function RoleTyper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % ROLES.length);
        setAnimating(false);
      }, 450); // matches flipOut animation duration
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className={styles.container}>
      <span className={`${styles.role} ${animating ? styles.slideOut : styles.slideIn}`}>
        {ROLES[activeIndex]}
      </span>
    </span>
  );
}
