"use client";
import React from "react";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-pad"
      style={{
        backgroundColor: "#080412",
        borderBottom: ".5px solid rgba(192,132,252,.15)",
        position: "relative",
        zIndex: 2,
        color: "#ffffff"
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            className="font-serif"
            style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 400, marginBottom: "1rem" }}
          >
            Simple. Transparent. Built around you.
          </h2>
          <p
            style={{ fontSize: "16px", color: "rgba(255,255,255,.65)", margin: "0 auto", maxWidth: "600px", lineHeight: 1.6 }}
          >
            Every build starts at $2,500. What's inside depends on your world.
          </p>
        </div>

        {/* Base Card */}
        <div className="reveal reveal-delay-1" style={{
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "3rem 2rem",
          textAlign: "center",
          marginBottom: "3rem",
          position: "relative",
        }}>
          {/* subtle purple/pink gradient border */}
          <div style={{
            position: "absolute",
            inset: 0,
            borderRadius: "20px",
            padding: "1px",
            background: "linear-gradient(135deg, rgba(192,132,252,0.5), rgba(244,114,182,0.5))",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
          }}></div>
          
          <h3 className="font-serif" style={{ fontSize: "clamp(40px, 6vw, 56px)", fontWeight: "bold", margin: 0, lineHeight: 1 }}>$2,500</h3>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,.6)", marginTop: "0.5rem", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            one-time setup fee
          </p>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,.8)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
            "Your AI, trained on your voice, connected to your platforms, configured to your rules. One payment. Yours forever. Includes your own branded website — professionally designed and live on day one."
          </p>
        </div>

        {/* Two Columns */}
        <div className="reveal reveal-delay-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          
          {/* Left Column - ESCORTS */}
          <div style={{
            background: "rgba(244,114,182,0.03)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(244,114,182,0.3)",
            boxShadow: "0 0 30px rgba(244,114,182,0.1)",
            borderRadius: "20px",
            padding: "2.5rem 2rem",
            position: "relative",
            transition: "transform 0.3s ease",
          }} className="card-hover">
            <h4 style={{ color: "#F472B6", fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5rem", fontWeight: "600" }}>ESCORTS</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "Screening & vetting workflows",
                "Booking & deposit automation",
                "Email / WhatsApp / Telegram / iMessage",
                "Calendar sync",
                "VIP client CRM — memory, upkeep & flirting",
                "X & Instagram posting"
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px", fontSize: "14px", color: "rgba(255,255,255,.85)" }}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span style={{ color: "#F472B6", flexShrink: 0, fontWeight: "bold" }}>✓</span>
                    <span style={{ lineHeight: 1.4 }}>{item}</span>
                  </div>
                  <span style={{
                    fontSize: "10px",
                    background: "rgba(192,132,252,0.08)",
                    padding: "4px 8px",
                    borderRadius: "10px",
                    color: "rgba(192,132,252,0.7)",
                    whiteSpace: "nowrap",
                    alignSelf: "flex-start",
                    marginTop: "2px",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em"
                  }}>custom pricing</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - CREATORS */}
          <div style={{
            background: "rgba(192,132,252,0.03)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(192,132,252,0.3)",
            boxShadow: "0 0 30px rgba(192,132,252,0.1)",
            borderRadius: "20px",
            padding: "2.5rem 2rem",
            position: "relative",
            transition: "transform 0.3s ease",
          }} className="card-hover">
            <h4 style={{ color: "#C084FC", fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5rem", fontWeight: "600" }}>CREATORS</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "Instagram / X automation",
                "Upsell sequences on socials — in your voice",
                "Content scheduling & posting",
                "Fan CRM & subscriber memory",
                "Waitlist manager"
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px", fontSize: "14px", color: "rgba(255,255,255,.85)" }}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span style={{ color: "#C084FC", flexShrink: 0, fontWeight: "bold" }}>✓</span>
                    <span style={{ lineHeight: 1.4 }}>{item}</span>
                  </div>
                  <span style={{
                    fontSize: "10px",
                    background: "rgba(192,132,252,0.08)",
                    padding: "4px 8px",
                    borderRadius: "10px",
                    color: "rgba(192,132,252,0.7)",
                    whiteSpace: "nowrap",
                    alignSelf: "flex-start",
                    marginTop: "2px",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em"
                  }}>custom pricing</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Do both? callout */}
        <div className="reveal reveal-delay-3" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,.7)", fontStyle: "italic", fontWeight: 300, maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            "Escort by night, creator by day? We build for both. Get in touch and we'll scope it out together."
          </p>
        </div>

        {/* Monthly Cost Strip */}
        <div className="reveal reveal-delay-4" style={{
          textAlign: "center",
          padding: "2.5rem 2rem",
          background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.04))",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.08)",
          marginBottom: "3rem"
        }}>
          <h3 className="font-serif" style={{ fontSize: "clamp(32px, 5vw, 42px)", fontWeight: "bold", margin: "0 0 0.5rem 0", color: "#fff", lineHeight: 1 }}>
            ~$40–$100<span style={{ fontSize: "clamp(18px, 3vw, 24px)", color: "rgba(255,255,255,.5)", fontWeight: "normal" }}>/mo</span>
          </h3>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,.7)", marginBottom: "1.5rem", maxWidth: "600px", margin: "0 auto 1.5rem auto", lineHeight: 1.6 }}>
            after setup — you only pay for actual AI usage. No subscriptions. No commission. Ever.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", fontSize: "14px", color: "rgba(255,255,255,.8)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "#C084FC" }}>✓</span> No flat subscription</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "#C084FC" }}>✓</span> No commission on bookings</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "#C084FC" }}>✓</span> Cancel anytime</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="reveal reveal-delay-5" style={{ textAlign: "center", paddingBottom: "2rem" }}>
          <button
            className="btn-primary"
            style={{ width: "100%", maxWidth: "300px", justifyContent: "center", padding: "1.25rem 2rem", fontSize: "16px" }}
            onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
          >
            Get in touch
          </button>
        </div>

      </div>
    </section>
  );
}
