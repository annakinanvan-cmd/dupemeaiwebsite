"use client";

import { useEffect, useState } from "react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("Email");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openContactModal", handleOpen);
    return () => window.removeEventListener("openContactModal", handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const btn = document.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (btn) btn.innerText = "Sending...";
    try {
      await fetch("https://formcarry.com/s/0zENX_GD5mR", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || 'Not provided',
          preferredContact: method
        }),
      });
      setIsSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
        setTimeout(() => { setIsSuccess(false); setName(""); setEmail(""); setPhone(""); }, 300);
      }, 3500);
    } catch(err) {
      console.error(err);
      if (btn) btn.innerText = "Let's talk 🤍";
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 12px",
    background: "rgba(192,132,252,0.05)",
    border: "1px solid rgba(192,132,252,0.15)",
    borderRadius: 4,
    color: "#fff",
    fontSize: 13,
    outline: "none",
    boxSizing: "border-box" as const,
    fontFamily: "inherit",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(10,5,10,.85)",
        backdropFilter: "blur(8px)",
        animation: "fadeInModal .3s ease-out",
        padding: "1rem",
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        style={{
          background: "#080412",
          border: "1px solid rgba(192,132,252,0.15)",
          borderRadius: 8,
          padding: "2rem",
          width: "100%",
          maxWidth: 480,
          position: "relative",
          boxShadow: "0 20px 50px rgba(0,0,0,.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "none",
            border: "none",
            color: "rgba(255,255,255,.4)",
            cursor: "pointer",
            fontSize: 20,
          }}
        >
          ✕
        </button>

        {isSuccess ? (
          <div style={{ padding: "3rem 1rem", textAlign: "center", animation: "slideUpFade .5s ease-out forwards" }}>
            <div style={{ width: 64, height: 64, margin: "0 auto 1.5rem", borderRadius: "50%", background: "rgba(192,132,252,0.1)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 30px rgba(192,132,252,0.3)" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 40, strokeDashoffset: 40, animation: "drawCheck 0.6s 0.2s ease forwards" }}/>
              </svg>
            </div>
            <h2 className="font-serif text-gradient" style={{ fontSize: 28, marginBottom: "0.5rem" }}>
              Received. 🤍
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", lineHeight: 1.5 }}>
              Thanks, {name ? name.split(" ")[0] : "there"}. We&apos;ll be in touch with you shortly.
            </p>
          </div>
        ) : (
          <>
            <h2
              className="font-serif text-gradient"
              style={{ fontSize: 32, marginBottom: ".25rem" }}
            >
              Let&apos;s get you set up.
        </h2>
        <p
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,.5)",
            marginBottom: "1.5rem",
            lineHeight: 1.6,
          }}
        >
          Tell us a little about yourself and how you&apos;d like to connect.
          We&apos;ll reach out your way.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: 11,
                color: "rgba(255,255,255,.6)",
                marginBottom: 4,
              }}
            >
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                fontSize: 11,
                color: "rgba(255,255,255,.6)",
                marginBottom: 4,
              }}
            >
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                fontSize: 11,
                color: "rgba(255,255,255,.6)",
                marginBottom: 4,
              }}
            >
              Phone number (optional)
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ position: "relative" }}>
            <label
              style={{
                display: "block",
                fontSize: 11,
                color: "rgba(255,255,255,.6)",
                marginBottom: 4,
              }}
            >
              Preferred contact method
            </label>
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{
                ...inputStyle,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span>{method}</span>
              <span
                style={{
                  color: "#c084fc",
                  transition: "transform 0.3s ease",
                  transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  fontSize: 12,
                }}
              >
                ▼
              </span>
            </div>

            {/* Custom Dropdown Menu */}
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                marginTop: 8,
                background: "#080412",
                border: "1px solid rgba(192,132,252,0.2)",
                borderRadius: 8,
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                zIndex: 10,
                opacity: isDropdownOpen ? 1 : 0,
                visibility: isDropdownOpen ? "visible" : "hidden",
                transform: isDropdownOpen ? "translateY(0)" : "translateY(-10px)",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {["Email", "WhatsApp", "Text", "Google Meet"].map((opt) => (
                <div
                  key={opt}
                  onClick={() => {
                    setMethod(opt);
                    setIsDropdownOpen(false);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(192,132,252,0.1)";
                    e.currentTarget.style.color = "#f472b6";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#fff";
                  }}
                  style={{
                    padding: "10px 14px",
                    fontSize: 13,
                    color: "#fff",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="btn-primary"
            style={{
              width: "100%",
              justifyContent: "center",
              marginTop: "12px",
            }}
          >
            Let&apos;s talk 🤍
          </button>
        </form>

        <div style={{ marginTop: "1.25rem", textAlign: "center" }}>
          <p
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,.4)",
              marginBottom: 6,
            }}
          >
            Prefer to email directly?{" "}
            <a
              href="mailto:dupemeai@gmail.com"
              style={{ color: "#C084FC", textDecoration: "none" }}
            >
              dupemeai@gmail.com
            </a>
          </p>
          <p
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,.2)",
              lineHeight: 1.4,
              maxWidth: 320,
              margin: "0 auto",
            }}
          >
            Built for creators and providers of every identity. LGBTQIA+
            inclusive and always judgment-free.
          </p>
        </div>
        </>
        )}

        <style>
          {`
            @keyframes fadeInModal {
              from { opacity: 0; transform: scale(.98); }
              to { opacity: 1; transform: scale(1); }
            }
            @keyframes slideUpFade {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes drawCheck {
              to { stroke-dashoffset: 0; }
            }
          `}
        </style>
      </div>
    </div>
  );
}
