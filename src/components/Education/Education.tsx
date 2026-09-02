import { education } from '@/data/content';
import SectionHeader from '../shared/SectionHeader';
import { PinIcon } from '../shared/icons';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        <SectionHeader title="Education" />
        <div className={styles.timeline}>
          {education.map((entry) => (
            <div key={entry.school} className={styles.card}>
              <div>
                <h3 className={styles.school}>
                  {entry.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element -- logo
                    // may not exist yet; next/image would error on a missing file
                    <img src={entry.logo} alt={entry.school} className={styles.badge} />
                  ) : (
                    <span className={`${styles.badgeText} mono`}>{entry.badge}</span>
                  )}
                  {entry.school}
                </h3>
                <div className={styles.degree}>{entry.degree}</div>
                {entry.bullets.length > 0 && (
                  <ul className={styles.bulletList}>
                    {entry.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={styles.metaRight}>
                <span className={`${styles.period} mono`}>{entry.period}</span>
                <span className={`${styles.location} mono`}>
                  <PinIcon />
                  {entry.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
