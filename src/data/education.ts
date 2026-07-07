export interface EducationItem {
  year: string;
  name: string;
  faculty: string;
  logo: string;
}

export const education: EducationItem[] = [
  {
    year: "2023 — Now",
    name: "Jakarta State Polytechnic",
    faculty: "Informatics Engineering",
    logo: "/Education/logo pnj.png",
  },
  {
    year: "2025 — 2023",
    name: "CCIT FTUI",
    faculty: "Information Technology Software Engineering",
    logo: "/Education/logo ccit ftui.png",
  },
  {
    year: "2023 — 2022",
    name: "SMAN 113 Jakarta",
    faculty: "Social Science",
    logo: "/Education/logo sman 113 jkt.png",
  },
  {
    year: "2022 — 2020",
    name: "Saint Anthony Senior High School, Jakarta",
    faculty: "Social Science",
    logo: "/Education/logo sma st antonius jkt.png",
  },
];
