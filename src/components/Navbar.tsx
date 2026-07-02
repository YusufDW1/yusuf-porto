'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileOpen(false);

    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      id="main-nav"
      aria-label="Main navigation"
    >
      <div className={styles.navInner}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => handleNavClick(e, '#hero')}
          aria-label="Scroll to top"
        >
          <span className={styles.logoMark}>Y</span>
          <span className={styles.logoDot} />
        </a>

        {/* Desktop links */}
        <div className={`${styles.links} ${mobileOpen ? styles.open : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.link}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            id="theme-toggle"
          >
            <span className={styles.themeIcon}>
              {theme === 'dark' ? '☀' : '☾'}
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
}