export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: "email" | "whatsapp" | "instagram" | "linkedin" | "github";
  external?: boolean;
}

export const contacts: ContactItem[] = [
  {
    label: "Email",
    value: "angelavilomena21@gmail.com",
    href:
      "mailto:angelavilomena21@gmail.com?subject=%5BInsert%20Subject%20Here%5D&body=Dear%20Angela%2C%0A%0AI%20hope%20this%20email%20finds%20you%20well.%0A%0A%5BInsert%20your%20message%20here.%20Be%20clear%20and%20concise%20about%20why%20you%20are%20writing.%5D%0A%0AI%20look%20forward%20to%20your%20reply.%0A%0ABest%20regards%2C%0A%0A%5BYour%20Full%20Name%5D%0A%5BYour%20Position%2FTitle%20%28optional%29%5D%0A%5BYour%20Contact%20Information%5D",
    icon: "email",
  },
  {
    label: "WhatsApp",
    value: "+62 819-0535-4627",
    href: "https://wa.me/+6281905354627",
    icon: "whatsapp",
  },
  {
    label: "Instagram",
    value: "@meiliduchessa",
    href: "https://www.instagram.com/meiliduchessa/",
    icon: "instagram",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Chesia Julian Pratiwi",
    href: "https://www.linkedin.com/in/chesia-julian-pratiwi-a5522128a/",
    icon: "linkedin",
    external: true,
  },
  {
    label: "GitHub",
    value: "ceciuww",
    href: "https://github.com/ceciuww",
    icon: "github",
    external: true,
  },
];
