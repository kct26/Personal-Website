import { contact } from '@/data/content';
import { MailIcon, GitHubIcon, LinkedInIcon, FacebookIcon, InstagramIcon } from '../shared/icons';
import SectionHeader from '../shared/SectionHeader';
import styles from './Contact.module.css';
import type { ComponentType, SVGProps } from 'react';

const CONTACT_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
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
