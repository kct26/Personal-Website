'use client';

import { useState } from 'react';
import { hero } from '@/data/content';
import styles from './Hero.module.css';

export default function HeroPhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className={styles.photoWrap}>
      {/* decorative shape, sits behind the device frame and peeks out
          around its edges — purely visual, no content */}
      <div className={styles.photoShape} aria-hidden="true" />

      {/* data-nav-dark: the only dark surface left in the hero now that
          the full-bleed background photo is gone — this is what flips
          the nav to light-on-dark text while it scrolls over the frame */}
      <div className={styles.photoFrame} data-nav-dark>
        {!failed && (
          // eslint-disable-next-line @next/next/no-img-element -- plain
          // <img> on purpose: the photo may not exist yet, and next/image
          // would error at build time on a missing/arbitrary user file
          <img
            src="/profile.jpg"
            alt={hero.name}
            className={styles.photo}
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}
