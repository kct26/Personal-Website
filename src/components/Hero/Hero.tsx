import { hero, socials, sectionImages } from '@/data/content';
import { LinkedInIcon, MailIcon, PinIcon, LinkIcon, DownloadIcon } from '../shared/icons';
import HeroPhoto from './HeroPhoto';
import styles from './Hero.module.css';

const QUICK_LINK_ICONS = {
  download: DownloadIcon,
  link: LinkIcon,
} as const;

export default function Hero() {
  return (
    <section id="hero" data-nav-dark className={styles.heroOuter}>
      <div
        className={styles.heroBg}
        style={{ backgroundImage: `url(${sectionImages.hero})` }}
        aria-hidden="true"
      />
      <div className={styles.heroScrim} aria-hidden="true" />

      <div className={`wrap ${styles.hero}`}>
        <div className={`${styles.profile} ${styles.profileGlass}`}>
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

        <HeroPhoto />
      </div>
    </section>
  );
}