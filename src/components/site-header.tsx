"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Close, Menu, Phone, ArrowUpRight } from "@/components/icons";
import { nav, site, whatsappLink } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="relative z-40 border-b border-white/[0.06] bg-[#070708]">
        <div className="wrap flex h-9 items-center justify-between gap-4 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-mist">
          <Link href="/services#packages" className="group flex items-center gap-2.5 transition-colors hover:text-gold-soft">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-soft" />
            </span>
            <span className="hidden sm:inline">Limited time offer</span>
            <span className="text-gold-soft/90">Combo Offer · Both packages ₹30,000</span>
          </Link>
          <div className="flex items-center gap-5">
            <a href={site.contact.phoneHref} className="hidden items-center gap-2 transition-colors hover:text-gold-soft sm:flex">
              <Phone className="h-3 w-3" />
              {site.contact.phoneDisplay}
            </a>
            <span className="hidden text-white/20 md:inline">|</span>
            <span className="hidden text-mist/80 md:inline">Remote · Flexible · Global</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-[#060607]/85 backdrop-blur-xl supports-[backdrop-filter]:bg-[#060607]/70"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="wrap flex h-[74px] items-center justify-between gap-6">
          <Logo compact />

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active}
                  aria-current={active ? "page" : undefined}
                  className={`link-underline text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    active ? "text-gold-soft" : "text-bone/75 hover:text-bone"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-mist transition-colors hover:text-gold-soft xl:block"
            >
              WhatsApp
            </a>
            <Link href="/contact" className="btn btn-gold btn-sm">
              Let&apos;s Build
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-bone transition-colors hover:border-gold/50 hover:text-gold-soft lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[70] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute inset-y-0 right-0 flex w-full max-w-[24rem] flex-col overflow-y-auto border-l border-gold/20 bg-[#08080a] px-6 pb-10 pt-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo compact />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-bone transition-colors hover:border-gold/50 hover:text-gold-soft"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-10 flex flex-col">
            {nav.map((item, index) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between border-b border-white/[0.07] py-4 transition-colors ${
                    active ? "text-gold-soft" : "text-bone/85 hover:text-gold-soft"
                  }`}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="label text-[0.55rem] text-gold/60">0{index + 1}</span>
                    <span className="font-display text-[1.7rem] leading-none">{item.label}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-8">
            <p className="label text-gold/70">Talk to us</p>
            <a href={site.contact.phoneHref} className="mt-2 block font-display text-2xl text-bone">
              {site.contact.phoneDisplay}
            </a>
            <a href={`mailto:${site.contact.email}`} className="mt-1 block text-sm text-mist break-all">
              {site.contact.email}
            </a>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-gold mt-6 w-full">
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <p className="mt-4 text-center text-[0.65rem] uppercase tracking-[0.18em] text-mist/70">
              {site.contact.locationLong}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
