export default function BackgroundGradients() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        backgroundSize: "60px 60px",
      }}
    >
      {/* Large purple top right */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(192,132,252,.08) 0%, transparent 70%)",
          top: -250,
          right: -200,
        }}
      />
      {/* Medium pink bottom left */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(244,114,182,.08) 0%, transparent 70%)",
          bottom: -150,
          left: -150,
        }}
      />
      {/* Small purple mid left */}
      <div
        style={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(192,132,252,.08) 0%, transparent 70%)",
          top: "40%",
          left: -50,
        }}
      />
    </div>
  );
}
