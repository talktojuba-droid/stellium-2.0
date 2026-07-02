## Referência
`stellium.art` — SaaS místico/astrológico em português. Visual: fundo azul-marinho profundo com geometria sagrada, acentos dourados, tipografia serifada elegante para títulos + monoespaçada para detalhes técnicos ("STELLIUM · OBSERVATORIUM · V.1.0"). Tom: contemplativo, cerimonial. Tagline: *"entre o silêncio & o símbolo eu caminho"*. Assinatura recorrente: *"✦ mapa ≠ destino ✦"*.

Escopo total do produto de referência (para contexto — **NÃO** entra tudo agora):
- Landing / planos / experimente
- Auth + 3 planos (Consulente grátis, Observatório R$33,30/mês, Labor Premium R$77,70/mês)
- Oráculos: Tarot (Rider-Waite, Marselha), Lenormand, Mesa Oracular, Mapa Astrológico, Numerologia, Cabala/Anjos/Gematria
- Histórico cruzado, biblioteca viva, horóscopo do dia
- Sínteses geradas por IA ("voz da Sacerdotisa"), PDF premium
- Videochamada agendada, fórum (Círculo Filosófico)

## Abordagem: construir em fases

Faremos por fatias pequenas e verificáveis. Este plano cobre **apenas a Fase 1 — Fundação Visual e Páginas Públicas**. Cada fase seguinte vira um pedido/plano próprio.

## Fase 1 — Fundação visual + páginas públicas (este plano)

### Objetivo
Um site público com identidade Stellium fiel à referência, navegável, sem backend/auth ainda. As leituras da página `/experimente` funcionam 100% no cliente (cálculos locais).

### Design system (`src/styles.css` + tokens semânticos)
- Paleta: azul-noite profundo (background), dourado antigo (accent), ciano suave (highlight/glow), tinta creme (texto).
- Fontes carregadas via `<link>` no `__root.tsx`: **Cormorant Garamond** (títulos serifados), **JetBrains Mono** (labels técnicas / preços), **Inter** (corpo).
- Componentes shadcn re-tematizados via tokens (button primary dourado outlined com glow, card com borda tênue e sombra interna).
- Background compartilhado: SVG de geometria sagrada + campo de estrelas sutil (componente `<StarfieldBackground />`).

### Estrutura de rotas (arquivos novos em `src/routes/`)
```text
__root.tsx      → meta Stellium, fontes, Header + Footer globais, background
index.tsx       → landing (hero "STELLIUM", 3 planos, rodapé "mapa ≠ destino")
experimente.tsx → 3 mini-oráculos gratuitos client-side
planos.tsx      → comparativo dos 3 planos + tabela de recursos
```

Todas com `head()` próprio (title, description, og:title, og:description em português).

### Componentes reutilizáveis (`src/components/stellium/`)
- `StelliumHeader` — logo + nav (Experimente / Planos / Entrar)
- `StelliumFooter` — assinatura "✦ mapa ≠ destino ✦" + "TECNOMANCIA CONTEMPLATIVA"
- `StarfieldBackground` — SVG animado leve (CSS-only, sem canvas)
- `SacredFrame` — moldura com cantos ornamentados usada no hero e cards
- `PlanCard` — card de plano (Consulente / Observatório / Labor)
- `HeroTitle` — bloco "STELLIUM · OBSERVATORIUM · V.1.0" + título + tagline

### Mini-oráculos client-side (`/experimente`)
Nenhum backend nesta fase — puro TypeScript no navegador:
1. **Tirar 1 carta** — sorteia entre 22 arcanos maiores (nomes + palavra-chave, sem imagens ainda) e mostra card com virada animada.
2. **Sortear 1 emblema** — 12 símbolos (sol, lua, torre, etc.) com frase curta.
3. **Caminho de Vida** — input de data de nascimento, calcula redução numerológica pitagórica e mostra o número + descrição breve.

Ambos usam `useState`, sem persistência. CTA final: "Criar conta grátis" e "Ver planos" (levam a `/planos` — auth vem na Fase 3).

### Página `/planos`
- 3 `PlanCard` lado a lado (mesmo componente da landing, variação `detailed`)
- Tabela comparativa de recursos (dados hard-coded neste projeto, exatamente como na referência)
- Botões de assinatura levam a `/planos#assinar` por enquanto (placeholder até Fase 3)

### O que NÃO entra na Fase 1
- Autenticação, cadastro, login, planos pagos
- Banco de dados / Lovable Cloud
- Backend / IA / "voz da Sacerdotisa"
- Cartas com imagens completas (só nomes + keyword nesta fase)
- Mapa astral real (a lib `circular-natal-horoscope-js` já está instalada, mas usar exige UI de local de nascimento com geocoding — vai na Fase 2)
- PDF, videochamada, fórum, horóscopo do dia
- Conexão ao domínio `stellium.art` (usuário faz pela UI depois de publicar)

## Fases seguintes (só para você ter o mapa — cada uma vira plano próprio)

- **Fase 2 — Mapa Astral funcional**: formulário (data/hora/local + geocoding), cálculo com `circular-natal-horoscope-js`, visualização circular dos planetas/casas. Ainda sem login, resultado só na sessão.
- **Fase 3 — Auth + planos (Lovable Cloud)**: cadastro/login, tabela `profiles`, roles (`consulente`, `observatorio`, `labor`), gating de rotas por role. Ainda sem cobrança real.
- **Fase 4 — Pagamentos**: Stripe (assinaturas mensais em BRL) via Lovable Cloud, webhook de status.
- **Fase 5 — Oráculos completos**: tarot com imagens, Lenormand, numerologia expandida, cabala.
- **Fase 6 — IA "voz da Sacerdotisa"**: sínteses via Lovable AI Gateway.
- **Fase 7 — Extras**: horóscopo do dia, biblioteca viva, PDF, fórum, agendamento de videochamada.

## Confirmação que preciso antes de eu partir para a construção

1. **OK topar a Fase 1 como descrita?** (design system + landing + `/experimente` + `/planos`, tudo client-side, sem auth)
2. **Alguma imagem/logo oficial** que você queira que eu use? Se não, sigo com um mark tipográfico + geometria sagrada gerada.
3. **Manter tagline e nomes exatos** da referência ("Consulente / Observatório / Labor Premium", "entre o silêncio & o símbolo eu caminho", "✦ mapa ≠ destino ✦")? Assumo que sim, mas confirme se quer variações.
