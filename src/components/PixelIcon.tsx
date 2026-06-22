'use client';

import styles from './PixelIcon.module.css';

/* 8x8 pixel icon maps for each icon type */
const ICON_MAPS: Record<string, { map: string[]; colors: Record<string, string> }> = {
  about: {
    map: [
      '..AAAA..',
      '.AAAAAA.',
      '.AA..AA.',
      '.AAAAAA.',
      '..AAAA..',
      '...AA...',
      '..AAAA..',
      '.AAAAAA.',
    ],
    colors: { A: 'var(--accent-blue)' },
  },
  projects: {
    map: [
      'AAAAAAAA',
      'A......A',
      'A.AAAA.A',
      'A.A..A.A',
      'A.A..A.A',
      'A.AAAA.A',
      'A......A',
      'AAAAAAAA',
    ],
    colors: { A: 'var(--accent-green)' },
  },
  skills: {
    map: [
      '...AA...',
      '..AAAA..',
      '.AAAAAA.',
      'AAAAAAAA',
      '...AA...',
      '...AA...',
      '...AA...',
      '...AA...',
    ],
    colors: { A: 'var(--accent-gold)' },
  },
  contact: {
    map: [
      'AAAAAAAA',
      'AA....AA',
      'A.A..A.A',
      'A..AA..A',
      'A..AA..A',
      'A.A..A.A',
      'AA....AA',
      'AAAAAAAA',
    ],
    colors: { A: 'var(--accent-earth)' },
  },
  location: {
    map: [
      '...AA...',
      '..AAAA..',
      '.AA..AA.',
      '.AA..AA.',
      '..AAAA..',
      '...AA...',
      '...AA...',
      '....A...',
    ],
    colors: { A: 'var(--accent-red, #8b4a4a)' },
  },
  email: {
    map: [
      'AAAAAAAA',
      'AA....AA',
      'A.A..A.A',
      'A..AA..A',
      'A......A',
      'A......A',
      'A......A',
      'AAAAAAAA',
    ],
    colors: { A: 'var(--accent-blue)' },
  },
  phone: {
    map: [
      '..AAAA..',
      '..A..A..',
      '..A..A..',
      '..A..A..',
      '..A..A..',
      '..A..A..',
      '..AAAA..',
      '..AAAA..',
    ],
    colors: { A: 'var(--accent-green)' },
  },
  github: {
    map: [
      '..AAAA..',
      '.AAAAAA.',
      'AAAAAAAA',
      'AA.AA.AA',
      'AAAAAAAA',
      '.AAAAAA.',
      '.A.AA.A.',
      '.A....A.',
    ],
    colors: { A: 'var(--text-primary)' },
  },
  linkedin: {
    map: [
      'AAAAAAAA',
      'A......A',
      'A.AA...A',
      'A..A...A',
      'A..AAAA.',
      'A..A..A.',
      'A..A..A.',
      'AAAAAAAA',
    ],
    colors: { A: 'var(--accent-blue)' },
  },
  itchio: {
    map: [
      '.AAAAAA.',
      'AAAAAAAA',
      'AA.AA.AA',
      'A.AAAA.A',
      'A.A..A.A',
      'A.AAAA.A',
      'AAAAAAAA',
      '.AAAAAA.',
    ],
    colors: { A: 'var(--accent-earth)' },
  },
  html: {
    map: [
      '.AAAAAA.',
      '.A....A.',
      '.AAAAAA.',
      '...AA...',
      '...AA...',
      '.AAAAAA.',
      '.A....A.',
      '.AAAAAA.',
    ],
    colors: { A: '#e44d26' },
  },
  css: {
    map: [
      '.AAAAAA.',
      '.A......',
      '.A......',
      '.AAAAAA.',
      '......A.',
      '......A.',
      '.A....A.',
      '.AAAAAA.',
    ],
    colors: { A: '#2965f1' },
  },
  js: {
    map: [
      'AAAAAAAA',
      'A......A',
      'A....AA.',
      'A...AA..',
      'A..AA...',
      'A..AA...',
      'A......A',
      'AAAAAAAA',
    ],
    colors: { A: '#f7df1e' },
  },
  react: {
    map: [
      '...AA...',
      '.AAAAAA.',
      'AA.AA.AA',
      'AAAAAAAA',
      'AA.AA.AA',
      '.AAAAAA.',
      '...AA...',
      '........',
    ],
    colors: { A: '#61dafb' },
  },
  unity: {
    map: [
      '..AAAA..',
      '.A....A.',
      'A..AA..A',
      'A..AA..A',
      'A..AA..A',
      'A..AA..A',
      '.A....A.',
      '..AAAA..',
    ],
    colors: { A: '#a0a0b0' },
  },
  csharp: {
    map: [
      '..AAAA..',
      '.A......',
      'A..AA.A.',
      'A.AAAA..',
      'A..AA.A.',
      'A.AAAA..',
      '.A......',
      '..AAAA..',
    ],
    colors: { A: '#9b4f96' },
  },
  aseprite: {
    map: [
      'AAAAAAAA',
      'A......A',
      'A.AAAA.A',
      'A.A..A.A',
      'A.AAAA.A',
      'A......A',
      'A......A',
      'AAAAAAAA',
    ],
    colors: { A: '#7aae6e' },
  },
  home: {
    map: [
      '...AA...',
      '..AAAA..',
      '.AAAAAA.',
      'AAAAAAAA',
      '.AA..AA.',
      '.AA..AA.',
      '.AA..AA.',
      '.AAAAAA.',
    ],
    colors: { A: 'var(--accent-gold)' },
  },
};

function generateIconShadow(name: string): string {
  const icon = ICON_MAPS[name];
  if (!icon) return '';

  const shadows: string[] = [];
  icon.map.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const char = row[x];
      if (char !== '.' && icon.colors[char]) {
        shadows.push(`${x}px ${y}px 0px ${icon.colors[char]}`);
      }
    }
  });

  return shadows.join(', ');
}

interface PixelIconProps {
  name: string;
  scale?: number;
  className?: string;
}

export default function PixelIcon({ name, scale = 3, className = '' }: PixelIconProps) {
  const shadow = generateIconShadow(name);
  if (!shadow) return null;

  return (
    <span
      className={`${styles.iconWrapper} ${className}`}
      style={{
        width: `calc(8px * ${scale})`,
        height: `calc(8px * ${scale})`,
      }}
    >
      <span
        className={styles.iconPixel}
        style={{
          boxShadow: shadow,
          transform: `scale(${scale})`,
        }}
      />
    </span>
  );
}
