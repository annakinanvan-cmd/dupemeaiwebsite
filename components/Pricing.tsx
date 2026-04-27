"use client";
import React, { useState } from "react";

const competitors = [
  {
    label: "Full tool stack",
    price: "$300–500+",
    period: "/mo",
    pros: ["Some platforms covered"],
    cons: ["Not in your voice", "Still requires your time", "Screening is still on you"],
  },
  {
    label: "Human phone booker",
    price: "$1,500–3,000+",
    period: "/mo",
    pros: ["Books and screens"],
    cons: ["Sleeps, gossips, takes commission", "Knows your entire client list", "Nothing else"],
  },
];

const dupeFeatures = [
  "Every platform, one place",
  "100% your voice",
  "Screens, books, retains, posts",
  "Zero commission. Ever.",
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'escorts' | 'creators'>('creators');
  return (
    <>
    <section
      id="why-dupeme"
      className="section-pad"
      style={{
        borderBottom: ".5px solid rgba(192,132,252,.15)",
        position: "relative",
        zIndex: 2,
        color: "#ffffff",
        paddingBottom: "1.5rem"
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* --- HEADER --- */}
        <span
          className="reveal"
          style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "#C084FC", marginBottom: "1.25rem", display: "block" }}
        >
          Why DupeMe
        </span>
        <h2
          className="font-serif reveal reveal-delay-1"
          style={{ fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 400, marginBottom: ".75rem" }}
        >
          Everyone else does one thing.{" "}
          <span style={{ background: "linear-gradient(to right, #f472b6, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic" }}>
            DupeMe does everything.
          </span>
        </h2>
        <p
          className="reveal reveal-delay-2"
          style={{ fontSize: 14, color: "rgba(255,255,255,.65)", marginBottom: "3rem", lineHeight: 1.7, maxWidth: 480 }}
        >
          You&apos;re already spending thousands on tools or staff that still leave gaps. DupeMe AI replaces all of it — in your voice, across every platform, for a fraction of the cost.
        </p>

        {/* --- COMPARISON GRID --- */}
        <style dangerouslySetInnerHTML={{__html: `
          .comparison-scroll {
            display: flex;
            overflow-x: auto;
            gap: 1rem;
            padding-bottom: 1rem;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            margin: 0 -20px;
            padding-left: 20px;
            padding-right: 20px;
          }
          .comparison-scroll::-webkit-scrollbar {
            display: none;
          }
          .comparison-card {
            flex: 0 0 85%;
            scroll-snap-align: center;
          }
          @media (min-width: 768px) {
            .comparison-scroll {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              overflow-x: visible;
              padding-bottom: 0;
              margin: 0;
              padding-left: 0;
              padding-right: 0;
            }
            .comparison-card {
              flex: none;
            }
          }
        `}} />
        <div className="reveal reveal-delay-1 comparison-scroll" style={{ marginBottom: "0" }}>
          
          {/* Competitors */}
          {competitors.map((c) => (
            <div key={c.label} className="card-hover comparison-card" style={{ 
              background: "rgba(255,255,255,0.02)", 
              backdropFilter: "blur(5px)", 
              WebkitBackdropFilter: "blur(5px)",
              transform: "translateZ(0)",
              border: "1px solid rgba(255,255,255,0.05)", 
              borderRadius: "16px", 
              padding: "1.5rem 1.25rem", 
              display: "flex", 
              flexDirection: "column"
            }}>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,.6)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{c.label}</p>
              <p className="font-serif" style={{ fontSize: "28px", color: "#fff", lineHeight: 1, marginBottom: "0.25rem" }}>{c.price}</p>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,.5)", marginBottom: "1.5rem" }}>{c.period}</p>
              
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
                {c.pros.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "rgba(255,255,255,.8)" }}>
                    <span style={{ color: "#F472B6", flexShrink: 0 }}>✓</span>
                    <span style={{ lineHeight: 1.4 }}>{item}</span>
                  </li>
                ))}
                {c.cons.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "rgba(255,255,255,.5)" }}>
                    <span style={{ color: "rgba(255,255,255,.3)", flexShrink: 0 }}>✗</span>
                    <span style={{ lineHeight: 1.4 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* DupeMe AI Featured */}
          <div className="card-hover comparison-card" style={{ 
            background: "rgba(192,132,252,0.04)", 
            backdropFilter: "blur(5px)", 
            WebkitBackdropFilter: "blur(5px)",
            transform: "translateZ(0)",
            borderRadius: "16px", 
            padding: "1.5rem 1.25rem", 
            position: "relative",
            display: "flex", 
            flexDirection: "column",
            boxShadow: "0 0 40px rgba(192,132,252,0.15)"
          }}>
            {/* Gradient Border Mask */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: "16px", padding: "1px",
              background: "linear-gradient(135deg, rgba(192,132,252,0.6), rgba(244,114,182,0.6))",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor", maskComposite: "exclude", pointerEvents: "none"
            }}></div>

            <span style={{
              fontSize: "10px", letterSpacing: ".12em", color: "#C084FC", border: "1px solid rgba(192,132,252,.4)",
              padding: "4px 10px", borderRadius: "100px", alignSelf: "flex-start", marginBottom: "1.25rem",
              background: "rgba(192,132,252,0.1)"
            }}>
              DupeMe AI
            </span>
            <p className="font-serif" style={{ fontSize: "28px", color: "#fff", lineHeight: 1.1, marginBottom: "0.25rem" }}>
              $2,500
            </p>
            <p style={{ fontSize: "12px", color: "#C084FC", marginBottom: "1.5rem" }}>one-time setup fee</p>
            
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
              {dupeFeatures.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "rgba(255,255,255,.9)" }}>
                  <span style={{ color: "#C084FC", flexShrink: 0, fontWeight: "bold" }}>✓</span>
                  <span style={{ lineHeight: 1.4 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>



      </div>
    </section>

    <section
      id="pricing"
      className="section-pad"
      style={{
        paddingTop: "1.5rem",
        paddingBottom: "0",
        position: "relative",
        zIndex: 2,
        color: "#ffffff"
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>

        {/* --- DETAILED PRICING BREAKDOWN --- */}
        <span
          className="reveal reveal-delay-3"
          style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "#C084FC", marginBottom: "1.25rem", display: "block" }}
        >
          Pricing
        </span>
        <h3 className="font-serif reveal reveal-delay-3" style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 400, marginBottom: ".75rem" }}>
          Simple. Transparent.{" "}
          <span style={{ background: "linear-gradient(to right, #f472b6, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic" }}>
            Built around you.
          </span>
        </h3>
        <p className="reveal reveal-delay-3" style={{ fontSize: 14, color: "rgba(255,255,255,.65)", maxWidth: 480, lineHeight: 1.7, marginBottom: "2rem" }}>
          Every build is unique. What&apos;s inside depends on your world.
        </p>

        {/* --- BASE SETUP INFO --- */}
        <div className="reveal reveal-delay-3" style={{
          textAlign: "center",
          marginBottom: "2.5rem",
        }}>
          {/* Line 1 */}
          <h4 className="font-serif" style={{ fontSize: "clamp(48px, 6vw, 64px)", fontWeight: "bold", color: "#fff", lineHeight: 1, marginBottom: "0.5rem" }}>
            $2,500
          </h4>
          
          {/* Line 2 */}
          <p style={{ fontSize: "12px", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", fontWeight: 600, marginBottom: "1rem" }}>
            One-time payment. Yours forever.
          </p>

          {/* Line 3 */}
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,.4)", fontStyle: "italic", maxWidth: "500px", margin: "0 auto 1.5rem auto", lineHeight: 1.5 }}>
            Final price depends on your tools and integrations — scoped together on your call.
          </p>

          {/* Line 4 - Animated Pill */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes pulseBorderGlow {
              0% { box-shadow: 0 0 10px rgba(244, 114, 182, 0.05), inset 0 0 5px rgba(244, 114, 182, 0.02); border-color: rgba(244, 114, 182, 0.2); }
              50% { box-shadow: 0 0 20px rgba(244, 114, 182, 0.25), inset 0 0 10px rgba(244, 114, 182, 0.1); border-color: rgba(244, 114, 182, 0.5); }
              100% { box-shadow: 0 0 10px rgba(244, 114, 182, 0.05), inset 0 0 5px rgba(244, 114, 182, 0.02); border-color: rgba(244, 114, 182, 0.2); }
            }
          `}} />
          <div style={{ display: "inline-block" }}>
            <span style={{ 
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(135deg, rgba(244, 114, 182, 0.03), rgba(192, 132, 252, 0.02))",
              border: "1px solid rgba(244, 114, 182, 0.2)",
              padding: "10px 20px",
              borderRadius: "100px",
              color: "#fff", 
              fontWeight: 500,
              fontSize: "13px",
              lineHeight: 1.2,
              animation: "pulseBorderGlow 2.5s ease-in-out infinite"
            }}>
              <span style={{ fontSize: "16px" }}>🎁</span>
              <span>
                <span style={{ color: "#F472B6", fontWeight: "bold" }}>Limited time:</span> includes your branded website — live on day one.
              </span>
            </span>
          </div>
        </div>

        {/* --- STACK TOGGLE SECTION --- */}
        <div className="reveal reveal-delay-4" style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexDirection: "column" }} className="toggle-container-mobile">
            <style dangerouslySetInnerHTML={{__html: `
              @media (min-width: 640px) {
                .toggle-container-mobile {
                  flex-direction: row !important;
                }
                .toggle-btn {
                  flex: 1;
                }
              }
            `}} />
            <button
              className="toggle-btn card-hover"
              onClick={() => setActiveTab('escorts')}
              style={{
                textAlign: "left",
                padding: "1.5rem",
                borderRadius: "16px",
                background: activeTab === 'escorts' ? "rgba(244,114,182,0.05)" : "rgba(255,255,255,0.02)",
                border: activeTab === 'escorts' ? "1px solid rgba(244,114,182,0.5)" : "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: "translateZ(0)",
              }}
            >
              <h4 className="font-serif" style={{ fontSize: "clamp(24px, 3vw, 28px)", color: activeTab === 'escorts' ? "#F472B6" : "rgba(255,255,255,.4)", marginBottom: "0.25rem", fontWeight: 400 }}>Escorts</h4>
              <p style={{ fontSize: "13px", color: activeTab === 'escorts' ? "rgba(255,255,255,.6)" : "rgba(255,255,255,.3)", margin: 0 }}>Booking, screening & client management</p>
            </button>
            
            <button
              className="toggle-btn card-hover"
              onClick={() => setActiveTab('creators')}
              style={{
                textAlign: "left",
                padding: "1.5rem",
                borderRadius: "16px",
                background: activeTab === 'creators' ? "rgba(192,132,252,0.05)" : "rgba(255,255,255,0.02)",
                border: activeTab === 'creators' ? "1px solid rgba(192,132,252,0.5)" : "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: "translateZ(0)",
              }}
            >
              <h4 className="font-serif" style={{ fontSize: "clamp(24px, 3vw, 28px)", color: activeTab === 'creators' ? "#C084FC" : "rgba(255,255,255,.4)", marginBottom: "0.25rem", fontWeight: 400 }}>Creators</h4>
              <p style={{ fontSize: "13px", color: activeTab === 'creators' ? "rgba(255,255,255,.6)" : "rgba(255,255,255,.3)", margin: 0 }}>Social automation & fan management</p>
            </button>
          </div>

          <div style={{
            background: activeTab === 'escorts' ? "rgba(244,114,182,0.03)" : "rgba(192,132,252,0.03)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            transform: "translateZ(0)",
            border: activeTab === 'escorts' ? "1px solid rgba(244,114,182,0.3)" : "1px solid rgba(192,132,252,0.3)",
            boxShadow: activeTab === 'escorts' ? "0 0 30px rgba(244,114,182,0.1)" : "0 0 30px rgba(192,132,252,0.1)",
            borderRadius: "20px",
            padding: "2.5rem 2rem",
            position: "relative",
            transition: "all 0.4s ease",
            marginBottom: "1.5rem"
          }}>
            <h4 style={{ 
              color: activeTab === 'escorts' ? "#F472B6" : "#C084FC", 
              fontSize: "14px", 
              textTransform: "uppercase", 
              letterSpacing: "0.1em", 
              marginBottom: "1.5rem", 
              fontWeight: "600" 
            }}>
              {activeTab === 'escorts' ? "ESCORTS" : "CREATORS"}
            </h4>
            
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {activeTab === 'escorts' ? (
                [
                  "Screening & vetting workflows",
                  "Booking & deposit automation",
                  "Email / WhatsApp / Telegram / iMessage",
                  "Calendar sync",
                  "VIP client CRM — memory, upkeep & flirting",
                  "X & Instagram posting"
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "rgba(255,255,255,.85)" }}>
                    <span style={{ color: "#F472B6", flexShrink: 0, fontSize: "20px", lineHeight: 1 }}>•</span>
                    <span style={{ lineHeight: 1.4 }}>{item}</span>
                  </li>
                ))
              ) : (
                [
                  "Instagram / X automation",
                  "Upsell sequences on socials — in your voice",
                  "Content scheduling & posting",
                  "Fan CRM & subscriber memory",
                  "Waitlist manager"
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "rgba(255,255,255,.85)" }}>
                    <span style={{ color: "#C084FC", flexShrink: 0, fontSize: "20px", lineHeight: 1 }}>•</span>
                    <span style={{ lineHeight: 1.4 }}>{item}</span>
                  </li>
                ))
              )}
            </ul>
            
            <p style={{ marginTop: "2.5rem", marginBottom: 0, fontSize: "14px", color: "rgba(255,255,255,.4)", fontStyle: "italic" }}>
              The more you need, the more we build — scoped and priced on your call.
            </p>
          </div>
        </div>

        {/* Do both? callout */}
        <div className="reveal reveal-delay-5" style={{ textAlign: "center", marginBottom: "1rem", marginTop: "-0.5rem" }}>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,.4)", fontStyle: "italic", fontWeight: 300, maxWidth: "600px", margin: "0 auto", lineHeight: 1.5 }}>
            Escort by night, creator by day? We build for both. Get in touch and we&apos;ll scope it out together.
          </p>
        </div>

        {/* Monthly Cost Strip - Compact Version */}
        <div className="reveal reveal-delay-5" style={{
          textAlign: "center",
          padding: "1rem 1.5rem",
          background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.04))",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.08)",
          maxWidth: "480px",
          margin: "0 auto 0 auto"
        }}>
          <h3 className="font-serif" style={{ fontSize: "clamp(26px, 4vw, 32px)", fontWeight: "bold", margin: "0 0 0.25rem 0", color: "#fff", lineHeight: 1 }}>
            ~$40–$100<span style={{ fontSize: "14px", color: "rgba(255,255,255,.5)", fontWeight: "normal" }}>/mo</span>
          </h3>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,.7)", margin: 0, lineHeight: 1.4 }}>
            After setup — you only pay for actual AI usage. No subscriptions. No commission. Ever.
          </p>
        </div>

      </div>
    </section>
    </>
  );
}
