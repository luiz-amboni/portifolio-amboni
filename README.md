<div align="center">
  <h1>Luiz Amboni — Portfólio</h1>
  <p><strong>Desenvolvedor full-stack · Sistemas sob medida, do ERP ao WhatsApp do cliente</strong></p>
  <p>
    <a href="https://amboni.info">amboni.info</a> ·
    <a href="https://www.linkedin.com/in/luizamboni/">LinkedIn</a> ·
    <a href="https://www.npmjs.com/package/@amboni/ui">@amboni/ui no npm</a>
  </p>
</div>

---

## O que é

Portfólio de nove sistemas em produção ou entregues — CRM com jornada automatizada por
WhatsApp oficial, checkout próprio com PIX, plataforma de atas de licitação, e-commerce com
painel próprio, design system publicado no npm e um motor de licitação com IA.

Duas regras valem para todo o conteúdo:

1. **Nenhum número é estimado.** Os dados de cada projeto (módulos de API, tabelas,
   migrations, testes, componentes) foram contados no repositório correspondente. A data da
   contagem está na página de prova.
2. **Nenhum depoimento é inventado.** A versão anterior deste site trazia seis depoimentos
   que vinham como texto de exemplo do template. Foram removidos e substituídos por prova
   verificável: link que abre, pacote que instala, código que se lê. A página `/prova`
   explica isso.

Sistemas internos aparecem com print da **interface real com dados de demonstração** — nunca
com dado de cliente, nem borrado — e sem link, porque quem clica em CRM interno cai numa tela
de login.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS · React Router · Remix Icon · Deploy na Vercel

## Rodando localmente

```bash
npm install
cp .env.example .env      # preencha o endpoint do Formspree
npm run dev               # http://localhost:3000
```

Sem `VITE_FORMSPREE_ENDPOINT` o formulário de contato não tenta enviar: ele avisa e manda a
pessoa para o WhatsApp, em vez de falhar em silêncio.

## Comandos

| Comando              | O que faz                                          |
| -------------------- | -------------------------------------------------- |
| `npm run dev`        | servidor de desenvolvimento na porta 3000          |
| `npm run build`      | build de produção em `dist/`                       |
| `npm run preview`    | serve o build para conferência                     |
| `npm run lint`       | ESLint (zero warning permitido)                    |
| `npm run type-check` | TypeScript sem emitir arquivos                     |

Antes de commitar: `npm run lint && npm run type-check && npm run build`.

## Onde fica cada coisa

```text
src/
  constants.ts                  contato, links e os números do topo — fonte única
  data/projects.ts              os 9 projetos: problema, features, decisão, stack, imagens
  components/
    SiteHeader.tsx              header e navegação de todas as páginas
    ProjectCard.tsx             card de projeto (home e /projetos)
    DefaultLayout.tsx           casca das páginas de conteúdo
  pages/
    home/                       hero, sobre, serviços, projetos, prova, contato
    projetos/                   os 9 casos em detalhe, com âncora por slug
    especialidades/             serviços, processo, stack, modelos de trabalho, FAQ
    prova/                      compromissos técnicos e o que dá para conferir
    resume/                     currículo, com versão A4 para impressão
    privacy/                    política de privacidade
public/projetos/                screenshots dos projetos (JPEG otimizado)
```

Ao adicionar um projeto, edite **apenas** `src/data/projects.ts`: a home, a página de projetos
e o currículo leem daquele arquivo.

## Deploy

**Publicação manual, de propósito.** O projeto existe na Vercel (`portifolio-amboni`) mas
**não** está conectado ao repositório: `git push` não publica nada. Para subir é preciso rodar
o deploy à mão:

```bash
npx vercel deploy --prod
```

O `vercel.json` traz o fallback de SPA (sem ele `/projetos` daria 404 ao recarregar) e o cache
dos assets. O formulário depende de `VITE_FORMSPREE_ENDPOINT` estar configurada no projeto da
Vercel, além do `.env` local.

> `amboni.info` ainda é servido pelo Readdy — os NS do domínio são deles. Apontar para a
> Vercel exige mexer no DNS junto ao registrador; até então, o endereço público continua
> mostrando a versão antiga.

## Licença

Código sob licença MIT. O conteúdo — textos, imagens dos projetos e identidade visual — é de
uso pessoal e não está coberto pela licença.
