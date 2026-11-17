import { KinshimaImage } from "./KinshimaImage";
import pageImageManifest from "./page-image-manifest.json";
import { KinshimaLink } from "./KinshimaChrome";
import { ClanCarousel } from "./ClanCarousel";
import { AmnCarousel } from "./AmnCarousel";
import { assetUrl } from "@/lib/paths";
import { clanPages, orderPages, type ClanPage, type OrderPage } from "./kinshima-pages";
import "./kinshima-subpages.css";

type Media = (typeof pageImageManifest)[keyof typeof pageImageManifest];
type MediaImage = Media["images"][number];

function imageSet(route: string): MediaImage[] {
  return pageImageManifest[route as keyof typeof pageImageManifest]?.images ?? [];
}

function Picture({
  route,
  index,
  className,
  priority = false,
  decorative = false,
}: {
  route: string;
  index: number;
  className: string;
  priority?: boolean;
  decorative?: boolean;
}) {
  const image = imageSet(route)[index];
  if (!image) return null;

  return (
    <div className={`kp-picture ${className}`}>
      <KinshimaImage
        alt={decorative ? "" : image.alt}
        fill
        priority={priority}
        sizes="(max-width: 760px) 100vw, 100vw"
        src={image.src}
      />
    </div>
  );
}

function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: string }) {
  return (
    <header className="kp-section-title">
      {eyebrow ? <p className="kp-eyebrow">{eyebrow}</p> : null}
      <h2>{children}</h2>
    </header>
  );
}

function Action({ children, href }: { children: string; href: string }) {
  return <KinshimaLink className="kp-action" href={href}>{children}</KinshimaLink>;
}

function Gallery({ route, indices, className = "" }: { route: string; indices: number[]; className?: string }) {
  return (
    <div className={`kp-gallery ${className}`}>
      {indices.map((index) => <Picture key={index} route={route} index={index} className="kp-gallery-image" />)}
    </div>
  );
}

function ProjectOverview({ route }: { route: string }) {
  const projects = [
    {
      title: "La Ligue Kinshima",
      body: "Un camp annuel de trois jours où plus de 80 participants se rassemblent pour pratiquer les arts martiaux et réaliser des quêtes épiques. Répartis en clan, chaque guerrier vit une aventure personnelle et collective exigeante, immersive et inspirante.",
      image: 8,
      href: "/la-ligue-kinshima",
      action: "Rejoignez la Ligue",
    },
    {
      title: "L'univers d'Indraz",
      body: "Un univers narratif fantasy inspiré par les guerriers de Kinshima afin de transmettre la philosophie des arts martiaux et d'inspirer les nouvelles générations. Romans, contes, visual novel ou encore jeu de rôle : Indraz a pour projet de se développer sur tous les supports narratifs.",
      image: 9,
      href: "/indraz",
      action: "Embarquer pour Indraz",
    },
    {
      title: "La compagnie Kinyobi",
      body: "Un groupe de jeunes passionnés, engagés dans l’apprentissage de divers arts martiaux. À travers des cours hebdomadaires, ils partagent techniques et savoirs, s'affrontent lors de défis et duels ou cultivent leur force intérieure.",
      image: 10,
      href: "/la-compagnie-kinyobi",
      action: "Rencontrez la Compagnie",
    },
  ] as const;
  const team = [
    ["Muzzetto Nicolas", "Créateur et directeur"],
    ["Morand Roan", "Directeur technique et responsable admin/support"],
    ["Servajan Romain", "Responsable des projets et chef de la Compagnie Kinyobi"],
    ["Pellaud Jacques", "Assistant exécutif et développeur de projets"],
    ["Gaspoz Nathan", "Responsable cours martiaux"],
  ];

  return (
    <div className="kp-projects-page">
      <section className="kp-projects-hero">
        <Picture route={route} index={4} className="kp-projects-hero-image" priority />
        <div className="kp-project-hero-logos">
          {[5, 6, 7].map((index) => <Picture key={index} route={route} index={index} className="kp-project-logo" decorative />)}
        </div>
        <div className="kp-projects-intro">
          <h1>Nos Projets</h1>
          <p>Kinshima est la bannière sous laquelle sont créés différents projets d&apos;arts martiaux narratifs. À ce jour, trois grandes aventures se lient dans l&apos;univers Kinshima : le camp d&apos;arts martiaux narratifs La Ligue Kinshima, l&apos;univers fantasy Indraz et le groupe d&apos;entraînement la Compagnie Kinyobi.</p>
        </div>
      </section>

      <section className="kp-project-list" aria-label="Les projets Kinshima">
        {projects.map((project, index) => (
          <article className={`kp-project-row${index % 2 ? " reverse" : ""}`} key={project.title}>
            <div className="kp-project-number">0{index + 1}</div>
            <div className="kp-project-copy">
              <h2>{project.title}</h2>
              <p>{project.body}</p>
              <Action href={project.href}>{project.action}</Action>
            </div>
            <Picture route={route} index={project.image} className="kp-project-row-image" decorative />
          </article>
        ))}
      </section>

      <Picture route={route} index={11} className="kp-project-team-banner" decorative />
      <section className="kp-team-section">
        <SectionTitle>Notre équipe</SectionTitle>
        <div className="kp-team-grid">
          {team.map(([name, role], index) => (
            <article className="kp-team-card" key={name}>
              <Picture route={route} index={12 + index} className="kp-team-photo" />
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kp-quote-feature">
        <Picture route={route} index={17} className="kp-quote-photo" decorative />
        <blockquote>
          <p>« Inspiré par de jeunes élèves d&apos;arts martiaux, je crée des lieux dans lesquels ils pourront s&apos;enflammer et montrer leur vraie nature : celle de jeunes guerriers capables d&apos;embraser le monde ! »</p>
          <cite>— Aestir</cite>
        </blockquote>
        <Picture route={route} index={18} className="kp-quote-side-photo" decorative />
      </section>
      <Picture route={route} index={19} className="kp-project-bio-banner" decorative />

      <section className="kp-bio-list">
        {[
          ["Nicolas", "Créateur et directeur Kinshima", "Professeur d'arts martiaux, officier de carrière et passionné de littérature. Avec Kinshima je souhaite offrir à tous une structure permettant l'élévation personnelle et la valorisation des jeunes générations à travers l'exigence des arts martiaux et la force inspirante des récits épiques."],
          ["Roan", "Directeur technique et responsable admin/support", "Nous créons des univers imaginaires, bien réels !"],
          ["Romain", "Responsable des projets et chef de la Compagnie Kinyobi", "Professeur d’arts martiaux et passionné de sport, je dirige la Compagnie Kinyobi qui est l’un des cœurs de Kinshima et souhaite inspirer les plus jeunes par l’exemple."],
          ["Jacques", "Assistant exécutif et développeur de projets", "Jeune professeur d'arts martiaux, étudiant en chimie et passionné de technologies, je suis déterminé à redonner toute mon énergie au projet passionnant qui a transformé ma vie. Mon parcours me permet d'allier connaissances techniques et discipline martiale, deux domaines qui m'inspirent chaque jour à repousser mes limites et à m'engager pour les autres."],
          ["Nathan", "Responsable cours martiaux", "Il transmet son énergie et sa passion pour les arts martiaux au sein de Kinshima."],
        ].map(([name, role, body], index) => (
          <article className={`kp-bio-row${index % 2 ? " reverse" : ""}`} key={name}>
            <Picture route={route} index={20 + index} className="kp-bio-photo" />
            <div><h2>{name}</h2><h3>{role}</h3><p>{body}</p></div>
          </article>
        ))}
      </section>

      <section className="kp-volunteers">
        <Picture route={route} index={25} className="kp-volunteer-mark" decorative />
        <div><h2>Un grand merci à tous nos bénévoles !</h2><p>Il n’y a pas de grandes batailles sans cuisines bouillonnantes, infirmières de choc, maîtres forgerons et bâtisseurs. Les bénévoles sont les rouages cachés qui permettent à la Ligue de fonctionner.</p></div>
      </section>
      <section className="kp-photographer">
        <h2>Notre photographe d&apos;exception :</h2>
        <p>Pauline Mandrin</p>
        <a href="https://paulinemandrinphotographe.ch/">Contact : site internet</a>
        <a href="https://www.instagram.com/paulinemandrinphotographe/">Instagram</a>
      </section>
      <section className="kp-project-footer-logo"><Picture route={route} index={26} className="kp-project-footer-mark" decorative /></section>
    </div>
  );
}

const amnPillars = [
  ["Immersion narrative", "Vivre une aventure porteuse de sens"],
  ["Leadership & responsabilisation", "Prendre des décisions, assumer les conséquences et montrer l'exemple"],
  ["Vie en communauté", "S'élever ensemble dans l'effort et la camaraderie"],
  ["Philosophie & conscience de soi", "Mieux se connaître pour savoir qui devenir"],
  ["Gamification et progression", "Progresser grâce à des défis clairs et valorisants"],
];

function NarrativePage({ route }: { route: string }) {
  const details = [
    "Vivre une aventure dans un univers riche et cohérent, où chaque jeune peut devenir le héros de son histoire, explorer, expérimenter et progresser dans un cadre positif.",
    "Encourager chacun à prendre des décisions, des rôles, à mener des actions concrètes dans le groupe, et à faire l'expérience directe de son pouvoir d'agir.",
    "Grandir au contact des autres, tisser des liens forts, apprendre la coopération, et bénéficier d'une richesse d'expériences humaines et émotionnelles partagées.",
    "Développer la réflexion, apprendre à nommer ses émotions, découvrir d'autres manières de penser et de résoudre les problèmes, cultiver un regard lucide et apaisé sur soi-même.",
    "Introduire des mécanismes de progression, de quêtes et de reconnaissance pour renforcer la motivation, la clarté des objectifs et la valorisation de chaque effort.",
  ];
  const pillarPhotoIndices = [18, 19, 22, 24, 27];
  const pillarIconIndices = [17, 20, 21, 25, 26];
  const confidences = [
    ["Face à l’épreuve", "Développer la résilience : la capacité à se relever, à apprendre de la difficulté, à persévérer.", 29],
    ["En sa capacité d’agir", "Renforcer le pouvoir d’agir : savoir que l’on est capable de faire des choix, de progresser, d’influencer le réel.", 30],
    ["En sa propre valeur", "Vivre la valorisation : se sentir digne, important, reconnu pour ce que l’on est et ce que l’on apporte.", 31],
  ] as const;

  return (
    <div className="kp-narrative-page">
      <section className="kp-narrative-hero">
        <Picture route={route} index={4} className="kp-narrative-hero-image" priority />
        <div><h1>Kinshima<br />&amp;<br />Les Arts Martiaux Narratifs</h1></div>
      </section>
      <section className="kp-narrative-callout">
        <Picture route={route} index={5} className="kp-narrative-callout-image" />
        <div><p>Kinshima : 3 projets d’arts martiaux narratifs pour les jeunes de 12 à 30 ans</p><Action href="/les-projets">Découvrir les projets</Action></div>
      </section>
      <section className="kp-narrative-intro">
        <Picture route={route} index={6} className="kp-wide-art" decorative />
        <div className="kp-narrative-title"><h2>Les Arts Martiaux Narratifs</h2><p>Enflammer sa confiance en soi par les arts martiaux, l’aventure et l’imaginaire.</p></div>
        <div className="kp-reading-panel"><p>Les Arts Martiaux Narratifs (AMN) sont une méthode de pratique des arts martiaux conjuguée à l’aventure (individuelle et collective) et à l’imaginaire. Par la création d’un univers propice à la recherche de soi, à l’expérimentation et à l’échange, ils permettent aux jeunes guerriers de prendre confiance en eux, en leur capacité d’agir ainsi qu’en leur capacité à vaincre dans l’adversité (résilience).</p><p>De ce fait, les AMN se placent également comme une proposition de solution face aux difficultés qui frappent la jeunesse (dépression et angoisse).</p><a href="https://www.public-health.ch/">Source : étude jeunesse</a></div>
      </section>
      <section className="kp-pillar-intro">
        <div className="kp-picture kp-pillar-banner">
          <KinshimaImage
            src="/sites/kinshima/subpages/177dbd49dd.jpg"
            alt=""
            fill
            sizes="100vw"
          />
        </div>
        <div className="kp-pillar-copy">
          <p>Les Arts Martiaux Narratifs se composent d’un socle : la pratique exigeante des arts martiaux auquel nous ajoutons 5 piliers : la vie en communauté, le leadership et la responsabilisation, la narration immersive, la gamification et la philosophie.</p>
        </div>
      </section>
      <AmnCarousel />
      <section className="kp-martial-base">
        <div><SectionTitle>Les arts martiaux : le socle des NMA</SectionTitle><p>Les arts martiaux ne sont pas un but en soi, mais un chemin : une Voie (Dō) au sens du Budō japonais, c’est-à-dire un parcours de transformation intérieure. Ils ne se limitent pas à la technique ou à la performance physique, mais engagent l’être dans sa globalité : corps, esprit et cœur. Marcher sur cette voie, c’est cultiver la présence, la rigueur, l’humilité et la responsabilité de ses actes — non seulement sur le tatami, mais dans la vie quotidienne.</p></div>
        <Picture route={route} index={10} className="kp-martial-photo" />
      </section>
      <section className="kp-amn-quote"><Picture route={route} index={11} className="kp-amn-quote-image" decorative /><blockquote>« Le Budô est une conception moderne qui vise une formation globale de l’homme, intellectuelle et physique, au travers des disciplines traditionnelles de combat. »<cite>— Kenji Tokitsu, Budô, le Ki et le sens du combat</cite></blockquote></section>
      <section className="kp-pillars-section">
        <SectionTitle>Les 5 Piliers des AMN</SectionTitle>
        <div className="kp-pillar-icons">{amnPillars.map(([title, caption], index) => <article key={title}><Picture route={route} index={12 + index} className="kp-pillar-icon" decorative /><span>0{index + 1}.</span><h3>{title}</h3><p>{caption}</p></article>)}</div>
        <div className="kp-pillar-details">{amnPillars.map(([title], index) => <article className={`kp-pillar-detail${index % 2 ? " reverse" : ""}`} key={title}><Picture route={route} index={pillarPhotoIndices[index]} className="kp-pillar-photo" /><div><Picture route={route} index={pillarIconIndices[index]} className="kp-pillar-detail-icon" decorative /><p className="kp-eyebrow">0{index + 1}.</p><h3>{title}</h3><p>{details[index]}</p></div></article>)}</div>
      </section>
      <Picture route={route} index={28} className="kp-full-banner" decorative />
      <section className="kp-confidence-section"><SectionTitle>3 confiances développées par les AMN</SectionTitle><div>{confidences.map(([title, body, image]) => <article key={title}><Picture route={route} index={image} className="kp-confidence-bg" decorative /><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>
      <Picture route={route} index={32} className="kp-amn-transition-banner" decorative />
      <section className="kp-enthusiasm"><Picture route={route} index={33} className="kp-enthusiasm-image" decorative /><div><h2>L&apos;enthousiasme pour la vie</h2><p>Par les Arts Martiaux Narratifs, nous souhaitons enflammer une génération de jeunes guerriers enthousiastes, valeureux et confiants dans l&apos;avenir !</p></div></section>
    </div>
  );
}

function ClanLanding({ route }: { route: string }) {
  const clanBackgroundRoutes = {
    sek: "/la-ligue-kinshima/les-clans/seklan",
    enma: "/la-ligue-kinshima/les-clans/son-enma",
    arturok: "/la-ligue-kinshima/les-clans/arturok",
    otsuyu: "/la-ligue-kinshima/les-clans/o-tsuyujin",
    bragnir: "/la-ligue-kinshima/les-clans/bragnir",
  } as const;
  const clanBackgroundOverrides = {
    sek: "/sites/kinshima/clan-seklan-background.png",
    enma: "/sites/kinshima/clan-son-enma-background.png",
    arturok: "/sites/kinshima/clan-arturok-background.png",
    otsuyu: "/sites/kinshima/clan-otsuyujin-background.png",
    bragnir: "/sites/kinshima/clan-bragnir-background.png",
  } as const;
  const clans = [
    { title: "Les Chevaliers de Seklan", subtitle: "La noble Voie des lames et du duel", body: "Honneur et grandeur d'âme sont les qualités requises pour devenir un Chevalier de Seklan. Héritiers des Arts Martiaux Historiques Européens (AMHE), ces guerriers mènent le combat et leur vie selon les règles légendaires de la chevalerie avec un cœur et des bras de diamant.", crest: 6, href: "/la-ligue-kinshima/les-clans/seklan", color: "sek" },
    { title: "Les Moines de Son-Enma", subtitle: "La sage Voie des formes et de la maîtrise", body: "Une âme et un corps forgés par la recherche constante de la vérité, les Moines de Son Enma mènent une vie de discipline et de sagesse dans leur temple. La recherche de la perfection dans chaque mouvement et pensée fait d'eux les guerriers les plus sages de la Ligue.", crest: 7, href: "/la-ligue-kinshima/les-clans/son-enma", color: "enma" },
    { title: "Les Lutteurs d'Arturok", subtitle: "La Voie enracinée des luttes et de l'envol", body: "Leur puissance enracinée alliée à un cœur paisible fait des Lutteurs d'Arturok des guerriers inébranlables. Personne n'a jamais vu un de ces géants plier le genou face à un adversaire.", crest: 8, href: "/la-ligue-kinshima/les-clans/arturok", color: "arturok" },
    { title: "Les Ninjas d'O-Tsuyujin", subtitle: "La Voie abyssale des saisies et des flux", body: "Le secret de la puissance des Ninjas d'O-Tsuyujin vient de leur capacité à prendre la forme parfaite face à leur adversaire. Secrets et mystérieux, ces guerriers illustrent l'art d'utiliser la force d'autrui à leur propre profit.", crest: 9, href: "/la-ligue-kinshima/les-clans/o-tsuyujin", color: "otsuyu" },
    { title: "Les Combattants de Bragnir", subtitle: "La Voie enflammée du combat et du rythme", body: "Enflammés et endurants, les Combattants de Bragnir foncent vers la victoire sans avoir peur de prendre des dégâts. Un cœur festif et un corps incassable font de ces guerriers des camarades passionnés et victorieux.", crest: 10, href: "/la-ligue-kinshima/les-clans/bragnir", color: "bragnir" },
  ] as const;
  return (
    <div className="kp-clans-page">
      <section className="kp-clans-hero">
        <Picture route={route} index={4} className="kp-clans-hero-image" priority />
        <Picture route={route} index={5} className="kp-clans-crest" decorative />
        <div><h1>Les clans de la Ligue Kinshima</h1><p>Les 5 clans de la Ligue Kinshima représentent différentes Voies, chacune incarnant un aspect unique de la maîtrise des arts martiaux et de leurs valeurs.</p><p>La Ligue Kinshima réunit ces clans pour garantir l&apos;équilibre et l&apos;harmonie sur la Voie, permettant à chaque guerrier d&apos;apprendre les uns des autres et de s&apos;élever.</p><Action href="#clan-list">Quel clan te correspond ?</Action></div>
      </section>
      <section className="kp-clan-list" id="clan-list">{clans.map((clan, index) => <article className={`kp-clan-row ${clan.color}${index % 2 ? " reverse" : ""}`} key={clan.title}><KinshimaLink className="kp-clan-crest-link" href={clan.href}><Picture route={route} index={clan.crest} className="kp-clan-crest" decorative /></KinshimaLink><div><KinshimaLink href={clan.href}><h2>{clan.title}</h2></KinshimaLink><h3>{clan.subtitle}</h3><p>{clan.body}</p></div></article>)}</section>
      <ClanCarousel
        items={clans.map((clan) => ({
          title: clan.title,
          href: clan.href,
          imageSrc: imageSet(route)[clan.crest]?.src ?? "",
          backgroundSrc: clanBackgroundOverrides[clan.color] ?? imageSet(clanBackgroundRoutes[clan.color])[7]?.src ?? "",
        }))}
      />
    </div>
  );
}

function ClanProfile({ route, page }: { route: string; page: ClanPage }) {
  const images = imageSet(route);
  const sekLanLayout = route.endsWith("/seklan");
  const crestIndex = sekLanLayout ? 6 : 5;
  const bannerIndex = sekLanLayout ? 7 : 6;
  const quoteImageIndex = sekLanLayout ? 8 : 7;
  const storyBackgroundIndex = sekLanLayout ? 9 : 8;
  const leagueCrestIndex = images.findIndex((image) => image.alt.includes("Blason_Kinishima__edited.png"));
  const leaderIndices = images.map((image, index) => ({ image, index })).filter(({ image }) => image.width >= 250 && image.width <= 330 && image.height >= 300 && image.y > 2200 && image.y < 3400).map(({ index }) => index);
  const lastLeader = Math.max(leaderIndices.at(-1) ?? 11, 11);
  const galleryIndices = images.map((image, index) => ({ image, index })).filter(({ image, index }) => index > lastLeader && image.width > 200 && image.height > 200).map(({ index }) => index);

  return (
    <div className="kp-clan-profile">
      <section className="kp-profile-hero">
        <Picture route={route} index={4} className="kp-profile-hero-photo" priority />
        {sekLanLayout ? <Picture route={route} index={5} className="kp-profile-person" decorative /> : null}
        <div className="kp-profile-title"><h1>{page.title}</h1><p>{page.motto}</p><p>{page.translation}</p></div>
        <Picture route={route} index={crestIndex} className="kp-profile-crest" decorative />
      </section>
      <Picture route={route} index={bannerIndex} className="kp-profile-banner" decorative />
      <section className="kp-clan-quote"><Picture route={route} index={quoteImageIndex} className="kp-clan-quote-image" decorative /><blockquote><p>« {page.quote} »</p><cite>— {page.quoteBy}</cite></blockquote></section>
      <section className="kp-clan-story"><Picture route={route} index={storyBackgroundIndex} className="kp-clan-story-bg" decorative /><p>{page.story[0]}</p><p>{page.story[1]}</p></section>
      <section className="kp-clan-leaders"><SectionTitle>{page.leaderTitle}</SectionTitle><div className="kp-leader-grid">{page.leaders.map((leader, index) => <article key={leader.name}><Picture route={route} index={leaderIndices[index] ?? leaderIndices[0] ?? 9} className="kp-leader-photo" /><div><h3>{leader.name}</h3><p>{leader.epithet}</p><small>{leader.years}</small></div></article>)}</div></section>
      <section className="kp-clan-gallery"><SectionTitle>Le clan en image :</SectionTitle><Gallery route={route} indices={galleryIndices} className="kp-masonry" /></section>
      <section className="kp-route-cta"><Picture route={route} index={leagueCrestIndex} className="kp-route-cta-crest" decorative /><Action href="/la-ligue-kinshima/les-clans">Découvre les autres Clans de la Ligue</Action></section>
    </div>
  );
}

function LeagueLanding({ route }: { route: string }) {
  const featured = [
    { name: "Ramon", title: "Typhon-d-O-Tsuyujin", clan: "O-Tsuyujin", personImage: 21, crest: 22 },
    { name: "Audrey", title: "Conquérante-des-falaises", clan: "Seklan", personImage: 23, crest: 24 },
    { name: "Evan", title: "Frène-Intrépide", clan: "Arturok", personImage: 25, crest: 26 },
    { name: "Amélie", title: "Coeur-Ardent", clan: "Bragnir", personImage: 27, crest: 28 },
    { name: "Johann", title: "Cœur-éclatant", clan: "Son-Enma", personImage: 29, crest: 30 },
  ];
  const orders = [
    { title: "Walfae", body: "Gardiennes du cœur de Kinshima, les guerrières Walfaës sont les lames du commandant.", image: 33, href: "/la-ligue-kinshima/les-ordres/walfae" },
    { title: "Seidrir", body: "Tactique, soins et renseignements, la sagesse des Seidrirs guide les clans.", image: 34, href: "/la-ligue-kinshima/les-ordres/seidrir" },
    { title: "Alfherjar", body: "Protecteurs, les Alfherjars sont le bouclier et la lance de la Ligue.", image: 35, href: "/la-ligue-kinshima/les-ordres/alfherjar" },
  ];
  return (
    <div className="kp-league-page">
      <section className="kp-league-hero"><Picture route={route} index={4} className="kp-league-hero-photo" priority /><Picture route={route} index={5} className="kp-league-wordmark" decorative /><p>« À Kinshima, vous ne vivez pas seulement une aventure : vous écrivez votre légende. »</p></section>
      <section className="kp-league-join"><Picture route={route} index={6} className="kp-league-join-photo" decorative /><Action href="/la-ligue-kinshima/liguekinshima2026">Rejoindre l’aventure</Action></section>
      <section className="kp-league-intro"><Picture route={route} index={7} className="kp-league-intro-photo" decorative /><Picture route={route} index={8} className="kp-league-intro-wordmark" decorative /><div><h1>Bienvenue à</h1><p>Rejoignez la Ligue Kinshima : un camp où arts martiaux, camaraderie et quêtes épiques s’unissent pour forger des héros et écrire l’histoire d’Indraz.</p><p>Des cours d&apos;arts martiaux exigeants, des histoires de qualité dont vous décidez l&apos;issue et des dizaines d&apos;amitiés à tisser, voici ce qui vous attend en devenant un héros de la Ligue !</p><Action href="#fondations">↓ Devenir un Héro ↓</Action></div></section>
      <Picture route={route} index={9} className="kp-league-transition-banner" decorative />
      <Picture route={route} index={10} className="kp-league-transition-banner kp-league-transition-banner-wide" decorative />
      <section className="kp-foundations" id="fondations"><SectionTitle eyebrow="Les Fondations de la Ligue">Les cinq Clans</SectionTitle><p>Chaque clan unit les participants de la Ligue dans une même Voie martiale qui leur correspond.</p><div className="kp-foundation-cards">{[["Les cinq Clans", "Chaque clan unit les participants de la Ligue dans une même Voie martiale qui leur correspond.", "/la-ligue-kinshima/les-clans", 11], ["L'univers", "Les guerriers légendaires devenus gardiens du fonctionnement de la Ligue.", "/la-ligue-kinshima/les-hérauts", 16], ["Les trois Ordres", "Face aux ennemis de la Ligue, les Ordres conduisent les guerriers Kinshima à la victoire.", "/la-ligue-kinshima/les-ordres", 17]].map(([title, body, href, image]) => <article key={String(title)}><Picture route={route} index={Number(image)} className="kp-foundation-mark" decorative /><h3>{title}</h3><p>{body}</p><Action href={String(href)}>{title === "L'univers" ? "Rencontre les Hérauts" : title === "Les trois Ordres" ? "Découvre les ordres" : "Choisis ton clan"}</Action></article>)}</div></section>
      <Picture route={route} index={20} className="kp-full-banner" decorative />
      <section className="kp-heroes-clans"><SectionTitle>Rejoins les héros de la Ligue et leur clan</SectionTitle><div className="kp-featured-clans">{featured.map((hero) => <article key={hero.clan}><Picture route={route} index={hero.personImage} className="kp-featured-person" /><Picture route={route} index={hero.crest} className="kp-featured-crest" decorative /><div><h3>{hero.name}</h3><p>{hero.title}</p><KinshimaLink href={`/la-ligue-kinshima/les-clans/${hero.clan.toLowerCase()}`}>{hero.clan}</KinshimaLink></div></article>)}</div><Action href="/la-ligue-kinshima/les-clans">Découvre et choisis ton clan !</Action></section>
      <section className="kp-order-cards"><Picture route={route} index={32} className="kp-order-banner" decorative /><SectionTitle>Les trois Ordres</SectionTitle><div>{orders.map((order) => <article key={order.title}><Picture route={route} index={order.image} className="kp-order-mark" decorative /><h3>{order.title}</h3><p>{order.body}</p><KinshimaLink href={order.href}>En savoir plus</KinshimaLink></article>)}</div><Action href="/la-ligue-kinshima/les-ordres">Découvre les Ordres de la Ligue</Action></section>
      <section className="kp-herald-cta"><Picture route={route} index={36} className="kp-herald-mark" decorative /><Action href="/la-ligue-kinshima/les-hérauts">Rencontre les Hérauts de la Ligue</Action></section>
    </div>
  );
}

function OrdersLanding({ route }: { route: string }) {
  const orders = [
    { name: "L'ordre des Alfherjar", body: "Protecteurs invincibles, les Alfherjars sont le bouclier et la lance de la Ligue. Conduit par le Centurion des Scarabées, cet ordre est la garde prétorienne de la plus grande institution des arts martiaux d’Indraz.", image: 7, href: "/la-ligue-kinshima/les-ordres/alfherjar" },
    { name: "L'ordre des Seidrir", body: "Tactique, soins et renseignements, la sagesse des Seidrirs guide les clans et la Ligue vers la victoire. Sous l'autorité du Sage des Méduses, ils conseillent le commandant et les chefs de clan en temps de crise.", image: 8, href: "/la-ligue-kinshima/les-ordres/seidrir" },
    { name: "L’ordre des Walfae", body: "Gardiennes du cœur de Kinshima, les guerrières Walfaës sont les lames secrètes du Commandant. Forces spéciales de la Ligue, elles agissent pour garantir la sécurité des secrets de Kinshima.", image: 9, href: "/la-ligue-kinshima/les-ordres/walfae" },
  ];
  return <div className="kp-orders-page"><section className="kp-orders-hero"><Picture route={route} index={4} className="kp-orders-hero-photo" priority /><Picture route={route} index={5} className="kp-orders-hero-mark" decorative /><div><h1>Les 3 Ordres</h1><p>Pour la première fois depuis des siècles d&apos;existence, la Ligue Kinshima est attaquée. Le commandant Aestir a décidé de reformer les ordres anciens, jusqu&apos;alors disparus, qui servaient autrefois les Éclats Majeurs et les Alfènes.</p><p>Les trois ordres ont pour mission de protéger la Ligue Kinshima et le sanctuaire des Alfènes et sont composés des guerriers au médaillon, l&apos;élite de Kinshima, issus de tous les clans.</p><p>Chaque ordre reçoit des missions spécifiques à ses compétences, de la protection rapprochée du commandant à la planification tactique des combats et la défense des portes du sanctuaire.</p></div></section><Picture route={route} index={6} className="kp-full-banner" decorative /><section className="kp-order-list">{orders.map((order, index) => <article className={`kp-order-row order-${index}${index % 2 ? " reverse" : ""}`} key={order.name}><KinshimaLink href={order.href}><Picture route={route} index={order.image} className="kp-order-mark" decorative /></KinshimaLink><div><KinshimaLink href={order.href}><h2>{order.name}</h2></KinshimaLink><p>{order.body}</p><Action href={order.href}>Découvrir l&apos;ordre</Action></div></article>)}</section></div>;
}

function OrderProfile({ route, page }: { route: string; page: OrderPage }) {
  const gallery = imageSet(route).map((image, index) => ({ image, index })).filter(({ image, index }) => index >= 6 && image.width > 500 && image.height > 250).map(({ index }) => index);
  return <div className="kp-order-profile"><section className="kp-order-profile-hero"><Picture route={route} index={4} className="kp-order-profile-mark" decorative priority /><div><h1>{page.title}</h1><h2>{page.subtitle}</h2></div></section><Picture route={route} index={5} className="kp-order-feature" decorative /><section className="kp-order-story"><SectionTitle>À propos de l&apos;ordre</SectionTitle>{page.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section><Gallery route={route} indices={gallery} className="kp-order-gallery" /></div>;
}

function League2026({ route }: { route: string }) {
  const storyRows = [
    ["Rejoins un clan, entre dans la Ligue et prends part à une grande aventure !", "Découvre les clans et choisis la Voie qui te ressemble.", 7, "/la-ligue-kinshima/les-clans"],
    ["Un continent que l'on croyait disparu", "Depuis des siècles, une brume impénétrable cachait un continent que l'on croyait disparu pour toujours. Aucun navire n'avait pu l'approcher. Aujourd'hui, la brume se dissipe. Oultradie, la Terre des Légendes, est accessible et ses secrets attendent d'être découverts.", 8, "/la-ligue-kinshima/les-clans"],
    ["Les Nations Martiales s'unissent", "Face à l'inconnu, les Nations Martiales ont fait le choix de s'unir. Trois guildes ont été choisies pour mener la première expédition vers ce nouveau monde. Leurs maîtres viendront sur Kinshima cette année, à la recherche de disciples assez courageux pour écrire les premières pages de cette nouvelle histoire.", 10, "/la-ligue-kinshima/les-clans"],
    ["Des décisions lourdes de conséquences", "Cette année, il ne suffira pas d'être fort sur le tatami. Les clans devront aussi prouver leur valeur dans l'ombre des intrigues et la conquête de l'inconnu. Les Éclats n'attendent pas. Le Nouvel Horizon est ouvert : à toi de décider quelle place tu y prendras.", 13, "/la-ligue-kinshima/guerriers-au-médaillon"],
  ] as const;
  return <div className="kp-2026-page"><section className="kp-2026-hero"><Picture route={route} index={4} className="kp-2026-hero-image" priority /><div><h1>Ligue Kinshima 2026</h1><p>Le Nouvel Horizon</p></div></section><section className="kp-2026-date"><p>13 – 16 août</p><h2>Savièse</h2><Action href="https://www.kinshima.com/la-ligue-kinshima/liguekinshima2026">Découvre la Ligue</Action></section><section className="kp-2026-prologue"><Picture route={route} index={5} className="kp-2026-prologue-image" decorative /><div><p>Les grandes batailles se sont tues. Kinshima respire à nouveau alors que les clans s’apprêtent à revenir à la Ligue.</p><p>Mais ce calme ne sera que de courte durée car à l&apos;horizon, quelque chose a changé.</p></div></section><div className="kp-2026-stories">{storyRows.map(([title, body, image, href], index) => <article className={`kp-2026-story${index % 2 ? " reverse" : ""}`} key={title}><Picture route={route} index={image} className="kp-2026-story-image" /><div><h2>{title}</h2><p>{body}</p>{index === 0 ? <Action href={href}>Découvre les clans</Action> : null}</div></article>)}</div><section className="kp-2026-choices"><SectionTitle>Découvre les Clans :</SectionTitle><Picture route={route} index={15} className="kp-2026-carousel-image" /><Action href="/la-ligue-kinshima/les-clans">Découvre et choisis ton clan !</Action></section><section className="kp-2026-foundations"><SectionTitle>Les Fondations de la Ligue</SectionTitle><p>Les cinq clans, les Hérauts et les trois Ordres donnent vie à la Ligue.</p><div>{[["Les cinq Clans", "/la-ligue-kinshima/les-clans", 17], ["Les Hérauts", "/la-ligue-kinshima/les-hérauts", 22], ["Les trois Ordres", "/la-ligue-kinshima/les-ordres", 23]].map(([title, href, image]) => <article key={String(title)}><Picture route={route} index={Number(image)} className="kp-foundation-mark" decorative /><h3>{title}</h3><KinshimaLink href={String(href)}>En savoir plus</KinshimaLink></article>)}</div></section><section className="kp-2026-projects"><SectionTitle>Les Projets Kinshima</SectionTitle><div>{[["Indraz", 43, "/indraz"], ["La Ligue Kinshima", 44, "/la-ligue-kinshima"], ["La Compagnie Kinyobi", 45, "/la-compagnie-kinyobi"]].map(([title, image, href]) => <KinshimaLink key={String(title)} href={String(href)}><Picture route={route} index={Number(image)} className="kp-project-logo" decorative /><span>{title}</span></KinshimaLink>)}</div></section></div>;
}

function MedallionPage({ route }: { route: string }) {
  const masters = [
    ["Roan", "Pilier-des-Espoires", "Grand-maître, Général et fondateur de la Ligue"],
    ["Nicolas", "« Aestir » Rêve-d’Éclat", "Fondateur et Commandant de la Ligue"],
    ["Nathan", "Alchimiste-du-Mouvement", "Maître d’arme de la Ligue"],
  ];
  const elders = ["Romain — Mille-Keikos", "Romane — Coeur-de-Gêmes", "Joscha — Paix-des-Cimes", "Julian — Cascade-Sauvage", "Sezer — Feu-du-Ciel"];
  const warriors = ["Maxime — Sommet-d'Argent", "Tibo — Colonne-d'Acier", "Johan — Coeur-Etincelant", "Gaelle — Forme-d'Acier", "Rachelle — Cavalière-de-l'Aube", "Audrey — Conquérante-des-Falaises", "Mathilde — Éclat-de-Diamant", "Marianne — Fleur-d'Opale", "Ludovic — Racines-de-Géant", "Evan — Frène-Intrépide", "Nils — Noble-Chène", "Samuel — Forge-des-Falaises", "Abel — Œil-du-Typhon", "Jacques — Savoir-des-Abysses", "Ramon — Typhon-d'Otsuyujin", "Clément — Duel-des-Tempêtes", "Sylvan — Feu-d'Orfèvre", "Amélie — Coeur-Ardent", "Alexandra — Zenith-Cendré"];
  return <div className="kp-medallion-page"><section className="kp-medallion-hero"><Picture route={route} index={4} className="kp-medallion-hero-image" priority /><Picture route={route} index={5} className="kp-medallion-mark" decorative /><h1>Les Guerriers au Médaillon</h1></section><section className="kp-medallion-intro"><p>Le Médaillon Kinshima est l’une des plus hautes décorations qu’un guerrier de la Ligue puisse recevoir. Lorsqu’un guerrier de la Compagnie Kinyobi s’est suffisamment investi pour que sa vertu et son niveau martial soient reconnus par le Conseil, un médaillon bleu frappé de la Croix Kinshima lui est décerné.</p><p>Lors de la Cérémonie des Médaillons, le guerrier Kinyobi reçoit son médaillon ainsi qu’un « nom de guerrier Kinshima » symbolisant les valeurs qu’il a su incarner par son entraînement et son engagement.</p><p>Les guerriers aux médaillons sont l’avant-garde de la Ligue, des modèles pour chaque jeune participant et Kinyobi. Ils rejoignent également un des trois Ordres et deviennent un successeur potentiel au chef de leur clan.</p></section><section className="kp-medallion-group"><SectionTitle>Les Maîtres</SectionTitle><div>{masters.map(([name, title, body], index) => <article key={name}><Picture route={route} index={6 + index} className="kp-medallion-person" /><h3>{name}</h3><p>{title}</p><small>{body}</small></article>)}</div></section><section className="kp-medallion-group"><SectionTitle>Les Doyens</SectionTitle><div>{elders.map((name, index) => <article key={name}><Picture route={route} index={12 + index} className="kp-medallion-person" /><h3>{name.split(" — ")[0]}</h3><p>{name.split(" — ")[1]}</p><small>Fondateur et premier chef de clan</small></article>)}</div></section><section className="kp-medallion-warriors"><SectionTitle>Les Guerriers</SectionTitle><div>{warriors.map((name, index) => <article key={name}><Picture route={route} index={17 + index} className="kp-warrior-photo" /><p>{name}</p></article>)}</div></section></div>;
}

function HeraldsPage({ route }: { route: string }) {
  const elders = ["Romain — Milles-Keiko — Premier Maître de Son-Enma", "Romane — Coeur-de-Gêmes — Première Baronne de Seklan", "Joscha — Paix-des-Cimes — Premier Yokozuna d'Arturok", "Julian — Cascade-Sauvage — Premier Mizukage d'O-Tsuyujin", "Sezer — Feu-du-Ciel — Premier Boss de Bragnir"];
  return <div className="kp-heralds-page"><section className="kp-heralds-hero"><Picture route={route} index={4} className="kp-heralds-hero-image" priority /><Picture route={route} index={5} className="kp-heralds-mark" decorative /><div><h1>Les Hérauts<br />de la Ligue Kinshima</h1><p>Au fil des aventures de la Ligue, ceux qui n’étaient encore que de simples élèves combattants sont devenus des héros dignes des plus belles légendes. Aujourd’hui, ils encadrent les aventures des plus jeunes guerriers et les inspirent pour devenir les héros de demain.</p></div></section><section className="kp-herald-leaders">{[["Le Commandant", "Aestir Rêve-d’Eclat", "Dernier disciple d’Alfanos, Aestir fonda la Ligue en rassemblant les cinq futurs doyens. Il dirige aujourd’hui toutes les activités et missions de la Ligue Kinshima et en garantit la protection."], ["Le remplaçant du commandant", "Romain Mille-Keiko", "Membre fondateur de Kinshima et premier chef de clan Son Enma, Mille-Keikos est aujourd’hui le bras droit d’Aestir. Maître de l’Ordre des Seidrir, il rend possibles les épreuves et activités des clans."], ["Chef du Quartier Général", "Jacques Savoir-des-Abysses", "Ancien chef du clan O-Tsuyujin, il aide le commandant dans ses missions organisationnelles et dirige le renseignement de la Ligue."], ["Walaesir le Tengu", "Gardien de la Voie", "L’ombre du commandant distribue les quêtes aux guerriers de Kinshima. Lorsque l’un d’entre eux est prêt à s’élever, le Tengu lui transmet la volonté des étoiles et dévoile son destin."]].map(([role, name, body], index) => <article key={name}><Picture route={route} index={6 + index} className="kp-herald-leader-photo" /><div><p className="kp-eyebrow">{role}</p><h2>{name}</h2><p>{body}</p></div></article>)}</section><Picture route={route} index={10} className="kp-full-banner" decorative /><section className="kp-elders"><SectionTitle>Les Doyens</SectionTitle><div>{elders.map((elder, index) => <article key={elder}><Picture route={route} index={11 + index} className="kp-elder-photo" /><h3>{elder.split(" — ")[0]}</h3><p>{elder.split(" — ")[1]}</p><small>{elder.split(" — ")[2]}</small></article>)}</div><p>Avec le commandant Aestir, les doyens sont les fondateurs de Kinshima et ont été les premiers chefs des cinq clans. Aujourd’hui, ils conseillent le commandant et soutiennent les chefs de clan.</p></section><section className="kp-heralds-cta"><Picture route={route} index={16} className="kp-heralds-guild" decorative /><div><h2>La Guilde des Kinshissas</h2><p>Il n’y a pas de grandes batailles sans cuisines bouillonnantes, infirmières de choc, maîtres forgerons et bâtisseurs. Les Kinshissas sont les rouages cachés qui permettent à la Ligue de fonctionner.</p></div></section></div>;
}

function IndrazPage({ route }: { route: string }) {
  const sections = [
    ["Un monde pour inspirer le nôtre", "Un bloc de matière froide flottait dans le néant. Puis surgit une étoile, Hagaline. Ses rayons atteignent la planète et l'entourent d'un cocon : la Mer des Mille Nuages. Dans ses couches lumineuses vivent les Éclats-Célestes, dont les cinq plus puissants représentent les éléments et, guidés par Alfanos, forment Indraz et donnent naissance aux animaux."],
    ["Alfanos le créateur", "Guidés par Alfanos, les Éclats-Célestes majeurs font naître les créatures et l'harmonie d'Indraz. Le monde devient le théâtre d'une lutte entre les forces qui protègent la lumière et celles qui veulent plonger la planète dans l'ombre."],
    ["La guerre des idéaux et la chute du paon", "Indraz est une planète d'harmonie. Alors que six Éclats-Célestes règnent dans la lumière, six autres élargissent les ombres : Lokia, le Paon de l'Illusion et les cinq Porteurs d'Extinction. Alfanos et les cinq Éclats-Célestes les combattent et gagnent. Lokia tombe sur Indraz et ses plumes se répartissent sur la planète."],
    ["La procession des astres", "Après la Guerre des Idéaux, la Mer des Mille Nuages est fracturée et ne peut plus contenir la puissance des Éclats-Célestes. Alfanos descend alors sur Indraz et les cinq éléments se créent un corps humain. Les Éclats deviennent des êtres incarnés dans la matière."],
    ["Les cinq éclats-célestes majeurs", "Les cinq Éclats-Célestes majeurs représentent les éléments et les Voies qui façonnent l'univers d'Indraz."],
    ["Les cinq nations martiales", "Les nations d'Indraz portent chacune une tradition, une philosophie et un art de combattre. Leurs guerriers perpétuent l'équilibre du monde et transmettent leur savoir aux nouvelles générations."],
  ];
  const imageIndices = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return <div className="kp-indraz-page"><section className="kp-indraz-hero"><Picture route={route} index={4} className="kp-indraz-hero-image" priority /><div><h1>Le monde d&apos;Indraz</h1><p>Un monde pour inspirer le nôtre</p></div></section><section className="kp-indraz-story">{sections.map(([title, body], index) => <article className={`kp-indraz-row${index % 2 ? " reverse" : ""}`} key={title}><Picture route={route} index={imageIndices[index]} className="kp-indraz-image" /><div><h2>{title}</h2><p>{body}</p></div></article>)}</section><section className="kp-indraz-gallery"><SectionTitle>Explorez l&apos;univers d&apos;Indraz</SectionTitle><Gallery route={route} indices={imageIndices.slice(6)} className="kp-masonry" /></section></div>;
}

function CompanyPage({ route }: { route: string }) {
  const gallery = imageSet(route).map((image, index) => ({ image, index })).filter(({ image, index }) => index >= 6 && image.width > 300 && image.height > 200).map(({ index }) => index);
  return <div className="kp-company-page"><section className="kp-company-hero"><Picture route={route} index={4} className="kp-company-hero-image" priority /><Picture route={route} index={5} className="kp-company-mark" decorative /><div><h1>La compagnie Kinyobi</h1><p>Dédiés aux arts martiaux et au perfectionnement de leurs compétences. À travers des cours hebdomadaires, ils partagent techniques et savoir-faire, relèvent des défis et se mesurent dans des combats pour affûter leur talent.</p></div></section><section className="kp-company-values">{[["Progressez", 6], ["Partagez", 7], ["Excellez", 8]].map(([title, image]) => <article key={String(title)}><h2>{title}</h2><Picture route={route} index={Number(image)} className="kp-company-value-image" /></article>)}</section><section className="kp-company-story"><p>La Compagnie Kinyobi est bien plus qu’un groupe d&apos;arts martiaux : c’est une fraternité où l’exigence, la discipline et le dépassement de soi se partagent. Chaque combattant évolue aux côtés de ses compagnons, forgeant des liens profonds et incarnant l’exemple pour ceux qui suivront.</p><p>Ici, l’aventure est collective, mais le chemin de chaque guerrier est unique. Inspirés par la Voie, les membres de la Compagnie Kinyobi s’élèvent ensemble, portés par la camaraderie, la quête de perfection et les rêves d&apos;aventure.</p><Picture route={route} index={9} className="kp-company-story-image" decorative /><Picture route={route} index={10} className="kp-company-story-image" decorative /><h2>Êtes-vous prêt à rejoindre leurs rangs ?</h2><Action href="mailto:contact@kinshima.com">Devenir membre</Action></section><section className="kp-company-gallery"><SectionTitle>En images :</SectionTitle><Gallery route={route} indices={gallery} className="kp-masonry" /></section></div>;
}

function HugenPage({ route }: { route: string }) {
  const gallery = imageSet(route).map((image, index) => ({ image, index })).filter(({ image, index }) => index >= 8 && image.width > 250 && image.height > 200).map(({ index }) => index);
  return <div className="kp-hugen-page"><section className="kp-hugen-hero"><Picture route={route} index={4} className="kp-hugen-hero-image" priority /><Picture route={route} index={5} className="kp-hugen-card-art" decorative /></section><section className="kp-hugen-intro"><p>Le Hugen est le jeu de carte basé sur l’univers d’Indraz.</p><p>C’est un jeu stratégique dans lequel vous livrez des combats épiques !</p><p>Le nom du Hugen est lié au Yin Yang et signifie l’usage mutuel, une partie de Hugen ne peut exister que par la présence d’un binôme avec et contre qui jouer.</p></section><section className="kp-hugen-callout"><h1>Deviens un stratège<br />du champ de bataille !</h1><div>{[6, 7, 8].map((index) => <Picture key={index} route={route} index={index} className="kp-hugen-howto" decorative />)}</div></section><section className="kp-hugen-rules"><h2>Apprendre les règles</h2><a href={assetUrl("/sites/kinshima/subpages/hugen-regles.pdf")} download>Livret de règles officiel <span aria-hidden="true">↓</span></a></section><section className="kp-hugen-gallery"><SectionTitle>En images :</SectionTitle><Gallery route={route} indices={gallery} className="kp-masonry" /></section></div>;
}

export function KinshimaSubpage({ route }: { route: string }) {
  if (clanPages[route]) return <ClanProfile route={route} page={clanPages[route]} />;
  if (orderPages[route]) return <OrderProfile route={route} page={orderPages[route]} />;

  switch (route) {
    case "/les-projets": return <ProjectOverview route={route} />;
    case "/amn": return <NarrativePage route={route} />;
    case "/la-ligue-kinshima": return <LeagueLanding route={route} />;
    case "/la-ligue-kinshima/liguekinshima2026": return <League2026 route={route} />;
    case "/la-ligue-kinshima/les-clans": return <ClanLanding route={route} />;
    case "/la-ligue-kinshima/les-ordres": return <OrdersLanding route={route} />;
    case "/la-ligue-kinshima/guerriers-au-médaillon": return <MedallionPage route={route} />;
    case "/la-ligue-kinshima/les-hérauts": return <HeraldsPage route={route} />;
    case "/indraz": return <IndrazPage route={route} />;
    case "/la-compagnie-kinyobi": return <CompanyPage route={route} />;
    case "/hugen": return <HugenPage route={route} />;
    default: return null;
  }
}
