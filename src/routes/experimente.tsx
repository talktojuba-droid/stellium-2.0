import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SacredFrame } from "@/components/stellium/SacredFrame";

export const Route = createFileRoute("/experimente")({
  head: () => ({
    meta: [
      { title: "Experimente — Stellium" },
      {
        name: "description",
        content:
          "Sorteie uma carta, um emblema e descubra seu Caminho de Vida. Uma palhinha gratuita do observatório Stellium.",
      },
      { property: "og:title", content: "Experimente Stellium — três oráculos gratuitos" },
      {
        property: "og:description",
        content:
          "Tirar 1 carta, sortear 1 emblema, calcular Caminho de Vida. Sem cadastro.",
      },
    ],
  }),
  component: ExperimentePage,
});

/* ---------- data ---------- */

type Arcanum = { name: string; keyword: string; symbol: string };

const MAJOR_ARCANA: Arcanum[] = [
  { name: "O Louco", keyword: "salto, começo", symbol: "0" },
  { name: "O Mago", keyword: "vontade, manifestação", symbol: "I" },
  { name: "A Sacerdotisa", keyword: "silêncio, intuição", symbol: "II" },
  { name: "A Imperatriz", keyword: "abundância, criação", symbol: "III" },
  { name: "O Imperador", keyword: "ordem, estrutura", symbol: "IV" },
  { name: "O Hierofante", keyword: "tradição, ensinamento", symbol: "V" },
  { name: "Os Enamorados", keyword: "escolha, união", symbol: "VI" },
  { name: "O Carro", keyword: "direção, impulso", symbol: "VII" },
  { name: "A Força", keyword: "coragem serena", symbol: "VIII" },
  { name: "O Eremita", keyword: "retiro, lanterna", symbol: "IX" },
  { name: "A Roda", keyword: "ciclo, giro", symbol: "X" },
  { name: "A Justiça", keyword: "equilíbrio, verdade", symbol: "XI" },
  { name: "O Enforcado", keyword: "suspensão, inversão", symbol: "XII" },
  { name: "A Morte", keyword: "fim que abre", symbol: "XIII" },
  { name: "A Temperança", keyword: "mistura, medida", symbol: "XIV" },
  { name: "O Diabo", keyword: "apego, sombra", symbol: "XV" },
  { name: "A Torre", keyword: "ruptura reveladora", symbol: "XVI" },
  { name: "A Estrela", keyword: "esperança, fluxo", symbol: "XVII" },
  { name: "A Lua", keyword: "sonho, ilusão fértil", symbol: "XVIII" },
  { name: "O Sol", keyword: "clareza, alegria", symbol: "XIX" },
  { name: "O Julgamento", keyword: "chamado, despertar", symbol: "XX" },
  { name: "O Mundo", keyword: "inteireza, retorno", symbol: "XXI" },
];

type Emblem = { glyph: string; name: string; phrase: string };

const EMBLEMS: Emblem[] = [
  { glyph: "☉", name: "Sol", phrase: "O que precisa brilhar hoje?" },
  { glyph: "☾", name: "Lua", phrase: "O que a intuição sussurra?" },
  { glyph: "☿", name: "Mercúrio", phrase: "Diga com clareza aquilo que evita." },
  { glyph: "♀", name: "Vênus", phrase: "Onde o afeto pede presença?" },
  { glyph: "♂", name: "Marte", phrase: "Qual passo você adia?" },
  { glyph: "♃", name: "Júpiter", phrase: "Onde há espaço para crescer?" },
  { glyph: "♄", name: "Saturno", phrase: "Que limite protege e não aperta?" },
  { glyph: "♅", name: "Urano", phrase: "Que ruptura seria libertadora?" },
  { glyph: "♆", name: "Netuno", phrase: "O que o sonho tenta dizer?" },
  { glyph: "♇", name: "Plutão", phrase: "O que precisa morrer para nascer?" },
  { glyph: "✦", name: "Estrela", phrase: "Siga um sinal, ainda que discreto." },
  { glyph: "☍", name: "Oposição", phrase: "Escute o outro lado antes de julgar." },
];

const LIFE_PATH_MEANING: Record<number, string> = {
  1: "Iniciador. O caminho pede autonomia e coragem de começar.",
  2: "Ponte. O caminho pede escuta, parceria e diplomacia.",
  3: "Voz. O caminho pede expressão criativa e leveza.",
  4: "Fundação. O caminho pede método, base e paciência.",
  5: "Vento. O caminho pede movimento, liberdade e curiosidade.",
  6: "Casa. O caminho pede cuidado, beleza e responsabilidade afetiva.",
  7: "Retiro. O caminho pede estudo, silêncio e verticalidade interior.",
  8: "Forja. O caminho pede poder consciente, gestão e realização material.",
  9: "Círculo. O caminho pede serviço, síntese e desapego.",
  11: "Mestre da visão. Intuição elevada — canalize sem se perder.",
  22: "Mestre construtor. Realize no mundo o que só você enxerga.",
  33: "Mestre do cuidado. Ame com precisão, ensine com presença.",
};

/* ---------- helpers ---------- */

function pick<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

function reduceLifePath(dateStr: string): number | null {
  const [y, m, d] = dateStr.split("-").map((n) => parseInt(n, 10));
  if (!y || !m || !d) return null;
  const digits = `${y}${m.toString().padStart(2, "0")}${d.toString().padStart(2, "0")}`
    .split("")
    .map((c) => parseInt(c, 10))
    .filter((n) => !Number.isNaN(n));
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum
      .toString()
      .split("")
      .reduce((a, c) => a + parseInt(c, 10), 0);
  }
  return sum;
}

/* ---------- oracle blocks ---------- */

function TarotOracle() {
  const [card, setCard] = useState<Arcanum | null>(null);
  return (
    <OracleBlock
      title="Tirar 1 carta"
      instruction="Respire fundo, formule sua pergunta em silêncio e clique abaixo."
      action="Tirar carta"
      onDraw={() => setCard(pick(MAJOR_ARCANA))}
    >
      {card && (
        <div className="mt-6 rounded-sm border border-primary/40 bg-background/60 p-6 text-center glow-gold">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
            Arcano {card.symbol}
          </p>
          <p className="mt-3 font-serif text-3xl text-primary">{card.name}</p>
          <p className="mt-2 font-serif text-sm italic text-muted-foreground">
            {card.keyword}
          </p>
        </div>
      )}
    </OracleBlock>
  );
}

function EmblemOracle() {
  const [em, setEm] = useState<Emblem | null>(null);
  return (
    <OracleBlock
      title="Sortear 1 emblema"
      instruction="Pense num tema do dia, segure por um momento e sorteie o emblema."
      action="Sortear emblema"
      onDraw={() => setEm(pick(EMBLEMS))}
    >
      {em && (
        <div className="mt-6 rounded-sm border border-primary/40 bg-background/60 p-6 text-center glow-gold">
          <p className="font-serif text-6xl text-primary text-glow-gold">{em.glyph}</p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
            {em.name}
          </p>
          <p className="mt-3 font-serif text-base italic text-foreground/90">
            {em.phrase}
          </p>
        </div>
      )}
    </OracleBlock>
  );
}

function LifePathOracle() {
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);
  const result = useMemo(() => (submitted ? reduceLifePath(submitted) : null), [submitted]);

  return (
    <div className="rounded-sm border border-border/60 bg-card p-8 backdrop-blur-sm">
      <h3 className="font-serif text-2xl text-primary">Caminho de Vida</h3>
      <p className="mt-2 font-serif text-sm italic text-muted-foreground">
        Numerologia pitagórica a partir da sua data de nascimento.
      </p>

      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(date);
        }}
      >
        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary/80">
            Data de nascimento
          </span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="mt-2 w-full rounded-sm border border-input bg-background/60 px-3 py-2 font-mono text-sm text-foreground outline-none focus:border-primary"
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center rounded-sm border border-primary bg-primary/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary transition-all hover:glow-gold"
        >
          Calcular Caminho de Vida
        </button>
      </form>

      {result !== null && (
        <div className="mt-6 rounded-sm border border-primary/40 bg-background/60 p-6 text-center glow-gold">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
            Seu número
          </p>
          <p className="mt-3 font-serif text-6xl text-primary text-glow-gold">{result}</p>
          <p className="mt-4 font-serif text-base italic text-foreground/90">
            {LIFE_PATH_MEANING[result] ??
              "Um número raro no seu ciclo — respire e observe o que ele evoca."}
          </p>
        </div>
      )}
    </div>
  );
}

function OracleBlock({
  title,
  instruction,
  action,
  onDraw,
  children,
}: {
  title: string;
  instruction: string;
  action: string;
  onDraw: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-sm border border-border/60 bg-card p-8 backdrop-blur-sm">
      <h3 className="font-serif text-2xl text-primary">{title}</h3>
      <p className="mt-2 font-serif text-sm italic text-muted-foreground">{instruction}</p>
      <button
        onClick={onDraw}
        className="mt-6 inline-flex items-center rounded-sm border border-primary bg-primary/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary transition-all hover:glow-gold"
      >
        ✦ {action}
      </button>
      {children}
    </div>
  );
}

/* ---------- page ---------- */

function ExperimentePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary/80">
          ✦ Palhinha do observatório ✦
        </p>
        <h1 className="mt-6 font-serif text-5xl text-primary text-glow-gold">
          Experimente
        </h1>
        <p className="mt-4 mx-auto max-w-xl font-serif italic text-muted-foreground">
          Três gestos rápidos, sem cadastro. O céu completo se abre depois.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <TarotOracle />
        <EmblemOracle />
        <LifePathOracle />
      </div>

      <SacredFrame className="mt-24">
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary/80">
            ✦ Gostou da palhinha? ✦
          </p>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic text-foreground/90">
            O STELLIUM completo entrega leituras com a síntese de A Sacerdotisa,
            PDF, histórico e cruzamento entre oráculos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/planos"
              className="inline-flex items-center rounded-sm border border-primary bg-primary/10 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary glow-gold hover:bg-primary/20"
            >
              Criar conta grátis
            </Link>
            <Link
              to="/planos"
              className="inline-flex items-center rounded-sm border border-primary/40 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground hover:border-primary hover:text-primary"
            >
              Ver planos
            </Link>
          </div>
        </div>
      </SacredFrame>
    </div>
  );
}
