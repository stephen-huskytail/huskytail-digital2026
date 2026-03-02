"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAPairProps {
  /** Extra classes on the wrapper div */
  className?: string;
  /** Override primary label */
  primaryLabel?: string;
  /** Override secondary label */
  secondaryLabel?: string;
  /** Override destination (both buttons go here by default) */
  destination?: string;
}

/**
 * Two-button CTA pair used sitewide.
 * Desktop: side-by-side (primary left, secondary right)
 * Mobile:  stacked (primary top, secondary bottom)
 */
export default function CTAPair({
  className,
  primaryLabel = "Claim Your Free SEO Audit",
  secondaryLabel = "Talk to Stephen",
  destination = "/paw-sultation",
}: CTAPairProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center gap-3",
        className
      )}
    >
      {/* Primary — filled */}
      <Link
        href={destination}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
        style={{
          background: "linear-gradient(135deg, #00D1FF 0%, #0099CC 100%)",
          color: "#0A2540",
          fontFamily: "Montserrat, sans-serif",
          letterSpacing: "0.02em",
          boxShadow: "0 4px 20px rgba(0,209,255,0.35)",
        }}
      >
        🐾 {primaryLabel}
      </Link>

      {/* Secondary — ghost/outline */}
      <Link
        href={destination}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold border-2 transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0"
        style={{
          borderColor: "#00D1FF",
          color: "#00D1FF",
          fontFamily: "Montserrat, sans-serif",
          letterSpacing: "0.02em",
          background: "transparent",
        }}
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
