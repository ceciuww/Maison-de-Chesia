export interface CertificateItem {
  cat:
    | "microsoft"
    | "huawei"
    | "sap"
    | "skilvul"
    | "dicoding"
    | "cisco"
    | "bootcamp"
    | "webinar"
    | "ibm"
    | "organization"
    | "codepolitan";
  issuer: string;
  title: string;
  file: string;
}

export const certificateFilters: { key: CertificateItem["cat"]; label: string }[] = [
  { key: "microsoft", label: "Microsoft" },
  { key: "huawei", label: "Huawei" },
  { key: "sap", label: "SAP" },
  { key: "skilvul", label: "Skilvul" },
  { key: "dicoding", label: "Dicoding" },
  { key: "cisco", label: "Cisco" },
  { key: "bootcamp", label: "Bootcamp" },
  { key: "webinar", label: "Webinar" },
  { key: "ibm", label: "IBM" },
  { key: "organization", label: "Organization" },
  { key: "codepolitan", label: "Codepolitan" },
];

export const certificates: CertificateItem[] = [
  // Microsoft
  { cat: "microsoft", issuer: "Microsoft", title: "Analyze text with Azure Language", file: "/Microsoft/Analyze text with Azure Language.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Analyze video", file: "/Microsoft/Analyze video.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Build a conversational language understanding model", file: "/Microsoft/Build a conversational language understanding model.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Build agent-driven workflows using Microsoft Foundry", file: "/Microsoft/Build agent-driven workflows using Microsoft Foundry.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Build knowledge-enhanced AI agents with Foundry IQ", file: "/Microsoft/Build knowledge-enhanced AI agents with Foundry IQ.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Create a knowledge mining solution with Azure AI Search", file: "/Microsoft/Create a knowledge mining solution with Azure AI Search.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Create a multimodal analysis solution with Azure Content Understanding", file: "/Microsoft/Create a multimodal analysis solution with Azure Content Understanding.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Create an Azure Content Understanding client application", file: "/Microsoft/Create an Azure Content Understanding client application.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Create custom text classification solutions", file: "/Microsoft/Create custom text classification solutions.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Create question answering solutions with Azure Language", file: "/Microsoft/Create question answering solutions with Azure Language.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Create speech-enabled apps with Microsoft Foundry", file: "/Microsoft/Create speech-enabled apps with Microsoft Foundry.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Custom named entity recognition", file: "/Microsoft/Custom named entity recognition.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Develop a multi-agent solution with Microsoft Foundry Agent Service", file: "/Microsoft/Develop a multi-agent solution with Microsoft Foundry Agent Service.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Develop a vision-enabled generative AI application", file: "/Microsoft/Develop a vision-enabled generative AI application.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Develop AI agents with Microsoft Foundry and Visual Studio Code", file: "/Microsoft/Develop AI agents with Microsoft Foundry and Visual Studio Code.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Develop AI agents with the Microsoft Foundry extension in Visual Studio Code", file: "/Microsoft/Develop AI agents with the Microsoft Foundry extension in Visual Studio Code.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Develop an AI agent with Microsoft Agent Framework", file: "/Microsoft/Develop an AI agent with Microsoft Agent Framework.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Develop an AI agent with Microsoft Foundry Agent Service", file: "/Microsoft/Develop an AI agent with Microsoft Foundry Agent Service.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Develop an audio-enabled generative AI application", file: "/Microsoft/Develop an audio-enabled generative AI application.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Develop an Azure AI Voice Live agent", file: "/Microsoft/Develop an Azure AI Voice Live agent.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Discover Azure AI Agents with A2A", file: "/Microsoft/Discover Azure AI Agents with A2A.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Extract data from forms with Azure Document intelligence", file: "/Microsoft/Extract data from forms with Azure Document intelligence.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Generate images with AI", file: "/Microsoft/Generate images with AI.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Get started with AI agent development on Azure", file: "/Microsoft/Get started with AI agent development on Azure.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Integrate MCP Tools with Azure AI Agents", file: "/Microsoft/Integrate MCP Tools with Azure AI Agents.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Orchestrate a multi-agent solution using the Microsoft Agent Framework", file: "/Microsoft/Orchestrate a multi-agent solution using the Microsoft Agent Framework.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Secure data access in Power BI", file: "/Microsoft/Secure data access in Power BI.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Translate speech with the Azure Speech service", file: "/Microsoft/Translate speech with the Azure Speech service.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Translate text with Azure Translator service", file: "/Microsoft/Translate text with Azure Translator service.jpg" },
  { cat: "microsoft", issuer: "Microsoft", title: "Use prebuilt Document intelligence models", file: "/Microsoft/Use prebuilt Document intelligence models.jpg" },

  // Organization
  { cat: "organization", issuer: "Organization", title: "PEMIRA TIK", file: "/Organization/A4 - 6.pdf" },
  { cat: "organization", issuer: "Organization", title: "Temu Penegak II", file: "/Organization/Chesia Julian Pratiwi .pdf" },
  { cat: "organization", issuer: "Organization", title: "Staff Sie. Acara Konsolidasi Pentakosta PMKAJ 2025", file: "/Organization/Chesia Julian Pratiwi (1).png" },
  { cat: "organization", issuer: "Organization", title: "Campaign Volunteer - Sudut Bicara", file: "/Organization/Chesia Julian Pratiwi Sudut Bicara.png" },
  { cat: "organization", issuer: "Organization", title: "DFUTURO FUTURIST SUMMIT 2024 VOLUNTEER", file: "/Organization/CHESIA JULIAN PRATIWI.png" },

  // Codepolitan
  { cat: "codepolitan", issuer: "Codepolitan", title: "Dasar dan Penggunaan Generatif Al", file: "/CODEPOLITAN/Dasar dan Penggunaan Generatif Al.jpg" },

  // IBM
  { cat: "ibm", issuer: "IBM SkillsBuild", title: "AI Ethics", file: "/IBM/Completion Certificate AI Ethics  _ SkillsBuild.pdf" },
  { cat: "ibm", issuer: "IBM SkillsBuild", title: "Career Management Essentials", file: "/IBM/Completion Certificate Career Management Essentials _ SkillsBuild.pdf" },
  { cat: "ibm", issuer: "IBM SkillsBuild", title: "Introduction to Artificial Intelligence", file: "/IBM/Completion Certificate Introduction to Artificial Intelligence _ SkillsBuild.pdf" },
  { cat: "ibm", issuer: "IBM SkillsBuild", title: "Introduction to Generative AI", file: "/IBM/Completion Certificate Introduction to Generative AI _ SkillsBuild.pdf" },

  // Skilvul
  { cat: "skilvul", issuer: "Skilvul", title: "Algorithm & Data Structures with Python", file: "/Skilvul/Algorithm & Data Structures with Python.jpg" },
  { cat: "skilvul", issuer: "Skilvul", title: "C++ Fundamentals", file: "/Skilvul/C++ Dasar.jpg" },
  { cat: "skilvul", issuer: "Skilvul", title: "Coding Playground", file: "/Skilvul/Coding Playground.jpg" },
  { cat: "skilvul", issuer: "Skilvul", title: "Digital Marketing: Key to Success in the Digital Era", file: "/Skilvul/Digital Marketing Kunci Sukses di Era Digital.pdf" },
  { cat: "skilvul", issuer: "Skilvul", title: "Introduction to UI/UX", file: "/Skilvul/Intro to UI_UX.pdf" },
  { cat: "skilvul", issuer: "Skilvul", title: "Gender Equality: Perspectives & Practices in the Workplace", file: "/Skilvul/Kesetaraan Gender Perspektif & Praktik di Tempat Kerja.pdf" },
  { cat: "skilvul", issuer: "Skilvul", title: "Starting the Journey: Why AI Literacy Matters", file: "/Skilvul/Memulai Perjalanan Mengapa Literasi AI Itu Penting.pdf" },
  { cat: "skilvul", issuer: "Skilvul", title: "Career Preparation: Building Your Career and Life Journey", file: "/Skilvul/Persiapan Karir Membangun Perjalanan Karir dan Kehidupan.pdf" },
  { cat: "skilvul", issuer: "Skilvul", title: "Python Fundamentals", file: "/Skilvul/Python Dasar.jpg" },
  { cat: "skilvul", issuer: "Skilvul", title: "Advanced Python", file: "/Skilvul/Python Lanjutan.jpg" },
  { cat: "skilvul", issuer: "Skilvul", title: "React Fundamentals", file: "/Skilvul/React Dasar.jpg" },

  // Webinar
  { cat: "webinar", issuer: "Webinar", title: "Study Abroad And TOEFLIELTS Preparation - BANGSHINE BATCH 2", file: "/Webinar/Study Abroad And TOEFLIELTS Preparation.png" },
  { cat: "webinar", issuer: "Webinar", title: "Social Media Marketing Mastery: Creating Quality Content & Powerful Marketing Strategies to Stay Competitive - Career Lab", file: "/Webinar/Social Media Marketing Mastery.PNG" },
  { cat: "webinar", issuer: "Webinar", title: "3L PIK-R Bangka", file: "/Webinar/3L PIK-R Bangka.pdf" },
  { cat: "webinar", issuer: "Webinar", title: "Level Up Your Business Impact Series - NuPMK Consulting", file: "/Webinar/Level Up Your Business Impact Series.pdf" },
  { cat: "webinar", issuer: "Webinar", title: "Level Up Your Career: Game Industry Insight and Portfolio Reviews - Kementerian Komunikasi dan Informatika", file: "/Webinar/Level Up Your Career.pdf" },
  { cat: "webinar", issuer: "Webinar", title: "AI For Business: Building a Business with Minimal Capital Using AI - AI For Everyone", file: "/Webinar/AI For Bisnis Membangun Bisnis Minim Modal With AI.pdf" },
  { cat: "webinar", issuer: "Webinar", title: "Introduction to Microservices Clean Architecture – SUHU ACADEMY", file: "/Webinar/Introduction Microservices Clean Architecture.pdf" },
  { cat: "webinar", issuer: "Webinar", title: "Growing a Coffee Business: Strategies and Opportunities for MSMEs and Beginners - Bank bjb", file: "/Webinar/Menumbuhkan Bisnis Kopi.jpg" },
  { cat: "webinar", issuer: "Webinar", title: "Future-Ready Accountants: Embracing Digital Innovation and Global Sustainability - BEATS 2.0", file: "/Webinar/Future-Ready Accountants.pdf" },

  // Dicoding
  { cat: "dicoding", issuer: "Dicoding", title: "Programming with Python", file: "/DICODING/Pemrograman dengan Python.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "Machine Learning for Beginners", file: "/DICODING/Machine Learning untuk Pemula.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "Back-End Fundamentals with JavaScript", file: "/DICODING/Fundamental Back-End dengan JavaScript.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "Building Gen AI Applications with Microsoft Azure", file: "/DICODING/Membangun Aplikasi Gen AI dengan Microsoft Azure.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "Data Science Implementation with Microsoft Fabric", file: "/DICODING/Penerapan Data Science dengan Microsoft Fabric.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "Intermediate Web Development", file: "/DICODING/Pengembangan Web Intermediate.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "Back-End for Beginners with JavaScript", file: "/DICODING/Back-End Pemula dengan JavaScript.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "Cloud and Gen AI Fundamentals on AWS", file: "/DICODING/Dasar Cloud dan Gen AI di AWS.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "AI Fundamentals", file: "/DICODING/Dasar AI.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "Front-End Web Development Fundamentals", file: "/DICODING/Fundamental Front-End Web Development.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "Building Front-End Web for Beginners", file: "/DICODING/Membuat Front-End Web untuk Pemula.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "JavaScript Programming Fundamentals", file: "/DICODING/Dasar Pemrograman JavaScript.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "Web Programming Fundamentals", file: "/DICODING/Dasar Pemrograman Web.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "Git with GitHub Fundamentals", file: "/DICODING/Dasar Git dengan GitHub.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "Introduction to Programming Logic (Programming Logic 101)", file: "/DICODING/Pengenalan ke Logika Pemrograman (Programming Logic 101).pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "Getting Started with Programming Fundamentals to Become a Software Developer", file: "/DICODING/Memulai Dasar Pemrograman untuk Menjadi Pengembang Software.pdf" },
  { cat: "dicoding", issuer: "Dicoding", title: "Introduction to HTML", file: "/DICODING/Pengenalan HTML.pdf" },

  // SAP
  { cat: "sap", issuer: "SAP", title: "Operating with SAP Cloud ALM", file: "/SAP/Certificate Operating with SAP Cloud ALM.pdf" },
  { cat: "sap", issuer: "SAP", title: "SAP Cloud Platform Integration Service Overview", file: "/SAP/Certificate SAP Cloud Platform Integration Service Overview .pdf" },
  { cat: "sap", issuer: "SAP", title: "Developing Applications for SAP BTP, Cloud Foundry Runtime", file: "/SAP/Certificate Developing Applications for SAP BTP, Cloud Foundry Runtime.pdf" },
  { cat: "sap", issuer: "SAP", title: "Becoming an SAP BTP Solution Architect", file: "/SAP/Certificate Becoming an SAP BTP Solution Architect.pdf" },
  { cat: "sap", issuer: "SAP", title: "Exploring SAP Business Technology Platform", file: "/SAP/Certificate Exploring SAP Business Technology Platform.pdf" },
  { cat: "sap", issuer: "SAP", title: "Cloud Onboarding for SAP Cloud ERP", file: "/SAP/Certificate Cloud Onboarding for SAP Cloud ERP.pdf" },
  { cat: "sap", issuer: "SAP", title: "Exploring SAP Cloud ERP", file: "/SAP/Certificate Exploring SAP Cloud ERP.pdf" },
  { cat: "sap", issuer: "SAP", title: "Introducing RISE with SAP Methodology for SAP Partners and Customers", file: "/SAP/Certificate Introducing RISE with SAP Methodology for SAP Partners and Customers.pdf" },
  { cat: "sap", issuer: "SAP", title: "Cloud Onboarding for SAP Cloud ERP Private", file: "/SAP/Certificate Cloud Onboarding for SAP Cloud ERP Private.pdf" },
  { cat: "sap", issuer: "SAP", title: "Explaining Payables Management Master Data", file: "/SAP/Certificate Explaining Payables Management Master Data.pdf" },
  { cat: "sap", issuer: "SAP", title: "Explaining the Master Data Concept in the Record-to-Report area", file: "/SAP/Certificate Explaining the Master Data Concept in the Record-to-Report area.pdf" },

  // Cisco
  { cat: "cisco", issuer: "Cisco Networking Academy", title: "Introduction to Data Science", file: "/Cisco/Intro to Data Science.pdf" },

  // Bootcamp
  { cat: "bootcamp", issuer: "Bootcamp", title: "Technical Analysis", file: "/Bootcamp/Sertifikat Bootcamp_CHESIA JULIAN PRATIWI.pdf" },

  // Huawei
  { cat: "huawei", issuer: "Huawei", title: "Math Basics", file: "/Huawei/Math Basics.png" },
  { cat: "huawei", issuer: "Huawei", title: "Overview of AI", file: "/Huawei/Overview of AI.png" },
  { cat: "huawei", issuer: "Huawei", title: "Python Programming Basics", file: "/Huawei/Python Programming Basics.png" },
  { cat: "huawei", issuer: "Huawei", title: "HCIA-AI V4.0 Course", file: "/Huawei/HCIA-AI V4.0 Course.png" },
  { cat: "huawei", issuer: "Huawei", title: "Artificial Intelligence Technology and Applications", file: "/Huawei/Artificial Intelligence Technology and Applications.png" },
  { cat: "huawei", issuer: "Huawei", title: "Artificial Intelligence and Applications", file: "/Huawei/Artificial Intelligence and Applications.png" },
];
