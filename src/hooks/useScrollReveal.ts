"use client";

import { useEffect } from "react";

/**
 * Observes every element with the `.reveal` class inside the document and
 * adds `.is-visible` once it scrolls into view (mirrors the original
 * vanilla-JS IntersectionObserver behaviour).
 *
 * A MutationObserver is also attached so that `.reveal` elements added
 * *after* the initial mount — e.g. certificate cards that appear when the
 * user switches a filter tab or clicks "Show More" — get picked up too.
 * Without this, those later-added cards stay stuck at `opacity: 0` forever
 * (invisible but still clickable), since the original IntersectionObserver
 * only ever knew about the elements that existed when it was created.
 */
export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    function observeNewReveals() {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => io.observe(el));
    }

    // Observe whatever is already on the page.
    observeNewReveals();

    // Watch for new .reveal nodes added later (filter tabs, show more, etc.)
    const mo = new MutationObserver(() => observeNewReveals());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
