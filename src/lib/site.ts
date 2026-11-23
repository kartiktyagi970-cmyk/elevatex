export const site = {
  name: "ElevateX Digital",
  shortName: "ElevateX",
  tagline: "We elevate your brand",
  promise: "We build brands that grow.",
  description:
    "ElevateX Digital is a digital marketing and business management studio based in Panipat, Haryana. We build high-performing websites, social media, SEO, Meta ads and video edits — backed by smarter business systems and automation.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.elevatex.website",
  locale: "en_IN",
  contact: {
    founderName: "Kartik Tyagi",
    founderRole: "Founder",
    email: "kartiktyagi970@gmail.com",
    phoneDisplay: "+91 85710 64108",
    phoneHref: "tel:+918571064108",
    whatsapp: "918571064108",
    locationShort: "Panipat, Haryana",
    locationLong: "Panipat, Haryana, India",
    website: "https://www.elevatex.website/",
    websiteLabel: "www.elevatex.website",
    altWebsite: "elevatexdigital.com",
    instagramHandle: "@kartik_tyagi_ji12",
    instagramUrl: "https://www.instagram.com/kartik_tyagi_ji12/",
  },
} as const;

export const whatsappMessage =
  "Hi ElevateX Digital, I found you online and I'd like to talk about growing my brand.";

export const whatsappLink = (message: string = whatsappMessage) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

export type IconName = "code" | "social" | "seo" | "ads" | "video" | "system" | "design" | "brand";

export type Service = {
  slug: string;
  number: string;
  title: string;
  kicker: string;
  summary: string;
  deliverables: string[];
  icon: IconName;
  meta?: string;
};

export const services: Service[] = [
  {
    slug: "website-development",
    number: "01",
    title: "Website Development",
    kicker: "Modern websites. Stronger brands.",
    summary:
      "Our first service. Fast, responsive, SEO-friendly websites designed around your offer — from a single landing page to a full online store.",
    deliverables: ["Custom Websites", "Landing Pages", "E-commerce Stores", "UI/UX Design"],
    icon: "code",
    meta: "₹20K – ₹30K · Negotiable",
  },
  {
    slug: "social-media-marketing",
    number: "02",
    title: "Social Media Marketing",
    kicker: "Content that earns attention.",
    summary:
      "A consistent social presence built on clear creative direction — planned content, sharper visuals and a feed that feels like your brand.",
    deliverables: ["Content Planning", "Social Media Management", "Creative Direction", "Community & Engagement"],
    icon: "social",
    meta: "Included in the Growth Package",
  },
  {
    slug: "seo",
    number: "03",
    title: "Search Engine Optimisation",
    kicker: "Be found by the right people.",
    summary:
      "Technical and on-page SEO that gives your website a fair chance to rank — clean structure, useful content and search-ready foundations.",
    deliverables: ["Technical SEO", "On-Page Optimisation", "Local Search Setup", "Content Structure"],
    icon: "seo",
    meta: "Custom scope",
  },
  {
    slug: "meta-ads",
    number: "04",
    title: "Meta Ads Management",
    kicker: "Ads that convert.",
    summary:
      "Facebook and Instagram campaigns designed around one job: turning attention into enquiries, leads and sales — measured and refined.",
    deliverables: ["Facebook & Instagram Ads", "Campaign Management", "Lead Generation", "Ad Creatives"],
    icon: "ads",
    meta: "Digital marketing & paid social",
  },
  {
    slug: "video-editing",
    number: "05",
    title: "Video Editing",
    kicker: "Scroll-stopping edits.",
    summary:
      "Short-form video and ad creatives cut for social — reels, shorts and promos with pace, rhythm and a clear reason to watch.",
    deliverables: ["Reels & Shorts", "Ad Creatives", "Brand & Promo Videos", "Social-First Edits"],
    icon: "video",
    meta: "Custom scope",
  },
  {
    slug: "graphic-design",
    number: "06",
    title: "Graphic Design",
    kicker: "Design that carries the brand.",
    summary:
      "Consistent, considered visuals across everything you publish — so your ads, posts and pages look like they came from the same brand.",
    deliverables: ["Social Media Creatives", "Ad & Campaign Design", "Posters & Print Collateral", "Presentation & Deck Design"],
    icon: "design",
    meta: "Custom scope",
  },
  {
    slug: "branding-digital-strategy",
    number: "07",
    title: "Branding & Digital Strategy",
    kicker: "Direction before design.",
    summary:
      "A clear position, a coherent identity and a practical plan for the channels that matter — the thinking that makes the rest of the work perform.",
    deliverables: ["Brand Positioning", "Visual Identity Direction", "Content & Channel Strategy", "Launch Planning"],
    icon: "brand",
    meta: "Custom scope",
  },
  {
    slug: "business-management-automation",
    number: "08",
    title: "Business Management & Automation",
    kicker: "Better systems. Bigger dreams.",
    summary:
      "We help founders run smoother behind the scenes: cleaner processes, connected tools and automation that removes repetitive work.",
    deliverables: [
      "Process Setup & Optimization",
      "CRM & Tools Management",
      "Reporting & Analytics",
      "Workflow & CRM Automation",
    ],
    icon: "system",
    meta: "Business Management Package ₹15,500",
  },
];

export const capabilityGroups = [
  {
    title: "Website Development",
    icon: "code" as IconName,
    items: ["Custom Websites", "Landing Pages", "E-commerce Stores", "UI/UX Design"],
  },
  {
    title: "Business Management",
    icon: "social" as IconName,
    items: [
      "Process Setup & Optimization",
      "CRM & Tools Management",
      "Reporting & Analytics",
      "Operations Support",
    ],
  },
  {
    title: "Automation",
    icon: "system" as IconName,
    items: ["Workflow Automation", "CRM Automation", "Social Media Automation", "API Integrations"],
  },
];

export type Project = {
  slug: string;
  client: string;
  category: string;
  headline: string;
  subline: string;
  summary: string;
  deliverables: string[];
  image: string;
  detailImage: string;
  imageAlt: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "lumiere",
    client: "LUMIÈRE",
    category: "Website Design",
    headline: "Timeless Elegance",
    subline: "Luxury jewellery for life's most beautiful moments.",
    summary:
      "An editorial jewellery store experience — quiet typography, deep blacks and product storytelling that lets the pieces lead.",
    deliverables: ["Website design", "Luxury art direction", "Collection storytelling"],
    image: "/assets/images/lumiere-hero.jpg",
    detailImage: "/assets/images/lumiere-detail.jpg",
    imageAlt: "Model wearing a fine necklace — LUMIÈRE jewellery store website design",
    accent: "#d8c3a0",
  },
  {
    slug: "the-ember",
    client: "The Ember",
    category: "Website Design",
    headline: "Good Food, Better Vibes",
    subline: "Fresh ingredients. Bold flavours. Unforgettable moments.",
    summary:
      "A restaurant website built to make people hungry — menu-led layouts, warm imagery and a simple route from discovery to booking.",
    deliverables: ["Website design", "Menu presentation", "Reservation enquiry flow"],
    image: "/assets/images/ember-hero.jpg",
    detailImage: "/assets/images/ember-detail.jpg",
    imageAlt: "Gourmet plated dish — The Ember restaurant website design",
    accent: "#e0b98a",
  },
  {
    slug: "velore",
    client: "VELORE",
    category: "E-Commerce",
    headline: "Style Defines You",
    subline: "Premium fashion for the modern you.",
    summary:
      "A fashion e-commerce build with a confident, minimal storefront — strong collections, clean product pages and a shop-now journey.",
    deliverables: ["E-commerce store", "Collection pages", "Shopping journey"],
    image: "/assets/images/velore-hero.jpg",
    detailImage: "/assets/images/velore-detail.jpg",
    imageAlt: "Fashion model in a dark studio — VELORE fashion e-commerce store",
    accent: "#cfc6bb",
  },
];

export const packages = [
  {
    slug: "digital-marketing",
    kicker: "Grow your business online",
    title: "Digital Marketing Package",
    price: "₹15,500",
    compareAt: null as string | null,
    badge: null as string | null,
    includes: ["Digital marketing", "Social media", "Ads that convert", "Lead generation"],
    close: "Let's scale your brand",
    featured: false,
  },
  {
    slug: "business-management",
    kicker: "Manage your business. Grow with confidence.",
    title: "Business Management Package",
    price: "₹15,500",
    compareAt: null,
    badge: null,
    includes: ["Business strategy", "Operations", "Growth planning", "Reporting support"],
    close: "Let's build a stronger business",
    featured: false,
  },
  {
    slug: "combo-offer",
    kicker: "Two courses. One powerful package.",
    title: "Combo Offer",
    price: "₹30,000",
    compareAt: "₹31,000",
    badge: "Limited time offer",
    includes: [
      "Digital Marketing Package",
      "Business Management Package",
      "Learn at your pace",
      "Certificate of completion",
      "Lifetime support",
      "Skills for real careers",
    ],
    close: "Let's build your future together",
    featured: true,
  },
];

export const websitePackage = {
  kicker: "Our first service",
  title: "Website Design",
  promise: "Modern websites. Stronger brands.",
  price: "₹20K – ₹30K",
  note: "Negotiable",
  includes: ["Responsive design", "Fast loading", "SEO friendly", "Modern UI/UX"],
};

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    copy: "We start with your goals, audience and offer — so every decision has a reason behind it.",
  },
  {
    number: "02",
    title: "Strategy",
    copy: "Scope, positioning and the right channels: website, social, search or paid media.",
  },
  {
    number: "03",
    title: "Build",
    copy: "Design, development, creatives and systems — produced with care and reviewed together.",
  },
  {
    number: "04",
    title: "Grow",
    copy: "Launch, learn and refine. Reporting and analytics show what is working, and what is next.",
  },
];

export const principles = [
  {
    title: "Strategy before decoration",
    copy: "A beautiful page that does not sell is decoration. We design around your commercial goal.",
  },
  {
    title: "Clarity is premium",
    copy: "Clean structure, honest copy and obvious next steps. No noise, no gimmicks.",
  },
  {
    title: "Systems make growth repeatable",
    copy: "Websites, automation and reporting working together — so growth is not a one-off spike.",
  },
  {
    title: "Real talent, real work",
    copy: "A remote, flexible, global way of working with people who actually do the work.",
  },
];

export const faqs = [
  {
    q: "How much does a website cost?",
    a: "Website design starts at ₹20K – ₹30K, and the final quote is negotiable based on pages, features and scope. Every build is responsive, fast loading, SEO friendly and designed with a modern UI/UX approach.",
  },
  {
    q: "What is included in the Digital Marketing Package?",
    a: "The ₹15,500 Digital Marketing Package covers digital marketing, social media, ads that convert and lead generation — built to help you grow your business online.",
  },
  {
    q: "What is included in the Business Management Package?",
    a: "The ₹15,500 Business Management Package focuses on business strategy, operations and growth planning, so you can manage your business and grow with confidence.",
  },
  {
    q: "Can I take both packages together?",
    a: "Yes. The Combo Offer brings both courses into one powerful package for ₹30,000 instead of ₹31,000. It includes learning at your pace, a certificate of completion, lifetime support and skills for real careers. It is a limited time offer.",
  },
  {
    q: "Do you work with clients outside Haryana?",
    a: "Yes. We are based in Panipat, Haryana and work remotely, flexibly and globally. Websites, marketing and business systems can be delivered entirely online.",
  },
  {
    q: "How do we get started?",
    a: "Send the contact form, message us on WhatsApp at +91 8571064108, or DM us on Instagram. Tell us what you are building and we will take it from there.",
  },
];

export const serviceOptions = [
  ...services.map((service) => service.title),
  "Digital Marketing Package",
  "Business Management Package",
  "Combo Offer (Both Packages)",
];

export const budgetOptions = [
  "Website design (₹20K – ₹30K)",
  "Digital Marketing Package (₹15,500)",
  "Business Management Package (₹15,500)",
  "Combo Offer (₹30,000)",
  "SEO / Meta Ads / Video editing",
  "Not sure yet — advise me",
];

export const creatorRoles = [
  "Website Development",
  "Business Management",
  "Automation",
  "Social Media & Content",
  "Video Editing",
];
