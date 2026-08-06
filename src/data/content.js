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
  subheadings: ["MERN Stack Developer", "Mobile App Developer", "DevOps Enthusiast"],
  valueProp: "I Build Software That Makes You Money or Saves You Money. You bring the problem. I build the app or platform that pays for itself. Full-stack platforms, booking systems, and apps shipped and live on Google Play.",
};

export const ABOUT_DATA = {
  bio: "I build software with one filter: does this make money, save money, or save enough time that it's the same thing. I specialize in the MERN stack, but the actual job doesn't change. Find the point where a business is losing money to a bad process or a missed customer, and build the smallest thing that fixes it.",
  gameDev: "Three of my apps are live on Google Play, proof that I don't just prototype, I ship things that generate revenue through ads and monetization loops and get used by real people. I'm currently going deeper into AI integration because automating a task someone's paying a person to do by hand is one of the most direct ways software saves money.",
};

export const SKILLS_DATA = [
  {
    category: "Booking & Scheduling Systems",
    description: "Stop losing customers to whoever makes it easiest to book. I build scheduling, appointment, and dispatch systems that turn a visit into a paid job.",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
    ]
  },
  {
    category: "Customer-Facing Platforms & Marketplaces",
    description: "Trust and speed decide whether a deal closes. I build platforms with real-time chat, role-based access, and secure transactions so nothing gets lost to friction.",
    skills: [
      { name: "Express", icon: SiExpress },
      { name: "REST APIs", icon: null },
      { name: "AWS S3", icon: null },
    ]
  },
  {
    category: "Mobile Apps, Published and Live",
    description: "An idea isn't worth anything until it's in someone's hands. I build and ship cross-platform apps that are live on Google Play, not stuck in a prototype.",
    skills: [
      { name: "Unity", icon: FaUnity },
      { name: "C#", icon: null },
    ]
  },
  {
    category: "AI-Powered Tools",
    description: "Every task a person does by hand that software could do instead is money leaking out slowly. I build AI-connected tools that automate that away.",
    skills: [
      { name: "LangChain", icon: SiLangchain },
      { name: "RAG Pipelines", icon: null },
      { name: "LLM API Integration", icon: null },
    ]
  },
  {
    category: "Infrastructure That Doesn't Break",
    description: "A product that goes down loses money the moment it's offline. I set up the hosting, networking, and server architecture so it doesn't.",
    skills: [
      { name: "Linux", icon: FaLinux },
      { name: "Vagrant", icon: SiVagrant },
      { name: "Networking (DNS, DNSMasq)", icon: null },
      { name: "VM Architecture", icon: null },
    ]
  }
];

export const WEB_PROJECTS = [
  {
    title: "Sial Connect",
    description: "Export marketplaces lose deals to unreliable buyer/seller trust and slow negotiation. I built role-based access control, real-time chat, and cloud media handling so trades close faster and platform operators don't lose transactions to friction or fraud.",
    role: "Full-Stack Developer",
    techStack: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "Socket.io"],
    githubLink: "https://github.com/ibrahim-zaheer/sialconnectFinal",
    image: sialConnectLogo,
  },
  {
    title: "FlowFix Plumbing",
    description: "An emergency plumbing customer who can't book in under a minute calls the next name on Google. That's a lost job, not a lost visitor. I built a high-converting landing page with 24/7 dispatch indicators and upfront pricing to capture that booking before it goes anywhere else.",
    role: "Frontend Developer",
    techStack: ["HTML5", "CSS3", "JavaScript", "Schema.org", "Netlify"],
    liveLink: "https://flowfixed.netlify.app/",
    image: null,
  },
  {
    title: "Precision Auto Care",
    description: "Every missed booking is a missed repair job, real revenue lost to whichever shop makes scheduling easiest. I built online scheduling and transparent diagnostics so the site turns searches into paid appointments instead of losing them to a competitor's site.",
    role: "Frontend Developer",
    techStack: ["HTML5", "CSS3", "JavaScript", "Local SEO", "Netlify"],
    liveLink: "https://precisionautocares.netlify.app/",
    image: null,
  },
  {
    title: "IronCore Fitness",
    description: "A membership is recurring revenue. Every visitor who leaves without signing up is lost monthly income, not just a bounce. I built class schedules, membership comparisons, and trainer showcases designed to convert browsing into paid sign-ups.",
    role: "Frontend Developer",
    techStack: ["HTML5", "CSS3", "JavaScript", "Google Fonts", "Netlify"],
    liveLink: "https://ironcores.netlify.app/",
    image: null,
  },
  {
    title: "Investify",
    description: "Built to prove I can solve problems outside the web stack. A Flutter mobile app demonstrating the same money-focused, problem-first approach on a cross-platform target.",
    role: "Mobile App Developer",
    techStack: ["Flutter", "Dart", "Firebase"],
    githubLink: "https://github.com/ibrahim-zaheer/InvestorApp",
    image: investifyLogo,
  },
];

export const GAME_PROJECTS = [
  {
    title: "Farm Cycle",
    description: "A farming loop that isn't addictive enough loses players before monetization ever kicks in. I built a complete plant-growth state system engineered to keep players in-loop long enough for ad revenue to actually convert. Shipped and live on Google Play.",
    learned: "Designing and implementing a complete plant-growth state system.",
    link: "https://play.google.com/store/apps/details?id=com.ibrahim.farmcycle"
  },
  {
    title: "Astro Blitz",
    description: "Instant death screens push players out before they see an ad. I solved that with non-standard scoring and timed spawn logic that keeps players playing longer, directly increasing ad monetization. Shipped and live.",
    learned: "Designing non-standard game-over/scoring logic and timed spawn systems, plus integrating ad monetization.",
    link: "https://play.google.com/store/apps/details?id=com.ibrahimzaheer.astroblitz"
  },
  {
    title: "Shelter",
    description: "A defense game with weak physics or AI loses players in the first few minutes, before any monetization has a chance. I built the real-time projectile interception and defensive AI that keeps the core loop compelling enough to retain players. Shipped and live on Google Play.",
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
