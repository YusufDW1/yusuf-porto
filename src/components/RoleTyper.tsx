'use client';

import { useState, useEffect } from 'react';
import styles from './RoleTyper.module.css';

const ROLES = ['Frontend Developer', 'Game Developer'];

export default function RoleTyper() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (roleIndex >= ROLES.length) {
      setRoleIndex(0);
      setText('');
      setIsDeleting(false);
      setIsPaused(false);
      return;
    }

    const role = ROLES[roleIndex];

    if (isPaused) {
      const pause = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2200);
      return () => clearTimeout(pause);
    }

    if (!isDeleting && text === role) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      return;
    }

    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(() => {
      setText(
        isDeleting
          ? role.substring(0, text.length - 1)
          : role.substring(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, isPaused, roleIndex]);

  return (
    <span className={styles.typer}>
      <span className={styles.text}>{text}</span>
      <span className={styles.cursor}>_</span>
    </span>
  );
}
