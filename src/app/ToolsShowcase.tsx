"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ToolItem = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  items: string[];
  cta: string;
  href: string;
};

type ToolsShowcaseProps = {
  ebookHref: string;
};

export default function ToolsShowcase({ ebookHref }: ToolsShowcaseProps) {
  const tools: ToolItem[] = [
    {
      id: "raio-x",
      eyebrow: "Diagnóstico",
      title: "Descubra onde sua operação comercial está travando",
      description:
        "O Raio-X Comercial avalia pontos essenciais da operação e ajuda a identificar prioridades para transformar diagnóstico em ação.",
      image: "/mockups/raio-x-comercial-mockup.png",
      imageAlt: "Raio-X Comercial Start With apresentado em notebook e celular",
      width: 1715,
      height: 917,
      items: [
        "Diagnóstico estruturado",
        "Identificação de prioridades",
        "Visão executiva da operação",
        "Resultado confidencial",
      ],
      cta: "Fazer meu Raio-X",
      href: "https://raiox-startwith.vercel.app/",
    },
    {
      id: "crm",
      eyebrow: "Tecnologia",
      title: "Organize a operação e acompanhe cada oportunidade",
      description:
        "O CRM Start With centraliza o acompanhamento comercial e proporciona mais clareza sobre clientes, oportunidades e evolução da operação.",
      image: "/mockups/crm-startwith-mockup.png",
      imageAlt: "Tela de acesso do CRM Start With apresentada em monitor e tablet",
      width: 1642,
      height: 958,
      items: [
        "Organização do processo comercial",
        "Acompanhamento de oportunidades",
        "Gestão da rotina",
        "Visibilidade da operação",
      ],
      cta: "Acessar o CRM",
      href: "https://crm-app-flame-kappa.vercel.app/#/login",
    },
    {
      id: "ebook",
      eyebrow: "Conhecimento",
      title: "Estruture uma jornada de vendas mais previsível",
      description:
        "Um guia prático para pequenas e médias empresas organizarem os papéis de BDR, SDR e Closer dentro do processo comercial.",
      image: "/mockups/ebook-jornada-vendas-mockup.png",
      imageAlt: "E-book A jornada de vendas moldada por BDR, SDR e Closer em mockup editorial",
      width: 1536,
      height: 1024,
      items: [
        "Organização dos papéis comerciais",
        "Estruturação do funil",
        "Handoffs entre profissionais",
        "Métricas e plano de implantação",
      ],
      cta: "Conhecer o e-book",
      href: ebookHref,
    },
  ];

  const [activeItem, setActiveItem] = useState<ToolItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeItem && !dialog.open) {
      dialog.showModal();
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key !== "Escape") return;
        event.preventDefault();
        setActiveItem(null);
        window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
      };

      document.addEventListener("keydown", handleEscape, true);
      return () => document.removeEventListener("keydown", handleEscape, true);
    } else if (!activeItem && dialog.open) {
      dialog.close();
    }
  }, [activeItem]);

  const closePreview = () => {
    setActiveItem(null);
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  return (
    <section className="sw-tools" id="ferramentas" aria-labelledby="tools-title">
      <div className="sw-tools-heading" data-reveal>
        <div>
          <p className="eyebrow">Ecossistema Start With</p>
          <h2 id="tools-title">Ferramentas para transformar estratégia em execução.</h2>
        </div>
        <p>Diagnóstico, tecnologia e conhecimento aplicados à rotina comercial da sua empresa.</p>
      </div>

      <div className="sw-tools-list">
        {tools.map((tool, index) => (
          <article className={`sw-tool-row ${index % 2 === 1 ? "is-reverse" : ""}`} key={tool.id} data-reveal>
            <button
              className="sw-tool-media"
              type="button"
              aria-label={`Ampliar imagem de ${tool.eyebrow}`}
              onClick={(event) => {
                lastTriggerRef.current = event.currentTarget;
                setActiveItem(tool);
              }}
            >
              <Image
                src={tool.image}
                alt={tool.imageAlt}
                width={tool.width}
                height={tool.height}
                sizes="(max-width: 1060px) 100vw, 55vw"
              />
              <span>Ampliar imagem <i aria-hidden="true">↗</i></span>
            </button>

            <div className="sw-tool-copy">
              <p className="sw-tool-eyebrow">{tool.eyebrow}</p>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <ul>
                {tool.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={tool.href} target="_blank" rel="noreferrer">
                {tool.cta} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <dialog
        className="sw-tool-dialog"
        ref={dialogRef}
        aria-labelledby="tool-dialog-title"
        onCancel={(event) => {
          event.preventDefault();
          closePreview();
        }}
        onClose={() => {
          if (activeItem) setActiveItem(null);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closePreview();
        }}
      >
        {activeItem && (
          <div className="sw-tool-dialog-content">
            <div className="sw-tool-dialog-bar">
              <div>
                <span>{activeItem.eyebrow}</span>
                <strong id="tool-dialog-title">{activeItem.title}</strong>
              </div>
              <button type="button" onClick={closePreview} aria-label="Fechar imagem ampliada">×</button>
            </div>
            <Image
              src={activeItem.image}
              alt={activeItem.imageAlt}
              width={activeItem.width}
              height={activeItem.height}
              sizes="95vw"
            />
          </div>
        )}
      </dialog>
    </section>
  );
}
