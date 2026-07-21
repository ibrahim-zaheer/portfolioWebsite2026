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
  subheadings: ["MERN Stack Developer", "Game Developer", "DevOps Enthusiast"],
  valueProp: "Building scalable web applications and engaging games — from backend architecture to published mobile games.",
};

export const ABOUT_DATA = {
  bio: "I am a Software Engineer at Finz Games, holding a BS in Computer Science from COMSATS University Lahore (2025). I specialize in the MERN stack and have a strong passion for DevOps and AI integrations, actively building RAG pipelines and connecting LLM APIs into full-stack products.",
  gameDev: "In parallel to web development, I am an experienced Unity game developer with three published games on the Google Play Store, demonstrating my ability to ship cross-platform products and engage consumers directly.",
};

export const SKILLS_DATA = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML/CSS", icon: FaHtml5 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST APIs", icon: null }, // Fallback if no specific icon
    ]
  },
  {
    category: "Game Development",
    skills: [
      { name: "Unity", icon: FaUnity },
      { name: "C#", icon: null },
    ]
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      { name: "Linux", icon: FaLinux },
      { name: "Vagrant", icon: SiVagrant },
      { name: "Networking (DNS, DNSMasq)", icon: null },
      { name: "VM Architecture", icon: null },
    ]
  },
  {
    category: "Currently Learning",
    skills: [
      { name: "LangChain", icon: SiLangchain },
      { name: "RAG Pipelines", icon: null },
      { name: "LLM API Integration", icon: null },
    ]
  }
];

export const WEB_PROJECTS = [
  {
    title: "Sial Connect",
    description: "A MERN stack marketplace platform featuring role-based access control (RBAC), real-time chat functionality, and cloud media handling via AWS S3 and Cloudinary. Proves full-stack capability: authentication/authorization architecture, real-time systems, and cloud integration.",
    role: "Full-Stack Developer",
    techStack: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "Socket.io"],
    githubLink: "https://github.com/ibrahim-zaheer/sialconnectFinal",
    image: sialConnectLogo,
  },
  {
    title: "FlowFix Plumbing",
    description: "A high-converting, responsive landing page & booking platform built for emergency plumbing services. Features 24/7 dispatch indicators, service pricing cards, local business JSON-LD schema for local SEO optimization, and streamlined booking workflow.",
    role: "Frontend Developer",
    techStack: ["HTML5", "CSS3", "JavaScript", "Schema.org", "Netlify"],
    liveLink: "https://flowfixed.netlify.app/",
    image: null,
  },
  {
    title: "Precision Auto Care",
    description: "An interactive, conversion-focused automotive service platform for an ASE-certified repair center. Includes online scheduling tools, diagnostic breakdowns, 24-month warranty guarantees, and structured local SEO markup.",
    role: "Frontend Developer",
    techStack: ["HTML5", "CSS3", "JavaScript", "Local SEO", "Netlify"],
    liveLink: "https://precisionautocares.netlify.app/",
    image: null,
  },
  {
    title: "IronCore Fitness",
    description: "A modern, high-energy web application for a luxury gym & fitness club. Features interactive class schedules, membership tier comparisons, trainer showcases, and smooth responsive UI micro-interactions.",
    role: "Frontend Developer",
    techStack: ["HTML5", "CSS3", "JavaScript", "Google Fonts", "Netlify"],
    liveLink: "https://ironcores.netlify.app/",
    image: null,
  },
  {
    title: "Investify",
    description: "A Flutter-based mobile application (final year project). Serves as proof of cross-platform/mobile capability beyond the web stack.",
    role: "Mobile App Developer",
    techStack: ["Flutter", "Dart", "Firebase"],
    githubLink: "https://github.com/ibrahim-zaheer/InvestorApp",
    image: investifyLogo,
  },
];

export const GAME_PROJECTS = [
  {
    title: "Farm Cycle",
    description: "A farming simulation game where the player buys seeds, prepares land, and waters crops to grow them through a full farm cycle.",
    learned: "Designing and implementing a complete plant-growth state system.",
    link: "https://play.google.com/store/apps/details?id=com.ibrahim.farmcycle"
  },
  {
    title: "Astro Blitz",
    description: "An arcade-style space shooter inspired by Chicken Invaders, with monetization via ads. Players lose points instead of dying immediately, recovering a minimum score alongside a timed asteroid spawn cycle.",
    learned: "Designing non-standard game-over/scoring logic and timed spawn systems, plus integrating ad monetization.",
    link: "https://play.google.com/store/apps/details?id=com.ibrahimzaheer.astroblitz"
  },
  {
    title: "Shelter",
    description: "A defense game in the spirit of Angry Birds, but inverted — instead of attacking, the player defends buildings and civilians from incoming rocket attacks.",
    learned: "Implementing 2D physics mechanics, defensive AI logic, and trajectory calculations for real-time projectile interception.",
    link: "https://play.google.com/store/apps/details?id=com.ibrahimzaheer.shelter"
  }
];

export const CONTACT_DATA = {
  heading: "Let's Build Something",
  email: "zaheeribrahim346@gmail.com", // Replace with real email
  github: "https://github.com/ibrahim-zaheer",
  linkedin: "https://www.linkedin.com/in/ibrahim-zaheer-88155421a/",
};
