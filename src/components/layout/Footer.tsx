import Link from "next/link";
import Image from "next/image";
import { CITIES, INDUSTRIES, SERVICES, CONTACT_EMAIL, ASSETS } from "@/lib/constants";

function PawIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C10.3 2 9 3.3 9 5s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zM6 5C4.9 5 4 5.9 4 7s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM4.5 11C3.1 11 2 12.1 2 13.5S3.1 16 4.5 16 7 14.9 7 13.5 5.9 11 4.5 11zm15 0c-1.4 0-2.5 1.1-2.5 2.5S18.1 16 19.5 16 22 14.9 22 13.5 20.9 11 19.5 11zM12 10c-3.3 0-6 2.7-6 6 0 2.2 1.2 4 3 5h6c1.8-1 3-2.8 3-5 0-3.3-2.7-6-6-6z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-husky-white">
      {/* Top CTA Strip */}
      <div className="bg-electric-blue/10 border-t border-electric-blue/20 border-b border-electric-blue/20">
        <div className="section-container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-orbitron font-bold text-xl text-husky-white">Ready to Dominate Las Vegas Search?</p>
            <p className="text-ice-blue/80 font-inter text-sm mt-1">No contracts. No fluff. Just results that make your phone ring.</p>
          </div>
          <Link href="/paw-sultation" className="btn-gold shrink-0">
            🐾 Get Your Free Audit
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="section-container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030307747/XwegoxlTucekNaXJ.webp" alt="HuskyTail Digital" width={32} height={32} className="h-8 w-auto" />
            </Link>
            <p className="text-husky-white/60 text-sm font-inter leading-relaxed mb-4">
              Built on Strategy. Backed by Clarity. No Fluff.
            </p>
            {/* Everest sleeping */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-electric-blue/30">
                <Image
                  src={ASSETS.everestRock}
                  alt="Everest the Husky — Chief Distraction Officer"
                  fill
                  className="object-cover"
                  sizes="60px"
                />
              </div>
              <div>
                <p className="text-xs font-montserrat font-semibold text-ice-blue">Everest</p>
                <p className="text-[10px] text-husky-white/50 font-inter">Chief Distraction Officer</p>
              </div>
            </div>
            {/* Contact Info */}
            <div className="bg-electric-blue/5 border border-electric-blue/20 rounded-lg px-3 py-3 mb-3">
              <p className="text-xs font-montserrat font-semibold text-ice-blue mb-2">📍 Contact</p>
              <p className="text-[10px] text-husky-white/60 font-inter leading-relaxed mb-2">
                10120 W Flamingo Rd<br />
                Ste 4-1166<br />
                Las Vegas, NV 89147
              </p>
              <a href="tel:+1-702-786-1309" className="text-[10px] text-electric-blue hover:text-ice-blue transition-colors font-inter font-medium">
                📞 (702) 786-1309
              </a>
            </div>
            {/* Hearts for Huskies */}
            <div className="flex items-center gap-2 bg-warm-gold/10 border border-warm-gold/20 rounded-lg px-3 py-2">
              <span className="text-warm-gold text-lg">❤️</span>
              <div>
                <p className="text-xs font-montserrat font-semibold text-warm-gold">Hearts for Huskies</p>
                <p className="text-[10px] text-husky-white/50 font-inter">Proud rescue advocate</p>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.linkedin.com/company/huskytail-digital" target="_blank" rel="noopener noreferrer" className="text-husky-white/50 hover:text-ice-blue transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.instagram.com/huskytaildigital" target="_blank" rel="noopener noreferrer" className="text-husky-white/50 hover:text-ice-blue transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/huskytaildigital" target="_blank" rel="noopener noreferrer" className="text-husky-white/50 hover:text-ice-blue transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/huskytailseo" target="_blank" rel="noopener noreferrer" className="text-husky-white/50 hover:text-ice-blue transition-colors" aria-label="X (Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-orbitron font-bold text-sm text-ice-blue mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-husky-white/60 hover:text-ice-blue transition-colors font-inter">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li><Link href="/pricing" className="text-sm text-husky-white/60 hover:text-ice-blue transition-colors font-inter">Pricing</Link></li>
              <li><Link href="/paw-sultation" className="text-sm text-electric-blue hover:text-ice-blue transition-colors font-inter font-medium">Free Audit →</Link></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-orbitron font-bold text-sm text-ice-blue mb-4 uppercase tracking-wider">Cities We Serve</h3>
            <ul className="space-y-2">
              {CITIES.map(c => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}-seo`} className="text-sm text-husky-white/60 hover:text-ice-blue transition-colors font-inter">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-orbitron font-bold text-sm text-ice-blue mb-4 uppercase tracking-wider">Industries</h3>
            <ul className="space-y-2">
              {INDUSTRIES.map(i => (
                <li key={i.slug}>
                  <Link href={`/${i.slug}-seo`} className="text-sm text-husky-white/60 hover:text-ice-blue transition-colors font-inter">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-orbitron font-bold text-sm text-ice-blue mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {[
                { label: "About Stephen", href: "/about" },
                { label: "Why We Wag", href: "/why-we-wag" },
                { label: "Results", href: "/results" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Free Tools", href: "/free-seo-tools" },
                { label: "Recommended Tools", href: "/recommended-tools" },
                { label: "Media", href: "/media" },
                { label: "Contact", href: "/contact" },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-husky-white/60 hover:text-ice-blue transition-colors font-inter">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-white/10">
        <div className="section-container py-6 flex flex-wrap items-center justify-center gap-4">
          {[
            { icon: "🔒", label: "SSL Secured" },
            { icon: "📅", label: "Month-to-Month" },
            { icon: "✅", label: "30-Day Review" },
            { icon: "❤️", label: "Hearts for Huskies" },
            { icon: "⚡", label: "Vercel Powered" },
          ].map(badge => (
            <div key={badge.label} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <span className="text-sm">{badge.icon}</span>
              <span className="text-xs font-montserrat font-medium text-husky-white/70">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-4 flex flex-col items-center gap-3 text-xs text-husky-white/40 font-inter">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-ice-blue transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-ice-blue transition-colors">Terms &amp; Conditions</Link>
            <Link href="/disclaimer" className="hover:text-ice-blue transition-colors">Disclaimer</Link>
            <Link href="/cookie-policy" className="hover:text-ice-blue transition-colors">Cookie Policy</Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p>© 2026 HuskyTail Digital Marketing. All rights reserved.</p>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">🔒 Encrypted, no data selling – GDPR-ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
