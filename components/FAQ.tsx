"use client";
import { useState } from "react";

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
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        padding: "3rem 2rem",
        background: "transparent",
        color: "#fff",
        position: "relative",
        zIndex: 2,
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .faq-item {
          border-bottom: 1px solid rgba(192,132,252,0.12);
        }
        .faq-item:first-child {
          border-top: 1px solid rgba(192,132,252,0.12);
        }
        .faq-row-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.25rem 0;
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
          text-align: left;
        }
        .faq-row-btn:hover .faq-q {
          color: #C084FC;
        }
        .faq-q {
          font-size: clamp(13px, 2vw, 15px);
          font-weight: 500;
          line-height: 1.4;
          transition: color 0.25s ease;
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
        }
        .faq-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(192,132,252,0.25);
          background: rgba(192,132,252,0.04);
          color: #C084FC;
          font-size: 17px;
          font-weight: 300;
          flex-shrink: 0;
          transition: all 0.3s ease;
          line-height: 1;
        }
        .faq-icon.open {
          background: rgba(244,114,182,0.1);
          border-color: rgba(244,114,182,0.3);
          color: #F472B6;
          transform: rotate(45deg);
        }
        .faq-answer {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease;
        }
        .faq-answer-inner {
          padding-bottom: 1.25rem;
          font-size: 13.5px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
        }
        .faq-main-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
          text-align: left;
          padding: 1.5rem 2rem;
        }
        .faq-main-toggle:hover h2 {
          opacity: 0.85;
        }
        .faq-main-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(192,132,252,0.25);
          background: rgba(192,132,252,0.04);
          color: #C084FC;
          font-size: 22px;
          font-weight: 300;
          flex-shrink: 0;
          transition: all 0.35s ease;
          line-height: 1;
        }
        .faq-main-icon.open {
          background: rgba(192,132,252,0.12);
          border-color: rgba(192,132,252,0.4);
          transform: rotate(180deg);
        }
      `}} />

      <div className="reveal" style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Outer Dropdown Card */}
        <div style={{
          border: "1px solid rgba(192,132,252,0.15)",
          borderRadius: 16,
          overflow: "hidden",
          background: "rgba(255,255,255,0.015)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}>

          {/* Main Toggle Header */}
          <button className="faq-main-toggle" onClick={() => { setIsMainOpen(!isMainOpen); if (isMainOpen) setOpenIndex(null); }}>
            <div>
              <span style={{
                fontSize: 10,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "#C084FC",
                marginBottom: "0.5rem",
                display: "block",
              }}>
                FAQ
              </span>
              <h2
                className="font-serif"
                style={{
                  fontSize: "clamp(22px, 3.5vw, 30px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  margin: 0,
                  transition: "opacity 0.2s ease",
                }}
              >
                Everything you need{" "}
                <em className="text-gradient font-serif" style={{ fontStyle: "italic" }}>
                  to know.
                </em>
              </h2>
            </div>
            <span className={`faq-main-icon${isMainOpen ? " open" : ""}`}>
              {isMainOpen ? "−" : "+"}
            </span>
          </button>

          {/* Collapsible Questions */}
          <div style={{
            maxHeight: isMainOpen ? 5000 : 0,
            opacity: isMainOpen ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.65s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease",
            padding: isMainOpen ? "0 2rem 1.5rem 2rem" : "0 2rem",
            borderTop: isMainOpen ? "1px solid rgba(192,132,252,0.12)" : "1px solid transparent",
          }}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="faq-item">
                  <button
                    className="faq-row-btn"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q">{faq.q}</span>
                    <span className={`faq-icon${isOpen ? " open" : ""}`}>+</span>
                  </button>
                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: isOpen ? 400 : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="faq-answer-inner">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
