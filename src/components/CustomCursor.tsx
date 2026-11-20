"use client";

import { useEffect, useRef, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

let sparkleId = 0;

export default function CustomCursor() {
  const crownRef = useRef<HTMLDivElement>(null);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [isTouch, setIsTouch] = useState(false);
  const lastSpawn = useRef(0);

  useEffect(() => {
    // Skip on touch devices — custom cursor doesn't make sense there
    const touchDevice =
      typeof window !== "undefined" &&
      (("ontouchstart" in window) || navigator.maxTouchPoints > 0);
    setIsTouch(touchDevice);
    if (touchDevice) return;

    const handleMove = (e: MouseEvent) => {
      if (crownRef.current) {
        crownRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      const now = performance.now();
      if (now - lastSpawn.current > 60) {
        lastSpawn.current = now;
        const id = sparkleId++;
        setSparkles((prev) => [
          ...prev.slice(-14),
          { id, x: e.clientX, y: e.clientY },
        ]);

        window.setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== id));
        }, 650);
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (isTouch) return null;

  return (
    <div className="custom-cursor-layer" aria-hidden="true">
      <div ref={crownRef} className="cursor-crown">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 8.5L6.5 11L9.7 5.8L12 9.6L14.3 5.8L17.5 11L21 8.5L19.3 17.5H4.7L3 8.5Z"
            fill="url(#crownGrad)"
            stroke="#C9A66B"
            strokeWidth="0.6"
            strokeLinejoin="round"
          />
          <circle cx="6.5" cy="10" r="1" fill="#FFFCFB" />
          <circle cx="12" cy="8.7" r="1" fill="#FFFCFB" />
          <circle cx="17.5" cy="10" r="1" fill="#FFFCFB" />
          <rect x="4.7" y="17.5" width="14.6" height="1.6" rx="0.6" fill="#C9A66B" />
          <defs>
            <linearGradient id="crownGrad" x1="3" y1="5.8" x2="21" y2="19.1" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#E8B4C4" />
              <stop offset="1" stopColor="#C97B95" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {sparkles.map((s) => (
        <span
          key={s.id}
          className="cursor-sparkle"
          style={{ left: s.x, top: s.y }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
