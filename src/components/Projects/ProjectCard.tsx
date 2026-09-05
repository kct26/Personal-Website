'use client';

import { useEffect, useRef, useState } from 'react';
import type { Project } from '@/data/content';
import CodeCover from './covers/CodeCover';
import CircuitCover from './covers/CircuitCover';
import ChartCover from './covers/ChartCover';
import PathCover from './covers/PathCover';
import styles from './Projects.module.css';

const COVERS = {
  code: CodeCover,
  circuit: CircuitCover,
  chart: ChartCover,
  path: PathCover,
} as const;

export default function ProjectCard({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const Cover = COVERS[project.cover] ?? CircuitCover;
  const showImage = project.image && !imageFailed;

  useEffect(() => {
    // The browser can finish failing to load an <img> present in the
    // server-rendered HTML before React hydrates and attaches onError,
    // which silently swallows the event. This catches that race by
    // checking the already-settled load state as soon as we mount.
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setImageFailed(true);
    }
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.cover} data-nav-dark>
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element -- plain
          // <img> on purpose: the screenshot may not exist yet, and
          // next/image would error at build time on a missing file
          <img
            ref={imgRef}
            src={project.image}
            alt={`${project.title} screenshot`}
            className={styles.coverImage}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <Cover />
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.top}>
          <h3>{project.title}</h3>
          <span className={styles.tag}>{project.tag}</span>
        </div>
        <p>{project.description}</p>
        <ul className={styles.highlights}>
          {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
        <div className={styles.stackRow}>
          {project.stack.map((s) => <span key={s}>{s}</span>)}
        </div>
        <div className={styles.links}>
          {project.links.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
