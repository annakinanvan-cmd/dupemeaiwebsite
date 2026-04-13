"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(to: number, duration = 1100, delay = 500) {
  const [val, setVal] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let rafId: number;
    const timer = setTimeout(() => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
        setVal(Math.round(eased * to));
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
          rafRef.current = rafId;
        }
      };
      rafId = requestAnimationFrame(tick);
      rafRef.current = rafId;
    }, delay);

    return () => {
      clearTimeout(timer);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return val;
}

export default function Hero() {
  const sec = useCountUp(10, 1000, 500);
  const platforms = useCountUp(9, 800, 600);
  const pct = useCountUp(100, 1200, 500);

  const stats = [
    { display: "24/7",       label: "Always on",         color: "#C084FC" },
    { display: `<${sec} sec`, label: "Avg. response time", color: "#C084FC" },
    { display: `${platforms}+`, label: "Platforms connected", color: "#C084FC" },
    { display: `${pct}%`,    label: "Your voice",         color: "#C084FC" },
  ];

  return (
    <section className="hero-grid">
      {/* Left */}
      <div className="hero-left">
        <p
          className="hero-delay-0"
          style={{
            fontSize: 10,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "#C084FC",
            marginBottom: "1.25rem",
          }}
        >
          Your AI dupe
        </p>
        <h1
          className="font-serif hero-delay-1"
          style={{
            fontSize: "clamp(36px,4.2vw,54px)",
            lineHeight: 1.1,
            fontWeight: 400,
            marginBottom: "1.5rem",
          }}
        >
          <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }}>
            AI client management for creators
          </span>
          She&apos;s always on.
          <br />
          <em className="text-gradient font-serif" style={{ fontStyle: "italic" }}>Even when</em>
          <br />
          you&apos;re not.
        </h1>
        <p
          className="hero-delay-2"
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,.72)",
            lineHeight: 1.8,
            maxWidth: 380,
            marginBottom: ".5rem",
          }}
        >
          All the income. None of the small talk.
        </p>
        <p className="hero-delay-2" style={{ fontSize: 13, color: "rgba(255,255,255,.72)", marginBottom: "2rem", maxWidth: 380, lineHeight: 1.7 }}>
          Built by providers, for providers — every identity, every background, every platform. DupeMe AI is 100% non-judgmental, LGBTQIA+ inclusive, and completely anonymous. Your dupe works exactly the way you do, no questions asked.
        </p>
        <div className="hero-btn-group hero-delay-4">
          <button className="btn-primary" onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))}>
            Get in touch
          </button>
          <a href="#demo" className="btn-ghost" style={{ textDecoration: "none" }}>See how it works →</a>
        </div>
        <div className="hero-stats hero-delay-5">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "2rem",
              width: "100%",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-serif stat-val"
                  style={{ fontSize: 24, color: stat.color, fontVariantNumeric: "tabular-nums" }}
                >
                  {stat.display}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,.65)",
                    letterSpacing: ".06em",
                    marginTop: 3,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
