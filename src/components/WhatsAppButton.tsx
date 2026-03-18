import { useState } from 'react';
import { CONTACT_INFO } from '../constants';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const message = encodeURIComponent('Olá! Vim pelo seu portfólio e gostaria de conversar.');
  // Garante que o link exista antes de montar a URL
  const url = `${CONTACT_INFO?.WHATSAPP_LINK}?text=${message}`;

  return (
    <div
      className="fixed bottom-8 right-8 z-50 flex items-center justify-end"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip — absolutamente posicionado, fora do <a> */}
      <span
        className={`absolute right-[72px] whitespace-nowrap bg-[#1a1a1a] text-[#c8a96e] text-sm font-mono px-4 py-2 rounded-lg border border-[#2a2a2a] shadow-lg transition-all duration-300 pointer-events-none ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Fale comigo no WhatsApp
      </span>

      {/* Botão — o <a> envolve APENAS o círculo */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale pelo WhatsApp"
        className="relative w-14 h-14 flex items-center justify-center cursor-pointer group"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none" />
        <div
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110"
          style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
        >
          <i className="ri-whatsapp-line text-white text-2xl" />
        </div>
      </a>
    </div>
  );
}
