'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './RoleTyper.module.css';

const ROLES = ['Frontend Developer', 'Game Developer'];

export default function RoleTyper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % ROLES.length);
        setIsVisible(true);
      }, 400);
    }, 3200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <span className={styles.roleDisplay}>
      <span className={`${styles.role} ${isVisible ? styles.visible : styles.hidden}`}>
        {ROLES[activeIndex]}
      </span>
    </span>
  );
}
