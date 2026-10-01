// Central V1 dataset. Relations use ids; URLs use slugs.
// Ambition.serviceIds is the source of truth for ambition↔service links;
// Case.serviceIds for case↔service links. The repository derives the reverse side.
import type { Ambition, Case, ContactPerson, Service } from "./types";
import wolkyImg from "@/assets/images/wolky_shoes_boardwalk_1790864210170.jpg";
import rogierImg from "@/assets/images/rogier_gilkes_portrait_1790864222450.jpg";
import motionBlurImg from "@/assets/images/motion_blur_cyclist_night_1790864233938.jpg";
import lightbulbImg from "@/assets/images/hands_holding_lightbulb_1790864243379.jpg";
import humanEyesImg from "@/assets/images/human_eyes_focus_close_1790864254877.jpg";
import koffie from "@/assets/case-koffie.jpg";
import digitaal from "@/assets/case-digitaal.jpg";
import identiteit from "@/assets/case-identiteit.jpg";

export const DEFAULT_CONTACT_ID = "c-rogier";

export const contacts: ContactPerson[] = [
  {
    id: "c-rogier",
    name: "Rogier Gilkes",
    role: "Managing Director",
    photo: rogierImg,
    email: "r.gilkes@nobears.nl",
    phone: "073 369 0000",
  },
  {
    id: "c-demo-strategie",
    name: "Demo Strateeg",
    role: "Strategy Lead (placeholder)",
    email: "strategie@example.com",
    note: "Placeholder — vervang door een echte collega.",
    isPlaceholder: true,
  },
  {
    id: "c-demo-content",
    name: "Demo Contentmaker",
    role: "Content Lead (placeholder)",
    email: "content@example.com",
    note: "Placeholder — vervang door een echte collega.",
    isPlaceholder: true,
  },
];

const p = (...t: string[]) => t;

export const services: Omit<Service, "ambitionIds" | "caseIds">[] = [
  {
    id: "s-merkstrategie",
    title: "Merkstrategie & positionering",
    slug: "merkstrategie-positionering",
    shortDescription: "Waar staat het merk voor en waarom kiest de klant ervoor?",
    description: p(
      "We brengen in kaart waar een merk vandaan komt, waar het naartoe wil en welke plek het in de markt kan claimen. Dat doen we met interviews, sessies en markt- en doelgroeponderzoek.",
      "Het resultaat is een scherpe positionering, een merkbelofte en een merkverhaal dat richting geeft aan alle volgende stappen: van huisstijl tot campagne.",
    ),
    image: motionBlurImg,
    searchTerms: [
      "branding",
      "positionering",
      "brand strategy",
      "merkwaarden",
      "merkbelofte",
      "merkidentiteit",
      "rebranding",
    ],
    contactPersonId: "c-rogier",
  },
  {
    id: "s-huisstijl",
    title: "Huisstijl",
    slug: "huisstijl",
    shortDescription: "Een visuele identiteit die herkenbaar en consistent is.",
    description: p(
      "Logo, kleur, typografie, beeldtaal en vormelementen: samen vormen ze het gezicht van een merk. We ontwerpen een identiteit die past bij de positionering en flexibel genoeg is voor elk kanaal.",
      "We leveren de huisstijl op met heldere richtlijnen, zodat iedereen er direct mee aan de slag kan.",
    ),
    image: lightbulbImg,
    searchTerms: [
      "logo",
      "visuele identiteit",
      "brand identity",
      "corporate identity",
      "styleguide",
      "brandbook",
      "kleurenpalet",
    ],
  },
  {
    id: "s-touchpoint",
    title: "Touchpoint - optimalisatie",
    slug: "touchpoint-optimalisatie",
    shortDescription: "Elk contactmoment met de klant slimmer en beter.",
    description: p(
      "We analyseren de contactmomenten tussen merk en klant: website, e-mail, winkel, service. Waar haken mensen af en waar liggen kansen?",
      "Op basis van data en gebruikersonderzoek verbeteren we die momenten stap voor stap, met meetbaar resultaat.",
    ),
    image: humanEyesImg,
    searchTerms: [
      "customer journey",
      "conversie",
      "cro",
      "ux",
      "klantreis",
      "optimalisatie",
      "touchpoints",
    ],
    contactPersonId: "c-demo-strategie",
  },
  {
    id: "s-campagne",
    title: "Campagne - strategie",
    slug: "campagne-strategie",
    shortDescription: "Een campagne-idee dat opvalt en werkt.",
    description: p(
      "Van inzicht naar creatief concept naar mediaplan. We bepalen welke boodschap bij welke doelgroep landt, en via welke kanalen.",
      "Een sterke campagne vergroot bekendheid, versterkt het merk en zet mensen in beweging.",
    ),
    image: motionBlurImg,
    searchTerms: [
      "campagne",
      "concept",
      "advertising",
      "reclame",
      "mediaplan",
      "creatief concept",
      "awareness",
    ],
  },
  {
    id: "s-contentstrategie",
    title: "Contentstrategie",
    slug: "contentstrategie",
    shortDescription: "Het juiste verhaal, op het juiste moment, op het juiste kanaal.",
    description: p(
      "We bepalen welke content een merk nodig heeft om zijn doelen te halen: welke thema's, welke formats en welk ritme.",
      "Zo wordt content geen losse verzameling posts, maar een samenhangend verhaal dat bijdraagt aan merk en business.",
    ),
    image: lightbulbImg,
    searchTerms: ["content plan", "redactieplan", "storytelling", "content marketing", "thema's"],
    contactPersonId: "c-demo-content",
  },
  {
    id: "s-content-socials",
    title: "Content (voor socials)",
    slug: "content-socials",
    shortDescription: "Social content die past bij het merk en het platform.",
    description: p(
      "Posts, reels, stories en ads voor Instagram, LinkedIn en TikTok. We maken content die past bij het platform én het merk.",
    ),
    image: humanEyesImg,
    searchTerms: ["social media", "instagram", "linkedin", "tiktok", "reels", "posts", "socials"],
  },
  {
    id: "s-content-website",
    title: "Content (voor website)",
    slug: "content-website",
    shortDescription: "Teksten en beeld die bezoekers overtuigen.",
    description: p(
      "We schrijven en maken content voor websites en landingspagina's: helder, vindbaar en in de tone of voice van het merk.",
    ),
    image: motionBlurImg,
    searchTerms: ["copywriting", "webteksten", "seo", "landingspagina", "tone of voice"],
  },
  {
    id: "s-video",
    title: "Video & film",
    slug: "video-film",
    shortDescription: "Bewegend beeld dat een verhaal vertelt.",
    description: p(
      "Van brandfilm tot korte social video's en recruitmentfilms. We verzorgen concept, productie en montage.",
    ),
    image: motionBlurImg,
    searchTerms: ["video", "film", "brandfilm", "videoproductie", "montage", "motion"],
  },
  {
    id: "s-animatie",
    title: "Animatie & 3D",
    slug: "animatie-3d",
    shortDescription: "Complexe ideeën helder en aantrekkelijk in beeld.",
    description: p(
      "Met motion design, explainers en 3D-visualisaties maken we producten en processen zichtbaar die je met een camera niet vastlegt.",
    ),
    image: humanEyesImg,
    searchTerms: ["animatie", "3d", "motion design", "explainer", "visualisatie", "render"],
  },
  {
    id: "s-fotografie",
    title: "Fotografie",
    slug: "fotografie",
    shortDescription: "Eigen beeld dat het merk laat zien zoals het is.",
    description: p(
      "Product-, campagne- en portretfotografie. We regisseren shoots die aansluiten bij de beeldtaal van het merk.",
    ),
    image: lightbulbImg,
    searchTerms: ["foto", "fotoshoot", "productfotografie", "beeld", "portret"],
  },
  {
    id: "s-drukwerk",
    title: "Drukwerk & offline middelen",
    slug: "drukwerk-offline",
    shortDescription: "Tastbare middelen die het merk versterken.",
    description: p(
      "Brochures, verpakkingen, beursmaterialen en signing. We ontwerpen en begeleiden de productie tot het eindresultaat.",
    ),
    image: lightbulbImg,
    searchTerms: ["print", "brochure", "verpakking", "packaging", "beurs", "signing", "flyer"],
  },
];

export const ambitions: Ambition[] = [
  {
    id: "a-sterk-merk",
    title: "Een sterk merk neerzetten",
    slug: "een-sterk-merk-neerzetten",
    shortDescription:
      "De klant wil een merk dat herkenbaar is, onderscheidend en waar mensen voor kiezen.",
    description: p(
      "Een sterk merk begint bij een helder verhaal: waar sta je voor en waarom doet dat ertoe? Daarna volgt de vertaling naar beeld, taal en gedrag op elk contactmoment.",
      "Vaak gaat het om een organisatie die gegroeid is, fuseert of merkt dat het huidige merk niet meer past bij wie ze nu zijn.",
    ),
    searchTerms: [
      "rebranding",
      "merk bouwen",
      "branding",
      "herkenbaarheid",
      "nieuw merk",
      "merk versterken",
    ],
    serviceIds: [
      "s-merkstrategie",
      "s-huisstijl",
      "s-campagne",
      "s-contentstrategie",
      "s-content-website",
      "s-video",
      "s-animatie",
      "s-fotografie",
      "s-drukwerk",
      "s-content-socials",
    ],
    contactPersonId: "c-rogier",
  },
  {
    id: "a-lancering",
    title: "Een nieuw product of dienst lanceren",
    slug: "nieuw-product-of-dienst-lanceren",
    shortDescription: "De klant heeft iets nieuws en wil dat met impact in de markt zetten.",
    description: p(
      "Een lancering vraagt om een scherpe propositie, een herkenbare uitstraling en een campagne die op het juiste moment de juiste mensen bereikt.",
    ),
    searchTerms: ["launch", "productlancering", "introductie", "go to market", "nieuw product"],
    serviceIds: ["s-merkstrategie", "s-campagne", "s-animatie", "s-video", "s-content-socials"],
  },
  {
    id: "a-bekendheid",
    title: "Mijn merkbekendheid vergroten",
    slug: "merkbekendheid-vergroten",
    shortDescription: "Meer mensen moeten het merk kennen en onthouden.",
    description: p(
      "Bekendheid bouw je met een consistente boodschap, een opvallend idee en zichtbaarheid op de kanalen waar de doelgroep zit.",
    ),
    searchTerms: ["awareness", "zichtbaarheid", "bekendheid", "bereik", "naamsbekendheid"],
    serviceIds: ["s-campagne", "s-content-socials", "s-video", "s-contentstrategie"],
    contactPersonId: "c-demo-content",
  },
  {
    id: "a-doelgroep",
    title: "Een nieuwe doelgroep bereiken",
    slug: "nieuwe-doelgroep-bereiken",
    shortDescription: "De klant wil mensen aanspreken die het merk nog niet kennen.",
    description: p(
      "Een nieuwe doelgroep vraagt om inzicht in hun drijfveren en een aanpak die daarop aansluit, zonder de bestaande klanten te verliezen.",
    ),
    searchTerms: ["target audience", "jongeren", "nieuwe klanten", "doelgroep", "persona"],
    serviceIds: ["s-merkstrategie", "s-contentstrategie", "s-content-socials", "s-campagne"],
  },
  {
    id: "a-markt",
    title: "Een nieuwe markt betreden",
    slug: "nieuwe-markt-betreden",
    shortDescription: "Uitbreiden naar een nieuwe sector of een nieuw land.",
    description: p(
      "Een nieuwe markt betekent nieuwe concurrenten, nieuwe verwachtingen en vaak een andere taal. Positionering en lokale vertaling zijn cruciaal.",
    ),
    searchTerms: ["internationalisering", "export", "expansie", "buitenland", "nieuwe sector"],
    serviceIds: ["s-merkstrategie", "s-campagne", "s-content-website"],
  },
  {
    id: "a-merkverhaal",
    title: "Mijn merkverhaal beter vertellen",
    slug: "merkverhaal-beter-vertellen",
    shortDescription: "Het verhaal is er, maar het komt nog niet goed over.",
    description: p(
      "We helpen het verhaal scherp te krijgen en vertalen het naar content die mensen raakt: in woord, beeld en film.",
    ),
    searchTerms: ["storytelling", "marketingverhaal", "boodschap", "verhaal", "messaging"],
    serviceIds: ["s-contentstrategie", "s-video", "s-content-website", "s-fotografie"],
    contactPersonId: "c-demo-content",
  },
  {
    id: "a-journey",
    title: "De customer journey verbeteren",
    slug: "customer-journey-verbeteren",
    shortDescription: "De klantreis moet soepeler, persoonlijker en effectiever.",
    description: p(
      "We kijken naar de hele reis van eerste kennismaking tot herhaalaankoop en verbeteren de momenten die het verschil maken.",
    ),
    searchTerms: ["klantreis", "klantervaring", "cx", "ux", "touchpoints", "klanttevredenheid"],
    serviceIds: ["s-touchpoint", "s-content-website"],
    contactPersonId: "c-demo-strategie",
  },
  {
    id: "a-leads",
    title: "Meer en/of betere leads genereren",
    slug: "meer-betere-leads-genereren",
    shortDescription: "Meer aanvragen, en vooral de juiste.",
    description: p(
      "Leads komen uit een samenspel van zichtbaarheid, overtuigende content en een website die converteert.",
    ),
    searchTerms: ["leadgeneratie", "aanvragen", "conversie", "sales", "b2b marketing", "funnel"],
    serviceIds: ["s-touchpoint", "s-campagne", "s-content-website", "s-contentstrategie"],
  },
  {
    id: "a-werven",
    title: "Nieuwe medewerkers werven",
    slug: "nieuwe-medewerkers-werven",
    shortDescription: "Talent aantrekken met een sterk werkgeversmerk.",
    description: p(
      "Employer branding draait om een eerlijk verhaal over werken bij de organisatie, verteld waar kandidaten zijn.",
    ),
    searchTerms: [
      "recruitment",
      "employer branding",
      "werving",
      "vacatures",
      "arbeidsmarktcommunicatie",
      "personeel",
    ],
    serviceIds: ["s-campagne", "s-video", "s-content-socials"],
  },
  {
    id: "a-intern",
    title: "Mijn merk intern laten doorleven",
    slug: "merk-intern-laten-doorleven",
    shortDescription: "Medewerkers moeten het merk begrijpen, voelen en uitdragen.",
    description: p(
      "Een merk leeft pas echt als medewerkers het dragen. We vertalen het merk naar middelen en momenten die intern landen.",
    ),
    searchTerms: [
      "interne communicatie",
      "internal branding",
      "cultuur",
      "medewerkers",
      "merkambassadeurs",
    ],
    serviceIds: ["s-merkstrategie", "s-video", "s-drukwerk"],
  },
  {
    id: "a-aanbod",
    title: "Mijn aanbod beter onder de aandacht brengen",
    slug: "aanbod-beter-onder-de-aandacht",
    shortDescription: "Het product of de dienst verdient meer aandacht.",
    description: p(
      "Met heldere content, sterk beeld en gerichte activatie zorgen we dat het aanbod gezien en begrepen wordt.",
    ),
    searchTerms: [
      "promotie",
      "activatie",
      "producten",
      "verkoop",
      "aandacht",
      "zichtbaarheid aanbod",
    ],
    serviceIds: ["s-fotografie", "s-animatie", "s-content-socials", "s-drukwerk"],
  },
];

export const cases: Case[] = [
  {
    id: "k-wolky",
    clientName: "Wolky",
    title: "Complete rebranding & herpositionering",
    slug: "wolky",
    image: wolkyImg,
    shortDescription:
      "Een nieuwe positionering en visuele identiteit voor het Nederlandse schoenenmerk, met een eigen campagnebeeld.",
    serviceIds: ["s-merkstrategie", "s-huisstijl", "s-fotografie"],
  },
  {
    id: "k-bonn",
    clientName: "Bonn Coffee (demo)",
    title: "Lanceringscampagne in de stad",
    slug: "bonn-coffee",
    image: koffie,
    shortDescription:
      "Van merkverhaal naar outdoor, video en social voor de introductie van een specialty koffiemerk.",
    serviceIds: ["s-merkstrategie", "s-campagne", "s-video", "s-content-socials"],
  },
  {
    id: "k-naturvita",
    clientName: "Naturvita (demo)",
    title: "Een identiteit die groeit",
    slug: "naturvita",
    image: identiteit,
    shortDescription: "Nieuwe merkidentiteit en drukwerk voor een duurzaam voedingsmerk.",
    serviceIds: ["s-merkstrategie", "s-huisstijl", "s-drukwerk"],
  },
  {
    id: "k-voltera",
    clientName: "Voltera (demo)",
    title: "Een klantreis zonder drempels",
    slug: "voltera",
    image: digitaal,
    shortDescription:
      "Nieuwe website, uitlegvideo's in 3D en een geoptimaliseerde aanvraagflow voor een energieleverancier.",
    serviceIds: ["s-touchpoint", "s-content-website", "s-animatie"],
  },
  {
    id: "k-werkgeluk",
    clientName: "Zorggroep Werkgeluk (demo)",
    title: "Werken waar het ertoe doet",
    slug: "werkgeluk",
    image: humanEyesImg,
    shortDescription: "Een recruitmentcampagne met echte medewerkers in film en social content.",
    serviceIds: ["s-campagne", "s-contentstrategie", "s-content-socials", "s-video"],
  },
];
