import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../home/components/Footer';
import SiteHeader from '../../components/SiteHeader';
import WhatsAppButton from '../../components/WhatsAppButton';
import BackToTopButton from '../../components/BackToTopButton';
import { CONTACT_INFO } from '../../constants';

/**
 * Página que ocupou o lugar de "Depoimentos".
 *
 * A anterior trazia seis depoimentos de pessoas e empresas que não existem —
 * texto de exemplo que veio com o template e nunca foi trocado. Em vez de manter
 * citação inventada ou deixar a página vazia, ela virou o lugar onde eu mostro o
 * que dá para conferir sozinho: link que abre, código que se lê, número que se
 * reconta e o compromisso técnico que sustenta cada projeto.
 */

const COMMITMENTS = [
  {
    icon: 'ri-test-tube-line',
    title: 'Teste onde a regra de negócio mora',
    text:
      'Rota não guarda regra. O que o negócio é — "este pedido tem quantos dias?", "esta etapa está na janela de hoje?" — vive em classe pura, sem banco e sem HTTP. É o único lugar onde teste é obrigatório sem discussão.',
    proof: '504 testes automatizados no CRM que eu mantenho',
  },
  {
    icon: 'ri-git-branch-line',
    title: 'Migration versionada, sempre',
    text:
      'Nenhum "roda esse SQL no banco de produção" no grupo do WhatsApp. As migrations são idempotentes e rodam sozinhas no deploy, na ordem certa, com registro do que já passou.',
    proof: '48 migrations versionadas rodando no deploy',
  },
  {
    icon: 'ri-key-2-line',
    title: 'Credencial fora do código',
    text:
      'Token e senha não moram no repositório. Configuração de infraestrutura vem do ambiente; configuração de negócio, do banco, editável pelo painel — sem precisar de deploy para trocar um texto.',
    proof: 'Zero credencial no histórico dos repositórios',
  },
  {
    icon: 'ri-contrast-2-line',
    title: 'Acessibilidade testada, não prometida',
    text:
      'O contraste de cada par de cor passa pela fórmula da WCAG dentro do teste automatizado. Cor ilegível não abre chamado: quebra o build. Isso já pegou três bugs invisíveis em sistemas que estavam no ar.',
    proof: '39 componentes com teste de contraste no npm',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Idempotência em quem fala com gente',
    text:
      'Mensagem automática duplicada custa dinheiro e queima confiança. Advisory lock para um processo por ciclo, restrição UNIQUE no banco como defesa que não depende de eu lembrar, e o registro do envio na mesma transação do envio.',
    proof: 'Bug real, corrigido em três camadas',
  },
  {
    icon: 'ri-eye-off-line',
    title: 'Dado de cliente não vira portfólio',
    text:
      'Print de sistema interno aqui é a interface real com dados de demonstração. Nome, telefone e e-mail de cliente não aparecem em site nenhum meu — nem borrados.',
    proof: 'Todas as telas internas deste site usam dados fictícios',
  },
];

const NOT_FOR_ME = [
  'Projeto que precisa ficar pronto em três dias porque alguém prometeu sem perguntar.',
  'App de celular nativo em Swift ou Kotlin — eu entrego web e PWA, e digo quando o caso pede nativo.',
  'Automação de WhatsApp com biblioteca não oficial. Funciona lindamente até o número da empresa ser banido.',
  'Trabalho em que o combinado é "confia que a gente resolve o pagamento depois".',
];

export default function ProvaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-14 md:pb-20 px-5 md:px-16 lg:px-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="font-mono text-xs text-[#c8a96e] mb-4 tracking-widest">// PROVA</p>
          <h1 className="text-white text-5xl md:text-7xl font-black mb-6 leading-[0.95]">
            Como eu trabalho<br />
            <span style={{
              background: 'linear-gradient(90deg, #c8a96e, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>e como conferir.</span>
          </h1>
          <p className="text-[#808080] text-base md:text-lg leading-relaxed max-w-2xl">
            Portfólio é fácil de encher de elogio. Difícil é deixar tudo aberto para conferência.
            Esta página é a segunda opção: os compromissos técnicos que eu assumo em todo projeto,
            cada um com a prova do lado.
          </p>
        </div>
      </section>

      {/* Compromissos */}
      <section className="px-5 md:px-16 lg:px-24 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {COMMITMENTS.map((c) => (
            <div
              key={c.title}
              className="bg-[#141414] border border-[#1e1e1e] rounded-2xl p-7 md:p-8 hover:border-[#c8a96e]/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#c8a96e]/10 border border-[#c8a96e]/20 flex items-center justify-center mb-5">
                <i className={`${c.icon} text-[#c8a96e] text-xl`}></i>
              </div>
              <h2 className="text-white text-lg font-bold mb-3 leading-snug">{c.title}</h2>
              <p className="text-[#808080] text-sm leading-relaxed mb-5">{c.text}</p>
              <p className="font-mono text-[11px] text-[#c8a96e] tracking-wider pt-4 border-t border-[#1c1c1c]">
                ✓ {c.proof}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos: a política */}
      <section className="px-5 md:px-16 lg:px-24 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="rounded-2xl border border-[#1e1e1e] bg-gradient-to-br from-[#141414] to-[#111111] p-8 md:p-12">
            <p className="font-mono text-xs text-[#c8a96e] mb-5 tracking-widest">// SOBRE DEPOIMENTOS</p>
            <h2 className="text-white text-2xl md:text-3xl font-black mb-5 leading-tight">
              Esta página tinha seis depoimentos. Nenhum era real.
            </h2>
            <div className="space-y-4 text-[#909090] text-sm md:text-[15px] leading-relaxed max-w-3xl">
              <p>
                Eles vieram como texto de exemplo junto com o template do site e ficaram lá:
                nomes, empresas e resultados que nunca existiram. Tirei todos.
              </p>
              <p>
                Depoimento inventado não convence quem entende e destrói a confiança de quem
                acreditou — basta um cliente pedir para falar com a pessoa citada. Prefiro
                mostrar endereço que abre, pacote que instala e número que dá para recontar.
              </p>
              <p className="text-[#c0c0c0]">
                Quando houver depoimento de verdade, com nome e autorização de quem escreveu, ele
                entra aqui. Até então, o espaço fica com a prova que eu tenho. E se você quiser
                falar com alguém que já trabalhou comigo: pede que eu apresento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quando não sou a pessoa certa */}
      <section className="px-5 md:px-16 lg:px-24 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="font-mono text-xs text-[#c8a96e] mb-5 tracking-widest">// QUANDO EU NÃO SOU A PESSOA CERTA</p>
          <h2 className="text-white text-3xl md:text-4xl font-black mb-8 leading-tight">
            O que eu recuso — e digo na primeira conversa.
          </h2>
          <ul className="space-y-4 max-w-3xl">
            {NOT_FOR_ME.map((item) => (
              <li key={item} className="flex items-start gap-4 border-b border-[#161616] pb-4">
                <i className="ri-close-circle-line text-[#c8a96e]/70 text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-[#808080] text-sm md:text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#606060] text-sm leading-relaxed mt-8 max-w-3xl">
            Dizer não no começo é mais barato para os dois do que descobrir no meio. Se o seu caso
            for um desses, eu costumo indicar quem faz.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-16 lg:px-24 pb-20 md:pb-28">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center bg-[#141414] border border-[#1e1e1e] rounded-2xl p-10 md:p-16">
            <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
              Quer ver isso aplicado?
            </h2>
            <p className="text-[#808080] text-base md:text-lg mb-9 max-w-2xl mx-auto leading-relaxed">
              Os nove sistemas estão detalhados na página de projetos — com o problema que cada um
              resolveu e a decisão técnica que valeu a pena.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/projetos"
                className="px-8 py-4 rounded-xl font-bold text-[#0a0a0a] hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}
              >
                Ver os projetos
              </Link>
              <a
                href={CONTACT_INFO.WHATSAPP_MSG}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#c8a96e]/40 text-[#c8a96e] font-bold rounded-xl hover:bg-[#c8a96e]/10 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Falar no WhatsApp
              </a>
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
