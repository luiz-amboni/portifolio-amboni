import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

export default function SpecialtiesSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 });

  const specialties = [
    {
      icon: 'ri-window-line',
      title: 'Sites & Portfólios',
      description: 'Criação de sites profissionais, portfólios digitais e landing pages de alta conversão. Do design à entrega final, com foco em performance, identidade visual e resultados reais para médicos, arquitetos e empreendedores.'
    },
    {
      icon: 'ri-layout-4-line',
      title: 'UX/UI Design',
      description: 'Interfaces intuitivas e experiências digitais que encantam e convertem. Prototipagem no Figma, Design Systems e pesquisa de usuário para garantir que cada clique leve o visitante ao objetivo certo.'
    },
    {
      icon: 'ri-robot-2-line',
      title: 'IA & Automação',
      description: 'Integração de inteligência artificial em produtos e processos digitais. Agentes de IA, automações inteligentes e soluções que economizam tempo, reduzem custos e elevam a experiência do usuário.'
    }
  ];

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative px-5 md:px-16 lg:px-24 py-20 md:py-28"
      style={{ background: '#0f0f0f' }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12 md:mb-20">
          <p
            className={`font-mono text-xs text-[#c8a96e] mb-4 md:mb-6 tracking-widest transition-all duration-700 ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            // ESPECIALIDADES
          </p>
          <h2
            className={`text-4xl sm:text-5xl md:text-[84px] font-black text-white leading-none tracking-wide transition-all duration-700 delay-100 ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            MEUS<br />
            SERVIÇOS
          </h2>
        </div>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
        >
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`bg-[#141414] border border-[#1e1e1e] rounded-2xl p-7 md:p-12 hover:border-[#c8a96e]/40 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(200,169,110,0.08)] ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="flex items-center justify-center w-10 h-10 mb-6 md:mb-8">
                <i className={`${specialty.icon} text-[#c8a96e] text-[36px] md:text-[40px] group-hover:scale-110 transition-transform duration-300`}></i>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-6">{specialty.title}</h3>
              <p className="text-[#707070] text-sm md:text-[15px] leading-[1.7]">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
