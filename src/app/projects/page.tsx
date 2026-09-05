import type { Metadata } from 'next';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import SectionHeader from '@/components/shared/SectionHeader';
import ProjectCard from '@/components/Projects/ProjectCard';
import projectStyles from '@/components/Projects/Projects.module.css';
import styles from './projects.module.css';
import { projects } from '@/data/content';

export const metadata: Metadata = {
  title: 'Projects — Kyle Dang',
  description: 'All projects by Kyle Dang.',
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="mainOffset">
        <section className="section">
          <div className="wrap">
            <a href="/#projects" className={styles.back}>← Back to home</a>
            <SectionHeader title="All Projects" />
            <div className={projectStyles.grid}>
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
