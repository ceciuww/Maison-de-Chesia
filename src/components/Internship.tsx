"use client";

import Image from "next/image";
import { useState } from "react";
import { internships, type InternshipItem } from "@/data/internships";
import InternshipModal from "./InternshipModal";

export default function Internship() {
  const [active, setActive] = useState<InternshipItem | null>(null);

  return (
    <section id="internship" className="section-alt">
      <div className="section-divider-top" />
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Professional Exposure</p>
          <h2 className="section-title">
            Internship <em>Experience</em>
          </h2>
          <p className="section-sub">
            Internship experiences applying learned knowledge in professional
            work environments.
          </p>
        </div>

        <div className="card-grid cols-2">
          {internships.map((item) => (
            <div
              className="org-card clickable reveal"
              key={item.id}
              onClick={() => setActive(item)}
            >
              <div className="org-photo">
                <Image src={item.logo} alt={item.company} width={400} height={250} />
                <span className="org-year-badge">{item.period}</span>
              </div>
              <div className="org-body">
                <div className="org-title">{item.company}</div>
                <div className="work-role">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <InternshipModal item={active} onClose={() => setActive(null)} />
    </section>
  );
}
