"use client";

import Image from "next/image";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { useCarousel } from "@/hooks/useCarousel";

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  useCarousel(trackRef);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Project</p>
          <h2 className="section-title">
            Selected <em>Projects</em>
          </h2>
          <p className="section-sub">
            A collection of projects developed to explore skills in Android
            and Website development.
          </p>
        </div>

        <div className="carousel-container">
          <div className="carousel-track" id="projectTrack" ref={trackRef}>
            {projects.map((p) => (
              <div className="project-card reveal" key={p.title}>
                <div className="project-photo">
                  <Image src={p.image} alt={p.title} width={400} height={250} />
                  <span className="project-year-badge">{p.year}</span>
                </div>
                <div className="project-body">
                  <div className="project-title">{p.title}</div>
                  <div className="project-role">{p.role}</div>
                  <p className="project-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
