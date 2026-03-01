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
            {/* Hearts for Huskies */}
            <div className="flex items-center gap-2 bg-warm-gold/10 border border-warm-gold/20 rounded-lg px-3 py-2">
              <span className="text-warm-gold text-lg">❤️</span>
              <div>
                <p className="text-xs font-montserrat font-semibold text-warm-gold">Hearts for Huskies</p>
                <p className="text-[10px] text-husky-white/50 font-inter">Proud rescue advocate</p>
              </div>
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
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-husky-white/40 font-inter">
          <p>© 2026 HuskyTail Digital Marketing. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">🔒 Encrypted, no data selling – GDPR-ready</span>
            <Link href="/privacy" className="hover:text-ice-blue transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-ice-blue transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
