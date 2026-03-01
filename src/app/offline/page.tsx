"use client";

export default function OfflinePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0A2540 0%, #0d3060 100%)",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "5rem", marginBottom: "1.5rem" }}>🐾</div>
      <h1
        style={{
          fontFamily: "Orbitron, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          color: "#F8FAFC",
          marginBottom: "1rem",
          lineHeight: 1.2,
        }}
      >
        Everest is Offline
      </h1>
      <p
        style={{
          color: "rgba(248,250,252,0.6)",
          fontFamily: "Inter, sans-serif",
          fontSize: "1.125rem",
          lineHeight: 1.7,
          maxWidth: "28rem",
          marginBottom: "2rem",
        }}
      >
        It looks like you&apos;ve lost your internet connection. Even the best huskies need a signal to lead the pack.
      </p>
      <p
        style={{
          color: "rgba(248,250,252,0.4)",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.9375rem",
        }}
      >
        Check your connection and try again.
      </p>
      <div
        style={{
          marginTop: "3rem",
          padding: "1rem 2rem",
          borderRadius: "9999px",
          border: "1px solid rgba(0,209,255,0.3)",
          color: "#00D1FF",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          fontSize: "0.875rem",
          cursor: "pointer",
        }}
        onClick={() => window.location.reload()}
      >
        Try Again
      </div>
    </div>
  );
}
