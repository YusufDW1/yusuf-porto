'use client';

import styles from './PixelAvatar.module.css';

export default function PixelAvatar() {
  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatarFrame}>
        <img
          src="/profile.jpg"
          alt="Yusuf Dwi Saputra"
          className={styles.profileImage}
        />
      </div>
      {/* Floating indicator */}
      <div className={styles.statusIndicator}>
        <span className={styles.statusDot} />
        <span className={styles.statusText}>ONLINE</span>
      </div>
    </div>
  );
}

