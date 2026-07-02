import { Link } from "@tanstack/react-router";
import { StelliumLogo } from "./StelliumLogo";

export function StelliumHeader() {
  return (
    <header className="relative z-10 border-b border-border/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-3 group">
          <StelliumLogo className="h-9 w-9 text-primary transition-transform group-hover:rotate-45" />
          <span className="font-serif text-xl tracking-[0.4em] text-primary text-glow-gold">
            STELLIUM
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground sm:flex">
          <Link
            to="/experimente"
            className="transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Experimente
          </Link>
          <Link
            to="/planos"
            className="transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Planos
          </Link>
          <a
            href="#entrar"
            className="rounded-sm border border-primary/60 px-4 py-2 text-primary transition-all hover:glow-gold"
          >
            Entrar
          </a>
        </nav>
      </div>
    </header>
  );
}
