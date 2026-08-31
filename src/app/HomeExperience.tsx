"use client";

import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare, FaWhatsapp, FaXmark } from "react-icons/fa6";

type HomeExperienceProps = {
  whatsapp: string;
  diagnostico: string;
};

export default function HomeExperience({ whatsapp, diagnostico }: HomeExperienceProps) {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [stickyDismissed, setStickyDismissed] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const prefersReducedMotion = motionQuery.matches;
    const initializationFrame = window.requestAnimationFrame(() => {
      setStickyDismissed(window.sessionStorage.getItem("sw-sticky-dismissed") === "1");
    });

    root.classList.add("motion-ready");
    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    const observer = prefersReducedMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.14 },
        );

    if (observer) revealItems.forEach((item) => observer.observe(item));

    const stickyTrigger = document.getElementById("solucoes");
    const stickyObserver = stickyTrigger
      ? new IntersectionObserver(
          ([entry]) => {
            setStickyVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
          },
          { rootMargin: "-78px 0px 0px 0px", threshold: 0 },
        )
      : null;

    if (stickyTrigger && stickyObserver) stickyObserver.observe(stickyTrigger);

    return () => {
      observer?.disconnect();
      stickyObserver?.disconnect();
      window.cancelAnimationFrame(initializationFrame);
      root.classList.remove("motion-ready");
    };
  }, []);

  const stickyActive = stickyVisible && !stickyDismissed;

  const dismissSticky = () => {
    setStickyDismissed(true);
    window.sessionStorage.setItem("sw-sticky-dismissed", "1");
  };

  return (
    <>
      <aside className={`sw-sticky-cta ${stickyActive ? "is-visible" : ""}`} aria-label="Próximo passo" aria-hidden={!stickyActive} inert={!stickyActive}>
        <div><span>Pronto para enxergar seus gargalos?</span><strong>Comece pelo Raio-X Comercial.</strong></div>
        <a href={diagnostico} target="_blank" rel="noreferrer">Fazer diagnóstico gratuito <FaArrowUpRightFromSquare aria-hidden="true" /></a>
        <a className="sw-sticky-whatsapp" href={whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" /> WhatsApp</a>
        <button type="button" aria-label="Fechar chamada" onClick={dismissSticky}><FaXmark /></button>
      </aside>
    </>
  );
}
