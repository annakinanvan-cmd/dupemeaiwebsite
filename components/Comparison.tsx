const competitors = [
  {
    label: "Full tool stack",
    price: "$300–500+",
    period: "/mo",
    pros: ["Some platforms covered"],
    cons: ["Not in your voice", "Still requires your time", "Screening is still on you"],
    featured: false,
  },
  {
    label: "Human phone booker",
    price: "$1,500–3,000+",
    period: "/mo",
    pros: ["Books and screens"],
    cons: ["Sleeps, gossips, takes commission", "Knows your entire client list", "Nothing else"],
    featured: false,
  },
];

const dupeFeatures = [
  "Every platform, one place",
  "100% your voice",
  "Screens, books, retains, posts",
  "Zero commission. Ever.",
];

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="section-pad"
      style={{
        borderBottom: ".5px solid rgba(192,132,252,.15)",
        position: "relative",
        zIndex: 2,
        background: "radial-gradient(ellipse at center, #0a0510 0%, transparent 80%)",
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
        Why DupeMe AI
      </span>
      <h2
        className="font-serif reveal reveal-delay-1"
        style={{ fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 400, marginBottom: ".75rem" }}
      >
        Everyone else does one thing.{" "}
        <em className="text-gradient font-serif" style={{ fontStyle: "italic" }}>DupeMe does everything.</em>
      </h2>
      <p
        className="reveal reveal-delay-2"
        style={{ fontSize: 14, color: "rgba(255,255,255,.65)", marginBottom: "2.5rem", maxWidth: 480, lineHeight: 1.8 }}
      >
        You&apos;re already spending thousands on tools or staff that still leave gaps.
        DupeMe AI replaces all of it — in your voice, across every platform, for a
        fraction of the cost.
      </p>

      <div className="comparison-grid reveal reveal-delay-3">
        {/* Competitors */}
        {competitors.map((c) => (
          <div key={c.label} className="card-hover" style={{ padding: "2rem" }}>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,.85)", marginBottom: ".5rem", letterSpacing: ".04em" }}>{c.label}</p>
            <p className="font-serif" style={{ fontSize: 28, color: "rgba(255,255,255,.85)", marginBottom: 2 }}>{c.price}</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,.78)", marginBottom: "1.5rem" }}>{c.period}</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {c.pros.map((item) => (
                <li key={item} style={{ fontSize: 12, color: "rgba(255,255,255,.8)", display: "flex", gap: 8 }}>
                  <span style={{ color: "rgba(192,132,252,.7)" }}>✓</span>{item}
                </li>
              ))}
              {c.cons.map((item) => (
                <li key={item} style={{ fontSize: 12, color: "rgba(255,255,255,.78)", display: "flex", gap: 8 }}>
                  <span style={{ color: "rgba(255,255,255,.65)" }}>✗</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* DupeMe featured */}
        <div className="feat-card" style={{ padding: "2rem", boxShadow: "0 0 24px rgba(192,132,252, 0.4)", border: "1px solid rgba(192,132,252, 0.6)", borderRadius: 4 }}>
          <span
            style={{
              fontSize: 9,
              letterSpacing: ".12em",
              color: "#C084FC",
              border: ".5px solid rgba(192,132,252,.3)",
              padding: "3px 10px",
              borderRadius: 100,
              display: "inline-block",
              marginBottom: "1rem",
            }}
          >
            DupeMe AI
          </span>
          <p className="font-serif" style={{ fontSize: 24, color: "#C084FC", marginBottom: "1.5rem" }}>
            A single, one-time setup fee
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {dupeFeatures.map((item) => (
              <li key={item} style={{ fontSize: 12, color: "rgba(255,255,255,.78)", display: "flex", gap: 8 }}>
                <span style={{ color: "#C084FC" }}>✓</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="bottom-bar reveal reveal-delay-4"
        style={{ marginTop: 1.5 }}
      >
        <p className="font-serif" style={{ fontSize: 20, color: "#fff", lineHeight: 1.4, maxWidth: 500 }}>
          The only thing in the room doing all of it — in your voice, 24/7, <span style={{ color: "#C084FC" }}>for a fraction of the cost.</span>
        </p>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,.65)", textAlign: "right", lineHeight: 1.6 }}>
          Save up to <span style={{ color: "#C084FC" }}>$33,600/yr</span> from a booker<br />
          Up to <span style={{ color: "#C084FC" }}>$4,600/yr</span> from a tool stack
        </div>
      </div>
    </section>
  );
}

