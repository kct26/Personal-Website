import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

/**
 * Wraps a section so it fades and slides into place the first time it
 * scrolls into view, instead of just appearing. Uses IntersectionObserver
 * (not a scroll listener) so it's cheap and doesn't run on every scroll
 * frame. Unobserves itself once triggered — the animation only plays once
 * per page load, not every time you scroll back up and down past it.
 */
export default function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`}>
      {children}
    </div>
  );
}
