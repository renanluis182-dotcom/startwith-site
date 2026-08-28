import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";

const whatsapp =
  "https://wa.me/5531990176203?text=Ol%C3%A1!%20Quero%20conversar%20com%20um%20consultor%20comercial%20da%20Start%20With.";

const consultantServices = [
  ["01", "Diagnóstico comercial", "Mapeamos funil, processos, indicadores, equipe e concorrência para localizar onde o resultado está vazando."],
  ["02", "Estruturação da força de vendas", "Definimos papéis, remuneração, handoff e rotina de gestão para cada etapa da jornada."],
  ["03", "Processo e funil previsível", "Criamos etapas, critérios de qualificação, SLAs e indicadores para substituir achismo por gestão."],
  ["04", "Treinamento e acompanhamento", "Treinamos lideranças e vendedores e acompanhamos a operação até a nova rotina ganhar autonomia."],
];

const consultantFaqs = [
  ["O que faz um consultor comercial na prática?", "Entra na operação para diagnosticar gargalos, estruturar processos, definir papéis, implementar indicadores e desenvolver o time."],
  ["Quando contratar um consultor de vendas?", "Quando a empresa já vende, mas convive com metas imprevisíveis, alta rotatividade, funil sem controle ou dificuldade para escalar."],
  ["Qual a diferença entre consultoria e treinamento?", "Treinamento transfere conhecimento. A consultoria redesenha a operação, acompanha a execução e ajusta o processo em tempo real."],
  ["Atende empresas de qualquer segmento?", "A metodologia é adaptada a operações B2B e B2C em educação, seguros, tecnologia, serviços, distribuição e varejo."],
];

export const metadata: Metadata = {
  title: "Consultoria Comercial",
  description: "Consultoria comercial para diagnosticar, estruturar e acompanhar operações de vendas B2B e B2C.",
  alternates: { canonical: "/consultor-comercial" },
  openGraph: {
    title: "Consultor Comercial | Start With Consultoria",
    description: "Diagnóstico, processo e execução para transformar vendas imprevisíveis em uma operação que cresce com controle.",
    url: "/consultor-comercial",
  },
};

export default function ConsultorComercial() {
  return (
    <main>
      <SiteHeader />

      <section className="consultant-hero">
        <div className="consultant-hero-copy">
          <Link className="breadcrumb" href="/">Início / Consultoria Comercial</Link>
          <p className="eyebrow">Consultoria liderada por especialista</p>
          <h1>Estrutura comercial para empresas que querem <span>escalar vendas.</span></h1>
          <p>Diagnóstico, processo e execução lado a lado para transformar vendas imprevisíveis em uma operação que cresce com controle.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Falar com a Start With</a>
            <Link className="button button-secondary" href="/#sobre">Conhecer a Start With</Link>
          </div>
          <ul className="consultant-trust"><li>Liderança especialista</li><li>B2B e B2C</li><li>Atendimento nacional</li></ul>
        </div>
        <div className="consultant-hero-visual">
          <Image src="/ferramenta-crm.webp" alt="CRM Start With apresentado em monitor e tablet" fill priority sizes="(max-width: 980px) 90vw, 42vw" />
          <div><strong>Execução real</strong><span>Do diagnóstico à rotina do time.</span></div>
        </div>
      </section>

      <section className="consultant-services section-shell">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Serviços</p><h2>O que a liderança especialista coloca em prática.</h2></div>
          <p>Não entregamos um relatório e saímos. Estruturamos a operação, treinamos pessoas e acompanhamos a execução.</p>
        </div>
        <div className="consultant-service-grid">
          {consultantServices.map(([number, title, description]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className="consultant-fit">
        <div>
          <p className="eyebrow">Para quem é</p>
          <h2>Empresas que já vendem e querem previsibilidade.</h2>
          <p>Se a operação depende de vendedores estrela, metas são batidas no esforço e o funil não tem controle, é hora de estruturar o crescimento.</p>
        </div>
        <ul>
          <li>Vendas sem previsibilidade de faturamento</li>
          <li>Equipe comercial com alta rotatividade</li>
          <li>Metas definidas sem processo para atingi-las</li>
          <li>Funil desconhecido ou não mensurado</li>
          <li>Dificuldade para escalar mantendo qualidade</li>
        </ul>
      </section>

      <section className="consultant-process section-shell">
        <div className="section-heading">
          <p className="eyebrow">Metodologia</p>
          <h2>Como a Start With trabalha com sua empresa.</h2>
        </div>
        <ol className="method-timeline">
          <li><div className="method-index">01</div><div><span>Diagnóstico</span><h3>Clareza sobre o problema.</h3><p>Mapeamos funil, processo, indicadores, time e maturidade comercial.</p></div><ul><li>Gargalos priorizados</li><li>Linha de base</li></ul></li>
          <li><div className="method-index">02</div><div><span>Estratégia</span><h3>Um plano que cabe na operação.</h3><p>Desenhamos estrutura, papéis, SLAs, remuneração, ritos e indicadores.</p></div><ul><li>Plano sob medida</li><li>Responsáveis definidos</li></ul></li>
          <li><div className="method-index">03</div><div><span>Execução</span><h3>Mudança sustentada na rotina.</h3><p>Treinamos, acompanhamos reuniões e ajustamos até o processo ganhar autonomia.</p></div><ul><li>Acompanhamento real</li><li>Melhoria contínua</li></ul></li>
        </ol>
      </section>

      <section className="consultant-proof">
        <div className="consultant-proof-copy"><p className="eyebrow">Por que a Start With</p><h2>Liderança especialista que executa, não só diagnostica.</h2><p>A diferença entre uma apresentação bonita e um resultado real está na execução dentro da operação.</p><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Quero conversar</a></div>
        <div className="consultant-proof-grid"><article><strong>B2B+B2C</strong><span>experiência em modelos comerciais</span></article><article><strong>1.000+</strong><span>vendas/mês gerenciadas</span></article><article><strong>50%</strong><span>de crescimento regional</span></article><article><strong>6+</strong><span>segmentos atendidos</span></article></div>
      </section>

      <section className="faq consultant-faq section-shell">
        <div className="section-heading split-heading"><div><p className="eyebrow">FAQ</p><h2>Dúvidas sobre consultoria comercial.</h2></div><p>Respostas objetivas para decidir se este é o momento certo para estruturar sua operação.</p></div>
        <div className="faq-list">
          {consultantFaqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="contact">
        <div><p className="eyebrow">Próximo passo</p><h2>Fale com a Start With.</h2></div>
        <div><p>Conte um pouco sobre sua operação e marque uma conversa estratégica com a Start With.</p><a className="button button-lime" href={whatsapp} target="_blank" rel="noreferrer">Conversar pelo WhatsApp</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
