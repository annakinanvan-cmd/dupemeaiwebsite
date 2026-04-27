"use client";

const platforms = [
  { name: "WhatsApp",        icon: "https://cdn.simpleicons.org/whatsapp/25D366",        bg: "rgba(37,211,102,.08)",   border: "rgba(37,211,102,.25)",   desc: "Books, screens & collects deposits" },
  { name: "Telegram",        icon: "https://cdn.simpleicons.org/telegram/26A5E4",        bg: "rgba(38,165,228,.08)",   border: "rgba(38,165,228,.25)",   desc: "Manages leads & confirms bookings" },
  { name: "Instagram",       icon: "https://cdn.simpleicons.org/instagram/E1306C",       bg: "rgba(225,48,108,.08)",   border: "rgba(225,48,108,.25)",   desc: "Replies to DMs & redirects to OnlyFans" },
  { name: "iMessage",        icon: "https://cdn.simpleicons.org/imessage/1C8EF9",        bg: "rgba(28,142,249,.08)",   border: "rgba(28,142,249,.25)",   desc: "Handles enquiries & scheduling" },
  { name: "Signal",          icon: "https://cdn.simpleicons.org/signal/3A76F0",          bg: "rgba(58,118,240,.08)",   border: "rgba(58,118,240,.25)",   desc: "Private client communication" },
  { name: "OnlyFans",        icon: "https://cdn.simpleicons.org/onlyfans/00AFF0",        bg: "rgba(0,175,240,.08)",    border: "rgba(0,175,240,.25)",    desc: "Receives fans redirected from your Instagram, X & other socials" },
  { name: "Gmail",           icon: "https://cdn.simpleicons.org/gmail/EA4335",           bg: "rgba(234,67,53,.08)",    border: "rgba(234,67,53,.25)",    desc: "Screens emails & manages enquiries" },
  { name: "X",               icon: "https://cdn.simpleicons.org/x/ffffff",               bg: "rgba(255,255,255,.05)",  border: "rgba(255,255,255,.18)",  desc: "Redirects followers to your platforms" },
  { name: "Google Calendar", icon: "https://cdn.simpleicons.org/googlecalendar/4285F4", bg: "rgba(66,133,244,.08)",   border: "rgba(66,133,244,.25)",   desc: "Auto-books & manages your schedule" },
];

export default function Platforms() {
  return (
    <section
      id="platforms"
      className="section-pad"
      style={{ borderBottom: ".5px solid rgba(192,132,252,.15)", position: "relative", zIndex: 2 }}
    >
      <span
        className="reveal"
        style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "#C084FC", marginBottom: "1.25rem", display: "block" }}
      >
        Platforms
      </span>
      <h2
        className="font-serif reveal reveal-delay-1"
        style={{ fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 400, marginBottom: ".75rem" }}
      >
        Everywhere your clients already are.
      </h2>
      <p
        className="reveal reveal-delay-2"
        style={{ fontSize: 14, color: "rgba(255,255,255,.65)", marginBottom: "3rem", lineHeight: 1.7, maxWidth: 480 }}
      >
        No new apps. No new numbers. DupeMe plugs into what you already use.
      </p>

      <div className="reveal reveal-delay-3 platforms-grid">
        {platforms.map((p) => (
          <div
            key={p.name}
            className="platform-card"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: ".5rem",
              background: p.bg,
              border: `.5px solid ${p.border}`,
              borderRadius: 14,
              transition: "transform .2s, box-shadow .2s",
              cursor: "default",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${p.border}`;
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <img src={p.icon} alt={p.name} width={36} height={36} style={{ display: "block" }} />
            <span style={{ fontSize: 11, color: "rgba(255,255,255,.85)", letterSpacing: ".03em", lineHeight: 1.3, fontWeight: 600 }}>{p.name}</span>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,.42)", lineHeight: 1.5, letterSpacing: ".02em" }}>{p.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
