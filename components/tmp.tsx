"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

/* ── SVG icon set ── */
const Icon = {
  WA: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M.057 24l1.687-6.163A11.853 11.853 0 0 1 .143 12C.146 5.373 5.52 0 12.148 0a11.817 11.817 0 0 1 8.386 3.473A11.817 11.817 0 0 1 24 11.857c-.003 6.628-5.377 12-12.005 12a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807a9.9 9.9 0 0 0 5.392 1.592c5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" fill="#25d366"/>
    </svg>
  ),
  IG: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="url(#ig-grad)"/>
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="24" x2="24" y2="0">
          <stop offset="0%" stopColor="#f09433"/>
          <stop offset="25%" stopColor="#e6683c"/>
          <stop offset="50%" stopColor="#dc2743"/>
          <stop offset="75%" stopColor="#cc2366"/>
          <stop offset="100%" stopColor="#bc1888"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  Signal: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.36 18.72a7.195 7.195 0 0 1-3.254-.779l-3.617.949.97-3.537A7.188 7.188 0 0 1 4.8 12c0-3.975 3.225-7.2 7.2-7.2s7.2 3.225 7.2 7.2-3.225 7.2-7.2 7.2h-.64z" fill="#3a76f0"/>
    </svg>
  ),
  Telegram: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.408l-2.952-.924c-.642-.204-.657-.642.136-.953l11.527-4.445c.537-.194 1.006.131.591 2.162z" fill="#0088cc"/>
    </svg>
  ),
  VideoCall: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" fill="#8696a0"/>
    </svg>
  ),
  Phone: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" fill="#8696a0"/>
    </svg>
  ),
  More: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="5" r="2" fill="#8696a0"/>
      <circle cx="12" cy="12" r="2" fill="#8696a0"/>
      <circle cx="12" cy="19" r="2" fill="#8696a0"/>
    </svg>
  ),
  Search: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#9aa0a6"/>
    </svg>
  ),
  Ticks: () => (
    <svg width="18" height="12" viewBox="0 0 16 11" fill="none">
      <path d="M11.071.653a.75.75 0 0 1 .025 1.06l-6.193 6.543a.75.75 0 0 1-1.085 0L1.904 5.94a.75.75 0 1 1 1.085-1.038l1.37 1.428 5.652-5.969a.75.75 0 0 1 1.06-.025zM14.571.653a.75.75 0 0 1 .025 1.06l-6.193 6.543a.75.75 0 0 1-.11.093l.11-.12 5.108-5.456a.75.75 0 0 1 1.06.025z" fill="#53bdeb"/>
    </svg>
  ),
};

export default function PhoneMockup() {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    const sl = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
    const ov = document.getElementById("dm-ov")!;

    /* ── WA bubble helper ── */
    function wa(c: HTMLElement, side: "in" | "out", text: string, time: string, read?: boolean) {
      return new Promise<void>((res) => {
        const row = document.createElement("div");
        row.className = `dm-wa-row ${side}`;
        const tick = side === "out"
          ? `<div class="dm-wa-ticks">${read ? '<svg width="18" height="12" viewBox="0 0 16 11"><path d="M11.071.653a.75.75 0 0 1 .025 1.06l-6.193 6.543a.75.75 0 0 1-1.085 0L1.904 5.94a.75.75 0 1 1 1.085-1.038l1.37 1.428 5.652-5.969a.75.75 0 0 1 1.06-.025zM14.571.653a.75.75 0 0 1 .025 1.06l-6.193 6.543a.75.75 0 0 1-.11.093l.11-.12 5.108-5.456a.75.75 0 0 1 1.06.025z" fill="#53bdeb"/></svg>' : '<svg width="18" height="12" viewBox="0 0 16 11"><path d="M11.071.653a.75.75 0 0 1 .025 1.06l-6.193 6.543a.75.75 0 0 1-1.085 0L1.904 5.94a.75.75 0 1 1 1.085-1.038l1.37 1.428 5.652-5.969a.75.75 0 0 1 1.06-.025z" fill="#8696a0"/></svg>'}</div>` : "";
        row.innerHTML = `<div class="dm-wa-bub ${side}"><div class="dm-wa-txt">${text}</div><div class="dm-wa-foot"><span class="dm-wa-time">${time}</span>${tick}</div></div>`;
        c.appendChild(row); c.scrollTop = c.scrollHeight;
        requestAnimationFrame(() => requestAnimationFrame(() => {
          (row.querySelector(".dm-wa-bub") as HTMLElement).classList.add("pop");
          setTimeout(res, 250);
        }));
      });
    }

    function waTyping(c: HTMLElement) {
      const row = document.createElement("div");
      row.className = "dm-wa-row in";
      row.innerHTML = `<div class="dm-wa-bub in dm-typing-bub"><span></span><span></span><span></span></div>`;
      c.appendChild(row); c.scrollTop = c.scrollHeight;
      requestAnimationFrame(() => requestAnimationFrame(() =>
        (row.querySelector(".dm-wa-bub") as HTMLElement).classList.add("pop")
      ));
      return row;
    }

    /* ── IG bubble ── */
    function ig(c: HTMLElement, side: "in" | "out", html: string) {
      return new Promise<void>((res) => {
        const row = document.createElement("div");
        row.className = `dm-ig-row ${side}`;
        if (side === "in") {
          row.innerHTML = `<img class="dm-ig-xav" src="/alex-avatar.png" alt="Sophie"/><div class="dm-ig-bub in">${html}</div>`;
        } else {
          row.innerHTML = `<div class="dm-ig-bub out">${html}</div>`;
        }
        c.appendChild(row); c.scrollTop = c.scrollHeight;
        requestAnimationFrame(() => requestAnimationFrame(() => {
          (row.querySelector(".dm-ig-bub") as HTMLElement).classList.add("pop");
          setTimeout(res, 250);
        }));
      });
    }

    /* ── Signal bubble ── */
    function sg(c: HTMLElement, side: "in" | "out", html: string, time: string) {
      return new Promise<void>((res) => {
        const wrap = document.createElement("div");
        wrap.innerHTML = `<div class="dm-sg-row ${side}"><div class="dm-sg-bub ${side}">${html}</div></div><div class="dm-sg-row ${side}"><div class="dm-sg-time">${time}</div></div>`;
        [...wrap.children].forEach(ch => c.appendChild(ch));
        c.scrollTop = c.scrollHeight;
        requestAnimationFrame(() => requestAnimationFrame(() => {
          c.querySelectorAll(".dm-sg-bub:not(.pop)").forEach(b => b.classList.add("pop"));
          setTimeout(res, 300);
        }));
      });
    }

    /* ── Transitions ── */
    async function go(from: string, to: string, fn: () => void) {
      ov.classList.add("on"); await sl(500);
      (document.getElementById(from) as HTMLElement).style.display = "none";
      const nx = document.getElementById(to)!; nx.style.display = "flex";
      await sl(50); ov.classList.remove("on"); await sl(600); fn();
    }
    async function goClose(from: string) {
      ov.classList.add("on"); await sl(500);
      (document.getElementById(from) as HTMLElement).style.display = "none";
      document.getElementById("dm-closing")!.style.display = "flex";
      await sl(50); ov.classList.remove("on"); await sl(600); runClose();
    }

    /* ── Scenes ── */
    async function s1() {
      const c = document.getElementById("dm-s1m")!; await sl(400);
      await wa(c, "in", "Hey, I'd like to book an incall for Saturday. Is 8pm available?", "2:14");
      await sl(1000); const t1 = waTyping(c); await sl(2000); t1.remove();
      await wa(c, "out", "Hey babe 🌹 So glad you reached out! 8pm is taken but I have 7pm free — does that work? My rate is $450/hr 💋", "2:16", true);
      await sl(1000);
      await wa(c, "in", "7pm works perfectly", "2:17");
      await sl(900); const t2 = waTyping(c); await sl(1800); t2.remove();
      await wa(c, "out", "Amazing 😍 To lock in your spot I need a $150 deposit via e-transfer:\n\n💌 sophia.noir.mtl@gmail.com\n\nOnce that's sent you're confirmed babe 🔥", "2:18", true);
      await sl(1400);
      await wa(c, "in", "Sending now!", "2:20");
      await sl(1200);
      
      const t3 = waTyping(c); await sl(1700); t3.remove();
      await wa(c, "out", "Deposit received — thank you! 🎉 You're confirmed for Saturday at 7pm. Can't wait to see you 💋🖤", "2:22", true);
      await sl(2500); go("dm-sc1", "dm-sc2", s2);
    }

    async function s2() {
      const c = document.getElementById("dm-s2m")!; await sl(400);
      await wa(c, "in", "Hi! I'm interested in a video call session — do you do those?", "2:31");
      await sl(900); const t1 = waTyping(c); await sl(1700); t1.remove();
      await wa(c, "out", "Hey! Yes I do 📱✨ Video sessions are $250 for 30 mins. I have Saturday 4pm free — does that work?", "2:33", true);
      await sl(1000);
      await wa(c, "in", "Saturday 4pm is perfect 👌", "2:34");
      await sl(800); const t2 = waTyping(c); await sl(1600); t2.remove();
      await wa(c, "out", "Love it! 😍 Send a $100 deposit to sophia.noir.mtl@gmail.com to lock it in. Full balance due before we start 💋", "2:35", true);
      await sl(1100);
      await wa(c, "in", "Done, just sent! 🙌", "2:37");
      await sl(800); const t3 = waTyping(c); await sl(1500); t3.remove();
      await wa(c, "out", "Got it ✅ You're booked for Saturday 4pm. I'll send the link the morning of — so excited! 🔥", "2:38", true);
      await sl(2400); go("dm-sc2", "dm-sc3", s3);
    }

    async function s3() {
      const c = document.getElementById("dm-s3m")!; await sl(400);
      await wa(c, "in", "hey u available tonight? incall", "3:02");
      await sl(900); const t1 = waTyping(c); await sl(1700); t1.remove();
      await wa(c, "out", "Hi! I do have some availability 🌹 For all incalls I need a quick screening first — full name, age, and a LinkedIn or work email. Keeps things safe for both of us 💛", "3:03", true);
      await sl(1200);
      await wa(c, "in", "why do u need all that lol just tell me the address", "3:04");
      await sl(900); const t2 = waTyping(c); await sl(1700); t2.remove();
      await wa(c, "out", "I totally get it! But screening is non-negotiable for any incall — it's standard practice and protects us both. Happy to move forward once I have your info 🌸", "3:05", true);
      await sl(1100);
      await wa(c, "in", "forget it too much hassle", "3:06");
      await sl(800); const t3 = waTyping(c); await sl(1500); t3.remove();
      await wa(c, "out", "No worries at all. If you change your mind, you know where to find me 🌹 Take care!", "3:07", true);
      await sl(2400); go("dm-sc3", "dm-sc4", s4);
    }

    async function s4() {
      const c = document.getElementById("dm-s4m")!; await sl(400);
      // Story reply card
      const storyRow = document.createElement("div");
      storyRow.className = "dm-ig-row in dm-story-row";
      storyRow.innerHTML = `<img class="dm-ig-xav" src="/alex-avatar.png" alt="S"/><div class="dm-story-card"><img class="dm-story-img" src="/sophia-story.png" alt="story"/><div class="dm-story-lbl">Replied to your story · 🔥🔥🔥</div></div>`;
      c.appendChild(storyRow); c.scrollTop = c.scrollHeight;
      requestAnimationFrame(() => requestAnimationFrame(() => storyRow.classList.add("pop")));
      await sl(1200);
      await ig(c, "out", "Thanks babe 😘💕"); await sl(1000);
      await ig(c, "in", "honestly I just wanna see so much more of you 😍"); await sl(1000);
      await ig(c, "out", "Aw you're so sweet 🥰 I post everything exclusively on my OnlyFans — you'll love it in there 🔥<br><br><span class='dm-ig-link'>onlyfans.com/sophianoir</span> 💋"); await sl(1000);
      await ig(c, "in", "subbing right now 👀🙌"); await sl(900);
      await ig(c, "out", "Yesss welcome babe 🖤🔥 You won't be disappointed I promise 💋");
      await sl(2400); go("dm-sc4", "dm-sc6", s6);
    }

    async function s6() {
      const c = document.getElementById("dm-s6m")!; await sl(700);
      await sg(c, "in", "<strong>Good morning ☀️</strong><br><br>Here's your overnight summary:", "11:03 AM");
      await sl(1200);
      await sg(c, "in", `<div class="dm-sg-item">📅 2 confirmed incall bookings today</div><div class="dm-sg-item">📱 1 video session — Sat 4pm</div><div class="dm-sg-item">💰 $400 in deposits collected overnight</div>`, "11:03 AM");
      await sl(1200);
      await sg(c, "in", `<div class="dm-sg-item">🚫 1 time-waster blocked — no ID, closed</div><div class="dm-sg-item">🔗 7 followers redirected to OnlyFans</div>`, "11:03 AM");
      await sl(1100);
      await sg(c, "in", "You didn't lift a finger. 🖤<br><br>Ready when you are.", "11:03 AM");
      await sl(1500);
      await sg(c, "out", "this is actually insane 😭🙏", "11:04 AM");
      await sl(3500); goClose("dm-sc6");
    }

    function runClose() {
      setTimeout(() => document.getElementById("dm-clEy")!.classList.add("v"), 200);
      [
        { c: "dm-stc1", n: "dm-stn1", t: 47, p: "", d: 400 },
        { c: "dm-stc2", n: "dm-stn2", t: 3,  p: "", d: 600 },
        { c: "dm-stc3", n: "dm-stn3", t: 400, p: "$", d: 800 },
        { c: "dm-stc4", n: "dm-stn4", t: 7,  p: "", d: 1000 },
      ].forEach(({ c, n, t, p, d }) => {
        setTimeout(() => {
          document.getElementById(c)!.classList.add("v");
          const el = document.getElementById(n)!; let v = 0;
          const iv = setInterval(() => { v = Math.min(v + Math.ceil(t / 28), t); el.textContent = p + v; if (v >= t) clearInterval(iv); }, 38);
        }, d);
      });
      setTimeout(() => document.getElementById("dm-clTg")!.classList.add("v"), 1800);
      setTimeout(() => document.getElementById("dm-clSb")!.classList.add("v"), 2100);
      setTimeout(() => document.getElementById("dm-clLg")!.classList.add("v"), 2400);
    }

    setTimeout(s1, 700);
  }, []);

  /* ── Reusable sub-components ── */

  // iOS status bar — always light on WA, dark on others
  const IOSBar = ({ time, light }: { time: string; light?: boolean }) => (
    <div className={`dm-ios-bar ${light ? "light" : "dark"}`}>
      <span className="dm-ios-time">{time}</span>
      <div className="dm-ios-right">
        <svg width="17" height="12" viewBox="0 0 17 12">
          <rect x="0" y="7" width="3" height="5" rx="0.8" fill="currentColor" opacity="0.4"/>
          <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.8" fill="currentColor" opacity="0.65"/>
          <rect x="9" y="2" width="3" height="10" rx="0.8" fill="currentColor" opacity="0.85"/>
          <rect x="13.5" y="0" width="3" height="12" rx="0.8" fill="currentColor"/>
        </svg>
        <svg width="16" height="11" viewBox="0 0 16 11">
          <path d="M8 2A10.6 10.6 0 0 0 .6 5.2l1.4 1.4A8.5 8.5 0 0 1 8 4a8.5 8.5 0 0 1 6 2.6l1.4-1.4A10.6 10.6 0 0 0 8 2zm0 3.5a6 6 0 0 0-4.2 1.7l1.4 1.4A4 4 0 0 1 8 7.5a4 4 0 0 1 2.8 1.1l1.4-1.4A6 6 0 0 0 8 5.5zm0 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="currentColor"/>
        </svg>
        <div className={`dm-batt-wrap ${light ? "" : "dark"}`}>
          <div className="dm-batt-fill"/>
          <div className="dm-batt-nub"/>
        </div>
      </div>
    </div>
  );

  const DynIsland = () => (
    <div className="dm-dyn-island">
      <div className="dm-di-pill"/>
      <div className="dm-di-dot"/>
    </div>
  );

  const PipRow = ({ active }: { active: number }) => (
    <div className="dm-pips">
      {[0,1,2,3,4,5].map(i => (
        <div key={i} className={`dm-pip${i < active ? " done" : i === active ? " active" : ""}`}/>
      ))}
    </div>
  );

  const WaInput = ({ light }: { light?: boolean }) => (
    <div className={`dm-wa-input ${light ? "light" : ""}`}>
      <div className="dm-wa-inp-em">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
          <path d="M8.5 14.5s1 1.5 3.5 1.5 3.5-1.5 3.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <circle cx="9" cy="10.5" r="1" fill="currentColor" opacity="0.5"/>
          <circle cx="15" cy="10.5" r="1" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>
      <div className={`dm-wa-inp-box ${light ? "light" : ""}`}>Message</div>
      <div className="dm-wa-inp-att">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        </svg>
      </div>
      <div className="dm-wa-mic">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 1a4 4 0 0 0-4 4v7a4 4 0 0 0 8 0V5a4 4 0 0 0-4-4z" fill="#fff"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );

  const WaHeader = ({ name, status, avBg, avText, avPhoto }: {
    name: string; status: string; avBg?: string; avText?: string; avPhoto?: string;
  }) => (
    <div className="dm-wa-hd">
      <button className="dm-wa-back">
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
          <path d="M9 1L1 9l8 8" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ color: "#007AFF", fontSize: 16, marginLeft: 2 }}>200</span>
      </button>
      <div className="dm-wa-hd-av" style={avPhoto ? {} : { background: avBg }}>
        {avPhoto ? <Image src={avPhoto} alt={name} fill style={{ objectFit: "cover" }}/> : <span>{avText}</span>}
        <div className="dm-wa-online"/>
      </div>
      <div className="dm-wa-hd-info">
        <div className="dm-wa-hd-name">{name}</div>
        <div className="dm-wa-hd-stat">{status}</div>
      </div>
      <div className="dm-wa-hd-acts">
        <Icon.VideoCall/>
        <Icon.Phone/>
      </div>
    </div>
  );

  const Phone = ({ children, toastId }: { children: React.ReactNode; toastId?: string }) => (
    <div className="dm-phone">
      <div className="dm-shell">
        <div className="dm-vol-1"/><div className="dm-vol-2"/><div className="dm-pwr"/>
        <div className="dm-scrn">
          <DynIsland/>
           => (
    <div className="dm-scene" id={id} style={hidden ? { display: "none" } : {}}>
      <div className="dm-scene-glow"/>
      <div className="dm-inner">
        <div className="dm-text-col">
          <div className="dm-brand-row">
            <div className="dm-brand-logo">
              <div className="dm-brand-mark">🧠</div>
              <span>Dupe<em>Me</em> <span className="dm-brand-ai">AI</span></span>
            </div>
            <PipRow active={pip}/>
          </div>
          <div className="dm-plat-pill" style={{ borderColor: `${platformColor}55` }}>
            <div className="dm-plat-icon"><PlatIcon/></div>
            <div className="dm-plat-dot" style={{ background: platformColor, boxShadow: `0 0 8px ${platformColor}` }}/>
            <span>{platform}</span>
          </div>
          <h2 className="dm-scene-h2">{heading}<br /><em>{headingEm}</em></h2>
          <p className="dm-scene-p">{sub}</p>
        </div>
        {children}
      </div>
    </div>
  );

  return (
    <section id="watch" style={{ background: "#080412", position: "relative", zIndex: 2 }}>
      <div id="dm-ov" className="dm-ov"/>

      {/* ── Scene 1: WhatsApp Booking ── */}
      <SceneWrap id="dm-sc1" pip={0} platform="WhatsApp" PlatIcon={Icon.WA} platformColor="#25d366"
        heading="New client texted." headingEm="Booked & deposited."
        sub="2am. You're asleep. Sophia handles the whole booking and collects the deposit — automatically.">
        <Phone >
          <div className="dm-screen-wa">
            <IOSBar time="2:14" light/>
            <WaHeader name="Luca M." status="online" avBg="#1565c0" avText="LM"/>
            <div className="dm-wa-bg">
              <div className="dm-wa-msgs" id="dm-s1m">
                <div className="dm-wa-enc">🔒 Messages and calls are end-to-end encrypted. Only people in this chat can read or listen to them.</div>
                <div className="dm-wa-datesep">Today</div>
              </div>
            </div>
            <WaInput light/>
          </div>
        </Phone>
      </SceneWrap>

      {/* ── Scene 2: Video Session ── */}
      <SceneWrap id="dm-sc2" pip={1} platform="WhatsApp" PlatIcon={Icon.WA} platformColor="#25d366"
        heading="Video session." headingEm="$250. Booked."
        sub="Different client, different request. Same flawless response. Saturday 4pm, locked in." hidden>
        <Phone>
          <div className="dm-screen-wa">
            <IOSBar time="2:31" light/>
            <WaHeader name="Daniel K." status="online" avBg="#2e7d32" avText="DK"/>
            <div className="dm-wa-bg">
              <div className="dm-wa-msgs" id="dm-s2m">
                <div className="dm-wa-datesep">Today</div>
              </div>
            </div>
            <WaInput light/>
          </div>
        </Phone>
      </SceneWrap>

      {/* ── Scene 3: Time Waster ── */}
      <SceneWrap id="dm-sc3" pip={2} platform="WhatsApp — Screened" PlatIcon={Icon.WA} platformColor="#ff4444"
        heading="Time-waster." headingEm="Cut off. Clean."
        sub="Won't send ID. Sophia holds the line twice, then closes it. You never knew he existed." hidden>
        <Phone>
          <div className="dm-screen-wa">
            <IOSBar time="3:02" light/>
            <WaHeader name="Unknown" status="+1 (514) 000-****" avBg="#555" avText="??"/>
            <div className="dm-wa-bg">
              <div className="dm-wa-msgs" id="dm-s3m">
                <div className="dm-wa-datesep">Today</div>
              </div>
            </div>
            <WaInput light/>
          </div>
        </Phone>
      </SceneWrap>

      {/* ── Scene 4: Instagram ── */}
      <SceneWrap id="dm-sc4" pip={3} platform="Instagram DMs" PlatIcon={Icon.IG} platformColor="#fd1d1d"
        heading="Story reply." headingEm="OnlyFans subscriber."
        sub="He liked her story. Sophia warmed him up and sent him straight to OnlyFans." hidden>
        <Phone>
          <div className="dm-screen-ig">
            <IOSBar time="3:18"/>
            <div className="dm-ig-hd">
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 12l7-7 1.4 1.4-5.6 5.6H21v2H5.8l5.6 5.6L10 21l-7-7z" fill="#fff"/></svg>
              <div className="dm-ig-av-wrap">
                <div className="dm-ig-av-ring">
                  <Image src="/alex-avatar.png" alt="sophianoir" fill style={{ objectFit: "cover", borderRadius: "50%" }}/>
                </div>
              </div>
              <div>
                <div className="dm-ig-name">sophianoir</div>
                <div className="dm-ig-stat">Active now</div>
              </div>
              <div className="dm-ig-hd-acts">
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" fill="#fff"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M6.62 10.79a15 15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" fill="#fff"/></svg>
              </div>
            </div>
            <div className="dm-ig-msgs" id="dm-s4m"/>
            <div className="dm-ig-footer">
              <div className="dm-ig-fav">
                <Image src="/alex-avatar.png" alt="me" fill style={{ objectFit: "cover", borderRadius: "50%" }}/>
              </div>
              <div className="dm-ig-finput">Message...</div>
              <div className="dm-ig-ficons">
                <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="1.5" fill="none"/><path d="M12 6v6l4 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M23 7l-7 5 7 5V7z" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinejoin="round"/><rect x="1" y="5" width="15" height="14" rx="2" stroke="#fff" strokeWidth="1.5" fill="none"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#fff" strokeWidth="1.5" fill="none"/></svg>
              </div>
            </div>
          </div>
        </Phone>
      </SceneWrap>

      {/* ── Scene 5: Gmail ── */}
      <SceneWrap id="dm-sc5" pip={4} platform="Gmail" PlatIcon={Icon.Gmail} platformColor="#4285f4"
        heading="Email inquiry." headingEm="Screened. Confirmed."
        sub="Professional Sunday booking. Sophia screens, takes the deposit, confirms — all at 3am." hidden>
        <Phone>
          <div className="dm-screen-gm">
            <IOSBar time="3:47"/>
            <div className="dm-gm-bar">
              <div className="dm-gm-logo"><span style={{color:"#4285f4"}}>G</span><span style={{color:"#34a853"}}>m</span><span style={{color:"#fbbc05"}}>a</span><span style={{color:"#ea4335"}}>il</span></div>
              <div className="dm-gm-srch"><Icon.Search/><span>Search mail</span></div>
              <div className="dm-gm-uav">
                <Image src="/alex-avatar.png" alt="me" fill style={{ objectFit: "cover", borderRadius: "50%" }}/>
              </div>
            </div>
            <div className="dm-gm-thread">
              <svg width="20" height="20" viewBox="0 0 24 24" style={{flexShrink:0}}><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="#9aa0a6"/></svg>
              <span className="dm-gm-thread-title">Sunday booking enquiry</span>
              <svg width="20" height="20" viewBox="0 0 24 24" style={{flexShrink:0}}><circle cx="12" cy="5" r="2" fill="#9aa0a6"/><circle cx="12" cy="12" r="2" fill="#9aa0a6"/><circle cx="12" cy="19" r="2" fill="#9aa0a6"/></svg>
            </div>
            <div className="dm-gm-msgs" id="dm-s5m"/>
          </div>
        </Phone>
      </SceneWrap>

      {/* ── Scene 6: Signal ── */}
      <SceneWrap id="dm-sc6" pip={5} platform="Signal — Morning Briefing" PlatIcon={Icon.Signal} platformColor="#3a76f0"
        heading="11am. You wake up." headingEm="It's already done."
        sub="DupeMe AI reports back. Every booking, every deposit, every redirect — while you slept." hidden>
        <Phone>
          <div className="dm-screen-sg">
            <IOSBar time="11:03"/>
            <div className="dm-sg-hd">
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 12l7-7 1.4 1.4-5.6 5.6H21v2H5.8l5.6 5.6L10 21l-7-7z" fill="#3a76f0"/></svg>
              <div className="dm-sg-av">D</div>
              <div>
                <div className="dm-sg-name">DupeMe AI</div>
                <div className="dm-sg-stat">Your assistant</div>
              </div>
              <div className="dm-sg-acts">
                <svg width="22" height="22" viewBox="0 0 24 24"><path d="M6.62 10.79a15 15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2z" fill="#3a76f0"/></svg>
                <svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="5" r="2" fill="#3a76f0"/><circle cx="12" cy="12" r="2" fill="#3a76f0"/><circle cx="12" cy="19" r="2" fill="#3a76f0"/></svg>
              </div>
            </div>
            <div className="dm-sg-msgs" id="dm-s6m"/>
            <div className="dm-sg-input">
              <div className="dm-sg-inp">Message</div>
              <div className="dm-sg-send">
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="#fff"/></svg>
              </div>
            </div>
          </div>
        </Phone>
      </SceneWrap>

      {/* ── Closing ── */}
      <div id="dm-closing" className="dm-closing" style={{ display: "none" }}>
        <div className="dm-closing-glow"/>
        <p className="dm-cl-ey" id="dm-clEy">While you slept</p>
        <div className="dm-stats-grid">
          <div className="dm-stat" id="dm-stc1"><div className="dm-stat-n" id="dm-stn1">0</div><div className="dm-stat-l">messages<br/>answered</div></div>
          <div className="dm-stat" id="dm-stc2"><div className="dm-stat-n" id="dm-stn2">0</div><div className="dm-stat-l">bookings<br/>confirmed</div></div>
          <div className="dm-stat" id="dm-stc3"><div className="dm-stat-n" id="dm-stn3">$0</div><div className="dm-stat-l">deposits<br/>collected</div></div>
          <div className="dm-stat" id="dm-stc4"><div className="dm-stat-n" id="dm-stn4">0</div><div className="dm-stat-l">time-wasters<br/>filtered</div></div>
        </div>
        <h2 className="dm-cl-tag" id="dm-clTg">All the income.<br/><em>None of the exhaustion.</em></h2>
        <p className="dm-cl-sub" id="dm-clSb">DupeMe AI is your dupe — always on, always in your voice, always working. Even when you&apos;re not.</p>
        <div className="dm-cl-logo" id="dm-clLg">
          <div className="dm-cl-mark">🧠</div>
          <span>Dupe<em>Me</em> AI</span>
        </div>
      </div>
    </section>
  );
}

