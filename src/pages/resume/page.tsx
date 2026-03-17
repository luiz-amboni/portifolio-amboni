import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../../components/WhatsAppButton';

interface TimelineItem {
  company?: string;
  institution?: string;
  role?: string;
  degree?: string;
  period: string;
  location?: string;
  description?: string;
  summary?: string; // Adicionado para a versão de impressão
  tags?: string[];
  current?: boolean;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  icon: string;
}

interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

const experiences: TimelineItem[] = [
  {
    company: 'Autônomo',
    role: 'Web Designer & UX/UI Specialist',
    period: 'Jan de 2023 — Atual',
    location: 'Criciúma, SC — Remoto',
    current: true,
    description:
      'Criação de sites profissionais, portfólios digitais e landing pages de alta conversão para profissionais liberais, empreendedores e empresas. Atuação completa: briefing, UX Research, prototipagem no Figma, desenvolvimento e entrega final. Integração de IA para acelerar entregas e elevar a qualidade dos projetos.',
    summary: 'Sites, portfólios e landing pages de alta conversão. UX Research, Figma e IA generativa do briefing à entrega.',
    tags: ['Sites & Portfólios', 'Landing Pages', 'UX/UI', 'Figma', 'IA Generativa', 'Conversão'],
  },
  {
    company: 'Autônomo',
    role: 'Analista de E-commerce & Growth',
    period: 'Nov de 2024 — Atual',
    location: 'Criciúma, SC — Remoto',
    current: true,
    description:
      'Foco em performance, Growth e otimização de funis de conversão. Responsável pela gestão de catálogo, análise de métricas e aplicação de estratégias de Digital Marketing para impulsionar o faturamento. Melhoria contínua da Experiência do Usuário (UX) focada em CRO.',
    summary: 'Otimização de funis de conversão (CRO), gestão de catálogo, métricas e estratégias de Digital Marketing.',
    tags: ['E-commerce', 'CRO', 'Growth', 'Digital Marketing', 'UX', 'Análise de Métricas'],
  },
  {
    company: 'Topedindo',
    role: 'Product Designer & UX/UI',
    period: 'Set de 2023 — Mar de 2025',
    location: 'Criciúma, SC',
    description:
      'Atuação em todo o ciclo de design de produto, desde a descoberta até a entrega técnica. Criação de interfaces, fluxos de usuário e protótipos de alta fidelidade. Colaboração com times de marketing para integração de campanhas no fluxo do produto.',
    summary: 'Ciclo completo de design de produto: UX Research, interfaces e protótipos de alta fidelidade no Figma.',
    tags: ['Product Design', 'UX/UI', 'Figma', 'Prototipagem', 'Marketing'],
  },
  {
    company: 'DSG Technology',
    role: 'Product Design Trainee',
    period: 'Jul de 2023 — Set de 2023',
    location: 'Criciúma, SC',
    description:
      'Apoio em pesquisas de usuário e prototipagem rápida em ambiente ágil.',
    summary: 'Pesquisas de usuário e prototipagem rápida em ambiente ágil.',
    tags: ['UX Research', 'Prototipagem', 'Metodologia Ágil'],
  },
  {
    company: 'ATUALIZA SISTEMAS',
    role: 'Desenvolvedor Full Stack',
    period: 'Abr de 2023 — Mai de 2023',
    location: 'Criciúma, SC',
    description:
      'Desenvolvimento full stack utilizando TypeScript, Java, Node.js e PostgreSQL.',
    summary: 'Desenvolvimento full stack com TypeScript, Java, Node.js e PostgreSQL.',
    tags: ['TypeScript', 'Java', 'Node.js', 'PostgreSQL', 'Full Stack'],
  },
  {
    company: 'Betha Sistemas',
    role: 'Desenvolvedor',
    period: 'Set de 2021 — Mai de 2022',
    location: 'Criciúma, SC',
    description:
      'Desenvolvimento de interfaces e integrações via API REST, HTML, CSS e JavaScript.',
    summary: 'Interfaces e integrações via API REST utilizando HTML, CSS e JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API REST', 'Integrações'],
  },
  {
    company: 'Softplan',
    role: 'Analista de Serviços TI',
    period: 'Out de 2020 — Set de 2021',
    location: 'Florianópolis, SC',
    description:
      'Monitoramento de integrações e rotinas de sistema via SQL Server e Oracle.',
    summary: 'Monitoramento de integrações e rotinas de sistema via SQL Server e Oracle.',
    tags: ['SQL Server', 'Oracle', 'Monitoramento', 'Integrações'],
  },
];

const education: TimelineItem[] = [
  {
    institution: 'CESUSC — Complexo de Ensino Superior de Santa Catarina',
    degree: 'Análise e Desenvolvimento de Sistemas (ADS)',
    period: '2019 — 2022',
    location: 'Florianópolis, SC',
    description:
      'Graduação em Análise e Desenvolvimento de Sistemas com foco em desenvolvimento de software, banco de dados, engenharia de software e desenvolvimento web.',
    tags: ['Desenvolvimento Web', 'Banco de Dados', 'Engenharia de Software'],
  },
];

const certifications: Certification[] = [
  {
    name: 'Imersão Dev com Google Gemini (10ª Edição)',
    issuer: 'Alura',
    year: '2025',
    icon: 'ri-google-line',
  },
  {
    name: 'IA: Produtividade e Carreira',
    issuer: 'Escola Conquer',
    year: '2024',
    icon: 'ri-robot-2-line',
  },
  {
    name: 'UX & Design Thinking: UX nos Negócios',
    issuer: 'Udemy',
    year: '2023',
    icon: 'ri-lightbulb-line',
  },
  {
    name: 'Formação Completa Python',
    issuer: 'Alura',
    year: '2021',
    icon: 'ri-code-s-slash-line',
  },
  {
    name: 'JavaScript: Interfaces e Herança',
    issuer: 'Alura',
    year: '2021',
    icon: 'ri-javascript-line',
  },
  {
    name: 'Orientação a Objetos e TDD',
    issuer: 'Alura',
    year: '2021',
    icon: 'ri-settings-3-line',
  },
];

const skillGroups: SkillGroup[] = [
  {
    category: 'Sites & Portfólios',
    icon: 'ri-window-line',
    skills: ['Sites Profissionais', 'Portfólios Digitais', 'Landing Pages', 'React', 'HTML/CSS', 'TypeScript', 'Performance Web'],
  },
  {
    category: 'UX/UI Design',
    icon: 'ri-layout-4-line',
    skills: ['Figma', 'UX Research', 'Prototipagem', 'Design Thinking', 'UI Design', 'Design Systems', 'Wireframing'],
  },
  {
    category: 'Inteligência Artificial',
    icon: 'ri-robot-2-line',
    skills: ['Google Gemini', 'ChatGPT', 'Engenharia de Prompt', 'Automação de Processos', 'IA Generativa', 'Agentes de IA'],
  },
  {
    category: 'Desenvolvimento',
    icon: 'ri-code-s-slash-line',
    skills: ['JavaScript', 'TypeScript', 'Node.js', 'Python', 'Java', 'SQL', 'API REST'],
  },
];

const languages = [
  { lang: 'Português', level: 'Nativo', pct: 100 },
  { lang: 'Inglês', level: 'Intermediário (leitura técnica avançada)', pct: 65 },
];

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c8a96e]/8 border border-[#c8a96e]/20 mb-10">
      <span className="font-mono text-xs text-[#c8a96e] tracking-widest">{label}</span>
    </div>
  );
}

function TimelineCard({ item, type }: { item: TimelineItem; type: 'experience' | 'education' }) {
  const title = type === 'experience' ? item.company : item.institution;
  const subtitle = type === 'experience' ? item.role : item.degree;

  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {/* Linha vertical */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-[#1e1e1e] group-last:hidden"></div>
      {/* Ponto */}
      <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full border-2 border-[#c8a96e] bg-[#0f0f0f]">
        {item.current && (
          <span className="absolute inset-[-3px] rounded-full border border-[#c8a96e]/40 animate-ping"></span>
        )}
      </div>

      <div className="bg-[#141414] border border-[#1e1e1e] rounded-2xl p-6 md:p-8 hover:border-[#c8a96e]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,169,110,0.06)]">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-white font-bold text-lg md:text-xl leading-tight">{title}</h3>
            <p className="text-[#c8a96e] text-sm font-mono mt-1">{subtitle}</p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
            <span className="text-[#505050] text-xs font-mono bg-[#1a1a1a] px-3 py-1 rounded-full whitespace-nowrap">
              {item.period}
            </span>
            {item.current && (
              <span className="text-[10px] font-mono text-[#c8a96e] bg-[#c8a96e]/10 px-2 py-0.5 rounded-full">
                ● Atual
              </span>
            )}
          </div>
        </div>

        {item.location && (
          <div className="flex items-center gap-1.5 mb-4">
            <i className="ri-map-pin-line text-[#404040] text-sm"></i>
            <span className="text-[#404040] text-xs font-mono">{item.location}</span>
          </div>
        )}

        {item.description && (
          <p className="text-[#707070] text-sm leading-relaxed mb-5">{item.description}</p>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-[11px] font-mono border border-[#252525] text-[#606060] rounded-full hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResumePage() {
  const [isVisible, setIsVisible] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-outer relative bg-[#0a0a0a] min-h-screen" ref={printRef}>
      {/* Print styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        @media print {
          @page {
            size: A4 portrait;
            margin: 10mm 10mm;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          html, body, #root {
            margin: 0 !important;
            padding: 0 !important;
            min-height: 0 !important;
            height: auto !important;
            background: white !important;
          }

          .resume-outer {
            min-height: 0 !important;
            height: auto !important;
            background: white !important;
          }

          .no-print,
          .print-hidden {
            display: none !important;
          }

          .print-doc {
            display: block !important;
          }
        }

        .print-doc {
          display: none;
        }
      `}</style>

      {/* ===================== VERSÃO IMPRESSÃO (PDF) ===================== */}
      <div className="print-doc" style={{
        fontFamily: "'Inter', sans-serif",
        background: 'white',
        color: '#1a1a1a',
        width: '100%',
      }}>

        {/* Cabeçalho */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
          padding: '24px 24px',
          color: 'white',
          marginBottom: '24px',
          borderRadius: '6px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#c8a96e', fontWeight: 700, marginBottom: '6px', textTransform: 'uppercase' }}>
                Currículo Profissional
              </div>
              <div style={{ fontSize: '28px', fontWeight: 900, lineHeight: 1.1, color: 'white', letterSpacing: '-0.5px', marginBottom: '4px' }}>
                LUIZ OTÁVIO AMBONI
              </div>
              <div style={{ fontSize: '12px', color: '#c8a96e', marginTop: '2px', fontWeight: 500 }}>
                Web Designer · UX/UI Specialist · AI-Powered Builder
              </div>
              <div style={{ fontSize: '10px', color: '#ccc', marginTop: '8px', lineHeight: 1.4, maxWidth: '400px' }}>
                Criação de sites, portfólios e landing pages de alta conversão. Design estratégico + IA para profissionais e empresas.
              </div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '10px', color: '#ddd', lineHeight: 1.6 }}>
              <div>Criciúma, SC — Remoto/Híbrido</div>
              <div>luiz.amboniii@gmail.com</div>
              <div>(48) 99681-5062</div>
              <div>linkedin.com/in/luiz-otavio-a-892a0a122</div>
            </div>
          </div>
        </div>

        {/* Corpo: duas colunas */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>

          {/* Coluna esquerda — Experiência */}
          <div style={{ flex: '1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>
              <div style={{ width: '4px', height: '14px', background: '#c8a96e', borderRadius: '2px' }}></div>
              <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#1a1a1a' }}>Experiência Profissional</div>
            </div>

            {experiences.map((exp, i, arr) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: i < arr.length - 1 ? '14px' : 0, paddingBottom: i < arr.length - 1 ? '14px' : 0, borderBottom: i < arr.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2px', flexShrink: 0 }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: exp.current ? '#c8a96e' : '#ddd', border: `2px solid ${exp.current ? '#c8a96e' : '#ccc'}`, flexShrink: 0 }}></div>
                  {i < arr.length - 1 && <div style={{ width: '1px', flex: 1, background: '#eee', marginTop: '4px', minHeight: '10px' }}></div>}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '2px' }}>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2 }}>{exp.role}</div>
                      <div style={{ fontSize: '11px', color: '#666', marginTop: '1px', fontWeight: 500 }}>{exp.company}</div>
                    </div>
                    <span style={{ fontSize: '9px', color: '#c8a96e', fontWeight: 700, background: '#fcf6e8', padding: '2px 6px', borderRadius: '4px', whiteSpace: 'nowrap', flexShrink: 0 }}>{exp.period}</span>
                  </div>
                  <p style={{ fontSize: '10px', color: '#555', margin: '4px 0 0', lineHeight: 1.5 }}>{exp.summary}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coluna direita */}
          <div style={{ width: '35%', flexShrink: 0 }}>

            {/* Formação */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>
                <div style={{ width: '4px', height: '14px', background: '#c8a96e', borderRadius: '2px' }}></div>
                <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#1a1a1a' }}>Formação</div>
              </div>
              <div style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: '6px', padding: '10px 12px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a', marginBottom: '2px', lineHeight: 1.3 }}>{education[0].degree}</div>
                <div style={{ fontSize: '10px', color: '#c8a96e', fontWeight: 600, marginBottom: '2px' }}>{education[0].institution}</div>
                <div style={{ fontSize: '9px', color: '#888' }}>{education[0].location} · {education[0].period}</div>
              </div>
            </div>

            {/* Competências */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>
                <div style={{ width: '4px', height: '14px', background: '#c8a96e', borderRadius: '2px' }}></div>
                <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#1a1a1a' }}>Competências</div>
              </div>
              {skillGroups.map((group, i) => (
                <div key={i} style={{ marginBottom: i < skillGroups.length - 1 ? '10px' : 0 }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#444', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>{group.category}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {group.skills.slice(0, 4).map((skill, j) => ( // Limita a 4 skills para a versão impressa
                      <span key={j} style={{ fontSize: '9px', padding: '2px 6px', background: '#f5f5f5', color: '#555', borderRadius: '4px', border: '1px solid #e0e0e0' }}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certificações */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>
                <div style={{ width: '4px', height: '14px', background: '#c8a96e', borderRadius: '2px' }}></div>
                <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#1a1a1a' }}>Certificações</div>
              </div>
              {certifications.slice(0, 5).map((cert, i, arr) => ( // Limita a 5 certificações para a versão impressa
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0', borderBottom: i < arr.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', lineHeight: 1.3 }}>{cert.name}</div>
                    <div style={{ fontSize: '9px', color: '#888' }}>{cert.issuer}</div>
                  </div>
                  <span style={{ fontSize: '9px', color: '#c8a96e', fontWeight: 700, marginLeft: '6px', whiteSpace: 'nowrap' }}>{cert.year}</span>
                </div>
              ))}
            </div>

            {/* Idiomas */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>
                <div style={{ width: '4px', height: '14px', background: '#c8a96e', borderRadius: '2px' }}></div>
                <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#1a1a1a' }}>Idiomas</div>
              </div>
              {languages.map((item, i) => (
                <div key={i} style={{ marginBottom: i === 0 ? '8px' : 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>{item.lang}</span>
                    <span style={{ fontSize: '9px', color: '#666' }}>{item.level}</span>
                  </div>
                  <div style={{ height: '3px', background: '#eee', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${item.pct}%`, background: 'linear-gradient(90deg, #c8a96e, #b8945a)', borderRadius: '2px' }}></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Rodapé */}
        <div style={{ marginTop: '20px', paddingTop: '10px', borderTop: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '9px', color: '#ccc' }}>© {new Date().getFullYear()} Luiz Otávio Amboni</span>
          <span style={{ fontSize: '9px', color: '#c8a96e' }}>luiz.amboniii@gmail.com · (48) 99681-5062</span>
        </div>

      </div>
      {/* ===================== FIM VERSÃO IMPRESSÃO ===================== */}

      {/* Header / Hero */}
      <header
        className="print-hidden relative px-5 md:px-16 lg:px-24 pt-16 pb-16 md:pt-24 md:pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 100%)' }}
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-8 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c8a96e 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c8a96e]/30 to-transparent"></div>

        <div className="max-w-[900px] mx-auto">
          {/* Voltar */}
          <Link
            to="/"
            className="no-print inline-flex items-center gap-2 text-[#505050] hover:text-[#c8a96e] transition-colors duration-300 mb-10 cursor-pointer font-mono text-sm"
          >
            <i className="ri-arrow-left-line"></i>
            Voltar ao Portfólio
          </Link>

          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a96e]/40 bg-[#c8a96e]/8 mb-6">
              <i className="ri-file-user-line text-[#c8a96e] text-sm"></i>
              <span className="font-mono text-[11px] text-[#c8a96e] tracking-wider">CURRÍCULO PROFISSIONAL</span>
            </div>

            <h1
              className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tight mb-4"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #d4b896 60%, #c8a96e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              LUIZ OTÁVIO<br />AMBONI
            </h1>

            <p className="text-[#c8a96e] text-base md:text-lg lg:text-xl font-mono mb-6">
              Web Designer · UX/UI Specialist · AI-Powered Builder
            </p>

            {/* Info rápida */}
            <div className="flex flex-wrap gap-4 md:gap-8 mb-8 text-sm text-[#606060] font-mono">
              <span className="flex items-center gap-2">
                <i className="ri-map-pin-line text-[#c8a96e]"></i>
                Criciúma, SC — Brasil
              </span>
              <a href="mailto:luiz.amboniii@gmail.com" className="flex items-center gap-2 hover:text-[#c8a96e] transition-colors cursor-pointer">
                <i className="ri-mail-line text-[#c8a96e]"></i>
                luiz.amboniii@gmail.com
              </a>
              <a href="https://wa.me/5548996815062" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#c8a96e] transition-colors cursor-pointer">
                <i className="ri-whatsapp-line text-[#c8a96e]"></i>
                (48) 99681-5062
              </a>
              <a href="https://www.linkedin.com/in/luiz-otavio-a-892a0a122/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#c8a96e] transition-colors cursor-pointer">
                <i className="ri-linkedin-box-line text-[#c8a96e]"></i>
                LinkedIn
              </a>
            </div>

            {/* Botão imprimir */}
            <button
              onClick={handlePrint}
              className="no-print inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-[#0f0f0f] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg text-sm"
              style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}
            >
              <i className="ri-download-2-line text-base"></i>
              Baixar / Imprimir PDF
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="print-hidden px-5 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-[900px] mx-auto space-y-20 md:space-y-28">

          {/* Resumo Profissional */}
          <section>
            <SectionLabel label="// RESUMO PROFISSIONAL" />
            <div className="bg-[#141414] border border-[#1e1e1e] rounded-2xl p-7 md:p-10 hover:border-[#c8a96e]/20 transition-all duration-300">
              <p className="text-[#909090] text-base md:text-lg leading-relaxed mb-5">
                Web Designer e UX/UI Specialist com foco na criação de <strong className="text-[#c0c0c0]">sites profissionais, portfólios digitais e landing pages</strong> de alta conversão. Combino design estratégico, experiência do usuário e inteligência artificial para entregar projetos que geram resultados reais.
              </p>
              <p className="text-[#707070] text-sm md:text-base leading-relaxed mb-5">
                Atendo profissionais liberais, empreendedores e empresas que querem se destacar online — do briefing à entrega final. Com background técnico em <strong className="text-[#909090]">Análise e Desenvolvimento de Sistemas (ADS)</strong> e experiência em empresas como <strong className="text-[#909090]">Softplan e Betha Sistemas</strong>, entrego projetos com qualidade técnica e visão de negócio.
              </p>
              <p className="text-[#606060] text-sm leading-relaxed">
                Disponível para projetos <strong className="text-[#808080]">remotos ou presenciais</strong> em Criciúma, SC e região. Apaixonado por tecnologia, design e pelo impacto que uma presença digital bem construída pode ter na vida das pessoas.
              </p>
            </div>
          </section>

          {/* Experiências */}
          <section>
            <SectionLabel label="// EXPERIÊNCIA PROFISSIONAL" />
            <div>
              {experiences.map((exp, i) => (
                <TimelineCard key={i} item={exp} type="experience" />
              ))}
            </div>
          </section>

          {/* Formação */}
          <section>
            <SectionLabel label="// FORMAÇÃO ACADÊMICA" />
            <div>
              {education.map((edu, i) => (
                <TimelineCard key={i} item={edu} type="education" />
              ))}
            </div>
          </section>

          {/* Cursos e Certificações */}
          <section>
            <SectionLabel label="// CURSOS & CERTIFICAÇÕES" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 md:p-6 flex items-start gap-4 hover:border-[#c8a96e]/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(200,169,110,0.05)]"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#c8a96e]/10 border border-[#c8a96e]/20 flex-shrink-0">
                    <i className={`${cert.icon} text-[#c8a96e] text-lg`}></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white text-sm font-semibold leading-snug mb-1">{cert.name}</h4>
                    <p className="text-[#606060] text-xs font-mono">{cert.issuer}</p>
                    <span className="inline-block mt-2 text-[10px] font-mono text-[#c8a96e] bg-[#c8a96e]/10 px-2 py-0.5 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Competências */}
          <section>
            <SectionLabel label="// COMPETÊNCIAS & HABILIDADES" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {skillGroups.map((group, i) => (
                <div
                  key={i}
                  className="bg-[#141414] border border-[#1e1e1e] rounded-2xl p-6 md:p-8 hover:border-[#c8a96e]/25 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className={`${group.icon} text-[#c8a96e] text-xl`}></i>
                    </div>
                    <h3 className="text-white font-bold text-sm tracking-wide uppercase font-mono">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 text-xs font-mono border border-[#252525] text-[#707070] rounded-full hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Idiomas */}
          <section>
            <SectionLabel label="// IDIOMAS" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {languages.map((item, i) => (
                <div key={i} className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-6 hover:border-[#c8a96e]/25 transition-all duration-300">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold text-sm">{item.lang}</span>
                    <span className="text-[#c8a96e] text-xs font-mono">{item.level}</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#1e1e1e] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${item.pct}%`,
                        background: 'linear-gradient(90deg, #c8a96e, #b8945a)',
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-10 md:py-14 border-t border-[#1e1e1e]">
            <p className="text-[#404040] font-mono text-xs tracking-widest mb-4">// VAMOS TRABALHAR JUNTOS</p>
            <h2
              className="text-4xl md:text-5xl font-black mb-6"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #c8a96e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Pronto para o<br />próximo projeto?
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5548996815062"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-[#0f0f0f] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
                style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}
              >
                <i className="ri-whatsapp-line text-lg"></i>
                Falar no WhatsApp
              </a>
              <a
                href="mailto:luiz.amboniii@gmail.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#c8a96e]/40 text-[#c8a96e] font-bold rounded-xl hover:bg-[#c8a96e]/10 hover:border-[#c8a96e] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-mail-line text-lg"></i>
                Enviar E-mail
              </a>
            </div>
          </section>

        </div>
      </main>

      {/* Footer simples */}
      <footer className="print-hidden border-t border-[#1e1e1e] px-5 md:px-16 lg:px-24 py-8" style={{ background: '#141414' }}>
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#404040] text-xs font-mono">© {new Date().getFullYear()} Luiz Amboni. Todos os direitos reservados.</p>
          <Link to="/" className="text-[#505050] text-xs font-mono hover:text-[#c8a96e] transition-colors cursor-pointer">
            ← Voltar ao Portfólio
          </Link>
        </div>
      </footer>

      <div className="print-hidden">
        <WhatsAppButton />
      </div>
    </div>
  );
}
