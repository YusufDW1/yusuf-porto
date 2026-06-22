'use client';

import React from 'react';
import { SiNextdotjs, SiTailwindcss, SiUnity, SiAseprite, SiFigma } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import styles from './TechMarquee.module.css';

interface Skill {
  name: string;
  Icon: React.ElementType;
  url: string;
}

const SKILLS_TOP: Skill[] = [
  { name: 'HTML5', Icon: FaHtml5, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS3', Icon: FaCss3Alt, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', Icon: FaJs, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', Icon: FaReact, url: 'https://react.dev/' },
  { name: 'Next.js', Icon: SiNextdotjs, url: 'https://nextjs.org/' },
  { name: 'Tailwind', Icon: SiTailwindcss, url: 'https://tailwindcss.com/' },
];

const SKILLS_BOTTOM: Skill[] = [
  { name: 'Unity', Icon: SiUnity, url: 'https://unity.com/' },
  { name: 'C#', Icon: TbBrandCSharp, url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
  { name: 'Aseprite', Icon: SiAseprite, url: 'https://www.aseprite.org/' },
  { name: 'Git', Icon: FaGitAlt, url: 'https://git-scm.com/' },
  { name: 'Figma', Icon: SiFigma, url: 'https://www.figma.com/' },
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
              <skill.Icon size={40} className={styles.svgIcon} />
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
              <skill.Icon size={40} className={styles.svgIcon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
