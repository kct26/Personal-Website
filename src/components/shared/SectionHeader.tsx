import type { ReactNode } from 'react';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}

export default function SectionHeader({ title, action, children }: SectionHeaderProps) {
  return (
    <div className={styles.row}>
      <h2 className={styles.label}>{title}</h2>
      <div className={styles.content}>
        {action && <div className={styles.action}>{action}</div>}
        {children}
      </div>
    </div>
  );
}
