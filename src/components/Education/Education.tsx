import { education } from '@/data/content';
import SectionHeader from '../shared/SectionHeader';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        <SectionHeader title="Education">
          <div className={styles.list}>
            {education.map((entry) => (
              <div key={entry.school} className={styles.item}>
                <div className={styles.meta}>
                  <h3>{entry.school}</h3>
                  <span className={styles.period}>{entry.period}</span>
                </div>
                <div className={styles.location}>{entry.degree} - {entry.location}</div>
                {entry.bullets.length > 0 && (
                  <ul className={styles.bulletList}>
                    {entry.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
