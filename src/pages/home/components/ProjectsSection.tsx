export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="relative w-full px-5 md:px-16 lg:px-24 py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #0f0f0f 0%, #141414 100%)' }}
    >
      <div className="max-w-[1600px] mx-auto">

        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-16">
          <div>
            <p className="font-mono text-xs text-[#c8a96e] mb-3 md:mb-4 tracking-widest">// PROJETOS SELECIONADOS</p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-none break-words">
              Trabalhos<br />
              <span style={{
                background: 'linear-gradient(90deg, #c8a96e, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Recentes</span>
            </h2>
          </div>
          <p className="text-[#505050] text-sm md:text-base max-w-sm leading-relaxed lg:text-right">
            Cada projeto é uma solução única — design inteligente, tecnologia moderna e resultados reais.
          </p>
        </div>

        {/* Área principal do projeto */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5 md:gap-6 items-start">

          {/* Preview — browser mockup */}
          <div className="rounded-2xl overflow-hidden border border-[#1e1e1e] bg-[#141414] shadow-[0_0_60px_rgba(200,169,110,0.06)]">
            {/* Barra do browser */}
            <div className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-3 md:py-4 bg-[#181818] border-b border-[#1e1e1e]">
              <div className="flex gap-1.5 md:gap-2">
                <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57]"></span>
                <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]"></span>
                <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]"></span>
              </div>
              <div className="flex-1 mx-2 md:mx-4 px-3 md:px-4 py-1.5 bg-[#0f0f0f] rounded-lg border border-[#1e1e1e] flex items-center gap-2 min-w-0">
                <i className="ri-lock-line text-[#404040] text-xs flex-shrink-0"></i>
                <span className="font-mono text-xs text-[#404040] truncate">dralaurafolchini.com.br</span>
              </div>
              <a
                href="https://dralaurafolchini.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center text-[#404040] hover:text-[#c8a96e] transition-colors cursor-pointer flex-shrink-0"
              >
                <i className="ri-external-link-line text-sm"></i>
              </a>
            </div>

            {/* iframe do site */}
            <div className="relative w-full" style={{ height: '620px' }}>
              <iframe
                src="https://dralaurafolchini.com.br/"
                title="Dra. Laura Folchini"
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                loading="lazy"
              />
            </div>
          </div>

          {/* Painel lateral de info */}
          <div className="flex flex-col gap-5 md:gap-6">
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-[#c8a96e] text-[#0f0f0f]">
                LIVE
              </span>
              <span className="font-mono text-xs text-[#404040]">Website Médico</span>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">Dra. Laura Folchini</h3>
              <p className="text-[#606060] text-sm leading-relaxed">
                Website profissional para médica com foco em conversão, agendamento online e identidade visual sofisticada. Design elegante que transmite confiança e profissionalismo.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['UX/UI', 'Desenvolvimento', 'Healthcare'].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 border border-[#1e1e1e] text-[#606060] text-xs font-mono rounded-full hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="h-px bg-[#1a1a1a]"></div>

            <div className="flex flex-col gap-3">
              <a
                href="https://dralaurafolchini.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 font-bold rounded-xl hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer text-[#0f0f0f]"
                style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}
              >
                <i className="ri-external-link-line text-lg"></i>
                Ver Projeto Completo
              </a>
              <a
                href="https://github.com/luiz-amboni/dra-laura-folchini-website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 border border-[#1e1e1e] text-[#606060] font-mono text-sm rounded-xl hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-github-line text-lg"></i>
                Ver no GitHub
              </a>
            </div>

            {/* Resultado */}
            <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5">
              <p className="font-mono text-xs text-[#c8a96e] tracking-widest mb-3">// RESULTADO</p>
              <p className="text-[#707070] text-sm leading-relaxed">
                Aumento significativo de agendamentos online e presença digital profissional que transmite confiança aos pacientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
