"use client";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/CTAFooter";
import ContactModal from "../../components/ContactModal";
import CustomCursor from "../../components/CustomCursor";
import ScrollRevealInit from "../../components/ScrollRevealInit";
import ScrollProgress from "../../components/ScrollProgress";
import BackToTop from "../../components/BackToTop";
import BackgroundGradients from "../../components/BackgroundGradients";

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <BackgroundGradients />
      <CustomCursor />
      <ScrollRevealInit />
      <Navbar />
      <ContactModal />
      <BackToTop />

      <main style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "clamp(5.5rem,12vw,10rem) clamp(1.25rem,5vw,2rem) clamp(4rem,8vw,8rem)" }}>
          
          {/* Eyebrow & Headline */}
          <span className="reveal" style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "#C084FC", marginBottom: "clamp(1rem, 3vw, 1.5rem)", display: "block" }}>
            ABOUT DUPEME
          </span>

          <h1 className="font-serif reveal reveal-delay-1" style={{ fontSize: "clamp(34px,5.5vw,56px)", fontWeight: 400, lineHeight: 1.1, color: "#fff", marginBottom: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            Built by someone{" "}
            <em className="text-gradient font-serif" style={{ fontStyle: "italic" }}>who lived it.</em>
          </h1>

          {/* Intro Paragraphs */}
          <div className="reveal reveal-delay-2" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "clamp(3.5rem, 8vw, 5rem)" }}>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.75)", lineHeight: 1.8, margin: 0 }}>
              For almost a decade, I was a provider and content creator in the adult industry. I know what it&apos;s like to be replying to DMs at 2am, screening time wasters while getting ready, maintaining warmth with your best clients when you&apos;re completely exhausted, and trying to grow a client list that&apos;s already at capacity.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.75)", lineHeight: 1.8, margin: 0 }}>
              When I stepped back from the industry, I had one thought — if something like this existed when I was active, everything would have been different. The income. The scale. The mental load. So I built it.
            </p>
          </div>

          {/* Section: How DupeMe was made */}
          <div className="reveal">
            <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 400, color: "#fff", marginBottom: "clamp(0.75rem, 2vw, 1.25rem)" }}>
              How DupeMe <em className="text-gradient font-serif" style={{ fontStyle: "italic" }}>was made</em>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "clamp(3.5rem, 8vw, 5rem)" }}>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.75)", lineHeight: 1.8, margin: 0 }}>
                I spent weeks inside the psychology of provider-client communication. Training the AI to speak warmly, flirtatiously, and naturally. Teaching it to detect time wasters in seconds. Building memory so it remembers your VIPs — their names, what they like, when they last booked — and keeps them engaged between visits.
              </p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.75)", lineHeight: 1.8, margin: 0 }}>
                I partnered with a developer to bring the technical infrastructure to life. But the soul of DupeMe? That came from lived experience. No tech bro guessing what providers need. Just someone who was in it, who gets it, who built what she wished existed.
              </p>
            </div>
          </div>

          {/* Section: Safe Space */}
          <div className="reveal">
            <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 400, color: "#fff", marginBottom: "clamp(0.75rem, 2vw, 1.25rem)" }}>
              This is a safe space. <span style={{ color: "#f472b6" }}>Full stop.</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "clamp(3.5rem, 8vw, 5rem)" }}>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.75)", lineHeight: 1.8, margin: 0 }}>
                DupeMe was built for every provider, every creator, every identity. LGBTQIA+ inclusive, completely non-judgmental, and fully anonymous. Your business. Your rules. No questions asked.
              </p>
            </div>
          </div>

          {/* Section: Goal */}
          <div className="reveal">
            <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 400, color: "#fff", marginBottom: "clamp(0.75rem, 2vw, 1.25rem)" }}>
              The goal is <em className="text-gradient font-serif" style={{ fontStyle: "italic" }}>simple.</em>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "clamp(4rem, 10vw, 5.5rem)" }}>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.75)", lineHeight: 1.8, margin: 0 }}>
                Every provider and creator deserves the right tools. This job is mentally and physically demanding enough. The admin, the chasing, the small talk — that&apos;s not why you&apos;re here. Let DupeMe carry that weight so you can focus on what actually matters.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="reveal" style={{ textAlign: "center" }}>
            <button
              className="btn-primary"
              style={{ fontSize: 14, padding: "16px 42px", letterSpacing: ".1em" }}
              onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
            >
              Get in touch
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
