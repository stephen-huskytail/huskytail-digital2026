import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0A2540 0%, #0d3060 40%, #0a4080 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "32rem" }}>
        <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>🐾</div>
        <h1
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#F8FAFC",
            marginBottom: "1rem",
          }}
        >
          404 — Everest Ran Off
        </h1>
        <p
          style={{
            color: "rgba(248,250,252,0.7)",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          Looks like this page took a detour. Even Everest can't find it — and she has an excellent nose.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0.875rem 2rem",
            borderRadius: "9999px",
            backgroundColor: "#00D1FF",
            color: "#0A2540",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
        >
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
}
