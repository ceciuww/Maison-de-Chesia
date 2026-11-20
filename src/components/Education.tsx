import Image from "next/image";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Academic Journey</p>
          <h2 className="section-title">
            Education<em>.</em>
          </h2>
          <p className="section-sub">
            My academic path from kindergarten to university, building a
            strong foundation in information technology.
          </p>
        </div>

        <div className="edu-timeline">
          {education.map((item) => (
            <div className="edu-item reveal" key={item.name}>
              <span className="edu-dot" />
              <div className="edu-card">
                <div className="edu-photo">
                  <Image src={item.logo} alt={item.name} width={60} height={60} />
                </div>
                <div className="edu-info">
                  <div className="edu-year">{item.year}</div>
                  <div className="edu-name">{item.name}</div>
                  <div className="edu-factuly">{item.faculty}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
