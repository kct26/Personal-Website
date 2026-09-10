import type { Metadata } from 'next';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import SectionHeader from '@/components/shared/SectionHeader';
import experienceStyles from '@/components/Experience/Experience.module.css';
import styles from './experience.module.css';
import { experience } from '@/data/content';

export const metadata: Metadata = {
  title: 'Experience - Kyle Dang',
  description: 'Work and research experience of Kyle Dang.',
};

export default function ExperiencePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="section">
          <div className="wrap">
            <a href="/#experience" className={styles.back}>← Back to home</a>
            <SectionHeader title="Experience">
              <div className={experienceStyles.list}>
                {experience.map((item) => (
                  <div key={item.title} className={experienceStyles.item}>
                    <div className={experienceStyles.meta}>
                      <h3>{item.title}, {item.org}</h3>
                      <span className={experienceStyles.period}>{item.period}</span>
                    </div>
                    <div className={experienceStyles.location}>{item.location}</div>
                    <ul className={experienceStyles.bulletList}>
                      {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionHeader>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
