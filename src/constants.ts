export const CONTACT_INFO = {
  NAME: 'Luiz Otávio Amboni',
  ROLE: 'Desenvolvedor full-stack',
  TAGLINE: 'Sistemas sob medida, do ERP ao WhatsApp do cliente',
  EMAIL: 'luiz.amboniii@gmail.com',
  PHONE: '(48) 99681-5062',
  WHATSAPP_LINK: 'https://wa.me/5548996815062',
  WHATSAPP_MSG:
    'https://wa.me/5548996815062?text=Ol%C3%A1%20Luiz!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.',
  LINKEDIN: 'https://www.linkedin.com/in/luizamboni/',
  GITHUB: 'https://github.com/luiz-amboni',
  INSTAGRAM: 'https://www.instagram.com/amboni.i/',
  NPM: 'https://www.npmjs.com/package/@amboni/ui',
  SITE: 'https://amboni.info',
  LOCATION: 'Criciúma, Santa Catarina',
  LOCATION_SHORT: 'Criciúma, SC',
} as const;

/** Números contados no código dos projetos — não estimados. Ver src/data/projects.ts. */
export const HEADLINE_STATS = [
  { value: '9', label: 'sistemas em produção' },
  { value: '6', label: 'anos em tecnologia' },
  { value: '39', label: 'componentes no npm' },
] as const;

export const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || '';
