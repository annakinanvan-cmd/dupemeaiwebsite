"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    // Check immediately
    checkScroll();

    // Browsers often restore scroll asynchronously on reload without firing a scroll event.
    // We poll briefly for the first 500ms to catch it if it happens late.
    let ticks = 0;
    const interval = setInterval(() => {
      checkScroll();
      ticks++;
      if (ticks > 10) clearInterval(interval); // Stop checking after 500ms
    }, 50);

    window.addEventListener("scroll", checkScroll, { passive: true });
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "How it works", href: "/#demo" },
    { label: "Platforms", href: "/#platforms" },
    { label: "Why DupeMe", href: "/#why-dupeme" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Agencies", href: "/agencies" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <>
      <nav
        className="nav-wrapper"
        style={{
          zIndex: 1001,
          background: isScrolled ? "rgba(8,4,18,0.7)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
        }}
      >
        <a
          href="/"
          className="nav-logo"
          style={{ display: "flex", alignItems: "center", gap: 0, textDecoration: "none", cursor: "pointer" }}
        >
          {/* Silhouette icon — same cap-height as wordmark */}
          <img
            src="/icon.svg?v=4"
            alt="DupeMe AI — creator client management assistant"
            style={{ height: "2.1rem", width: "auto", flexShrink: 0, marginRight: "5px" }}
          />
          {/* Wordmark — all on one baseline, no gaps */}
          <div style={{ display: "flex", alignItems: "baseline", lineHeight: 1, fontSize: "1.85rem", fontWeight: 700, letterSpacing: "-0.01em", fontFamily: "var(--font-playfair)" }}>
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

        {/* Desktop links */}
        <div className="nav-links">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                color: "rgba(255,255,255,.4)",
                fontSize: 12,
                textDecoration: "none",
                letterSpacing: ".06em",
                transition: "color .2s",
              }}
              onMouseOver={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#C084FC")
              }
              onMouseOut={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,.4)")
              }
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop & Mobile CTA / Hamburger */}
        <div className="nav-controls">
          <button
            className="btn-primary nav-cta-btn"
            style={{ padding: "10px 22px", letterSpacing: ".1em", whiteSpace: "nowrap" }}
            onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
          >
            GET IN TOUCH
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ position: "relative", zIndex: 1002 }}
          >
            {/* Top bar — translates down to center, then rotates */}
            <span style={{
              transform: menuOpen
                ? "translateY(6.5px) rotate(45deg)"
                : "none",
            }} />
            {/* Middle bar — fades + shrinks away */}
            <span style={{
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
            }} />
            {/* Bottom bar — translates up to center, then rotates */}
            <span style={{
              transform: menuOpen
                ? "translateY(-6.5px) rotate(-45deg)"
                : "none",
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>

        {/* Gradient accent strip at top — matches site brand */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(to right, transparent, #c084fc, #f472b6, transparent)",
          opacity: 0.8,
        }} />

        {/* Ambient glow orb — same as rest of site */}
        <div style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(192,132,252,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{
          width: "100%",
          padding: "0 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}>
          {navLinks.map(({ label, href }, index) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-serif mobile-nav-link"
              style={{
                display: "block",
                color: "rgba(255,255,255,0.85)",
                fontSize: "clamp(1.4rem, 5vw, 1.8rem)",
                fontWeight: 400,
                textDecoration: "none",
                padding: "0.6rem 1.5rem",
                borderRadius: 8,
                letterSpacing: "0.01em",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1) ${0.06 + index * 0.06}s,
                             transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) ${0.06 + index * 0.06}s,
                             color 0.2s ease,
                             background 0.2s ease`,
              }}
              onMouseOver={e => {
                e.currentTarget.style.color = "#C084FC";
                e.currentTarget.style.background = "rgba(192,132,252,0.07)";
              }}
              onMouseOut={e => {
                e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {label}
            </a>
          ))}

          {/* Divider */}
          <div style={{
            height: "1px",
            width: "40px",
            background: "linear-gradient(to right, transparent, rgba(192,132,252,0.4), transparent)",
            margin: "1.25rem 0 1rem",
            opacity: menuOpen ? 1 : 0,
            transition: `opacity 0.6s ease ${0.1 + navLinks.length * 0.06}s`,
          }} />

          <button
            className="btn-primary"
            style={{
              fontSize: 13,
              padding: "16px 40px",
              letterSpacing: ".1em",
              width: "100%",
              maxWidth: 280,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1) ${0.12 + navLinks.length * 0.06}s,
                           transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) ${0.12 + navLinks.length * 0.06}s`,
            }}
            onClick={() => {
              setMenuOpen(false);
              window.dispatchEvent(new CustomEvent("openContactModal"));
            }}
          >
            GET IN TOUCH
          </button>

          {/* Footer tag */}
          <p style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.18)",
            letterSpacing: ".1em",
            textTransform: "uppercase",
            marginTop: "2rem",
            opacity: menuOpen ? 1 : 0,
            transition: `opacity 0.6s ease ${0.25 + navLinks.length * 0.06}s`,
          }}>
            Your dupe is already working
          </p>
        </div>
      </div>
    </>
  );
}


