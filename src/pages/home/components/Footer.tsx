import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    { icon: 'ri-linkedin-fill', url: 'https://www.linkedin.com/in/luiz-otavio-a-892a0a122/' },
    { icon: 'ri-github-fill', url: 'https://github.com/luiz-amboni' },
    { icon: 'ri-behance-fill', url: 'https://www.behance.net/luizamboni' },
    { icon: 'ri-mail-line', url: 'mailto:luiz.amboniii@gmail.com' }
  ];

  return (
    <footer className="relative border-t border-[#1e1e1e]" style={{ background: '#141414' }}>
      <div className="max-w-[1600px] mx-auto px-5 md:px-16 lg:px-24 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Coluna Esquerda */}
          <div className="lg:col-span-4">
            <h3 className="text-white text-4xl md:text-5xl font-black mb-3 md:mb-4">
              LUIZ<br />AMBONI
            </h3>
            <p className="text-[#c8a96e] text-base font-mono mb-8">Designer & AI Specialist</p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center hover:border-[#c8a96e]/60 hover:bg-[#c8a96e]/10 transition-all duration-300 group cursor-pointer"
                >
                  <i className={`${social.icon} text-[#606060] text-lg group-hover:text-[#c8a96e]`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Coluna Meio */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <p className="text-[#c8a96e] uppercase text-[11px] font-mono tracking-wider mb-3">LOCALIZAÇÃO</p>
              <p className="text-[#909090] text-sm">Criciúma/SC — Brasil</p>
            </div>
            <div>
              <p className="text-[#c8a96e] uppercase text-[11px] font-mono tracking-wider mb-3">TELEFONE</p>
              <a href="https://wa.me/5548996815062" target="_blank" rel="noopener noreferrer" className="text-[#909090] text-sm hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer">
                (48) 99681-5062
              </a>
            </div>
            <div>
              <p className="text-[#c8a96e] uppercase text-[11px] font-mono tracking-wider mb-3">EMAIL</p>
              <a href="mailto:luiz.amboniii@gmail.com" className="text-[#909090] text-sm hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer">
                luiz.amboniii@gmail.com
              </a>
            </div>
          </div>

          {/* Coluna Direita - Navegação */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <p className="text-[#c8a96e] uppercase text-[11px] font-mono tracking-wider mb-5">NAVEGAÇÃO</p>
              <div className="flex flex-col gap-3">
                <Link
                  to="/projetos"
                  className="text-[#606060] text-sm hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer font-mono"
                >
                  Projetos
                </Link>
                <Link
                  to="/especialidades"
                  className="text-[#606060] text-sm hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer font-mono"
                >
                  Especialidades
                </Link>
                <Link
                  to="/#depoimentos" // Changed to hash link, points to the section on the home page
                  className="text-[#606060] text-sm hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer font-mono"
                >
                  Depoimentos
                </Link>
                <Link
                  to="/#contato"
                  className="text-[#606060] text-sm hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer font-mono"
                >
                  Contato
                </Link>
                <Link
                  to="/curriculo"
                  className="text-[#606060] text-sm hover:text-[#c8a96e] transition-colors duration-300 cursor-pointer font-mono"
                >
                  Currículo
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#1e1e1e] mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#404040] text-[13px]">© {new Date().getFullYear()} Luiz Amboni. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <Link to="/#contato" className="text-[#404040] text-[13px] hover:text-[#c8a96e] transition-all duration-300 cursor-pointer">
              Contato
            </Link>
            <a href="https://www.linkedin.com/in/luiz-otavio-a-892a0a122/" target="_blank" rel="noopener noreferrer" className="text-[#404040] text-[13px] hover:text-[#c8a96e] transition-all duration-300 cursor-pointer">
              LinkedIn
            </a>
            <Link to="/curriculo" className="text-[#404040] text-[13px] hover:text-[#c8a96e] transition-all duration-300 cursor-pointer">
              Currículo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
