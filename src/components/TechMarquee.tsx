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
  SiLaravel,
  SiFastapi,
  SiMysql,
  SiSqlite,
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import styles from './TechMarquee.module.css';

interface Skill {
  name: string;
  Icon: React.ElementType;
  url: string;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

const GROUPS: SkillGroup[] = [
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'React', Icon: FaReact, url: 'https://react.dev/' },
      { name: 'Next.js', Icon: SiNextdotjs, url: 'https://nextjs.org/' },
      { name: 'React Native', Icon: FaReact, url: 'https://reactnative.dev/' },
      { name: 'Flutter', Icon: SiFlutter, url: 'https://flutter.dev/' },
      { name: 'Dart', Icon: SiDart, url: 'https://dart.dev/' },
      { name: 'Tailwind', Icon: SiTailwindcss, url: 'https://tailwindcss.com/' },
      { name: 'JavaScript', Icon: FaJs, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'HTML5', Icon: FaHtml5, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS3', Icon: FaCss3Alt, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'Figma', Icon: SiFigma, url: 'https://www.figma.com/' },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Laravel', Icon: SiLaravel, url: 'https://laravel.com/' },
      { name: 'FastAPI', Icon: SiFastapi, url: 'https://fastapi.tiangolo.com/' },
      { name: 'MySQL', Icon: SiMysql, url: 'https://www.mysql.com/' },
      { name: 'SQLite', Icon: SiSqlite, url: 'https://www.sqlite.org/' },
      { name: 'Git', Icon: FaGitAlt, url: 'https://git-scm.com/' },
    ],
  },
  {
    title: 'Game Development',
    skills: [
      { name: 'Unity', Icon: SiUnity, url: 'https://unity.com/' },
      { name: 'C#', Icon: TbBrandCSharp, url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
      { name: 'Aseprite', Icon: SiAseprite, url: 'https://www.aseprite.org/' },
    ],
  },
];

export default function TechMarquee() {
  return (
    <div className={styles.container}>
      {GROUPS.map((group) => (
        <div key={group.title} className={styles.group}>
          <h3 className={styles.groupTitle}>{group.title}</h3>
          <div className={styles.grid}>
            {group.skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.skillItem}
                title={skill.name}
              >
                <skill.Icon size={20} className={styles.icon} aria-hidden="true" />
                <span className={styles.label}>{skill.name}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
