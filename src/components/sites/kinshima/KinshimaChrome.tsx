"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { KinshimaImage } from "./KinshimaImage";
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

const navigationGroups = [
  {
    id: "kinshima",
    label: "Kinshima",
    href: "/",
    isCurrent: (pathname: string | null) => pathname === "/" || pathname === links.projects || pathname === links.narrative,
    children: [
      { label: "Les Projets", href: links.projects },
      { label: "Arts martiaux narratifs", href: links.narrative },
    ],
  },
  {
    id: "league",
    label: "La Ligue Kinshima",
    href: links.league,
    isCurrent: (pathname: string | null) => pathname?.startsWith("/la-ligue-kinshima") ?? false,
    children: [
      { label: "Ligue Kinshima 2026", href: links.league2026 },
      { label: "Les Clans", href: links.clans },
      { label: "Les Ordres", href: links.orders },
      { label: "Les Hérauts", href: links.heralds },
      { label: "Guerriers au Médaillon", href: links.medallion },
    ],
  },
] as const;

const navigationLinks = [
  { label: "Indraz", href: links.indraz },
  { label: "La Compagnie", href: links.company },
  { label: "Le Hugen", href: links.hugen },
] as const;

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

export function KinshimaNavigation({ onContactClick }: { onContactClick: () => void }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  const closeMenu = () => {
    setIsOpen(false);
    setExpanded(null);
  };

  useEffect(() => {
    if (!isOpen && wasOpenRef.current) menuToggleRef.current?.focus();
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setExpanded(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="header-utility">
        <button className="contact-trigger" type="button" onClick={onContactClick}>Contact</button>
        <a href="https://youtube.com/@heroeskinshima5248?feature=shared" aria-label="YouTube">
          <KinshimaImage src="/sites/kinshima/youtube.png" alt="" width={20} height={20} />
        </a>
        <a href="https://www.instagram.com/aestir_kinshima/" aria-label="Instagram">
          <KinshimaImage src="/sites/kinshima/instagram.png" alt="" width={20} height={20} />
        </a>
      </div>

      <div className="header-main">
        <Link className="brand" href="/" onClick={closeMenu}>
          <span className="brand-mark">
            <KinshimaImage src="/sites/kinshima/header-crest.png" alt="" width={54} height={68} priority />
          </span>
          <span className="brand-copy">
            <span className="brand-name">Kinshima</span>
            <span className="brand-tagline">L&apos;héroïsme par les arts martiaux</span>
          </span>
        </Link>

        <button
          ref={menuToggleRef}
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
          {navigationGroups.map((group) => {
            const isCurrent = group.isCurrent(pathname);
            return (
              <div className={`nav-group${isCurrent ? " is-current" : ""}`} key={group.id}>
                <Link href={group.href} onClick={closeMenu} aria-current={pathname === group.href ? "page" : undefined}>{group.label}</Link>
                <button
                  type="button"
                  aria-label={`Afficher les pages ${group.label}`}
                  aria-controls={`${group.id}-pages`}
                  aria-expanded={expanded === group.id}
                  onClick={() => setExpanded(expanded === group.id ? null : group.id)}
                >
                  <span className="nav-caret" />
                </button>
                <div id={`${group.id}-pages`} className={`nav-dropdown${expanded === group.id ? " is-expanded" : ""}`}>
                  {group.children.map((child) => (
                    <Link
                      href={child.href}
                      onClick={closeMenu}
                      aria-current={pathname === child.href ? "page" : undefined}
                      key={child.href}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          {navigationLinks.map((link) => (
            <Link
              className={pathname === link.href ? "nav-link is-current" : "nav-link"}
              href={link.href}
              onClick={closeMenu}
              aria-current={pathname === link.href ? "page" : undefined}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function ContactDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="contact-dialog"
      aria-labelledby="contact-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="contact-dialog-content">
        <div className="contact-dialog-copy">
          <button className="contact-dialog-close" type="button" aria-label="Fermer la fenêtre de contact" onClick={onClose}>
            <span aria-hidden="true">×</span>
          </button>
          <h2 id="contact-dialog-title">Contact</h2>
          <div className="contact-dialog-rule" />
          <p className="contact-dialog-name">Nicolas Muzzeto,<br />Créateur et directeur :</p>
          <p>Email :<br /><a href="mailto:nicolas.muzzetto@gmail.com">nicolas.muzzetto@gmail.com</a></p>
          <p>Téléphone :<br /><a href="tel:+41792265508">+41 79 226 55 08</a></p>
          <div className="contact-dialog-rule" />
        </div>
        <div className="contact-dialog-image" role="img" aria-label="Nicolas Muzzeto et Roan Morand" />
      </div>
    </dialog>
  );
}

export function KinshimaFooter({ onContactClick }: { onContactClick: () => void }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-links">
        {footerColumns.map((column, index) => (
          <div className="footer-column" key={`footer-${index}`}>
            {column.map((link) => (
              link.label === "Contact" ? (
                <button className="footer-link contact-trigger" key={link.label} type="button" onClick={onContactClick}>{link.label}</button>
              ) : (
                <KinshimaLink className="footer-link" href={link.href} key={link.label}>{link.label}</KinshimaLink>
              )
            ))}
          </div>
        ))}
      </div>
      <div className="footer-social">
        <a href="https://youtube.com/@heroeskinshima5248?feature=shared" aria-label="YouTube">
          <KinshimaImage src="/sites/kinshima/youtube.png" alt="" width={20} height={20} />
        </a>
        <a href="https://www.instagram.com/aestir_kinshima/" aria-label="Instagram">
          <KinshimaImage src="/sites/kinshima/instagram.png" alt="" width={20} height={20} />
        </a>
      </div>
      <p className="copyright">©2026 par Kinshima</p>
    </footer>
  );
}

export function KinshimaSiteFrame({ children }: { children: ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="kinshima-page">
      <a className="skip-link" href="#main-content">Aller au contenu principal</a>
      <KinshimaNavigation onContactClick={() => setIsContactOpen(true)} />
      <main className="subpage-main" id="main-content" tabIndex={-1}>{children}</main>
      <KinshimaFooter onContactClick={() => setIsContactOpen(true)} />
      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
