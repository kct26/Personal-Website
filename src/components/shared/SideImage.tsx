'use client';

import { useState } from 'react';
import styles from './SideImage.module.css';

interface SideImageProps {
  src: string;
  alt: string;
}

/**
 * A tall image that sits in a right-hand column next to content,
 * instead of a full-width banner (see ImageBreak for that variant).
 * Same graceful-hide-on-missing-file behavior as ImageBreak.
 */
export default function SideImage({ src, alt }: SideImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div className={styles.frame}>
      {/* eslint-disable-next-line @next/next/no-img-element -- image may
          not exist yet; next/image would error at build time on that */}
      <img src={src} alt={alt} className={styles.img} onError={() => setFailed(true)} />
    </div>
  );
}
