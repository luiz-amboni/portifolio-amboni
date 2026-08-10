import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../home/components/Footer';
import SiteHeader from '../../components/SiteHeader';
import WhatsAppButton from '../../components/WhatsAppButton';
import BackToTopButton from '../../components/BackToTopButton';
import { CONTACT_INFO } from '../../constants';

const specialties = [
  {
    icon: 'ri-window-2-line',
    title: 'Sistemas web sob medida',
    description:
      'CRM, painel administrativo, área do cliente e gestão interna — construídos em volta da operação que já existe, com as exceções que ela tem.',
    details: [
      'CRM e jornada de relacionamento automatizada',
      'Painel administrativo com controle de acesso por papel',
      'Área do cliente e portais de consulta',
      'Relatórios, KPIs e telas de custo',
      'Migração de processo que hoje vive em planilha',
      'Documentação de onde cada coisa mora no código',
    ],
  },
  {
    icon: 'ri-shopping-bag-3-line',
    title: 'E-commerce e checkout próprio',
    description:
      'Loja com painel próprio ou checkout que substitui o da plataforma. O caminho infeliz — pagamento sem pedido, cobrança dupla, reembolso — é tratado desde o primeiro dia.',
    details: [
      'PIX com QR Code e a tela escutando o pagamento',
      'Cartão de crédito e carteiras digitais',
      'Frete real por dimensão do produto',
      'Cupom, carrinho abandonado e avaliações',
      'Reconciliação diária entre pagamento e pedido',
      'Painel para produto, foto, estoque e conteúdo do site',
    ],
  },
  {
    icon: 'ri-links-line',
    title: 'Integrações',
    description:
      'Fazer dois sistemas que não foram feitos para conversar trabalharem juntos, respeitando limite de requisição e sem depender de API não oficial.',
    details: [
      'ERP Bling: pedidos, notas fiscais, produtos e estoque',
      'WhatsApp oficial da Meta (Cloud API), com templates aprovados',
      'Mercado Pago, PayPal e provedores de frete',
      'Shopify Storefront e Admin API',
      'Marketplaces e planilhas que o time já usa',
      'Webhooks com verificação de assinatura',
    ],
  },
  {
    icon: 'ri-robot-2-line',
    title: 'Automação, inclusive com IA',
    description:
      'A IA entra onde ela é boa: transformar texto bagunçado em dado estruturado. A decisão de negócio continua em código auditável, que responde igual amanhã.',
    details: [
      'Leitura de PDF e extração de dados estruturados',
      'Classificação em lote, com cache para não estourar custo',
      'Casamento de catálogo por regra determinística',
      'Rotinas agendadas idempotentes (sem envio duplicado)',
      'Fila para processamento pesado',
      'Escalada para humano quando o sistema não tem certeza',
    ],
  },
  {
    icon: 'ri-cursor-line',
    title: 'Sites que convertem',
    description:
      'Um objetivo por página. Quando o caso não pede banco, login nem painel, entrego sem — escopo menor fica pronto antes e custa menos.',
    details: [
      'Site institucional e landing page',
      'Formulário que chega onde precisa chegar',
      'Conversão via WhatsApp com contexto já preenchido',
      'SEO técnico, dados estruturados e Open Graph',
      'Performance no celular, que é de onde vem o tráfego',
      'Apresentação comercial embutida, para usar na reunião',
    ],
  },
  {
    icon: 'ri-server-line',
    title: 'Infraestrutura e publicação',
    description:
      'Eu subo e mantenho no ar: servidor, banco, domínio, certificado e monitoramento. Deploy é comando, não ritual.',
    details: [
      'Docker e docker-compose',
      'PostgreSQL com migrations versionadas',
      'Domínio, HTTPS e redirecionamento de www',
      'Backup e restauração testada',
      'Log estruturado e alerta de falha',
      'Publicação na Vercel quando o projeto pede',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Conversa de descoberta',
    description:
      'Eu só faço pergunta e ainda não abro o editor. Como funciona hoje, quem sofre com isso, quanto tempo custa por semana e o que já foi tentado.',
    icon: 'ri-search-eye-line',
  },
  {
    step: '02',
    title: 'Escopo e o que fica fora',
    description:
      'Escrevo o que vai ser feito e — mais importante — o que não vai. Boa parte do meu trabalho é a conversa que reduz escopo.',
    icon: 'ri-scissors-cut-line',
  },
  {
    step: '03',
    title: 'Arquitetura e primeira fatia',
    description:
      'Modelo de dados, integrações necessárias e a primeira fatia funcionando de ponta a ponta. Você vê algo real antes de metade do prazo.',
    icon: 'ri-stack-line',
  },
  {
    step: '04',
    title: 'Construção com entrega semanal',
    description:
      'Você acompanha em ambiente de teste toda semana. Regra de negócio nasce com teste; migration nasce versionada.',
    icon: 'ri-code-s-slash-line',
  },
  {
    step: '05',
    title: 'Subida e treino do time',
    description:
      'Publico, configuro domínio e monitoramento, e sento com quem vai usar. Sistema que a equipe não entende não é entregue.',
    icon: 'ri-rocket-2-line',
  },
  {
    step: '06',
    title: 'Sustentação',
    description:
      'Correção do que aparecer, ajuste do que a realidade mostrar e as próximas funcionalidades — no ritmo que o negócio precisar.',
    icon: 'ri-refresh-line',
  },
];

const stack = [
  { name: 'Node.js', icon: 'ri-nodejs-line', category: 'Backend' },
  { name: 'Express', icon: 'ri-server-line', category: 'Backend' },
  { name: 'Python', icon: 'ri-code-box-line', category: 'Backend' },
  { name: 'FastAPI', icon: 'ri-flashlight-line', category: 'Backend' },
  { name: 'PostgreSQL', icon: 'ri-database-2-line', category: 'Dados' },
  { name: 'Prisma', icon: 'ri-git-repository-line', category: 'Dados' },
  { name: 'Redis', icon: 'ri-stack-line', category: 'Dados' },
  { name: 'React', icon: 'ri-reactjs-line', category: 'Front' },
  { name: 'TypeScript', icon: 'ri-braces-line', category: 'Front' },
  { name: 'Next.js', icon: 'ri-code-box-line', category: 'Front' },
  { name: 'Tailwind', icon: 'ri-layout-4-line', category: 'Front' },
  { name: 'Docker', icon: 'ri-box-3-line', category: 'Infra' },
  { name: 'Vercel', icon: 'ri-cloud-line', category: 'Infra' },
  { name: 'WhatsApp Cloud API', icon: 'ri-whatsapp-line', category: 'Integração' },
  { name: 'Bling ERP', icon: 'ri-links-line', category: 'Integração' },
  { name: 'Shopify', icon: 'ri-shopping-bag-3-line', category: 'Integração' },
  { name: 'Mercado Pago', icon: 'ri-qr-code-line', category: 'Integração' },
  { name: 'Figma', icon: 'ri-pen-nib-line', category: 'Design' },
];

const engagements = [
  {
    name: 'Diagnóstico',
    description:
      'Uma conversa e um documento curto: qual é o problema de verdade, o que resolveria, o que dá para fazer sem software e por onde eu começaria.',
    features: [
      'Conversa de 45 a 60 minutos',
      'Mapa do processo como ele funciona hoje',
      'O que automatizar primeiro — e o que não vale',
      'Estimativa de esforço por etapa',
      'Serve de base para orçar comigo ou com outra pessoa',
    ],
    price: 'Sem custo',
    cta: 'Agendar conversa',
    highlight: false,
  },
  {
    name: 'Projeto fechado',
    description:
      'Escopo escrito, prazo por etapa e entrega semanal em ambiente de teste. O código e os dados são seus do primeiro dia.',
    features: [
      'Escopo com o que fica fora, por escrito',
      'Entrega acompanhável toda semana',
      'Teste nas regras de negócio',
      'Publicação e configuração de domínio',
      'Treino com quem vai usar',
      '30 dias de correção incluída depois da subida',
    ],
    price: 'Orçamento por etapa',
    cta: 'Solicitar orçamento',
    highlight: true,
  },
  {
    name: 'Evolução contínua',
    description:
      'Para sistema que já está no ar — meu ou de outra pessoa. Horas por mês para corrigir, ajustar e construir o próximo pedaço.',
    features: [
      'Horas mensais combinadas',
      'Prioridade definida por você a cada ciclo',
      'Correção de bug em produção',
      'Monitoramento e resposta a falha',
      'Assumo sistema legado depois de leitura do código',
      'Relatório do que foi feito no mês',
    ],
    price: 'Mensal',
    cta: 'Falar sobre manutenção',
    highlight: false,
  },
];

const faqs = [
  {
    question: 'Quanto tempo leva?',
    answer:
      'Depende do escopo, e eu prefiro falar por etapa em vez de dar um número redondo. Um site com objetivo único sai em 1 a 3 semanas. Um checkout ou uma integração com ERP, de 4 a 8 semanas. Um CRM com jornada automatizada é projeto de meses — mas a primeira fatia útil vai ao ar bem antes do fim. Na conversa de descoberta eu digo o prazo de cada etapa, não só o do total.',
  },
  {
    question: 'De quem é o código?',
    answer:
      'Seu. Repositório na sua conta ou transferido para ela no fim, banco na sua infraestrutura, credenciais no seu nome. Não trabalho com esquema em que sair de mim significa começar de novo — foi exatamente isso que eu resolvi para dois clientes que estavam presos em plataforma alugada.',
  },
  {
    question: 'Você assume um sistema que outra pessoa fez?',
    answer:
      'Sim, depois de ler o código. Faço uma leitura paga e curta antes de assumir e digo com honestidade se vale manter ou reescrever por partes — às vezes o mais barato é conviver com o que existe e trocar um pedaço por vez.',
  },
  {
    question: 'Quem hospeda? Quanto custa isso por mês?',
    answer:
      'Depende do projeto. Site estático fica em plano gratuito ou de poucos dólares. Sistema com banco pede um servidor pequeno — normalmente entre US$ 5 e US$ 20 por mês, contratado no seu nome, pagando direto ao provedor. Eu não revendo hospedagem nem coloco margem em cima disso.',
  },
  {
    question: 'Automação de WhatsApp: dá para mandar qualquer mensagem?',
    answer:
      'Não, e isso é bom. Na API oficial da Meta, iniciar conversa exige template aprovado por eles — mudou uma vírgula, nova aprovação. Se o cliente responde, abre uma janela de 24 horas em que você fala livremente. Cobra-se por conversa, em dólar. Toda automação séria é desenhada em volta dessas regras; quem promete disparo livre está usando biblioteca não oficial e arriscando o número da empresa.',
  },
  {
    question: 'E os dados dos clientes? LGPD?',
    answer:
      'Dado de cliente fica no seu banco, com acesso por papel — quem é do atendimento não precisa ver custo nem margem. Credencial nunca entra no código. Em portfólio e apresentação eu uso dados de demonstração, como nas telas deste site. Se o seu caso exige opt-out e política de retenção, isso entra no escopo desde o começo.',
  },
  {
    question: 'Você trabalha remoto?',
    answer:
      'Sim, para todo o Brasil, e presencial na região de Criciúma. A parte que faz diferença não é estar na mesma sala: é eu entender a operação. Em projeto de varejo eu costumo pedir para acompanhar um dia de trabalho — dá para aprender mais em quatro horas de balcão que em quatro reuniões.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'Por etapa entregue, não metade no começo e metade no fim. Combinamos as etapas no escopo e cada uma é faturada quando você tem algo funcionando na mão. Se o projeto parar por qualquer motivo, você pagou pelo que recebeu.',
  },
];

export default function EspecialidadesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-5 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto relative z-10">
          <p className="font-mono text-xs text-[#c8a96e] mb-4 tracking-widest">// O QUE EU FAÇO</p>
          <h1 className="text-white text-5xl md:text-7xl font-black mb-6 leading-[0.95]">
            Serviços e<br />
            <span style={{
              background: 'linear-gradient(90deg, #c8a96e, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>como trabalhamos.</span>
          </h1>
          <p className="text-[#808080] text-base md:text-lg max-w-2xl leading-relaxed">
            Seis frentes, um jeito de trabalhar: entender a operação, escrever o sistema, subir e
            manter no ar. Abaixo, o que cada uma inclui, como um projeto acontece do primeiro
            contato à sustentação, e as perguntas que sempre aparecem antes de começar.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="px-5 md:px-16 lg:px-24 pb-16 md:pb-24">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {specialties.map((specialty) => (
            <div
              key={specialty.title}
              className="group bg-[#141414] border border-[#1e1e1e] rounded-2xl p-7 md:p-9 hover:border-[#c8a96e]/40 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c8a96e]/8 border border-[#c8a96e]/15 flex items-center justify-center mb-6">
                <i className={`${specialty.icon} text-2xl text-[#c8a96e]`}></i>
              </div>
              <h2 className="text-white text-xl md:text-2xl font-bold mb-3">{specialty.title}</h2>
              <p className="text-[#808080] text-sm md:text-[15px] leading-relaxed mb-7">{specialty.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 pt-6 border-t border-[#1c1c1c]">
                {specialty.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-2.5">
                    <i className="ri-check-line text-[#c8a96e] text-base mt-0.5 flex-shrink-0"></i>
                    <span className="text-[#707070] text-[13px] leading-snug">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 md:py-24 px-5 md:px-16 lg:px-24 bg-[#0d0d0d] border-y border-[#161616]">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16 max-w-2xl">
            <p className="font-mono text-xs text-[#c8a96e] mb-4 tracking-widest">// COMO UM PROJETO ACONTECE</p>
            <h2 className="text-white text-4xl md:text-5xl font-black mb-5 leading-tight">
              Do primeiro contato à sustentação
            </h2>
            <p className="text-[#808080] text-base leading-relaxed">
              Seis etapas, na ordem em que acontecem de verdade. A que mais economiza dinheiro é a
              segunda — decidir o que não vai ser feito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {process.map((step) => (
              <div
                key={step.step}
                className="group relative bg-[#141414] border border-[#1e1e1e] rounded-2xl p-7 md:p-8 hover:border-[#c8a96e]/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 right-5 text-[#1a1a1a] text-6xl font-black group-hover:text-[#c8a96e]/10 transition-colors duration-300 select-none">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-[#c8a96e]/8 border border-[#c8a96e]/15 flex items-center justify-center mb-5">
                    <i className={`${step.icon} text-xl text-[#c8a96e]`}></i>
                  </div>
                  <h3 className="text-white text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-[#707070] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 md:py-24 px-5 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16 max-w-2xl">
            <p className="font-mono text-xs text-[#c8a96e] mb-4 tracking-widest">// STACK</p>
            <h2 className="text-white text-4xl md:text-5xl font-black mb-5 leading-tight">
              O que eu uso todo dia
            </h2>
            <p className="text-[#808080] text-base leading-relaxed">
              Ferramenta chata e comprovada, escolhida para o projeto continuar mantível por
              outra pessoa depois de mim.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {stack.map((tool) => (
              <div
                key={tool.name}
                className="group bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 flex flex-col items-center gap-2.5 hover:border-[#c8a96e]/40 hover:bg-[#c8a96e]/5 transition-all duration-300 cursor-default text-center"
              >
                <i className={`${tool.icon} text-2xl text-[#c8a96e]`}></i>
                <span className="text-white text-[13px] font-medium leading-tight">{tool.name}</span>
                <span className="text-[#505050] text-[10px] font-mono">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelos de trabalho */}
      <section className="py-16 md:py-24 px-5 md:px-16 lg:px-24 bg-[#0d0d0d] border-y border-[#161616]">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16 max-w-2xl">
            <p className="font-mono text-xs text-[#c8a96e] mb-4 tracking-widest">// MODELOS DE TRABALHO</p>
            <h2 className="text-white text-4xl md:text-5xl font-black mb-5 leading-tight">
              Três jeitos de começar
            </h2>
            <p className="text-[#808080] text-base leading-relaxed">
              Não tem tabela de preço fixa, porque não existe sistema de tamanho único. Tem, sim,
              modelo claro de contratação — e orçamento por etapa, para você nunca pagar por algo
              que ainda não viu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {engagements.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-[#141414] border-2 border-[#c8a96e]'
                    : 'bg-[#141414] border border-[#1e1e1e] hover:border-[#c8a96e]/40'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c8a96e] text-[#0a0a0a] text-[10px] font-mono font-bold px-4 py-1.5 rounded-full whitespace-nowrap tracking-wider">
                    MAIS COMUM
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-white text-xl font-bold mb-3">{plan.name}</h3>
                  <p className="text-[#808080] text-sm leading-relaxed mb-5">{plan.description}</p>
                  <div className="font-mono text-xs tracking-widest uppercase text-[#c8a96e]">
                    {plan.price}
                  </div>
                </div>

                <div className="flex-1 space-y-3 mb-8 pt-6 border-t border-[#1c1c1c]">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <i className="ri-check-line text-[#c8a96e] text-base mt-0.5 flex-shrink-0"></i>
                      <span className="text-[#707070] text-[13px] leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={CONTACT_INFO.WHATSAPP_MSG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    plan.highlight
                      ? 'text-[#0a0a0a]'
                      : 'bg-transparent border border-[#c8a96e]/50 text-[#c8a96e] hover:bg-[#c8a96e]/10'
                  }`}
                  style={plan.highlight ? { background: 'linear-gradient(135deg, #c8a96e, #b8945a)' } : undefined}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-5 md:px-16 lg:px-24">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-12 md:mb-14">
            <p className="font-mono text-xs text-[#c8a96e] mb-4 tracking-widest">// PERGUNTAS FREQUENTES</p>
            <h2 className="text-white text-4xl md:text-5xl font-black leading-tight">
              O que sempre me perguntam
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-[#141414] border border-[#1e1e1e] rounded-xl overflow-hidden hover:border-[#c8a96e]/30 transition-colors duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                >
                  <span className="text-white font-medium text-sm md:text-base">{faq.question}</span>
                  <i
                    className={`ri-arrow-down-s-line text-[#c8a96e] text-xl flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#808080] text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28 px-5 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center bg-[#141414] border border-[#1e1e1e] rounded-2xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/5 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-white text-3xl md:text-5xl font-black mb-4">Vamos começar pelo diagnóstico?</h2>
              <p className="text-[#808080] text-base md:text-lg mb-9 max-w-2xl mx-auto leading-relaxed">
                A primeira conversa é só pergunta e não custa nada. No fim dela você sai sabendo o
                que vale automatizar primeiro — mesmo que decida não me contratar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={CONTACT_INFO.WHATSAPP_MSG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl font-bold text-[#0a0a0a] hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}
                >
                  Agendar conversa
                </a>
                <Link
                  to="/projetos"
                  className="px-8 py-4 border border-[#c8a96e]/40 text-[#c8a96e] font-bold rounded-xl hover:bg-[#c8a96e]/10 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Ver os projetos primeiro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
}
