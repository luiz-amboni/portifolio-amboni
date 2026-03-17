import { useScrollAnimation, useCountAnimation } from '../../../hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: numberRef, isVisible: numberVisible } = useScrollAnimation({ threshold: 0.4 });
  const count = useCountAnimation(6, 2000, numberVisible);

  const skills = [
    'Criação de Sites', 'Portfólios Digitais', 'Landing Pages',
    'UX/UI Design', 'Automação com IA', 'Agentes de IA',
    'Figma', 'Prototipagem', 'TypeScript', 'Consultoria Digital'
  ];

  const stats = [
    { value: '50+', label: 'Projetos entregues' },
    { value: '6+', label: 'Anos de experiência' },
    { value: '100%', label: 'Clientes satisfeitos' },
  ];

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="sobre"
      className="relative w-full px-5 md:px-16 lg:px-24 py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #141414 100%)' }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c8a96e]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c8a96e]/15 to-transparent"></div>

      <div className="max-w-[1600px] mx-auto">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c8a96e]/8 border border-[#c8a96e]/20 mb-16 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-mono text-xs text-[#c8a96e] tracking-widest">// SOBRE MIM</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* Coluna Esquerda */}
          <div
            className={`pr-0 lg:pr-16 border-r-0 lg:border-r border-[#1e1e1e] transition-all duration-700 delay-100 ${
              sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div ref={numberRef as React.RefObject<HTMLDivElement>}>
              <div
                className="text-[90px] sm:text-[120px] lg:text-[160px] font-black leading-none select-none"
                style={{
                  background: 'linear-gradient(135deg, #c8a96e 0%, #ffffff 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {count}+
              </div>
              <p className="text-[#404040] text-base md:text-lg font-mono tracking-widest uppercase mt-2 mb-8 md:mb-12">
                Anos de Experiência
              </p>
            </div>

            <div className="flex flex-col gap-5 md:gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 md:gap-6 transition-all duration-700 ${
                    sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <span
                    className="text-3xl md:text-4xl font-black whitespace-nowrap"
                    style={{
                      background: 'linear-gradient(90deg, #c8a96e, #ffffff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </span>
                  <div className="flex-1 h-px bg-[#1e1e1e]"></div>
                  <span className="text-[#505050] text-xs md:text-sm font-mono tracking-wider uppercase text-right">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Direita */}
          <div
            className={`pl-0 lg:pl-16 pt-10 lg:pt-0 flex flex-col justify-between transition-all duration-700 delay-200 ${
              sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 md:mb-8">
                Sites que<br />
                <span style={{
                  background: 'linear-gradient(90deg, #c8a96e, #ffffff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>geram resultados.</span>
              </h2>

              <p className="text-[#707070] text-base md:text-lg leading-relaxed mb-4">
                Crio <strong className="text-[#c0c0c0] font-semibold">sites, portfólios e landing pages</strong> com{' '}
                <strong className="text-[#c0c0c0] font-semibold">UX/UI estratégico e inteligência artificial</strong> — do design à entrega final.
              </p>
              <p className="text-[#505050] text-sm md:text-base leading-relaxed mb-8 md:mb-12">
                Atendo médicos, arquitetos, empreendedores e profissionais liberais que precisam de uma presença digital moderna, funcional e que realmente converte visitantes em clientes.
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-mono border border-[#1e1e1e] text-[#707070] rounded-full hover:border-[#c8a96e]/50 hover:text-[#c8a96e] transition-all duration-300 cursor-default ${
                      sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${500 + i * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`flex flex-wrap items-center gap-4 md:gap-6 transition-all duration-700 delay-[700ms] ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="#contato"
                className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-[#0f0f0f] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
                style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}
              >
                <i className="ri-send-plane-line text-lg"></i>
                Vamos Conversar
              </a>
              <a
                href="https://www.linkedin.com/in/luiz-otavio-a-892a0a122/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#505050] hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-linkedin-box-line text-xl"></i>
                <span className="text-sm font-mono">LinkedIn</span>
              </a>
              <a
                href="https://github.com/luiz-amboni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#505050] hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-github-line text-xl"></i>
                <span className="text-sm font-mono">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
