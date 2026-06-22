'use client';

import styles from './PixelScene.module.css';

/*
 * Pixel Art Scene: Developer at desk with multiple monitors
 * Built with positioned CSS divs for a retro workstation scene
 */

export default function PixelScene() {
  return (
    <div className={styles.scene}>
      {/* Desk */}
      <div className={styles.desk} />
      <div className={styles.deskLeg1} />
      <div className={styles.deskLeg2} />

      {/* Monitor 1 (left) */}
      <div className={styles.monitor1}>
        <div className={styles.monitorScreen}>
          <div className={styles.codeLine} style={{ width: '60%', top: '15%' }} />
          <div className={styles.codeLine} style={{ width: '80%', top: '30%', background: 'var(--accent-green)' }} />
          <div className={styles.codeLine} style={{ width: '45%', top: '45%' }} />
          <div className={styles.codeLine} style={{ width: '70%', top: '60%', background: 'var(--accent-gold)' }} />
          <div className={styles.codeLine} style={{ width: '55%', top: '75%' }} />
        </div>
        <div className={styles.monitorStand} />
      </div>

      {/* Monitor 2 (center, main) */}
      <div className={styles.monitor2}>
        <div className={styles.monitorScreen}>
          <div className={styles.codeLineAlt} style={{ width: '50%', top: '10%' }} />
          <div className={styles.codeLineAlt} style={{ width: '90%', top: '25%', background: 'var(--accent-blue)' }} />
          <div className={styles.codeLineAlt} style={{ width: '65%', top: '40%' }} />
          <div className={styles.codeLineAlt} style={{ width: '40%', top: '55%', background: '#e44d26' }} />
          <div className={styles.codeLineAlt} style={{ width: '75%', top: '70%' }} />
          <div className={styles.codeLineAlt} style={{ width: '55%', top: '85%', background: 'var(--accent-green)' }} />
        </div>
        <div className={styles.monitorStand} />
      </div>

      {/* Monitor 3 (right) */}
      <div className={styles.monitor3}>
        <div className={styles.monitorScreen}>
          {/* Game preview */}
          <div className={styles.gamePreview}>
            <div className={styles.gameSky} />
            <div className={styles.gameGround} />
            <div className={styles.gameCharacter} />
          </div>
        </div>
        <div className={styles.monitorStand} />
      </div>

      {/* Keyboard */}
      <div className={styles.keyboard}>
        <div className={styles.keyRow}>
          {[...Array(10)].map((_, i) => (
            <div key={i} className={styles.key} />
          ))}
        </div>
        <div className={styles.keyRow}>
          {[...Array(9)].map((_, i) => (
            <div key={i} className={styles.key} />
          ))}
        </div>
        <div className={styles.keyRow}>
          <div className={`${styles.key} ${styles.spaceBar}`} />
        </div>
      </div>

      {/* Mouse */}
      <div className={styles.mouse} />

      {/* Coffee mug */}
      <div className={styles.mug}>
        <div className={styles.mugHandle} />
        <div className={styles.steam1} />
        <div className={styles.steam2} />
      </div>

      {/* Small plant */}
      <div className={styles.plant}>
        <div className={styles.plantLeaf1} />
        <div className={styles.plantLeaf2} />
        <div className={styles.plantLeaf3} />
        <div className={styles.plantPot} />
      </div>
    </div>
  );
}
