import { hero, socials } from '@/data/content';
import { LinkedInIcon, MailIcon, PinIcon, LinkIcon, DownloadIcon } from '../shared/icons';
import HeroPhoto from './HeroPhoto';
import styles from './Hero.module.css';

const QUICK_LINK_ICONS = {
  download: DownloadIcon,
  link: LinkIcon,
} as const;

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`wrap ${styles.inner}`}>
        <h1 className={styles.headline}>
          {hero.name} <span aria-hidden="true">{hero.wave}</span>
        </h1>
        <div className={styles.eyebrow}>{hero.role}</div>

        <div className={styles.details}>
          {hero.bio.map((paragraph, i) => (
            <p key={i} className={styles.bio}>{paragraph}</p>
          ))}

          <div className={styles.metaRow}>
            <span className={styles.location}>
              <PinIcon />
              {hero.location}
            </span>
            <span className={styles.availability}>
              <span className={styles.statusDot} />
              {hero.availability}
            </span>
          </div>

          <div className={styles.contactRow}>
            <a href={socials.email.href}>
              <MailIcon />
              {socials.email.label}
            </a>
            <a href={socials.linkedin.href}>
              <LinkedInIcon />
              {socials.linkedin.label}
            </a>
          </div>

          <div className={styles.detailsBottom}>
            <div className={styles.quickLinks}>
              {hero.quickLinks.map((link) => {
                const Icon = QUICK_LINK_ICONS[link.icon];
                return (
                  <a key={link.label} href={link.href}>
                    {Icon && <Icon />}
                    {link.label}
                  </a>
                );
              })}
            </div>

            <a href={hero.primaryCta.href} className={styles.btnPrimary}>{hero.primaryCta.label}</a>
          </div>
        </div>

        <HeroPhoto />

        <div className={styles.techRow}>
          <span className={styles.techLabel}>Reaches for</span>
          <div className={styles.techItems}>
            {hero.focusAreas.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
