import { Link } from 'react-router-dom';
import { useState } from 'react';
import DefaultLayout from '../../components/DefaultLayout';
import CtaSection from '../../components/CtaSection';

export default function ProjetosPage() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'E-commerce Moderno',
      category: 'UX/UI Design & Desenvolvimento',
      description: 'Plataforma completa de e-commerce com design minimalista, sistema de pagamento integrado e painel administrativo. Foco em conversão e experiência do usuário.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'Stripe', 'UX/UI'],
      link: '#',
      stats: { conversao: '+45%', tempo: '3 meses', satisfacao: '98%' }
    },
    {
      title: 'Dashboard Analytics',
      category: 'IA & Visualização de Dados',
      description: 'Dashboard inteligente com análise preditiva usando machine learning. Visualização de dados em tempo real com gráficos interativos e insights automatizados.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
      tags: ['Python', 'React', 'D3.js', 'Machine Learning'],
      link: '#',
      stats: { eficiencia: '+60%', usuarios: '10k+', uptime: '99.9%' }
    },
    {
      title: 'Portfólio Criativo',
      category: 'Web Design & Animações',
      description: 'Portfólio interativo para artista digital com animações fluidas, galeria dinâmica e sistema de CMS personalizado. Design único que reflete a identidade do cliente.',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2680&auto=format&fit=crop',
      tags: ['Next.js', 'Framer Motion', 'Sanity CMS'],
      link: '#',
      stats: { engajamento: '+80%', tempo_site: '4.5min', leads: '+120%' }
    },
    {
      title: 'App de Produtividade',
      category: 'UX/UI & Desenvolvimento Mobile',
      description: 'Aplicativo de gestão de tarefas com IA que aprende padrões do usuário e sugere otimizações. Interface intuitiva com sincronização em nuvem.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop',
      tags: ['React Native', 'Firebase', 'AI/ML'],
      link: '#',
      stats: { downloads: '50k+', rating: '4.8★', retencao: '75%' }
    },
    {
      title: 'Landing Page SaaS',
      category: 'Web Design & Conversão',
      description: 'Landing page de alta conversão para startup de SaaS. Design focado em storytelling, CTAs estratégicos e otimização para SEO e performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2669&auto=format&fit=crop',
      tags: ['React', 'TailwindCSS', 'SEO'],
      link: '#',
      stats: { conversao: '+85%', ctr: '12%', bounce: '-40%' }
    },
    {
      title: 'Sistema de Reservas',
      category: 'Full Stack & Automação',
      description: 'Plataforma de agendamento online com integração de calendário, pagamentos automáticos e notificações inteligentes. Redução de 90% no tempo de gestão.',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2668&auto=format&fit=crop',
      tags: ['Vue.js', 'Laravel', 'Stripe', 'APIs'],
      link: '#',
      stats: { automacao: '90%', reservas: '5k+/mês', economia: 'R$15k/mês' }
    }
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-5 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-white text-5xl md:text-7xl font-black mb-6">
              Projetos
            </h1>
            <p className="text-[#909090] text-lg md:text-xl max-w-3xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes em desenvolvimento web, UX/UI design e soluções com inteligência artificial.
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-20">
            <div className="bg-[#141414] border border-[#1e1e1e] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-[400px] lg:h-[620px] bg-[#1e1e1e] overflow-hidden">
                  <img 
                    src={projects[selectedProject].image} 
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-[#c8a96e] text-sm font-mono uppercase tracking-wider mb-4">
                    {projects[selectedProject].category}
                  </span>
                  <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                    {projects[selectedProject].title}
                  </h2>
                  <p className="text-[#909090] text-base leading-relaxed mb-6">
                    {projects[selectedProject].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[selectedProject].tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 bg-[#1e1e1e] text-[#c8a96e] text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(projects[selectedProject].stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[#c8a96e] text-2xl font-bold mb-1">{value}</div>
                        <div className="text-[#606060] text-xs uppercase tracking-wider">{key}</div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={projects[selectedProject].link}
                    className="inline-flex items-center gap-2 text-[#c8a96e] hover:text-[#d4b87d] transition-colors duration-300 cursor-pointer font-mono text-sm"
                  >
                    Ver Projeto Completo
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Project Selector */}
            <div className="flex gap-4 mt-8 overflow-x-auto pb-4">
              {projects.map((project, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedProject(idx)}
                  className={`flex-shrink-0 px-6 py-3 rounded-full font-mono text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    selectedProject === idx
                      ? 'bg-[#c8a96e] text-[#0a0a0a]'
                      : 'bg-[#141414] text-[#909090] hover:text-[#c8a96e] border border-[#1e1e1e]'
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="mb-20">
            <h3 className="text-white text-3xl font-bold mb-8">Todos os Projetos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="group bg-[#141414] border border-[#1e1e1e] rounded-2xl overflow-hidden hover:border-[#c8a96e]/40 transition-all duration-300 text-left"
                  onClick={() => setSelectedProject(idx)}
                >
                  <div className="relative h-64 bg-[#1e1e1e] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[#c8a96e] text-xs font-mono uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h4 className="text-white text-xl font-bold mt-2 mb-3">
                      {project.title}
                    </h4>
                    <p className="text-[#707070] text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          {/* Nota: Adaptado para usar o componente, mantendo o estilo visual consistente */}
          <CtaSection 
            title="Gostou do que viu?"
            description="Vamos criar algo incrível juntos. Entre em contato para discutir seu próximo projeto."
            primaryButtonText="Iniciar um Projeto"
          />
        </div>
      </section>
    </DefaultLayout>
  );
}