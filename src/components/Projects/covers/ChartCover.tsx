export default function ChartCover() {
  return (
    <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aqiLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="55%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>
        <linearGradient id="aqiFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
        </linearGradient>
      </defs>

      <polyline points="10,120 10,10" stroke="#8B8F98" strokeWidth="1" />
      <polyline points="10,120 290,120" stroke="#8B8F98" strokeWidth="1" />

      <polygon
        points="10,95 45,80 80,88 115,55 150,62 185,35 220,44 255,20 290,28 290,120 10,120"
        fill="url(#aqiFill)"
      />
      <polyline
        points="10,95 45,80 80,88 115,55 150,62 185,35 220,44 255,20 290,28"
        stroke="url(#aqiLine)"
        strokeWidth="2.4"
        fill="none"
      />
      <circle cx="150" cy="62" r="3.5" fill="#FBBF24" />
      <circle cx="255" cy="20" r="3.5" fill="#FB923C" />
    </svg>
  );
}
