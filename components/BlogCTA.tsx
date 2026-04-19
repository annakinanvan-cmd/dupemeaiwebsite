"use client";

import React from "react";

export default function BlogCTA() {
  return (
    <section>
      <div 
        className="hero-btn-group" 
        style={{ 
          maxWidth: "800px", 
          margin: "0 auto", 
          paddingBottom: "8rem", 
          paddingTop: "2rem",
          justifyContent: "center",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem"
        }}
      >
        <a 
          href="/#demo" 
          className="btn-primary" 
          style={{ textDecoration: "none", minWidth: "200px" }}
        >
          See How It Works
        </a>
        <button 
          className="btn-ghost" 
          onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))}
          style={{ minWidth: "200px" }}
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
}
