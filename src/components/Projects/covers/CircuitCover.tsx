export default function CircuitCover() {
  return (
    <svg viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="22" width="70" height="40" rx="3" stroke="#60A5FA" strokeWidth="1.6" />
      <text x="53" y="46" fill="#60A5FA" fontFamily="var(--font-mono)" fontSize="10" textAnchor="middle">REG</text>

      <rect x="18" y="98" width="70" height="40" rx="3" stroke="#C084FC" strokeWidth="1.6" />
      <text x="53" y="122" fill="#C084FC" fontFamily="var(--font-mono)" fontSize="10" textAnchor="middle">CTRL</text>

      <rect x="118" y="60" width="70" height="40" rx="3" stroke="#FBBF24" strokeWidth="1.6" />
      <text x="153" y="84" fill="#FBBF24" fontFamily="var(--font-mono)" fontSize="10" textAnchor="middle">ALU</text>

      <rect x="218" y="22" width="64" height="40" rx="3" stroke="#4ADE80" strokeWidth="1.6" />
      <text x="250" y="46" fill="#4ADE80" fontFamily="var(--font-mono)" fontSize="10" textAnchor="middle">OUT</text>

      <path d="M88 42 L118 70" stroke="#8B8F98" strokeWidth="1.2" />
      <path d="M88 118 L118 90" stroke="#8B8F98" strokeWidth="1.2" />
      <path d="M188 80 L218 52" stroke="#8B8F98" strokeWidth="1.2" />
    </svg>
  );
}
