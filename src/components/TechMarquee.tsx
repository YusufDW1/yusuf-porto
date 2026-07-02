'use client';

import React from 'react';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiUnity,
  SiAseprite,
  SiFigma,
  SiFlutter,
  SiDart,
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import styles from './TechMarquee.module.css';

interface Skill {
  name: string;
  Icon: React.ElementType;
  url: string;
}

const SKILLS: Skill[] = [
  {
    name: 'Flutter',
    Icon: SiFlutter,
    url: 'https://flutter.dev/',
  },
  {
    name: 'Dart',
    Icon: SiDart,
    url: 'https://dart.dev/',
  },
  {
    name: 'React',
    Icon: FaReact,
    url: 'https://react.dev/',
  },
  {
    name: 'Next.js',
    Icon: SiNextdotjs,
    url: 'https://nextjs.org/',
  },
  {
    name: 'JavaScript',
    Icon: FaJs,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'HTML',
    Icon: FaHtml5,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    Icon: FaCss3Alt,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'Tailwind',
    Icon: SiTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'Unity',
    Icon: SiUnity,
    url: 'https://unity.com/',
  },
  {
    name: 'C#',
    Icon: TbBrandCSharp,
    url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    name: 'Aseprite',
    Icon: SiAseprite,
    url: 'https://www.aseprite.org/',
  },
  {
    name: 'Git',
    Icon: FaGitAlt,
    url: 'https://git-scm.com/',
  },
  {
    name: 'Figma',
    Icon: SiFigma,
    url: 'https://www.figma.com/',
  },
];

export default function TechMarquee() {
  return (
    <div className={styles.grid}>
      {SKILLS.map((skill) => (
        <a
          key={skill.name}
          href={skill.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillItem}
          title={skill.name}
        >
          <skill.Icon size={24} className={styles.icon} aria-hidden="true" />
          <span className={styles.label}>{skill.name}</span>
        </a>
      ))}
    </div>
  );
}
