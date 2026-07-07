"use client";

import Image from "next/image";
import { useRef } from "react";
import { organizations } from "@/data/organizations";
import { useCarousel } from "@/hooks/useCarousel";

export default function Organization() {
  const trackRef = useRef<HTMLDivElement>(null);
  useCarousel(trackRef);

  return (
    <section id="organization">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Leadership &amp; Involvement</p>
          <h2 className="section-title">
            Organizational <em>Experience</em>
          </h2>
          <p className="section-sub">
            Active involvement in various organizations, committees, and
            communities — from daily team operations to delegate roles.
          </p>
        </div>

        <div className="carousel-container">
          <div className="carousel-track" id="orgTrack" ref={trackRef}>
            {organizations.map((org) => (
              <div className="org-card reveal" key={org.title + org.year}>
                <div className="org-photo">
                  <Image src={org.image} alt={org.title} width={400} height={250} />
                  <span className="org-year-badge">{org.year}</span>
                </div>
                <div className="org-body">
                  <div className="org-title">{org.title}</div>
                  <div className="org-role">{org.role}</div>
                  <p className="org-desc">{org.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
