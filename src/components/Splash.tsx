"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Splash() {
  const [hide, setHide] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHide(true), 3000);
    return () => clearTimeout(hideTimer);
  }, []);

  useEffect(() => {
    if (!hide) return;
    const removeTimer = setTimeout(() => setRemoved(true), 950);
    return () => clearTimeout(removeTimer);
  }, [hide]);

  if (removed) return null;

  return (
    <div id="splash" className={hide ? "hide" : ""}>
      <div className="splash-ring r1" />
      <div className="splash-ring r2" />
      <div className="splash-ring r3" />
      <div className="splash-ring r4" />
      <div className="splash-content">
        <Image
          src="/Maison de Chesia.png"
          alt="Chesia Julian Pratiwi"
          className="splash-logo"
          width={420}
          height={420}
          priority
        />
        <div className="splash-divider" />
        <div className="splash-loader">
          <div className="splash-crown">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 8.5L6.5 11L9.7 5.8L12 9.6L14.3 5.8L17.5 11L21 8.5L19.3 17.5H4.7L3 8.5Z"
                fill="url(#splashCrownGrad)"
                stroke="#C9A66B"
                strokeWidth="0.6"
                strokeLinejoin="round"
              />
              <circle cx="6.5" cy="10" r="1" fill="#FFFCFB" />
              <circle cx="12" cy="8.7" r="1" fill="#FFFCFB" />
              <circle cx="17.5" cy="10" r="1" fill="#FFFCFB" />
              <rect x="4.7" y="17.5" width="14.6" height="1.6" rx="0.6" fill="#C9A66B" />
              <defs>
                <linearGradient id="splashCrownGrad" x1="3" y1="5.8" x2="21" y2="19.1" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#E8B4C4" />
                  <stop offset="1" stopColor="#C97B95" />
                </linearGradient>
              </defs>
            </svg>
            <span className="splash-sparkle s1">✦</span>
            <span className="splash-sparkle s2">✦</span>
            <span className="splash-sparkle s3">✦</span>
            <span className="splash-sparkle s4">✦</span>
          </div>
        </div>
      </div>
    </div>
  );
}
