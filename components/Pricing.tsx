"use client";
import { useState } from "react";

const addons = [
  {
    title: "Financial Planner",
    desc: "Tracks your income per platform, highlights slow months, estimates taxes, and helps you set earning goals — built around your actual booking volume.",
  },
  {
    title: "VIP Client CRM",
    desc: "Remembers birthdays, anniversaries, preferences, and past bookings for your top clients. DupeMe sends the right message at exactly the right moment.",
  },
  {
    title: "Upsell Sequences",
    desc: "Automated follow-up messages written in your voice — designed to convert one-time clients to regulars, and regulars to premium spend.",
  },
  {
    title: "Analytics & Monthly Reports",
    desc: "Which platforms performed, response rates, booking conversion, and busiest times — delivered as a clean summary every month.",
  },
  {
    title: "Waitlist Manager",
    desc: "When you're fully booked, DupeMe manages a waitlist and automatically notifies clients the moment a slot opens.",
  },
  {
    title: "Fitness & Diet Tracker",
    desc: "Track your workouts, meals, and wellness goals in one place. Your personal assistant logs your progress and keeps you on schedule — because taking care of yourself is part of the job.",
  },
];

function AddonAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {addons.map((a, i) => (
        <div
          key={i}
          style={{
            borderBottom: i < addons.length - 1 ? ".5px solid rgba(192,132,252,.12)" : "none",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 0",
              color: open === i ? "#c084fc" : "rgba(255,255,255,.75)",
              fontSize: 13,
              fontWeight: 500,
              textAlign: "left",
              transition: "color .2s",
            }}
          >
            {a.title}
            <span style={{
              fontSize: 16,
              color: "rgba(192,132,252,.6)",
              transform: open === i ? "rotate(45deg)" : "rotate(0)",
              transition: "transform .2s",
              lineHeight: 1,
              flexShrink: 0,
              marginLeft: 8,
            }}>+</span>
          </button>
          {open === i && (
            <p style={{
              fontSize: 12,
              color: "rgba(255,255,255,.65)",
              lineHeight: 1.7,
              paddingBottom: 12,
              margin: 0,
            }}>
              {a.desc}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-pad"
      style={{
        borderBottom: ".5px solid rgba(192,132,252,.15)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <span
        className="reveal"
        style={{
          fontSize: 10,
          letterSpacing: ".22em",
          textTransform: "uppercase",
          color: "#C084FC",
          marginBottom: "1.25rem",
          display: "block",
        }}
      >
        Pricing
      </span>
      <h2
        className="font-serif reveal reveal-delay-1"
        style={{ fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 400, marginBottom: ".75rem" }}
      >
        Simple. Transparent. No surprises.
      </h2>
      <p
        className="reveal reveal-delay-2"
        style={{ fontSize: 14, color: "rgba(255,255,255,.65)", marginBottom: "3rem", maxWidth: 500, lineHeight: 1.8 }}
      >
        A single, one-time setup fee. Then you only pay for what the AI actually uses. No subscriptions. No commission. Ever.
      </p>

      {/* 3 Pricing Cards */}
      <div className="pricing-grid reveal reveal-delay-3" style={{ marginBottom: "4rem" }}>
        
        {/* Card 1 */}
        <div className="card-hover" style={{ padding: "2.5rem 2rem" }}>
          <h3 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".06em", color: "rgba(255,255,255,.65)", marginBottom: "1rem" }}>
            Getting Started
          </h3>
          <p className="font-serif" style={{ fontSize: 42, color: "#fff", lineHeight: 1, marginBottom: ".25rem" }}>
            $2,500
          </p>
          <p style={{ fontSize: 13, color: "#C084FC", marginBottom: "1.5rem" }}>
            one-time setup fee · no recurring contracts
          </p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.72)", lineHeight: 1.6, marginBottom: "1.75rem" }}>
            We build your entire AI assistant from scratch — trained on your voice, connected to every platform, and configured to your exact rules. One payment. Yours forever.
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: "2rem" }}>
            <li style={{ fontSize: 13, color: "rgba(255,255,255,.85)", display: "flex", gap: "8px" }}>
              <span style={{ color: "#c084fc", flexShrink: 0 }}>✓</span>
              Full onboarding call — we get to know your voice, rules, and how you work
            </li>
            <li style={{ fontSize: 13, color: "rgba(255,255,255,.85)", display: "flex", gap: "8px" }}>
              <span style={{ color: "#c084fc", flexShrink: 0 }}>✓</span>
              Voice & tone training — your AI sounds exactly like you
            </li>
            <li style={{ fontSize: 13, color: "rgba(255,255,255,.85)", display: "flex", gap: "8px" }}>
              <span style={{ color: "#c084fc", flexShrink: 0 }}>✓</span>
              All platforms connected — WhatsApp, Telegram, Instagram, email & more
            </li>
            <li style={{ fontSize: 13, color: "rgba(255,255,255,.85)", display: "flex", gap: "8px" }}>
              <span style={{ color: "#c084fc", flexShrink: 0 }}>✓</span>
              Screening rules configured — time-wasters filtered automatically
            </li>
            <li style={{ fontSize: 13, color: "rgba(255,255,255,.85)", display: "flex", gap: "8px" }}>
              <span style={{ color: "#c084fc", flexShrink: 0 }}>✓</span>
              Content scheduling across all platforms
            </li>
            <li style={{ fontSize: 13, color: "rgba(255,255,255,.85)", display: "flex", gap: "8px" }}>
              <span style={{ color: "#c084fc", flexShrink: 0 }}>✓</span>
              Personal Assistant chat — your direct line to DupeMe. Give instructions, check in, stay in control.
            </li>
          </ul>

          {/* Free Website — Limited Time Offer */}
          <div style={{
            background: "linear-gradient(135deg, rgba(192,132,252,.12), rgba(244,114,182,.08))",
            border: "1px solid rgba(192,132,252,.4)",
            borderRadius: 10,
            padding: "1.25rem",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              top: "-1px",
              right: "-1px",
              background: "linear-gradient(135deg, #f472b6, #c084fc)",
              color: "#000",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: "0 10px 0 8px",
            }}>
              ⚡ Limited Time
            </div>
            <p style={{ fontSize: 11, color: "#c084fc", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".4rem", fontWeight: 600 }}>
              Free Bonus Included
            </p>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: ".4rem" }}>
              Your own branded website — live on day one
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,.65)", lineHeight: 1.6 }}>
              Your photos, rates, and booking link — professionally designed and ready to share the moment we go live. Normally a separate cost. Included free for early clients.
            </p>
          </div>
        </div>


        {/* Card 2 - Focal */}
        <div className="pricing-focal" style={{ 
          padding: "3rem 2rem", 
          background: "rgba(192,132,252,0.06)", 
          border: "1px solid rgba(192,132,252,0.5)", 
          boxShadow: "0 0 30px rgba(192,132,252,0.2)",
          position: "relative",
          zIndex: 5,
          transition: "transform 0.3s ease, box-shadow 0.3s ease"
        }}>
          <div style={{ display: "inline-block", padding: "4px 12px", background: "#C084FC", color: "#000", fontSize: 11, fontWeight: 600, letterSpacing: ".04em", borderRadius: 100, marginBottom: "1.5rem" }}>
            Pay only for what you use
          </div>
          <h3 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".06em", color: "rgba(255,255,255,.8)", marginBottom: "1rem" }}>
            Monthly Running Cost
          </h3>
          <p className="font-serif" style={{ fontSize: 42, color: "#fff", lineHeight: 1, marginBottom: ".25rem" }}>
            ~$40<span style={{ fontSize: 24, color: "rgba(255,255,255,.72)" }}>/mo</span>
          </p>
          <p style={{ fontSize: 13, color: "#C084FC", marginBottom: "1.5rem" }}>
            max based on your usage
          </p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.72)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            After setup, you only pay for actual AI usage — nothing else.
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: "2rem" }}>
            <li style={{ fontSize: 13, color: "rgba(255,255,255,.8)", display: "flex", gap: "8px" }}><span style={{color: "#C084FC"}}>✓</span> No flat subscription</li>
            <li style={{ fontSize: 13, color: "rgba(255,255,255,.8)", display: "flex", gap: "8px" }}><span style={{color: "#C084FC"}}>✓</span> No commission on bookings</li>
            <li style={{ fontSize: 13, color: "rgba(255,255,255,.8)", display: "flex", gap: "8px" }}><span style={{color: "#C084FC"}}>✓</span> Transparent usage billing</li>
            <li style={{ fontSize: 13, color: "rgba(255,255,255,.8)", display: "flex", gap: "8px" }}><span style={{color: "#C084FC"}}>✓</span> Cancel anytime</li>
          </ul>
          <button 
            className="btn-primary" 
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
          >
            Get in touch
          </button>
        </div>

        {/* Card 3 */}
        <div className="card-hover" style={{ padding: "2.5rem 2rem" }}>
          <h3 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".06em", color: "rgba(255,255,255,.65)", marginBottom: "1rem" }}>
            Add-Ons
          </h3>
          <p className="font-serif" style={{ fontSize: 42, color: "#fff", lineHeight: 1, marginBottom: ".25rem" }}>
            Custom
          </p>
          <p style={{ fontSize: 13, color: "#C084FC", marginBottom: "1rem" }}>
            priced per your needs
          </p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.65)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Expand what your AI can do. Tell us what you need on the call — we build and manage everything for you.
          </p>
          <AddonAccordion />
        </div>
      </div>



    </section>
  );
}

