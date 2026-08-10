import { type ReactNode } from 'react';
import Footer from '../pages/home/components/Footer';
import SiteHeader from './SiteHeader';
import WhatsAppButton from './WhatsAppButton';

interface DefaultLayoutProps {
  children: ReactNode;
}

/** Casca das páginas de conteúdo (hoje, a política de privacidade). */
export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="relative bg-[#0a0a0a] min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-grow">{children}</main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
