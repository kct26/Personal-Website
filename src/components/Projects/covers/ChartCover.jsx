export default function ChartCover() {
  return (
    <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="10,120 10,10" stroke="var(--ink-text-dim)" strokeWidth="1" />
      <polyline points="10,120 290,120" stroke="var(--ink-text-dim)" strokeWidth="1" />
      <polyline
        points="10,95 45,80 80,88 115,55 150,62 185,35 220,44 255,20 290,28"
        stroke="var(--glow)"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="150" cy="62" r="3" fill="var(--glow-signal)" />
      <circle cx="255" cy="20" r="3" fill="var(--glow-signal)" />
    </svg>
  );
}
