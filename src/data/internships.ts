export interface InternshipItem {
  id: string;
  company: string;
  role: string;
  period: string;
  logo: string;
  modalImage: string;
  description: string;
}

export const internships: InternshipItem[] = [
  {
    id: "wika",
    company: "PT. Wijaya Karya Beton, Tbk",
    role: "IT Department — Web Development",
    period: "Sep 2025 — Jan 2026",
    logo: "/Internship/logo wijaya karya beton.png",
    modalImage: "/Internship/PT. Wijaya Karya Beton, Tbk.png",
    description:
      "During my internship at PT. Wijaya Karya Beton, Tbk, I was placed in the IT department and actively involved in various internal system development projects. My contributions included developing web-based applications for construction project management, as well as assisting the team in maintaining and optimizing existing systems. Additionally, I was responsible for designing website interfaces for SHGB and building permit management, and deepening my knowledge of SAP BTP and SAP ISM to support the company's operational needs. This experience provided me with valuable insights into the application of information technology in a large state-owned enterprise, while enhancing my technical skills and understanding of corporate business processes.",
  },
  {
    id: "konsulindo",
    company: "PT Konsulindo Informatika Perdana",
    role: "IT Department — Web Development",
    period: "Jul — Aug 2025",
    logo: "/Internship/logo konsulindo informatika perdana.png",
    modalImage: "/Internship/PT Konsulindo Informatika Perdana.png",
    description:
      "During my internship at PT Konsulindo Informatika Perdana, I was directly involved in website development projects for various clients. I gained in-depth knowledge of the professional software development lifecycle, from requirements analysis and interface design to implementation and testing. In this project, I also designed website interfaces for medical sidebars and deepened my understanding of SAP S/4 HANA and SAP Customer Experience. Active collaboration with senior developers enriched my technical experience and provided insights into best practices in corporate-scale system development.",
  },
];
