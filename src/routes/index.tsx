import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroTitle } from "@/components/stellium/HeroTitle";
import { SacredFrame } from "@/components/stellium/SacredFrame";
import { PlanCard, STELLIUM_PLANS } from "@/components/stellium/PlanCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stellium — Observatório de tarô, mapa astral e numerologia" },
      {
        name: "description",
        content:
          "Entre no observatório Stellium: tarô, mapa astral e numerologia com sínteses simbólicas. Mapa ≠ destino.",
      },
      { property: "og:title", content: "Stellium — Observatório simbólico" },
      {
        property: "og:description",
        content:
          "Tarô, mapa astral e numerologia com sínteses da Sacerdotisa. Três entradas no mesmo céu.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <SacredFrame>
        <div className="py-16 sm:py-24">
          <HeroTitle />

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <Link
              to="/experimente"
              className="inline-flex items-center rounded-sm border border-primary bg-primary/10 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary glow-gold transition-all hover:bg-primary/20"
            >
              ✦ Experimente Grátis
            </Link>
            <a
              href="#entrar"
              className="inline-flex items-center rounded-sm border border-primary/40 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Entrar
            </a>
            <Link
              to="/planos"
              className="inline-flex items-center rounded-sm border border-primary/40 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Ver planos
            </Link>
          </div>
        </div>
      </SacredFrame>

      <section className="mt-28">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.4em] text-primary/70">
          ✦ Três entradas no mesmo céu ✦
        </p>
        <h2 className="mt-4 text-center font-serif text-4xl text-foreground">
          Escolha por onde começar
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STELLIUM_PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      <section className="mt-28 text-center">
        <p className="mx-auto max-w-2xl font-serif text-xl italic text-muted-foreground">
          "O céu não decide por você. Ele apenas oferece uma linguagem para que
          você escute o que já sabe."
        </p>
      </section>
    </div>
  );
}
