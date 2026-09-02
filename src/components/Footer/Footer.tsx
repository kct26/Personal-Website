import { footer } from '@/data/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className="wrap">
      <footer className={`${styles.footer} mono`}>
        <span className={styles.left}>
          <span>© {footer.year}</span>
          <span className={styles.divider}>|</span>
          <a 
            href={footer.thoughtsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.thoughtsLink}
          >
            {footer.thoughtsLabel}
          </a>
        </span>
        <span className={styles.right}>
          made by <strong>{footer.name}</strong>
        </span>
      </footer>
    </div>
  );
}