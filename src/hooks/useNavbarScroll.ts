"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the page has scrolled past small thresholds, used to
 * toggle the navbar's compact/blurred state and the back-to-top button.
 */
export function useNavbarScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
      setShowBackToTop(window.scrollY > 600);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrolled, showBackToTop };
}
