"use client";

import { useMemo, useState } from "react";
import { certificateFilters, certificates, type CertificateItem } from "@/data/certificates";

const PAGE_SIZE = 12;

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState<CertificateItem["cat"]>("microsoft");
  const [limit, setLimit] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => certificates.filter((c) => c.cat === activeFilter),
    [activeFilter]
  );
  const visible = filtered.slice(0, limit);

  function handleFilterClick(key: CertificateItem["cat"]) {
    setActiveFilter(key);
    setLimit(PAGE_SIZE);
  }

  return (
    <section id="certificates" className="section-alt">
      <div className="section-divider-top" />
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Continuous Learning</p>
          <h2 className="section-title">
            Certificates<em>.</em>
          </h2>
          <p className="section-sub">
            A collection of certificates from various trainings and courses in
            AI, cloud, and programming development.
          </p>
        </div>

        <div className="filter-tabs">
          {certificateFilters.map((f) => (
            <button
              key={f.key}
              className={`filter-tab ${activeFilter === f.key ? "active" : ""}`}
              onClick={() => handleFilterClick(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="card-grid cols-4" id="certGrid">
          {visible.map((cert) => (
            <div
              className="cert-card reveal"
              key={cert.file}
              onClick={() => window.open(cert.file, "_blank")}
            >
              <div className="cert-body">
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-title">{cert.title}</div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length > limit && (
          <div className="show-more-wrap">
            <button
              className="btn btn-outline"
              onClick={() => setLimit((v) => v + PAGE_SIZE)}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
