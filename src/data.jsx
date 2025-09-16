import { nanoid } from "nanoid"
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa"
import { SiNextdotjs, SiBootstrap, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiExpress, 
         SiPostman, SiGooglechrome } from "react-icons/si"
import { DiJava } from "react-icons/di";

import { VscCode } from "react-icons/vsc";
import my_portfolio from "./assets/my_portfolio.png"
import simongame from "./assets/simongame.png";
import calculator from "./assets/calculator.png";
import qrcode from "./assets/qrcode.png";
import resume from "./assets/resume.pdf"


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#certifications', text: 'certifications' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: resume, text: 'resume' },
 
];

export const skills = [
  
  {
    id: nanoid(),
    title: "HTML5",
    icon: <FaHtml5 className="h-16 w-16 text-orange-500" />,
    text: "Strong foundation in semantic HTML for building structured and accessible web pages.",
  },
  {
    id: nanoid(),
    title: "CSS3",
    icon: <FaCss3Alt className="h-16 w-16 text-blue-500" />,
    text: "Styling expertise with CSS3 for responsive and modern web layouts.",
  },
  {
    id: nanoid(),
    title: "JavaScript (ES6+)",
    icon: <FaJsSquare className="h-16 w-16 text-yellow-500" />,
    text: "Proficient in JavaScript for dynamic functionality and interactive web applications.",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-blue-600" />,
    text: "Building strongly-typed and scalable applications with TypeScript.",
  },
  {
    id: nanoid(),
    title: "React.js",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Developing efficient, component-based front-end applications with React.",
  },
  {
    id: nanoid(),
    title: "Next.js",
    icon: <SiNextdotjs className="h-16 w-16 text-black" />,
    text: "Experience in server-side rendering and full-stack app development with Next.js.",
  },
  {
    id: nanoid(),
    title: "Bootstrap",
    icon: <SiBootstrap className="h-16 w-16 text-purple-600" />,
    text: "Responsive design with Bootstrap for quick and effective UI development.",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-16 w-16 text-sky-500" />,
    text: "Utility-first CSS framework for building modern, scalable, and clean designs.",
  },

  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNodeJs className="h-16 w-16 text-green-600" />,
    text: "Backend development with Node.js for handling APIs and server logic.",
  },
  {
    id: nanoid(),
    title: "Express.js",
    icon: <SiExpress className="h-16 w-16 text-gray-700" />,
    text: "RESTful API development and middleware integration using Express.js.",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <DiJava className="h-16 w-16 text-gray-700" />,
    text: "Java fundamentals and object-oriented programming (OOP) concepts.",
  },
  
  {
    id: nanoid(),
    title: "PostgreSQL",
    icon: <SiPostgresql className="h-16 w-16 text-sky-700" />,
    text: "Relational database design, queries, and management with PostgreSQL.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-16 w-16 text-green-700" />,
    text: "Experience with NoSQL database MongoDB for flexible schema data.",
  },

  
  {
    id: nanoid(),
    title: "Git & GitHub",
    icon: <FaGitAlt className="h-16 w-16 text-red-600" />,
    text: "Version control and collaboration using Git and GitHub.",
  },
   {
    id: nanoid(),
    title: "VS Code",
    icon: <VscCode className="h-16 w-16 text-blue-500" />,  // ✅ Correct usage
    text: "Proficient in using Visual Studio Code as the main development environment.",
  },
  {
    id: nanoid(),
    title: "Postman",
    icon: <SiPostman className="h-16 w-16 text-orange-500" />,
    text: "API testing and debugging with Postman for backend development.",
  },
  {
    id: nanoid(),
    title: "Chrome DevTools",
    icon: <SiGooglechrome className="h-16 w-16 text-yellow-600" />,
    text: "Debugging and performance optimization using Chrome Developer Tools.",
  },
]


export const projects = [
  {
    id: nanoid(),
    img: my_portfolio,  
    url: '#',
    github: 'https://github.com/Violentvicky5', 
    title: 'Portfolio Website',
    text: 'A personal portfolio website to showcase projects, resume, and skills.',
  },
  {
    id: nanoid(),
    img: simongame, 
    url: '#',  
    github: 'https://github.com/Violentvicky5', 
    title: 'Simon Game',
    text: 'Interactive memory-based game built using JavaScript, CSS, and DOM Manipulation with engaging animations.',
  },
  {
    id: nanoid(),
    img: calculator,  
    url: '#',  
    github: 'https://github.com/Violentvicky5', 
    title: 'Calculator with Backend',
    text: 'Calculator application with both frontend and backend integration. Supports basic operations and stores calculation history in a database.',
  },
  {
    id: nanoid(),
    img: qrcode,  
    url: '#',  
    github: 'https://github.com/Violentvicky5', 
    title: 'QR Code Generator',
    text: 'Dynamic QR code generator built using Node.js and Express.js for creating QR codes instantly.',
  },
];

export const certifications = [
  {
    id: nanoid(),
    url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-45f0ba82-d7ae-4180-b086-a2fb157dbc2f.jpg ',
    title: 'Full Stack Web Development Course – Udemy',
    text: 'Trained in frontend, backend, and database development using HTML, CSS, JavaScript, React, Node.js, Express, and PostgreSQL.',
  },
  {
    id: nanoid(),
    url: 'https://ude.my/UC-e2df2fb0-0948-4495-bd63-92f07f2bd24d ',
    title: 'Complete React, Next.js & TypeScript Projects Course 2025 – Udemy ',
    text: 'Built practical projects with React, Next.js, and TypeScript, focusing on type safety, routing, and API integration.',
  },
  {
    id: nanoid(),
    url: 'https://www.udemy.com/certificate/UC-2d677614-f257-44ad-974e-86e221d194b3/',
    title: 'Java Programming For Complete Beginners [2025] – Udemy ',
    text: 'Learned Java fundamentals and OOP concepts with hands-on coding and beginner-friendly projects.',
  }
];