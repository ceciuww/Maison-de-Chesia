"use client";

import { useNavbarScroll } from "@/hooks/useNavbarScroll";

export default function BackToTop() {
  const { showBackToTop } = useNavbarScroll();

  return (
    <button
      className={`back-to-top ${showBackToTop ? "show" : ""}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
