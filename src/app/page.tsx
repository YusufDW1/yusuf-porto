import Navbar from '../components/Navbar';
import PixelAvatar from '../components/PixelAvatar';
import PixelScene from '../components/PixelScene';
import PixelIcon from '../components/PixelIcon';
import ContactForm from '../components/ContactForm';
import FloatingPixels from '../components/FloatingPixels';
import RoleTyper from '../components/RoleTyper';
import TechMarquee from '../components/TechMarquee';
import styles from './page.module.css';

const PROJECTS = [
  {
    title: 'RETRO ADVENTURE',
    date: '2024',
    role: 'Game Developer',
    description: 'A classic 2D pixel art adventure game with exploration, puzzles, and retro gameplay mechanics. Built from scratch with custom sprite engine.',
    contributions: [
      'Memprogram core player movement dan physics',
      'Mendesain level dan mekanisme puzzle',
      'Mengembangkan custom sprite animation system'
    ],
    techs: ['Unity', 'C#', 'Aseprite'],
    color: 'var(--accent-green)',
    icon: 'unity',
  },
  {
    title: 'AMBALEARN',
    date: '2023',
    role: 'Frontend Developer',
    description: 'Aplikasi edukasi pemenang Juara 1 Lomba Krenova Kabupaten Tegal.',
    contributions: [
      'Mengembangkan antarmuka pengguna interaktif',
      'Integrasi API backend edukasi',
      'Memastikan responsivitas tampilan web'
    ],
    techs: ['React', 'Next.js', 'CSS'],
    color: 'var(--accent-blue)',
    icon: 'react',
  },
  {
    title: 'PIXEL WEBSITES',
    date: '2024',
    role: 'Frontend Developer',
    description: 'Collection of modern web experiences with pixel art aesthetics and smooth interactions. Responsive, performant, and beautifully crafted.',
    contributions: [
      'Merancang design system pixel art dengan CSS murni',
      'Mengimplementasikan animasi interaktif dan transisi yang mulus',
      'Membangun komponen React yang dapat digunakan ulang'
    ],
    techs: ['React', 'Next.js', 'CSS'],
    color: 'var(--accent-blue)',
    icon: 'react',
  },
  {
    title: 'GAME DEV TOOLKIT',
    date: '2023 — ∞',
    role: 'Open Source Maintainer',
    description: 'Open-source tools and utilities for indie game developers. Level editors, sprite tools, and asset pipelines.',
    contributions: [
      'Membangun level editor berbasis web',
      'Mengembangkan alat kompresi sprite',
      'Mengelola kontribusi open source'
    ],
    techs: ['Unity', 'C#', 'React'],
    color: 'var(--accent-gold)',
    icon: 'csharp',
  },
];

const EDUCATION = [
  {
    institution: 'Universitas Harkat Negeri',
    degree: 'Sarjana Terapan Teknik Informatika (D4)',
    period: '2023 — Sekarang',
    gpa: 'IPK / GPA: [Masukkan IPK Anda, misal: 3.80]',
    icon: 'about',
  }
];

const SKILLS = [
  { name: 'HTML5', icon: 'html' },
  { name: 'CSS3', icon: 'css' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'React', icon: 'react' },
  { name: 'Unity', icon: 'unity' },
  { name: 'C#', icon: 'csharp' },
  { name: 'Aseprite', icon: 'aseprite' },
];

const SOCIAL_LINKS = [
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/yusuf-dwi-saputra-0aa929291', handle: 'Yusuf Dwi Saputra' },
  { name: 'GitHub', icon: 'github', href: 'https://github.com/YusufDW1', handle: 'YusufDW1' },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <FloatingPixels />
      <Navbar />

      <div className={styles.mainContent}>
        {/* ═══════ PROFILE CARD (Hero) ═══════ */}
        <section id="hero" className={styles.profileSection}>
          {/* Banner area */}
          <div className={styles.banner}>
            <div className={styles.bannerPattern} />
          </div>

          {/* Avatar overlapping banner */}
          <div className={styles.avatarWrapper}>
            <PixelAvatar />
          </div>

          {/* Name & Role */}
          <div className={styles.profileInfo}>
            <h1 className={styles.profileName}>Yusuf Dwi Saputra</h1>
            <div className={styles.profileRole}>
              <RoleTyper />
            </div>
          </div>

          {/* Quick contact info */}
          <div className={styles.quickInfo}>
            <div className={styles.quickItem}>
              <PixelIcon name="skills" scale={2} />
              <span>Frontend & Game Developer</span>
            </div>
            <div className={styles.quickItem}>
              <PixelIcon name="location" scale={2} />
              <span>Tegal, Indonesia</span>
            </div>
            <div className={styles.quickItem}>
              <PixelIcon name="phone" scale={2} />
              <span>+62 821 3656 3381</span>
            </div>
            <div className={styles.quickItem}>
              <PixelIcon name="email" scale={2} />
              <span>yusufdwi456@gmail.com</span>
            </div>
          </div>

          {/* Social links */}
          <div className={styles.socialRow}>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBadge}
              >
                <PixelIcon name={link.icon} scale={3} />
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
              Hello, World! Saya <strong>Yusuf Dwi Saputra</strong> — seorang Frontend &amp; Game Developer
              dari Tegal, Indonesia. Saya suka membangun pengalaman web yang imersif dan menciptakan
              dunia game yang pixel-perfect.
            </p>
            <p>
              Dengan pengalaman di teknologi web modern seperti React dan Next.js,
              dikombinasikan dengan kemampuan game development di Unity dan C#,
              saya menjembatani dunia web dan gaming.
            </p>
            <p>
              Saat tidak coding, saya biasanya mendesain pixel art di Aseprite,
              menjelajahi game indie, atau bereksperimen dengan mekanik game baru.
              Selalu belajar, selalu membangun. Mari terhubung dan berkolaborasi!
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

        {/* ═══════ WORKSPACE ═══════ */}
        <section className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>Workspace</h2>
          <div className={`pixel-border ${styles.workspacePanel}`}>
            <PixelScene />
          </div>
        </section>

        <div className={styles.divider} />

        {/* ═══════ EDUCATION ═══════ */}
        <section id="education" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>Education</h2>
          <div className={styles.projectsList}>
            {EDUCATION.map((edu, idx) => (
              <details key={idx} className={styles.pixelDropdown}>
                <summary className={styles.dropdownSummary}>
                  <div className={styles.projectHeader} style={{ marginBottom: 0 }}>
                    <div className={styles.projectIcon}>
                      <PixelIcon name={edu.icon} scale={3} />
                    </div>
                    <div className={styles.projectMeta}>
                      <h3 className={styles.projectTitle}>{edu.institution}</h3>
                      <span className={styles.projectDate}>{edu.period}</span>
                    </div>
                  </div>
                  <span className={styles.dropdownIcon}>▶</span>
                </summary>
                <div className={styles.dropdownContent}>
                  <p className={styles.projectRole} style={{ paddingLeft: 0 }}>{edu.degree}</p>
                  <p className={styles.projectDesc} style={{ paddingLeft: 0, margin: 0 }}>{edu.gpa}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        {/* ═══════ PROJECTS ═══════ */}
        <section id="projects" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>
            Projects <span className={styles.sectionCount}>({PROJECTS.length})</span>
          </h2>

          <div className={styles.projectsList}>
            {PROJECTS.map((project) => (
              <details key={project.title} className={styles.pixelDropdown}>
                <summary className={styles.dropdownSummary}>
                  <div className={styles.projectHeader} style={{ marginBottom: 0 }}>
                    <div className={styles.projectIcon}>
                      <PixelIcon name={project.icon} scale={3} />
                    </div>
                    <div className={styles.projectMeta}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <span className={styles.projectDate}>{project.date}</span>
                    </div>
                  </div>
                  <span className={styles.dropdownIcon}>▶</span>
                </summary>
                <div className={styles.dropdownContent}>
                  <p className={styles.projectRole} style={{ paddingLeft: 0 }}>{project.role}</p>
                  <p className={styles.projectDesc} style={{ paddingLeft: 0 }}>{project.description}</p>
                  <h4 className={styles.contributionsTitle}>Kontribusiku:</h4>
                  <ul className={styles.contributionsList}>
                    {project.contributions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className={styles.projectTechs} style={{ paddingLeft: 0, marginTop: 16 }}>
                    {project.techs.map((tech) => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </details>
            ))}
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
            © 2024 YUSUF DWI SAPUTRA. ALL RIGHTS RESERVED.
          </div>
          <div className={styles.footerDecor}>
            ◆ ◆ ◆ ◆ ◆ ◆ ◆
          </div>
        </footer>
      </div>
    </div>
  );
}
