const items = [
  "Never miss a booking",
  "Automate your DMs",
  "Screen time wasters",
  "Clone your unique voice",
  "Engage fans 24/7",
  "Scale your business",
  "Get your life back"
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: ".5px solid rgba(192,132,252,.15)",
        padding: ".85rem 0",
        background: "rgba(192,132,252,.05)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        className="animate-marquee"
        style={{ display: "flex", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                fontSize: 10,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.5)",
                paddingRight: "2.5rem",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            <span style={{ color: "#C084FC", paddingRight: "2.5rem" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

