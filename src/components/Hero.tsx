"use client";

import Image from "next/image";

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-deco-line l1" />
      <div className="hero-deco-line l2" />
      <div className="hero-ring r1" />
      <div className="hero-ring r2" />
      <div className="hero-ring r3" />

      <div className="hero-grid">
        <div className="hero-text">
          <p className="hero-eyebrow">Informatics Engineering Student</p>
          <h1 className="hero-name">
            <span className="first">Chesia Julian</span>
            <span className="last">Pratiwi</span>
          </h1>
          <p className="hero-role">
            <span className="dot" />
            Frontend &amp; Android Developer — Jakarta, Indonesia
          </p>
          <p className="hero-desc">
            Informatics Engineering student with a strong interest in daily
            team operations management, as well as experience in Frontend Web
            and Android development. Accustomed to leading organizations,
            managing projects, and continuously deepening expertise in
            technology.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#projects");
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
            >
              Contact Me
            </a>
            <a
              href="/CV ATS Chesia Julian Pratiwi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cv"
            >
              📄 View ATS CV
            </a>
          </div>

          <div className="hero-stats">
            <div
              className="hero-stat"
              onClick={() => scrollTo("#organization")}
            >
              <div className="num">15+</div>
              <div className="label">Organizations</div>
            </div>
            <div
              className="hero-stat"
              onClick={() => scrollTo("#certificates")}
            >
              <div className="num">50+</div>
              <div className="label">Certificates</div>
            </div>
            <div className="hero-stat" onClick={() => scrollTo("#projects")}>
              <div className="num">7</div>
              <div className="label">Projects</div>
            </div>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="hero-portrait-frame">
            <div className="hero-photo">
              <Image
                src="/cjp profile.jpg"
                alt="Chesia Julian Pratiwi"
                width={380}
                height={494}
              />
            </div>
          </div>
          <div className="hero-portrait-tag">
            <div className="ico">
              <Image
                src="/Education/logo pnj.png"
                alt="PNJ"
                width={24}
                height={24}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="txt">
              <b>Jakarta State Polytechnic</b>
              <span>2023 — Now</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
