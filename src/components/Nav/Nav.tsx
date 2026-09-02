'use client';

import { useState } from 'react';
import { nav } from '@/data/content';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Nav.module.css';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <div className={`${styles.inner} wrap`}>
        <nav className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <ThemeToggle />
          <button className={styles.toggle} onClick={() => setOpen((v) => !v)}>
            {open ? 'close' : 'menu'}
          </button>
        </div>
      </div>
    </header>
  );
}
