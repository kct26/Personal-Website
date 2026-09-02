export default function PathCover() {
  return (
    <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 130 C 80 130, 60 30, 130 30 S 220 130, 280 60"
        stroke="var(--ink-text-dim)"
        strokeWidth="1.5"
        strokeDasharray="4 5"
        fill="none"
      />
      <rect x="10" y="118" width="20" height="20" rx="3" stroke="var(--glow)" strokeWidth="1.6" />
      <circle cx="15" cy="142" r="3" fill="var(--glow)" />
      <circle cx="25" cy="142" r="3" fill="var(--glow)" />
      <circle cx="270" cy="52" r="4" fill="var(--glow-signal)" />
    </svg>
  );
}
