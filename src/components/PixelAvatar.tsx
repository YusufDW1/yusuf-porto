'use client';

import styles from './PixelAvatar.module.css';

/*
 * Professional Minimalist Silhouette
 *
 * Legend:
 *  . = transparent
 *  h = hair/head top (#181820)
 *  s = skin (#cda588)
 *  d = skin shadow (#b89075)
 *  c = clothes (#303440)
 *  C = clothes shadow (#202430)
 *  a = accent (#404555)
 */

const COLOR_MAP: Record<string, string> = {
  '.': '',
  'h': '#181820',
  's': '#cda588',
  'd': '#b89075',
  'c': '#303440',
  'C': '#202430',
  'a': '#404555',
};

const PIXEL_MAP = [
  '....................',
  '.......hhhhhh.......',
  '......hhhhhhhh......',
  '.....hhhhhhhhhh.....',
  '.....hhhhhhhhhh.....',
  '.....hssssssssh.....',
  '.....ssssssssss.....',
  '.....ssssssssss.....',
  '......ssssssss......',
  '......dddddddd......',
  '.......dddddd.......',
  '.....cccccccccc.....',
  '....cccccccccccc....',
  '...CccccccccccccC...',
  '..CCcccca..accccCC..',
  '.CCCcccca..accccCCC.',
  '.CCCcccca..accccCCC.',
  '....................',
];

function generateBoxShadow(): string {
  const shadows: string[] = [];

  PIXEL_MAP.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const char = row[x];
      const color = COLOR_MAP[char];
      if (color) {
        shadows.push(`${x}px ${y}px 0px ${color}`);
      }
    }
  });

  return shadows.join(', ');
}

const boxShadow = generateBoxShadow();

export default function PixelAvatar() {
  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatarFrame}>
        <div
          className={styles.pixel}
          style={{ boxShadow }}
        />
      </div>
      {/* Floating indicator */}
      <div className={styles.statusIndicator}>
        <span className={styles.statusDot} />
        <span className={styles.statusText}>ONLINE</span>
      </div>
    </div>
  );
}
