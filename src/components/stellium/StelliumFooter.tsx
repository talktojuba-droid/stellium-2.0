export function StelliumFooter() {
  return (
    <footer className="relative z-10 mt-24 border-t border-border/40 py-10 text-center">
      <p className="font-serif text-sm italic text-muted-foreground">
        Material simbólico e espiritual para autoconhecimento. Mapa ≠ destino.
      </p>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.4em] text-primary/70">
        ✦ Tecnomancia Contemplativa ✦
      </p>
      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
        © {new Date().getFullYear()} Stellium
      </p>
    </footer>
  );
}
