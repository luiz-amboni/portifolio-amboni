import { useEffect, useState, useRef } from 'react';
import WhatsAppButton from '../../components/WhatsAppButton';
import { CONTACT_INFO } from '../../constants';
import { projects } from '../../data/projects';

interface TimelineItem {
  company?: string;
  institution?: string;
  role?: string;
  degree?: string;
  period: string;
  location?: string;
  description?: string;
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
    company: 'Autônomo — projetos próprios e para clientes',
    role: 'Desenvolvedor full-stack',
    period: 'Jan de 2023 — Atual',
    location: 'Criciúma, SC — Remoto',
    current: true,
    description:
      'Construo sistemas sob medida de ponta a ponta: banco de dados, API, interface, integrações e publicação. Nove sistemas em produção ou entregues — CRM com jornada automatizada por WhatsApp oficial, checkout próprio com PIX e reconciliação de pedidos, plataforma de gestão de atas de licitação com extração de PDF, e-commerce com painel administrativo próprio e um design system publicado no npm. Também respondo pela infraestrutura: Docker, servidor, banco, domínio e monitoramento.',
    tags: ['Node.js', 'React', 'TypeScript', 'PostgreSQL', 'Next.js', 'Docker', 'Integrações', 'IA aplicada'],
  },
  {
    company: 'iSafe (revenda Apple) — Criciúma/SC',
    role: 'Tecnologia, e-commerce e growth',
    period: 'Nov de 2024 — Atual',
    location: 'Criciúma, SC',
    current: true,
    description:
      'Atuação dentro da operação: catálogo, marketplaces, anúncios, funil de conversão e métricas. É desse lugar que nasceram os sistemas que hoje sustentam o pós-venda, o checkout e o controle de estoque entre contas do ERP — requisitos que não apareceriam num documento, só no balcão. Trabalhar do lado de quem usa o sistema é o que me faz saber o que a equipe precisa ver na tela.',
    tags: ['E-commerce', 'CRO', 'Growth', 'Marketplaces', 'Bling ERP', 'Métricas'],
  },
  {
    company: 'Topedindo',
    role: 'Product Designer & UX/UI',
    period: 'Set de 2023 — Mar de 2025',
    location: 'Criciúma, SC',
    description:
      'Ciclo completo de design de produto, da descoberta à entrega técnica: interfaces, fluxos de usuário e protótipos de alta fidelidade, em colaboração com marketing e desenvolvimento.',
    tags: ['Product Design', 'UX/UI', 'Figma', 'Prototipagem'],
  },
  {
    company: 'DSG Technology',
    role: 'Product Design Trainee',
    period: 'Jul de 2023 — Set de 2023',
    location: 'Criciúma, SC',
    description: 'Apoio em pesquisas de usuário e prototipagem rápida em ambiente ágil.',
    tags: ['UX Research', 'Prototipagem', 'Metodologia Ágil'],
  },
  {
    company: 'ATUALIZA SISTEMAS',
    role: 'Desenvolvedor Full Stack',
    period: 'Abr de 2023 — Mai de 2023',
    location: 'Criciúma, SC',
    description: 'Desenvolvimento full stack com TypeScript, Java, Node.js e PostgreSQL.',
    tags: ['TypeScript', 'Java', 'Node.js', 'PostgreSQL'],
  },
  {
    company: 'Betha Sistemas',
    role: 'Desenvolvedor',
    period: 'Set de 2021 — Mai de 2022',
    location: 'Criciúma, SC',
    description: 'Desenvolvimento de interfaces e integrações via API REST, HTML, CSS e JavaScript.',
    tags: ['JavaScript', 'API REST', 'HTML/CSS', 'Integrações'],
  },
  {
    company: 'Softplan',
    role: 'Analista de Serviços de TI',
    period: 'Out de 2020 — Set de 2021',
    location: 'Florianópolis, SC',
    description: 'Monitoramento de integrações e rotinas de sistema via SQL Server e Oracle.',
    tags: ['SQL Server', 'Oracle', 'Monitoramento', 'Integrações'],
  },
];

const education: TimelineItem[] = [
  {
    institution: 'CESUSC — Complexo de Ensino Superior de Santa Catarina',
    degree: 'Análise e Desenvolvimento de Sistemas',
    period: '2019 — 2022',
    location: 'Florianópolis, SC',
    description:
      'Graduação com foco em desenvolvimento de software, banco de dados, engenharia de software e desenvolvimento web.',
    tags: ['Desenvolvimento de Software', 'Banco de Dados', 'Engenharia de Software'],
  },
];

const certifications: Certification[] = [
  { name: 'Imersão Dev com Google Gemini (10ª Edição)', issuer: 'Alura', year: '2025', icon: 'ri-google-line' },
  { name: 'IA: Produtividade e Carreira', issuer: 'Escola Conquer', year: '2024', icon: 'ri-robot-2-line' },
  { name: 'UX & Design Thinking: UX nos Negócios', issuer: 'Udemy', year: '2023', icon: 'ri-lightbulb-line' },
  { name: 'Formação Completa Python', issuer: 'Alura', year: '2021', icon: 'ri-code-s-slash-line' },
  { name: 'JavaScript: Interfaces e Herança', issuer: 'Alura', year: '2021', icon: 'ri-javascript-line' },
  { name: 'Orientação a Objetos e TDD', issuer: 'Alura', year: '2021', icon: 'ri-settings-3-line' },
];

const skillGroups: SkillGroup[] = [
  {
    category: 'Backend & dados',
    icon: 'ri-server-line',
    skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'Prisma', 'Redis', 'SQL', 'API REST', 'Zod'],
  },
  {
    category: 'Front-end',
    icon: 'ri-reactjs-line',
    skills: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind', 'React Query', 'Design systems', 'Acessibilidade WCAG'],
  },
  {
    category: 'Integrações',
    icon: 'ri-links-line',
    skills: ['WhatsApp Cloud API (Meta)', 'Bling ERP', 'Shopify Admin/Storefront', 'Mercado Pago', 'PayPal', 'Frenet', 'Webhooks', 'n8n'],
  },
  {
    category: 'Infra & práticas',
    icon: 'ri-box-3-line',
    skills: ['Docker', 'Vercel', 'Migrations versionadas', 'Testes automatizados', 'Log estruturado', 'Arquitetura em camadas', 'Git'],
  },
];

const languages = [
  { lang: 'Português', level: 'Nativo', pct: 100 },
  { lang: 'Inglês', level: 'Intermediário (leitura técnica avançada)', pct: 65 },
];

/** Projetos que entram no currículo, na ordem em que contam a história. */
const RESUME_PROJECTS = [
  'isafe-crm',
  'isafe-checkout',
  'vear-b2g',
  'amboni-ui',
  'sheets-griptape',
  'horus',
]
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const SUMMARY = {
  lead:
    'Desenvolvedor full-stack. Construo sistemas sob medida de ponta a ponta — banco de dados, API, interface, integração e publicação.',
  body:
    'Nove sistemas em produção ou entregues: CRM com jornada automatizada pelo WhatsApp oficial da Meta, checkout próprio com PIX e reconciliação de pedidos, plataforma de atas de licitação com extração de PDF, e-commerce com painel administrativo próprio e um design system publicado no npm em que contraste ilegível quebra o build.',
  close:
    'Formado em Análise e Desenvolvimento de Sistemas, com passagem por Softplan e Betha Sistemas. O diferencial vem de eu já ter estado do lado de quem usa o sistema — vendendo, atendendo, cuidando de anúncio e marketplace: sei o que uma equipe precisa ver na tela porque já precisei ver. Levo a sério teste onde a regra de negócio mora, migration versionada, credencial fora do código e resposta honesta sobre prazo.',
};

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
      <div className="absolute left-0 top-2 bottom-0 w-px bg-[#1e1e1e] group-last:hidden"></div>
      <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full border-2 border-[#c8a96e] bg-[#0f0f0f]">
        {item.current && (
          <span className="absolute inset-[-3px] rounded-full border border-[#c8a96e]/40 animate-ping"></span>
        )}
      </div>

      <div className="bg-[#141414] border border-[#1e1e1e] rounded-2xl p-6 md:p-8 hover:border-[#c8a96e]/30 transition-all duration-300">
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
          <p className="text-[#808080] text-sm leading-relaxed mb-5">{item.description}</p>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] font-mono border border-[#252525] text-[#606060] rounded-full"
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
    const t = setTimeout(() => setIsVisible(true), 100);
    window.scrollTo(0, 0);
    return () => clearTimeout(t);
  }, []);

  const handlePrint = () => window.print();

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen print-page-root" ref={printRef}>

      {/* CSS de impressão */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        @media print {
          @page { size: A4 portrait; margin: 10mm 10mm; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          html, body, #root { width: 100% !important; height: auto !important; background: white !important; margin: 0 !important; padding: 0 !important; }
          .no-print, header, footer, .whatsapp-button { display: none !important; }
          .print-hidden { display: none !important; }
          .print-doc { display: block !important; }
          .print-page-root { background: white !important; min-height: 0 !important; }
        }
        .print-doc { display: none; }
      `}</style>

      {/* ===================== VERSÃO IMPRESSÃO (A4) ===================== */}
      <div className="print-doc" style={{ fontFamily: "'Space Grotesk', sans-serif", background: 'white', color: '#1a1a1a', width: '100%' }}>

        {/* Cabeçalho */}
        <div style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)', padding: '20px 24px 16px', color: 'white', marginBottom: '18px', borderRadius: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '7px', letterSpacing: '3px', color: '#c8a96e', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase' }}>
                Currículo Profissional
              </div>
              <h1 style={{ fontSize: '22px', fontWeight: 900, margin: 0, lineHeight: 1, color: 'white', letterSpacing: '-0.5px' }}>
                LUIZ OTÁVIO AMBONI
              </h1>
              <p style={{ fontSize: '10px', color: '#c8a96e', marginTop: '5px', fontWeight: 500, letterSpacing: '0.3px' }}>
                Desenvolvedor full-stack · Sistemas sob medida, do ERP ao WhatsApp do cliente
              </p>
            </div>
            <div style={{ textAlign: 'right', fontSize: '8.5px', color: '#aaa', lineHeight: 1.9 }}>
              <div>📍 Criciúma, SC — Remoto ou híbrido</div>
              <div>✉ {CONTACT_INFO.EMAIL}</div>
              <div>📱 {CONTACT_INFO.PHONE}</div>
              <div>🔗 linkedin.com/in/luizamboni</div>
              <div>🌐 amboni.info · github.com/luiz-amboni</div>
            </div>
          </div>
          <div style={{ height: '2px', background: 'linear-gradient(90deg, #c8a96e, #b8945a, #c8a96e)', marginTop: '14px', borderRadius: '2px' }}></div>
        </div>

        {/* Resumo */}
        <div style={{ marginBottom: '14px', padding: '0 2px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <div style={{ width: '3px', height: '12px', background: '#c8a96e', borderRadius: '2px' }}></div>
            <h2 style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#c8a96e', margin: 0 }}>Resumo Profissional</h2>
          </div>
          <p style={{ fontSize: '8.5px', lineHeight: 1.6, color: '#444', margin: 0 }}>
            <strong style={{ color: '#1a1a1a' }}>{SUMMARY.lead}</strong> {SUMMARY.body}
          </p>
        </div>

        {/* Duas colunas */}
        <div style={{ display: 'flex', gap: '22px', alignItems: 'flex-start' }}>

          {/* Esquerda */}
          <div style={{ flex: '1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <div style={{ width: '3px', height: '12px', background: '#c8a96e', borderRadius: '2px' }}></div>
              <h2 style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#c8a96e', margin: 0 }}>Experiência Profissional</h2>
            </div>

            {experiences.map((exp, i) => (
              <div key={exp.company} style={{ display: 'flex', gap: '8px', marginBottom: '8px', paddingBottom: '8px', borderBottom: i < experiences.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '3px' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: exp.current ? '#c8a96e' : '#ddd', border: '2px solid', borderColor: exp.current ? '#c8a96e' : '#ccc', flexShrink: 0 }}></div>
                  {i < experiences.length - 1 && <div style={{ width: '1px', flex: 1, background: '#eee', marginTop: '3px' }}></div>}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2px' }}>
                    <div>
                      <span style={{ fontSize: '9px', fontWeight: 700, color: '#1a1a1a' }}>{exp.role}</span>
                      <span style={{ fontSize: '8px', color: '#888', marginLeft: '5px' }}>· {exp.company}</span>
                    </div>
                    <span style={{ fontSize: '7.5px', color: '#c8a96e', fontWeight: 600, whiteSpace: 'nowrap', marginLeft: '6px', background: '#fdf8f0', padding: '1px 5px', borderRadius: '3px' }}>{exp.period}</span>
                  </div>
                  <p style={{ fontSize: '8px', color: '#666', margin: '2px 0 3px', lineHeight: 1.5 }}>{exp.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
                    {exp.tags?.slice(0, 6).map((tag) => (
                      <span key={tag} style={{ fontSize: '7px', padding: '1px 5px', background: '#f5f5f5', color: '#666', borderRadius: '3px', border: '1px solid #e8e8e8' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Projetos */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px', marginBottom: '8px' }}>
              <div style={{ width: '3px', height: '12px', background: '#c8a96e', borderRadius: '2px' }}></div>
              <h2 style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#c8a96e', margin: 0 }}>Projetos em Produção</h2>
            </div>
            {RESUME_PROJECTS.map((p) => (
              <div key={p.slug} style={{ marginBottom: '6px', paddingBottom: '6px', borderBottom: '1px solid #f4f4f4' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                  <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#1a1a1a' }}>{p.name}</span>
                  <span style={{ fontSize: '7px', color: '#999', whiteSpace: 'nowrap' }}>{p.stack.slice(0, 4).join(' · ')}</span>
                </div>
                <p style={{ fontSize: '7.5px', color: '#666', margin: '2px 0 0', lineHeight: 1.45 }}>{p.tagline}</p>
              </div>
            ))}
          </div>

          {/* Direita */}
          <div style={{ width: '34%', flexShrink: 0 }}>
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '7px' }}>
                <div style={{ width: '3px', height: '12px', background: '#c8a96e', borderRadius: '2px' }}></div>
                <h2 style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#c8a96e', margin: 0 }}>Formação</h2>
              </div>
              <div style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#1a1a1a', marginBottom: '2px' }}>Análise e Desenvolvimento de Sistemas</div>
                <div style={{ fontSize: '8px', color: '#c8a96e', fontWeight: 600, marginBottom: '2px' }}>CESUSC — Florianópolis, SC</div>
                <div style={{ fontSize: '7.5px', color: '#888' }}>2019 — 2022</div>
              </div>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '7px' }}>
                <div style={{ width: '3px', height: '12px', background: '#c8a96e', borderRadius: '2px' }}></div>
                <h2 style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#c8a96e', margin: 0 }}>Competências</h2>
              </div>
              {skillGroups.map((group) => (
                <div key={group.category} style={{ marginBottom: '8px' }}>
                  <div style={{ fontSize: '7.5px', fontWeight: 700, color: '#555', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{group.category}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
                    {group.skills.map((skill) => (
                      <span key={skill} style={{ fontSize: '7.5px', padding: '1px 6px', background: '#fafafa', color: '#555', borderRadius: '3px', border: '1px solid #e0e0e0' }}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '7px' }}>
                <div style={{ width: '3px', height: '12px', background: '#c8a96e', borderRadius: '2px' }}></div>
                <h2 style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#c8a96e', margin: 0 }}>Certificações</h2>
              </div>
              {certifications.map((cert, i) => (
                <div key={cert.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '4px 0', borderBottom: i < certifications.length - 1 ? '1px solid #eee' : 'none' }}>
                  <div>
                    <div style={{ fontSize: '8px', fontWeight: 600, color: '#333', lineHeight: 1.4 }}>{cert.name}</div>
                    <div style={{ fontSize: '7.5px', color: '#999', marginTop: '1px' }}>{cert.issuer}</div>
                  </div>
                  <span style={{ fontSize: '7.5px', color: '#c8a96e', fontWeight: 700, marginLeft: '5px', whiteSpace: 'nowrap' }}>{cert.year}</span>
                </div>
              ))}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '7px' }}>
                <div style={{ width: '3px', height: '12px', background: '#c8a96e', borderRadius: '2px' }}></div>
                <h2 style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#c8a96e', margin: 0 }}>Idiomas</h2>
              </div>
              {languages.map((item) => (
                <div key={item.lang} style={{ marginBottom: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <span style={{ fontSize: '8.5px', fontWeight: 600, color: '#333' }}>{item.lang}</span>
                    <span style={{ fontSize: '7.5px', color: '#888' }}>{item.level.split(' (')[0]}</span>
                  </div>
                  <div style={{ height: '3px', background: '#eee', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${item.pct}%`, background: 'linear-gradient(90deg, #c8a96e, #b8945a)', borderRadius: '2px' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ===================== FIM VERSÃO IMPRESSÃO ===================== */}

      {/* Header / Hero */}
      <header
        className="print-hidden relative px-5 md:px-16 lg:px-24 pt-16 pb-16 md:pt-24 md:pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 100%)' }}
      >
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.08] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c8a96e 0%, transparent 70%)' }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c8a96e]/30 to-transparent"></div>

        <div className="max-w-[900px] mx-auto">
          <a
            href="/"
            className="no-print inline-flex items-center gap-2 text-[#505050] hover:text-[#c8a96e] transition-colors duration-300 mb-10 cursor-pointer font-mono text-sm"
          >
            <i className="ri-arrow-left-line"></i>
            Voltar ao portfólio
          </a>

          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              Desenvolvedor full-stack · Sistemas sob medida
            </p>

            <div className="flex flex-wrap gap-4 md:gap-8 mb-8 text-sm text-[#606060] font-mono">
              <span className="flex items-center gap-2">
                <i className="ri-map-pin-line text-[#c8a96e]"></i>
                {CONTACT_INFO.LOCATION_SHORT} — Brasil
              </span>
              <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="flex items-center gap-2 hover:text-[#c8a96e] transition-colors cursor-pointer">
                <i className="ri-mail-line text-[#c8a96e]"></i>
                {CONTACT_INFO.EMAIL}
              </a>
              <a href={CONTACT_INFO.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#c8a96e] transition-colors cursor-pointer">
                <i className="ri-whatsapp-line text-[#c8a96e]"></i>
                {CONTACT_INFO.PHONE}
              </a>
              <a href={CONTACT_INFO.LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#c8a96e] transition-colors cursor-pointer">
                <i className="ri-linkedin-box-line text-[#c8a96e]"></i>
                in/luizamboni
              </a>
            </div>

            <button
              onClick={handlePrint}
              className="no-print inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-[#0f0f0f] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg text-sm"
              style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}
            >
              <i className="ri-download-2-line text-base"></i>
              Baixar / imprimir PDF
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="print-hidden px-5 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-[900px] mx-auto space-y-20 md:space-y-28">

          {/* Resumo */}
          <section>
            <SectionLabel label="// RESUMO PROFISSIONAL" />
            <div className="bg-[#141414] border border-[#1e1e1e] rounded-2xl p-7 md:p-10">
              <p className="text-[#c0c0c0] text-base md:text-lg leading-relaxed mb-5 font-semibold">{SUMMARY.lead}</p>
              <p className="text-[#909090] text-sm md:text-base leading-relaxed mb-5">{SUMMARY.body}</p>
              <p className="text-[#707070] text-sm leading-relaxed">{SUMMARY.close}</p>
            </div>
          </section>

          {/* Projetos */}
          <section>
            <SectionLabel label="// PROJETOS EM PRODUÇÃO" />
            <div className="space-y-4">
              {RESUME_PROJECTS.map((p) => (
                <div key={p.slug} className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-6 hover:border-[#c8a96e]/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                    <h3 className="text-white font-bold text-base">{p.name}</h3>
                    <span className="font-mono text-[11px] text-[#505050]">{p.period}</span>
                  </div>
                  <p className="text-[#808080] text-sm leading-relaxed mb-4">{p.tagline}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 6).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-[10px] font-mono border border-[#232323] text-[#606060] rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/projetos"
              className="inline-flex items-center gap-2 text-[#c8a96e] font-mono text-sm mt-6 hover:gap-3 transition-all duration-300 cursor-pointer"
            >
              Ver o detalhe de cada caso
              <i className="ri-arrow-right-line"></i>
            </a>
          </section>

          {/* Experiências */}
          <section>
            <SectionLabel label="// EXPERIÊNCIA PROFISSIONAL" />
            <div>
              {experiences.map((exp) => (
                <TimelineCard key={`${exp.company}-${exp.period}`} item={exp} type="experience" />
              ))}
            </div>
          </section>

          {/* Formação */}
          <section>
            <SectionLabel label="// FORMAÇÃO ACADÊMICA" />
            <div>
              {education.map((edu) => (
                <TimelineCard key={edu.institution} item={edu} type="education" />
              ))}
            </div>
          </section>

          {/* Certificações */}
          <section>
            <SectionLabel label="// CURSOS & CERTIFICAÇÕES" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 md:p-6 flex items-start gap-4 hover:border-[#c8a96e]/30 transition-all duration-300"
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
              {skillGroups.map((group) => (
                <div key={group.category} className="bg-[#141414] border border-[#1e1e1e] rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <i className={`${group.icon} text-[#c8a96e] text-xl`}></i>
                    <h3 className="text-white font-bold text-sm tracking-wide uppercase font-mono">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
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
              {languages.map((item) => (
                <div key={item.lang} className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-6">
                  <div className="flex justify-between items-center mb-3 gap-3">
                    <span className="text-white font-semibold text-sm">{item.lang}</span>
                    <span className="text-[#c8a96e] text-xs font-mono text-right">{item.level}</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#1e1e1e] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${item.pct}%`, background: 'linear-gradient(90deg, #c8a96e, #b8945a)' }}
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
              Aberto a projetos<br />e a conversas.
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={CONTACT_INFO.WHATSAPP_MSG}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-[#0f0f0f] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
                style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}
              >
                <i className="ri-whatsapp-line text-lg"></i>
                Falar no WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT_INFO.EMAIL}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#c8a96e]/40 text-[#c8a96e] font-bold rounded-xl hover:bg-[#c8a96e]/10 hover:border-[#c8a96e] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-mail-line text-lg"></i>
                Enviar e-mail
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="print-hidden border-t border-[#1e1e1e] px-5 md:px-16 lg:px-24 py-8" style={{ background: '#141414' }}>
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#404040] text-xs font-mono">© {new Date().getFullYear()} Luiz Amboni.</p>
          <a href="/" className="text-[#505050] text-xs font-mono hover:text-[#c8a96e] transition-colors cursor-pointer">
            ← Voltar ao portfólio
          </a>
        </div>
      </footer>

      <div className="print-hidden">
        <WhatsAppButton />
      </div>
    </div>
  );
}
