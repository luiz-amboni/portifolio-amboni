import { useState, FormEvent } from 'react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }
    setIsSubmitting(true);
    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('projectType', formData.projectType);
      formDataToSend.append('message', formData.message);

      // TODO: Para publicar o site, crie uma conta no Formspree (https://formspree.io)
      // e substitua a URL abaixo ou implemente seu próprio backend.
      // Exemplo: fetch('https://formspree.io/f/SEU_ID', ...)
      
      // Simulando sucesso para visualização
      const response = { ok: true }; 
      await new Promise(resolve => setTimeout(resolve, 1000)); // Fake delay

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-3 bg-[#141414] border border-[#1e1e1e] rounded-xl text-white placeholder-[#404040] focus:outline-none focus:border-[#c8a96e]/60 focus:ring-1 focus:ring-[#c8a96e]/30 transition-all duration-300 text-sm";

  return (
    <section ref={ref} id="contato" className="relative py-20 md:py-32 overflow-hidden" style={{ background: '#0f0f0f' }}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c8a96e]/20 to-transparent"></div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="font-mono text-xs text-[#c8a96e] mb-4 tracking-widest">// CONTATO</p>
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <span className="text-white">Vamos criar algo</span>{' '}
              <span style={{
                background: 'linear-gradient(90deg, #c8a96e, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>incrível?</span>
            </h2>
            <p
              className={`text-[#606060] text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Preencha o formulário abaixo ou entre em contato direto pelo WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Formulário */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[#909090] font-medium mb-2 text-sm">Nome completo *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#909090] font-medium mb-2 text-sm">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[#909090] font-medium mb-2 text-sm">Telefone (opcional)</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="(48) 99999-9999" />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-[#909090] font-medium mb-2 text-sm">Tipo de projeto</label>
                  <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                    <option value="">Selecione uma opção</option>
                    <option value="site-portfolio">🌐 Site / Portfólio Profissional</option>
                    <option value="landing-page">🚀 Landing Page de Alta Conversão</option>
                    <option value="uiux">🎨 UX/UI Design (Figma / Prototipagem)</option>
                    <option value="automacao-ia">🤖 Automação com IA</option>
                    <option value="redesign">✏️ Redesign de Site Existente</option>
                    <option value="consultoria">💡 Consultoria Digital</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#909090] font-medium mb-2 text-sm">Mensagem *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required maxLength={500} rows={5} className={`${inputClass} resize-none`} placeholder="Conte-me sobre seu projeto..."></textarea>
                  <p className="text-[#404040] text-xs mt-1">{formData.message.length}/500 caracteres</p>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 font-bold rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap cursor-pointer text-[#0f0f0f]"
                  style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-[#c8a96e]/10 border border-[#c8a96e]/40 rounded-xl">
                    <p className="text-[#c8a96e] text-center font-medium text-sm">✓ Mensagem enviada! Retornarei em breve.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/40 rounded-xl">
                    <p className="text-red-400 text-center font-medium text-sm">✗ Verifique os campos e tente novamente.</p>
                  </div>
                )}
              </form>
            </div>

            {/* Informações de Contato */}
            <div className={`space-y-5 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                {
                  icon: 'ri-whatsapp-line',
                  title: 'WhatsApp',
                  sub: 'Resposta rápida e direta',
                  link: 'https://wa.me/5548996815062?text=Olá%20Luiz!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.',
                  label: '(48) 99681-5062'
                },
                {
                  icon: 'ri-mail-line',
                  title: 'Email',
                  sub: 'Para propostas formais',
                  link: 'mailto:luiz.amboniii@gmail.com',
                  label: 'luiz.amboniii@gmail.com'
                },
                {
                  icon: 'ri-map-pin-line',
                  title: 'Localização',
                  sub: 'Atendimento remoto e presencial',
                  label: 'Criciúma, Santa Catarina'
                },
                {
                  icon: 'ri-time-line',
                  title: 'Disponibilidade',
                  sub: 'Segunda a Sexta',
                  label: '09:00 – 18:00'
                }
              ].map((item, i) => (
                <div key={i} className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-6 hover:border-[#c8a96e]/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#c8a96e]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#c8a96e]/20 transition-all duration-300">
                      <i className={`${item.icon} text-xl text-[#c8a96e]`}></i>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                      <p className="text-[#505050] text-sm mb-2">{item.sub}</p>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#c8a96e] text-sm font-medium hover:text-[#d4b896] transition-colors cursor-pointer">
                          {item.label}
                        </a>
                      ) : (
                        <p className="text-[#c8a96e] text-sm font-medium">{item.label}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
