import { contact } from '@/data/content';
import SectionHeader from '../shared/SectionHeader';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <SectionHeader title="Contact">
          <ul className={styles.list}>
            {contact.links.map((link) => (
              <li key={link.label}>
                <strong>{link.label}:</strong> <a href={link.href}>{link.value}</a>
              </li>
            ))}
          </ul>
        </SectionHeader>
      </div>
    </section>
  );
}
