import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../home/components/Footer';
import SiteHeader from '../../components/SiteHeader';
import WhatsAppButton from '../../components/WhatsAppButton';
import BackToTopButton from '../../components/BackToTopButton';
import { projects, STATUS_LABEL, type Project } from '../../data/projects';
import { CONTACT_INFO } from '../../constants';

const STATUS_STYLE: Record<Project['status'], string> = {
  producao: 'bg-[#c8a96e] text-[#0f0f0f]',
  entregue: 'bg-[#c8a96e]/15 text-[#c8a96e] border border-[#c8a96e]/40',
  interno: 'bg-[#1e1e1e] text-[#909090] border border-[#2a2a2a]',
};

const LINK_ICON: Record<string, string> = {
  site: 'ri-external-link-line',
  repo: 'ri-github-line',
  npm: 'ri-npmjs-line',
  docs: 'ri-book-2-line',
};

function Gallery({ project }: { project: Project }) {
  const [active, setActive] = useState(0);
  const images = project.images ?? [];
  if (images.length === 0) {
    return (
      <div className="rounded-2xl border border-[#1e1e1e] bg-[#111111] p-8 md:p-10">
        <p className="font-mono text-[11px] text-[#c8a96e] tracking-widest mb-4">// SEM IMAGEM PÚBLICA</p>
        <p className="text-[#707070] text-sm leading-relaxed">
          {project.note ??
            'Projeto interno — preferi não publicar print a publicar um mockup que não é o sistema.'}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {project.stack.map((tech) => (
            <div key={tech} className="border border-[#1c1c1c] rounded-lg px-3 py-2.5 text-center">
              <span className="font-mono text-xs text-[#606060]">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const current = images[active];

  return (
    <div>
      <figure className="rounded-2xl overflow-hidden border border-[#1e1e1e] bg-[#101010]">
        <img
          src={current.src}
          alt={current.alt}
          loading="lazy"
          className="w-full h-auto block"
        />
        {(current.caption || current.demo) && (
          <figcaption className="px-4 md:px-5 py-3 border-t border-[#1e1e1e] bg-[#141414] flex flex-wrap items-center gap-x-3 gap-y-1">
            {current.caption && <span className="text-[#808080] text-xs md:text-[13px]">{current.caption}</span>}
            {current.demo && (
              <span className="font-mono text-[10px] text-[#505050] tracking-wider">
                · interface real, dados de demonstração
              </span>
            )}
          </figcaption>
        )}
      </figure>

      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver ${img.caption || img.alt}`}
              className={`flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden border transition-all duration-300 cursor-pointer ${
                i === active ? 'border-[#c8a96e]' : 'border-[#1e1e1e] opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt="" loading="lazy" className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectDetail({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;

  return (
    <section
      id={project.slug}
      className="scroll-mt-24 py-14 md:py-20 border-b border-[#161616] last:border-b-0"
    >
      {/* Cabeçalho do caso */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest ${STATUS_STYLE[project.status]}`}>
          {STATUS_LABEL[project.status].toUpperCase()}
        </span>
        <span className="font-mono text-[11px] text-[#c8a96e] tracking-wider">{project.category}</span>
        <span className="w-1 h-1 rounded-full bg-[#2a2a2a]" />
        <span className="font-mono text-[11px] text-[#505050]">{project.period}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Texto */}
        <div className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-4">
            {project.name}
          </h2>
          <p className="text-[#c8a96e] text-base md:text-lg leading-relaxed mb-8">{project.tagline}</p>

          <div className="mb-8">
            <p className="font-mono text-[11px] text-[#505050] tracking-widest mb-3">// O PROBLEMA</p>
            <p className="text-[#909090] text-sm md:text-[15px] leading-relaxed">{project.problem}</p>
          </div>

          <div className="mb-8">
            <p className="font-mono text-[11px] text-[#505050] tracking-widest mb-4">// O QUE O SISTEMA FAZ</p>
            <ul className="space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <i className="ri-arrow-right-s-line text-[#c8a96e] text-lg leading-none mt-0.5 flex-shrink-0"></i>
                  <span className="text-[#808080] text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.decision && (
            <div className="mb-8 border-l-2 border-[#c8a96e]/40 pl-5">
              <p className="font-mono text-[11px] text-[#c8a96e] tracking-widest mb-3">// A DECISÃO QUE VALE CONTAR</p>
              <p className="text-[#909090] text-sm leading-relaxed">{project.decision}</p>
            </div>
          )}

          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-8 grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-5 pt-6 border-t border-[#1c1c1c]">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-2xl md:text-3xl font-black text-white leading-none">{m.value}</p>
                  <p className="text-[#606060] text-[11px] font-mono mt-1.5 leading-snug">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 border border-[#1e1e1e] text-[#707070] text-[11px] font-mono rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.links && project.links.length > 0 ? (
            <div className="flex flex-col gap-2.5">
              {project.links.map((l, i) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    i === 0
                      ? 'inline-flex items-center justify-center gap-3 px-6 py-3.5 font-bold rounded-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer text-[#0f0f0f]'
                      : 'inline-flex items-center gap-3 px-6 py-3.5 border border-[#1e1e1e] text-[#707070] font-mono text-sm rounded-xl hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all duration-300 cursor-pointer'
                  }
                  style={i === 0 ? { background: 'linear-gradient(135deg, #c8a96e, #b8945a)' } : undefined}
                >
                  <i className={`${LINK_ICON[l.kind]} text-lg`}></i>
                  {l.label}
                </a>
              ))}
            </div>
          ) : (
            <div className="flex items-start gap-3 rounded-xl border border-[#1c1c1c] bg-[#111111] px-5 py-4">
              <i className="ri-lock-line text-[#c8a96e] text-lg flex-shrink-0 mt-0.5"></i>
              <p className="text-[#707070] text-[13px] leading-relaxed">{project.note}</p>
            </div>
          )}

          {project.links && project.note && (
            <p className="text-[#505050] text-[13px] leading-relaxed mt-4">{project.note}</p>
          )}
        </div>

        {/* Imagens */}
        <div className={`lg:col-span-7 ${flip ? 'lg:order-1' : ''}`}>
          <Gallery project={project} />
        </div>
      </div>
    </section>
  );
}

export default function ProjetosPage() {
  const { hash } = useLocation();
  const [filter, setFilter] = useState<'todos' | Project['status']>('todos');

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const el = document.getElementById(hash.slice(1));
    if (el) {
      // espera o layout assentar antes de rolar até a âncora
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
    }
  }, [hash]);

  const visible = useMemo(
    () => (filter === 'todos' ? projects : projects.filter((p) => p.status === filter)),
    [filter],
  );

  const counts = useMemo(
    () => ({
      todos: projects.length,
      producao: projects.filter((p) => p.status === 'producao').length,
      entregue: projects.filter((p) => p.status === 'entregue').length,
      interno: projects.filter((p) => p.status === 'interno').length,
    }),
    [],
  );

  const FILTERS: { key: 'todos' | Project['status']; label: string }[] = [
    { key: 'todos', label: `Todos (${counts.todos})` },
    { key: 'producao', label: `Em produção (${counts.producao})` },
    { key: 'entregue', label: `Entregues (${counts.entregue})` },
    { key: 'interno', label: `Internos (${counts.interno})` },
  ];

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-10 md:pb-14 px-5 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <p className="font-mono text-xs text-[#c8a96e] mb-4 tracking-widest">// PROJETOS</p>
          <h1 className="text-white text-5xl md:text-7xl font-black mb-6 leading-[0.95]">
            {projects.length} sistemas,<br />
            <span style={{
              background: 'linear-gradient(90deg, #c8a96e, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>um jeito de trabalhar.</span>
          </h1>
          <p className="text-[#808080] text-base md:text-lg max-w-2xl leading-relaxed">
            Cada caso abaixo começa pelo problema de negócio, não pela tecnologia. Onde o sistema
            é interno, a prova é a imagem da interface real com dados de demonstração — não um
            mockup bonito. Onde está no ar, o link está aqui.
          </p>

          {/* Filtro */}
          <div className="flex flex-wrap gap-2.5 mt-10">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2.5 rounded-full font-mono text-xs md:text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  filter === f.key
                    ? 'bg-[#c8a96e] text-[#0a0a0a] font-bold'
                    : 'bg-[#141414] text-[#808080] border border-[#1e1e1e] hover:text-[#c8a96e] hover:border-[#c8a96e]/40'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Casos */}
      <div className="px-5 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          {visible.map((project, i) => (
            <ProjectDetail key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="px-5 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center bg-[#141414] border border-[#1e1e1e] rounded-2xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/5 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                O seu problema parece com algum desses?
              </h2>
              <p className="text-[#808080] text-base md:text-lg mb-9 max-w-2xl mx-auto leading-relaxed">
                Me conte como a operação funciona hoje. Se eu não for a pessoa certa para o seu
                caso, eu digo isso na primeira conversa.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={CONTACT_INFO.WHATSAPP_MSG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl font-bold text-[#0a0a0a] hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}
                >
                  Falar no WhatsApp
                </a>
                <Link
                  to="/especialidades"
                  className="px-8 py-4 border border-[#c8a96e]/40 text-[#c8a96e] font-bold rounded-xl hover:bg-[#c8a96e]/10 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Como funciona um projeto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
}
