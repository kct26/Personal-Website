import type { Project } from '@/data/content';
import CodeCover from './covers/CodeCover';
import CircuitCover from './covers/CircuitCover';
import ChartCover from './covers/ChartCover';
import PathCover from './covers/PathCover';
import styles from './Projects.module.css';

// Maps the `cover` string in content.ts to the illustration component.
// Add a new key here if you add a new cover type.
const COVERS = {
  code: CodeCover,
  circuit: CircuitCover,
  chart: ChartCover,
  path: PathCover,
} as const;

export default function ProjectCard({ project }: { project: Project }) {
  const Cover = COVERS[project.cover] ?? CircuitCover;

  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <Cover />
      </div>
      <div className={styles.body}>
        <div className={styles.top}>
          <h3>{project.title}</h3>
          <span className={`${styles.tag} mono`}>{project.tag}</span>
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
