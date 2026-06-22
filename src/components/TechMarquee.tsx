'use client';

import React from 'react';
import PixelIcon from './PixelIcon';
import styles from './TechMarquee.module.css';

interface Skill {
  name: string;
  icon: string;
  url: string;
}

const SKILLS_TOP: Skill[] = [
  { name: 'HTML5', icon: 'html', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS3', icon: 'css', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', icon: 'js', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', icon: 'react', url: 'https://react.dev/' },
  { name: 'Next.js', icon: 'react', url: 'https://nextjs.org/' }, // We don't have nextjs icon, use react or generic
  { name: 'Tailwind', icon: 'css', url: 'https://tailwindcss.com/' },
];

const SKILLS_BOTTOM: Skill[] = [
  { name: 'Unity', icon: 'unity', url: 'https://unity.com/' },
  { name: 'C#', icon: 'csharp', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
  { name: 'Aseprite', icon: 'aseprite', url: 'https://www.aseprite.org/' },
  { name: 'Git', icon: 'github', url: 'https://git-scm.com/' },
  { name: 'Figma', icon: 'css', url: 'https://www.figma.com/' },
];

export default function TechMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      {/* Top row: Left to Right */}
      <div className={styles.marqueeRow}>
        <div className={`${styles.marqueeTrack} ${styles.slideRight}`}>
          {/* Duplicate content for seamless looping */}
          {[...SKILLS_TOP, ...SKILLS_TOP, ...SKILLS_TOP].map((skill, i) => (
            <a key={i} href={skill.url} target="_blank" rel="noopener noreferrer" className={styles.skillLink} title={skill.name}>
              <PixelIcon name={skill.icon} scale={5} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom row: Right to Left */}
      <div className={styles.marqueeRow}>
        <div className={`${styles.marqueeTrack} ${styles.slideLeft}`}>
          {/* Duplicate content for seamless looping */}
          {[...SKILLS_BOTTOM, ...SKILLS_BOTTOM, ...SKILLS_BOTTOM].map((skill, i) => (
            <a key={i} href={skill.url} target="_blank" rel="noopener noreferrer" className={styles.skillLink} title={skill.name}>
              <PixelIcon name={skill.icon} scale={5} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
