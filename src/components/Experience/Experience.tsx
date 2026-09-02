import { experience } from '@/data/content';
import SectionHeader from '../shared/SectionHeader';
import { PinIcon } from '../shared/icons';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className="sectionTint">
      <div className="wrap">
        <SectionHeader title="Experience" />
        <div className={styles.timeline}>
          {experience.map((item) => (
            <div key={item.title} className={styles.item}>
              <div className={styles.meta}>
                <h3>{item.title}</h3>
                <span className={`${styles.period} mono`}>{item.period}</span>
              </div>

              {/* org and location share one row instead of org sitting
                  on its own line below the title */}
              <div className={styles.subRow}>
                <div className={styles.org}>
                  {item.logo ? ( 
                    // eslint-disable-next-line @next/next/no-img-element -- logo
                    // may not exist yet; next/image would error on a missing file
                    <img src={item.logo} alt={item.org} className={styles.badge} />
                  ) : (
                    <span className={`${styles.badgeText} mono`}>{item.orgBadge}</span>
                  )}
                  {item.org}
                </div>
                <span className={`${styles.location} mono`}>
                  <PinIcon />
                  {item.location}
                </span>
              </div>

              <ul className={styles.bulletList}>
                {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
