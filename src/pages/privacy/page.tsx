import { useEffect } from 'react';
import DefaultLayout from '../../components/DefaultLayout';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DefaultLayout>
      <div className="pt-32 pb-20 px-5 md:px-16 lg:px-24 max-w-4xl mx-auto text-[#909090]">
        <h1 className="text-3xl md:text-5xl font-black text-white mb-8">Política de Privacidade</h1>
        <p className="text-sm font-mono text-[#c8a96e] mb-12">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

        <div className="space-y-10 text-base md:text-lg leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">1. Introdução</h2>
            <p>
              A sua privacidade é importante para nós. É política do Luiz Amboni respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site amboni.info e outros sites que possuímos e operamos.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">2. Coleta de Informações</h2>
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 border-l-2 border-[#c8a96e]/30 ml-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Informações do projeto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">3. Uso das Informações</h2>
            <p>
              Utilizamos as informações coletadas unicamente para responder às suas solicitações de contato, orçamentos ou dúvidas sobre serviços. Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">4. Armazenamento</h2>
            <p>
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
          </section>
        </div>
      </div>
    </DefaultLayout>
  );
}
