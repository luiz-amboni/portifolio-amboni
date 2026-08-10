import { useScrollAnimation, useCountAnimation } from '../../../hooks/useScrollAnimation';
import { CONTACT_INFO } from '../../../constants';

export default function AboutSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: numberRef, isVisible: numberVisible } = useScrollAnimation({ threshold: 0.4 });
  const count = useCountAnimation(9, 1800, numberVisible);

  const skills = [
    'Node.js', 'Express', 'React', 'TypeScript', 'Next.js', 'Python', 'FastAPI',
    'PostgreSQL', 'Prisma', 'Redis', 'Docker',
    'WhatsApp Cloud API', 'Bling ERP', 'Shopify', 'Mercado Pago',
  ];

  const stats = [
    { value: '22', label: 'módulos de API no maior CRM' },
    { value: '48', label: 'migrations rodando sozinhas' },
    { value: '504', label: 'testes automatizados' },
  ];

  return (
    <section
      id="sobre"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative w-full px-5 md:px-16 lg:px-24 py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #141414 100%)' }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c8a96e]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c8a96e]/15 to-transparent"></div>

      <div className="max-w-[1600px] mx-auto">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c8a96e]/8 border border-[#c8a96e]/20 mb-12 md:mb-16 transition-all duration-700 ${
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
                {count}
              </div>
              <p className="text-[#404040] text-base md:text-lg font-mono tracking-widest uppercase mt-2 mb-8 md:mb-12">
                Sistemas em produção
              </p>
            </div>

            <div className="flex flex-col gap-5 md:gap-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
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
                  <span className="text-[#505050] text-xs md:text-sm font-mono tracking-wider uppercase text-right max-w-[190px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[#3a3a3a] text-xs font-mono mt-8 leading-relaxed">
              Todo número deste site foi contado no código — rotas, tabelas, migrations,
              testes, componentes. Nenhum é estimado.
            </p>
          </div>

          {/* Coluna Direita */}
          <div
            className={`pl-0 lg:pl-16 pt-10 lg:pt-0 flex flex-col justify-between transition-all duration-700 delay-200 ${
              sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 md:mb-8">
                Eu construo o<br />
                <span style={{
                  background: 'linear-gradient(90deg, #c8a96e, #ffffff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>sistema inteiro.</span>
              </h2>

              <p className="text-[#909090] text-base md:text-lg leading-relaxed mb-4">
                Antes da primeira linha de código, eu entendo a operação. Já construí para{' '}
                <strong className="text-[#c0c0c0] font-semibold">varejo, saúde, setor público e entretenimento</strong>:
                o que muda é o vocabulário de cada área.
              </p>
              <p className="text-[#707070] text-sm md:text-base leading-relaxed mb-4">
                O que se repete é sempre o mesmo — um processo importante rodando na mão de
                alguém, numa planilha, ou na cabeça de uma pessoa só.
              </p>
              <p className="text-[#707070] text-sm md:text-base leading-relaxed mb-8 md:mb-10">
                Há algo que poucos desenvolvedores trazem junto: eu já estive do lado de quem
                usa o sistema — vendendo, atendendo, cuidando de anúncio e de marketplace. Sei o
                que uma equipe precisa ver na tela, porque já precisei ver. E o que levo a sério
                todo dia:{' '}
                <strong className="text-[#909090]">
                  teste onde a regra de negócio mora, migration versionada, credencial fora do
                  código e resposta honesta sobre prazo.
                </strong>
              </p>

              <div className="flex flex-wrap gap-2 md:gap-2.5 mb-8 md:mb-12">
                {skills.map((skill, i) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-xs md:text-[13px] font-mono border border-[#1e1e1e] text-[#707070] rounded-full hover:border-[#c8a96e]/50 hover:text-[#c8a96e] transition-all duration-300 cursor-default ${
                      sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${500 + i * 40}ms` }}
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
                Vamos conversar
              </a>
              <a
                href={CONTACT_INFO.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#505050] hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-linkedin-box-line text-xl"></i>
                <span className="text-sm font-mono">LinkedIn</span>
              </a>
              <a
                href={CONTACT_INFO.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#505050] hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-github-line text-xl"></i>
                <span className="text-sm font-mono">GitHub</span>
              </a>
              <a
                href={CONTACT_INFO.NPM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#505050] hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-npmjs-line text-xl"></i>
                <span className="text-sm font-mono">npm</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
