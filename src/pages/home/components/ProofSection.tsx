import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

/**
 * Substituiu a antiga seção de depoimentos.
 *
 * Os depoimentos que existiam aqui eram texto de exemplo gerado junto com o
 * template — nomes e empresas que não existem. Uma citação inventada não prova
 * nada e queima quem a publica no dia em que alguém pede para falar com o
 * cliente. No lugar dela: o que qualquer pessoa pode abrir, ler ou contar
 * sozinha. Quando houver depoimento real, com nome e autorização, ele entra
 * aqui — e não antes.
 */

const LIVE = [
  {
    label: 'safeimports.com.br',
    url: 'https://www.safeimports.com.br',
    what: 'Loja com checkout próprio: PIX, cartão e frete real',
  },
  {
    label: 'veartech.com.br',
    url: 'https://veartech.com.br',
    what: 'Consulta pública das atas de licitação vigentes',
  },
  {
    label: 'dralaurafolchini.com.br',
    url: 'https://dralaurafolchini.com.br',
    what: 'Site de consultório que transforma visita em consulta',
  },
  {
    label: 'luiz-amboni.github.io/amboni-ui',
    url: 'https://luiz-amboni.github.io/amboni-ui/',
    what: 'Documentação do design system, com exemplos ao vivo',
  },
];

const OPEN = [
  {
    label: '@amboni/ui no npm',
    url: 'https://www.npmjs.com/package/@amboni/ui',
    what: 'Versão 0.3.5 publicada · 39 componentes · 12,7 kB comprimido',
    icon: 'ri-npmjs-line',
  },
  {
    label: 'github.com/luiz-amboni/amboni-ui',
    url: 'https://github.com/luiz-amboni/amboni-ui',
    what: 'Código do design system, com os testes de contraste WCAG',
    icon: 'ri-github-line',
  },
  {
    label: 'github.com/luiz-amboni/dra-laura-folchini-website',
    url: 'https://github.com/luiz-amboni/dra-laura-folchini-website',
    what: 'Site de cliente, aberto do começo ao fim',
    icon: 'ri-github-line',
  },
];

const COUNTED = [
  { value: '9', label: 'sistemas em produção' },
  { value: '22', label: 'módulos de API no maior CRM' },
  { value: '43', label: 'tabelas no banco desse CRM' },
  { value: '48', label: 'migrations versionadas' },
  { value: '504', label: 'testes automatizados' },
  { value: '39', label: 'componentes publicados no npm' },
];

export default function ProofSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="prova"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative w-full px-5 md:px-16 lg:px-24 py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #141414 0%, #0f0f0f 100%)' }}
    >
      <div className="max-w-[1600px] mx-auto">

        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div>
            <p className="font-mono text-xs text-[#c8a96e] mb-3 md:mb-4 tracking-widest">// PROVA</p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-none">
              Não peça para<br />
              <span style={{
                background: 'linear-gradient(90deg, #c8a96e, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>acreditar. Confira.</span>
            </h2>
          </div>
          <p className="text-[#505050] text-sm md:text-base max-w-sm leading-relaxed lg:text-right">
            Endereço que abre, pacote que instala, código que você lê e número que dá para
            recontar. É isso que sustenta um portfólio.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Está no ar */}
          <div className="bg-[#141414] border border-[#1e1e1e] rounded-2xl p-7 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#c8a96e]/10 border border-[#c8a96e]/20 flex items-center justify-center flex-shrink-0">
                <i className="ri-global-line text-[#c8a96e] text-xl"></i>
              </div>
              <div>
                <h3 className="text-white font-bold">Está no ar</h3>
                <p className="text-[#505050] text-xs font-mono">clique e veja funcionando</p>
              </div>
            </div>
            <ul className="space-y-4">
              {LIVE.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block cursor-pointer"
                  >
                    <span className="flex items-center gap-2 text-[#c8a96e] text-sm font-mono group-hover:gap-3 transition-all duration-300 break-all">
                      {item.label}
                      <i className="ri-external-link-line text-xs flex-shrink-0"></i>
                    </span>
                    <span className="block text-[#707070] text-[13px] leading-snug mt-1">{item.what}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Está aberto */}
          <div className="bg-[#141414] border border-[#1e1e1e] rounded-2xl p-7 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#c8a96e]/10 border border-[#c8a96e]/20 flex items-center justify-center flex-shrink-0">
                <i className="ri-code-box-line text-[#c8a96e] text-xl"></i>
              </div>
              <div>
                <h3 className="text-white font-bold">Está aberto</h3>
                <p className="text-[#505050] text-xs font-mono">o código, não só a tela</p>
              </div>
            </div>
            <ul className="space-y-4">
              {OPEN.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block cursor-pointer"
                  >
                    <span className="flex items-start gap-2 text-[#c8a96e] text-sm font-mono group-hover:gap-3 transition-all duration-300 break-all">
                      <i className={`${item.icon} text-base flex-shrink-0 mt-0.5`}></i>
                      {item.label}
                    </span>
                    <span className="block text-[#707070] text-[13px] leading-snug mt-1">{item.what}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[#3a3a3a] text-[11px] font-mono leading-relaxed mt-6 pt-5 border-t border-[#1c1c1c]">
              Os CRMs e o motor de licitação são privados: catálogo com preço de custo e dado de
              cliente não vão para repositório público.
            </p>
          </div>

          {/* Está contado */}
          <div className="bg-[#141414] border border-[#1e1e1e] rounded-2xl p-7 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#c8a96e]/10 border border-[#c8a96e]/20 flex items-center justify-center flex-shrink-0">
                <i className="ri-calculator-line text-[#c8a96e] text-xl"></i>
              </div>
              <div>
                <h3 className="text-white font-bold">Está contado</h3>
                <p className="text-[#505050] text-xs font-mono">nenhum número estimado</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
              {COUNTED.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-black text-white leading-none">{item.value}</p>
                  <p className="text-[#606060] text-[11px] font-mono mt-1.5 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-[#3a3a3a] text-[11px] font-mono leading-relaxed mt-6 pt-5 border-t border-[#1c1c1c]">
              Contados em 09/08/2026 nos repositórios: rotas, tabelas, migrations, arquivos de
              teste e componentes exportados.
            </p>
          </div>
        </div>

        {/* Nota sobre depoimentos */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-[#111111] border border-[#1c1c1c] rounded-2xl p-6 md:p-7">
          <div className="flex items-start gap-4">
            <i className="ri-shield-check-line text-[#c8a96e] text-2xl flex-shrink-0 mt-0.5"></i>
            <div>
              <p className="text-white text-sm font-semibold mb-1">Aqui não tem depoimento inventado.</p>
              <p className="text-[#707070] text-sm leading-relaxed max-w-2xl">
                Prefiro mostrar o que dá para conferir. Quer falar com quem já trabalhou comigo?
                Pede que eu apresento — com o aval da pessoa.
              </p>
            </div>
          </div>
          <Link
            to="/prova"
            className="flex-shrink-0 inline-flex items-center gap-2 text-[#c8a96e] font-mono text-sm hover:gap-3 transition-all duration-300 cursor-pointer"
          >
            Como eu trabalho
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
