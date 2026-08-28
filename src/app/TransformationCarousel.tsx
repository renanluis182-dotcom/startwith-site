"use client";

import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const transformations = [
  {
    number: "01",
    before: "Funil operado no feeling",
    after: "Pipeline com etapas e critérios claros",
    text: "A liderança passa a enxergar onde as oportunidades avançam, travam e se perdem.",
  },
  {
    number: "02",
    before: "Resultado dependente de pessoas-chave",
    after: "Processo que o time consegue repetir",
    text: "Papéis, cadências e handoffs reduzem a dependência de esforço individual e improviso.",
  },
  {
    number: "03",
    before: "Cobrança sem direção",
    after: "Gestão orientada por indicadores",
    text: "Metas ganham ritos, responsáveis e dados para apoiar decisões comerciais melhores.",
  },
];

export default function TransformationCarousel() {
  const [active, setActive] = useState(0);
  const swipeStart = useRef<number | null>(null);

  const moveSlide = (direction: -1 | 1) => {
    setActive((current) => (current + direction + transformations.length) % transformations.length);
  };

  const finishSwipe = (clientX: number) => {
    if (swipeStart.current === null) return;
    const distance = clientX - swipeStart.current;
    if (Math.abs(distance) > 45) moveSlide(distance < 0 ? 1 : -1);
    swipeStart.current = null;
  };

  return (
    <section className="sw-transformations" aria-labelledby="transformation-title" data-reveal>
      <div className="sw-transformations-copy">
        <p className="eyebrow"><span>04</span> Transformação da operação</p>
        <h2 id="transformation-title">O que muda quando vendas deixa de ser improviso.</h2>
        <p>Arraste para o lado ou use os controles para navegar pelos cenários.</p>
        <div className="sw-carousel-controls" aria-label="Controles da transformação">
          <button className="sw-carousel-arrow" type="button" aria-label="Transformação anterior" onClick={() => moveSlide(-1)}><FaArrowLeft /></button>
          {transformations.map((item, index) => (
            <button
              className={active === index ? "is-active" : undefined}
              key={item.number}
              type="button"
              aria-label={`Mostrar transformação ${index + 1}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              {item.number}
            </button>
          ))}
          <button className="sw-carousel-arrow" type="button" aria-label="Próxima transformação" onClick={() => moveSlide(1)}><FaArrowRight /></button>
        </div>
        <div className="sw-carousel-status" aria-hidden="true"><span>{String(active + 1).padStart(2, "0")} / {String(transformations.length).padStart(2, "0")}</span><progress max={transformations.length} value={active + 1} /></div>
      </div>

      <div
        className="sw-carousel-window"
        role="group"
        aria-label="Comparativo antes e depois"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") moveSlide(-1);
          if (event.key === "ArrowRight") moveSlide(1);
        }}
        onPointerDown={(event) => {
          swipeStart.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={(event) => finishSwipe(event.clientX)}
        onPointerCancel={() => { swipeStart.current = null; }}
      >
        <div className="sw-carousel-track" style={{ transform: `translateX(-${active * 100}%)` }} aria-live="polite">
          {transformations.map((item, index) => (
            <article className="sw-transformation-card" key={item.number} aria-hidden={index !== active}>
              <span className="sw-transformation-number">{item.number}</span>
              <div className="sw-before-after">
                <div><small>Antes</small><strong>{item.before}</strong></div>
                <span aria-hidden="true"><FaArrowRight /></span>
                <div><small>Depois</small><strong>{item.after}</strong></div>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
