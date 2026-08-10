import { useState, type FormEvent } from 'react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { CONTACT_INFO, FORMSPREE_ENDPOINT } from '../../../constants';

const PROJECT_TYPES = [
  { value: 'sistema', label: '🖥️ Sistema sob medida (CRM, painel, área do cliente)' },
  { value: 'ecommerce', label: '🛒 E-commerce ou checkout próprio' },
  { value: 'integracao', label: '🔗 Integração (ERP, pagamento, marketplace, WhatsApp)' },
  { value: 'automacao-ia', label: '🤖 Automação de processo, inclusive com IA' },
  { value: 'site', label: '🌐 Site institucional ou landing page' },
  { value: 'manutencao', label: '🛠️ Assumir a manutenção de um sistema existente' },
  { value: 'outro', label: 'Outro' },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', projectType: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Preencha nome, e-mail e mensagem.');
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
      return;
    }

    // Sem endpoint configurado o envio falharia calado — melhor mandar a pessoa
    // para o WhatsApp do que fingir que a mensagem chegou.
    if (!FORMSPREE_ENDPOINT) {
      setErrorMsg('O formulário está fora do ar agora. Chame no WhatsApp ou por e-mail — respondo do mesmo jeito.');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nome: formData.name,
          email: formData.email,
          telefone: formData.phone,
          tipo_de_projeto: PROJECT_TYPES.find((t) => t.value === formData.projectType)?.label || '—',
          mensagem: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 6000);
      } else {
        setErrorMsg('Não consegui enviar. Tente pelo WhatsApp — é mais rápido.');
        setSubmitStatus('error');
      }
    } catch {
      setErrorMsg('Sem conexão com o servidor de e-mail. Chame no WhatsApp.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    'w-full px-4 py-3 bg-[#141414] border border-[#1e1e1e] rounded-xl text-white placeholder-[#404040] focus:outline-none focus:border-[#c8a96e]/60 focus:ring-1 focus:ring-[#c8a96e]/30 transition-all duration-300 text-sm';

  const contactItems = [
    {
      icon: 'ri-whatsapp-line',
      title: 'WhatsApp',
      sub: 'O caminho mais rápido — costumo responder no mesmo dia',
      link: CONTACT_INFO.WHATSAPP_MSG,
      label: CONTACT_INFO.PHONE,
    },
    {
      icon: 'ri-mail-line',
      title: 'E-mail',
      sub: 'Para proposta formal e troca de documento',
      link: `mailto:${CONTACT_INFO.EMAIL}`,
      label: CONTACT_INFO.EMAIL,
    },
    {
      icon: 'ri-linkedin-box-line',
      title: 'LinkedIn',
      sub: 'Onde publico os bastidores de cada projeto',
      link: CONTACT_INFO.LINKEDIN,
      label: 'in/luizamboni',
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Onde eu estou',
      sub: 'Presencial na região, remoto para o Brasil',
      label: CONTACT_INFO.LOCATION,
    },
  ];

  return (
    <section
      id="contato"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: '#0f0f0f' }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c8a96e]/20 to-transparent"></div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="font-mono text-xs text-[#c8a96e] mb-4 tracking-widest">// CONTATO</p>
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="text-white">Tem um processo que hoje mora numa</span>{' '}
              <span style={{
                background: 'linear-gradient(90deg, #c8a96e, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>planilha?</span>
            </h2>
            <p
              className={`text-[#707070] text-base md:text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              É exatamente esse tipo de problema que eu resolvo. Me conte como a operação
              funciona hoje — a primeira conversa é só pergunta, e não custa nada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
            {/* Formulário */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[#909090] font-medium mb-2 text-sm">Nome completo *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#909090] font-medium mb-2 text-sm">E-mail *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[#909090] font-medium mb-2 text-sm">Telefone (opcional)</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="(48) 99999-9999" />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-[#909090] font-medium mb-2 text-sm">O que você precisa</label>
                  <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                    <option value="">Selecione uma opção</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#909090] font-medium mb-2 text-sm">Como funciona hoje? *</label>
                  <textarea
                    id="message" name="message" value={formData.message} onChange={handleChange}
                    required maxLength={800} rows={5} className={`${inputClass} resize-none`}
                    placeholder="Ex.: hoje a gente controla os pedidos numa planilha e o estoque quase nunca bate…"
                  ></textarea>
                  <p className="text-[#404040] text-xs mt-1">{formData.message.length}/800 caracteres</p>
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
                    <p className="text-[#c8a96e] text-center font-medium text-sm">
                      ✓ Mensagem enviada. Retorno em até um dia útil.
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/40 rounded-xl space-y-3">
                    <p className="text-red-400 text-center font-medium text-sm">{errorMsg}</p>
                    <a
                      href={CONTACT_INFO.WHATSAPP_MSG}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-[#c8a96e] text-sm font-mono underline cursor-pointer"
                    >
                      Abrir o WhatsApp
                    </a>
                  </div>
                )}
              </form>
            </div>

            {/* Informações de Contato */}
            <div className={`space-y-5 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {contactItems.map((item) => (
                <div key={item.title} className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-6 hover:border-[#c8a96e]/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#c8a96e]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#c8a96e]/20 transition-all duration-300">
                      <i className={`${item.icon} text-xl text-[#c8a96e]`}></i>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                      <p className="text-[#505050] text-sm mb-2 leading-snug">{item.sub}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#c8a96e] text-sm font-medium hover:text-[#d4b896] transition-colors cursor-pointer break-all"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <p className="text-[#c8a96e] text-sm font-medium">{item.label}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-[#111111] border border-[#1c1c1c] rounded-xl p-6">
                <p className="font-mono text-[11px] text-[#c8a96e] tracking-widest mb-3">// ANTES DE VOCÊ ESCREVER</p>
                <p className="text-[#707070] text-sm leading-relaxed">
                  Não precisa chegar com escopo pronto nem saber qual tecnologia usar. Traga o
                  problema — o que trava, quem sofre com isso e quanto tempo custa por semana. O
                  resto é meu trabalho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
