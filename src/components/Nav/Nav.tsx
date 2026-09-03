'use client';

import { useEffect, useRef, useState } from 'react';
import { nav, hero } from '@/data/content';
import { LinkIcon } from '../shared/icons';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Nav.module.css';

const resumeLink = hero.quickLinks.find((link) => link.icon === 'download');

const SCROLL_THRESHOLD = 40;

function intersects(a: DOMRect, b: DOMRect) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Brand, links, and CTA now sit at independent points across the full
  // header width (not one shared pill), so each needs its own dark-overlap
  // check — a single page-wide flag would turn the far-left brand text
  // white even while it's still sitting over the plain white page.
  const [onDark, setOnDark] = useState({ brand: false, nav: false, cta: false });
  const headerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);

      // Checks every element explicitly marked data-nav-dark (the hero
      // photo, project cover thumbnails, and any future dark surface)
      // against each nav region's own position — so only the region
      // actually overlapping a dark patch flips to light text.
      const darkRects = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-dark]'))
        .map((el) => el.getBoundingClientRect());

      const overlapsAny = (rect: DOMRect | undefined) =>
        !!rect && darkRects.some((dark) => intersects(rect, dark));

      setOnDark({
        brand: overlapsAny(brandRef.current?.getBoundingClientRect()),
        nav: overlapsAny(navRef.current?.getBoundingClientRect()),
        cta: overlapsAny(ctaRef.current?.getBoundingClientRect()),
      });
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
    <header
      ref={headerRef}
      className={`${styles.headerWrap} ${scrolled ? styles.headerScrolled : ''}`}
    >
      <a
        ref={brandRef}
        href="#top"
        className={`${styles.brand} ${onDark.brand ? styles.onDark : ''}`}
      >
        Kyle&apos;s Space
      </a>

      <div ref={navRef} className={`${styles.nav} ${onDark.nav ? styles.onDark : ''}`}>
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

      {resumeLink && (
        <a
          ref={ctaRef}
          href={resumeLink.href}
          className={`${styles.cta} ${onDark.cta ? styles.onDark : ''}`}
        >
          <span>{resumeLink.label}</span>
          <LinkIcon />
        </a>
      )}
    </header>
  );
}
