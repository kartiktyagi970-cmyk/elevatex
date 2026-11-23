import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Icon, Star } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { OfferCards, WebsiteOfferCard } from "@/components/packages";
import { PageHero, SectionHead, FaqList, CheckItem } from "@/components/ui";
import { capabilityGroups, faqs, processSteps, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Websites, SEO, Meta Ads & Video",
  description:
    "Website development, social media marketing, SEO, Meta ads, video editing and business systems — from ₹15,500 packages to custom scopes.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "ElevateX Digital services",
    description:
      "Websites, social media, SEO, Meta ads, video editing, business management and automation for growing brands.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Everything your brand needs to <span className="gold-text italic">move.</span>
          </>
        }
        intro="Websites that sell. Marketing that converts. Systems that keep the business steady. Pick a starting point — we will map the rest together."
        aside={
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="border border-white/12 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.14em] text-mist transition-colors hover:border-gold/50 hover:text-gold-soft"
              >
                {service.title.replace("Search Engine Optimisation", "SEO").replace("Business Management & Automation", "Business systems").replace("Branding & Digital Strategy", "Branding & Strategy")}
              </a>
            ))}
          </div>
        }
      />

      <section className="border-b border-white/[0.07] bg-[#070708]">
        <div className="wrap grid grid-cols-2 gap-px py-px sm:grid-cols-4">
          {["Responsive design", "Fast loading", "SEO friendly", "Modern UI/UX"].map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 px-3 py-5 text-center text-[0.62rem] uppercase tracking-[0.16em] text-mist/70">
              <Check className="h-3.5 w-3.5 text-gold" /> {item}
            </div>
          ))}
        </div>
      </section>

      <div className="wrap">
        {services.map((service, index) => (
          <section key={service.slug} id={service.slug} className="scroll-mt-28 border-b border-white/[0.07] py-12 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14">
              <Reveal>
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.06] text-gold">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold/70">
                      Service {service.number}
                    </p>
                    <h2 className="display mt-2 text-[clamp(2rem,3.6vw,2.9rem)]">{service.title}</h2>
                    <p className="mt-2 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-gold-soft/75">
                      {service.kicker}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="border border-white/12 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.14em] text-mist">
                    {service.meta}
                  </span>
                  <Link href={`/contact?interest=${service.slug}`} className="link-underline flex items-center gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-gold-soft">
                    Enquire <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <p className="max-w-xl text-[0.98rem] leading-relaxed text-mist">{service.summary}</p>
                <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-white/[0.08] pt-5">
                  <span className="font-display text-lg italic text-bone/80">{service.kicker}</span>
                  <Link href={`/contact?interest=${service.slug}`} className="btn btn-line btn-sm ml-auto">
                    Start here <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section id="packages" className="section scroll-mt-24 border-b border-white/[0.07] bg-[#070708]">
        <div className="wrap">
          <SectionHead
            eyebrow="Offers & packages"
            title={
              <>
                Start with a package. <span className="gold-text italic">Scale from there.</span>
              </>
            }
            intro="Published offers from ElevateX Digital. If you are not sure which fits, message us — we will tell you honestly what you need first."
            cta={{ href: "/contact", label: "Ask about packages" }}
          />
          <div className="mt-12 space-y-5">
            <WebsiteOfferCard />
            <OfferCards />
          </div>
          <Reveal>
            <div className="mt-7 flex flex-wrap items-center gap-3 border border-gold/20 bg-gold/[0.04] px-5 py-4">
              <Star className="h-3 w-3 text-gold" />
              <p className="text-[0.72rem] leading-relaxed text-mist/80">
                The Combo Offer is a limited time offer: two courses, one powerful package, ₹30,000 instead of ₹31,000.
              </p>
              <Link href="/contact?interest=combo-offer" className="ml-auto text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold-soft">
                Claim the combo →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section border-b border-white/[0.07]">
        <div className="wrap">
          <SectionHead
            eyebrow="Also in the studio"
            title={
              <>
                Capabilities beyond <span className="gold-text italic">the website.</span>
              </>
            }
            intro="From process setup to API integrations, these are the jobs that keep a growing brand organised."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {capabilityGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 90}>
                <div className="panel h-full p-6">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-gold/70">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-2xl text-bone">{group.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-b border-white/[0.07] bg-[#070708]">
        <div className="wrap">
          <SectionHead eyebrow="How we work" title={<>Four steps. <span className="gold-text italic">Zero guesswork.</span></>} />
          <div className="mt-12 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="bg-[#09090c] p-6">
                <p className="gold-text font-display text-[2.4rem] leading-none">{step.number}</p>
                <h3 className="mt-4 text-[0.86rem] font-semibold uppercase tracking-[0.14em] text-bone">{step.title}</h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-mist/85">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Service FAQ</p>
            <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,3.2rem)]">
              Before we <span className="gold-text italic">begin.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
              A few honest answers about scope, packages and how we work. Anything else, just ask.
            </p>
            <Link href="/contact" className="btn btn-gold btn-sm mt-6">
              Ask your question <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready when you are"
        title="Pick one service. Or hand us the whole picture."
        copy="Websites, marketing and business systems are better when they are built together. Tell us where you are and we will tell you what comes next."
      />
    </>
  );
}
