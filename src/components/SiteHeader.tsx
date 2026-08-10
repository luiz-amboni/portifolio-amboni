import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const NAV = [
  { label: 'Projetos', to: '/projetos' },
  { label: 'Serviços', to: '/especialidades' },
  { label: 'Prova', to: '/prova' },
  { label: 'Currículo', to: '/curriculo' },
];

/**
 * Header único do site. Antes cada página redeclarava o seu (e a home não tinha
 * nenhum), então navegar entre seções só era possível pelo rodapé.
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1e1e1e]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-16 lg:px-24 py-4 md:py-5">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="text-white text-lg md:text-xl font-black tracking-tight hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer flex-shrink-0"
          >
            LUIZ AMBONI
            <span className="hidden md:inline text-[#404040] font-mono text-[11px] font-normal ml-3 tracking-normal">
              dev full-stack
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-mono transition-colors duration-300 cursor-pointer ${
                  pathname === item.to ? 'text-[#c8a96e]' : 'text-[#808080] hover:text-[#c8a96e]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={CONTACT_INFO.WHATSAPP_MSG}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-sm font-bold text-[#0f0f0f] hover:scale-105 transition-transform duration-300 whitespace-nowrap cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}
            >
              Falar comigo
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#232323] text-[#c8a96e] cursor-pointer"
          >
            <i className={open ? 'ri-close-line text-xl' : 'ri-menu-line text-xl'} />
          </button>
        </div>

        {open && (
          <nav className="md:hidden mt-4 pb-2 flex flex-col gap-1 border-t border-[#1e1e1e] pt-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`py-3 text-sm font-mono cursor-pointer ${
                  pathname === item.to ? 'text-[#c8a96e]' : 'text-[#909090]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={CONTACT_INFO.WHATSAPP_MSG}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 py-3 text-center rounded-lg text-sm font-bold text-[#0f0f0f] cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}
            >
              Falar comigo
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
