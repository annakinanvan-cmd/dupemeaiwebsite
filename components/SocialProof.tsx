"use client";

import { useState } from "react";

const testimonials = [
  {
    initials: "LDN",
    username: "SP from London",
    gradientFrom: "#f472b6",
    gradientTo: "#c084fc",
    platform: "Instagram · OnlyFans",
    stars: 5,
    review:
      "Honestly didn't think I needed this until I saw how much I was leaving on the table. She's managing my DMs across everything while I'm literally at dinner. My regulars think I'm just really on top of it now. My income went up and I stopped dreading opening my phone.",
  },
  {
    initials: "YVR",
    username: "SP from Vancouver",
    gradientFrom: "#c084fc",
    gradientTo: "#818cf8",
    platform: "Instagram · OF · Telegram",
    stars: 5,
    review:
      "My whole brand is my personality so I was skeptical. But she actually sounds like me — like my followers have no idea. Fans from my Instagram get redirected to my OF seamlessly, my sub count went up, and I'm posting more because I'm not drowning in messages anymore.",
  },
  {
    initials: "MIA",
    username: "SP from Miami",
    gradientFrom: "#818cf8",
    gradientTo: "#f472b6",
    platform: "WhatsApp · Telegram · Gmail",
    stars: 5,
    review:
      "My clients are very specific about who they deal with so I was doubtful. The onboarding actually took time to get my voice right — the screening alone is worth it. Fuller calendar, zero headache. My dupe handles the admin, I show up for the actual work.",
  },
];

export default function SocialProof() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="accordion-section-pad"
      style={{
        borderBottom: ".5px solid rgba(192,132,252,.15)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        
        {/* Transparent Wrapper */}
        <div style={{ transition: "all 0.3s ease" }}>
          
          {/* Trigger Row */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 0", /* Minimal vertical space */
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <h2
                className="font-serif reveal"
                style={{ fontSize: "clamp(24px,3.5vw,32px)", fontWeight: 400, margin: 0 }}
              >
                Reviews don&apos;t lie.
              </h2>
              
              <div 
                className="reveal reveal-delay-1"
                style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}
              >
                <div style={{ display: "flex", gap: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "#F472B6", fontSize: 16 }}>★</span>
                  ))}
                </div>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,.5)", fontWeight: 500 }}>
                  5.0 · 3 reviews
                </span>
              </div>
            </div>

            <div
              className="reveal reveal-delay-2"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  color: "rgba(255,255,255,.4)",
                  transition: "transform .4s cubic-bezier(0.4, 0, 0.2, 1), color .2s",
                  transform: isOpen ? "rotate(90deg)" : "rotate(0)",
                  lineHeight: 1,
                  display: "block",
                  paddingBottom: 4
                }}
              >
                ›
              </span>
            </div>
          </button>

          {/* Expandable content */}
          <div
            style={{
              maxHeight: isOpen ? 2500 : 0,
              opacity: isOpen ? 1 : 0,
              transition: "max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease, padding 0.5s ease",
              paddingTop: isOpen ? 24 : 0,
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingBottom: 16 }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,.02)",
                    border: "1px solid #1e1530",
                    borderRadius: 16,
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${t.gradientFrom}, ${t.gradientTo})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#fff",
                        flexShrink: 0,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 2 }}>{t.username}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,.5)", display: "flex", alignItems: "center", gap: 4 }}>
                        <span style={{ color: "#C084FC" }}>✦</span> {t.platform}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 2 }}>
                    {[...Array(t.stars)].map((_, idx) => (
                      <span key={idx} style={{ color: "#F472B6", fontSize: 14 }}>
                        ★
                      </span>
                    ))}
                  </div>

                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.7)", lineHeight: 1.6, margin: 0 }}>
                    &quot;{t.review}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
