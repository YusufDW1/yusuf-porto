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
  FaExternalLinkAlt,
} from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import RoleTyper from '../components/RoleTyper';
import TechMarquee from '../components/TechMarquee';
import styles from './page.module.css';

const PROJECTS = [
  {
    title: 'PORTOFOLIO',
    date: '2026',
    role: 'Frontend Developer',
    description:
      'Website portfolio interaktif pribadi yang dirancang dengan performa tinggi, animasi modern, serta fitur deteksi tema otomatis.',
    contributions: [
      'Membangun website portfolio menggunakan Next.js App Router dan React.',
      'Merancang desain sistem kustom dengan OKLCH color space dan CSS Variables.',
      'Mengimplementasikan animasi transisi kustom berkinerja tinggi.',
    ],
    techs: ['Next.js', 'React', 'CSS Modules', 'TypeScript'],
    accent: '#e040fb',
    Icon: SiReact,
    github: 'https://github.com/YusufDW1/yusuf-porto.git',
    live: 'https://yusuf-porto.vercel.app/',
  },
  {
    title: 'TAKSI KILAT 3D',
    date: '2026',
    role: 'Game Designer & Game Programmer',
    description:
      'Game casual driving 3D low-poly berbasis time-attack simulasi mengemudi taksi di mana pemain berpacu dengan waktu untuk menjemput dan mengantarkan penumpang di area perkotaan sebelum waktu habis.',
    contributions: [
      'Memprogram fisika suspensi AWD (All-Wheel Drive) dan logika pengereman cerdas (Smart Braking) taksi.',
      'Mendesain sistem navigasi panah 3D dinamis yang menunjuk ke arah koordinat zona jemput dan antar.',
      'Mengimplementasikan UI Panel Struk Kertas Kasir real-time untuk rincian detail tarif pendapatan.',
    ],
    techs: ['Unity', 'C#', '3D Low-Poly', 'Physics'],
    accent: '#ffd54f',
    Icon: SiUnity,
    github: 'https://github.com/YusufDW1/Taksi-Kilat-3D.git',
  },
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
    accent: '#4dd0e1',
    Icon: SiReact,
    github: 'https://github.com/YusufDW1/Seharta.git',
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
    accent: '#b388ff',
    Icon: SiReact,
    github: 'https://github.com/YusufDW1/AmbaLearn.git',
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
    accent: '#69f0ae',
    Icon: SiReact,
    github: 'https://github.com/YusufDW1/MyKonbini.git',
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
    accent: '#ff7043',
    Icon: SiUnity,
    github: '',
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
  const [eduOpen, setEduOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Sync active dot via horizontal center proximity calculation
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const center = slider.scrollLeft + slider.offsetWidth / 2;
      const cards = Array.from(slider.children) as HTMLElement[];
      let closestIdx = 0;
      let minDistance = Infinity;

      cards.forEach((card, idx) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - center);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      });
      setActiveIdx(closestIdx);
    };

    slider.addEventListener('scroll', handleScroll, { passive: true });
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const slider = sliderRef.current;
    const card = slider?.children[index] as HTMLElement | undefined;
    if (!slider || !card) return;

    const start = slider.scrollLeft;
    const target = card.offsetLeft - slider.offsetWidth / 2 + card.offsetWidth / 2;
    const startTime = performance.now();
    const duration = 300;

    slider.style.scrollSnapType = 'none';

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      slider.scrollLeft = start + (target - start) * ease;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        slider.style.scrollSnapType = 'x mandatory';
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <div className={styles.page}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>
      <Navbar />

      <main id="main-content" className={styles.mainContent}>
        {/* ═══════ HERO (merged with About) ═══════ */}
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
              Hello, World! Saya <strong>Yusuf Dwi Saputra</strong>.
            </p>
            <p>
              Saya seorang Web, Mobile, dan Game Developer asal Tegal, Indonesia. Singkatnya, saya suka mengeksplorasi dunia rekayasa perangkat lunak—mulai dari merancang aplikasi mobile yang mulus, membangun web modern, sampai merakit dunia game yang interaktif.
            </p>
            <p>
              Di lini web dan mobile, saya biasa bermain dengan React, Next.js, Flutter (GetX), React Native, serta Laravel untuk pengembangan sisi backend. Sementara untuk urusan game, Unity dan C# adalah andalan saya. Bagi saya, coding bukan cuma soal baris kode, tapi tentang bagaimana mengubah ide kreatif menjadi produk digital yang hidup dan solutif.
            </p>
          </div>

          <div className={styles.heroMeta}>
            <div className={styles.metaItem}>
              <FaMapMarkerAlt size={14} aria-hidden="true" />
              <span>Tegal, Indonesia</span>
            </div>
            <div className={styles.metaItem}>
              <FaCode size={14} aria-hidden="true" />
              <span>Frontend &amp; Game Developer</span>
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
                onClick={() => scrollToCard(Math.max(0, activeIdx - 1))}
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                className={styles.navBtn}
                onClick={() => scrollToCard(Math.min(PROJECTS.length - 1, activeIdx + 1))}
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
                  <div
                    className={styles.projectIconWrap}
                    style={{
                      color: project.accent,
                      background: `${project.accent}1a`,
                    }}
                  >
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

                  <div className={styles.projectActions}>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectBtn}
                      >
                        <FaGithub size={14} aria-hidden="true" />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <button
                        disabled
                        className={`${styles.projectBtn} ${styles.projectBtnDisabled}`}
                      >
                        <FaGithub size={14} aria-hidden="true" />
                        <span>Source Code</span>
                      </button>
                    )}

                    {'live' in project && project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectBtn}
                        style={{
                          borderColor: project.accent,
                          color: project.accent,
                        }}
                      >
                        <FaExternalLinkAlt size={12} aria-hidden="true" />
                        <span>Live Preview</span>
                      </a>
                    )}
                  </div>

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
          <div
            className={styles.stageNav}
            role="tablist"
            aria-label="Project navigation"
          >
            {PROJECTS.map((p, index) => (
              <button
                key={index}
                className={`${styles.stageDot} ${activeIdx === index ? styles.stageDotActive : ''}`}
                onClick={() => scrollToCard(index)}
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
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className={`${styles.eduItem} ${eduOpen ? styles.eduOpen : ''}`}
              >
                <button
                  className={styles.eduSummary}
                  onClick={() => setEduOpen((prev) => !prev)}
                  aria-expanded={eduOpen}
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
            ))}
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
          <div className={styles.footerLinks}>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <link.Icon size={16} aria-hidden="true" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
          <p className={styles.footerText}>
            © 2026 Yusuf Dwi Saputra. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}