'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PixelAvatar from '../components/PixelAvatar';
import { SiUnity, SiReact } from 'react-icons/si';
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCode,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
} from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import RoleTyper from '../components/RoleTyper';
import TechMarquee from '../components/TechMarquee';
import styles from './page.module.css';

const PROJECTS = [
  {
    title: 'SEHARTA',
    date: '2026',
    role: 'Mobile Frontend Developer',
    description:
      'Aplikasi manajemen aset kolaboratif untuk pasangan (Joint Finance & Asset Management) yang mengintegrasikan kecerdasan buatan untuk otomatisasi pencatatan keuangan.',
    contributions: [
      'Mengembangkan aplikasi manajemen aset kolaboratif untuk pasangan menggunakan Flutter dan GetX.',
      'Merancang basis data relasional yang dimodelkan khusus untuk pelacakan akun bersama.',
      'Mengintegrasikan Computer Vision (OCR) untuk otomatisasi pencatatan transaksi via pemindaian struk belanja.',
    ],
    techs: ['Flutter', 'Dart', 'GetX', 'OCR', 'SQLite', 'FastAPI'],
    color: 'var(--accent)',
    Icon: SiReact,
  },
  {
    title: 'AMBALEARN',
    date: '2025',
    role: 'Mobile Frontend Developer',
    description:
      'Sistem Belajar Otomatis Berbasis AI (LMS) yang menyajikan materi dinamis dari fine-tuned LLM dan pipeline RAG secara real-time. Berhasil memenangkan Juara 1 Lomba Krenova Kabupaten Tegal 2026.',
    contributions: [
      'Membangun antarmuka aplikasi Learning Management System (LMS) otomatis menggunakan Flutter dan Dart.',
      'Mengonsumsi RESTful API untuk menyajikan materi dinamis dari fine-tuned LLM dan pipeline RAG secara real-time.',
      'Membuat komponen UI responsif untuk fitur cheating detection berbasis kamera menggunakan MediaPipe.',
    ],
    techs: ['Flutter', 'Dart', 'REST API', 'Flask', 'MediaPipe', 'MySQL'],
    color: 'var(--accent)',
    Icon: SiReact,
  },
  {
    title: 'MY KONBINI',
    date: '2025',
    role: 'Mobile Frontend Developer',
    description:
      'Sistem Point of Sales (POS) dan manajemen inventaris toko ritel modern berbasis mobile untuk mempermudah efisiensi operasional UMKM secara offline-first.',
    contributions: [
      'Mengembangkan aplikasi POS berbasis React Native untuk mempermudah efisiensi operasional UMKM.',
      'Membangun antarmuka manajemen inventaris dan kasir yang responsif di berbagai ukuran perangkat.',
      'Mengimplementasikan Local Storage untuk penyimpanan data transaksi dan inventaris secara aman dan offline-first.',
    ],
    techs: ['React Native', 'JavaScript', 'Local Storage'],
    color: 'var(--accent)',
    Icon: SiReact,
  },
  {
    title: 'KNIGHT ADVENTURE',
    date: '2025 — 2026',
    role: 'Game Developer',
    description:
      'Game aksi petualangan 2D side-scrolling bertema fantasi abad pertengahan dengan sistem pertarungan pedang dinamis, kecerdasan buatan (AI) musuh, dan mekanik eksplorasi dungeon.',
    contributions: [
      'Memprogram arsitektur state machine untuk pergerakan, kombo serangan, dan komparasi hitbox ksatria.',
      'Mendesain sistem navigasi pathfinding AI untuk variasi musuh dan pertarungan boss.',
      'Mengintegrasikan aset pixel art, tilemap grid, dan sistem efek suara (SFX) dinamis di Unity.',
    ],
    techs: ['Unity', 'C#', 'Aseprite'],
    color: 'var(--accent)',
    Icon: SiUnity,
  },
];

const EDUCATION = [
  {
    institution: 'Universitas Harkat Negeri',
    degree: 'Sarjana Terapan Teknik Informatika (D4)',
    period: '2023 — Sekarang',
    gpa: 'IPK : 3.54 / 4',
    Icon: FaGraduationCap,
  },
];

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    Icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/yusuf-dwi-saputra-0aa929291',
    handle: 'Yusuf Dwi Saputra',
  },
  {
    name: 'GitHub',
    Icon: FaGithub,
    href: 'https://github.com/YusufDW1',
    handle: 'YusufDW1',
  },
];

export default function Home() {
  const [eduOpen, setEduOpen] = useState<{ [key: number]: boolean }>({
    0: false,
  });
  const [activeIdx, setActiveIdx] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const toggleEdu = (idx: number) => {
    setEduOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Sync active dot with scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const slider = sliderRef.current;
        const sliderRect = slider.getBoundingClientRect();
        const sliderCenter = sliderRect.left + sliderRect.width / 2;
        const cards = Array.from(slider.children) as HTMLElement[];

        let closestIdx = 0;
        let minDistance = Infinity;

        cards.forEach((card, i) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distance = Math.abs(cardCenter - sliderCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestIdx = i;
          }
        });
        setActiveIdx(closestIdx);
      }
    };

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('scroll', handleScroll);
    }
    return () => sliderElement?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const cards = Array.from(slider.children) as HTMLElement[];
      if (cards.length === 0) return;

      const sliderRect = slider.getBoundingClientRect();
      const sliderCenter = sliderRect.left + sliderRect.width / 2;

      let currentIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - sliderCenter);
        if (distance < minDistance) {
          minDistance = distance;
          currentIndex = index;
        }
      });

      let targetIndex =
        direction === 'left' ? currentIndex - 1 : currentIndex + 1;
      targetIndex = Math.max(0, Math.min(targetIndex, cards.length - 1));

      if (
        targetIndex === currentIndex &&
        ((direction === 'left' && slider.scrollLeft === 0) ||
          (direction === 'right' &&
            slider.scrollLeft >= slider.scrollWidth - slider.clientWidth))
      ) {
        return;
      }

      const targetCard = cards[targetIndex];
      const targetCardRect = targetCard.getBoundingClientRect();
      const calculatedTarget =
        slider.scrollLeft +
        (targetCardRect.left - sliderRect.left) -
        sliderRect.width / 2 +
        targetCardRect.width / 2;

      const maxScroll = slider.scrollWidth - slider.clientWidth;
      let finalTarget = Math.max(0, Math.min(calculatedTarget, maxScroll));

      if (targetIndex === 0) finalTarget = 0;
      if (targetIndex === cards.length - 1) finalTarget = maxScroll;

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      slider.style.scrollSnapType = 'none';
      slider.style.scrollBehavior = 'auto';

      const start = slider.scrollLeft;
      const dist = finalTarget - start;
      const duration = 300;
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const ease = 1 - Math.pow(1 - progress, 3);
        slider.scrollLeft = start + dist * ease;

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          slider.scrollLeft = finalTarget;
          slider.style.scrollSnapType = 'x mandatory';
          slider.style.scrollBehavior = 'smooth';
          animationFrameRef.current = null;
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

  const scrollToStage = (index: number) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const cards = Array.from(slider.children) as HTMLElement[];
      const targetCard = cards[index];

      if (targetCard) {
        const sliderRect = slider.getBoundingClientRect();
        const targetCardRect = targetCard.getBoundingClientRect();
        const calculatedTarget =
          slider.scrollLeft +
          (targetCardRect.left - sliderRect.left) -
          sliderRect.width / 2 +
          targetCardRect.width / 2;

        const maxScroll = slider.scrollWidth - slider.clientWidth;
        let finalTarget = Math.max(0, Math.min(calculatedTarget, maxScroll));

        if (index === 0) finalTarget = 0;
        if (index === cards.length - 1) finalTarget = maxScroll;

        slider.scrollTo({ left: finalTarget, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={styles.page}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>
      <Navbar />

      <main id="main-content" className={styles.mainContent}>
        {/* ═══════ HERO ═══════ */}
        <section id="hero" className={styles.heroSection}>
          <div className={styles.heroTop}>
            <PixelAvatar />
            <div className={styles.heroInfo}>
              <h1 className={styles.heroName}>Yusuf Dwi Saputra</h1>
              <div className={styles.heroRole}>
                <RoleTyper />
              </div>
            </div>
          </div>

          <div className={styles.heroBio}>
            <p>
              Mobile Frontend & Game Developer dari Tegal, Indonesia. Membangun
              rekayasa perangkat lunak seluler yang imersif dan menciptakan dunia
              game yang pixel-perfect.
            </p>
          </div>

          <div className={styles.heroMeta}>
            <div className={styles.metaItem}>
              <FaMapMarkerAlt size={14} aria-hidden="true" />
              <span>Tegal, Indonesia</span>
            </div>
            <div className={styles.metaItem}>
              <FaCode size={14} aria-hidden="true" />
              <span>Mobile Frontend Developer</span>
            </div>
            <div className={styles.metaItem}>
              <FaEnvelope size={14} aria-hidden="true" />
              <a href="mailto:yusufdwi456@gmail.com">yusufdwi456@gmail.com</a>
            </div>
            <div className={styles.metaItem}>
              <FaPhone size={14} aria-hidden="true" />
              <a href="tel:+6282136563381">+62 821 3656 3381</a>
            </div>
          </div>

          <div className={styles.socialLinks}>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <link.Icon size={18} aria-hidden="true" />
                <span>{link.handle}</span>
                <FaArrowRight size={12} className={styles.socialArrow} />
              </a>
            ))}
          </div>
        </section>

        {/* ═══════ ABOUT ═══════ */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionHeading}>About</h2>
          <div className={styles.prose}>
            <p>
              Hello, World! Saya <strong>Yusuf Dwi Saputra</strong> — seorang
              Mobile Frontend &amp; Game Developer dari Tegal, Indonesia. Saya
              suka membangun rekayasa perangkat lunak seluler yang imersif dan
              menciptakan dunia game yang pixel-perfect.
            </p>
            <p>
              Dengan pengalaman di teknologi mobile seperti Flutter, GetX, dan
              React Native, dikombinasikan dengan kemampuan game development di
              Unity dan C#, saya siap menjembatani ide kreatif ke dalam produk
              digital interaktif.
            </p>
          </div>
        </section>

        {/* ═══════ SKILLS ═══════ */}
        <section id="skills" className={styles.section}>
          <h2 className={styles.sectionHeading}>Skills</h2>
          <TechMarquee />
        </section>

        {/* ═══════ PROJECTS ═══════ */}
        <section id="projects" className={styles.section}>
          <div className={styles.sectionHeaderRow}>
            <h2 className={styles.sectionHeading} style={{ marginBottom: 0 }}>
              Projects{' '}
              <span className={styles.sectionCount}>({PROJECTS.length})</span>
            </h2>
            <div className={styles.sliderNav}>
              <button
                className={styles.navBtn}
                onClick={() => scrollSlider('left')}
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                className={styles.navBtn}
                onClick={() => scrollSlider('right')}
                aria-label="Next project"
              >
                →
              </button>
            </div>
          </div>

          <div ref={sliderRef} className={styles.projectSlider}>
            {PROJECTS.map((project) => (
              <article key={project.title} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectIconWrap}>
                    <project.Icon size={20} aria-hidden="true" />
                  </div>
                  <div className={styles.projectMeta}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span className={styles.projectDate}>{project.date}</span>
                  </div>
                </div>

                <div className={styles.projectBody}>
                  <p className={styles.projectRole}>{project.role}</p>
                  <p className={styles.projectDesc}>{project.description}</p>

                  <h4 className={styles.contribTitle}>Kontribusiku:</h4>
                  <ul className={styles.contribList}>
                    {project.contributions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className={styles.projectTechs}>
                    {project.techs.map((tech) => (
                      <span key={tech} className={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Stage dots */}
          <div className={styles.stageNav} role="tablist" aria-label="Project navigation">
            {PROJECTS.map((p, index) => (
              <button
                key={index}
                className={`${styles.stageDot} ${activeIdx === index ? styles.stageDotActive : ''}`}
                onClick={() => scrollToStage(index)}
                aria-label={`Go to ${p.title}`}
                role="tab"
                aria-selected={activeIdx === index}
              />
            ))}
          </div>
        </section>

        {/* ═══════ EDUCATION ═══════ */}
        <section id="education" className={styles.section}>
          <h2 className={styles.sectionHeading}>Education</h2>
          <div className={styles.eduList}>
            {EDUCATION.map((edu, idx) => {
              const isOpen = !!eduOpen[idx];
              return (
                <div
                  key={idx}
                  className={`${styles.eduItem} ${isOpen ? styles.eduOpen : ''}`}
                >
                  <button
                    className={styles.eduSummary}
                    onClick={() => toggleEdu(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`edu-detail-${idx}`}
                  >
                    <div className={styles.eduHeader}>
                      <div className={styles.eduIconWrap}>
                        <edu.Icon size={20} aria-hidden="true" />
                      </div>
                      <div className={styles.eduMeta}>
                        <h3 className={styles.eduInstitution}>
                          {edu.institution}
                        </h3>
                        <span className={styles.eduPeriod}>{edu.period}</span>
                      </div>
                    </div>
                    <span className={styles.eduChevron} aria-hidden="true">
                      ›
                    </span>
                  </button>
                  <div
                    className={styles.eduDetail}
                    id={`edu-detail-${idx}`}
                    role="region"
                  >
                    <div className={styles.eduDetailInner}>
                      <p className={styles.eduDegree}>{edu.degree}</p>
                      <p className={styles.eduGpa}>{edu.gpa}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══════ CONTACT ═══════ */}
        <section id="contact" className={styles.section}>
          <h2 className={styles.sectionHeading}>Contact</h2>
          <div className={styles.contactCard}>
            <ContactForm />
          </div>
        </section>

        {/* ═══════ FOOTER ═══════ */}
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            © 2026 Yusuf Dwi Saputra. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}