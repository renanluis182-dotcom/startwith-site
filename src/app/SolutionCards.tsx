"use client";

import { useRef, useState } from "react";
import { FaArrowUpRightFromSquare, FaXmark } from "react-icons/fa6";

type Service = {
  number: string;
  title: string;
  label: string;
  description: string;
  items: string[];
};

type SolutionCardsProps = {
  services: Service[];
  whatsapp: string;
};

export default function SolutionCards({ services, whatsapp }: SolutionCardsProps) {
  const [openCard, setOpenCard] = useState<string | null>(null);
  const cueButtons = useRef<Record<string, HTMLButtonElement | null>>({});
  const closeButtons = useRef<Record<string, HTMLButtonElement | null>>({});

  const openSolution = (number: string) => {
    setOpenCard(number);
    window.requestAnimationFrame(() => closeButtons.current[number]?.focus());
  };

  const closeSolution = (number: string) => {
    setOpenCard(null);
    window.requestAnimationFrame(() => cueButtons.current[number]?.focus());
  };

  return (
    <div className="sw-solution-grid">
      {services.map((service) => {
        const isOpen = openCard === service.number;

        return (
          <article className={`sw-solution-card${isOpen ? " is-open" : ""}`} key={service.number} data-reveal>
            <div className="sw-solution-front">
              <div className="sw-solution-topline"><span>{service.number}</span><small>{service.label}</small></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button
                ref={(element) => { cueButtons.current[service.number] = element; }}
                className="sw-card-cue"
                type="button"
                aria-expanded={isOpen}
                aria-controls={`solution-${service.number}`}
                onClick={() => isOpen ? closeSolution(service.number) : openSolution(service.number)}
              >
                Ver entregáveis <FaArrowUpRightFromSquare aria-hidden="true" />
              </button>
            </div>
            <div className="sw-solution-reveal" id={`solution-${service.number}`} aria-hidden={!isOpen} inert={!isOpen}>
              <div className="sw-solution-reveal-topline">
                <span>O que colocamos em movimento</span>
                <button ref={(element) => { closeButtons.current[service.number] = element; }} type="button" aria-label={`Fechar entregáveis de ${service.title}`} onClick={() => closeSolution(service.number)}><FaXmark /></button>
              </div>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <a href={whatsapp} target="_blank" rel="noreferrer">Conversar sobre esta frente <FaArrowUpRightFromSquare aria-hidden="true" /></a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
