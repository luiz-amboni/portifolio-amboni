import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const testimonials = [
  {
    id: 1,
    name: 'Dra. Laura Folchini',
    initials: 'LF',
    role: 'Médica Dermatologista',
    company: 'Clínica Dermatológica',
    text: 'O Luiz transformou completamente minha presença digital. O site ficou elegante, profissional e trouxe um aumento significativo de agendamentos. Ele entendeu perfeitamente o que eu precisava.',
    rating: 5,
    color: '#c8a96e',
  },
  {
    id: 2,
    name: 'Ricardo Santos',
    initials: 'RS',
    role: 'CEO',
    company: 'TechStart Solutions',
    text: 'Trabalhar com o Luiz foi excepcional. Ele não apenas criou um design incrível, mas também implementou automações com IA que otimizaram nossos processos. Recomendo fortemente!',
    rating: 5,
    color: '#a0b4c8',
  },
  {
    id: 3,
    name: 'Marina Costa',
    initials: 'MC',
    role: 'Arquiteta',
    company: 'Costa Arquitetura',
    text: 'Meu portfólio nunca esteve tão bonito! O Luiz capturou a essência do meu trabalho e criou uma experiência visual que impressiona meus clientes. Profissionalismo e criatividade em cada detalhe.',
    rating: 5,
    color: '#b4c8a0',
  },
];

export default function TestimonialsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="depoimentos"
      className="relative w-full px-5 md:px-16 lg:px-24 py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #141414 0%, #0f0f0f 100%)' }}
    >
      <div className="max-w-[1600px] mx-auto">

        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-20">
          <div>
            <p className="font-mono text-xs text-[#c8a96e] mb-3 md:mb-4 tracking-widest">// DEPOIMENTOS</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none">
              O Que Dizem<br />
              <span style={{
                background: 'linear-gradient(90deg, #c8a96e, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Meus Clientes</span>
            </h2>
          </div>
          <p className="text-[#505050] text-sm md:text-base max-w-sm leading-relaxed lg:text-right">
            Resultados reais de quem confiou no meu trabalho para transformar suas ideias em projetos de sucesso.
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative bg-[#141414] border border-[#1e1e1e] rounded-2xl p-8 hover:border-[#c8a96e]/30 transition-all duration-500 group ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/0 to-[#c8a96e]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

              <div className="relative z-10">
                {/* Estrelas */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#c8a96e] text-base"></i>
                  ))}
                </div>

                {/* Texto */}
                <p className="text-[#909090] text-sm leading-relaxed mb-8 min-h-[120px]">
                  "{testimonial.text}"
                </p>

                <div className="h-px bg-[#1e1e1e] mb-6"></div>

                {/* Informações do cliente com iniciais */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                    style={{
                      background: `${testimonial.color}18`,
                      border: `1.5px solid ${testimonial.color}40`,
                      color: testimonial.color,
                    }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5">{testimonial.name}</h4>
                    <p className="text-[#606060] text-xs font-mono">{testimonial.role}</p>
                    <p className="text-[#404040] text-xs font-mono">{testimonial.company}</p>
                  </div>
                </div>
              </div>

              {/* Aspas decorativas */}
              <div className="absolute top-6 right-6 text-[#1e1e1e] text-5xl opacity-60 group-hover:text-[#c8a96e]/15 transition-colors duration-500">
                <i className="ri-double-quotes-r"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Badge de confiança */}
        <div
          className={`flex items-center justify-center gap-3 mt-10 md:mt-16 transition-all duration-700 delay-500 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-9 h-9 rounded-full bg-[#c8a96e]/10 border border-[#c8a96e]/25 flex items-center justify-center">
            <i className="ri-shield-check-line text-[#c8a96e] text-lg"></i>
          </div>
          <p className="font-mono text-sm text-[#606060]">
            <span className="text-[#c8a96e] font-bold">100%</span> de satisfação dos clientes
          </p>
        </div>
      </div>
    </section>
  );
}
