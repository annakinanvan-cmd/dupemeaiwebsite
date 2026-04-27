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
  {
    q: "🌶️ What if my conversations with clients get explicit?",
    a: "Not a problem. Unlike mainstream AI tools that block adult content, DupeMe is built for this industry — no filters, no restrictions. Your AI is trained to handle explicit conversations, discuss your services in full, and even engage in dirty talk with clients. All in your voice, exactly how you'd say it.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMainOpen, setIsMainOpen] = useState(false);

  return (
    <section id="faq" className="accordion-section-pad" style={{ paddingTop: "2rem", background: "transparent", color: "#fff", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        
        {/* Main Collapse Wrapper */}
        <div 
          className="reveal"
          style={{
            background: "#080412",
            border: "1px solid rgba(192,132,252,0.15)",
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
              <h2 className="font-serif" style={{ fontSize: "clamp(26px, 4.5vw, 38px)", fontWeight: 700, margin: 0, letterSpacing: "-0.01em" }}>
                Frequently Asked Questions
              </h2>
            </div>
            
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: isMainOpen ? "rgba(192,132,252,0.1)" : "rgba(255,255,255,0.03)",
              border: isMainOpen ? "1px solid rgba(192,132,252,0.2)" : "1px solid rgba(255,255,255,0.1)",
              flexShrink: 0,
              transition: "all 0.3s ease"
            }}>
              <span style={{ fontSize: "22px", color: isMainOpen ? "#C084FC" : "rgba(255,255,255,.6)", fontWeight: 300, transition: "transform .4s cubic-bezier(0.4, 0, 0.2, 1)", transform: isMainOpen ? "rotate(180deg)" : "rotate(0)" }}>
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
              borderTop: isMainOpen ? "1px solid rgba(192,132,252,0.15)" : "1px solid transparent"
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
                      border: "1px solid rgba(192,132,252,0.15)",
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
                      <span style={{ 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: isOpen ? "rgba(244,114,182,0.1)" : "rgba(255,255,255,0.03)",
                    border: isOpen ? "1px solid rgba(244,114,182,0.2)" : "1px solid rgba(255,255,255,0.1)",
                    fontSize: "20px", 
                    color: isOpen ? "#f472b6" : "rgba(255,255,255,.6)",
                    transition: "all 0.3s ease",
                    fontWeight: 300,
                    lineHeight: 1,
                    flexShrink: 0
                  }}>
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
