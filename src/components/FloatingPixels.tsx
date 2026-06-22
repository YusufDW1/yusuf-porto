'use client';

import { useEffect, useState } from 'react';
import styles from './FloatingPixels.module.css';

interface FloatingElement {
  id: number;
  type: 'star' | 'cloud' | 'plant';
  x: number;
  y: number;
  delay: number;
  size: number;
}

export default function FloatingPixels() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const els: FloatingElement[] = [];
    // Stars
    for (let i = 0; i < 12; i++) {
      els.push({
        id: i,
        type: 'star',
        x: Math.random() * 95,
        y: Math.random() * 80,
        delay: Math.random() * 5,
        size: Math.random() > 0.5 ? 4 : 6,
      });
    }
    // Clouds
    for (let i = 12; i < 16; i++) {
      els.push({
        id: i,
        type: 'cloud',
        x: Math.random() * 90,
        y: Math.random() * 40,
        delay: Math.random() * 8,
        size: 16 + Math.random() * 16,
      });
    }
    // Small plants at bottom
    for (let i = 16; i < 20; i++) {
      els.push({
        id: i,
        type: 'plant',
        x: Math.random() * 90 + 5,
        y: 85 + Math.random() * 10,
        delay: Math.random() * 3,
        size: 8 + Math.random() * 8,
      });
    }
    setElements(els);
  }, []);

  return (
    <div className={styles.container} aria-hidden="true">
      {elements.map((el) => (
        <div
          key={el.id}
          className={`${styles.element} ${styles[el.type]}`}
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            animationDelay: `${el.delay}s`,
            width: `${el.size}px`,
            height: `${el.size}px`,
          }}
        />
      ))}
    </div>
  );
}
