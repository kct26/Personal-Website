'use client';

import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  // Always default to light for first-time visitors, regardless of their
  // OS-level color scheme preference — a returning visitor's own choice
  // (read from localStorage above) still takes priority over this.
  return 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // getInitialTheme touches localStorage, which only exists in the
  // browser — running it inside useEffect (rather than as the useState
  // initializer) avoids a server/client mismatch during hydration.
  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={styles.track}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      <span className={`${styles.knob} ${isDark ? styles.knobDark : ''}`} />
    </button>
  );
}
