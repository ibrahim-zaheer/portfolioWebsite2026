import { 
  FaReact, FaNodeJs, FaUnity, FaLinux, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin, FaEnvelope 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiVagrant, SiLangchain 
} from 'react-icons/si';

import sialConnectLogo from '../assets/Sialconnect FYP logo.png';
import investifyLogo from '../assets/investify logo.png';

export const HERO_DATA = {
  name: "Ibrahim Zaheer",
  subheadings: ["Offline-First Mobile Apps", "Logistics & Construction Software", "Field Data Sync Specialist"],
  valueProp: "I build offline-first mobile apps for logistics and construction field teams — software that keeps field crews working reliably even with poor or zero connectivity, syncing data automatically once back online.",
};

export const ABOUT_DATA = {
  bio: "I specialize in mobile app development with a strict focus on offline-first architecture, local data retention, and seamless background synchronization. Field teams in logistics and construction frequently work in zero-coverage zones where web apps stall and data loss stalls job sites. I build resilient mobile systems engineered to ensure zero downtime, immediate user responsiveness, and dependable conflict resolution when reconnecting.",
  gameDev: "My background includes building and shipping production mobile applications live on Google Play, giving me deep experience in local state storage, state machine reliability, and resource efficiency on mobile devices. My work is dedicated to solving connectivity and field workflow challenges for logistics, job tracking, and field service operations.",
};

export const SKILLS_DATA = [
  {
    category: "Offline-First Mobile Apps",
    description: "Mobile applications built with robust local SQLite/WatermelonDB storage and background task queues so field workers never lose progress when cell service drops.",
    skills: [
      { name: "React Native / Mobile", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB / Local DB", icon: SiMongodb },
    ]
  },
  {
    category: "Dispatch & Job Tracking Systems",
    description: "Real-time dispatch boards, job assignment workflows, and field audit trails built for seamless communication between dispatchers and remote site crews.",
    skills: [
      { name: "Express", icon: SiExpress },
      { name: "REST & WebSockets", icon: null },
      { name: "Cloud Storage (AWS S3)", icon: null },
    ]
  },
  {
    category: "Data Sync & Conflict Resolution",
    description: "Delta-based synchronization engines and conflict resolution strategies (CRDTs / last-write-wins) ensuring seamless sync when field devices reconnect.",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
    ]
  },
  {
    category: "Mobile Performance & Distribution",
    description: "Native mobile build configurations, optimized local caching, and field deployment through production app stores and enterprise distribution.",
    skills: [
      { name: "Unity & C# Mobile", icon: FaUnity },
      { name: "Android / Play Store", icon: null },
    ]
  },
  {
    category: "Field AI & Automated Tools",
    description: "On-device or edge-connected AI tooling for document scanning, automated logs processing, and job report summarization in remote environments.",
    skills: [
      { name: "LangChain", icon: SiLangchain },
      { name: "RAG & Document Parsing", icon: null },
      { name: "LLM API Integration", icon: null },
    ]
  }
];

export const WEB_PROJECTS = [
  {
    title: "Sial Connect",
    description: "Export logistics platform built to handle complex multi-role workflows. Implemented role-based access, real-time messaging using Socket.io, and asynchronous media uploads engineered for multi-user coordination across varying network conditions.",
    role: "Full-Stack Developer",
    techStack: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "Socket.io"],
    githubLink: "https://github.com/ibrahim-zaheer/sialconnectFinal",
    image: sialConnectLogo,
  },
  {
    title: "FlowFix Plumbing",
    description: "Field service landing platform optimized for emergency dispatch and rapid mobile job intake. Features dynamic dispatch indicators and instant contact forms designed for mobile field users.",
    role: "Frontend Developer",
    techStack: ["HTML5", "CSS3", "JavaScript", "Schema.org", "Netlify"],
    liveLink: "https://flowfixed.netlify.app/",
    image: null,
  },
  {
    title: "Precision Auto Care",
    description: "Service scheduling application built with local storage persistence to retain user appointment drafts and customer inputs across browser reloads and connection drops.",
    role: "Frontend Developer",
    techStack: ["HTML5", "CSS3", "JavaScript", "Local Storage", "Netlify"],
    liveLink: "https://precisionautocares.netlify.app/",
    image: null,
  },
  {
    title: "IronCore Fitness",
    description: "Member management and class scheduling interface built with offline state fallbacks to display schedules and workout plans without requiring active network requests on every navigation.",
    role: "Frontend Developer",
    techStack: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    liveLink: "https://ironcores.netlify.app/",
    image: null,
  },
  {
    title: "Investify",
    description: "Cross-platform Flutter mobile application demonstrating mobile-first data handling, local cache state management, and real-time backend synchronization with Firebase.",
    role: "Mobile App Developer",
    techStack: ["Flutter", "Dart", "Firebase", "Offline Cache"],
    githubLink: "https://github.com/ibrahim-zaheer/InvestorApp",
    image: investifyLogo,
  },
];

export const GAME_PROJECTS = [
  {
    title: "Farm Cycle",
    description: "Mobile app with complete offline local state preservation. Engine handles offline simulation time calculations and state reconciliation upon app restart without requiring server connections. Live on Google Play.",
    learned: "Implementing reliable local state machines, offline persistence, and memory-efficient lifecycle management.",
    link: "https://play.google.com/store/apps/details?id=com.ibrahim.farmcycle"
  },
  {
    title: "Astro Blitz",
    description: "High-performance mobile application featuring offline-first local high score caching and asynchronous retry logic for cloud leaderboard sync when connectivity resumes. Live on Google Play.",
    learned: "Managing local storage queues, network status listeners, and deferred cloud sync operations.",
    link: "https://play.google.com/store/apps/details?id=com.ibrahimzaheer.astroblitz"
  },
  {
    title: "Shelter",
    description: "Mobile real-time application optimized for low-latency touch response and offline execution, featuring local save file serialization and zero reliance on external network availability during gameplay. Live on Google Play.",
    learned: "Designing resilient local storage serialization, low-latency UI responsiveness, and offline state handling.",
    link: "https://play.google.com/store/apps/details?id=com.ibrahimzaheer.shelter"
  }
];

export const CONTACT_DATA = {
  heading: "Let's Build Your Field App",
  email: "zaheeribrahim346@gmail.com",
  github: "https://github.com/ibrahim-zaheer",
  linkedin: "https://www.linkedin.com/in/ibrahim-zaheer-88155421a/",
};
