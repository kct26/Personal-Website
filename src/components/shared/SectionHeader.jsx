import styles from './SectionHeader.module.css';

export default function SectionHeader({ title, dark = false, action }) {
  return (
    <div className={`${styles.head} ${dark ? styles.dark : ''}`}>
      <h2>{title}</h2>
      {action}
    </div>
  );
}
