import { Link } from 'react-router-dom';
import { useState } from 'react';
import DefaultLayout from '../../components/DefaultLayout';

export default function EspecialidadesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const specialties = [
    {
      icon: 'ri-window-line',
      title: 'Sites & Portfólios',
      description: 'Criação de sites profissionais, portfólios e landing pages que convertem visitantes em clientes reais.',
      details: [
        'Sites institucionais responsivos',
        'Portfólios profissionais personalizados',
        'Landing pages de alta conversão',
        'E-commerce e lojas virtuais',
        'Otimização para SEO e performance',
        'Integração com ferramentas de marketing'
      ],
      image: 'https://images.unsplash.com/photo-1481487484168-9b93015273c3?q=80&w=2670&auto=format&fit=crop',
      color: '#c8a96e'
    },
    {
      icon: 'ri-palette-line',
      title: 'UX/UI Design',
      description: 'Design de interfaces intuitivas e experiências memoráveis que encantam usuários e geram resultados.',
      details: [
        'Pesquisa e análise de usuários',
        'Wireframes e protótipos interativos',
        'Design de interfaces modernas',
        'Design systems e componentes',
        'Testes de usabilidade',
        'Redesign e otimização de produtos'
      ],
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2670&auto=format&fit=crop',
      color: '#c8a96e'
    },
    {
      icon: 'ri-robot-2-line',
      title: 'IA & Automação',
      description: 'Implementação de inteligência artificial e automações que otimizam processos e multiplicam resultados.',
      details: [
        'Chatbots inteligentes com IA',
        'Automação de processos repetitivos',
        'Integração com APIs e ferramentas',
        'Análise de dados com machine learning',
        'Assistentes virtuais personalizados',
        'Otimização com algoritmos inteligentes'
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop',
      color: '#c8a96e'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Descoberta',
      description: 'Entendo profundamente seu negócio, objetivos, público-alvo e desafios para criar a solução ideal.',
      icon: 'ri-search-eye-line'
    },
    {
      step: '02',
      title: 'Estratégia',
      description: 'Defino a arquitetura, tecnologias e abordagem mais adequadas para atingir seus resultados.',
      icon: 'ri-map-2-line'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Crio wireframes, protótipos e o visual final com foco em usabilidade e identidade da marca.',
      icon: 'ri-pencil-ruler-2-line'
    },
    {
      step: '04',
      title: 'Desenvolvimento',
      description: 'Construo a solução com código limpo, performático e escalável, seguindo as melhores práticas.',
      icon: 'ri-code-s-slash-line'
    },
    {
      step: '05',
      title: 'Testes',
      description: 'Valido cada detalhe em diferentes dispositivos e cenários para garantir qualidade total.',
      icon: 'ri-bug-line'
    },
    {
      step: '06',
      title: 'Entrega',
      description: 'Publico o projeto, faço o treinamento necessário e ofereço suporte contínuo pós-lançamento.',
      icon: 'ri-rocket-2-line'
    }
  ];

  const tools = [
    { name: 'Figma', icon: 'ri-pen-nib-line', category: 'Design' },
    { name: 'React', icon: 'ri-reactjs-line', category: 'Dev' },
    { name: 'Next.js', icon: 'ri-code-box-line', category: 'Dev' },
    { name: 'TypeScript', icon: 'ri-braces-line', category: 'Dev' },
    { name: 'TailwindCSS', icon: 'ri-layout-4-line', category: 'Dev' },
    { name: 'Node.js', icon: 'ri-server-line', category: 'Dev' },
    { name: 'ChatGPT API', icon: 'ri-openai-line', category: 'IA' },
    { name: 'Framer Motion', icon: 'ri-magic-line', category: 'Design' },
    { name: 'Supabase', icon: 'ri-database-2-line', category: 'Dev' },
    { name: 'Vercel', icon: 'ri-cloud-line', category: 'Dev' },
    { name: 'Make / Zapier', icon: 'ri-flow-chart', category: 'IA' },
    { name: 'Webflow', icon: 'ri-global-line', category: 'Design' },
  ];

  const faqs = [
    {
      question: 'Quanto tempo leva para criar um site profissional?',
      answer: 'Depende da complexidade do projeto. Um portfólio ou landing page simples pode ser entregue em 1 a 2 semanas. Sites institucionais completos levam de 3 a 6 semanas. E-commerces e plataformas mais robustas podem levar de 6 a 12 semanas.'
    },
    {
      question: 'Você trabalha com clientes de todo o Brasil?',
      answer: 'Sim! Atendo clientes de todo o Brasil de forma 100% remota. Todo o processo — reuniões, apresentações, entregas e suporte — é feito online, sem nenhuma perda de qualidade.'
    },
    {
      question: 'Como funciona o processo de pagamento?',
      answer: 'Geralmente trabalhamos com 50% de entrada para iniciar o projeto e 50% na entrega final. Para projetos maiores, podemos dividir em mais parcelas conforme as etapas de entrega.'
    },
    {
      question: 'O site será responsivo para celular e tablet?',
      answer: 'Absolutamente! Todos os projetos são desenvolvidos com design responsivo, garantindo uma experiência perfeita em qualquer dispositivo — desktop, tablet ou smartphone.'
    },
    {
      question: 'Você oferece suporte após a entrega do projeto?',
      answer: 'Sim. Ofereço suporte pós-lançamento para correções e ajustes. Para manutenção contínua, atualizações e novas funcionalidades, temos planos mensais de suporte.'
    },
    {
      question: 'Posso ver exemplos de projetos anteriores?',
      answer: 'Claro! Você pode conferir meu portfólio completo na página de Projetos. Lá estão cases reais com descrições detalhadas e resultados alcançados.'
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: null,
      description: 'Ideal para profissionais autônomos e freelancers que precisam de presença online.',
      features: [
        'Landing page ou portfólio',
        'Design responsivo',
        'Até 5 seções',
        'Formulário de contato',
        'SEO básico',
        'Entrega em 10 dias'
      ],
      highlight: false
    },
    {
      name: 'Professional',
      price: null,
      description: 'Para pequenas empresas e profissionais que querem se destacar no mercado digital.',
      features: [
        'Site institucional completo',
        'Design UX/UI personalizado',
        'Até 10 páginas',
        'Blog ou portfólio dinâmico',
        'SEO avançado',
        'Integração com redes sociais',
        'Painel de gerenciamento',
        'Entrega em 3 semanas'
      ],
      highlight: true
    },
    {
      name: 'Consultoria Personalizada',
      price: null,
      description: 'Antes de qualquer proposta, entendo profundamente o seu negócio, seus objetivos e desafios para criar a solução ideal.',
      features: [
        'Reunião de descoberta gratuita',
        'Análise do seu negócio e público-alvo',
        'Diagnóstico digital completo',
        'Proposta sob medida para sua realidade',
        'Escopo definido junto com você',
        'Sem surpresas no processo',
        'Suporte dedicado do início ao fim',
        'Prazo e entregáveis combinados'
      ],
      highlight: false,
      isConsulting: true
    }
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-5 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#c8a96e] text-sm font-mono uppercase tracking-widest mb-4 block">O que eu faço</span>
            <h1 className="text-white text-5xl md:text-7xl font-black mb-6 leading-tight">
              Especialidades
            </h1>
            <p className="text-[#909090] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Soluções completas em desenvolvimento web, design de experiência e inteligência artificial para transformar suas ideias em realidade digital de alto impacto.
            </p>
          </div>

          {/* Specialties — cards com imagem */}
          <div className="space-y-8 mb-28">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className={`group bg-[#141414] border border-[#1e1e1e] rounded-2xl overflow-hidden hover:border-[#c8a96e]/40 transition-all duration-500 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Imagem */}
                  <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                    <img
                      src={specialty.image}
                      alt={specialty.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/60 to-transparent lg:hidden"></div>
                  </div>

                  {/* Conteúdo */}
                  <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-xl bg-[#1e1e1e] flex items-center justify-center mb-6 group-hover:bg-[#c8a96e]/10 transition-colors duration-300">
                      <i className={`${specialty.icon} text-2xl text-[#c8a96e]`}></i>
                    </div>
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">{specialty.title}</h2>
                    <p className="text-[#909090] text-base leading-relaxed mb-8">{specialty.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {specialty.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <i className="ri-check-line text-[#c8a96e] text-lg mt-0.5 flex-shrink-0"></i>
                          <span className="text-[#707070] text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20 px-5 md:px-16 lg:px-24 bg-[#0d0d0d]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c8a96e] text-sm font-mono uppercase tracking-widest mb-4 block">Como trabalho</span>
            <h2 className="text-white text-4xl md:text-5xl font-black mb-4">Processo de Trabalho</h2>
            <p className="text-[#909090] text-lg max-w-2xl mx-auto">
              Um método claro e transparente do início ao fim, para que você saiba exatamente o que esperar em cada etapa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="group relative bg-[#141414] border border-[#1e1e1e] rounded-2xl p-8 hover:border-[#c8a96e]/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-4 right-6 text-[#1e1e1e] text-6xl font-black group-hover:text-[#c8a96e]/10 transition-colors duration-300 select-none">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#1e1e1e] flex items-center justify-center mb-5 group-hover:bg-[#c8a96e]/10 transition-colors duration-300">
                    <i className={`${step.icon} text-xl text-[#c8a96e]`}></i>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-[#707070] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ferramentas */}
      <section className="py-20 px-5 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c8a96e] text-sm font-mono uppercase tracking-widest mb-4 block">Stack</span>
            <h2 className="text-white text-4xl md:text-5xl font-black mb-4">Ferramentas & Tecnologias</h2>
            <p className="text-[#909090] text-lg max-w-2xl mx-auto">
              Utilizo as melhores ferramentas do mercado para entregar soluções modernas, rápidas e escaláveis.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 flex flex-col items-center gap-3 hover:border-[#c8a96e]/40 hover:bg-[#c8a96e]/5 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className={`${tool.icon} text-2xl text-[#c8a96e]`}></i>
                </div>
                <span className="text-white text-sm font-medium text-center">{tool.name}</span>
                <span className="text-[#505050] text-xs font-mono">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 px-5 md:px-16 lg:px-24 bg-[#0d0d0d]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c8a96e] text-sm font-mono uppercase tracking-widest mb-4 block">Investimento</span>
            <h2 className="text-white text-4xl md:text-5xl font-black mb-4">Planos & Preços</h2>
            <p className="text-[#909090] text-lg max-w-2xl mx-auto">
              Soluções para cada momento do seu negócio. Todos os planos incluem design responsivo e suporte pós-entrega.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-[#c8a96e] border-2 border-[#c8a96e]'
                    : (plan as { isConsulting?: boolean }).isConsulting
                    ? 'bg-[#141414] border border-[#c8a96e]/40 hover:border-[#c8a96e]/70'
                    : 'bg-[#141414] border border-[#1e1e1e] hover:border-[#c8a96e]/40'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0a0a0a] text-[#c8a96e] text-xs font-mono px-4 py-1.5 rounded-full border border-[#c8a96e]/40 whitespace-nowrap">
                    Mais Popular
                  </div>
                )}
                {(plan as { isConsulting?: boolean }).isConsulting && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c8a96e] text-[#0a0a0a] text-xs font-mono px-4 py-1.5 rounded-full whitespace-nowrap font-bold">
                    Recomendado
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-[#0a0a0a]' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.highlight ? 'text-[#0a0a0a]/70' : 'text-[#707070]'}`}>
                    {plan.description}
                  </p>
                  <div className={`text-sm font-mono tracking-widest uppercase ${plan.highlight ? 'text-[#0a0a0a]/60' : 'text-[#c8a96e]/60'}`}>
                    {(plan as { isConsulting?: boolean }).isConsulting ? 'Orçamento sob consulta' : 'Solicite um orçamento'}
                  </div>
                </div>

                <div className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <i className={`ri-check-line text-lg mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-[#0a0a0a]' : 'text-[#c8a96e]'}`}></i>
                      <span className={`text-sm ${plan.highlight ? 'text-[#0a0a0a]/80' : 'text-[#707070]'}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/#contato"
                  className={`block text-center py-3 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    plan.highlight
                      ? 'bg-[#0a0a0a] text-[#c8a96e] hover:bg-[#1a1a1a]'
                      : (plan as { isConsulting?: boolean }).isConsulting
                      ? 'bg-[#c8a96e] text-[#0a0a0a] hover:bg-[#d4b87d]'
                      : 'bg-transparent border-2 border-[#c8a96e] text-[#c8a96e] hover:bg-[#c8a96e]/10'
                  }`}
                >
                  {(plan as { isConsulting?: boolean }).isConsulting ? 'Agendar Conversa' : 'Solicitar Orçamento'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c8a96e] text-sm font-mono uppercase tracking-widest mb-4 block">Dúvidas</span>
            <h2 className="text-white text-4xl md:text-5xl font-black mb-4">Perguntas Frequentes</h2>
            <p className="text-[#909090] text-lg max-w-2xl mx-auto">
              Respostas para as dúvidas mais comuns antes de iniciarmos um projeto juntos.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#141414] border border-[#1e1e1e] rounded-xl overflow-hidden hover:border-[#c8a96e]/30 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <i className={`ri-arrow-down-s-line text-[#c8a96e] text-xl flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}></i>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#707070] text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-5 md:px-16 lg:px-24 bg-[#0d0d0d]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center bg-[#141414] border border-[#1e1e1e] rounded-2xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/5 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
                Pronto para começar?
              </h2>
              <p className="text-[#909090] text-lg mb-10 max-w-2xl mx-auto">
                Vamos conversar sobre como posso transformar suas ideias em soluções digitais de alto impacto. Respondo em até 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contato"
                  className="px-10 py-4 bg-[#c8a96e] text-[#0a0a0a] font-bold rounded-full hover:bg-[#d4b87d] transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Entrar em Contato
                </Link>
                <Link
                  to="/projetos"
                  className="px-10 py-4 bg-transparent border-2 border-[#c8a96e] text-[#c8a96e] font-bold rounded-full hover:bg-[#c8a96e]/10 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Ver Projetos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
