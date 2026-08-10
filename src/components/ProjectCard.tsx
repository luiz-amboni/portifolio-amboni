import { Link } from 'react-router-dom';
import { STATUS_LABEL, type Project } from '../data/projects';

const STATUS_STYLE: Record<Project['status'], string> = {
  producao: 'bg-[#c8a96e] text-[#0f0f0f]',
  entregue: 'bg-[#c8a96e]/15 text-[#c8a96e] border border-[#c8a96e]/40',
  interno: 'bg-[#1e1e1e] text-[#909090] border border-[#2a2a2a]',
};

/** Card de projeto — usado na home e na página de projetos. */
export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.images?.[0];

  return (
    <article className="group flex flex-col bg-[#141414] border border-[#1e1e1e] rounded-2xl overflow-hidden hover:border-[#c8a96e]/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(200,169,110,0.07)]">
      {/* Capa */}
      <div className="relative aspect-[16/10] bg-[#101010] overflow-hidden border-b border-[#1e1e1e]">
        {cover ? (
          <img
            src={cover.src}
            alt={cover.alt}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
          />
        ) : (
          // Projetos sem print disponível não recebem mockup inventado: recebem o nome.
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="font-mono text-[10px] text-[#c8a96e]/60 tracking-widest">{project.category.toUpperCase()}</span>
            <span className="text-2xl md:text-3xl font-black text-[#2a2a2a] leading-tight">{project.name}</span>
          </div>
        )}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest ${STATUS_STYLE[project.status]}`}>
            {STATUS_LABEL[project.status].toUpperCase()}
          </span>
          {cover?.demo && (
            <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-[#0a0a0a]/80 text-[#808080] border border-[#2a2a2a]">
              DADOS DE DEMONSTRAÇÃO
            </span>
          )}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[11px] text-[#c8a96e] tracking-wider">{project.category}</span>
          <span className="w-1 h-1 rounded-full bg-[#2a2a2a]" />
          <span className="font-mono text-[11px] text-[#505050]">{project.period}</span>
        </div>

        <h3 className="text-white text-xl md:text-2xl font-black leading-tight mb-3">{project.name}</h3>
        <p className="text-[#808080] text-sm leading-relaxed mb-5">{project.tagline}</p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-5 pb-5 border-b border-[#1c1c1c]">
            {project.metrics.slice(0, 3).map((m) => (
              <div key={m.label}>
                <p className="text-[#c8a96e] text-lg font-black leading-none">{m.value}</p>
                <p className="text-[#505050] text-[11px] font-mono mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 border border-[#1e1e1e] text-[#606060] text-[11px] font-mono rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="px-2.5 py-1 text-[#404040] text-[11px] font-mono">
              +{project.stack.length - 5}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4">
          <Link
            to={`/projetos#${project.slug}`}
            className="inline-flex items-center gap-2 text-[#c8a96e] font-mono text-sm hover:gap-3 transition-all duration-300 cursor-pointer"
          >
            Ver o caso
            <i className="ri-arrow-right-line"></i>
          </Link>
          {project.links?.slice(0, 1).map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#606060] font-mono text-xs hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer"
            >
              <i className={l.kind === 'repo' ? 'ri-github-line' : l.kind === 'npm' ? 'ri-npmjs-line' : 'ri-external-link-line'}></i>
              {l.label}
            </a>
          ))}
          {!project.links && (
            <span className="inline-flex items-center gap-1.5 text-[#3a3a3a] font-mono text-xs">
              <i className="ri-lock-line"></i>
              sem link público
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
