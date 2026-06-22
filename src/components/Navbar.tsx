'use client';

import { useTheme } from './ThemeProvider';
import { FaUser, FaBriefcase, FaCode, FaEnvelope } from 'react-icons/fa';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about', Icon: FaUser },
  { label: 'PROJECTS', href: '#projects', Icon: FaBriefcase },
  { label: 'SKILLS', href: '#skills', Icon: FaCode },
  { label: 'CONTACT', href: '#contact', Icon: FaEnvelope },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href === '#hero') {
      // Jika yang diklik adalah logo, paksa scroll ke titik 0 paling atas halaman
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Untuk menu navigasi lainnya, scroll ke elemen kontainer masing-masing
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={styles.nav} id="main-nav">
      <div className={styles.navInner}>
        {/* Logo Ikon Y Pixel Art - Kembali ke Paling Atas */}
        <a
          href="#hero"
          className={styles.logoContainer}
          onClick={(e) => handleNavClick(e, '#hero')}
          aria-label="Scroll to Top"
        >
          <div className={styles.pixelLogoY}>
            <div className={styles.gridPixelY} />
          </div>
        </a>

        {/* Nav Links */}
        <div className={styles.links}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.link}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              <item.Icon size={20} />
              <span className={styles.linkText}>{item.label}</span>
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle Theme"
            id="theme-toggle"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </div>

      {/* Pixel border bottom */}
      <div className={styles.borderBottom} />
    </nav>
  );
}