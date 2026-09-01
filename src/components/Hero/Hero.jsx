import { hero, socials } from '../../data/content.js';
import { LinkedInIcon, MailIcon, PinIcon, LinkIcon, DownloadIcon } from '../shared/icons.jsx';
import styles from './Hero.module.css';

// maps hero.quickLinks[].icon → icon component (same pattern as the
// project cover lookup in ProjectCard.jsx)
const QUICK_LINK_ICONS = {
  download: DownloadIcon,
  link: LinkIcon,
};

export default function Hero() {
  return (
    <section className={`wrap ${styles.hero}`}>
      <div className={styles.profile}>
        <div className={styles.topRow}>
          <div>
            <h1 className={styles.name}>
              {hero.name} <span aria-hidden="true">{hero.wave}</span>
            </h1>
            <div className={styles.role}>{hero.role}</div>
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
          </div>

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
        </div>

        {hero.bio.map((paragraph, i) => (
          <p key={i} className={styles.bio}>{paragraph}</p>
        ))}

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

        <div className={styles.cta}>
          <a href={hero.primaryCta.href} className={styles.btnPrimary}>{hero.primaryCta.label}</a>
        </div>
      </div>

      {/* Tilted photo-card frame. Put your photo at public/profile.jpg
          (see README.md) — it'll show up here automatically at that path. */}
      <div className={styles.photoFrame}>
        <img
          src="/profile.jpg"
          alt={hero.name}
          className={styles.photo}
        />
      </div>
    </section>
  );
}
