'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PixelAvatar from '../components/PixelAvatar';
import { SiUnity, SiReact } from 'react-icons/si';
import { FaGraduationCap, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCode, FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import FloatingPixels from '../components/FloatingPixels';
import RoleTyper from '../components/RoleTyper';
import TechMarquee from '../components/TechMarquee';
import styles from './page.module.css';

const PROJECTS = [
  {
    title: 'SEHARTA',
    date: '2026',
    role: 'Mobile Frontend Developer',
    description: 'Aplikasi manajemen aset kolaboratif untuk pasangan (Joint Finance & Asset Management) yang mengintegrasikan kecerdasan buatan untuk otomatisasi pencatatan keuangan.',
    contributions: [
      'Mengembangkan aplikasi manajemen aset kolaboratif untuk pasangan menggunakan Flutter dan GetX.',
      'Merancang basis data relasional yang dimodelkan khusus untuk pelacakan akun bersama.',
      'Mengintegrasikan Computer Vision (OCR) untuk otomatisasi pencatatan transaksi via pemindaian struk belanja.'
    ],
    techs: ['Flutter', 'Dart', 'GetX', 'OCR', 'SQLite', 'FastAPI'],
    color: 'var(--accent-green)',
    Icon: SiReact,
  },
  {
    title: 'AMBALEARN',
    date: '2025',
    role: 'Mobile Frontend Developer',
    description: 'Sistem Belajar Otomatis Berbasis AI (LMS) yang menyajikan materi dinamis dari fine-tuned LLM dan pipeline RAG secara real-time. Berhasil memenangkan Juara 1 Lomba Krenova Kabupaten Tegal 2026.',
    contributions: [
      'Membangun antarmuka aplikasi Learning Management System (LMS) otomatis menggunakan Flutter dan Dart.',
      'Mengonsumsi RESTful API untuk menyajikan materi dinamis dari fine-tuned LLM dan pipeline RAG secara real-time.',
      'Membuat komponen UI responsif untuk fitur cheating detection berbasis kamera menggunakan MediaPipe.'
    ],
    techs: ['Flutter', 'Dart', 'REST API', 'Flask', 'MediaPipe', 'MySQL'],
    color: 'var(--accent-blue)',
    Icon: SiReact,
  },
  {
    title: 'MY KONBINI',
    date: '2025',
    role: 'Mobile Frontend Developer',
    description: 'Sistem Point of Sales (POS) dan manajemen inventaris toko ritel modern berbasis mobile untuk mempermudah efisiensi operasional UMKM secara offline-first.',
    contributions: [
      'Mengembangkan aplikasi POS berbasis React Native untuk mempermudah efisiensi operasional UMKM.',
      'Membangun antarmuka manajemen inventaris dan kasir yang responsif di berbagai ukuran perangkat.',
      'Mengimplementasikan Local Storage untuk penyimpanan data transaksi dan inventaris secara aman dan offline-first.'
    ],
    techs: ['React Native', 'JavaScript', 'Local Storage'],
    color: 'var(--accent-gold)',
    Icon: SiReact,
  },
  {
    title: 'KNIGHT ADVENTURE',
    date: '2025 — 2026',
    role: 'Game Developer',
    description: 'Game aksi petualangan 2D side-scrolling bertema fantasi abad pertengahan dengan sistem pertarungan pedang dinamis, kecerdasan buatan (AI) musuh, dan mekanik eksplorasi dungeon.',
    contributions: [
      'Memprogram arsitektur state machine untuk pergerakan, kombo serangan, dan komparasi hitbox ksatria.',
      'Mendesain sistem navigasi pathfinding AI untuk variasi musuh dan pertarungan boss.',
      'Mengintegrasikan aset pixel art, tilemap grid, dan sistem efek suara (SFX) dinamis di Unity.'
    ],
    techs: ['Unity', 'C#', 'Aseprite'],
    color: 'var(--accent-red)',
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
  }
];

const SOCIAL_LINKS = [
  { name: 'LinkedIn', Icon: FaLinkedin, href: 'https://www.linkedin.com/in/yusuf-dwi-saputra-0aa929291', handle: 'Yusuf Dwi Saputra' },
  { name: 'GitHub', Icon: FaGithub, href: 'https://github.com/YusufDW1', handle: 'YusufDW1' },
];

export default function Home() {
  const [eduOpen, setEduOpen] = useState<{ [key: number]: boolean }>({ 0: false });
  const [activeIdx, setActiveIdx] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const toggleEdu = (idx: number) => {
    setEduOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Sinkronisasi otomatis titik stage di bawah slider saat digeser manual oleh user
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const slider = sliderRef.current;
        const sliderRect = slider.getBoundingClientRect();
        const sliderCenter = sliderRect.left + (sliderRect.width / 2);
        const cards = Array.from(slider.children) as HTMLElement[];

        let closestIdx = 0;
        let minDistance = Infinity;

        cards.forEach((card, i) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + (cardRect.width / 2);
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

      // 1. Cari tahu card mana yang saat ini paling terlihat di area view slider
      const sliderRect = slider.getBoundingClientRect();
      const sliderCenter = sliderRect.left + (sliderRect.width / 2);

      let currentIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + (cardRect.width / 2);
        const distance = Math.abs(cardCenter - sliderCenter);
        if (distance < minDistance) {
          minDistance = distance;
          currentIndex = index;
        }
      });

      // 2. Tentukan target index secara pasti
      let targetIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;

      // Validasi boundary agar tidak out of bounds
      targetIndex = Math.max(0, Math.min(targetIndex, cards.length - 1));

      // Jika sudah di ujung dan dipaksa klik lagi, hentikan proses
      if (targetIndex === currentIndex && ((direction === 'left' && slider.scrollLeft === 0) ||
        (direction === 'right' && slider.scrollLeft >= slider.scrollWidth - slider.clientWidth))) {
        return;
      }

      const targetCard = cards[targetIndex];

      // 3. HITUNG TARGET SCROLL SECARA AKURAT
      const targetCardRect = targetCard.getBoundingClientRect();
      const calculatedTarget = slider.scrollLeft + (targetCardRect.left - sliderRect.left) - (sliderRect.width / 2) + (targetCardRect.width / 2);

      // Clamp nilainya secara aman sesuai batasan scroll box
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      let finalTarget = Math.max(0, Math.min(calculatedTarget, maxScroll));

      // OVERRIDE KHUSUS: Paksa ke ujung absolut untuk menghindari error sub-pixel elemen pertama/terakhir
      if (targetIndex === 0) finalTarget = 0;
      if (targetIndex === cards.length - 1) finalTarget = maxScroll;

      // 4. Jalankan animasi kustom ease-out cubic tanpa jitter
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      slider.style.scrollSnapType = 'none';
      slider.style.scrollBehavior = 'auto';

      const start = slider.scrollLeft;
      const dist = finalTarget - start;
      const duration = 300; // Snappy 300ms
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Animasi kustom dengan efek easing cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        slider.scrollLeft = start + dist * ease;

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Kunci posisi akhir sebelum mengembalikan CSS Snap box
          slider.scrollLeft = finalTarget;
          slider.style.scrollSnapType = 'x mandatory';
          slider.style.scrollBehavior = 'smooth';
          animationFrameRef.current = null;
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

  // Navigasi langsung ketika salah satu stage dot di klik
  const scrollToStage = (index: number) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const cards = Array.from(slider.children) as HTMLElement[];
      const targetCard = cards[index];

      if (targetCard) {
        const sliderRect = slider.getBoundingClientRect();
        const targetCardRect = targetCard.getBoundingClientRect();
        const calculatedTarget = slider.scrollLeft + (targetCardRect.left - sliderRect.left) - (sliderRect.width / 2) + (targetCardRect.width / 2);

        const maxScroll = slider.scrollWidth - slider.clientWidth;
        let finalTarget = Math.max(0, Math.min(calculatedTarget, maxScroll));

        if (index === 0) finalTarget = 0;
        if (index === cards.length - 1) finalTarget = maxScroll;

        // Picu jalurnya menggunakan scroll native agar selaras dengan scroll-snap
        slider.scrollTo({ left: finalTarget, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={styles.page}>
      <FloatingPixels />
      <Navbar />

      <div className={styles.mainContent}>
        {/* ═══════ PROFILE CARD (Hero) ═══════ */}
        <section id="hero" className={styles.profileSection}>
          <div className={styles.banner}>
            <div className={styles.bannerPattern} />
          </div>

          <div className={styles.avatarWrapper}>
            <PixelAvatar />
          </div>

          <div className={styles.profileInfo}>
            <h1 className={styles.profileName}>Yusuf Dwi Saputra</h1>
            <div className={styles.profileRole}>
              <RoleTyper />
            </div>
          </div>

          <div className={styles.quickInfo}>
            <div className={styles.quickItem}>
              <FaCode size={20} />
              <span>Mobile Frontend Developer</span>
            </div>
            <div className={styles.quickItem}>
              <FaMapMarkerAlt size={20} />
              <span>Tegal, Indonesia</span>
            </div>
            <div className={styles.quickItem}>
              <FaPhone size={20} />
              <span>+62 821 3656 3381</span>
            </div>
            <div className={styles.quickItem}>
              <FaEnvelope size={20} />
              <span>yusufdwi456@gmail.com</span>
            </div>
          </div>

          <div className={styles.socialRow}>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBadge}
              >
                <link.Icon size={24} />
                <div className={styles.socialBadgeText}>
                  <span className={styles.socialBadgeName}>{link.name}</span>
                  <span className={styles.socialBadgeHandle}>{link.handle}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        {/* ═══════ ABOUT ═══════ */}
        <section id="about" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>About</h2>
          <div className={styles.aboutContent}>
            <p>
              Hello, World! Saya <strong>Yusuf Dwi Saputra</strong> — seorang Mobile Frontend &amp; Game Developer
              dari Tegal, Indonesia. Saya suka membangun rekayasa perangkat lunak seluler yang imersif dan menciptakan
              dunia game yang pixel-perfect.
            </p>
            <p>
              Dengan pengalaman di teknologi mobile seperti Flutter, GetX, dan React Native,
              dikombinasikan dengan kemampuan game development di Unity dan C#,
              saya siap menjembatani ide kreatif ke dalam produk digital interaktif.
            </p>
          </div>
        </section>

        <div className={styles.divider} />

        {/* ═══════ STACK ═══════ */}
        <section id="skills" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>Stack</h2>
          <TechMarquee />
        </section>

        <div className={styles.divider} />

        {/* ═══════ EDUCATION ═══════ */}
        <section id="education" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>Education</h2>
          <div className={styles.projectsList}>
            {EDUCATION.map((edu, idx) => {
              const isOpen = !!eduOpen[idx];
              return (
                <div key={idx} className={`${styles.pixelDropdown} ${isOpen ? styles.open : ''}`}>
                  <div
                    className={styles.dropdownSummary}
                    onClick={() => toggleEdu(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleEdu(idx); } }}
                  >
                    <div className={styles.projectHeader} style={{ marginBottom: 0 }}>
                      <div className={styles.projectIcon}>
                        <edu.Icon size={24} />
                      </div>
                      <div className={styles.projectMeta}>
                        <h3 className={styles.projectTitle}>{edu.institution}</h3>
                        <span className={styles.projectDate}>{edu.period}</span>
                      </div>
                    </div>
                    <span className={styles.dropdownIcon}>▶</span>
                  </div>
                  <div className={styles.dropdownContent}>
                    <div className={styles.dropdownInnerContent}>
                      <p className={styles.projectRole} style={{ paddingLeft: 0 }}>{edu.degree}</p>
                      <p className={styles.projectDesc} style={{ paddingLeft: 0, margin: 0 }}>{edu.gpa}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className={styles.divider} />

        {/* ═══════ PROJECTS SLIDER ═══════ */}
        <section id="projects" className={styles.contentSection}>
          <div className={styles.sectionHeaderRow}>
            <h2 className={styles.sectionHeading} style={{ marginBottom: 0 }}>
              Projects <span className={styles.sectionCount}>({PROJECTS.length})</span>
            </h2>
            <div className={styles.sliderNav}>
              <button
                className={styles.navButton}
                onClick={() => scrollSlider('left')}
                aria-label="Scroll left"
              >
                ◀
              </button>
              <button
                className={styles.navButton}
                onClick={() => scrollSlider('right')}
                aria-label="Scroll right"
              >
                ▶
              </button>
            </div>
          </div>

          <div ref={sliderRef} className={styles.projectSlider}>
            {PROJECTS.map((project) => (
              <div key={project.title} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectIcon}>
                    <project.Icon size={24} />
                  </div>
                  <div className={styles.projectMeta}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span className={styles.projectDate}>{project.date}</span>
                  </div>
                </div>
                <div className={styles.dropdownContent}>
                  <p className={styles.projectRole} style={{ paddingLeft: 0 }}>{project.role}</p>
                  <p className={styles.projectDesc} style={{ paddingLeft: 0 }}>{project.description}</p>
                  <h4 className={styles.contributionsTitle}>Kontribusiku:</h4>
                  <ul className={styles.contributionsList}>
                    {project.contributions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className={styles.projectTechs} style={{ paddingLeft: 0, marginTop: 'auto' }}>
                    {project.techs.map((tech) => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* INDIKATOR STAGE GAME PIXEL */}
          <div className={styles.stageTimeline}>
            <div className={styles.stageLine} />
            <div className={styles.stageDotsContainer}>
              {PROJECTS.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.stageDot} ${activeIdx === index ? styles.stageDotActive : ''}`}
                  title={`Go to Stage ${index + 1}`}
                  onClick={() => scrollToStage(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <div className={styles.divider} />

        {/* ═══════ CONTACT ═══════ */}
        <section id="contact" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>Contact</h2>
          <div className={`pixel-border ${styles.contactPanel}`}>
            <ContactForm />
          </div>
        </section>

        {/* ═══════ FOOTER ═══════ */}
        <footer className={styles.footer}>
          <div className={styles.footerCopy}>
            © 2026 YUSUF DWI SAPUTRA. ALL RIGHTS RESERVED.
          </div>
          <div className={styles.footerDecor}>
            ◆ ◆ ◆ ◆ ◆ ◆ ◆
          </div>
        </footer>
      </div>
    </div>
  );
}