"use client";

import { useEffect, useRef, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Link from "next/link";
import { siteLinks } from "@/config/site";

const whatsapp =
  "https://wa.me/5531990176203?text=Ol%C3%A1!%20Quero%20conversar%20com%20a%20Start%20With.";
const diagnostico = siteLinks.diagnostic;

const navigation = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "E-book", href: "/#ebook" },
  { label: "CRM", href: "https://crm-app-flame-kappa.vercel.app/#/login", featured: true, external: true },
  { label: "Processo", href: "/#processo" },
  { label: "Contato", href: "/#contato" },
  { label: "Consultor Comercial", href: "/consultor-comercial" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateHeader = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      header.current?.style.setProperty("--scroll-progress", `${progress * 100}%`);
      header.current?.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateHeader();
        frame = 0;
      });
    };

    updateHeader();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (window.location.pathname !== "/") {
      const frame = window.requestAnimationFrame(() => setActiveHref(window.location.pathname));
      return () => window.cancelAnimationFrame(frame);
    }

    const sectionLinks = navigation.filter((item) => item.href.startsWith("/#"));
    const sections = sectionLinks
      .map((item) => ({ href: item.href, element: document.getElementById(item.href.replace("/#", "")) }))
      .filter((item): item is { href: string; element: HTMLElement } => Boolean(item.element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveHref(`/#${visible.target.id}`);
      },
      { rootMargin: "-28% 0px -62% 0px", threshold: 0 },
    );

    sections.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = menuButton.current;
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = Array.from(menuPanel.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
      const first = focusable[0];
      const last = focusable.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyboard);
    closeButton.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyboard);
      trigger?.focus();
    };
  }, [open]);

  return (
    <header className="site-header" ref={header}>
      <span className="site-scroll-progress" aria-hidden="true" />
      <Link className="brand" href="/#inicio" aria-label="Start With — início">
        <span className="brand-mark">S</span>
        <span className="brand-wordmark"><span className="brand-start">Start </span><span className="brand-with">With</span></span>
      </Link>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <a
            className={item.featured ? "nav-featured" : undefined}
            href={item.href}
            key={item.label}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            aria-current={activeHref === item.href ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="header-cta" href={diagnostico} target="_blank" rel="noreferrer">
          Fazer Raio-X
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(true)}
        >
          <FaBars aria-hidden="true" />
        </button>
      </div>

      {open && (
        <div className="mobile-menu-layer">
          <button className="mobile-menu-backdrop" type="button" aria-label="Fechar menu" onClick={() => setOpen(false)} />
          <aside className="mobile-menu-panel" id="mobile-navigation" aria-label="Menu mobile" aria-modal="true" role="dialog" ref={menuPanel}>
            <div className="mobile-menu-topline">
              <span>Menu</span>
              <button ref={closeButton} className="mobile-menu-close" type="button" aria-label="Fechar menu" onClick={() => setOpen(false)}><FaXmark aria-hidden="true" /></button>
            </div>
            <nav aria-label="Navegação mobile">
              {navigation.map((item, index) => (
                <a
                  className={item.featured ? "nav-featured" : undefined}
                  href={item.href}
                  key={item.label}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
                </a>
              ))}
            </nav>
            <div className="mobile-menu-actions">
              <a className="button button-primary mobile-menu-cta" href={diagnostico} target="_blank" rel="noreferrer">Fazer Raio-X gratuito</a>
              <a className="mobile-whatsapp-link" href={whatsapp} target="_blank" rel="noreferrer">Conversar pelo WhatsApp ↗</a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
