import Image from "next/image";
import { FaArrowDown, FaArrowUpRightFromSquare, FaDiamond, FaPlus } from "react-icons/fa6";
import HomeExperience from "./HomeExperience";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import ToolsShowcase from "./ToolsShowcase";
import SolutionCards from "./SolutionCards";
import TransformationCarousel from "./TransformationCarousel";
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
          <p className="eyebrow"><span>01</span> Consultoria comercial com execução</p>
          <h1>Pare de vender no improviso.<span> Construa uma operação que sabe repetir resultados.</span></h1>
          <p className="hero-intro">A Start With diagnostica gargalos, estrutura o processo e entra na rotina do time para transformar esforço comercial em método, gestão e previsibilidade.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={diagnostico} target="_blank" rel="noreferrer">Fazer diagnóstico gratuito <FaArrowUpRightFromSquare aria-hidden="true" /></a>
            <a className="sw-text-action" href="#solucoes">Explorar nossa atuação <FaArrowDown aria-hidden="true" /></a>
          </div>
        </div>

        <div className="sw-hero-visual" aria-label="Profissional da Start With em apresentação">
          <Image src="/renan-retrato-natural.webp" alt="Profissional da Start With apresentando uma estratégia comercial" fill priority sizes="(max-width: 900px) 100vw, 45vw" />
          <div className="sw-photo-wash" aria-hidden="true" />
          <div className="sw-company-bubble">
            <span>O que fazemos</span>
            <strong>Diagnóstico. Processo. Gestão.</strong>
            <p>Da estratégia à execução, dentro da rotina comercial.</p>
          </div>
          <span className="sw-photo-index" aria-hidden="true">SW / 01</span>
        </div>

        <div className="sw-hero-note"><span>Atuação</span><p>Projetos B2B e B2C em Minas Gerais e em todo o Brasil.</p></div>
      </section>

      <div className="sw-ticker" aria-label="Frentes de atuação">
        <div>
          <span>Diagnóstico comercial</span><i><FaDiamond /></i><span>Estruturação de vendas</span><i><FaDiamond /></i><span>Gestão acompanhada</span><i><FaDiamond /></i><span>Treinamento de equipes</span><i><FaDiamond /></i><span>Previsibilidade</span><i><FaDiamond /></i>
          <span>Diagnóstico comercial</span><i><FaDiamond /></i><span>Estruturação de vendas</span><i><FaDiamond /></i><span>Gestão acompanhada</span><i><FaDiamond /></i><span>Treinamento de equipes</span><i><FaDiamond /></i><span>Previsibilidade</span><i><FaDiamond /></i>
        </div>
      </div>

      <section className="sw-manifesto" aria-labelledby="manifesto-title">
        <div className="sw-section-code" data-reveal><span>02 / Ponto de vista</span><i /></div>
        <div className="sw-manifesto-copy" data-reveal>
          <p className="eyebrow">O problema raramente é falta de esforço</p>
          <h2 id="manifesto-title">Seu comercial não precisa de mais pressão.<br /><span>Precisa de arquitetura.</span></h2>
        </div>
        <div className="sw-manifesto-grid">
          <article data-reveal><span>01</span><h3>Enxergar</h3><p>Gargalos de equipe, funil, rotina, indicadores e conversão sem suavizar o diagnóstico.</p></article>
          <article data-reveal><span>02</span><h3>Estruturar</h3><p>Papéis, cadências, metas e ferramentas desenhados para a realidade da operação.</p></article>
          <article data-reveal><span>03</span><h3>Executar</h3><p>Acompanhamento no campo até o novo processo ganhar ritmo, clareza e autonomia.</p></article>
        </div>
      </section>

      <section className="sw-solutions" id="solucoes">
        <div className="sw-solutions-heading" data-reveal>
          <div><p className="eyebrow"><span>03</span> Formas de atuação</p><h2>Três frentes.<br />Uma operação mais forte.</h2></div>
          <p>Entramos no ponto em que sua empresa está agora e construímos o caminho até uma gestão comercial mais previsível.</p>
        </div>
        <SolutionCards services={services} whatsapp={whatsapp} />
      </section>

      <section className="sw-statement" aria-label="Compromisso da Start With" data-reveal>
        <span>Estratégia sem execução é só intenção.</span>
        <strong>A Start With entra na operação para fazer a mudança acontecer.</strong>
      </section>

      <section className="sw-process" id="processo">
        <div className="sw-process-intro" data-reveal>
          <p className="eyebrow"><span>04</span> Método Start With</p>
          <h2>Clareza para decidir.<br /><span>Estrutura para executar.</span></h2>
          <p>Um processo simples de entender, rigoroso na prática e construído com quem vive a rotina.</p>
          <a className="sw-text-action" href={diagnostico} target="_blank" rel="noreferrer">Começar pelo Raio-X <FaArrowUpRightFromSquare aria-hidden="true" /></a>
        </div>
        <ol className="sw-process-steps">
          <li data-reveal><span className="sw-step-number">01</span><div><small>Diagnóstico</small><h3>Entender antes de prescrever.</h3><p>Mapeamos pessoas, processo, funil, rotina, indicadores e oportunidades para definir prioridades reais.</p><ul><li>Raio-X da operação</li><li>Gargalos priorizados</li><li>Plano de ação</li></ul></div></li>
          <li data-reveal><span className="sw-step-number">02</span><div><small>Construção</small><h3>Desenhar o que o time consegue usar.</h3><p>Transformamos estratégia em processo, papéis, cadências, critérios e métricas que cabem na rotina.</p><ul><li>Processo comercial</li><li>Playbook e ritos</li><li>Papéis e indicadores</li></ul></div></li>
          <li data-reveal><span className="sw-step-number">03</span><div><small>Implantação</small><h3>Fazer acontecer no campo.</h3><p>Acompanhamos liderança e equipe para ajustar, consolidar e evoluir a operação até ganhar autonomia.</p><ul><li>Treinamento do time</li><li>Gestão acompanhada</li><li>Melhoria contínua</li></ul></div></li>
        </ol>
      </section>

      <ToolsShowcase ebookHref={ebookWhatsapp} />

      <TransformationCarousel />
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
          <p className="eyebrow"><span>05</span> Quem somos</p>
          <h2>Experiência de operação.<br /><span>Visão de construção.</span></h2>
        </div>
        <div className="sw-about-content">
          <div className="sw-about-visual" data-reveal>
            <Image src="/renan-escritorio.webp" alt="Renan Souza, fundador da Start With, em ambiente de trabalho" fill sizes="(max-width: 980px) 100vw, 48vw" />
            <div className="sw-about-badge"><strong>18 anos</strong><span>vivendo vendas, liderança e gestão comercial</span></div>
          </div>
          <div className="sw-about-copy" data-reveal>
            <p>A Start With nasceu para aproximar estratégia e execução. Nossa equipe reúne <strong>profissionais com trajetória em gestão comercial</strong>, treinamento de equipes e construção de funis em diferentes modelos de negócio.</p>
            <p>A convicção que orienta o trabalho é simples: resultado sustentável não depende de pressão constante. Depende de estrutura, processo e pessoas preparadas para executar.</p>
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
