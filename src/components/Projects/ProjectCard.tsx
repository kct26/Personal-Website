'use client';

import { useEffect, useRef, useState } from 'react';
import type { Project } from '@/data/content';
import styles from './Projects.module.css';

export default function ProjectCard({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
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
    <article className={styles.item}>
      <div className={styles.top}>
        <h3>{project.title}</h3>
        <span className={styles.tag}>{project.tag}</span>
      </div>
      <p>{project.description}</p>

      {showImage && (
        // eslint-disable-next-line @next/next/no-img-element -- plain
        // <img> on purpose: the screenshot may not exist yet, and
        // next/image would error at build time on a missing file
        <img
          ref={imgRef}
          src={project.image}
          alt={`${project.title} screenshot`}
          className={styles.image}
          onError={() => setImageFailed(true)}
        />
      )}

      <ul className={styles.highlights}>
        {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
      <div className={styles.stackLine}>
        <strong>Stack:</strong> {project.stack.join(', ')}
      </div>
      <div className={styles.links}>
        {project.links.map((link, i) => (
          <span key={link.label}>
            {i > 0 && <span className={styles.sep}>·</span>}
            <a href={link.href}>{link.label}</a>
          </span>
        ))}
      </div>
    </article>
  );
}
