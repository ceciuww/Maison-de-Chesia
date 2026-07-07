export interface ProjectItem {
  year: string;
  title: string;
  role: string;
  desc: string;
  image: string;
}

export const projects: ProjectItem[] = [
  {
    year: "2026",
    title: "SahabatPNJ",
    role: "UI/UX Designer",
    desc: "An integrated learning platform based on learning paths, gamification, and AI recommendations to accelerate skill development.",
    image: "/Project/sahabatpnj.png",
  },
  {
    year: "2026",
    title: "Ventara",
    role: "Web Development",
    desc: "Collaborative research with BRIN and PNJ to forecast wind energy potential using machine learning.",
    image: "/Project/ventara.png",
  },
  {
    year: "2025",
    title: "Perfume Catalogue",
    role: "Android Development",
    desc: "Elegant perfume catalog app built with Kotlin and Android Studio.",
    image: "/Project/perfume catalogue.png",
  },
  {
    year: "2025",
    title: "Lapo Porsea",
    role: "Web Development",
    desc: "Business profile website for Lapo Porsea culinary, responsive layout.",
    image: "/Project/lapo porsea.jpeg",
  },
  {
    year: "2025",
    title: "Online House Price",
    role: "Web Development",
    desc: "House price estimation platform using property prediction algorithms.",
    image: "/Project/online house price.png",
  },
  {
    year: "2025",
    title: "Student Focus Mode",
    role: "Web Development",
    desc: "Study focus tool with timer, task list, and background music.",
    image: "/Project/student focus mode.png",
  },
  {
    year: "2024",
    title: "Photobooth",
    role: "Web Development",
    desc: "Interactive photobooth website with creative filters.",
    image: "/Project/photobooth.png",
  },
];
