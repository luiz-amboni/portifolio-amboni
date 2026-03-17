import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../pages/home/components/Footer';
import WhatsAppButton from './WhatsAppButton';

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="relative bg-[#0a0a0a] min-h-screen flex flex-col">
      {/* Header Unificado */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#1e1e1e]">
        <div className="max-w-[1600px] mx-auto px-5 md:px-16 lg:px-24 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-white text-2xl font-black hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer">
              LUIZ AMBONI
            </Link>
            <Link
              to="/"
              className="text-[#909090] text-sm hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer flex items-center gap-2"
            >
              <i className="ri-arrow-left-line"></i>
              Voltar para Home
            </Link>
          </div>
        </div>
      </header>

      {/* Conteúdo da Página */}
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}