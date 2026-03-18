import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../../constants';

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [phase, setPhase] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [glitch, setGlitch] = useState(false);
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const roles = [
    'Web & Portfolio Craftsman',
    'UX/UI Designer',
    'AI-Powered Builder',
    'Full Stack Developer'
  ];

  const greeting = 'Olá, eu sou';

  // Fases: 0=aguarda, 1=digita greeting, 2=revela nome, 3=revela resto
  useEffect(() => {
    const t0 = setTimeout(() => setPhase(1), 300);
    return () => clearTimeout(t0);
  }, []);

  // Efeito de digitação do greeting
  useEffect(() => {
    if (phase !== 1) return;
    let i = 0;
    setTypedText('');
    const type = () => {
      if (i <= greeting.length) {
        setTypedText(greeting.slice(0, i));
        i++;
        typingRef.current = setTimeout(type, 60);
      } else {
        setTimeout(() => setPhase(2), 200);
      }
    };
    typingRef.current = setTimeout(type, 60);
    return () => { if (typingRef.current) clearTimeout(typingRef.current); };
  }, [phase]);

  // Glitch no nome ao revelar
  useEffect(() => {
    if (phase !== 2) return;
    setGlitch(true);
    const t = setTimeout(() => {
      setGlitch(false);
      setTimeout(() => setPhase(3), 200);
    }, 600);
    return () => clearTimeout(t);
  }, [phase]);

  // Cursor piscando
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(interval);
  }, []);

  // Rotação de roles
  useEffect(() => {
    if (phase < 3) return;
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phase]);

  const visible = (delay = 0) => ({
    opacity: phase >= 3 ? 1 : 0,
    transform: phase >= 3 ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });

  return (
    <section className="relative min-h-screen px-5 md:px-16 lg:px-24 pt-28 pb-16 flex flex-col items-center justify-between overflow-hidden">

      {/* Fundo animado */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradiente dourado superior direito */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(200,169,110,0.12) 0%, transparent 65%)',
            animation: 'pulseGlow 6s ease-in-out infinite',
          }}
        />
        {/* Gradiente inferior esquerdo */}
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 70%)',
            animation: 'pulseGlow 8s ease-in-out infinite reverse',
          }}
        />
        {/* Linha diagonal decorativa */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #c8a96e 0px, #c8a96e 1px, transparent 1px, transparent 60px)',
          }}
        />
        {/* Partículas flutuantes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#c8a96e]"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${10 + i * 11}%`,
              top: `${15 + (i % 4) * 18}%`,
              opacity: 0.15 + (i % 3) * 0.08,
              animation: `floatParticle ${4 + i * 0.7}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1600px] mx-auto w-full flex-1">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-3xl space-y-6 md:space-y-8">

            {/* Badge — aparece junto com o greeting */}
            <div
              style={{
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1 ? 'translateY(0) scale(1)' : 'translateY(-16px) scale(0.9)',
                transition: 'opacity 0.7s ease 0ms, transform 0.7s ease 0ms',
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a96e]/40 bg-[#c8a96e]/8"
            >
              <span className="w-2 h-2 rounded-full bg-[#c8a96e] animate-pulse flex-shrink-0" />
              <span className="font-mono text-[10px] md:text-xs text-[#c8a96e] tracking-wider">
                WEB CRAFT · UX/UI · ARTIFICIAL INTELLIGENCE
              </span>
            </div>

            {/* Greeting digitado */}
            <div
              style={{
                opacity: phase >= 1 ? 1 : 0,
                transition: 'opacity 0.4s ease',
                minHeight: '28px',
              }}
            >
              <p className="font-mono text-sm md:text-base text-[#c8a96e]/70 tracking-widest">
                {typedText}
                <span
                  className="inline-block w-[2px] h-[1em] bg-[#c8a96e] ml-[2px] align-middle"
                  style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
                />
              </p>
            </div>

            {/* Nome com glitch */}
            <h1
              className={`font-black text-5xl sm:text-6xl md:text-8xl leading-[0.92] tracking-tight ${glitch ? 'hero-glitch' : ''}`}
              style={{
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                background: 'linear-gradient(135deg, #ffffff 0%, #d4b896 60%, #c8a96e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              LUIZ OTÁVIO<br />AMBONI
            </h1>

            {/* Role rotativo */}
            <div style={{ ...visible(0), minHeight: '40px' }}>
              <p className="text-xl md:text-3xl font-semibold text-[#c8a96e] role-fade">
                {roles[currentRole]}
              </p>
            </div>

            {/* Descrição */}
            <p
              className="text-[#909090] text-base md:text-lg leading-relaxed max-w-xl mx-auto px-2 md:px-0"
              style={visible(100)}
            >
              Crio sites, portfólios e experiências digitais que combinam UX/UI estratégico com inteligência artificial. Para profissionais e empresas que querem se destacar online.
            </p>

            {/* Botões */}
            <div
              className="flex flex-col sm:flex-row gap-3 justify-center"
              style={visible(200)}
            >
              <a
                href={CONTACT_INFO.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-bold text-[#0f0f0f] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
                style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}
              >
                Iniciar Projeto
              </a>
              <a
                href="#sobre"
                className="px-8 py-4 border border-[#c8a96e]/40 text-[#c8a96e] font-bold rounded-xl hover:bg-[#c8a96e]/10 hover:border-[#c8a96e] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Sobre Mim
              </a>
              <Link
                to="/curriculo"
                className="px-8 py-4 border border-[#2a2a2a] text-[#707070] font-bold rounded-xl hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
              >
                <i className="ri-file-user-line text-base" />
                Ver Currículo
              </Link>
            </div>

            {/* Stats */}
            <div
              className="flex gap-5 sm:gap-10 pt-6 border-t border-[#1e1e1e] justify-center"
              style={visible(350)}
            >
              {[
                { value: '6+', label: 'Anos de Experiência' },
                { value: '50+', label: 'Projetos Entregues' },
                { value: '100%', label: 'Satisfação' },
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div key={`sep-${i}`} className="w-px bg-[#1e1e1e]" />}
                  <div key={stat.label} className="stat-pop" style={{ animationDelay: `${i * 120}ms` }}>
                    <p className="text-3xl md:text-4xl font-black text-white">{stat.value}</p>
                    <p className="text-xs md:text-sm text-[#606060] mt-1">{stat.label}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="relative z-10 mt-10 md:mt-12"
        style={visible(500)}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[#c8a96e] text-xs font-mono tracking-widest">SCROLL</span>
          <i className="ri-arrow-down-line text-[#c8a96e] text-xl" />
        </div>
      </div>

      <style>{`
        .role-fade {
          animation: roleFade 0.4s ease-in;
        }
        @keyframes roleFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.12); opacity: 0.7; }
        }

        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33%       { transform: translateY(-14px) translateX(6px); }
          66%       { transform: translateY(8px) translateX(-4px); }
        }

        .hero-glitch {
          animation: glitchAnim 0.55s steps(2) forwards;
        }
        @keyframes glitchAnim {
          0%   { text-shadow: 3px 0 #c8a96e, -3px 0 #fff; clip-path: inset(0 0 80% 0); }
          20%  { text-shadow: -4px 0 #c8a96e, 4px 0 #fff; clip-path: inset(20% 0 60% 0); }
          40%  { text-shadow: 4px 0 #fff, -4px 0 #c8a96e; clip-path: inset(40% 0 40% 0); }
          60%  { text-shadow: -3px 0 #c8a96e, 3px 0 #fff; clip-path: inset(60% 0 20% 0); }
          80%  { text-shadow: 2px 0 #fff, -2px 0 #c8a96e; clip-path: inset(80% 0 0% 0); }
          100% { text-shadow: none; clip-path: inset(0 0 0 0); }
        }

        .stat-pop {
          animation: statPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        @keyframes statPop {
          from { opacity: 0; transform: scale(0.7) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </section>
  );
}
