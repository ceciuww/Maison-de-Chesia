"use client";

import { useRef } from "react";
import { achievements } from "@/data/achievements";
import { useCarousel } from "@/hooks/useCarousel";

function MedalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="8" r="6" />
      <path d="M9 13.5 7 22l5-3 5 3-2-8.5" />
    </svg>
  );
}

export default function Achievements() {
  const trackRef = useRef<HTMLDivElement>(null);
  useCarousel(trackRef);

  return (
    <section id="achievements">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Recognition</p>
          <h2 className="section-title">
            Achievements<em>.</em>
          </h2>
          <p className="section-sub">
            Achievements and awards earned in various competitions,
            committees, and national-level contests.
          </p>
        </div>

        <div className="carousel-container">
          <div className="carousel-track" id="achievementTrack" ref={trackRef}>
            {achievements.map((a) => (
              <div
                className="ach-card reveal"
                key={a.file}
                onClick={() => window.open(a.file, "_blank")}
              >
                <div className="ach-medal">
                  <MedalIcon />
                </div>
                <div className="ach-rank">{a.rank}</div>
                <div className="ach-title">{a.title}</div>
                <div className="ach-year">{a.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
