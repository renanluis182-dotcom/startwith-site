# Start With Consultoria

Nova homepage institucional da Start With, construída de forma independente e preparada para publicação na Vercel.

> Estado atual: versão de prévia. Não publicar nem apontar o domínio antes da validação institucional final.

## Sistema visual

- Turquesa: `#00BDBE`
- Roxo profundo: `#2F2978`
- Azul médio: `#1F5FA8`
- Accent suave: `#DCF9F8`
- Superfície clara: `#F4F7FC`
- Grafite: `#0E111B`
- Títulos: Sora 700–800
- Textos e apoio: Inter 400–600

Os gradientes são reservados ao símbolo, a destaques de marca e a blocos-chave. As áreas de conteúdo usam superfícies claras ou grafite para manter a leitura profissional.

## Experiência e interação

- Navegação com seção ativa e indicador de progresso de leitura.
- Cards de solução acessíveis por clique, toque, teclado e hover.
- Comparativo interativo com setas, seleção direta, gesto lateral e suporte a teclado.
- Menu mobile com foco controlado, fechamento por `Esc` e retorno ao botão de origem.
- Animações respeitam a preferência de redução de movimento do dispositivo.
- Canais sem URL confirmada não são exibidos no rodapé.

## Qualidade técnica

- Next.js App Router com páginas estáticas e otimização nativa de imagens.
- Metadados sociais, canonical, sitemap, robots, manifest e dados estruturados.
- Cabeçalhos básicos de segurança configurados em `next.config.ts`.
- `pnpm lint`, verificação de peer dependencies e `pnpm build` devem passar antes de qualquer publicação.

## Direção de imagens

A homepage prioriza registros reais de trabalho para mostrar a consultoria acontecendo ao lado da operação. O hero usa uma foto real em contexto, sem atribuir depoimentos ou resultados a pessoas que não os forneceram.

## Publicação

O projeto utiliza Next.js e pode ser conectado diretamente a um repositório Git na Vercel. O domínio principal só deve ser apontado depois da aprovação da versão de prévia.

O endereço do novo modelo de diagnóstico fica centralizado em `src/config/site.ts`. Todos os CTAs de Raio-X e diagnóstico devem usar essa configuração, evitando divergências entre header, hero, conteúdo e rodapé.

## Pendências antes da troca de domínio

- Confirmar CNPJ e dados institucionais do rodapé.
- Conectar o formulário ou CRM definitivo.
- Configurar `diagnostico.startwithconsultoria.com`.
- Publicar e vincular a política de privacidade.
- Confirmar telefone, endereço regional, CNPJ e perfis sociais usados nos dados estruturados.
