import { projects } from '@/data/content';
import SectionHeader from '../shared/SectionHeader';
import { ArrowIcon } from '../shared/icons';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const PREVIEW_COUNT = 2;

export default function Projects() {
  const visible = projects.slice(0, PREVIEW_COUNT);
  const hasMore = projects.length > PREVIEW_COUNT;

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionHeader
          title="Projects"
          action={
            hasMore && (
              <a href="/projects" className={styles.viewMore}>
                view more
                <ArrowIcon />
              </a>
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
