import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ASSETS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Meet Everest | Chief Distraction Officer — HuskyTail Digital",
  description:
    "Meet Everest — the red Husky behind HuskyTail Digital. She's the heart, the mascot, and the reason we fight for dog rescue every single day. Learn her story.",
  openGraph: {
    title: "Meet Everest | Chief Distraction Officer — HuskyTail Digital",
    description:
      "She doesn't do SEO. She does zoomies. But she's the soul of HuskyTail Digital and the reason we give back to Husky rescue every month.",
    images: [ASSETS.everestRock],
  },
};

const PERSONALITY_TRAITS = [
  {
    emoji: "🎾",
    trait: "Tennis Ball Obsessed",
    desc: "If there's a ball within a 50-foot radius, Everest has already claimed it. No negotiations.",
  },
  {
    emoji: "🏔️",
    trait: "Named for the Summit",
    desc: "Everest was named after the highest peak on Earth. She lives up to it — in drama, in energy, and in spirit.",
  },
  {
    emoji: "🌙",
    trait: "Night Owl",
    desc: "She's most active at 11pm. Coincidentally, so is Stephen. They were made for each other.",
  },
  {
    emoji: "🐾",
    trait: "Rescue Advocate",
    desc: "Everest was adopted, not bought. That story shapes everything we do — including our Hearts for Huskies pledge.",
  },
  {
    emoji: "🎭",
    trait: "Dramatic",
    desc: "If her water bowl is empty, you will hear about it. Loudly. At length. With eye contact.",
  },
  {
    emoji: "💙",
    trait: "Loyal to the Pack",
    desc: "Once you're in Everest's circle, you're in for life. She's the embodiment of the HuskyTail client relationship.",
  },
];

const RESCUE_ORGS = [
  {
    name: "Husky House",
    location: "Wherever Huskies Need Help",
    url: "https://huskyhouse.org",
    desc: "A dedicated Siberian Husky rescue organization committed to finding forever homes for abandoned and surrendered Huskies.",
  },
  {
    name: "Husky Haven of Las Vegas",
    location: "Las Vegas, NV",
    url: "https://huskyhavenlv.org",
    desc: "A local Las Vegas rescue dedicated to saving Huskies and Husky mixes from shelters and difficult situations across Nevada.",
  },
  {
    name: "Nevada SPCA",
    location: "Las Vegas, NV",
    url: "https://nevadaspca.org",
    desc: "A no-kill shelter serving the Las Vegas Valley. Every animal deserves a second chance — and they make it happen.",
  },
];

export default function EverestPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: "#0A2540" }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 50%, #00D1FF 0%, transparent 50%), radial-gradient(circle at 75% 50%, #A5D8FF 0%, transparent 50%)",
          }}
        />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
                style={{
                  backgroundColor: "rgba(0,209,255,0.15)",
                  border: "1px solid rgba(0,209,255,0.4)",
                }}
              >
                <span style={{ color: "#00D1FF", fontSize: "0.75rem", fontFamily: "Montserrat, sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  🐾 Chief Distraction Officer
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  color: "#F8FAFC",
                  lineHeight: 1.05,
                  marginBottom: "1.5rem",
                }}
              >
                Meet{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #00D1FF, #A5D8FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Everest.
                </span>
              </h1>

              <p
                style={{
                  color: "rgba(248,250,252,0.85)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.2rem",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                  maxWidth: "36rem",
                }}
              >
                She doesn&apos;t write the SEO strategy. She doesn&apos;t manage the campaigns.
                She doesn&apos;t even know what Google Analytics is — and honestly, she
                couldn&apos;t care less.
              </p>

              <p
                style={{
                  color: "rgba(248,250,252,0.85)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.2rem",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                  maxWidth: "36rem",
                }}
              >
                What she <em>does</em> do is remind us every single day why we work so hard.
                She&apos;s the heart of HuskyTail Digital — the reason the brand exists,
                the reason we give back, and the reason Stephen smiles at 6am when
                he&apos;d rather be asleep.
              </p>

              <div className="flex flex-wrap gap-4">
                <div
                  className="rounded-xl px-5 py-3"
                  style={{
                    backgroundColor: "rgba(0,209,255,0.1)",
                    border: "1px solid rgba(0,209,255,0.3)",
                  }}
                >
                  <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, color: "#00D1FF", fontSize: "1.5rem" }}>Red</p>
                  <p style={{ color: "rgba(165,216,255,0.7)", fontSize: "0.75rem", fontFamily: "Montserrat, sans-serif" }}>Husky Coloring</p>
                </div>
                <div
                  className="rounded-xl px-5 py-3"
                  style={{
                    backgroundColor: "rgba(200,168,75,0.1)",
                    border: "1px solid rgba(200,168,75,0.3)",
                  }}
                >
                  <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, color: "#c8a84b", fontSize: "1.5rem" }}>Female</p>
                  <p style={{ color: "rgba(165,216,255,0.7)", fontSize: "0.75rem", fontFamily: "Montserrat, sans-serif" }}>She / Her</p>
                </div>
                <div
                  className="rounded-xl px-5 py-3"
                  style={{
                    backgroundColor: "rgba(165,216,255,0.1)",
                    border: "1px solid rgba(165,216,255,0.2)",
                  }}
                >
                  <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, color: "#A5D8FF", fontSize: "1.5rem" }}>Rescue</p>
                  <p style={{ color: "rgba(165,216,255,0.7)", fontSize: "0.75rem", fontFamily: "Montserrat, sans-serif" }}>Adopted, Not Bought</p>
                </div>
              </div>
            </div>

            {/* Hero photo */}
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  border: "3px solid rgba(0,209,255,0.3)",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.4), 0 0 40px rgba(0,209,255,0.15)",
                }}
              >
                <Image
                  src={ASSETS.everestSitting}
                  alt="Everest the Husky sitting on a rock — HuskyTail Digital Marketing mascot, Las Vegas SEO"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -left-6 rounded-2xl px-5 py-4"
                style={{
                  backgroundColor: "#0A2540",
                  border: "2px solid rgba(0,209,255,0.4)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, color: "#c8a84b", fontSize: "1.1rem" }}>Everest 🐾</p>
                <p style={{ color: "rgba(0,209,255,0.9)", fontSize: "0.8rem", fontFamily: "Inter, sans-serif" }}>Chief Distraction Officer</p>
                <p style={{ color: "rgba(165,216,255,0.6)", fontSize: "0.7rem", fontFamily: "Inter, sans-serif", marginTop: "0.25rem" }}>HuskyTail Digital Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
            >
              The Gallery
            </p>
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "#0A2540",
              }}
            >
              Everest in Her Element
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Photo 1 — On the rock, regal */}
            <div
              className="rounded-2xl overflow-hidden group"
              style={{
                border: "1px solid rgba(10,37,64,0.1)",
                boxShadow: "0 8px 30px rgba(10,37,64,0.08)",
              }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={ASSETS.everestRock}
                  alt="Everest the Husky on a stone wall — HuskyTail Digital Marketing, Las Vegas AI SEO agency"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5" style={{ backgroundColor: "#fff" }}>
                <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, color: "#0A2540", fontSize: "0.95rem" }}>The Regal Pose</p>
                <p style={{ color: "rgba(10,37,64,0.6)", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                  Surveying her kingdom. Judging everyone&apos;s SEO strategy.
                </p>
              </div>
            </div>

            {/* Photo 2 — Happy on grass */}
            <div
              className="rounded-2xl overflow-hidden group"
              style={{
                border: "2px solid rgba(0,209,255,0.3)",
                boxShadow: "0 8px 30px rgba(0,209,255,0.12)",
              }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={ASSETS.everestGrass}
                  alt="Everest the Husky happy on the grass with a tennis ball — HuskyTail Digital Marketing mascot"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5" style={{ backgroundColor: "#fff" }}>
                <div
                  className="inline-block rounded-full px-2 py-0.5 text-xs font-bold mb-2"
                  style={{ backgroundColor: "rgba(0,209,255,0.1)", color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
                >
                  Favorite Photo
                </div>
                <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, color: "#0A2540", fontSize: "0.95rem" }}>The Happy Place</p>
                <p style={{ color: "rgba(10,37,64,0.6)", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                  Tennis ball secured. Life is good. This is peak Everest energy.
                </p>
              </div>
            </div>

            {/* Photo 3 — Sitting, attentive */}
            <div
              className="rounded-2xl overflow-hidden group"
              style={{
                border: "1px solid rgba(10,37,64,0.1)",
                boxShadow: "0 8px 30px rgba(10,37,64,0.08)",
              }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={ASSETS.everestSitting}
                  alt="Everest the Husky sitting attentively — HuskyTail Digital Marketing, Las Vegas SEO consultant"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5" style={{ backgroundColor: "#fff" }}>
                <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, color: "#0A2540", fontSize: "0.95rem" }}>The Focused Look</p>
                <p style={{ color: "rgba(10,37,64,0.6)", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                  She&apos;s listening. She&apos;s processing. She&apos;s about to do something chaotic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HER STORY ─────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#0A2540" }}
      >
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
              >
                Her Story
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  color: "#F8FAFC",
                }}
              >
                From Rescue to{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #00D1FF, #A5D8FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Brand Icon.
                </span>
              </h2>

              <div className="space-y-5">
                <p style={{ color: "rgba(248,250,252,0.85)", fontFamily: "Inter, sans-serif", fontSize: "1.05rem", lineHeight: 1.8 }}>
                  Everest came into Stephen&apos;s life the way the best things do — unexpectedly,
                  and with an immediate sense that this was exactly right. She was adopted,
                  not bought. That distinction matters deeply to Stephen, and it&apos;s baked
                  into the DNA of HuskyTail Digital.
                </p>
                <p style={{ color: "rgba(248,250,252,0.85)", fontFamily: "Inter, sans-serif", fontSize: "1.05rem", lineHeight: 1.8 }}>
                  The name HuskyTail Digital isn&apos;t just branding. It&apos;s a tribute. Every
                  client we take on, every ranking we chase, every strategy we build — it&apos;s
                  done with the same loyalty, grit, and relentless energy that Everest brings
                  to every single walk, every single day.
                </p>
                <p style={{ color: "rgba(248,250,252,0.85)", fontFamily: "Inter, sans-serif", fontSize: "1.05rem", lineHeight: 1.8 }}>
                  She&apos;s a red Husky with amber eyes, a pink collar, and absolutely zero
                  patience for slow internet speeds. She is, without question, the best
                  business partner Stephen has ever had — even if she refuses to attend
                  Zoom calls.
                </p>
              </div>
            </div>

            {/* Personality traits */}
            <div className="grid grid-cols-2 gap-4">
              {PERSONALITY_TRAITS.map((trait) => (
                <div
                  key={trait.trait}
                  className="rounded-2xl p-5"
                  style={{
                    backgroundColor: "rgba(165,216,255,0.05)",
                    border: "1px solid rgba(165,216,255,0.1)",
                  }}
                >
                  <div className="text-2xl mb-3">{trait.emoji}</div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: "#F8FAFC",
                    }}
                  >
                    {trait.trait}
                  </h3>
                  <p
                    style={{
                      color: "rgba(165,216,255,0.65)",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.8rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {trait.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HEARTS FOR HUSKIES ────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ backgroundColor: "#F8FAFC" }}
      >
        {/* Decorative background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #0A2540 0%, transparent 60%), radial-gradient(circle at 80% 50%, #00D1FF 0%, transparent 60%)",
          }}
        />

        <div className="section-container relative z-10">
          {/* Section header */}
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6"
              style={{
                backgroundColor: "rgba(255,100,100,0.1)",
                border: "1px solid rgba(255,100,100,0.3)",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>❤️</span>
              <span style={{ color: "#e05555", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Hearts for Huskies
              </span>
            </div>

            <h2
              className="mb-4"
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "#0A2540",
              }}
            >
              Every Client. Every Month.
              <br />
              <span style={{ color: "#e05555" }}>We Give Back.</span>
            </h2>

            <p
              className="max-w-2xl mx-auto"
              style={{
                color: "rgba(10,37,64,0.65)",
                fontFamily: "Inter, sans-serif",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Because Everest was rescued, a portion of every HuskyTail Digital retainer
              goes directly to Husky rescue organizations. This isn&apos;t a marketing gimmick.
              It&apos;s a commitment — written into how we run this business from day one.
            </p>
          </div>

          {/* Pledge box */}
          <div
            className="rounded-3xl p-10 mb-14 text-center max-w-3xl mx-auto"
            style={{
              background: "linear-gradient(135deg, #0A2540 0%, #0d3060 100%)",
              border: "2px solid rgba(0,209,255,0.3)",
              boxShadow: "0 20px 50px rgba(10,37,64,0.15)",
            }}
          >
            <div className="text-4xl mb-4">🐾❤️</div>
            <h3
              className="mb-4"
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "#F8FAFC",
              }}
            >
              The HuskyTail Pledge
            </h3>
            <p
              style={{
                color: "rgba(165,216,255,0.85)",
                fontFamily: "Inter, sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                maxWidth: "32rem",
                margin: "0 auto 1.5rem",
              }}
            >
              For every active client retainer, HuskyTail Digital donates a portion of
              monthly revenue to verified Husky rescue organizations. No conditions.
              No minimums. Every month, without fail.
            </p>
            <p
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 700,
                color: "#00D1FF",
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
              }}
            >
              Because good business should do good in the world.
            </p>
          </div>

          {/* Rescue orgs */}
          <div className="grid md:grid-cols-3 gap-6">
            {RESCUE_ORGS.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(10,37,64,0.08)",
                  boxShadow: "0 4px 20px rgba(10,37,64,0.06)",
                  textDecoration: "none",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                  style={{ backgroundColor: "rgba(224,85,85,0.1)" }}
                >
                  ❤️
                </div>
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#0A2540",
                  }}
                >
                  {org.name}
                </h3>
                <p
                  className="mb-3"
                  style={{
                    color: "#00D1FF",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {org.location}
                </p>
                <p
                  style={{
                    color: "rgba(10,37,64,0.6)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                  }}
                >
                  {org.desc}
                </p>
                <p
                  className="mt-4"
                  style={{
                    color: "#00D1FF",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                  }}
                >
                  Visit Website →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEPHEN + EVEREST ─────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#0A2540" }}
      >
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photos side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  border: "2px solid rgba(0,209,255,0.3)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src={ASSETS.stephenHeadshot}
                  alt="Stephen Gardner — Founder of HuskyTail Digital Marketing, Las Vegas SEO & AI Marketing Consultant"
                  width={300}
                  height={380}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden mt-8"
                style={{
                  border: "2px solid rgba(200,168,75,0.3)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src={ASSETS.everestGrass}
                  alt="Everest the Husky — HuskyTail Digital Marketing mascot, Las Vegas SEO agency"
                  width={300}
                  height={380}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text side */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
              >
                The Partnership
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  color: "#F8FAFC",
                }}
              >
                Stephen &amp; Everest.
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #c8a84b, #c8a84b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  The Real Dream Team.
                </span>
              </h2>

              <div className="space-y-5">
                <p style={{ color: "rgba(248,250,252,0.85)", fontFamily: "Inter, sans-serif", fontSize: "1.05rem", lineHeight: 1.8 }}>
                  Stephen Gardner is an AiSEO &amp; GEO Digital Marketing Consultant with
                  years of experience helping local businesses dominate their markets.
                  He&apos;s sharp, strategic, and allergic to fluff.
                </p>
                <p style={{ color: "rgba(248,250,252,0.85)", fontFamily: "Inter, sans-serif", fontSize: "1.05rem", lineHeight: 1.8 }}>
                  Everest is a red Siberian Husky with a tennis ball addiction and an
                  uncanny ability to walk across a keyboard at the worst possible moment.
                  She is, objectively, the better-looking half of this operation.
                </p>
                <p style={{ color: "rgba(248,250,252,0.85)", fontFamily: "Inter, sans-serif", fontSize: "1.05rem", lineHeight: 1.8 }}>
                  Together, they&apos;ve built a brand that Las Vegas businesses trust —
                  because it&apos;s built on the same values Everest embodies: loyalty,
                  relentless energy, and an absolute refusal to give up.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/about" className="btn-secondary">
                  Meet Stephen →
                </Link>
                <Link href="/paw-sultation" className="btn-primary">
                  🐾 Book a Paw-sultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVEREST QUOTE ─────────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ backgroundColor: "#F8FAFC" }}
      >
        <div className="section-container max-w-3xl text-center">
          <div className="text-5xl mb-6">🐾</div>
          <blockquote
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
              color: "#0A2540",
              lineHeight: 1.5,
              marginBottom: "1.5rem",
            }}
          >
            &ldquo;If your SEO isn&apos;t working, it&apos;s not because Google hates you.
            It&apos;s because your strategy needs more grit. Also, more tennis balls.&rdquo;
          </blockquote>
          <p
            style={{
              color: "rgba(10,37,64,0.5)",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            — Everest, Chief Distraction Officer, HuskyTail Digital
          </p>
          <p
            style={{
              color: "rgba(10,37,64,0.35)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
              marginTop: "0.5rem",
            }}
          >
            (She didn&apos;t actually say this. But she would if she could.)
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32 text-center"
        style={{
          background: "linear-gradient(135deg, #0A2540 0%, #0d3060 50%, #0A2540 100%)",
        }}
      >
        <div className="section-container max-w-3xl">
          <div className="text-5xl mb-6">🐾</div>
          <h2
            className="mb-6"
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              color: "#F8FAFC",
            }}
          >
            Ready to Work With the Team
            <br />
            <span style={{ color: "#00D1FF" }}>Behind the Husky?</span>
          </h2>
          <p
            className="mb-10"
            style={{
              color: "rgba(165,216,255,0.8)",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            Book your free Paw-sultation. No pressure, no pitch deck.
            Just a straight-talking SEO audit and a clear path to more leads —
            with a little Husky energy on the side.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/paw-sultation" className="btn-primary text-lg px-10 py-5">
              🐾 Book Your Free Paw-sultation
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-10 py-5">
              Meet Stephen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
