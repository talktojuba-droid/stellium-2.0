import type { ReactNode } from "react";

/** Rectangular frame with gilded corner ornaments — used around hero and cards. */
export function SacredFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Corner marks */}
      {(
        [
          "top-0 left-0",
          "top-0 right-0 rotate-90",
          "bottom-0 right-0 rotate-180",
          "bottom-0 left-0 -rotate-90",
        ] as const
      ).map((pos) => (
        <svg
          key={pos}
          viewBox="0 0 24 24"
          className={`pointer-events-none absolute ${pos} h-5 w-5 text-primary`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          aria-hidden
        >
          <path d="M2 10 V2 H10" />
          <circle cx="2" cy="2" r="0.9" fill="currentColor" />
        </svg>
      ))}
      <div className="rounded-sm border border-primary/25 p-8 sm:p-14">{children}</div>
    </div>
  );
}
