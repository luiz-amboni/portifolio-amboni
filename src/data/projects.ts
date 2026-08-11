/**
 * Os projetos reais, em produção ou entregues.
 *
 * Regra deste arquivo: nenhum número aqui é estimado. Cada um foi contado no código
 * (rotas, tabelas, migrations, testes, componentes) ou lido do painel do serviço.
 * Se um dado não pôde ser conferido, ele não entra.
 *
 * Sistemas internos (CRM, painéis) não recebem link: quem clica cai numa tela de
 * login e desiste. A prova deles é a imagem — capturada da interface real, com
 * dados de demonstração no lugar dos dados de cliente.
 */

export type ProjectStatus = 'producao' | 'entregue' | 'interno';

export interface ProjectLink {
  label: string;
  url: string;
  kind: 'site' | 'repo' | 'npm' | 'docs';
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  /** true = print de tela de sistema interno com dados de demonstração */
  demo?: boolean;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  /** o que o sistema resolve, em uma linha */
  tagline: string;
  category: string;
  period: string;
  status: ProjectStatus;
  /** o problema de negócio, sem jargão */
  problem: string;
  /** o que o sistema faz */
  features: string[];
  /** a decisão técnica que vale contar */
  decision?: string;
  stack: string[];
  metrics?: ProjectMetric[];
  images?: ProjectImage[];
  links?: ProjectLink[];
  /** por que não há link, quando não há */
  note?: string;
  featured?: boolean;
}

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  producao: 'Em produção',
  entregue: 'Entregue',
  interno: 'Sistema interno',
};

export const projects: Project[] = [
  {
    slug: 'isafe-crm',
    name: 'iSafe CRM',
    tagline: 'Acompanha o cliente do 3º ao 365º dia depois da compra, pelo WhatsApp oficial.',
    category: 'CRM & Automação',
    period: 'abr/2026 — atual',
    status: 'producao',
    featured: true,
    problem:
      'Uma loja vende um iPhone de oito mil reais e o cliente vai embora. O próximo contato é daqui a dois anos — se houver. O pós-venda não existia e ninguém media isso: a venda acabava na nota fiscal.',
    features: [
      'Jornada automática por cliente, do D+3 ao D+365, montada a partir dos pedidos do ERP Bling',
      'Cada etapa é uma mensagem no WhatsApp oficial da Meta — dica de uso, dica avançada, prova social, oferta de acessório compatível, semente de upgrade e aniversário de compra',
      'A mensagem depende do que a pessoa comprou, de quanto tempo faz e se ela já respondeu antes — não é disparo em massa',
      'Tela de custo e ROI: o preço que a Meta cobra por conversa, convertido pela cotação do dia do envio e somado por automação',
      'Controle de acesso por categoria de usuário — quem é do atendimento não vê custo',
      'Caixa de entrada com as respostas dos clientes e as quatro etapas de entrega (aceito, entregue, lido, falhou)',
    ],
    decision:
      'O bug mais caro do projeto não derrubou nada: mandou a mesma mensagem duas vezes para o mesmo cliente. Dois ciclos do agendador liam a mesma fila antes de qualquer um marcar como enviado — SELECT não bloqueia nada. A correção veio em camadas: advisory lock no PostgreSQL (o segundo processo desiste, porque mensagem atrasada é melhor que mensagem repetida), restrição UNIQUE em cliente + etapa + pedido como defesa que não depende de eu lembrar, e o registro do envio na mesma transação do envio. Em sistema que fala com gente, idempotência é requisito de produto.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'TypeScript', 'Docker', 'Meta Cloud API', 'Bling ERP'],
    metrics: [
      { value: '22', label: 'módulos de API' },
      { value: '43', label: 'tabelas' },
      { value: '20', label: 'telas de painel' },
      { value: '48', label: 'migrations versionadas' },
      { value: '504', label: 'testes automatizados' },
    ],
    images: [
      { src: '/projetos/crm-dashboard.jpg', alt: 'Painel inicial do iSafe CRM com KPIs de entrega e leitura', caption: 'Início — entrega, leitura e pendências do dia', demo: true },
      { src: '/projetos/crm-pipeline.jpg', alt: 'Tela de jornada de automação do iSafe CRM listando clientes por etapa', caption: 'Jornada — cada cliente na sua etapa, do D+3 ao D+365', demo: true },
      { src: '/projetos/crm-custos.jpg', alt: 'Tela de custos e ROI do iSafe CRM com custo por dia e por categoria', caption: 'Custos & ROI — quanto custou falar com os clientes', demo: true },
    ],
    note: 'Sistema interno, atrás de login. As telas acima são a interface real com dados de demonstração.',
  },

  {
    slug: 'isafe-checkout',
    name: 'iSafe Checkout',
    tagline: 'Checkout próprio que substituiu o nativo do Shopify, com PIX de verdade.',
    category: 'E-commerce & Pagamentos',
    period: 'jun/2026 — atual',
    status: 'producao',
    featured: true,
    problem:
      'O checkout do Shopify é bom — ele só não foi feito para o Brasil. O brasileiro decide a compra no PIX, e o fluxo padrão trata PIX como mais um botão no fim da fila.',
    features: [
      'O cliente clica em finalizar compra na loja Shopify, um script intercepta o carrinho e leva para o checkout próprio',
      'Três etapas: identificação, entrega e pagamento',
      'PIX com QR Code gerado na hora via Mercado Pago — a tela fica ouvindo o pagamento e avança sozinha quando cai',
      'Cartão de crédito via PayPal',
      'Frete real cotado na Frenet com as dimensões de cada produto, não uma tabela chutada',
      'Endereço preenchido pelo CEP, cupom, e o pedido criado no Shopify pela Admin API assim que o pagamento confirma',
      'Webhook de reembolso e rotina diária de reconciliação entre pagamento e pedido',
    ],
    decision:
      'A reconciliação é o que separa checkout de brinquedo de checkout de verdade. Todo mundo lembra do caminho feliz; o dinheiro se perde no caminho infeliz — pagamento aprovado e pedido não criado, cliente que pagou duas vezes, reembolso que não voltou no estoque. Pagamento e pedido saem de sistemas diferentes, e um dia eles discordam.',
    stack: ['Next.js', 'TypeScript', 'Vercel', 'Mercado Pago', 'PayPal', 'Frenet', 'Shopify Admin API'],
    images: [
      { src: '/projetos/safeimports-desktop.jpg', alt: 'Loja iSafe TechStore no desktop', caption: 'A loja que o checkout atende' },
      { src: '/projetos/safeimports-mobile.jpg', alt: 'Loja iSafe TechStore no celular', caption: 'No celular, de onde vem a maior parte das compras' },
    ],
    links: [{ label: 'safeimports.com.br', url: 'https://www.safeimports.com.br', kind: 'site' }],
    note: 'Coloque qualquer produto no carrinho da loja: o checkout que abre é este.',
  },

  {
    slug: 'vear-b2g',
    name: 'VEAR — gestão de atas de licitação',
    tagline: 'Extrai a ata de 40 páginas do PDF e avisa antes de a vigência vencer.',
    category: 'B2G & Automação',
    period: 'abr/2026 — atual',
    status: 'producao',
    featured: true,
    problem:
      'Ata de registro de preços: 40 páginas de PDF, dezenas de itens e prazos. Alguém, em algum lugar, estava digitando isso à mão numa planilha. Quem vende para prefeitura, hospital público ou escola erra o prazo e entrega fora do preço registrado.',
    features: [
      'Upload do PDF da ata, com extração automática dos dados que estavam presos no documento',
      'Controle de vigência com alerta antes de vencer',
      'Importação das notas fiscais direto da API do Bling, cada nota vinculada à ata correspondente',
      'Site público mostrando as atas vigentes, para o cliente consultar sozinho',
      'Gestão dos leads que chegam por esse site',
    ],
    decision:
      'A parte que mais mudou o dia a dia não foi a mais difícil de programar: foi o alerta de vigência. Software bom, muitas vezes, é o que avisa antes. Por dentro, fila com BullMQ e Redis para o processamento pesado dos PDFs, Zod validando todos os endpoints e o padrão Repository separando acesso a dados de regra de negócio.',
    stack: ['TypeScript', 'Prisma', 'PostgreSQL', 'BullMQ', 'Redis', 'React', 'Vite', 'React Query', '@amboni/ui'],
    images: [
      { src: '/projetos/vear-desktop.jpg', alt: 'Site público da VEAR com consulta de atas', caption: 'Site público — o cliente consulta as atas vigentes' },
      { src: '/projetos/vear-mobile.jpg', alt: 'Site público da VEAR no celular', caption: 'Versão móvel' },
    ],
    links: [{ label: 'veartech.com.br', url: 'https://veartech.com.br', kind: 'site' }],
    note: 'O painel interno, onde o trabalho pesado acontece, fica atrás de login.',
  },

  {
    slug: 'amboni-ui',
    name: '@amboni/ui',
    tagline: 'Design system em que contraste ilegível quebra o build.',
    category: 'Design System',
    period: 'jul/2026 — atual',
    status: 'producao',
    featured: true,
    problem:
      'O botão principal de um CRM meu estava ilegível havia meses: azul da marca com texto branco, 2,91:1 de contraste, quando a norma pede 4,5:1. Zero chamados abertos — e é exatamente esse o problema. Contraste ruim não vira ticket, vira gente desistindo em silêncio.',
    features: [
      '39 componentes, cada um com seu teste',
      'Os testes rodam a fórmula de contraste da WCAG contra todo par de cor de todo tema: cor ilegível não abre chamado, quebra o build',
      'Neutro por decisão — convive com Tailwind, com MUI ou com CSS puro',
      'Temável por atributo, sem provider de tema',
      'Publicado no npm e em uso em dois CRMs em produção',
    ],
    decision:
      'Em dois sistemas que estavam no ar havia meses, a aritmética achou três bugs invisíveis: botão principal a 2,91:1, texto secundário do tema escuro a 3,75:1 (era o motivo de um valor parecer sumido na tela) e o botão "Apagar" a 3,76:1. Quem escolhe a cor da marca costuma ter a melhor visão da sala, num monitor bom, com luz controlada — o problema é literalmente invisível de onde a decisão é tomada. Por isso parei de prometer acessibilidade e comecei a testá-la.',
    stack: ['React', 'TypeScript', 'CSS variables', 'Vitest', 'npm'],
    metrics: [
      { value: '39', label: 'componentes' },
      { value: '12,7 kB', label: 'comprimido' },
      { value: '0.3.5', label: 'versão no npm' },
      { value: '2', label: 'CRMs em produção' },
    ],
    images: [
      { src: '/projetos/amboni-ui-desktop.jpg', alt: 'Documentação do design system @amboni/ui', caption: 'Documentação com exemplos ao vivo' },
      { src: '/projetos/amboni-ui-mobile.jpg', alt: 'Documentação do @amboni/ui no celular', caption: 'A doc também é responsiva' },
    ],
    links: [
      { label: 'npmjs.com/package/@amboni/ui', url: 'https://www.npmjs.com/package/@amboni/ui', kind: 'npm' },
      { label: 'Documentação ao vivo', url: 'https://luiz-amboni.github.io/amboni-ui/', kind: 'docs' },
      { label: 'Código no GitHub', url: 'https://github.com/luiz-amboni/amboni-ui', kind: 'repo' },
    ],
  },

  {
    slug: 'sheets-griptape',
    name: 'Sheets Griptape',
    tagline: 'E-commerce e painel próprios, sem mensalidade de plataforma.',
    category: 'E-commerce',
    period: 'jul/2026 — atual',
    status: 'entregue',
    problem:
      'A loja pagava mensalidade para alugar a própria vitrine. E, no dia em que quisesse sair, levaria embora o quê? A senha do painel. Plataforma pronta é excelente para validar — o problema aparece depois: taxa por venda, limite no que dá para customizar, e o cadastro de clientes morando na casa dos outros.',
    features: [
      'Vitrine com catálogo, categorias, coleções e conteúdo editável',
      'Painel administrativo próprio: cria e edita produto, muda preço, estoque e categoria, marca como novo ou esgotado, sobe foto — e a loja atualiza na hora',
      'O conteúdo do site (banner, destaque da home, texto da marca) é editado pelo painel, sem mexer em código',
      'Cupom, carrinho abandonado, avaliação de produto, lista de e-mail e eventos de analytics em tabela própria',
      'Integração com o Bling para o estoque não mentir',
    ],
    decision:
      'Arquitetura em camadas de verdade: o domínio da loja — o que é um produto, o que é uma categoria — não depende de Next.js, de Prisma nem de nada. O fluxo é sempre interface → ação → serviço → repositório → banco. Parece rigor exagerado para uma loja de skate; é o que permite trocar o banco mudando uma linha, e o que faz um recurso novo entrar em horas em vez de dias.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind v4', 'Prisma', 'PostgreSQL', 'Vercel'],
    note: 'Loja construída de ponta a ponta e pronta para lançar. O endereço sai quando a marca decidir — e o código e os dados são da marca, não de uma plataforma.',
  },

  {
    slug: 'place-lounge',
    name: 'Place Lounge',
    tagline: 'Site e bilheteria própria: o cadastro de quem compra fica com a casa.',
    category: 'Site & Ingressos',
    period: '2026',
    status: 'entregue',
    problem:
      'Casa noturna que vende ingresso por plataforma de terceiro paga taxa em cima de cada entrada — e não fica com o cadastro de quem foi. Na segunda-feira, quem tem a lista de clientes é a plataforma.',
    features: [
      'Site com agenda dos eventos, galeria e a identidade da casa',
      'Venda de ingresso própria, com PIX',
      'Área do cliente: a pessoa entra e vê os ingressos que comprou',
      'O cadastro de quem compra fica com a casa — o ativo de verdade para divulgar a próxima festa',
      'Abertura com a logo se desenhando na tela, fundo que reage ao movimento do mouse e rolagem suave',
    ],
    decision:
      'Nada de animação pode custar a primeira renderização. Casa noturna vende expectativa, e o site é o primeiro contato com ela — mas quem abre no 4G, na fila da balada, não espera dois segundos de intro. Animação entra depois que a página já é útil.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind v4', 'Motion'],
    images: [
      { src: '/projetos/place-01-hero.jpg', alt: 'Abertura do site do Place Lounge', caption: 'Abertura' },
      { src: '/projetos/place-02-agenda.jpg', alt: 'Agenda de eventos do Place Lounge', caption: 'Agenda de eventos' },
      { src: '/projetos/place-04-checkout.jpg', alt: 'Compra de ingresso do Place Lounge', caption: 'Compra de ingresso com PIX' },
      // A tela "Área do cliente" ficou de fora: o print existente foi feito com um
      // cadastro de teste que usava CPF real. Só volta com o dado mascarado na origem.
      { src: '/projetos/place-03-galeria.jpg', alt: 'Galeria de fotos do Place Lounge', caption: 'Galeria' },
    ],
    note: 'Entregue e aguardando o lançamento da casa.',
  },

  {
    slug: 'dra-laura-folchini',
    name: 'Dra. Laura Folchini',
    tagline: 'Site de dermatologista com um objetivo só: virar consulta agendada.',
    category: 'Site de conversão',
    period: '2026',
    status: 'producao',
    problem:
      'A médica precisava de uma coisa só: que quem procura por ela na internet saia com a consulta agendada. Não precisava de sistema de agendamento com integração de agenda, confirmação por e-mail e fila de espera — a secretária já faz isso muito bem, pelo WhatsApp.',
    features: [
      'Página inicial com as seções que a paciente procura: sobre, tratamentos, onde atende, contato',
      'Página dedicada aos procedimentos, explicados sem jargão',
      'Botão de agendar em todas as seções, abrindo o WhatsApp com a mensagem já escrita',
      'Modal onde a pessoa escolhe o tratamento antes de ir para a conversa — a secretária recebe o contato já qualificado',
      'Estrutura pronta para outros idiomas e rápido no celular, de onde vem quase todo o tráfego de consultório',
    ],
    decision:
      'Este site não tem banco de dados, não tem login e não tem painel — e foi exatamente por isso que funcionou. Boa parte do trabalho de quem desenvolve é ter a conversa que reduz escopo. Entregar menos, quando menos é o suficiente, é o que faz o projeto ficar pronto.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind'],
    images: [
      { src: '/projetos/dra-laura-desktop.jpg', alt: 'Site da Dra. Laura Folchini no desktop', caption: 'Home' },
      { src: '/projetos/dra-laura-mobile.jpg', alt: 'Site da Dra. Laura Folchini no celular', caption: 'No celular' },
    ],
    links: [
      { label: 'dralaurafolchini.com.br', url: 'https://dralaurafolchini.com.br', kind: 'site' },
      { label: 'Código no GitHub', url: 'https://github.com/luiz-amboni/dra-laura-folchini-website', kind: 'repo' },
    ],
  },

  {
    slug: 'horus',
    name: 'Horus — motor de licitação com IA',
    tagline: 'A IA lê o edital; a regra de negócio continua sendo código.',
    category: 'IA aplicada',
    period: '2026',
    status: 'interno',
    problem:
      'Edital com 500 itens. O trabalho é achar, num catálogo de 10 mil produtos, qual atende cada linha. À mão leva dias — e é aqui que quase todo mundo joga IA no problema e erra, pedindo para o modelo resolver tudo. O resultado vem convincente, bem formatado e errado: um disjuntor de 40 A onde o edital pedia 63 A. Em licitação, item errado não é bug, é proposta desclassificada.',
    features: [
      'O PDF vira texto',
      'O modelo extrai os itens em estrutura tipada — título, órgão, plataforma, data da sessão e a lista de itens. Só extração, nenhuma decisão de negócio',
      'Um classificador diz a categoria de cada item, em lote e com cache, porque 500 itens não podem virar 500 chamadas',
      'Aí entra o motor, que é código puro: 15 seletores por categoria, cada um em quatro estágios — extrai os requisitos, aplica filtros duros, pontua o que sobrou e desempata pelo menor preço',
      'Sai a planilha no formato que a proposta exige',
      'Quando um filtro duro elimina tudo, o sistema não inventa a resposta menos ruim: devolve uma pergunta para um humano decidir',
    ],
    decision:
      'Modelo de linguagem é ótimo para transformar texto bagunçado em dado estruturado. Regra de negócio continua sendo código — auditável, testável e que responde igual amanhã. Corrente, curva, tensão, polaridade, grau de proteção: isso é engenharia elétrica, não intuição estatística.',
    stack: ['Python', 'FastAPI', 'n8n', 'LLM para extração'],
    note: 'Projeto interno: o catálogo tem preço de custo, então não há repositório aberto nem print de dados reais.',
  },

  {
    slug: 'isafe-b2b',
    name: 'iSafe B2B — site e apresentação',
    tagline: 'O site vende sozinho; a apresentação vende na reunião.',
    category: 'Site B2B',
    period: '2026',
    status: 'entregue',
    problem:
      'Quando montamos o canal B2B — venda de equipamento Apple para empresa — a primeira versão do site tinha tudo: história, certificações, comparativos, portfólio, condições. Ficou completo e não convertia. Quem chega no site não quer ler; quer saber se você resolve o problema dele e como pedir um orçamento.',
    features: [
      'O site é curto por decisão: frase, não parágrafo. Três páginas — home, cotação e a apresentação',
      'A conversão é o pedido de cotação, com CNPJ, proteção contra robô e o aviso de privacidade em ordem',
      'A apresentação tem 17 slides e carrega o conteúdo denso: história, compliance, comparativo, portfólio',
      'Ela mora dentro do próprio site e é a ferramenta do time comercial na reunião',
      'Exporta para um arquivo único que o vendedor abre offline no notebook, sem depender do wi-fi do cliente',
    ],
    decision:
      'A regra editorial que virou a mais útil do projeto: se um texto começar a virar parágrafo no site, ele pertence à apresentação. As duas peças bebem da mesma fonte de marca — cor, tipografia e logo em um lugar só; mudou ali, mudou nos dois. E o detalhe do arquivo offline não é técnico: só aparece quando você pergunta como a reunião acontece de verdade.',
    stack: ['Astro', 'TypeScript', 'SSR'],
    images: [
      { src: '/projetos/isafe-b2b-desktop.jpg', alt: 'Home do site B2B da iSafe', caption: 'Home — curta por decisão' },
      { src: '/projetos/isafe-b2b-cotacao.jpg', alt: 'Formulário de cotação do site B2B da iSafe', caption: 'Cotação — a conversão do site' },
      { src: '/projetos/isafe-b2b-deck.jpg', alt: 'Apresentação comercial de 17 slides embutida no site', caption: 'A apresentação de 17 slides, embutida' },
      { src: '/projetos/isafe-b2b-mobile.jpg', alt: 'Site B2B da iSafe no celular', caption: 'No celular' },
    ],
    note: 'Construído e ainda não publicado.',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
