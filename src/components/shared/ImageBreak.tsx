'use client';

import { useState } from 'react';
import styles from './ImageBreak.module.css';

interface ImageBreakProps {
  src: string;
  alt: string;
}

/**
 * A standalone photo section, meant to sit BETWEEN other sections (in
 * App/page.tsx) rather than nested inside one — that's what lets it span
 * far wider than a section's normal max-width content column, with just
 * a thin gutter on each side (see the padding in ImageBreak.module.css)
 * rather than either being boxed in or going fully edge-to-edge.
 *
 * Because this renders as a top-level sibling (not nested inside a
 * .wrap container), it's naturally full-width already — no width:100vw
 * hack needed, which is exactly the kind of thing that caused a real
 * horizontal-scrollbar bug in an earlier version of this site.
 *
 * Same graceful-hide-on-missing-file behavior as SideImage:
 * renders nothing until a real photo exists at the given path.
 */
export default function ImageBreak({ src, alt }: ImageBreakProps) {
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
