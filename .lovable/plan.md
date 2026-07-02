## Situação

O repositório `talktojuba-droid/stellium-2.0` agora está público e consegui ler todo o conteúdo. A comparação com este projeto mostra que **quase tudo já é idêntico**:

- Landing page (`src/routes/index.tsx`) → igual
- Meta tags do `__root.tsx` → iguais ("Landing Page de Teste")
- Stack, componentes shadcn, estilos → iguais

**Única diferença real:** o `package.json` do repo tem a dependência `circular-natal-horoscope-js` (biblioteca de mapa astral / astrologia natal), mas **nenhum código do repo usa ela** — está instalada e não referenciada.

Não há telas, componentes, rotas, features de astrologia, banco de dados nem assets extras a sincronizar.

## Plano

1. **Instalar a dependência faltante** para deixar o `package.json` alinhado com o do GitHub:
   - `bun add circular-natal-horoscope-js`

2. **Não alterar nenhum outro arquivo** — o restante já bate com o repo.

3. Ao final, o projeto Lovable ficará com o mesmo conteúdo funcional do repo `stellium-2.0`.

## O que este plano NÃO faz

- **Não conecta o Lovable ao repositório existente do GitHub.** O Lovable não suporta importar/vincular um repo já existente — só criar um novo pelo menu **+ → GitHub → Connect project**. Isso continua sendo passo manual seu.
- **Não conecta o domínio.** É feito por você em **Publish → Add custom domain** depois de publicar (fluxo já explicado antes).
- **Não adiciona funcionalidades de astrologia.** A lib `circular-natal-horoscope-js` fica disponível, mas para construir de fato o Stellium (mapa astral, formulário de dados de nascimento, cálculo de casas/planetas, visualização) é preciso um novo pedido detalhado — me diga se quer que eu proponha um plano separado para isso.

## Confirmação que preciso

Você quer que eu:
- (A) execute só o passo 1 (instalar a dep) para bater 1:1 com o repo, **ou**
- (B) além disso, já monte um plano para começar a construir de verdade as features de astrologia do Stellium (mapa natal, etc.)?
