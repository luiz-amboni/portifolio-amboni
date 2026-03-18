import { Link } from 'react-router-dom';
import { useState } from 'react';
import DefaultLayout from '../../components/DefaultLayout';
import CtaSection from '../../components/CtaSection';

const testimonials = [
  {
    name: 'Carlos Mendes',
    initials: 'CM',
    role: 'CEO',
    company: 'TechStart Brasil',
    color: '#c8a96e',
    text: 'O Luiz transformou completamente nossa presença digital. O site que ele criou não só é visualmente impressionante, mas também aumentou nossas conversões em 85%. Profissionalismo e criatividade em cada detalhe.',
    rating: 5,
    project: 'Landing Page SaaS',
    result: '+85% conversão'
  },
  {
    name: 'Marina Silva',
    initials: 'MS',
    role: 'Diretora de Marketing',
    company: 'Inovare Digital',
    color: '#a0b4c8',
    text: 'Trabalhar com o Luiz foi uma experiência excepcional. Ele entendeu perfeitamente nossa visão e entregou um dashboard analytics que superou todas as expectativas. A integração com IA economizou horas de trabalho manual.',
    rating: 5,
    project: 'Dashboard Analytics',
    result: '+60% eficiência'
  },
  {
    name: 'Rafael Costa',
    initials: 'RC',
    role: 'Fundador',
    company: 'Studio Criativo',
    color: '#b4c8a0',
    text: 'Meu portfólio nunca teve tanta personalidade! O Luiz criou uma experiência única com animações incríveis que realmente mostram meu trabalho da melhor forma. Recebi 3x mais contatos de clientes desde o lançamento.',
    rating: 5,
    project: 'Portfólio Criativo',
    result: '+200% leads'
  },
  {
    name: 'Juliana Oliveira',
    initials: 'JO',
    role: 'Proprietária',
    company: 'Boutique Elegance',
    color: '#c8a0b4',
    text: 'O e-commerce que o Luiz desenvolveu revolucionou meu negócio. Interface linda, fácil de usar e com todas as funcionalidades que eu precisava. As vendas online cresceram 150% nos primeiros 3 meses!',
    rating: 5,
    project: 'E-commerce Moderno',
    result: '+150% vendas'
  },
  {
    name: 'Pedro Almeida',
    initials: 'PA',
    role: 'Gerente de Operações',
    company: 'Clínica Saúde+',
    color: '#a0c8c0',
    text: 'O sistema de reservas automatizado que o Luiz criou mudou completamente nossa operação. Reduzimos 90% do tempo gasto com agendamentos e nossos pacientes adoram a facilidade de marcar consultas online.',
    rating: 5,
    project: 'Sistema de Reservas',
    result: '90% automação'
  },
  {
    name: 'Amanda Santos',
    initials: 'AS',
    role: 'Product Manager',
    company: 'AppFlow',
    color: '#c8b4a0',
    text: 'A experiência do usuário que o Luiz projetou para nosso app é simplesmente perfeita. Cada interação foi pensada nos mínimos detalhes. Nossa taxa de retenção aumentou 75% e o rating na loja subiu para 4.8 estrelas.',
    rating: 5,
    project: 'App de Produtividade',
    result: '4.8★ rating'
  }
];

export default function DepoimentosPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const active = testimonials[activeTestimonial];

  return (
    <DefaultLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 px-5 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-xs text-[#c8a96e] mb-4 tracking-widest">// DEPOIMENTOS</p>
            <h1 className="text-white text-5xl md:text-7xl font-black mb-6 leading-none">
              O Que Dizem<br />
              <span style={{
                background: 'linear-gradient(90deg, #c8a96e, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Meus Clientes</span>
            </h1>
            <p className="text-[#909090] text-lg md:text-xl max-w-3xl mx-auto">
              Resultados reais de quem confiou no meu trabalho para transformar suas ideias em projetos de sucesso.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="mb-20">
            <div className="bg-[#141414] border border-[#1e1e1e] rounded-2xl p-8 md:p-12 lg:p-16">
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                {/* Avatar com iniciais */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-6 text-2xl font-black flex-shrink-0"
                  style={{
                    background: `${active.color}18`,
                    border: `2px solid ${active.color}50`,
                    color: active.color,
                  }}
                >
                  {active.initials}
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(active.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#c8a96e] text-xl"></i>
                  ))}
                </div>

                <p className="text-white text-xl md:text-2xl leading-relaxed mb-8 italic">
                  "{active.text}"
                </p>

                <div className="mb-6">
                  <h3 className="text-white text-xl font-bold mb-1">{active.name}</h3>
                  <p className="text-[#c8a96e] text-sm font-mono">
                    {active.role} — {active.company}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="px-4 py-2 bg-[#1e1e1e] text-[#909090] text-sm rounded-full">
                    {active.project}
                  </span>
                  <span className="px-4 py-2 bg-[#c8a96e]/10 text-[#c8a96e] text-sm rounded-full font-bold">
                    {active.result}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-3 justify-center mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    activeTestimonial === idx
                      ? 'bg-[#c8a96e] w-8'
                      : 'bg-[#2a2a2a] w-3 hover:bg-[#404040]'
                  }`}
                  aria-label={`Ver depoimento ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* All Testimonials Grid */}
          <div className="mb-20">
            <h3 className="text-white text-3xl font-bold mb-8 text-center">Todos os Depoimentos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="group bg-[#141414] border border-[#1e1e1e] rounded-2xl p-6 hover:border-[#c8a96e]/40 transition-all duration-300 text-left"
                  onClick={() => setActiveTestimonial(idx)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                      style={{
                        background: `${testimonial.color}18`,
                        border: `1.5px solid ${testimonial.color}40`,
                        color: testimonial.color,
                      }}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-[#707070] text-xs">{testimonial.role}</p>
                      <p className="text-[#c8a96e] text-xs font-mono">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-[#c8a96e] text-sm"></i>
                    ))}
                  </div>

                  <p className="text-[#909090] text-sm leading-relaxed line-clamp-4 mb-4">
                    "{testimonial.text}"
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-[#1e1e1e] text-[#707070] text-xs rounded-full">
                      {testimonial.project}
                    </span>
                    <span className="px-3 py-1 bg-[#c8a96e]/10 text-[#c8a96e] text-xs rounded-full font-bold">
                      {testimonial.result}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { value: '98%', label: 'Satisfação' },
              { value: '50+', label: 'Projetos' },
              { value: '6', label: 'Anos' },
              { value: '100%', label: 'Recomendação' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-[#c8a96e] text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-[#909090] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <CtaSection
            title="Quer ser o próximo case de sucesso?"
            description="Vamos conversar sobre como posso ajudar você a alcançar resultados extraordinários."
            primaryButtonText="Começar Meu Projeto"
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
