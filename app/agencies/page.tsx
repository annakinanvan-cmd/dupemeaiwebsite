"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/CTAFooter";
import ContactModal from "../../components/ContactModal";
import CustomCursor from "../../components/CustomCursor";
import ScrollRevealInit from "../../components/ScrollRevealInit";
import ScrollProgress from "../../components/ScrollProgress";
import BackToTop from "../../components/BackToTop";
import BackgroundGradients from "../../components/BackgroundGradients";

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,.05)",
  border: ".5px solid rgba(192,132,252,.2)",
  borderRadius: 10,
  padding: "15px 18px",
  color: "#fff",
  fontSize: 14,
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "inherit",
  transition: "border-color .2s",
};

const stats = [
  { val: "24/7",    desc: "Available always, never sick" },
  { val: "<10 sec", desc: "Response time, every time" },
  { val: "0%",      desc: "Commission on every booking" },
  { val: "Instant", desc: "Scales with your roster" },
];

export default function AgenciesPage() {
  const [form, setForm] = useState({ name: "", agency: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <ScrollProgress />
      <BackgroundGradients />
      <CustomCursor />
      <ScrollRevealInit />
      <Navbar />
      <ContactModal />
      <BackToTop />

      <main style={{ minHeight: "100vh", color: "#fff", position: "relative", zIndex: 1, paddingBottom: "4rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "clamp(6rem,14vw,10rem) clamp(1.25rem,5vw,2rem) 6rem" }}>

          {/* ── HERO ── */}
          <span className="reveal" style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "#C084FC", marginBottom: "1.5rem", display: "block" }}>
            DupeMe for Agencies
          </span>

          <h1 className="font-serif reveal reveal-delay-1" style={{ fontSize: "clamp(32px,5.5vw,60px)", fontWeight: 400, lineHeight: 1.06, marginBottom: "1.5rem" }}>
            The booking agent{" "}
            <em className="text-gradient font-serif" style={{ fontStyle: "italic" }}>that never sleeps.</em>
          </h1>

          <p className="reveal reveal-delay-2" style={{ fontSize: "clamp(14px,2vw,16px)", color: "rgba(255,255,255,.72)", lineHeight: 1.9, marginBottom: "3.5rem", maxWidth: 520 }}>
            One AI handles every inbox, every booking, every deposit — across your entire roster. Around the clock.
          </p>

          {/* ── FEATURES 2x2 ── */}
          <div className="reveal reveal-delay-3 agencies-tools-grid" style={{ marginBottom: "1rem" }}>
            {[
              { label: "Communications",     text: "Every enquiry qualified, responded to, and moved forward. In your voice, across every platform." },
              { label: "Bookings & Deposits", text: "Confirms bookings, sends payment links, follows up automatically. Nothing slips." },
              { label: "Scheduling",          text: "Roster calendars synced automatically. Your talent shows up. Your clients stay informed." },
              { label: "Fully Encrypted",     text: "End-to-end encrypted communications. Your talent's identity and client data — never exposed." },
            ].map((item, i) => (
              <div key={item.label} className="card-hover" style={{ padding: "16px 20px" }}>
                <p style={{ fontSize: 10, color: "#c084fc", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".5rem" }}>{item.label}</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,.78)", lineHeight: 1.6, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
          <p className="reveal reveal-delay-3" style={{ fontSize: 12, color: "rgba(255,255,255,.35)", letterSpacing: ".04em", marginBottom: "5rem", textAlign: "center" }}>
            No commission. Ever.
          </p>

          {/* ── STAT CALLOUTS ── */}
          <div style={{ marginBottom: "5rem" }}>
            <span className="reveal" style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "#C084FC", marginBottom: "1rem", display: "block" }}>
              Why agencies are making the switch
            </span>
            <h2 className="font-serif reveal reveal-delay-1" style={{ fontSize: "clamp(22px,3.5vw,36px)", fontWeight: 400, lineHeight: 1.2, marginBottom: "2.5rem" }}>
              A human agent costs time, money, and sleep.{" "}
              <em className="text-gradient font-serif" style={{ fontStyle: "italic" }}>DupeMe doesn&apos;t.</em>
            </h2>

            <div className="reveal reveal-delay-2 agencies-stats-grid">
              {stats.map((s, i) => (
                <div key={s.val} className={`reveal-delay-${(i % 4) + 1}`} style={{ padding: "1.8rem 1.25rem", background: "rgba(192,132,252,.04)", border: ".5px solid rgba(192,132,252,.15)", borderRadius: 14, textAlign: "center", transition: "transform 0.3s ease" }}>
                  <p className="font-serif" style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 400, color: "#f472b6", lineHeight: 1, marginBottom: ".75rem" }}>{s.val}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.6)", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── FORM ── */}
          <div className="reveal" style={{ borderTop: ".5px solid rgba(192,132,252,.2)", paddingTop: "4rem" }}>
            <h2 className="font-serif" style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 400, marginBottom: ".75rem" }}>
              Let&apos;s build your setup.
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,.6)", marginBottom: "3rem", lineHeight: 1.8, maxWidth: 460 }}>
              Every agency is different. Tell us about yours and we&apos;ll come back within 24 hours.
            </p>

            {submitted ? (
              <div className="reveal animate-fadeUp" style={{ textAlign: "center", padding: "4rem 2rem", border: ".5px solid rgba(192,132,252,.3)", borderRadius: 16, background: "rgba(192,132,252,.05)" }}>
                <p style={{ fontSize: 32, marginBottom: "1rem" }}>🌸</p>
                <h3 className="font-serif" style={{ fontSize: 24, fontWeight: 400, marginBottom: ".75rem" }}>We&apos;ll be in touch.</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,.6)", lineHeight: 1.7 }}>Someone from the DupeMe team will reach out within 24 hours to set up your call.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                    <input type="text"  placeholder="Your name"    required value={form.name}   onChange={e => setForm({ ...form, name: e.target.value })}   style={inputStyle} />
                    <input type="text"  placeholder="Agency name"  required value={form.agency} onChange={e => setForm({ ...form, agency: e.target.value })} style={inputStyle} />
                </div>
                <input type="email" placeholder="Email address" required value={form.email}  onChange={e => setForm({ ...form, email: e.target.value })}  style={inputStyle} />

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", fontSize: 13, padding: "18px", letterSpacing: ".12em", fontWeight: 700, marginTop: "0.5rem" }}
                >
                  GET A CUSTOM QUOTE
                </button>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,.3)", textAlign: "center", letterSpacing: ".05em", marginTop: ".5rem" }}>
                  No contracts &middot; No commission &middot; Fully confidential
                </p>
              </form>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
