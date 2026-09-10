import { experience } from '@/data/content';
import SectionHeader from '../shared/SectionHeader';
import styles from './Experience.module.css';

const PREVIEW_COUNT = 2;

export default function Experience() {
  const visible = experience.slice(0, PREVIEW_COUNT);
  const hasMore = experience.length > PREVIEW_COUNT;

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionHeader
          title="Experience"
          action={
            hasMore && (
              <a href="/experience" className={styles.viewMore}>
                View more →
              </a>
            )
          }
        >
          <div className={styles.list}>
            {visible.map((item) => (
              <div key={item.title} className={styles.item}>
                <div className={styles.meta}>
                  <h3>{item.title}, {item.org}</h3>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <div className={styles.location}>{item.location}</div>
                <ul className={styles.bulletList}>
                  {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
