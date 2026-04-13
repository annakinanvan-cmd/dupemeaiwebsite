import React from "react";

const PrivacyArchitecture = () => {
  return (
    <section
      className="section-pad"
      style={{
        borderBottom: ".5px solid rgba(192,132,252,.15)",
        position: "relative",
        zIndex: 2,
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <span
        className="reveal"
        style={{
          fontSize: 10,
          letterSpacing: ".22em",
          textTransform: "uppercase",
          color: "#C084FC",
          marginBottom: "1rem",
          display: "block",
        }}
      >
        Safety & Privacy
      </span>

      <h2
        className="font-serif reveal reveal-delay-1"
        style={{
          fontSize: "clamp(20px,2.5vw,28px)",
          fontWeight: 400,
          marginBottom: "1.5rem",
        }}
      >
        What we know.{" "}
        <em className="text-gradient font-serif" style={{ fontStyle: "italic" }}>
          What we never share.
        </em>
      </h2>

      <div
        className="reveal reveal-delay-2"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {[
          { icon: "🔒", label: "End-to-end encrypted", detail: "Every message, in transit and at rest." },
          { icon: "🙈", label: "Client confidentiality", detail: "Memory is encrypted, yours alone, never shared or sold." },
          { icon: "🛡️", label: "Complete anonymity", detail: "Your identity and your clients' are never exposed." },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: ".65rem",
              background: "rgba(192,132,252,.04)",
              border: ".5px solid rgba(192,132,252,.15)",
              borderRadius: 8,
              padding: ".75rem 1rem",
              flex: "1 1 220px",
            }}
          >
            <span style={{ fontSize: 16, lineHeight: 1.4, flexShrink: 0 }}>{item.icon}</span>
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,.85)", marginBottom: 2 }}>{item.label}</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,.5)", lineHeight: 1.5 }}>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyArchitecture;
