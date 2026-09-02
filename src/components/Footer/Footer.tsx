import { footer } from '@/data/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className="wrap">
      <footer className={`${styles.footer} mono`}>
        <span className={styles.left}>© {footer.year}</span>
        <span className={styles.right}>
          made by <strong>{footer.name}</strong>
        </span>
      </footer>
    </div>
  );
}
