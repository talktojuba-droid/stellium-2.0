/** Small tarot-wheel style mark used in the header. */
export function StelliumLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      aria-hidden
    >
      <circle cx="20" cy="20" r="18" />
      <circle cx="20" cy="20" r="13" />
      <circle cx="20" cy="20" r="8" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const x1 = 20 + Math.cos(a) * 8;
        const y1 = 20 + Math.sin(a) * 8;
        const x2 = 20 + Math.cos(a) * 18;
        const y2 = 20 + Math.sin(a) * 18;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}
