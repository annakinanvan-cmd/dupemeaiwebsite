"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    // Failsafe parser to reveal elements immediately
    const sweepElements = () => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is inside the viewport bounding (with a bit of margin)
        if (rect.top <= window.innerHeight + 100 && rect.bottom >= -100) {
          el.classList.add("visible");
        }
      });
    };

    // Run sweep immediately on mount
    sweepElements();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px 0px" } // Use larger root margin so things trigger right before scrolling into view
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Handle programmatic scrolling (nav menu clicks)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.getAttribute("href")?.startsWith("#")) {
        // Fast sweep right after the click scroll happens
        setTimeout(sweepElements, 50);
        setTimeout(sweepElements, 300);
        setTimeout(sweepElements, 600); // multiple checks as smooth scroll moves
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);
}
