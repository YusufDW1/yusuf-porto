'use client';

import { useTheme } from './ThemeProvider';
import PixelIcon from './PixelIcon';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about', icon: 'about' },
  { label: 'PROJECTS', href: '#projects', icon: 'projects' },
  { label: 'SKILLS', href: '#skills', icon: 'skills' },
  { label: 'CONTACT', href: '#contact', icon: 'contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.nav} id="main-nav">
      <div className={styles.navInner}>
        {/* Logo / Name */}
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => handleNavClick(e, '#hero')}
        >
          <span className={styles.logoMain}>YUSUF DWI SAPUTRA</span>
          <span className={styles.logoSub}>FRONTEND & GAME DEVELOPER</span>
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
              <PixelIcon name={item.icon} scale={2} />
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
