import { skills } from '@/data/content';
import SectionHeader from '../shared/SectionHeader';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHeader title="Skills">
          <ul className={styles.list}>
            {skills.map((group) => (
              <li key={group.category} className={styles.row}>
                <strong>{group.category}:</strong> {group.items.join(', ')}
              </li>
            ))}
          </ul>
        </SectionHeader>
      </div>
    </section>
  );
}
