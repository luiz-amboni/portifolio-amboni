import { useState } from 'react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const phone = '5548996815062';
  const message = encodeURIComponent('Olá! Vim pelo seu portfólio e gostaria de conversar.');
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 cursor-pointer group"
      aria-label="Fale pelo WhatsApp"
    >
      {/* Tooltip */}
      <span
        className={`whitespace-nowrap bg-[#1a1a1a] text-[#c8a96e] text-sm font-mono px-4 py-2 rounded-lg border border-[#2a2a2a] shadow-lg transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        Fale comigo no WhatsApp
      </span>

      {/* Botão */}
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping"></span>
        <div
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110"
          style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
        >
          <i className="ri-whatsapp-line text-white text-2xl"></i>
        </div>
      </div>
    </a>
  );
}
