import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that apply when you use the ElevateX Digital website, request a quote, purchase a package or engage us for website development, marketing or business systems work.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const updated = "1 January 2026";

const sections: LegalSection[] = [
  {
    heading: "Agreement",
    body: [
      `These Terms & Conditions govern your use of ${site.contact.websiteLabel} and any services you request from ${site.name}. By using this website or engaging us, you agree to these terms. If you do not agree, please do not use the site or our services.`,
    ],
  },
  {
    heading: "Our services",
    body: [
      "We provide website design and development, social media marketing, search engine optimisation, Meta ads, video editing, digital marketing support, business management and automation. This includes the packages and courses published on this website.",
    ],
  },
  {
    heading: "Quotes, packages and pricing",
    list: [
      "Website design is published at ₹20K – ₹30K and is negotiable. The final price depends on scope, features and pages, and is confirmed in writing before work begins.",
      "The Digital Marketing Package and Business Management Package are published at ₹15,500 each.",
      "The Combo Offer is published at ₹30,000 (instead of ₹31,000) and is marked as a limited time offer. Availability may change.",
      "Prices on the website reflect the offers we publish and may be updated. Prices are exclusive of any third-party platform costs, such as advertising budgets, domains, hosting or paid software, unless we say otherwise in writing.",
      "No offer is binding until we confirm it in writing and, where applicable, receive the agreed payment.",
    ],
  },
  {
    heading: "Enquiries do not create a contract",
    body: [
      "Submitting the contact form or messaging us on WhatsApp or Instagram is an enquiry. It does not obligate either side to proceed. A project begins only when both parties agree the scope, fees and timeline in writing.",
    ],
  },
  {
    heading: "Your responsibilities",
    list: [
      "Provide accurate project information, content, brand assets and access needed for the work.",
      "Make sure you have permission to use any content, logo, image, video or material you give us.",
      "Review deliverables and give clear, timely feedback.",
      "Use the services lawfully and follow the rules of any platform you ask us to operate on your behalf.",
    ],
  },
  {
    heading: "Third-party platforms",
    body: [
      "Websites and campaigns depend on third-party services such as hosting providers, search engines, Meta (Facebook and Instagram) and analytics tools. Their rules, availability, pricing and algorithms are outside our control. We are not responsible for outages, platform policy decisions, account restrictions or changes that affect work delivered.",
    ],
  },
  {
    heading: "No guarantee of specific results",
    body: [
      "We bring skill, experience and a clear process, but we cannot promise specific rankings, reach, leads, followers or revenue. Marketing results depend on your offer, market, budget, competition and platform behaviour. Any examples shown on this site describe design work, not a guarantee of future performance.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "Unless agreed otherwise in writing, final deliverables are licensed to you for your business use after payment of the agreed fees. We retain ownership of our underlying methods, templates, code libraries and internal materials. We may show the work in our portfolio and marketing unless you ask us not to.",
      "Content on this website — including the ElevateX Digital name, logo, text and layout — belongs to ElevateX Digital and may not be copied or reused without permission.",
    ],
  },
  {
    heading: "Confidentiality",
    body: [
      "Each side should keep the other's non-public business information confidential and use it only for the purpose of the engagement, except where disclosure is required by law.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "To the extent permitted by law, ElevateX Digital is not liable for indirect or consequential losses, lost profits or lost data. Our total liability for any claim relating to a project is limited to the fees paid to us for that project. Nothing in these terms limits liability that cannot lawfully be limited.",
    ],
  },
  {
    heading: "Suspension and termination",
    body: [
      "Either party may end an engagement with written notice. Fees for work already completed remain payable. We may decline or stop work that is unlawful, misleading or outside our scope.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of India. Courts in Haryana, India, have jurisdiction over disputes, unless a different jurisdiction is required by applicable consumer law.",
      `Questions about these terms? Email ${site.contact.email} or call ${site.contact.phoneDisplay}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="The practical ground rules for using this website and working with ElevateX Digital, written to be read — not buried."
      updated={updated}
      sections={sections}
      current="/terms"
    />
  );
}
