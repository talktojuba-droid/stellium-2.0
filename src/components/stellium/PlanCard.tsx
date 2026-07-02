import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export type PlanTier = {
  name: string;
  subtitle: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

export function PlanCard({ plan }: { plan: PlanTier }) {
  return (
    <div
      className={`relative flex flex-col rounded-sm border p-8 backdrop-blur-sm transition-all ${
        plan.featured
          ? "border-primary/60 bg-card glow-gold"
          : "border-border/60 bg-card hover:border-primary/40"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-primary/60 bg-background px-3 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-primary">
          ✦ mais escolhido
        </span>
      )}

      <h3 className="font-serif text-2xl text-primary">{plan.name}</h3>
      <p className="mt-1 font-serif text-sm italic text-muted-foreground">{plan.subtitle}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-mono text-3xl text-foreground">{plan.price}</span>
        {plan.priceSuffix && (
          <span className="font-mono text-xs text-muted-foreground">{plan.priceSuffix}</span>
        )}
      </div>

      <ul className="mt-8 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-foreground/85">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        to={plan.ctaHref}
        className={`mt-8 inline-flex items-center justify-center rounded-sm border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.28em] transition-all ${
          plan.featured
            ? "border-primary bg-primary text-primary-foreground hover:brightness-110"
            : "border-primary/60 text-primary hover:glow-gold"
        }`}
      >
        {plan.ctaLabel}
      </Link>
    </div>
  );
}

export const STELLIUM_PLANS: PlanTier[] = [
  {
    name: "Consulente",
    subtitle: "Para quem quer consultar, não estudar.",
    price: "Gratuito",
    features: [
      "Leituras avulsas pagas (R$ 17 a R$ 167)",
      "Agendar videochamada com A Sacerdotisa",
      "Histórico só dos seus pedidos",
      "Sem acesso aos módulos completos",
    ],
    ctaLabel: "Criar conta grátis",
    ctaHref: "/planos",
  },
  {
    name: "Observatório",
    subtitle: "Para quem decide aprender o céu.",
    price: "R$ 33,30",
    priceSuffix: "/mês",
    features: [
      "Acesso completo a todos os oráculos",
      "Histórico cruzado entre cartas e mapas",
      "Biblioteca + horóscopo do dia",
      "Navegação fluida, sem travas",
    ],
    ctaLabel: "Assinar",
    ctaHref: "/planos",
    featured: true,
  },
  {
    name: "Labor Premium",
    subtitle: "Para quem caminha em círculo, não sozinho.",
    price: "R$ 77,70",
    priceSuffix: "/mês",
    features: [
      "Tudo do Observatório",
      "Círculo Filosófico (fórum + blog)",
      "Comentários e perguntas à comunidade",
      "Networking entre estudantes",
    ],
    ctaLabel: "Assinar",
    ctaHref: "/planos",
  },
];
