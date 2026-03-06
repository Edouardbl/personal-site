export type Lang = "en" | "fr"

interface NavContent {
  name: string
  links: { label: string; href: string }[]
}

interface HeroContent {
  headline: string
  subline: string
}

interface WorkItem {
  company: string
  metric: string
  description: string
  tags: string
  period: string
}

interface WorkContent {
  label: string
  intro: string
  items: WorkItem[]
}

interface Pillar {
  title: string
  body: string
}

interface PhilosophyContent {
  label: string
  intro: string
  pillars: Pillar[]
}

interface RoleItem {
  title: string
  company: string
  period: string
  description: string
}

interface TeachingItem {
  title: string
  org: string
  period: string
  description: string
}

interface PathContent {
  label: string
  roles: RoleItem[]
  teaching: TeachingItem
}

interface AboutContent {
  label: string
  short: string
  details: string
  interests: string
}

interface ContactContent {
  label: string
  headline: string
  sub: string
  email: string
  linkedinHandle: string
  linkedinLabel: string
}

interface FooterContent {
  copy: string
  ai: string
}

export interface SiteContent {
  nav: NavContent
  hero: HeroContent
  work: WorkContent
  philosophy: PhilosophyContent
  path: PathContent
  about: AboutContent
  contact: ContactContent
  footer: FooterContent
}

const en: SiteContent = {
  nav: {
    name: "Edouard Blondeau",
    links: [
      { label: "Work", href: "#work" },
      { label: "Path", href: "#path" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    headline: "Business impact, built through product and people.",
    subline:
      "Developing product teams that create meaningful, measurable impact.",
  },

  work: {
    label: "Selected Work",
    intro: "Three engagements. Different sectors, same level of rigor.",
    items: [
      {
        company: "Zeway",
        metric: "Conversion +6pts · Time-to-market −40%",
        description:
          "Structured a product organization across 7 cities. Led 4 cross-functional teams on a shared OKR roadmap - from churn management to usage-based pricing and a second-hand sales channel built from scratch.",
        tags: "E-mobility · Org design · Growth",
        period: "2024–2025",
      },
      {
        company: "Choose",
        metric: "Day-1 retention +5pts · Funnel conversion +2pts",
        description:
          "Built and led the 7-person mobile product team. Deployed the app in the US market, established a continuous discovery-delivery process, and improved core retention and conversion metrics.",
        tags: "E-commerce · Mobile · Retention",
        period: "2022–2024",
      },
      {
        company: "Salomon",
        metric: "30% of 150K dormant users reactivated - first month",
        description:
          "Designed and launched a US loyalty program targeting 150K dormant users. Coordinated cross-team effort across Amer Sports group and Salomon, integrating omnichannel data into customer profiles.",
        tags: "Sports & lifestyle · Loyalty · US market",
        period: "Via Wivoo · 2020–2022",
      },
    ],
  },

  philosophy: {
    label: "How I Operate",
    intro: "Not a framework. A way of working.",
    pillars: [
      {
        title: "Every bet has a hypothesis.",
        body: "Roadmaps should answer a business question. I work backwards from outcomes, keep teams anchored to what matters, and make results transparent to the full organization.",
      },
      {
        title: "Build the system, not just the feature.",
        body: "Strong product organizations ship with rhythm. I put discovery, delivery, and prioritization processes in place alongside writing a roadmap;\nto make progress visible and decisions defensible.",
      },
      {
        title: "Grow the people who grow the product.",
        body: "I coach PMs to own their work end-to-end: with the rigor to say no, the clarity to explain why, and the confidence to align upward. My job is to give context, protect focus, and get out of the way.",
      },
  
    ],
  },

  path: {
    label: "Path",
    roles: [
      {
        title: "Head of Product",
        company: "Zeway — E-mobility, Paris",
        period: "2024–2025",
        description:
          "Led product strategy and org design for an electric scooter subscription network across 7 cities. Managed 4 cross-functional teams and 15+ tech collaborators. Introduced usage-based pricing and a second-hand sales channel.",
      },
      {
        title: "Lead Product Manager",
        company: "Choose — E-commerce, Paris",
        period: "2022–2024",
        description:
          "Built and led the mobile product team of 7. Drove US market expansion and product-market fit validation. Improved Day-1 retention and funnel conversion across two successive roles.",
      },
      {
        title: "Senior Product Manager",
        company: "Wivoo — Product consulting, Paris",
        period: "2020–2022",
        description:
          "Long-term product missions at Salomon, Accor, and Kadensis. Led a 6-person innovation tribe. Delivered data training to 50+ consultants across the firm.",
      },
      {
        title: "Product Manager",
        company: "Numa - Innovation consulting, Paris",
        period: "2016–2019",
        description:
          "Created Numa's first packaged training catalog scaling from zero to 1,200+ leads, 42% conversion rate, and +750% revenue in under 2.5 years.",
      },
    ],
    teaching: {
      title: "Guest Lecturer",
      org: "Paris 1 Panthéon-Sorbonne & Paris Dauphine Universities",
      period: "2018–present",
      description:
        "Designed and taught courses in Product Management, Growth-Hacking & No-Code, and Design Thinking. Mentored 300+ MSc students.",
    },
  },

  about: {
    label: "About",
    short:
      "I've spent ten years building product, teams and systems; from zero to scaling. What drives me is the intersection of clarity and execution: getting teams aligned, products shipped, and making sure both the business and the user benefit. I also teach product management and growth at Panthéon-Sorbonne and Dauphine universities because the best way to understand something is to be able to explain it.",
    details:
      "Full-stack developer certificate (Le Wagon, 2019). French (native) · English (C1) · Spanish (B2).",
    interests: "Cycling. Boxing. Ski touring. Guitar - 16 years.",
  },

  contact: {
    label: "Contact",
    headline: "Let's talk.",
    sub: "If you're building something ambitious and need someone to structure the product side — I'd like to hear about it.",
    email: "edouardbl@gmail.com",
    linkedinHandle: "edouard-blondeau",
    linkedinLabel: "linkedin.com/in/edouard-blondeau",
  },

  footer: {
    copy: "© 2026 Edouard Blondeau",
    ai: "Crafted with intent and a little help from Claude.",
  },
}

const fr: SiteContent = {
  nav: {
    name: "Edouard Blondeau",
    links: [
      { label: "Travaux", href: "#work" },
      { label: "Parcours", href: "#path" },
      { label: "À propos", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    headline: "Un impact concret, construit par le produit et par les équipes.",
    subline:
      "Product leader basé à Paris. 10 ans à structurer des organisations produit — mobilité, e-commerce, conseil.",
  },

  work: {
    label: "Sélection de missions",
    intro: "Trois missions. Des secteurs différents, le même niveau d'exigence.",
    items: [
      {
        company: "Zeway",
        metric: "Conversion +6pts · Time-to-market −40%",
        description:
          "Structuré l'organisation produit sur 7 villes. Piloté 4 équipes cross-fonctionnelles sur un roadmap OKR partagé — gestion du churn, nouveau modèle tarifaire et canal de vente secondaire construit de zéro.",
        tags: "E-mobilité · Org design · Croissance",
        period: "2024–2025",
      },
      {
        company: "Choose",
        metric: "Rétention J+1 +5pts · Conversion funnel +2pts",
        description:
          "Construit et piloté l'équipe produit mobile de 7 personnes. Déployé l'app aux États-Unis, mis en place le processus discovery-delivery, et amélioré les métriques clés de rétention et de conversion.",
        tags: "E-commerce · Mobile · Rétention",
        period: "2022–2024",
      },
      {
        company: "Salomon",
        metric: "30% de 150K utilisateurs dormants réactivés — premier mois",
        description:
          "Conçu et lancé un programme de fidélité aux États-Unis ciblant 150K utilisateurs dormants. Coordination cross-équipes Amer Sports et Salomon, intégration de données omnicanal dans les profils clients.",
        tags: "Sport & lifestyle · Fidélité · Marché US",
        period: "Via Wivoo · 2020–2022",
      },
    ],
  },

  philosophy: {
    label: "Ma façon de travailler",
    intro: "Pas une théorie. Une manière d'opérer.",
    pillars: [
      {
        title: "Construire le système, pas juste la feature.",
        body: "Les organisations produit solides avancent avec rythme. Je mets en place les processus de discovery, de delivery et de priorisation avant d'écrire un roadmap — pour rendre le progrès visible et les décisions défendables.",
      },
      {
        title: "Faire grandir les équipes.",
        body: "Je coache les PMs à s'approprier leurs sujets end-to-end — avec la rigueur pour dire non, la clarté pour expliquer pourquoi, et la confiance pour aligner en haut. Mon rôle : donner le contexte, protéger le focus, m'effacer.",
      },
      {
        title: "Chaque pari a une hypothèse.",
        body: "Un roadmap doit répondre à une question business. Je travaille à rebours des outcomes, garde les équipes ancrées sur ce qui compte, et rends les résultats — bons ou mauvais — transparents pour toute l'organisation.",
      },
    ],
  },

  path: {
    label: "Parcours",
    roles: [
      {
        title: "Head of Product",
        company: "Zeway — E-mobilité, Paris",
        period: "2024–2025",
        description:
          "Pilotage de la stratégie produit et de l'organisation sur un réseau de scooters électriques en abonnement dans 7 villes. Management de 4 équipes cross-fonctionnelles et 15+ collaborateurs tech.",
      },
      {
        title: "Lead Product Manager",
        company: "Choose — E-commerce, Paris",
        period: "2022–2024",
        description:
          "Construction et animation de l'équipe produit mobile (7 personnes). Déploiement aux États-Unis et validation du product-market fit. Amélioration des métriques de rétention et de conversion sur deux rôles successifs.",
      },
      {
        title: "Product Manager",
        company: "Wivoo — Conseil produit, Paris",
        period: "2020–2022",
        description:
          "Missions produit longue durée chez Salomon, Accor et Kadensis. Animation d'un pôle innovation de 6 consultants. Formation SQL dispensée à 30+ consultants.",
      },
      {
        title: "Product Manager",
        company: "Numa — Conseil en innovation, Paris",
        period: "2016–2019",
        description:
          "Création du premier catalogue de formations de Numa — de zéro à 1 200+ leads, 42% de taux de conversion et +750% de CA en moins de 2,5 ans.",
      },
    ],
    teaching: {
      title: "Enseignant invité",
      org: "Paris 1 Panthéon-Sorbonne & Paris Dauphine",
      period: "2018–présent",
      description:
        "Cours conçus et enseignés : Product Management, Growth-Hacking & No-Code, Design Thinking. Plus de 300 étudiants en master accompagnés.",
    },
  },

  about: {
    label: "À propos",
    short:
      "Dix ans à construire des équipes et des systèmes produit — du zéro au passage à l'échelle. Ce qui m'anime : l'articulation entre clarté et exécution — aligner les équipes, livrer les produits, et faire en sorte que l'entreprise et les utilisateurs en bénéficient. J'enseigne également le product management et le growth à la Sorbonne et à Paris Dauphine — parce que la meilleure façon de comprendre quelque chose est de savoir l'expliquer.",
    details:
      "Certificat développeur full-stack (Le Wagon, 2019). Français (natif) · Anglais (C1) · Espagnol (B2).",
    interests: "Cyclisme. Boxe. Ski de randonnée. Guitare - 16 ans.",
  },

  contact: {
    label: "Contact",
    headline: "Parlons-en.",
    sub: "Ouvert aux conversations autour de postes Head of Product, VP Product et CPO ainsi qu'aux missions de conseil.",
    email: "edouardbl@gmail.com",
    linkedinHandle: "edouard-blondeau",
    linkedinLabel: "linkedin.com/in/edouard-blondeau",
  },

  footer: {
    copy: "© 2026 Edouard Blondeau",
    ai: "Conçu avec soin et un peu d'aide de Claude.",
  },
}

export const content: Record<Lang, SiteContent> = { en, fr }
