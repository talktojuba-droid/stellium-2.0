# Handoff: Stellium — Sistema Visual Novo (Landing + Dashboards + Mapa Astral)

## Overview
Este pacote reúne a nova direção visual do Stellium, prototipada em HTML nesta sessão de design: a **landing page redesenhada**, os **três dashboards por plano** (Consulente / Observatório / Labor Premium), o módulo de **Mapa Astral**, e o protótipo pré-existente do **Baralho Cigano**. Tudo foi construído em cima da paleta, tipografia e copy **reais** do site (`stellium-2.0`, React + TanStack Router + Vite + shadcn), lidos diretamente do repositório GitHub durante o processo — não são valores inventados.

O objetivo é **somar** uma camada visual mais rica e coerente ao produto existente, sem remover nenhuma funcionalidade, rota ou conteúdo já implementado.

## About the Design Files
Os arquivos `.dc.html` incluídos aqui são **referências de design** — protótipos que mostram a aparência e o comportamento pretendidos, escritos numa ferramenta de prototipagem própria (não é o framework do projeto real). **Não copie o HTML diretamente.** A tarefa é **recriar estes designs dentro do ambiente já existente do `stellium-2.0`** — React + TanStack Router + Vite + Tailwind/shadcn — reaproveitando os componentes, tokens e padrões que já existem no repositório (`src/styles.css`, `src/components/stellium/*.tsx`) sempre que possível, e criando novos componentes seguindo o mesmo padrão quando necessário.

Cada arquivo `.dc.html` pode ser aberto direto num navegador para ver o design funcionando (incluindo as interações e animações).

## Fidelity
**Alta fidelidade (hi-fi).** Cores, tipografia, espaçamento, animações e copy estão no ponto final aprovado — recrie pixel a pixel usando os componentes/tokens do `stellium-2.0`, não como um wireframe solto.

## Prioridade de implementação
1. **Landing page** (`STELLIUM - Landing (melhorada vs original).dc.html`, seção `#1a`) — substitui a landing atual (`/`), que já está no ar. **Pronta para implementar agora.**
2. **Dashboards + Mapa Astral** — são **telas novas** (Fase 3+ do produto: não existe ainda nenhuma rota de dashboard/painel logado no repositório). Dependem de autenticação e do sistema de planos existirem no backend antes de fazer sentido no ar. Implemente depois da Fase 1/2.
3. **Baralho Cigano** — protótipo standalone pré-existente, referenciado por nome (ainda sem link) dentro dos dashboards. Integração opcional, sem urgência.

---

## Design Tokens

### Cores (author em `oklch()` — suportado nativamente em todos os browsers evergreen; converta para hex apenas se o pipeline do projeto exigir)
Tokens **já existentes** no site (reaproveitados, não inventados):
- Dourado (brand primário): `oklch(0.78 0.13 82)`
- Ciano (brand secundário): `oklch(0.78 0.11 210)` a `oklch(0.83 0.14 195)`
- Fundo base: azul-noite profundo, `oklch(0.1–0.14 0.03–0.05 258–278)`

Tokens **novos**, introduzidos nesta leva de design — o **trio de planos**, usado para "quem é dono desta tela/elemento":
- Esmeralda (Consulente / plano gratuito): `oklch(0.72–0.9 0.08–0.18 165)`
- Rosa/magenta (Observatório / plano do meio — **virou o acento-herói da landing**, mais usado que o dourado no hero): `oklch(0.7–0.92 0.13–0.24 345–350)`
- Violeta (Labor Premium / plano top): `oklch(0.68–0.9 0.1–0.2 300–305)`

Tokens **novos**, sistema elemental (usado na roda de signos do horóscopo/mapa astral):
- Fogo `oklch(0.72 0.19 30)` · Terra `oklch(0.75 0.15 150)` · Ar `oklch(0.8 0.13 235)` · Água `oklch(0.72 0.17 300)`

### Tipografia
- **Orbitron** (400/500/700/900) — wordmark "STELLIUM", números de preço, headers técnicos.
- **Cormorant Garamond** (ital 300–600) — títulos serifados, taglines em itálico, nomes de planos/signos/cartas.
- **Chakra Petch** (300–700) — TODA legenda em caixa-alta com tracking largo (labels, nav, botões, badges). É a família mono-display que os designs **novos** (dashboards, mapa astral, landing redesenhada) padronizam.
- **Space Mono / JetBrains Mono** — usadas no chrome **original** do site (`STELLIUM - Telas Iniciais.dc.html`, login/experimente). Recomendação: escolher **uma só** família mono daqui pra frente — sugiro **Chakra Petch**, já que é a que os designs mais recentes (e a maioria das telas) usam.

### Raio de borda
`999px` (pills/botões/badges) · `28–32px` (cards de plano, cards grandes) · `18–22px` (módulos/cartas menores) · `10px` (containers de página).

### Sombras / glow
Padrão recorrente: `0 0 <blur>px -<spread>px <cor>` para glow suave sem borda dura (ex.: `0 0 40px -16px oklch(0.72 0.16 165 / 0.7)` no hover de um card). Cards "destacados" somam um glow **inset** (`inset 0 0 30px -22px <cor>`) para um brilho interno.

### Animações (keyframes — definidos uma vez, reaproveitados em todos os arquivos)
`st-twinkle` (estrelas cintilando) · `st-pulse` (respiração de opacidade) · `st-spin` / `st-spin-rev` (rotação/rotação reversa) · `st-blink` (cursor de texto digitado) · `st-neon` (piscar de LED) · `st-sweep` (brilho deslizante em borda, usado no card de plano em destaque) · `st-float` (flutuação com leve rotação, símbolos decorativos) · `st-shimmer` (texto em degradê deslizante, usado no wordmark) · `st-breathe` (escala + opacidade pulsando, halos) · `st-orbit` (rotação lenta, geometria sagrada).
Todos os arquivos incluem a guarda de acessibilidade `@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }` — preserve isso na implementação.

---

## Screens / Views

### 1. Landing Page
**Arquivo:** `STELLIUM - Landing (melhorada vs original).dc.html` → seção `id="1a"` (a seção `id="1b"` logo abaixo é apenas uma recriação fiel da landing **atual**, mantida só para comparação lado a lado — **não é para implementar**, é referência).

**Purpose:** página de entrada/marketing — apresenta a marca, os 3 planos, e leva para `/experimente`, `/planos` e login.

**Layout:** coluna central (o protótipo usa 1180px fixos; no site real, reconcilie com o max-width já usado em `__root.tsx`/`styles.css` em vez de usar 1180px fixo). De cima para baixo:

1. **Barra superior (nav)** — 56px de altura, fundo escuro translúcido, borda inferior. Contém: logo em hexagrama (SVG, dois triângulos sobrepostos) + wordmark "STELLIUM"; badge pill "✧ A SACERDOTISA"; nav à direita. **Nota importante:** o protótipo simplificou a nav para só um botão "Portal" — no site real, restaure a navegação completa (Experimente / Planos / Entrar) do `StelliumHeader.tsx`, mantendo o estilo visual novo (pills, glow, hexagrama).

2. **Hero** — fundo radial (elipse escura violeta). Camadas, de trás pra frente:
   - Campo de estrelas (SVG, ~74 pontos, posições pseudo-aleatórias com seed fixa, cintilando, ~20% douradas).
   - **Geometria sagrada central (580×580px)**: **Cubo de Metatron** construído corretamente a partir da **Fruta da Vida** (13 círculos: 1 central + 6 tocando o centro a distância `2r` + 6 externos a `2r·√3`, `r=15` num viewBox 200×200) com **todos os 13 centros ligados por retas** (78 linhas) — isso é a construção geometricamente correta, não círculos soltos. Uma segunda camada com hexágono + círculo gira em sentido contrário. Um glow radial pulsa no centro.
   - Símbolos flutuantes decorativos (✦✧☽⟡✵❋) espalhados, subindo/descendo com leve rotação, cada um numa cor de acento diferente.
   - **Constelação de Aquário — o Cântaro (Water Jar)**, desenhada como o **asterismo real** (referência IAU/Ridpath): ζ (Sadachbia) no vértice do Y central ligando a γ, η, π (a boca do jarro); α (Sadalmelik) e β (Sadalsuud) como os "ombros"; uma cadeia de 6 pontos menores descendo representando o fluxo de água. **Sem rótulos de texto** (removidos a pedido — mantenha só o desenho gráfico). Posicionada canto superior esquerdo.
   - Texto central: eyebrow pill pulsante "✦ OBSERVATORIUM ✦"; H1 "STELLIUM" (Orbitron 76px, letter-spacing 0.16em) com **degradê animado multicor** (rosa→violeta→dourado→ciano→rosa, texto preenchido pelo gradiente, brilho por trás); tagline em itálico que **se digita sozinha**, caractere por caractere (55ms/char), segura ~2.6s, apaga e cicla por 3 frases (inclui "mapa ≠ destino — o céu é só linguagem."), com cursor piscando; 3 CTAs em pill (Experimente / Portal / Escada), cada um sobe 3px e intensifica o glow no hover.

3. **Carta do dia (interativa)** — eyebrow "✧ Sua carta do dia ✧" com hairlines em degradê. Card de 172×258px com **flip 3D em CSS** (`perspective` + `rotateY(180deg)`, 0.8s) ao clicar: frente = glifo girando (7 círculos + ✦ central); verso = um arcano sorteado aleatoriamente entre 6 opções (símbolo + nome + palavra-chave), com o texto aparecendo ~440ms depois do início do flip (para sincronizar com o meio do giro). Clicar de novo desvira.

4. **Planos — layout "degrau"** — grid de 3 colunas. O card do meio (**Observatório**) fica **elevado** (`translateY(-14px)`, mais padding, mais glow, borda-brilho animada no topo, badge "✦ mais escolhido" flutuando sobre a borda superior) — é o plano que o produto quer vender mais. Cada card: marcador romano + rótulo (☾ I "o limiar" / ✦ II "a ascensão" / ☽ III "o círculo"); nome do plano; subtítulo em itálico; preço; lista de benefícios (ícone colorido + texto); CTA pill no rodapé. **As cores de cada card seguem o trio de planos** (esmeralda/rosa/violeta) descrito em Design Tokens — esse é o sistema de cor mais importante para levar ao `PlanCard.tsx` real. Copy e preços são os reais do repositório (Consulente Gratuito · Observatório R$ 33,30/mês · Labor Premium R$ 77,70/mês) com os bullets exatos de cada plano.

5. **Rodapé** — disclaimer em itálico "Material simbólico e espiritual para autoconhecimento. Mapa ≠ destino." + a assinatura de marca "✦ Tecnomancia Contemplativa ✦" (frase recorrente em todas as telas — mantenha verbatim).

**Interactions & behavior:**
- Tagline: máquina de estado simples (índice da frase atual + substring digitada), loop infinito via `setTimeout` recursivo — ver `typeLoop()` no arquivo.
- Carta do dia: dois booleanos (`dailyFlipped`, `dailyRevealed`, o segundo atrasado por `setTimeout(440ms)`) + um índice aleatório sorteado a cada novo flip.
- Hover em CTAs/cards: `translateY` + glow mais forte, transição 0.25–0.3s.
- Toda animação respeita `prefers-reduced-motion`.

**Assets:** nenhuma imagem externa — tudo é SVG gerado via JS (estrelas, geometria, constelação, logo, glifos da carta). Fontes via Google Fonts (ver `<link>` no `<helmet>` do arquivo para a query string exata).

---

### 2–4. Dashboards (Consulente · Observatório · Labor Premium)
**Arquivos:** `STELLIUM - Dashboards.dc.html` (Consulente/gratuito), `STELLIUM - Observatorio.dc.html`, `STELLIUM - Labor.dc.html`.

**Contexto importante:** estas são **telas novas** — não existe ainda nenhum dashboard/painel logado no repositório `stellium-2.0` (que hoje só tem `/`, `/experimente`, `/planos`). Os três arquivos são **quase idênticos estruturalmente** (o Labor foi duplicado do Consulente e depois ajustado) — implemente como **um único dashboard parametrizado por plano** (prop/contexto `plano: "consulente" | "observatorio" | "labor"`), não como 3 páginas separadas.

**Purpose:** o painel logado do usuário — céu do dia, leituras, calendário lunar, mapa astral, e os módulos que cada plano libera.

**Shell compartilhado por todos os planos:**
- **Barra superior** (62px) com botão "Menu" em pill (glow violeta, ícone ≡ que vira ✕, rótulo alterna Menu/Fechar).
- **Drawer lateral** (250px) que desliza **por cima** do conteúdo (position fixed, não empurra o layout), com fundo escurecido atrás que fecha ao clicar fora — **não é um sidebar fixo tradicional**. Esse padrão de drawer deve ser reaproveitado para qualquer navegação mobile-style no resto do site.
- Sidebar contém: mini-perfil, lista de módulos (ver diferenças por plano abaixo), badge/contador de uso do plano, card de upsell no rodapé (temático por plano).

**Conteúdo principal, de cima para baixo (igual nos 3 planos — só o que está bloqueado/desbloqueado muda):**
1. **Card de perfil astral** — avatar (monograma), nome/@usuário/badge do plano, dados de nascimento; **Big Three** (Sol/Lua/Ascendente) em 3 mini-cards; **Arcano Pessoal** (carta de tarô derivada da data de nascimento) + **Lua natal** (fase da Lua no nascimento) + **Elemento dominante**; **roda do mapa natal em SVG** (12 setores do zodíaco com glifos reais, casas a partir do Ascendente, planetas plotados por longitude, linhas de aspecto) com **planetas clicáveis** (ao clicar, abre um mini-texto interpretativo).
2. **Banner de saudação + Horóscopo do dia** — Lua animada com relevo realista (crateras via luz direcional simulada) + halo/anéis orbitais; card de horóscopo que **muda de cor conforme o signo selecionado**, com leitura gerada por IA (`window.claude.complete`), barras de Amor/Trabalho, selo de número da sorte. Cada signo tem sua **constelação real** desenhada (ver nota de constelações abaixo) — sem emoji, só os SVGs.
3. **Tiragem de Tarô de Marselha** (3 cartas) — campo de intenção do dia → ritual de "respiração" (~6s, overlay com círculo pulsante) → revelação das 3 cartas (Passado/Presente/Futuro) com significado + leitura-síntese por IA; painel de correspondências (cristal/erva/cor/dia) da carta central.
4. **Calendário Lunar interativo** — grade do mês com ícone de lua (fase real, calculada) em cada dia; as 4 fases principais (Nova/Cheia/Quartos) rotuladas direto na grade; clique num dia abre painel de detalhe (nome da fase, % iluminada, ritual sugerido, tags "melhor para"); selos de próxima Lua Cheia/Nova.
5. **Grid de leituras avulsas** — Tarô 1 carta, Cruz Celta, Baralho Cigano, Numerologia — cada uma com ícone de geometria sagrada (Merkaba, Cubo de Metatron, hexágono, roda) e preço.
6. **Banda de agendar sessão / upsell**, temática por plano.

**Diferenças por plano (é isso que muda entre os 3 arquivos):**
- **Consulente** (gratuito): itens de módulo completo (Biblioteca, Mapa Astral, Círculo Filosófico) aparecem **bloqueados** (dim, badge "PRO"/"LABOR"); leituras diárias marcadas "CORTESIA" com contador de uso.
- **Observatório**: desbloqueia **Biblioteca** e **Mapa Astral** (link real); Círculo Filosófico continua bloqueado; acesso ilimitado às leituras diárias (sem selo "cortesia").
- **Labor Premium**: **tudo** desbloqueado, incluindo Círculo Filosófico; card de upsell promove a comunidade/fórum em vez de pedir upgrade.

**Nota crítica sobre constelações:** todas as figuras de constelação (na roda do perfil e no card de horóscopo) usam agora **asterismos reais** (referência IAU/Ridpath), não formas decorativas — ex.: Leão = a Foice + triângulo de Denébola; Escorpião = Antares + o anzol/ferrão; Sagitário = o Bule (Teapot); Touro = o V das Híades + chifres; Aquário = o Cântaro. Os dados-fonte são o array `CONST` no topo da classe de cada arquivo (`p` = pontos normalizados 0–100, `s` = pares de índices que formam os segmentos) — trate esse array como fonte da verdade.

**IA:** os textos de horóscopo, a síntese da tiragem de tarô, e a interpretação do mapa astral são gerados via `window.claude.complete` **no navegador** — isso é um atalho de protótipo. Na implementação real, mova essas chamadas para o backend, usando os dados reais de nascimento do usuário (e, idealmente, posições planetárias reais — ver próximo tópico).

**Pendência conhecida (não resolvida no protótipo):** as posições planetárias e trânsitos do dia usados no horóscopo/perfil são **valores fixos de exemplo**, não calculados de efemérides reais. Recomendo tratar isso como requisito de backend antes de lançar (calcular Sol/Lua/Ascendente/planetas de verdade a partir de data/hora/local de nascimento).

---

### 5. Mapa Astral (módulo)
**Arquivo:** `STELLIUM - Mapa Astral.dc.html`

**Purpose:** tela dedicada ao mapa natal completo, aberta a partir do link "Mapa astral" na sidebar do Observatório/Labor (hoje é um `<a href>` simples — trocar por navegação real do router).

**Conteúdo:** roda do mapa natal grande (420px, mesma técnica de desenho do card de perfil, mas com números de casas e linhas de aspecto coloridas por tipo — trígono em verde, sextil em ciano, quadratura em vermelho tracejado); faixa Big Three; tabela de posições planetárias (glifo/nome/signo/grau/casa); lista de aspectos principais; botão "Interpretar meu mapa" que gera uma leitura via IA.

---

### 6. Baralho Cigano — Nova Leitura (protótipo adjacente, pré-existente)
**Arquivo:** `Baralho Cigano - Nova Leitura.dc.html`

Fluxo standalone de tiragem com o baralho cigano (36 cartas / Mesa Real), já existente antes desta leva de design. É referenciado **por nome** (ainda sem link) no grid de leituras avulsas dos dashboards ("Baralho Cigano · Mesa Real"). Usa uma escala tipográfica ligeiramente diferente (Space Mono) do sistema mais novo (Chakra Petch) — considere re-alinhar visualmente antes de linkar de verdade, ou linkar como está se a prioridade for só ter o fluxo funcionando.

---

## Assets
Nenhuma imagem/ícone externo em nenhum dos arquivos — tudo é SVG gerado via JavaScript (`React.createElement`) em tempo de render: campos de estrelas, geometria sagrada, constelações, luas com relevo, rodas de mapa astral, glifos de planetas. Fontes carregadas via Google Fonts (ver `<link>` no `<helmet>` de cada arquivo).

## Files
- `STELLIUM - Landing (melhorada vs original).dc.html` — landing redesenhada (`#1a`) + original para comparação (`#1b`)
- `STELLIUM - Dashboards.dc.html` — dashboard plano Consulente
- `STELLIUM - Observatorio.dc.html` — dashboard plano Observatório
- `STELLIUM - Labor.dc.html` — dashboard plano Labor Premium
- `STELLIUM - Mapa Astral.dc.html` — módulo de mapa astral
- `Baralho Cigano - Nova Leitura.dc.html` — protótipo adjacente (referenciado, não linkado)
- `STELLIUM - Telas Iniciais.dc.html` — referência adicional: mockups de login e `/experimente` (Fase 1) que usam o mesmo sistema visual da landing original; incluído para contexto, sem alterações pendentes.
