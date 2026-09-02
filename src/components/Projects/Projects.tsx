'use client';

import { useState } from 'react';
import { projects } from '@/data/content';
import SectionHeader from '../shared/SectionHeader';
import { ArrowIcon } from '../shared/icons';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const PREVIEW_COUNT = 2;

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, PREVIEW_COUNT);
  const hasMore = projects.length > PREVIEW_COUNT;

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionHeader
          title="Projects"
          action={
            hasMore && (
              <button
                type="button"
                className={styles.viewMore}
                onClick={() => setExpanded((v) => !v)}
              >
                {expanded ? 'view less' : 'view more'}
                <ArrowIcon className={expanded ? styles.arrowUp : ''} />
              </button>
            )
          }
        />
        <div className={styles.grid}>
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
