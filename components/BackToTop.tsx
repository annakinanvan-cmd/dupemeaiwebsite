"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past roughly 50% of the document height
      // or at least 1000px down.
      const halfway = document.documentElement.scrollHeight / 2;
      const threshold = Math.min(1000, halfway);
      
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "rgba(192, 132, 252, 0.15)",
        border: "1px solid rgba(192, 132, 252, 0.4)",
        color: "#C084FC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 9999,
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
      }}
      aria-label="Back to Top"
      onMouseOver={(e) => {
        e.currentTarget.style.background = "rgba(192, 132, 252, 0.3)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = "rgba(192, 132, 252, 0.15)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
