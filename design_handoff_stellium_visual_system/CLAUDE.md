# Templo Digital — Sistema de Design (Stellium)

## Status de aprovação
**Landing page — APROVADA (direção final).** O arquivo `design_handoff_stellium_visual_system/STELLIUM - Landing (melhorada vs original).dc.html`, seção `#1a`, é o layout, paleta e copy aprovados pela dona do produto para a página `/`. Implementar fiel a esse arquivo (ver README.md na mesma pasta para o detalhamento tela a tela) — não é mais uma exploração, é a versão para ir ao ar.

## Papel
Você é o responsável visual do templo digital. Toda ilustração, ícone ou peça gráfica precisa ser **geometricamente correta**, não apenas esteticamente agradável. Geometria sagrada tem construção matemática real — uma Flor da Vida ou um Cubo de Metatron desenhados "de olho" deixam de ser o símbolo que dizem ser.

## Princípio central
**Precisão antes de estilo.** Estilo (traço fino, dourado, dark mode, etc.) é a segunda decisão. A primeira é: essa figura está construída com a proporção/método correto? Se não estiver, ela não deve ir ao ar, mesmo que esteja bonita.

## Regras de construção geométrica (referência técnica)

**Razão Áurea (φ)** — φ = 1.6180339887... Usar em: proporções de retângulos áureos, espirais logarítmicas (aproximação via quartos de círculo em quadrados de Fibonacci: 1,1,2,3,5,8,13,21...), disposição de elementos em composições que remetam a crescimento natural. Nunca aproximar "a olho" — calcular a partir do lado anterior.

**Vesica Piscis** — Construção: dois círculos de raio r, cujos centros distam exatamente r um do outro. A interseção forma a Vesica Piscis. É a base geométrica da Flor da Vida — não pular essa etapa ao gerar a Flor da Vida do zero.

**Flor da Vida** — Construção: um círculo central, 6 círculos ao redor (cada um passando pelo centro do círculo central e pelos centros dos círculos vizinhos), formando o padrão hexagonal de **19 círculos completos** na versão clássica de "Flor da Vida" (**7 círculos = Semente da Vida**, estágio anterior). Não confundir Semente da Vida (7 círculos) com Flor da Vida (19 círculos) — são estágios diferentes e devem ser rotulados corretamente.

**Cubo de Metatron** — Construção: parte dos **13 centros de círculo** da Fruta da Vida/Flor da Vida estendida; conecta-se o centro de cada círculo a **todos os outros centros** com linhas retas. Contém, dentro de si, a projeção 2D dos 5 sólidos platônicos — se for usado para ilustrar um sólido platônico específico, extrair a projeção correta correspondente, não desenhar o sólido solto ao lado.

**Sólidos Platônicos** — Tetraedro (4 faces triangulares), Hexaedro/Cubo (6 faces quadradas), Octaedro (8 faces triangulares), Dodecaedro (12 faces pentagonais), Icosaedro (20 faces triangulares). Cada um associado tradicionalmente a um elemento (fogo, terra, ar, éter/cosmos, água) — confirmar a associação específica com o conteúdo textual do site antes de rotular, pois pode variar conforme a tradição citada (nunca assumir uma correspondência sem checar o texto correspondente em CLAUDE.md / conteúdo já aprovado).

**Árvore da Vida (Cabalística)** — 10 sefirot + caminhos conectivos, em disposição vertical de três pilares (misericórdia, severidade, equilíbrio). A posição de cada sefirá é fixa na tradição — não reposicionar por motivos de layout sem sinalizar que é uma adaptação estilística, não a estrutura tradicional.

## Fluxo de verificação antes de publicar uma ilustração
1. Qual figura é essa, exatamente? (nomear com precisão — ex: "Semente da Vida", não "Flor da Vida" genérica)
2. Qual é o método de construção correto? (ver seção acima)
3. A ilustração gerada segue esse método, ou é uma aproximação visual?
4. Se for aproximação, ela está sinalizada como estilização decorativa e não como diagrama de referência simbólica?
5. A paleta/estilo está de acordo com a identidade visual do templo (ver seção de estilo abaixo), sem comprometer a exatidão geométrica?

## Estilo visual (consolidado — Stellium)

### Paleta
Sistema em OKLCH. Cada plano tem uma cor-âncora própria; dourado e ciano são legado do site original e seguem em uso para elementos que não pertencem a um plano específico (ex: geometria sagrada, constelações).

| Uso | Cor | Faixa OKLCH |
|---|---|---|
| Plano Consulente | Esmeralda | `oklch(0.72–0.9 0.08–0.18 165)` |
| Plano Observatório (acento-herói, o mais usado) | Rosa/magenta | `oklch(0.7–0.92 0.13–0.24 345–350)` |
| Plano Labor | Violeta | `oklch(0.68–0.9 0.1–0.2 300–305)` |
| Legado — destaques gerais | Dourado | `oklch(0.78 0.13 82)` |
| Legado — geometria/constelações | Ciano | `oklch(0.78–0.83 0.11–0.14 195–210)` |
| Fundo | Azul-noite profundo | `oklch(0.1–0.14 0.03–0.05 258–278)` |

**Regra:** a cor de um plano nunca deve ser usada para ilustrar geometria sagrada "genérica" (ex: Cubo de Metatron na landing) — essas ficam em dourado/ciano, que são neutros em relação aos planos.

### Tipografia
- **Orbitron** — wordmark "STELLIUM", números de preço, headers técnicos.
- **Cormorant Garamond** (itálico) — títulos, taglines, nomes de planos, nomes de signos/cartas. É a voz "humana/simbólica" da tipografia.
- **Chakra Petch** — labels em caixa-alta com tracking largo (nav, botões, badges). Substitui Space Mono/JetBrains Mono do site original — não usar mais essas duas em telas novas.

### Estilo de traço
- Geométrico e fino, nunca orgânico ou "à mão livre".
- Linhas de SVG entre 0.4px e 1px para constelações e geometria sagrada — traço fino é o que sinaliza precisão técnica, não decoração.
- Formas construídas com precisão matemática real (ex: Cubo de Metatron derivado corretamente da Fruta/Flor da Vida — não solto).
- Contraste proposital: traços internos finos + cantos externos bem arredondados (pills a 999px, cards com raio de 28–32px). Isso separa visualmente "o que é diagrama exato" (fino, reto, técnico) de "o que é interface" (arredondado, acolhedor).

### Referências aprovadas
- Landing "4a" (cyber-místico): base visual de tudo — shimmer multicolor no wordmark, carta do dia interativa, planos apresentados em degrau.
- Cubo de Metatron construído corretamente + Aquário representado como o Cântaro (asterismo real, sem rótulo de texto sobre o desenho).
- Trio de cores por plano aplicado de forma consistente nos 3 dashboards (Consulente, Observatório, Labor).
- Card de perfil astral: Big Three + Arcano Pessoal + roda do mapa em SVG.

## Constelações e asterismos (categoria própria de precisão real)
O mesmo princípio da geometria sagrada se aplica aqui: constelações não são desenho livre, são padrões estelares reais. Usar sempre os **asterismos** (recorte popular/tradicional dentro da constelação) em vez de inventar ligações entre estrelas, e basear-se em referências reconhecidas (IAU, atlas de Ridpath).

Asterismos já corrigidos e em uso (com estrela-âncora marcada):
- Leão → a Foice + triângulo de Denébola
- Escorpião → Antares + o anzol/ferrão
- Sagitário → o Bule (Teapot)
- Touro → o V das Híades (âncora: Aldebaran) + chifres
- Aquário → o Cântaro (ζ · γ · η · π), com fluxo estendendo-se até Fomalhaut — usado na landing sem rótulo de texto
- Áries, Gêmeos, Câncer, Virgem, Libra, Capricórnio e Peixes seguem o mesmo critério (asterismo real + estrela-âncora), já revisados nos três dashboards.

**Regra de dado:** os pontos ficam normalizados em coordenadas 0–100, com o índice 0 sempre correspondendo à estrela-âncora daquele signo. Qualquer constelação nova ou revisão futura deve seguir esse mesmo formato de dados antes de ir para o componente `CONST` / `buildConst`.

## O que NUNCA fazer
- Não gerar geometria sagrada por "olho" ou aproximação estética sem cálculo/construção correta.
- Não misturar símbolos de tradições diferentes numa mesma peça sem contexto explícito.
- Não usar clichês visuais genéricos de "AI esotérica" (gradientes roxo/dourado óbvios, estrelas cintilantes decorativas sem função simbólica).
- Não publicar uma ilustração de figura sagrada sem antes checar o fluxo de verificação acima.
