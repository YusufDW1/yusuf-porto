'use client';

import Image from 'next/image';
import styles from './PixelAvatar.module.css';

export default function PixelAvatar() {
  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatarRing}>
        <Image
          src="/profile.jpg"
          alt="Yusuf Dwi Saputra"
          width={160}
          height={160}
          className={styles.profileImage}
          priority
        />
      </div>
    </div>
  );
}
