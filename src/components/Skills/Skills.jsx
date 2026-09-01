import { skills } from '../../data/content.js';
import SectionHeader from '../shared/SectionHeader.jsx';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHeader title="Skills" />
        <div className={styles.board}>
          {skills.map((group) => (
            <div key={group.category} className={styles.cell}>
              <h3 className="mono">{group.category}</h3>
              <div className={styles.chipRow}>
                {group.items.map((item) => (
                  <span key={item} className={`${styles.chip} mono`}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
