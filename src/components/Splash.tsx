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
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
