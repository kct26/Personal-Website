'use client';

import { useEffect, useRef, useState } from 'react';
import { hero } from '@/data/content';
import styles from './Hero.module.css';

export default function HeroPhoto() {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // The browser can finish failing to load an <img> present in the
    // server-rendered HTML before React hydrates and attaches onError,
    // which silently swallows the event. This catches that race by
    // checking the already-settled load state as soon as we mount.
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  return (
    <div className={styles.photoWrap}>
      {/* data-nav-dark: the only dark surface in the hero — flips the
          nav to light-on-dark text while it scrolls over the frame */}
      <div className={styles.photoFrame} data-nav-dark>
        {!failed && (
          // eslint-disable-next-line @next/next/no-img-element -- plain
          // <img> on purpose: the photo may not exist yet, and next/image
          // would error at build time on a missing/arbitrary user file
          <img
            ref={imgRef}
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
