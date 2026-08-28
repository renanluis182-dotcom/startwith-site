import Image from "next/image";
import { FaArrowDown, FaArrowUpRightFromSquare, FaDiamond, FaPlus } from "react-icons/fa6";
import HomeExperience from "./HomeExperience";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import SolutionCards from "./SolutionCards";
import { siteLinks } from "@/config/site";

const whatsapp =
  "https://wa.me/5531990176203?text=Ol%C3%A1!%20Quero%20agendar%20um%20diagn%C3%B3stico%20comercial%20com%20a%20Start%20With.";
const diagnostico = siteLinks.diagnostic;
const ebookWhatsapp =
  "https://wa.me/5531990176203?text=Ol%C3%A1!%20Quero%20receber%20o%20e-book%20A%20jornada%20de%20vendas%20moldada%20por%20BDR%2C%20SDR%20e%20Closer.";

const services = [
  {
    number: "01",
    title: "Raio-X Comercial",
    label: "Clareza",
    description: "Uma leitura objetiva da operação para localizar onde pessoas, processo e funil estão perdendo força.",
    items: ["Equipe e papéis", "Funil e conversão", "Rotina e indicadores"],
  },
  {
    number: "02",
    title: "Estruturação Comercial",
    label: "Arquitetura",
    description: "Redesenho da jornada comercial, da atração do lead ao fechamento e ao acompanhamento pós-venda.",
    items: ["Processo documentado", "Cadências e playbook", "Metas e gestão"],
  },
  {
    number: "03",
    title: "Gestão Acompanhada",
    label: "Execução",
    description: "Acompanhamento ao lado da liderança para implantar a mudança, desenvolver o time e sustentar a rotina.",
    items: ["Ritos de gestão", "Análise de resultados", "Desenvolvimento do time"],
  },
];

const faqs = [
  {
    question: "Para quem a consultoria é indicada?",
    answer: "Para empresas que já vendem, mas dependem demais do esforço individual, têm baixa previsibilidade ou precisam reorganizar equipe, processo, funil e gestão.",
  },
  {
    question: "Vocês executam junto ou só entregam um relatório?",
    answer: "A Start With entra na operação. O diagnóstico orienta o plano, mas o trabalho continua na implantação, nos ritos de gestão e no acompanhamento do time.",
  },
  {
    question: "Quanto tempo leva para ver resultado?",
    answer: "O prazo depende do estágio da operação e dos gargalos encontrados. Os primeiros ajustes podem acontecer rapidamente, enquanto mudanças estruturais exigem ciclos de implantação e acompanhamento.",
  },
  {
    question: "Atendem empresas fora de Minas Gerais?",
    answer: "Sim. Os projetos podem ser conduzidos de forma remota, presencial ou híbrida em todo o Brasil, conforme a necessidade da operação.",
  },
];

export default function Home() {
  return (
    <main className="home-redesign">
      <div className="sw-grain" aria-hidden="true" />
      <SiteHeader />

      <section className="sw-hero" id="inicio">
        <div className="sw-hero-grid" aria-hidden="true" />
        <div className="sw-hero-copy">
          <p className="eyebrow"><span>01</span> Consultoria liderada por especialista</p>
          <h1>Pare de vender no improviso.<span> Estruture uma operação que repete resultados.</span></h1>
          <p className="hero-intro">Diagnóstico, processo e acompanhamento comercial para transformar esforço em previsibilidade.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={diagnostico} target="_blank" rel="noreferrer">Fazer diagnóstico gratuito <FaArrowUpRightFromSquare aria-hidden="true" /></a>
            <a className="sw-text-action" href="#solucoes">Explorar nossa atuação <FaArrowDown aria-hidden="true" /></a>
          </div>
        </div>

        <div className="sw-hero-visual" aria-label="Renan Souza, especialista à frente da Start With">
          <Image src="/renan-retrato-natural.webp" alt="Renan Souza, especialista em vendas e gestão comercial" fill priority sizes="(max-width: 900px) 100vw, 45vw" />
          <div className="sw-photo-wash" aria-hidden="true" />
          <div className="sw-company-bubble">
            <span>À frente da consultoria</span>
            <strong>Renan Souza</strong>
            <p>18 anos em vendas, liderança e gestão comercial.</p>
          </div>
          <span className="sw-photo-index" aria-hidden="true">SW / 01</span>
        </div>

        <div className="sw-hero-note"><span>Atuação</span><p>Projetos B2B e B2C em Minas Gerais e em todo o Brasil.</p></div>
      </section>

      <section className="sw-proof-strip" aria-label="Experiência do especialista">
        <p><span>Liderança técnica</span><strong>Renan Souza</strong></p>
        <p><span>Experiência</span><strong>18 anos</strong></p>
        <p><span>Vivência</span><strong>6+ segmentos</strong></p>
        <p><span>Atuação</span><strong>Minas Gerais + Brasil</strong></p>
      </section>

      <div className="sw-ticker" aria-label="Frentes de atuação">
        <div>
          <span>Diagnóstico comercial</span><i><FaDiamond /></i><span>Estruturação de vendas</span><i><FaDiamond /></i><span>Gestão acompanhada</span><i><FaDiamond /></i><span>Treinamento de equipes</span><i><FaDiamond /></i><span>Previsibilidade</span><i><FaDiamond /></i>
          <span>Diagnóstico comercial</span><i><FaDiamond /></i><span>Estruturação de vendas</span><i><FaDiamond /></i><span>Gestão acompanhada</span><i><FaDiamond /></i><span>Treinamento de equipes</span><i><FaDiamond /></i><span>Previsibilidade</span><i><FaDiamond /></i>
        </div>
      </div>

      <section className="sw-solutions" id="solucoes">
        <div className="sw-solutions-heading" data-reveal>
          <div><p className="eyebrow"><span>02</span> Formas de atuação</p><h2>O que entregamos<br />em cada etapa.</h2></div>
          <p>Diagnóstico, estruturação e gestão acompanhada, conforme o estágio da operação.</p>
        </div>
        <SolutionCards services={services} whatsapp={whatsapp} />
      </section>

      <section className="sw-process" id="processo">
        <div className="sw-process-intro" data-reveal>
          <p className="eyebrow"><span>03</span> Método Start With</p>
          <h2>Diagnosticar.<br /><span>Estruturar. Implantar.</span></h2>
          <p>Três etapas, com responsáveis e entregáveis definidos.</p>
          <a className="sw-text-action" href={diagnostico} target="_blank" rel="noreferrer">Começar pelo Raio-X <FaArrowUpRightFromSquare aria-hidden="true" /></a>
        </div>
        <ol className="sw-process-steps">
          <li data-reveal><span className="sw-step-number">01</span><div><small>Diagnóstico</small><h3>Priorizar os gargalos.</h3><p>Leitura de pessoas, processo, funil, rotina e indicadores.</p><ul><li>Raio-X da operação</li><li>Gargalos priorizados</li><li>Plano de ação</li></ul></div></li>
          <li data-reveal><span className="sw-step-number">02</span><div><small>Construção</small><h3>Desenhar o processo.</h3><p>Papéis, cadências, critérios e métricas aplicáveis à rotina.</p><ul><li>Processo comercial</li><li>Playbook e ritos</li><li>Papéis e indicadores</li></ul></div></li>
          <li data-reveal><span className="sw-step-number">03</span><div><small>Implantação</small><h3>Colocar em operação.</h3><p>Acompanhamento da liderança e do time até o processo ganhar autonomia.</p><ul><li>Treinamento do time</li><li>Gestão acompanhada</li><li>Melhoria contínua</li></ul></div></li>
        </ol>
      </section>

      <section className="sw-deliverables" aria-labelledby="deliverables-title">
        <div className="sw-deliverables-heading" data-reveal>
          <p className="eyebrow"><span>04</span> Entregáveis concretos</p>
          <h2 id="deliverables-title">O que fica na sua operação.</h2>
          <p>Materiais de trabalho, não apresentações para arquivar.</p>
        </div>
        <div className="sw-deliverables-grid">
          <article data-reveal><span>01</span><h3>Dashboard comercial</h3><p>Funil, conversão, volume, ritmo e prioridades de acompanhamento.</p></article>
          <article data-reveal><span>02</span><h3>Playbook de vendas</h3><p>Papéis, critérios, cadências, perguntas e próximos passos.</p></article>
          <article data-reveal><span>03</span><h3>Rotina de gestão</h3><p>Ritos, pautas, responsáveis, indicadores e decisões.</p></article>
          <article data-reveal><span>04</span><h3>Plano de ação</h3><p>Prioridades, responsáveis, prazos e critérios de avanço.</p></article>
        </div>
      </section>

      <HomeExperience whatsapp={whatsapp} diagnostico={diagnostico} />

      <section className="sw-diagnostic" data-reveal>
        <div className="sw-diagnostic-copy">
          <span className="sw-diagnostic-code">START / RAIO-X</span>
          <p className="eyebrow">Diagnóstico gratuito</p>
          <h2>Descubra onde sua operação comercial está travando.</h2>
          <p>Em menos de cinco minutos, você recebe uma primeira leitura sobre equipe, processo, funil e conversão.</p>
        </div>
        <div className="sw-diagnostic-action">
          <span className="sw-diagnostic-time">05<small>min</small></span>
          <ul><li>Visão dos principais gargalos</li><li>Leitura imediata</li><li>Sem compromisso</li></ul>
          <a className="button button-light" href={diagnostico} target="_blank" rel="noreferrer">Fazer meu Raio-X <FaArrowUpRightFromSquare aria-hidden="true" /></a>
        </div>
      </section>

      <section className="sw-ebook" id="ebook">
        <div className="sw-ebook-art" data-reveal>
          <span className="sw-ebook-kicker">Guia prático / 2026</span>
          <div><small>A jornada de vendas moldada por</small><strong>BDR.<br />SDR.<br />CLOSER.</strong></div>
          <span className="sw-ebook-bottom">14 perguntas para diagnosticar o funil</span>
        </div>
        <div className="sw-ebook-copy" data-reveal>
          <p className="eyebrow">Conteúdo para aplicar</p>
          <h2>Seu funil pode estar vazando antes mesmo da proposta.</h2>
          <p>Receba o guia com um autodiagnóstico de 14 perguntas para entender se sua operação depende de pessoas ou de processo.</p>
          <ul><li>Papéis, handoff e métricas por função</li><li>Remuneração sem distorcer o funil</li><li>Plano de implantação de 90 dias</li></ul>
          <a className="button button-primary" href={ebookWhatsapp} target="_blank" rel="noreferrer">Receber o e-book <FaArrowUpRightFromSquare aria-hidden="true" /></a>
        </div>
      </section>

      <section className="sw-about" id="sobre">
        <div className="sw-about-heading" data-reveal>
          <p className="eyebrow"><span>05</span> Liderança especialista</p>
          <h2>Consultoria liderada<br /><span>por Renan Souza.</span></h2>
        </div>
        <div className="sw-about-content">
          <div className="sw-about-visual" data-reveal>
            <Image src="/renan-escritorio.webp" alt="Renan Souza, fundador da Start With, em ambiente de trabalho" fill sizes="(max-width: 980px) 100vw, 48vw" />
            <div className="sw-about-badge"><strong>18 anos</strong><span>vivendo vendas, liderança e gestão comercial</span></div>
          </div>
          <div className="sw-about-copy" data-reveal>
            <p>A Start With é conduzida por <strong>Renan Souza</strong>, com 18 anos de atuação em vendas, liderança e gestão comercial. O trabalho combina diagnóstico, construção do processo e acompanhamento da execução.</p>
            <blockquote>“Nosso trabalho só termina quando a estratégia consegue viver na rotina do time.”</blockquote>
          </div>
        </div>
        <div className="sw-about-results" aria-label="Experiência acumulada pelos profissionais da Start With">
          <article data-reveal><strong>18</strong><span>anos em vendas e gestão</span></article>
          <article data-reveal><strong>1.000+</strong><span>vendas por mês gerenciadas</span></article>
          <article data-reveal><strong>50%</strong><span>de crescimento regional em 12 meses</span></article>
          <article data-reveal><strong>6+</strong><span>segmentos vivenciados</span></article>
        </div>
      </section>

      <section className="sw-faq" aria-labelledby="faq-title">
        <div className="sw-faq-heading" data-reveal><p className="eyebrow">Antes de começar</p><h2 id="faq-title">Perguntas diretas.<br />Respostas também.</h2></div>
        <div className="sw-faq-list" data-reveal>
          {faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<i aria-hidden="true"><FaPlus /></i></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="sw-contact" id="contato" data-reveal>
        <span className="sw-contact-orbit" aria-hidden="true">S</span>
        <p className="eyebrow">Próximo passo</p>
        <h2>Vamos transformar esforço comercial em processo?</h2>
        <p>Uma conversa direta para entender seu momento e avaliar onde a Start With pode entrar.</p>
        <div><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Falar com a Start With <FaArrowUpRightFromSquare aria-hidden="true" /></a><a href={diagnostico} target="_blank" rel="noreferrer">Ou faça o Raio-X gratuito</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
