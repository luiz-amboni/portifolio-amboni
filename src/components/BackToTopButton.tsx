import { useEffect, useState } from 'react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Voltar ao topo"
      className="fixed z-50 cursor-pointer whitespace-nowrap"
      style={{
        bottom: '90px',
        right: '24px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: hovered
          ? 'linear-gradient(135deg, #c8a96e, #b8945a)'
          : 'rgba(20,20,20,0.92)',
        border: '1.5px solid rgba(200,169,110,0.45)',
        boxShadow: hovered
          ? '0 0 24px rgba(200,169,110,0.45), 0 4px 16px rgba(0,0,0,0.5)'
          : '0 4px 16px rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.85)',
        transition: 'opacity 0.35s ease, transform 0.35s ease, background 0.25s ease, box-shadow 0.25s ease',
        pointerEvents: visible ? 'auto' : 'none',
        backdropFilter: 'blur(8px)',
      }}
    >
      <i
        className="ri-arrow-up-line"
        style={{
          fontSize: '20px',
          color: hovered ? '#0f0f0f' : '#c8a96e',
          transition: 'color 0.25s ease',
        }}
      />
    </button>
  );
}
