---
name: geometria-sagrada
description: Use this skill whenever generating, reviewing, or editing SVG/code for sacred geometry figures (Flower of Life, Metatron's Cube, golden ratio spirals, Platonic solids, Tree of Life) or zodiac constellations/asterisms for the Stellium project. Ensures mathematically correct construction instead of decorative approximation.
---

# Geometria Sagrada e Constelações — Construção Precisa

Este skill existe porque geometria sagrada e constelações não são
ilustração livre: são construções com método matemático/observacional real.
Uma figura "parecida" mas mal construída não representa o símbolo que diz
representar. Sempre priorize precisão sobre estética — o estilo (cor,
espessura, arredondamento) é decisão separada e vem depois.

## Antes de gerar qualquer figura, pergunte

1. Qual é o nome exato da figura? (ex: "Semente da Vida" ≠ "Flor da Vida")
2. Qual o método de construção correto dela? (ver referência abaixo)
3. O código gerado implementa esse método, ou aproxima visualmente?
4. Se for aproximação estilizada (não um diagrama de referência), isso
   está sinalizado no código/comentário como tal?

## Referência de construção — Geometria Sagrada

**Razão áurea (φ = 1.6180339887...)**
Retângulos e espirais áureas derivam do quadrado de Fibonacci
(1,1,2,3,5,8,13,21...). Nunca aproximar a proporção "a olho" — calcular a
partir do lado anterior da sequência.

**Vesica Piscis**
Dois círculos de raio `r`, centros distantes exatamente `r` um do outro.
A interseção é a Vesica Piscis — base de toda a Flor da Vida.

**Semente da Vida vs. Flor da Vida**
- Semente da Vida = 7 círculos (1 central + 6 ao redor, cada um passando
  pelo centro do central).
- Flor da Vida = extensão para 19 círculos completos. São estágios
  diferentes da mesma construção — rotular corretamente qual está sendo
  desenhado.

**Cubo de Metatron**
Parte dos centros de círculo da Flor da Vida (13 pontos); conecta cada
centro a todos os outros com linhas retas. Contém, embutida, a projeção 2D
dos 5 sólidos platônicos — se o objetivo é ilustrar um sólido específico,
extrair a projeção correspondente do Cubo, não desenhar solto ao lado.

**Sólidos Platônicos**
Tetraedro (4 faces), Cubo (6), Octaedro (8), Dodecaedro (12), Icosaedro
(20). Associação a elementos (fogo/terra/ar/éter/água) varia conforme a
tradição — confirmar com o conteúdo textual aprovado antes de rotular.

**Árvore da Vida**
10 sefirot em 3 pilares verticais (misericórdia/severidade/equilíbrio) +
caminhos conectivos. Posições são fixas na tradição — se reposicionar por
motivo de layout, sinalizar explicitamente como adaptação estilística.

## Referência de construção — Constelações/Asterismos (Stellium)

Base real: IAU / atlas de Ridpath. Usar sempre o **asterismo** (recorte
popular consagrado), nunca inventar ligações entre estrelas.

| Signo | Asterismo | Estrela-âncora |
|---|---|---|
| Leão | A Foice + triângulo de Denébola | — |
| Escorpião | Anzol/ferrão | Antares |
| Sagitário | O Bule (Teapot) | — |
| Touro | V das Híades + chifres | Aldebaran |
| Aquário | O Cântaro (ζ·γ·η·π), fluxo até Fomalhaut | — |
| Áries, Gêmeos, Câncer, Virgem, Libra, Capricórnio, Peixes | já revisados nos 3 dashboards | — |

Regra de dado: pontos normalizados em coordenadas 0–100; índice 0 sempre
é a estrela-âncora. Todo componente `CONST` / `buildConst` deve seguir
esse formato. Constelação nova → primeiro pesquisar o asterismo real
correspondente, depois codificar.

## Sistema visual (aplicar por cima da construção correta)

- Paleta OKLCH por contexto: Esmeralda `oklch(0.72–0.9 0.08–0.18 165)`
  (Consulente) · Rosa/magenta `oklch(0.7–0.92 0.13–0.24 345–350)`
  (Observatório) · Violeta `oklch(0.68–0.9 0.1–0.2 300–305)` (Labor) ·
  Dourado `oklch(0.78 0.13 82)` e Ciano `oklch(0.78–0.83 0.11–0.14 195–210)`
  (legado, neutros — usar para geometria/constelações que não pertencem a
  um plano específico) · Fundo `oklch(0.1–0.14 0.03–0.05 258–278)`.
- Traço: geométrico e fino (0.4–1px em SVG), nunca orgânico.
- Tipografia associada (se o componente incluir texto): Orbitron
  (técnico/wordmark), Cormorant Garamond itálico (nomes/títulos), Chakra
  Petch (labels caixa-alta).
- Cantos: pills 999px, cards 28–32px — contraste entre traço técnico fino
  e interface acolhedora arredondada.

## Checklist final antes de considerar a figura pronta

- [ ] Nome da figura confirmado e correto
- [ ] Método de construção implementado (não aproximado a olho)
- [ ] Se aproximação estilizada, está sinalizada como tal
- [ ] Paleta aplicada de acordo com o contexto (plano vs. neutro)
- [ ] Nenhum rótulo de texto sobre desenhos que devem ficar "limpos"
      (ex: constelação principal da landing)
- [ ] Dados de constelação seguem formato `CONST`/`buildConst` (0–100,
      índice 0 = âncora)
