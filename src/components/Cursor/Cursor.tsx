'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Cursor.module.css';

const DOT_SIZE = 8;
const RING_SIZE = 32;
const EASE = 0.18;

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  // Only render the custom cursor for devices with a real mouse —
  // touch devices keep their native behavior.
  useEffect(() => {
    setEnabled(window.matchMedia('(pointer: fine)').matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add('custom-cursor');

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let frameId: number;

    function handleMove(e: MouseEvent) {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x - DOT_SIZE / 2}px, ${pos.y - DOT_SIZE / 2}px)`;
      }
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest('a, button')) ringRef.current?.classList.add(styles.hover);
    }
    function handleOut(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest('a, button')) ringRef.current?.classList.remove(styles.hover);
    }

    function loop() {
      ring.x += (pos.x - ring.x) * EASE;
      ring.y += (pos.y - ring.y) * EASE;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x - RING_SIZE / 2}px, ${ring.y - RING_SIZE / 2}px)`;
      }
      frameId = requestAnimationFrame(loop);
    }

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    frameId = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove('custom-cursor');
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      cancelAnimationFrame(frameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
}
