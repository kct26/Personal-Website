import type { ReactNode } from 'react';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  dark?: boolean;
  action?: ReactNode;
}

export default function SectionHeader({ title, dark = false, action }: SectionHeaderProps) {
  return (
    <div className={`${styles.head} ${dark ? styles.dark : ''}`}>
      <h2>{title}</h2>
      {action}
    </div>
  );
}
