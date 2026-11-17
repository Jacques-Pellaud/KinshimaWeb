"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { ReactNode } from "react";
import "./kinshima.css";

const links = {
  projects: "/les-projets",
  narrative: "/amn",
  league: "/la-ligue-kinshima",
  league2026: "/la-ligue-kinshima/liguekinshima2026",
  clans: "/la-ligue-kinshima/les-clans",
  orders: "/la-ligue-kinshima/les-ordres",
  heralds: "/la-ligue-kinshima/les-h%C3%A9rauts",
  medallion: "/la-ligue-kinshima/guerriers-au-m%C3%A9daillon",
  indraz: "/indraz",
  company: "/la-compagnie-kinyobi",
  hugen: "/hugen",
};

const footerColumns = [
  [
    { label: "Les Projets", href: links.projects },
    { label: "La Ligue Kinshima", href: links.league },
    { label: "Indraz", href: links.indraz },
    { label: "La Compagnie Kinyobi", href: links.company },
    { label: "Arts-martiaux Narratifs", href: links.narrative },
  ],
  [
    { label: "Les Clans", href: links.clans },
    { label: "Arturok", href: `${links.clans}/arturok` },
    { label: "Bragnir", href: `${links.clans}/bragnir` },
    { label: "O-Tsuyujin", href: `${links.clans}/o-tsuyujin` },
    { label: "Seklan", href: `${links.clans}/seklan` },
    { label: "Son-Enma", href: `${links.clans}/son-enma` },
  ],
  [
    { label: "Les Ordres", href: links.orders },
    { label: "Alfherjar", href: `${links.orders}/alfherjar` },
    { label: "Seidrir", href: `${links.orders}/seidrir` },
    { label: "Walfae", href: `${links.orders}/walfae` },
    { label: "Les Hérauts", href: links.heralds },
  ],
  [
    { label: "Le Hugen", href: links.hugen },
    { label: "Photographe", href: "https://paulinemandrinphotographe.ch/" },
    { label: "Contact", href: "#contact" },
  ],
];

export function KinshimaLink({
  children,
  className,
  href,
  onClick,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  href: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  if (href.startsWith("http")) {
    return <a aria-label={ariaLabel} className={className} href={href} onClick={onClick}>{children}</a>;
  }

  return <Link aria-label={ariaLabel} className={className} href={href} onClick={onClick}>{children}</Link>;
}

export function KinshimaNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setExpanded(null);
  };
  const inLeague = pathname.startsWith("/la-ligue-kinshima");
  const inKinshima = pathname === links.projects || pathname === links.narrative || pathname === "/";

  return (
    <header className="site-header">
      <div className="header-utility">
        <a href="#contact">Contact</a>
        <a href="https://youtube.com/@heroeskinshima5248?feature=shared" aria-label="YouTube">
          <Image src="/sites/kinshima/youtube.png" alt="" width={20} height={20} unoptimized />
        </a>
        <a href="https://www.instagram.com/aestir_kinshima/" aria-label="Instagram">
          <Image src="/sites/kinshima/instagram.png" alt="" width={20} height={20} unoptimized />
        </a>
      </div>

      <div className="header-main">
        <Link className="brand" href="/" onClick={closeMenu}>
          <span className="brand-mark">
            <Image src="/sites/kinshima/header-crest.png" alt="" width={54} height={68} priority unoptimized />
          </span>
          <span className="brand-copy">
            <span className="brand-name">Kinshima</span>
            <span className="brand-tagline">L&apos;héroïsme par les arts martiaux</span>
          </span>
        </Link>

        <button
          className={`menu-toggle${isOpen ? " is-open" : ""}`}
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav${isOpen ? " is-open" : ""}`} aria-label="Navigation principale">
          <div className={`nav-group${inKinshima ? " is-current" : ""}`}>
            <Link href="/" onClick={closeMenu}>Kinshima</Link>
            <button
              type="button"
              aria-label="Afficher les pages Kinshima"
              aria-expanded={expanded === "kinshima"}
              onClick={() => setExpanded(expanded === "kinshima" ? null : "kinshima")}
            >
              <span className="nav-caret" />
            </button>
            <div className={`nav-dropdown${expanded === "kinshima" ? " is-expanded" : ""}`}>
              <Link href={links.projects} onClick={closeMenu}>Les Projets</Link>
              <Link href={links.narrative} onClick={closeMenu}>Arts martiaux narratifs</Link>
            </div>
          </div>
          <div className={`nav-group${inLeague ? " is-current" : ""}`}>
            <Link href={links.league} onClick={closeMenu}>La Ligue Kinshima</Link>
            <button
              type="button"
              aria-label="Afficher les pages de la Ligue Kinshima"
              aria-expanded={expanded === "league"}
              onClick={() => setExpanded(expanded === "league" ? null : "league")}
            >
              <span className="nav-caret" />
            </button>
            <div className={`nav-dropdown${expanded === "league" ? " is-expanded" : ""}`}>
              <Link href={links.league2026} onClick={closeMenu}>Ligue Kinshima 2026</Link>
              <Link href={links.clans} onClick={closeMenu}>Les Clans</Link>
              <Link href={links.orders} onClick={closeMenu}>Les Ordres</Link>
              <Link href={links.heralds} onClick={closeMenu}>Les Hérauts</Link>
              <Link href={links.medallion} onClick={closeMenu}>Guerriers au Médaillon</Link>
            </div>
          </div>
          <Link className={pathname === links.indraz ? "nav-link is-current" : "nav-link"} href={links.indraz} onClick={closeMenu}>Indraz</Link>
          <Link className={pathname === links.company ? "nav-link is-current" : "nav-link"} href={links.company} onClick={closeMenu}>La Compagnie</Link>
          <Link className={pathname === links.hugen ? "nav-link is-current" : "nav-link"} href={links.hugen} onClick={closeMenu}>Le Hugen</Link>
        </nav>
      </div>
    </header>
  );
}

export function KinshimaFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-links">
        {footerColumns.map((column, index) => (
          <div className="footer-column" key={`footer-${index}`}>
            {column.map((link) => (
              <KinshimaLink className="footer-link" href={link.href} key={link.label}>
                {link.label}
              </KinshimaLink>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-social">
        <a href="https://youtube.com/@heroeskinshima5248?feature=shared" aria-label="YouTube">
          <Image src="/sites/kinshima/youtube.png" alt="" width={20} height={20} unoptimized />
        </a>
        <a href="https://www.instagram.com/aestir_kinshima/" aria-label="Instagram">
          <Image src="/sites/kinshima/instagram.png" alt="" width={20} height={20} unoptimized />
        </a>
      </div>
      <p className="copyright">©2026 par Kinshima</p>
    </footer>
  );
}

export function KinshimaSiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="kinshima-page">
      <KinshimaNavigation />
      <main className="subpage-main">{children}</main>
      <KinshimaFooter />
    </div>
  );
}
