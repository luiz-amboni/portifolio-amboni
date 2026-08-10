import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import ProjectCard from '../../../components/ProjectCard';
import { featuredProjects, projects } from '../../../data/projects';

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section
      id="projetos"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative w-full px-5 md:px-16 lg:px-24 py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #0f0f0f 0%, #141414 100%)' }}
    >
      <div className="max-w-[1600px] mx-auto">

        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-16">
          <div>
            <p className="font-mono text-xs text-[#c8a96e] mb-3 md:mb-4 tracking-widest">// PROJETOS EM PRODUÇÃO</p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-none break-words">
              Sistemas que<br />
              <span style={{
                background: 'linear-gradient(90deg, #c8a96e, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>rodam todo dia.</span>
            </h2>
          </div>
          <p className="text-[#505050] text-sm md:text-base max-w-sm leading-relaxed lg:text-right">
            Quatro em destaque, {projects.length} no total. Cada um começou num incômodo real da
            operação — não num briefing.
          </p>
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/projetos"
            className="px-8 py-4 rounded-xl font-bold text-[#0f0f0f] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
            style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}
          >
            Ver os {projects.length} projetos
          </Link>
          <a
            href="https://github.com/luiz-amboni"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-[#1e1e1e] text-[#707070] font-mono text-sm rounded-xl hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all duration-300 whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
          >
            <i className="ri-github-line text-lg"></i>
            O que é aberto está no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
