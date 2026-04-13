const steps = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>,
    title: "DupeMe learns your voice",
    desc: "One deep-dive onboarding session. Your dupe sounds exactly like you.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>,
    title: "Manages every inbox",
    desc: "WhatsApp, Telegram, Instagram, Signal and more — all handled in your tone.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
    title: "Keeps regulars coming back",
    desc: "Warm follow-ups that turn one-time clients into regulars.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></svg>,
    title: "Redirects fans seamlessly",
    desc: "Instagram DM about content? She sends them straight to your OnlyFans.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    title: "You're always in control",
    desc: "See every conversation. Pause or jump in anytime — one tap.",
    note: "Need to jump in? Pause your dupe instantly from your phone in one tap — you're always in control.",
  },
];

export default function Solution() {
  return (
    <section
      id="how"
      className="section-pad solution-grid"
      style={{
        borderBottom: ".5px solid rgba(192,132,252,.15)",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Left sticky */}
      <div className="reveal solution-sticky" style={{ position: "sticky", top: 100, alignSelf: "start" }}>
        <span
          style={{
            fontSize: 10,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "#C084FC",
            marginBottom: "1.25rem",
            display: "block",
          }}
        >
          The solution
        </span>
        <h2
          className="font-serif"
          style={{ fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 400, lineHeight: 1.25, marginBottom: "1.25rem" }}
        >
          She doesn&apos;t just answer messages.
          <br />
          <em className="text-gradient font-serif" style={{ fontStyle: "italic" }}>She is you.</em>
        </h2>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,.65)", lineHeight: 1.8, maxWidth: 360, marginBottom: "2rem" }}>
          DupeMe AI is trained on your personality, your phrases, your way of making clients feel special.
        </p>
      </div>

      {/* Right steps */}
      <div className="reveal reveal-delay-1">
        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              padding: "2rem 0",
              borderBottom: i < steps.length - 1 ? ".5px solid rgba(192,132,252,.15)" : "none",
              display: "flex",
              gap: "1.75rem",
            }}
          >
            <div style={{ minWidth: 28, paddingTop: 2 }}>
              {step.icon}
            </div>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: ".5rem" }}>{step.title}</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.65)", lineHeight: 1.75 }}>{step.desc}</p>
              {step.note && (
                <div style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", marginTop: ".875rem", padding: ".75rem 1rem", background: "rgba(192,132,252,.05)", border: ".5px solid rgba(192,132,252,.2)", borderRadius: 8 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><rect x="1" y="5" width="22" height="14" rx="7"/><circle cx="16" cy="12" r="3" fill="#c084fc" stroke="none"/></svg>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,.55)", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{step.note}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
