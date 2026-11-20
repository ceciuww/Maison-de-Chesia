"use client";

import { useEffect, type RefObject } from "react";

const SLIDE_DELAY = 4000;

/**
 * Adds auto-slide, mouse-drag, and touch-swipe behaviour to a horizontally
 * scrollable carousel track, matching the original vanilla-JS implementation.
 */
export function useCarousel(trackRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let autoSlideInterval: ReturnType<typeof setInterval> | null = null;
    let resumeTimeout: ReturnType<typeof setTimeout> | null = null;

    function autoSlide() {
      if (isDragging || !track) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return;
      const currentScroll = track.scrollLeft;
      const cardEl = track.querySelector<HTMLElement>(
        ".org-card, .project-card, .ach-card"
      );
      const cardWidth = cardEl?.offsetWidth || 280;
      const gap = 1.8 * 16;
      const step = cardWidth + gap;
      let nextScroll = currentScroll + step;
      if (nextScroll >= maxScroll) nextScroll = 0;
      track.scrollTo({ left: nextScroll, behavior: "smooth" });
    }

    function startAutoSlide() {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(autoSlide, SLIDE_DELAY);
    }

    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }

    function onMouseDown(e: MouseEvent) {
      isDragging = true;
      startX = e.pageX - (track as HTMLDivElement).offsetLeft;
      scrollLeft = (track as HTMLDivElement).scrollLeft;
      stopAutoSlide();
    }
    function onMouseUp() {
      isDragging = false;
      startAutoSlide();
    }
    function onMouseLeave() {
      if (isDragging) {
        isDragging = false;
        startAutoSlide();
      }
    }
    function onMouseMove(e: MouseEvent) {
      if (!isDragging || !track) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    }

    let touchStartX = 0;
    let touchScrollLeft = 0;
    let isTouching = false;

    function onTouchStart(e: TouchEvent) {
      isTouching = true;
      touchStartX = e.touches[0].pageX - (track as HTMLDivElement).offsetLeft;
      touchScrollLeft = (track as HTMLDivElement).scrollLeft;
      stopAutoSlide();
    }
    function onTouchMove(e: TouchEvent) {
      if (!isTouching || !track) return;
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - touchStartX) * 1.5;
      track.scrollLeft = touchScrollLeft - walk;
    }
    function onTouchEnd() {
      isTouching = false;
      startAutoSlide();
    }

    function onScroll() {
      if (!isDragging && !isTouching) {
        stopAutoSlide();
        if (resumeTimeout) clearTimeout(resumeTimeout);
        resumeTimeout = setTimeout(startAutoSlide, 3000);
      }
    }

    track.addEventListener("mousedown", onMouseDown);
    track.addEventListener("mouseup", onMouseUp);
    track.addEventListener("mouseleave", onMouseLeave);
    track.addEventListener("mousemove", onMouseMove);
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove", onTouchMove, { passive: true });
    track.addEventListener("touchend", onTouchEnd, { passive: true });
    track.addEventListener("scroll", onScroll);

    startAutoSlide();

    return () => {
      stopAutoSlide();
      if (resumeTimeout) clearTimeout(resumeTimeout);
      track.removeEventListener("mousedown", onMouseDown);
      track.removeEventListener("mouseup", onMouseUp);
      track.removeEventListener("mouseleave", onMouseLeave);
      track.removeEventListener("mousemove", onMouseMove);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", onTouchEnd);
      track.removeEventListener("scroll", onScroll);
    };
  }, [trackRef]);
}
