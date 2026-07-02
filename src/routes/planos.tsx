import { createFileRoute } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { PlanCard, STELLIUM_PLANS } from "@/components/stellium/PlanCard";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos — Stellium" },
      {
        name: "description",
        content:
          "Três planos Stellium: Consulente gratuito, Observatório R$33,30/mês e Labor Premium R$77,70/mês. Escolha sua entrada no céu.",
      },
      { property: "og:title", content: "Planos Stellium" },
      {
        property: "og:description",
        content:
          "Consulente, Observatório e Labor Premium — três formas de habitar o observatório.",
      },
    ],
  }),
  component: PlanosPage,
});

type FeatureAvailability = "yes" | "no" | string;

type FeatureRow = {
  label: string;
  values: [FeatureAvailability, FeatureAvailability, FeatureAvailability];
};

const FEATURES: FeatureRow[] = [
  { label: "Tarot Rider-Waite", values: ["por leitura", "yes", "yes"] },
  { label: "Tarot de Marselha", values: ["por leitura", "yes", "yes"] },
  { label: "Lenormand · Baralho Cigano", values: ["por leitura", "yes", "yes"] },
  { label: "Mapa Astrológico", values: ["sob demanda", "yes", "yes"] },
  { label: "Numerologia Pitagórica", values: ["sob demanda", "yes", "yes"] },
  { label: "Cabala · Anjos · Gematria", values: ["sob demanda", "yes", "yes"] },
  { label: "Mesa Oracular cerimonial", values: ["no", "yes", "yes"] },
  { label: "Histórico cruzado entre oráculos", values: ["só seus pedidos", "yes", "yes"] },
  { label: "Sínteses humanizadas (voz da Sacerdotisa)", values: ["no", "yes", "yes"] },
  { label: "Exportação em PDF premium", values: ["nas leituras pagas", "yes", "yes"] },
  { label: "Horóscopo do dia", values: ["no", "yes", "yes"] },
  { label: "Biblioteca Viva", values: ["no", "parcial", "yes"] },
  { label: "Círculo Filosófico (fórum)", values: ["no", "no", "yes"] },
  { label: "Networking entre estudantes", values: ["no", "no", "yes"] },
];

function Cell({ v }: { v: FeatureAvailability }) {
  if (v === "yes")
    return <Check className="mx-auto h-4 w-4 text-primary" aria-label="Incluído" />;
  if (v === "no")
    return <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" aria-label="Não incluído" />;
  return (
    <span className="font-serif text-xs italic text-muted-foreground">{v}</span>
  );
}

function PlanosPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary/80">
          ✦ Stellium · Planos ✦
        </p>
        <h1 className="mt-6 font-serif text-5xl text-primary text-glow-gold">
          Três entradas no mesmo céu
        </h1>
        <p className="mt-4 mx-auto max-w-xl font-serif italic text-muted-foreground">
          Cada portal oferece uma forma diferente de habitar o observatório.
          Você escolhe a densidade da sua travessia.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {STELLIUM_PLANS.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>

      <section className="mt-28">
        <h2 className="text-center font-serif text-3xl text-foreground">
          Comparativo de recursos
        </h2>
        <div className="mt-10 overflow-x-auto rounded-sm border border-border/60">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-card/50 font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80">
                <th className="p-4 text-left font-normal">Recurso</th>
                <th className="p-4 text-center font-normal">☉ Consulente</th>
                <th className="p-4 text-center font-normal">☾ Observatório</th>
                <th className="p-4 text-center font-normal">✦ Labor Premium</th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-card/20" : "bg-transparent"}
                >
                  <td className="p-4 text-foreground/90">{row.label}</td>
                  <td className="p-4 text-center">
                    <Cell v={row.values[0]} />
                  </td>
                  <td className="p-4 text-center">
                    <Cell v={row.values[1]} />
                  </td>
                  <td className="p-4 text-center">
                    <Cell v={row.values[2]} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p id="assinar" className="mt-16 text-center font-serif italic text-muted-foreground">
        Assinaturas serão ativadas em breve. Enquanto isso, você pode explorar o{" "}
        <a href="/experimente" className="text-primary underline underline-offset-4">
          Experimente
        </a>{" "}
        gratuitamente.
      </p>
    </div>
  );
}
