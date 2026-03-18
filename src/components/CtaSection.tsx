import { Link } from 'react-router-dom';

interface CtaSectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink?: string; // Opcional, padrão será /#contato
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CtaSection({ 
  title, 
  description, 
  primaryButtonText, 
  primaryButtonLink = "/#contato",
  secondaryButtonText,
  secondaryButtonLink 
}: CtaSectionProps) {
  return (
    <section className="py-20 px-5 md:px-16 lg:px-24 bg-[#0d0d0d]">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center bg-[#141414] border border-[#1e1e1e] rounded-2xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-white text-4xl md:text-5xl font-black mb-4">{title}</h2>
            <p className="text-[#909090] text-lg mb-10 max-w-2xl mx-auto">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={primaryButtonLink} className="px-10 py-4 bg-[#c8a96e] text-[#0a0a0a] font-bold rounded-full hover:bg-[#d4b87d] transition-all duration-300 cursor-pointer whitespace-nowrap">
                {primaryButtonText}
              </Link>
              {secondaryButtonText && secondaryButtonLink && (
                <Link to={secondaryButtonLink} className="px-10 py-4 bg-transparent border-2 border-[#c8a96e] text-[#c8a96e] font-bold rounded-full hover:bg-[#c8a96e]/10 transition-all duration-300 cursor-pointer whitespace-nowrap">
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}