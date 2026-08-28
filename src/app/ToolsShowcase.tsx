"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowUpRightFromSquare, FaMagnifyingGlassPlus, FaXmark } from "react-icons/fa6";

type Tool = {
  id: string;
  index: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  width: number;
  height: number;
  alt: string;
};

type ToolsShowcaseProps = {
  diagnosticHref: string;
  crmHref: string;
  materialsHref: string;
};

export default function ToolsShowcase({ diagnosticHref, crmHref, materialsHref }: ToolsShowcaseProps) {
  const tools: Tool[] = [
    {
      id: "raio-x-comercial",
      index: "01",
      title: "Raio-X Comercial",
      description: "Descubra os principais gargalos da sua operação comercial em poucos minutos.",
      cta: "Fazer o Raio-X gratuito",
      href: diagnosticHref,
      image: "/ferramenta-raio-x.webp",
      width: 1715,
      height: 917,
      alt: "Raio-X Comercial da Start With exibido em notebook e celular, com diagnóstico estratégico da operação comercial.",
    },
    {
      id: "crm-start-with",
      index: "02",
      title: "CRM Start With",
      description: "Organize oportunidades, acompanhe o funil e transforme dados comerciais em decisões.",
      cta: "Acessar o CRM",
      href: crmHref,
      image: "/ferramenta-crm.webp",
      width: 1642,
      height: 958,
      alt: "Tela real de acesso ao CRM Start With apresentada em monitor e tablet, sem dados pessoais preenchidos.",
    },
    {
      id: "ebooks-materiais",
      index: "03",
      title: "E-books e materiais",
      description: "Conteúdos práticos para estruturar processos, pessoas e resultados comerciais.",
      cta: "Conhecer os materiais",
      href: materialsHref,
      image: "/material-ebook-jornada-vendas.webp",
      width: 1536,
      height: 1024,
      alt: "E-book Start With A jornada de vendas moldada por BDR, SDR e Closer apresentado como livro físico.",
    },
  ];

  const [activeTool, setActiveTool] = useState<Tool | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!activeTool) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveTool(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
      lastTriggerRef.current?.focus();
    };
  }, [activeTool]);

  const openPreview = (tool: Tool, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setActiveTool(tool);
  };

  return (
    <section className="sw-tools" id="ferramentas" aria-labelledby="tools-title">
      <div className="sw-tools-heading" data-reveal>
        <p className="eyebrow"><span>05</span> Estrutura para executar</p>
        <h2 id="tools-title">Ferramentas e conteúdos Start With</h2>
        <p>Tecnologia e materiais próprios para transformar diagnóstico em rotina comercial.</p>
      </div>

      <div className="sw-tools-list">
        {tools.map((tool, index) => (
          <article className={`sw-tool ${index % 2 === 1 ? "sw-tool-reverse" : ""}`} id={tool.id} key={tool.id}>
            <button
              className="sw-tool-media"
              type="button"
              onClick={(event) => openPreview(tool, event.currentTarget)}
              aria-label={`Ampliar imagem de ${tool.title}`}
            >
              <Image src={tool.image} alt={tool.alt} width={tool.width} height={tool.height} sizes="(max-width: 760px) 100vw, 62vw" />
              <span className="sw-tool-zoom"><FaMagnifyingGlassPlus aria-hidden="true" /> Ampliar</span>
            </button>
            <div className="sw-tool-copy" data-reveal>
              <span className="sw-tool-index">SW / {tool.index}</span>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <a className="button button-light" href={tool.href} target="_blank" rel="noreferrer">
                {tool.cta} <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {activeTool && (
        <div className="sw-lightbox" role="dialog" aria-modal="true" aria-labelledby="sw-lightbox-title" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setActiveTool(null);
        }}>
          <div className="sw-lightbox-panel">
            <div className="sw-lightbox-bar">
              <p id="sw-lightbox-title">{activeTool.title}</p>
              <button ref={closeButtonRef} type="button" onClick={() => setActiveTool(null)} aria-label="Fechar imagem ampliada"><FaXmark aria-hidden="true" /></button>
            </div>
            <Image src={activeTool.image} alt={activeTool.alt} width={activeTool.width} height={activeTool.height} sizes="96vw" priority />
          </div>
        </div>
      )}
    </section>
  );
}
