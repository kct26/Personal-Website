import { education } from '../../data/content.js';
import SectionHeader from '../shared/SectionHeader.jsx';
import { PinIcon } from '../shared/icons.jsx';
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
                    <img src={entry.logo} alt={entry.school} className={styles.badge} />
                  ) : (
                    <span className={`${styles.badgeText} mono`}>{entry.badge}</span>
                  )}
                  {entry.school}
                </h3>
                <div className={styles.degree}>{entry.degree}</div>
                {entry.bullets.length > 0 && (
                  <ul className={styles.bullets}>
                    {entry.bullets.map((c) => (
                      <li key={c}>{c}</li>
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
