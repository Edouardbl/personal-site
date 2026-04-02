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
  bookingLabel: string
  bookingUrl: string
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
          "Structured a product organization across 7 cities and aligned 4 cross-functional teams around a shared OKR roadmap.\nLed key product initiatives across pricing, churn reduction and marketplace expansion; including usage-based pricing and a second-hand sales channel built from scratch on Shopify in < 1 week.\nLeveraged data-driven discovery and AI-assisted user feedback analysis to accelerate product decisions and improve conversion.",
        tags: "e-Mobility · Pricing model · Product org",
        period: "2024–2025",
      },
      {
        company: "Choose",
        metric: "Day-1 retention +5pts · Funnel conversion +2pts",
        description:
          "Built and scaled the mobile product team (7 people) and introduced a continuous discovery-delivery process.\nExpanded the mobile app to the US market while improving core product loops across activation, retention and conversion.\nData insights and AI-assisted experimentation helped optimize the funnel and strengthen user engagement.",
        tags: "E-commerce · Growth · Retention",
        period: "2022–2024",
      },
      {
        company: "Salomon",
        metric: "30% dormant users reactivated · 150K users targeted",
        description:
          "Designed and launched a US loyalty program targeting 150K dormant users.\nWorked across Amer Sports teams to connect omnichannel data into unified customer profiles and enable personalized engagement.\n30% of inactive users were reactivated within the first month.",
        tags: "Sports retail · Loyalty · Customer data",
        period: "2022",
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
      org: "Paris 1 Panthéon-Sorbonne & Paris-Dauphine Universities",
      period: "2018–present",
      description:
        "Designed and taught courses in Product Management, Growth-Hacking & No-Code, and Design Thinking. Mentored 300+ MSc students.",
    },
  },

  about: {
    label: "About",
    short:
      "I've spent ten years building product, teams and systems; from zero to scaling. What drives me is the intersection of clarity and execution: getting teams aligned, products shipped, and making sure both the business and the user benefit. I also teach product management and growth at Panthéon-Sorbonne and Paris-Dauphine universities; because the best way to understand something is to be able to explain it.",
    details:
      "Full-stack developer certificate (Le Wagon, 2019). French (native) · English (C1) · Spanish (B2).",
    interests: "Cycling. Boxing. Ski touring. Guitar. Concerts.",
  },

  contact: {
    label: "Contact",
    headline: "Let's talk.",
    sub: "If you're building something ambitious and need someone to structure the product side  I'd like to hear about it.",
    email: "edouardbl@gmail.com",
    linkedinHandle: "edouard-blondeau",
    linkedinLabel: "linkedin.com/in/edouard-blondeau",
    bookingLabel: "Book a 30-min call",
    bookingUrl: "https://calendar.app.google/Rgw1CpfLjJwANwjf8",
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
    headline: "Impact business, porté par le produit et les équipes.",
    subline:
      "Transformer la stratégie produit en impact business concret.",
  },

  work: {
    label: "Sélection de missions",
    intro: "Trois missions. Des secteurs différents, le même niveau d'exigence.",
    items: [
      {
        company: "Zeway",
        metric: "Conversion +6pts · Time-to-market −40%",
        description:
          "Structuration de l'organisation produit sur 7 villes et alignement de 4 équipes cross-fonctionnelles autour d'une roadmap OKR transverse.\nPilotage de plusieurs chantiers structurants — pricing à l'usage, réduction du churn et lancement d'un canal de revente de scooters d'occasion sur Shopify en < 1 semaine.\nApproche data-driven et analyse de feedback utilisateurs assistée par IA pour accélérer les décisions produit et améliorer la conversion.",
        tags: "e-Mobility · Pricing model · Product org",
        period: "2024–2025",
      },
      {
        company: "Choose",
        metric: "Day-1 retention +5pts · Funnel conversion +2pts",
        description:
          "Construction et structuration de l'équipe produit mobile (7 personnes) et mise en place d'un cycle continu discovery-delivery.\nDéploiement de l'application sur le marché américain et optimisation des principaux leviers produit : activation, rétention et conversion.\nL'exploitation des données et l'expérimentation assistée par IA ont permis d'améliorer la performance du funnel et l'engagement utilisateur.",
        tags: "E-commerce · Growth · Retention",
        period: "2022–2024",
      },
      {
        company: "Salomon",
        metric: "30% dormant users reactivated · 150K users targeted",
        description:
          "Conception et lancement d'un programme de fidélité aux États-Unis ciblant 150 000 utilisateurs inactifs.\nCoordination des équipes du groupe Amer Sports pour connecter les données omnicanales et enrichir les profils clients.\n30 % des utilisateurs dormants ont été réactivés dès le premier mois.",
        tags: "Sports retail · Loyalty · Customer data",
        period: "2022",
      },
    ],
  },

  philosophy: {
    label: "Ma façon de travailler",
    intro: "Pas un framework. Une manière d'opérer.",
    pillars: [
      {
        title: "Chaque pari commence par une hypothèse.",
        body: "Une roadmap doit répondre à une question business. Je pars des outcomes pour orienter les décisions produit, garde les équipes concentrées sur ce qui compte, et rends les résultats visibles pour toute l'organisation.",
      },
      {
        title: "Construire le système, pas seulement la feature.",
        body: "Les organisations produit solides avancent avec rythme et vélocité. Je mets en place les processus de discovery, de delivery et de priorisation en même temps que la roadmap, pour rendre le progrès visible et les décisions claires pour tous.",
      },
      {
        title: "Faire grandir les personnes qui font grandir le produit.",
        body: "Je coache les PMs pour qu'ils s'approprient leurs sujets de bout en bout : avec la rigueur de dire non, la clarté d'expliquer pourquoi, et la confiance de viser haut.",
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
      "Dix ans à construire des équipes et des systèmes produit, de zéro au passage à l'échelle. Ce qui m'anime : l'articulation entre clarté et exécution, aligner les équipes, et faire en sorte que l'entreprise et les utilisateurs en bénéficient. J'enseigne également le product management et le growth à l'université Paris 1 Panthéon-Sorbonne et à Paris-Dauphine; parce que la meilleure façon de comprendre quelque chose est de savoir l'expliquer.",
    details:
      "Certificat développeur full-stack (Le Wagon, 2019). Français (natif) · Anglais (C1) · Espagnol (B2).",
    interests: "Cyclisme. Boxe. Ski de randonnée. Guitare. Concerts.",
  },

  contact: {
    label: "Contact",
    headline: "Parlons-en.",
    sub: "Ouvert aux conversations autour de postes Head of Product, VP Product et CPO ainsi qu'aux missions de conseil.",
    email: "edouardbl@gmail.com",
    linkedinHandle: "edouard-blondeau",
    linkedinLabel: "linkedin.com/in/edouard-blondeau",
    bookingLabel: "Réserver un appel de 30 min",
    bookingUrl: "https://calendar.app.google/Rgw1CpfLjJwANwjf8",
  },

  footer: {
    copy: "© 2026 Edouard Blondeau",
    ai: "Conçu avec soin et un peu d'aide de Claude.",
  },
}

export const content: Record<Lang, SiteContent> = { en, fr }
