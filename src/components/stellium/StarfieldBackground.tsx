/**
 * Sacred-geometry + starfield background for Stellium.
 * Pure SVG + CSS — no canvas, no runtime cost.
 */
export function StarfieldBackground() {
  // Deterministic pseudo-random stars so SSR and client match.
  const stars = Array.from({ length: 90 }, (_, i) => {
    const x = ((i * 97) % 100) + ((i * 13) % 7) * 0.1;
    const y = ((i * 53) % 100) + ((i * 29) % 5) * 0.1;
    const r = 0.4 + ((i * 7) % 10) * 0.08;
    const delay = ((i * 17) % 40) * 0.1;
    return { x, y, r, delay };
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-night-gradient"
    >
      {/* Sacred geometry — flower-of-life inspired rings, very low opacity */}
      <svg
        viewBox="0 0 800 800"
        className="absolute left-1/2 top-1/2 h-[130vmin] w-[130vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.09]"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        style={{ color: "var(--gold-soft)" }}
      >
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 400 + Math.cos(rad) * 120;
          const cy = 400 + Math.sin(rad) * 120;
          return <circle key={deg} cx={cx} cy={cy} r="120" />;
        })}
        <circle cx="400" cy="400" r="120" />
        <circle cx="400" cy="400" r="240" />
        <circle cx="400" cy="400" r="320" />
        <circle cx="400" cy="400" r="380" />
      </svg>

      {/* Starfield */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r * 0.15}
            fill="var(--ink)"
            className="animate-twinkle"
            style={{ animationDelay: `${s.delay}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
