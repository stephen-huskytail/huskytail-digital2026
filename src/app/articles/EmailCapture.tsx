"use client";

import { useState } from "react";
import Image from "next/image";
import { ASSETS } from "@/lib/constants";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "newsletter", source: "articles-index" }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="rounded-2xl p-8 md:p-12 text-center"
      style={{
        background: "linear-gradient(135deg, #0D1B2E 0%, #0A2540 100%)",
        border: "1px solid rgba(200,168,75,0.3)",
      }}
    >
      <div className="flex justify-center mb-4">
        <Image src={ASSETS.everestSitting} alt="Everest the HuskyTail mascot" width={64} height={64} className="opacity-90" />
      </div>
      <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
        Get SEO Tips That Actually Work
      </h3>
      <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
        No fluff. No pitch deck. Just practical local SEO and AI search insights delivered to your inbox — straight from Stephen.
      </p>
      {status === "success" ? (
        <p className="text-[#00D1FF] font-semibold">🐾 You&apos;re in! Check your inbox for a confirmation.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00D1FF]/60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all hover:opacity-90 disabled:opacity-60"
            style={{ background: "linear-gradient(135deg, #00D1FF 0%, #0099CC 100%)", color: "#0A2540" }}
          >
            {status === "loading" ? "Sending..." : "Send Me Tips 🐾"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm mt-2">Something went wrong. Try again or email us directly.</p>
      )}
      <p className="text-white/30 text-xs mt-4">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
