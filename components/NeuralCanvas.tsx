"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  op: number;
  ps: number;
  po: number;
}

interface Particle {
  f: Node;
  t: Node;
  p: number;
  s: number;
}

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0;
    let nodes: Node[] = [];
    let particles: Particle[] = [];
    let frame = 0;
    let rafId: number;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const init = () => {
      nodes = [];
      for (let i = 0; i < 65; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.8 + 0.5,
          op: Math.random() * 0.4 + 0.15,
          ps: Math.random() * 0.018 + 0.004,
          po: Math.random() * Math.PI * 2,
        });
      }
      particles = [];
      for (let i = 0; i < 22; i++) spawnP();
    };

    const spawnP = () => {
      const f = nodes[Math.floor(Math.random() * nodes.length)];
      const t = nodes[Math.floor(Math.random() * nodes.length)];
      if (!f || !t || f === t) return;
      particles.push({ f, t, p: Math.random(), s: Math.random() * 0.004 + 0.002 });
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      frame++;

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        const pulse = Math.sin(frame * n.ps + n.po) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,160,192,${n.op * (0.4 + pulse * 0.6)})`;
        ctx.fill();
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(232,160,192,${(1 - d / 130) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p, i) => {
        p.p += p.s;
        if (p.p >= 1) {
          particles.splice(i, 1);
          spawnP();
          return;
        }
        const x = p.f.x + (p.t.x - p.f.x) * p.p;
        const y = p.f.y + (p.t.y - p.f.y) * p.p;
        const fade = Math.min(p.p * 8, 1) * Math.min((1 - p.p) * 8, 1);
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244,200,220,${fade * 0.9})`;
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    window.addEventListener("resize", () => {
      resize();
      init();
    });

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
