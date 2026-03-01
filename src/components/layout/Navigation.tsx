"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronDown, MapPin, Map, Briefcase, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_CITIES, NAV_INDUSTRIES, NAV_BLOG_CATS, SERVICES } from "@/lib/constants";

// Paw icon SVG
function PawIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C10.3 2 9 3.3 9 5s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zM6 5C4.9 5 4 5.9 4 7s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM4.5 11C3.1 11 2 12.1 2 13.5S3.1 16 4.5 16 7 14.9 7 13.5 5.9 11 4.5 11zm15 0c-1.4 0-2.5 1.1-2.5 2.5S18.1 16 19.5 16 22 14.9 22 13.5 20.9 11 19.5 11zM12 10c-3.3 0-6 2.7-6 6 0 2.2 1.2 4 3 5h6c1.8-1 3-2.8 3-5 0-3.3-2.7-6-6-6z"/>
    </svg>
  );
}

const NAV_SERVICES = SERVICES.map(s => ({ label: s.name, href: `/services/${s.slug}` }));

const HAMBURGER_ITEMS = [
  { label: "Blog", href: "/blog" },
  { label: "Free Tools", href: "/free-seo-tools" },
  { label: "About", href: "/about" },
  { label: "Meet Everest 🐾", href: "/everest" },
  { label: "Why We Wag", href: "/why-we-wag" },
  { label: "Media", href: "/media" },
  { label: "Recommended Tools", href: "/recommended-tools" },
  { label: "Contact", href: "/contact" },
];

const MOBILE_BOTTOM_ITEMS = [
  { label: "Home", href: "/", Icon: PawIcon },
  { label: "Services", href: "/services", Icon: Map },
  { label: "Cities", href: "/cities", Icon: MapPin },
  { label: "Industries", href: "/industries", Icon: Briefcase },
  { label: "Pricing", href: "/pricing", Icon: DollarSign },
];

interface DropdownProps {
  label: string;
  href: string;
  items: { label: string; href: string }[];
}

function DesktopDropdown({ label, href, items }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        href={href}
        className="flex items-center gap-1 text-sm font-medium text-husky-white/90 hover:text-ice-blue transition-colors px-2 font-inter whitespace-nowrap h-full flex items-center"
        onClick={() => setOpen(false)}
      >
        {label}
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200 shrink-0", open && "rotate-180")} />
      </Link>
      {open && (
        <>
          {/* Invisible bridge — fills the gap so mouse doesn't lose hover state */}
          <div className="absolute top-full left-0 w-full h-2" />
          {/* Dropdown panel — fully opaque for readability over any background */}
          <div className="absolute top-[calc(100%+4px)] left-0 min-w-[200px] w-max max-w-[240px] bg-[#0c152f] border border-white/15 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.7)] py-2 z-[100]">
            {items.slice(0, 14).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-white/85 hover:text-ice-blue hover:bg-white/8 transition-colors font-inter leading-snug"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {items.length > 14 && (
              <Link
                href={href}
                className="block px-4 py-2.5 text-sm text-electric-blue hover:text-white font-semibold font-inter border-t border-white/10 mt-1 pt-3"
                onClick={() => setOpen(false)}
              >
                View all →
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      {/* ===== DESKTOP NAV ===== */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block border-b-0 border-t-0",
          scrolled
            ? "bg-deep-navy/98 backdrop-blur-md"
            : "bg-deep-navy"
        )}
        style={{ height: "var(--desktop-nav-height)" }}
      >
        {/* Three-zone layout: logo | centered nav | CTA */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-full flex items-center gap-4 w-full">
          {/* Logo — fixed width anchors the left side */}
          <Link href="/" className="flex items-center gap-2 shrink-0 min-h-0">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030307747/XwegoxlTucekNaXJ.webp" alt="HuskyTail Digital" className="h-12" />
          </Link>

          {/* Nav Links — flex-1 centers them between logo and CTA */}
          <nav className="flex-1 flex items-center justify-center gap-1 lg:gap-2 xl:gap-3 h-full">
            <Link href="/" className="text-sm font-medium text-husky-white/90 hover:text-ice-blue transition-colors px-2 font-inter whitespace-nowrap flex items-center h-full">
              Home
            </Link>
            <DesktopDropdown label="Services" href="/services" items={NAV_SERVICES} />
            <DesktopDropdown label="Cities We Serve" href="/cities" items={NAV_CITIES} />
            <DesktopDropdown label="Industries" href="/industries" items={NAV_INDUSTRIES} />
            <DesktopDropdown label="Blog" href="/blog" items={NAV_BLOG_CATS} />
            <Link href="/free-seo-tools" className="text-sm font-medium text-husky-white/90 hover:text-ice-blue transition-colors px-2 font-inter whitespace-nowrap flex items-center h-full">
              Free Tools
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-husky-white/90 hover:text-ice-blue transition-colors px-2 font-inter whitespace-nowrap flex items-center h-full">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium text-husky-white/90 hover:text-ice-blue transition-colors px-2 font-inter whitespace-nowrap flex items-center h-full">
              Contact
            </Link>
          </nav>

          {/* CTA — fixed width mirrors logo to keep nav centered */}
          <div className="shrink-0 w-40 flex justify-end items-center">
            <Link href="/paw-sultation" className="btn-primary text-xs lg:text-sm px-4 lg:px-5 whitespace-nowrap">
              🐾 Paw-sultation
            </Link>
          </div>
        </div>
      </header>

      {/* ===== MOBILE TOP BAR ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-deep-navy/98 backdrop-blur-md md:hidden border-b border-ice-blue/10" style={{ paddingTop: "var(--safe-area-top)" }}>
        <div className="flex items-center justify-between px-4 h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 min-h-0">
            <PawIcon className="w-7 h-7 text-electric-blue" />
            <span className="font-orbitron font-bold text-husky-white text-sm">HuskyTail</span>
          </Link>

          <div className="flex items-center gap-3">
            {/* CTA */}
            <Link href="/paw-sultation" className="btn-primary text-xs px-3 py-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
              Book Free Audit
            </Link>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-husky-white p-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ===== MOBILE HAMBURGER MENU ===== */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" style={{ paddingTop: "56px" }}>
          <div className="absolute inset-0 bg-deep-navy/95 backdrop-blur-md" onClick={() => setMenuOpen(false)} />
          <nav className="relative bg-deep-navy border-t border-ice-blue/20 overflow-y-auto h-full pb-24">
            {HAMBURGER_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-6 py-4 text-base font-medium text-husky-white/90 hover:text-ice-blue hover:bg-white/5 border-b border-white/5 font-inter transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 py-6">
              <Link href="/paw-sultation" className="btn-primary w-full justify-center text-base">
                🐾 Book Free Paw-sultation
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* ===== MOBILE BOTTOM NAV ===== */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-deep-navy/98 backdrop-blur-md border-t border-ice-blue/20"
        style={{ height: "calc(var(--mobile-nav-height) + env(safe-area-inset-bottom, 0px))", paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="flex items-center justify-around h-16">
          {MOBILE_BOTTOM_ITEMS.map(({ label, href, Icon }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex flex-col items-center gap-0.5 px-3 py-1 min-h-[44px] justify-center transition-colors",
                  isActive ? "text-electric-blue" : "text-husky-white/60 hover:text-ice-blue"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive && "drop-shadow-[0_0_6px_rgba(0,209,255,0.8)]")} />
                <span className="text-[10px] font-montserrat font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
