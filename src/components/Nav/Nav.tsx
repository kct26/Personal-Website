'use client';

import { useEffect, useState } from 'react';
import { nav } from '@/data/content';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Nav.module.css';

const SCROLL_THRESHOLD = 40;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shrinks the nav into a floating pill once the page has scrolled
  // past a small threshold, and expands it back at the very top.
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.headerWrap}>
      <div className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
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
