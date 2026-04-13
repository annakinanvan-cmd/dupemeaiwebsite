"use client";
import { useState, useRef } from "react";

const faqs = [
  {
    q: "How does DupeMe learn my voice?",
    a: "Through a deep-dive onboarding session. We get into the details — how you greet clients, how you screen, how you flirt, how you close a booking. Your dupe doesn't just sound like you. It thinks like you.",
  },
  {
    q: "Will my clients know it's an AI?",
    a: "No. DupeMe responds naturally, at human pace, with your vocabulary and your warmth. Your clients experience you. That's the point.",
  },
  {
    q: "Is my data private?",
    a: "Completely. Your conversations, your client memory, your personal information — none of it is shared, sold, or accessible to anyone but you. We never store client photos or financial details. Your data is yours, always.",
  },
  {
    q: "Which platforms does DupeMe work on?",
    a: "WhatsApp, Telegram, Instagram, iMessage, Signal, OnlyFans, Gmail, X, and Google Calendar. Everywhere your clients already are.",
  },
  {
    q: "What if I want to take over a conversation?",
    a: "One tap. From your dashboard you can pause your dupe instantly and jump in yourself at any point. You are always in control.",
  },
  {
    q: "Will my accounts get banned?",
    a: "No. DupeMe uses human-paced response timing so it never triggers platform bot detection. No flags, no shadowbans, no account risk.",
  },
  {
    q: "How long does setup take?",
    a: "Depending on how many platforms and add-ons you need, setup is typically between 48 hours and one week. We move as fast as your setup allows.",
  },
  {
    q: "What's included in the price?",
    a: "Full setup, onboarding, platform integrations, AI voice training, client memory, and your personal dashboard. One payment, yours to keep. Some advanced add-ons cost more — see the full price list for details.",
  },
  {
    q: "Is this judgment-free?",
    a: "Completely. DupeMe was built specifically for the adult industry. Explicit content, adult platforms, spicy communication — that's exactly what we're designed for. No sanitising, no restrictions, no shame.",
  },
  {
    q: "I'm LGBTQIA+ — is DupeMe for me?",
    a: "Absolutely. Every provider, every creator, every identity. This was a priority from day one — not an afterthought. You belong here, fully and without question.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMainOpen, setIsMainOpen] = useState(false);

  return (
    <section id="faq" className="accordion-section-pad" style={{ background: "transparent", color: "#fff", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        
        {/* Main Collapse Wrapper */}
        <div 
          className="reveal"
          style={{
            background: "#110e1a",
            border: "1px solid #1e1530",
            borderRadius: 16,
            overflow: "hidden",
            transition: "all 0.3s ease"
          }}
        >
          {/* Main Header Toggle */}
          <button
            onClick={() => setIsMainOpen(!isMainOpen)}
            className="accordion-header"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "24px 28px",
              background: isMainOpen ? "rgba(192,132,252,.04)" : "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              textAlign: "left",
              minHeight: 80,
              transition: "background .3s ease"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "#C084FC" }}>
                Everything you need to know
              </span>
              <h2 className="font-serif" style={{ fontSize: "clamp(22px,3.5vw,32px)", fontWeight: 400, margin: 0 }}>
                Frequently Asked Questions
              </h2>
            </div>
            
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(192,132,252,.08)",
              flexShrink: 0
            }}>
              <span style={{ fontSize: 24, color: "#C084FC", fontWeight: 300, transition: "transform .4s cubic-bezier(0.4, 0, 0.2, 1)", transform: isMainOpen ? "rotate(180deg)" : "rotate(0)" }}>
                {isMainOpen ? "−" : "+"}
              </span>
            </div>
          </button>

          {/* Children List */}
          <div
            style={{
              maxHeight: isMainOpen ? 4000 : 0, /* Large enough to fit 10 questions */
              opacity: isMainOpen ? 1 : 0,
              transition: "max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease, padding 0.5s ease",
              padding: isMainOpen ? "12px 28px 28px 28px" : "0 28px",
              borderTop: isMainOpen ? "1px solid #1e1530" : "1px solid transparent"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,.02)",
                      border: "1px solid #1e1530",
                      borderRadius: 12,
                      overflow: "hidden",
                      transition: "background .2s",
                    }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "18px 22px",
                        background: "transparent",
                        border: "none",
                        color: "#fff",
                        cursor: "pointer",
                        textAlign: "left",
                        minHeight: 52,
                      }}
                    >
                      <span style={{ fontSize: 15, fontWeight: 500, paddingRight: 16 }}>{faq.q}</span>
                      <span style={{ fontSize: 20, color: "#C084FC", fontWeight: 300, flexShrink: 0, transition: "transform .3s", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      style={{
                        maxHeight: isOpen ? 500 : 0,
                        opacity: isOpen ? 1 : 0,
                        transition: "max-height 0.4s ease, opacity 0.4s ease, padding 0.4s ease",
                        padding: isOpen ? "0 22px 20px 22px" : "0 22px",
                      }}
                    >
                      <p style={{ fontSize: 14, color: "rgba(255,255,255,.65)", lineHeight: 1.7, margin: 0 }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
