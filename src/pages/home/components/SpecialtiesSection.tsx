import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const specialties = [
  {
    icon: 'ri-window-2-line',
    title: 'Sistemas web sob medida',
    description:
      'CRM, painel administrativo, área do cliente e gestão interna. Feito para a operação que você já tem, não para a que o software esperava encontrar.',
  },
  {
    icon: 'ri-shopping-bag-3-line',
    title: 'E-commerce e checkout próprio',
    description:
      'Loja com painel próprio, PIX que a tela escuta até cair, cartão, frete real por dimensão do produto e reconciliação diária entre pagamento e pedido.',
  },
  {
    icon: 'ri-links-line',
    title: 'Integrações',
    description:
      'ERP (Bling), meios de pagamento, marketplaces, WhatsApp oficial da Meta, planilhas e APIs. Respeitando limite de requisição e sem gambiarra que um dia some.',
  },
  {
    icon: 'ri-robot-2-line',
    title: 'Automação, inclusive com IA',
    description:
      'Leitura de documento, extração de dado estruturado e classificação em escala. A IA entra onde ela é boa; a regra de negócio continua sendo código auditável.',
  },
  {
    icon: 'ri-cursor-line',
    title: 'Sites que convertem',
    description:
      'Site institucional e landing page com um objetivo por página. Sem banco quando não precisa de banco — escopo menor entrega mais rápido e custa menos.',
  },
  {
    icon: 'ri-server-line',
    title: 'Infraestrutura e publicação',
    description:
      'Docker, servidor, banco e monitoramento. Eu subo, configuro domínio e certificado, e mantenho no ar — sem "roda esse SQL em produção" no grupo do WhatsApp.',
  },
];

export default function SpecialtiesSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="servicos"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative px-5 md:px-16 lg:px-24 py-20 md:py-28"
      style={{ background: '#0f0f0f' }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-20">
          <div>
            <p
              className={`font-mono text-xs text-[#c8a96e] mb-4 md:mb-6 tracking-widest transition-all duration-700 ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              // O QUE EU CONSTRUO
            </p>
            <h2
              className={`text-4xl sm:text-5xl md:text-[72px] font-black text-white leading-none tracking-tight transition-all duration-700 delay-100 ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              DO BANCO<br />AO AR
            </h2>
          </div>
          <p className="text-[#505050] text-sm md:text-base max-w-sm leading-relaxed lg:text-right">
            Seis frentes, um jeito só de trabalhar: entender a operação, escrever, subir e
            manter funcionando.
          </p>
        </div>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {specialties.map((specialty, index) => (
            <div
              key={specialty.title}
              className={`bg-[#141414] border border-[#1e1e1e] rounded-2xl p-7 md:p-9 hover:border-[#c8a96e]/40 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(200,169,110,0.08)] ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#c8a96e]/8 border border-[#c8a96e]/15 mb-6">
                <i className={`${specialty.icon} text-[#c8a96e] text-2xl group-hover:scale-110 transition-transform duration-300`}></i>
              </div>
              <h3 className="text-white text-lg md:text-xl font-bold mb-3">{specialty.title}</h3>
              <p className="text-[#707070] text-sm md:text-[15px] leading-[1.7]">{specialty.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 text-center">
          <Link
            to="/especialidades"
            className="inline-flex items-center gap-2 text-[#c8a96e] font-mono text-sm hover:gap-3 transition-all duration-300 cursor-pointer"
          >
            Como funciona um projeto, do primeiro contato à entrega
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
