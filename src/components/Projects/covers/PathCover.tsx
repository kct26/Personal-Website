export default function PathCover() {
  return (
    <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 130 C 80 130, 60 30, 130 30 S 220 130, 280 60"
        stroke="#D4D4D4"
        strokeWidth="2"
        strokeDasharray="4 5"
        fill="none"
      />

      {/* robot chassis, trailing the line */}
      <rect x="8" y="120" width="24" height="20" rx="4" fill="#60A5FA" />
      <circle cx="14" cy="144" r="3" fill="#FB923C" />
      <circle cx="26" cy="144" r="3" fill="#FB923C" />

      {/* IR sensor readout at the head of the path */}
      <circle cx="270" cy="52" r="5" fill="#4ADE80" />
      <circle cx="270" cy="52" r="9" stroke="#4ADE80" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}
