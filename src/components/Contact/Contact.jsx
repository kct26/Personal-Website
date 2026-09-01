import { contact } from '../../data/content.js';
import { MailIcon, GitHubIcon, LinkedInIcon, FacebookIcon, InstagramIcon } from '../shared/icons.jsx';
import SectionHeader from '../shared/SectionHeader.jsx';
import styles from './Contact.module.css';

// maps a contact.links[].label to its icon — same lookup pattern used
// for project covers and hero quick-link icons
const CONTACT_ICONS = {
  Email: MailIcon,
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
};

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <SectionHeader title="Contact" />
        <div className={styles.iconRow}>
          {contact.links.map((link) => {
            const Icon = CONTACT_ICONS[link.label];
            return (
              <a key={link.label} href={link.href} className={styles.icon} aria-label={link.label}>
                {Icon && <Icon />}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
