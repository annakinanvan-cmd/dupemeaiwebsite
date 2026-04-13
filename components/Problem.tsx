const problems = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8, marginBottom: ".6rem" }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Volume",
    desc: "Messages flooding in across every platform simultaneously. You can't keep up and you can't afford to miss one.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8, marginBottom: ".6rem" }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: "Time wasters",
    desc: "An hour of back and forth. Screening questions answered. And they ghost. That's an hour you'll never get back.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8, marginBottom: ".6rem" }}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>,
    title: "Emotional labor",
    desc: "Warm, flirty, interested — every single message. All day. Even when you're completely exhausted.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8, marginBottom: ".6rem" }}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>,
    title: "Losing regulars",
    desc: "Clients who keep coming back need warmth between bookings. You know it matters but you don't always have the energy.",
  },
];

export default function Problem() {
  return (
    <section
      id="how"
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
        The problem
      </span>

      <h2
        className="font-serif reveal reveal-delay-1"
        style={{
          fontSize: "clamp(22px, 6vw, 36px)",
          fontWeight: 400,
          lineHeight: 1.1,
          maxWidth: 600,
          marginBottom: ".6rem",
        }}
      >
        You&apos;re losing money{" "}
        <em className="text-gradient font-serif" style={{ fontStyle: "italic" }}>
          every time you&apos;re offline.
        </em>
      </h2>

      <p
        className="reveal reveal-delay-2"
        style={{
          fontSize: 13,
          color: "rgba(255,255,255,.45)",
          fontStyle: "italic",
          marginBottom: "2rem",
          lineHeight: 1.6,
        }}
      >
        Whether you&apos;re overwhelmed or ready to scale — DupeMe was built for you.
      </p>

      <div
        className="reveal reveal-delay-3"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "8px",
        }}
      >
        {problems.map((p, i) => (
          <div
            key={i}
            className="card-hover"
            style={{ padding: "12px 14px" }}
          >
            {p.icon}
            <h3 style={{ fontSize: 13, fontWeight: 500, marginBottom: ".3rem" }}>
              {p.title}
            </h3>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,.72)", lineHeight: 1.6 }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
