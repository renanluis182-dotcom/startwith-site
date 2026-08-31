import {
  FaArrowUp,
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaThreads,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import { siteLinks } from "@/config/site";

const whatsapp =
  "https://wa.me/5531990176203?text=Ol%C3%A1!%20Quero%20conversar%20com%20a%20Start%20With.";
const crm = "https://crm-app-flame-kappa.vercel.app/#/login";
const diagnostico = siteLinks.diagnostic;

const channels = [
  { label: "LinkedIn", Icon: FaLinkedinIn, tone: "blue", href: "https://www.linkedin.com/company/start-with-%E2%80%93-consultoria-de-neg%C3%B3cios/" },
  { label: "Instagram", Icon: FaInstagram, tone: "purple", href: "https://instagram.com/startwconsultoria" },
  { label: "Threads", Icon: FaThreads, tone: "turquoise", href: "https://www.threads.com/@startwconsultoria" },
  { label: "WhatsApp", Icon: FaWhatsapp, tone: "turquoise", href: whatsapp },
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-intro">
        <Link className="brand footer-brand" href="/#inicio" aria-label="Start With — voltar ao início">
          <span className="brand-mark">S</span>
          <span className="brand-wordmark"><span className="brand-start">Start </span><span className="brand-with">With</span></span>
        </Link>
        <p>Consultoria comercial com execução.</p>
      </div>

      <div className="footer-directory">
        <div>
          <span className="footer-label">Canais</span>
          <nav className="footer-links" aria-label="Canais da Start With">
            {channels.map((channel) => (
              <a href={channel.href} key={channel.label} target="_blank" rel="noreferrer">
                <span className={`channel-symbol channel-${channel.tone}`} aria-hidden="true"><channel.Icon /></span>
                <span>{channel.label}</span>
                <FaArrowUpRightFromSquare className="channel-arrow" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-tools">
          <span className="footer-label">Ferramentas</span>
          <a href={crm} target="_blank" rel="noreferrer"><span className="tool-symbol">CRM</span><span><strong>Acessar o CRM</strong><small>Ambiente de gestão comercial</small></span><FaArrowUpRightFromSquare aria-hidden="true" /></a>
          <a href={diagnostico} target="_blank" rel="noreferrer"><span className="tool-symbol">RX</span><span><strong>Fazer o Raio-X</strong><small>Diagnóstico comercial gratuito</small></span><FaArrowUpRightFromSquare aria-hidden="true" /></a>
        </div>

        <div className="footer-institutional">
          <span className="footer-label">Institucional</span>
          <p><span className="institutional-symbol" aria-hidden="true"><FaLocationDot /></span><span><strong>Minas Gerais</strong><span>Atendimento em todo o Brasil</span></span></p>
          <p><span className="institutional-symbol" aria-hidden="true"><FaEnvelope /></span><span><strong>E-mail</strong><a href="mailto:info@startwithconsultoria.com">info@startwithconsultoria.com</a></span></p>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© 2026 Start With Consultoria. Todos os direitos reservados.</small>
        <Link href="/#inicio">Voltar ao topo <FaArrowUp aria-hidden="true" /></Link>
      </div>
    </footer>
  );
}
