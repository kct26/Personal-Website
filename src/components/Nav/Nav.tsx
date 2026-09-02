'use client';

import { useEffect, useRef, useState } from 'react';
import { nav } from '@/data/content';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Nav.module.css';

const SCROLL_THRESHOLD = 40;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);

      const navHeight = navRef.current?.getBoundingClientRect().height ?? 0;

      // Checks every element explicitly marked data-nav-dark (the hero
      // photo, project cover thumbnails, and any future dark surface)
      // rather than whole named sections — so the nav only goes white
      // when it's actually overlapping a dark patch, not an entire
      // section that happens to contain one.
      const darkEls = document.querySelectorAll<HTMLElement>('[data-nav-dark]');
      let stillOnDark = false;
      darkEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < navHeight && rect.bottom > 0) {
          stillOnDark = true;
        }
      });
      setOnDark(stillOnDark);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header className={styles.headerWrap}>
      <div
        ref={navRef}
        className={`${styles.nav} ${scrolled ? styles.navScrolled : ''} ${onDark ? styles.onDark : ''}`}
      >
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