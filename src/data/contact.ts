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
      "mailto:angelavilomena21@gmail.com?subject=Hello%20Chesia%20-%20Interested%20in%20Collaboration&body=Hi%20Chesia,%0A%0AI%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20connecting%20with%20you.%0A%0AWhat%20is%20the%20best%20way%20to%20reach%20you%20for%20a%20quick%20chat%3F%0A%0ABest%20regards",
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
    value: "github.com/ceciuww",
    href: "https://github.com/ceciuww",
    icon: "github",
    external: true,
  },
];
