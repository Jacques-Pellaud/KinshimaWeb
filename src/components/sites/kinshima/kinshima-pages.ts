export type ClanPage = {
  route: string;
  title: string;
  role: string;
  motto: string;
  translation: string;
  quote: string;
  quoteBy: string;
  story: [string, string];
  leaderTitle: string;
  leaders: Array<{ name: string; epithet: string; years: string }>;
};

export type OrderPage = {
  route: string;
  title: string;
  subtitle: string;
  story: string[];
};

export const kinshimaPageTitles: Record<string, string> = {
  "/les-projets": "Les Projets | Kinshima",
  "/amn": "Arts Martiaux Narratifs | Kinshima",
  "/la-ligue-kinshima": "La Ligue Kinshima | Kinshima",
  "/la-ligue-kinshima/liguekinshima2026": "Ligue Kinshima 2026 | Kinshima",
  "/la-ligue-kinshima/les-clans": "Les Clans | Kinshima",
  "/la-ligue-kinshima/les-clans/seklan": "Seklan | Kinshima",
  "/la-ligue-kinshima/les-clans/arturok": "Arturok | Kinshima",
  "/la-ligue-kinshima/les-clans/bragnir": "Bragnir | Kinshima",
  "/la-ligue-kinshima/les-clans/o-tsuyujin": "O-Tsuyujin | Kinshima",
  "/la-ligue-kinshima/les-clans/son-enma": "Son-Enma | Kinshima",
  "/la-ligue-kinshima/les-ordres": "Les Ordres | Kinshima",
  "/la-ligue-kinshima/les-ordres/alfherjar": "Ordre Alfherjar | Kinshima",
  "/la-ligue-kinshima/les-ordres/seidrir": "Ordre Seidrir | Kinshima",
  "/la-ligue-kinshima/les-ordres/walfae": "Ordre Walfae | Kinshima",
  "/la-ligue-kinshima/guerriers-au-médaillon": "Guerriers au Médaillon | Kinshima",
  "/la-ligue-kinshima/les-hérauts": "Les Hérauts | Kinshima",
  "/indraz": "Indraz | Kinshima",
  "/la-compagnie-kinyobi": "La Compagnie Kinyobi | Kinshima",
  "/hugen": "Le Hugen | Kinshima",
};

export const kinshimaRoutes = Object.keys(kinshimaPageTitles);

export const clanPages: Record<string, ClanPage> = {
  "/la-ligue-kinshima/les-clans/seklan": {
    route: "/la-ligue-kinshima/les-clans/seklan",
    title: "Le clan Seklan",
    role: "Les Chevaliers de Seklan",
    motto: "PAR ONERI",
    translation: "Pour l'honneur",
    quote: "L'honneur commande, le cœur obéit.",
    quoteBy: "Napoléon Bonaparte",
    story: [
      "Les Chevaliers de Seklan marchent avec la lame dans une main et l’honneur dans l’autre. Leur art du duel, hérité des traditions chevaleresques européennes, est aussi exigeant qu’élégant. Ils croient en la force du devoir, en la noblesse d’un cœur loyal, et en la maîtrise de soi comme première des victoires. Face à l’adversité, ils avancent droits, dignes et sans haine, car leur combat est toujours juste.",
      "Dans leur forteresse aux lumineux vitraux résonnent le tintement des épées et la vibration des carreaux d'arbalètes. Genou à terre, chaque écuyer reçoit son ordination de l'épée de la Baronne qui protège et guide ses lionceaux avec cœur et grandeur. Les filles et fils de l'honorable Voie préfèreront toujours ce qui est grand et beau quitte à y perdre leur vie.",
    ],
    leaderTitle: "Les Baronnes",
    leaders: [
      { name: "Romane", epithet: "Coeur-de-Gêmes", years: "2017–2021" },
      { name: "Rachelle", epithet: "Cavalière-de-l'Aube", years: "2021–2022" },
      { name: "Audrey", epithet: "Conquérante-des-falaises", years: "2022–actuelle" },
    ],
  },
  "/la-ligue-kinshima/les-clans/arturok": {
    route: "/la-ligue-kinshima/les-clans/arturok",
    title: "Le clan Arturok",
    role: "Les Lutteurs d'Arturok",
    motto: "PERFER ET OBDURA",
    translation: "Supporte et persévère",
    quote: "Ce n’est pas l’arbre qui se penche, c’est le vent qui faiblit.",
    quoteBy: "Proverbe africain",
    story: [
      "Enracinées comme les chênes millénaires, les Lutteurs d'Arturok avancent paisiblement mais sans jamais reculer. Chaque prise est une étreinte de la gravité, chaque chute un retour à la racine. Leur douce puissance impressionne autant que leur constance. Ils enseignent que la croissance vient de la profondeur et que même les montagnes se courbent devant la ténacité des arbres.",
      "Dans leur halle de bois, inspirés par les puissants guerriers du nord, les filles et fils de la Voie Enracinée se sont développés dans une esthétique norse. Peau et casque de fer, hache à la main, ils n'oublient pas pour autant leurs origines tribales des océans. Leurs hakas inspirent la terreur chez leurs ennemis tout comme ils éveillent la colère du grizzli dans leur cœur.",
    ],
    leaderTitle: "Les Yokozuna",
    leaders: [
      { name: "Joscha", epithet: "Paix-des-Cimes", years: "2017–2021" },
      { name: "Ludovic", epithet: "Racines-de-Géant", years: "2021–2022" },
      { name: "Evan", epithet: "Frène-Intrépide", years: "2024–actuel" },
    ],
  },
  "/la-ligue-kinshima/les-clans/bragnir": {
    route: "/la-ligue-kinshima/les-clans/bragnir",
    title: "Le clan Bragnir",
    role: "Les Combattants de Bragnir",
    motto: "FORTIS IN ARDUIS",
    translation: "Fort dans la difficulté",
    quote: "Ceux qui dansent sont considérés comme fous par ceux qui ne peuvent entendre la musique.",
    quoteBy: "Nietzsche",
    story: [
      "Les Bragnir combattent comme ils vivent : en cadence, en feu, en fraternité. Leur force vient de leur cœur battant à l’unisson, de leur résistance joyeuse, de leur intensité flamboyante. Chaque affrontement est pour eux une fête du dépassement, chaque cicatrice un chant de victoire. Ils avancent par bonds, par cris, par rires, et leur présence suffit à rallumer la flamme chez les plus fatigués.",
      "Dès leur entrée dans le clan, chaque guerrier se voit mis à l'épreuve du feu et des coups. Puis vient chaque soir la fête, autour de la tente mère. Les nuits sont courtes et lumineuses, les jours enflammés et ardus. Mais quoi qu'il arrive, le cœur des filles et fils de la Salamandre continue à danser, quelle que soit l'adversité.",
    ],
    leaderTitle: "Les Boss",
    leaders: [
      { name: "Sezer", epithet: "Feu-du-Ciel", years: "2017–2021" },
      { name: "Sylvan", epithet: "Feu-d'Orfèvre", years: "2022–2023" },
      { name: "Amélie", epithet: "Coeur-Ardent", years: "2024–actuel" },
    ],
  },
  "/la-ligue-kinshima/les-clans/o-tsuyujin": {
    route: "/la-ligue-kinshima/les-clans/o-tsuyujin",
    title: "Le clan O-Tsuyujin",
    role: "Les Ninjas d'O-Tsuyujin",
    motto: "UBIQUE ET SEMPER",
    translation: "Partout et toujours",
    quote: "La souplesse triomphe de la force. L’eau triomphe du rocher.",
    quoteBy: "Lao Tseu",
    story: [
      "Discrets comme l’ombre, fluides et inarrêtables comme les fleuves, les Ninjas d'O-Tsuyujin ne cherchent pas à vaincre : ils attendent que l’adversaire tombe de lui-même. Maîtres des flux, du déséquilibre et du mouvement dissimulé, ils adaptent leur corps comme leur esprit. Pour eux, la victoire est dans le relâchement, la lecture de l’autre, l’écho de l’instant. Invisibles, insaisissables, ils frappent là où l’on ne regarde jamais.",
      "De leur base flottante, les filles et fils de la Voie Abyssale rassemblent toutes les informations nécessaires à la victoire. Organisé par une hiérarchie et un code de conduite intégré en eux, aucun Ninja n'imagine pouvoir rater une mission. Et si un risque s'y présente, leur chef a déjà de nombreux plans B prêts à être déclenchés.",
    ],
    leaderTitle: "Les Mizukage",
    leaders: [
      { name: "Julian", epithet: "Cascade-Sauvage", years: "2017–2021" },
      { name: "Abel", epithet: "", years: "2021–2022" },
      { name: "Jacques", epithet: "Savoir-des-Abysses", years: "2023–2024" },
      { name: "Ramon", epithet: "Typhon-d-O-Tsuyujin", years: "2025–actuel" },
    ],
  },
  "/la-ligue-kinshima/les-clans/son-enma": {
    route: "/la-ligue-kinshima/les-clans/son-enma",
    title: "Le clan Son-Enma",
    role: "Les Moines de Son-Enma",
    motto: "IN CORDE VERITAS",
    translation: "Au cœur de la vérité",
    quote: "Ne cherche pas à être meilleur que les autres, cherche à être meilleur que toi-même.",
    quoteBy: "Jigoro Kano",
    story: [
      "Dans les temples de la Voie, les moines de Son Enma perfectionnent chaque geste comme s’il contenait l’univers. Leur force n’est jamais brute : elle est réfléchie, canalisée, ciselée par la pratique et la méditation. Ils enseignent que l’excellence ne se conquiert pas sur autrui, mais sur soi-même, dans la répétition, la discipline et la quête de vérité. Silencieux mais profonds, ils sont les gardiens de la forme pure.",
      "Dans leurs montagnes résonnent sans cesse les marteaux des forges de Son Enma. Chaque novice se doit d'y forger un premier objet, symbole du travail qu'il fera ensuite sur son corps et son âme. Forgerons des lames de Kinshima ainsi que de leurs propres âmes, les filles et fils du Grand Singe ne s'inclinent que devant la sagesse.",
    ],
    leaderTitle: "Les Maîtres",
    leaders: [
      { name: "Romain", epithet: "Mille-Keikos", years: "2017–2019" },
      { name: "Maxime", epithet: "", years: "2019–2021" },
      { name: "Tibo", epithet: "", years: "2021–2022" },
      { name: "Johan", epithet: "Coeur-étincelant", years: "2023–actuel" },
    ],
  },
};

export const orderPages: Record<string, OrderPage> = {
  "/la-ligue-kinshima/les-ordres/alfherjar": {
    route: "/la-ligue-kinshima/les-ordres/alfherjar",
    title: "Ordre Alfherjar",
    subtitle: "La Lance et le Bouclier de la Ligue",
    story: [
      "L'Ordre Alfherjar est la garde prétorienne de la Ligue Kinshima. Les Alfherjars sont les guerriers courageux et infatigables, protecteurs inébranlables de la Ligue, toujours prêts à défendre ses portes contre toutes menaces.",
      "Lors de la Ligue, les Alfherjars sont chargés de défendre la porte de la Ligue contre les vagues d'assaut ennemies. Dans chaque bataille, ils recrutent et dirigent des groupes de combattants pour assurer la sécurité de la Ligue.",
      "En temps de guerre, les Alfherjars organisent les défenses, recrutent des guerriers et assurent la protection des lieux stratégiques lors des grandes batailles.",
    ],
  },
  "/la-ligue-kinshima/les-ordres/seidrir": {
    route: "/la-ligue-kinshima/les-ordres/seidrir",
    title: "Ordre Seidrir",
    subtitle: "Les Maîtres Tacticiens de la Ligue",
    story: [
      "L'Ordre des Seidrirs est l'intelligence et le pilier de soutien de la Ligue Kinshima. Ils conseillent les chefs en temps de crise et jouent un rôle essentiel dans les moments critiques.",
      "Cet ordre est composé de tacticiens, de soigneurs et d'experts en renseignement, prêts à déjouer les menaces avant qu'elles ne frappent.",
      "Les Seidrirs ont pour mission de déjouer les complots et attentats visant les doyens de la Ligue et de découvrir les plans des ennemis avant les attaques. Leur rôle stratégique est crucial pour la survie de la Ligue.",
      "En temps de guerre, ils sont responsables de la planification des défenses, de la position des groupes de combattants et de la mise en place des pièges pour stopper les vagues ennemies.",
    ],
  },
  "/la-ligue-kinshima/les-ordres/walfae": {
    route: "/la-ligue-kinshima/les-ordres/walfae",
    title: "Ordre Walfae",
    subtitle: "Les Lames Secrètes de la Ligue",
    story: [
      "Les Walfaes sont les forces spéciales et les gardes du corps du commandant de la Ligue Kinshima.",
      "Cet ordre, exclusivement féminin, remplit des missions secrètes et protège les personnalités influentes de la Ligue. Leur agilité, leur discrétion et leur détermination les rendent indispensables dans les situations critiques.",
      "Les Walfaes doivent empêcher les tentatives d'assassinat et garantir la sécurité des leaders de la Ligue, notamment lors des événements importants comme le bal annuel.",
      "Lors des grandes batailles, elles mènent des attaques furtives sur les chefs ennemis et coordonnent les missions secrètes qui assurent la victoire de la Ligue.",
    ],
  },
};
