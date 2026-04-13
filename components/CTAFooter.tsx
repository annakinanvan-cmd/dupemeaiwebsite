"use client";

export function CTA() {
  return (
    <section className="cta-section">
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(192,132,252,.1) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <span
        className="reveal"
        style={{
          fontSize: 10,
          letterSpacing: ".22em",
          textTransform: "uppercase",
          color: "#C084FC",
          marginBottom: "1.25rem",
          display: "block",
          textAlign: "center",
        }}
      >
        Ready?
      </span>
      <h2
        className="font-serif reveal reveal-delay-1"
        style={{
          fontSize: "clamp(36px,5.5vw,62px)",
          fontWeight: 400,
          lineHeight: 1.1,
          marginBottom: "1.5rem",
        }}
      >
        Let&apos;s talk about
        <br />
        <em className="text-gradient font-serif" style={{ fontStyle: "italic" }}>getting your time back.</em>
      </h2>
      <p
        className="reveal reveal-delay-2"
        style={{
          fontSize: 15,
          color: "rgba(255,255,255,.65)",
          margin: "0 auto 3rem",
          maxWidth: 400,
          lineHeight: 1.8,
        }}
      >
        No pressure, no commitment. Just an open conversation about how we can help.
      </p>
      <button 
        className="btn-primary reveal reveal-delay-3" 
        style={{ fontSize: 14, padding: "16px 44px" }}
        onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
      >
        Get in touch
      </button>

    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer-inner">
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="nav-logo"
        style={{ display: "flex", alignItems: "center", gap: 0, textDecoration: "none" }}
      >
        <img
          src="/icon.svg?v=4"
          alt=""
          aria-hidden="true"
          style={{ height: "1.85rem", width: "auto", flexShrink: 0, marginRight: "5px" }}
        />
        <div style={{ display: "flex", alignItems: "baseline", lineHeight: 1, fontSize: "1.6rem", fontWeight: 700, letterSpacing: "-0.01em", fontFamily: "var(--font-playfair)" }}>
          <span style={{ color: "#ffffff" }}>Dupe</span>
          <span style={{
            background: "linear-gradient(to right, #f472b6, #c084fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Me</span>
          <span style={{ color: "#c084fc", fontSize: "0.42em", fontWeight: 500, marginLeft: "2px", letterSpacing: "0.08em", verticalAlign: "super", lineHeight: 0 }}>AI</span>
        </div>
      </a>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,.18)", letterSpacing: ".04em" }}>
        © 2026 DupeMe AI — All rights reserved
      </p>
      <p style={{ fontSize: 10, color: "rgba(255,255,255,.18)", letterSpacing: ".06em" }}>
        No contracts · No commission · Made by providers.
      </p>
    </footer>
  );
}

