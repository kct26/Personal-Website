'use client';

import { useState } from 'react';
import { nav, hero } from '@/data/content';
import styles from './Nav.module.css';

const resumeLink = hero.quickLinks.find((link) => link.icon === 'download');

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.headerWrap}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand}>
          {hero.name}
        </a>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          {resumeLink && (
            <a
              href={resumeLink.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              {resumeLink.label}
            </a>
          )}
        </nav>

        <span className={styles.search} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  );
}
