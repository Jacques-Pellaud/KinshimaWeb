"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { ContactDialog, KinshimaFooter, KinshimaLink, KinshimaNavigation } from "./KinshimaChrome";
import { KinshimaImage } from "./KinshimaImage";

const projects = [
  {
    title: "Ligue Kinshima 2026",
    image: "/sites/kinshima/league-crowd.jpg",
    href: "/la-ligue-kinshima/liguekinshima2026",
    alt: "Les participants de la Ligue Kinshima",
  },
  {
    title: "Choisis ton Clan",
    image: "/sites/kinshima/clan-carousel.png",
    href: "/la-ligue-kinshima/les-clans",
    alt: "Les personnages des différents clans de Kinshima",
  },
  {
    title: "Arts Martiaux Narratifs",
    image: "/sites/kinshima/narratifs-carousel.jpg",
    href: "/amn",
    alt: "Une rencontre autour des arts martiaux narratifs",
  },
];

const links = {
  projects: "/les-projets",
  narrative: "/amn",
  league: "/la-ligue-kinshima",
  indraz: "/indraz",
  company: "/la-compagnie-kinyobi",
  hugen: "/hugen",
};

function SiteImage({
  alt,
  className,
  priority = false,
  sizes = "100vw",
  src,
}: {
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  src: string;
}) {
  return (
    <KinshimaImage
      alt={alt}
      className={className}
      fill
      priority={priority}
      sizes={sizes}
      src={src}
    />
  );
}

function ProjectLink({ children, href, className = "" }: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <KinshimaLink className={`project-link ${className}`} href={href}>
      {children}
    </KinshimaLink>
  );
}

function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProject = projects[activeIndex];

  const move = (direction: number) => {
    setActiveIndex((index) => (index + direction + projects.length) % projects.length);
  };

  return (
    <section
      className="project-carousel"
      aria-label="Les projets Kinshima"
      aria-roledescription="carrousel"
      data-slide={activeIndex}
    >
      <SiteImage
        className="carousel-image"
        src={currentProject.image}
        alt={currentProject.alt}
      />
      <button className="carousel-arrow previous" type="button" aria-label="Précédent" onClick={() => move(-1)}>
        <span />
      </button>
      <KinshimaLink className="carousel-title" href={currentProject.href}>{currentProject.title}</KinshimaLink>
      <button className="carousel-arrow next" type="button" aria-label="Suivant" onClick={() => move(1)}>
        <span />
      </button>
      <div className="carousel-dots" aria-label="Choisir un projet">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            aria-label={`Afficher : ${project.title}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <p className="visually-hidden" role="status" aria-live="polite">
        Projet {activeIndex + 1} sur {projects.length} : {currentProject.title}
      </p>
    </section>
  );
}

export default function KinshimaHome() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="kinshima-page">
      <a className="skip-link" href="#main-content">Aller au contenu principal</a>
      <KinshimaNavigation onContactClick={() => setIsContactOpen(true)} />

      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-label="Bienvenue dans l'univers Kinshima">
          <SiteImage
            className="hero-image"
            src="/sites/kinshima/hero-wallpaper.jpg"
            alt="Une jeune héroïne devant l'emblème de Kinshima"
            priority
          />
          <div className="hero-copy">
            <h1>Enflammez<br />votre cœur&nbsp;!</h1>
            <p>Et devenez un héro de Kinshima</p>
          </div>
        </section>

        <section className="introduction" aria-labelledby="intro-title">
          <div className="intro-heading">
            <h2 id="intro-title">Kinshima</h2>
            <p>Les arts martiaux au cœur de votre épopée</p>
          </div>
          <div className="intro-panel">
            <div className="intro-photo">
              <SiteImage
                src="/sites/kinshima/intro-karateka.jpg"
                alt="Un pratiquant de Kinshima en tenue blanche, entouré d'armures de samouraï"
              />
            </div>
            <div className="intro-invitation">
              <KinshimaImage className="intro-mark" src="/sites/kinshima/alphanos-mark.png" alt="" fill />
              <div className="intro-message">
                <p>Kinshima, c&apos;est une quête.<br />La tienne commence ici.</p>
                <p>Es-tu prêt à entrer dans la légende&nbsp;?</p>
                <ProjectLink href={links.projects} className="intro-button">Nos projets</ProjectLink>
              </div>
            </div>
          </div>
        </section>

        <ProjectCarousel />

        <section className="odyssey" aria-labelledby="odyssey-title">
          <div className="odyssey-image">
            <SiteImage
              src="/sites/kinshima/dojo-banner.jpg"
              alt="Un entraînement de combat scénique dans un dojo"
            />
          </div>
          <KinshimaImage className="odyssey-crest" src="/sites/kinshima/kinshima-crest.png" alt="" width={220} height={220} />
          <div className="odyssey-heading">
            <h2 id="odyssey-title">Une Odyssée en trois aventures</h2>
          </div>
          <div className="adventure-cards">
            <article className="adventure-card">
              <h3>Pour s&apos;inspirer</h3>
              <KinshimaImage src="/sites/kinshima/indraz-mark.png" alt="Indraz" width={186} height={175} />
              <ProjectLink href={links.indraz}>Embarquez pour Indraz</ProjectLink>
            </article>
            <article className="adventure-card">
              <h3>Pour se rassembler</h3>
              <KinshimaImage src="/sites/kinshima/league-crest.png" alt="Blason de la Ligue Kinshima" width={220} height={173} />
              <ProjectLink href={links.league}>Rejoignez la Ligue</ProjectLink>
            </article>
            <article className="adventure-card">
              <h3>Pour s&apos;élever</h3>
              <KinshimaImage src="/sites/kinshima/kinyobi-mark.png" alt="Logo des Kinyobis" width={163} height={175} />
              <ProjectLink href={links.company}>Rencontrez la Compagnie</ProjectLink>
            </article>
          </div>
        </section>

        <section className="league-story" aria-labelledby="league-title">
          <div className="league-banner">
            <SiteImage src="/sites/kinshima/league-action.jpg" alt="Les élèves de la Ligue s'entraînent dans un gymnase" />
            <KinshimaImage className="league-wordmark" src="/sites/kinshima/league-wordmark.png" alt="La Ligue Kinshima" fill />
          </div>
          <div className="league-copy">
            <div className="league-text">
              <h2 id="league-title">Où l’histoire se forge à travers le combat, la quête et l&apos;amitié.</h2>
              <p>Pendant quatre jours, la Ligue Kinshima vous plonge dans un univers où les arts martiaux rencontrent l’aventure.</p>
              <p>Rejoignez un clan, relevez des défis et écrivez votre propre légende au cœur d’une épopée unique.</p>
              <p>Ici, la maîtrise, la camaraderie et le dépassement de soi sont au centre de chaque épreuve. Plus qu’un camp, c’est une communauté soudée par la passion et l’honneur. Êtes-vous prêt à entrer dans la légende&nbsp;?</p>
              <ProjectLink href={links.league}>Rejoindre la Ligue</ProjectLink>
            </div>
            <div className="league-photo">
              <SiteImage
                src="/sites/kinshima/league-training.jpg"
                alt="Des enfants et des adultes s'entraînent ensemble à la Ligue Kinshima"
              />
            </div>
          </div>
        </section>

        <section className="indraz-story" aria-labelledby="indraz-title">
          <div className="indraz-prologue">
            <SiteImage src="/sites/kinshima/indraz-prologue.png" alt="L'univers d'Indraz, entre aventure et combats" />
            <KinshimaImage className="indraz-mark" src="/sites/kinshima/indraz-mark.png" alt="Indraz" fill />
          </div>
          <div className="indraz-copy">
            <div className="indraz-text">
              <h2 id="indraz-title">Forgez un monde,<br /> inspirez les futurs héros</h2>
              <p>Indraz est un univers héroïque-fantasy original inspiré par les guerriers de Kinshima et les héros qui marchent sur la Voie.</p>
              <p>Son objectif est de transmettre les valeurs et la philosophie inhérentes aux arts martiaux et d’inspirer les futurs pratiquants. Réaliser ses rêves demande courage et inpsiration, tel est le rôle d&apos;Indraz</p>
              <ProjectLink href={links.indraz}>Embarquer pour Indraz</ProjectLink>
            </div>
            <div className="indraz-art">
              <SiteImage src="/sites/kinshima/indraz-map.jpg" alt="" />
              <KinshimaImage className="indraz-warriors" src="/sites/kinshima/indraz-warriors.png" alt="Deux combattants de l'univers d'Indraz" fill />
            </div>
          </div>
        </section>

        <section className="company-story" aria-labelledby="company-title">
          <div className="company-banner">
            <SiteImage src="/sites/kinshima/company-banner.jpg" alt="Deux pratiquants se font face au coucher du soleil" />
            <KinshimaImage className="company-mark" src="/sites/kinshima/kinyobi-mark.png" alt="" fill />
          </div>
          <div className="company-title"><h2 id="company-title">Compagnie Kinyobi</h2></div>
          <div className="company-gallery">
            <article>
              <h3>Progressez</h3>
              <div className="gallery-image"><SiteImage src="/sites/kinshima/company-progress.jpg" alt="Un cours d'arts martiaux en plein air" /></div>
            </article>
            <article>
              <h3>Partagez</h3>
              <div className="gallery-image"><SiteImage src="/sites/kinshima/company-community.jpg" alt="Un groupe de pratiquants partage un entraînement" /></div>
            </article>
            <article>
              <h3>Excellez</h3>
              <div className="gallery-image"><SiteImage src="/sites/kinshima/company-excellence.jpg" alt="Une démonstration d'arts martiaux" /></div>
            </article>
          </div>
          <div className="company-copy">
            <p>La Compagnie Kinyobi est bien plus qu’un groupe d&apos;arts martiaux : c’est une fraternité où l’exigence, la discipline et le dépassement de soi se partagent. Chaque combattant évolue aux côtés de ses compagnons, forgeant des liens profonds et incarnant l’exemple pour ceux qui suivront.</p>
            <p>Ici, l’aventure est collective, mais le chemin de chaque guerrier est unique. Inspirés par la Voie, les membres de la Compagnie Kinyobi s’élèvent ensemble, portés par la camaraderie, la quête de perfection et les rêves d&apos;aventure. Êtes-vous prêt à rejoindre leurs rangs&nbsp;?</p>
            <ProjectLink href={links.company}>Rencontrez la Compagnie</ProjectLink>
          </div>
        </section>

        <section className="projects-footer" aria-labelledby="projects-title">
          <h2 id="projects-title">Les Projets Kinshima</h2>
          <div className="project-logos">
            <KinshimaLink href={links.indraz} ariaLabel="Découvrir Indraz">
              <KinshimaImage src="/sites/kinshima/indraz-mark.png" alt="Indraz" width={265} height={249} />
            </KinshimaLink>
            <KinshimaLink href={links.league} ariaLabel="Découvrir la Ligue Kinshima">
              <KinshimaImage src="/sites/kinshima/league-crest.png" alt="La Ligue Kinshima" width={300} height={236} />
            </KinshimaLink>
            <KinshimaLink href={links.company} ariaLabel="Découvrir la Compagnie Kinyobi">
              <KinshimaImage src="/sites/kinshima/kinyobi-mark.png" alt="La Compagnie Kinyobi" width={233} height={249} />
            </KinshimaLink>
          </div>
          <ProjectLink href={links.projects}>En apprendre plus</ProjectLink>
        </section>
      </main>

      <KinshimaFooter onContactClick={() => setIsContactOpen(true)} />
      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
