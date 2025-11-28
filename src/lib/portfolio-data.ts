
import { Award, Briefcase, Code, Database, FileJson2, Github, Users, Wrench, Rocket, Coffee, BarChart, Figma, PenTool, Camera, Film, BrainCircuit, Palette, Puzzle, Clock, Users2, Brain, AlarmClock, Pilcrow, Languages, Braces } from 'lucide-react';

export const portfolioData = {
  name: "Ayush Dhanawade",
  title: "Computer Engineering'27 | Student at PVGCOET | Frontend Developer | Photographer @ Flora Flicks | Building @stillmestore",
  bio: "A curious learner and a passionate developer, exploring the endless possibilities of technology. I am driven by the desire to build things that are both useful and beautiful.",
  
  contact: {
    email: "717ayush@gmail.com",
    phone: "9322022740",
    address: "Pune, Maharashtra, India",
    formspreeEndpoint: "https://formspree.io/f/mjkqylyw"
  },

  socials: {
    github: "https://github.com/ayshu717",
    linkedin: "https://www.linkedin.com/in/ayush-dhanawade717/",
    instagram: "https://www.instagram.com/4y5hu",
  },

  resumeUrl: "/Ayush_Dhanawade_Resume.pdf",

  about: {
    title: "About Me",
    description: "I’m Ayush a curious mind learning how to build for the web and express creatively through the lens. As a Computer Engineering student at PVGCOET, I’m currently diving into full stack development (MERN) and sharpening my problem-solving with Java and DSA. I love creating things that not only work well, but feel right whether it’s a personal project or a team collaboration, the process of figuring things out from scratch excites me. Outside of tech, I run Flora Flicks, where I explore photography and visual storytelling. It keeps me grounded, observant, and detail-oriented qualities that help me write better code and build better experiences. I’m also an active core member of Association Of Computer Engineering Students, where I get to work at the intersection of design, tech, and teamwork."
  },

  skills: [
    {
      category: "Top Skills",
      icon: Code,
      list: [
        { name: "Business", icon: Briefcase },
        { name: "Startups", icon: Rocket },
        { name: "Problem Solving", icon: Puzzle },
        { name: "UI/UX Thinking", icon: PenTool },
        { name: "Leadership", icon: Users2 },
        { name: "Time Management", icon: AlarmClock },
      ]
    },
    {
        category: "Languages",
        icon: Languages,
        list: [
            { name: "Java", icon: Coffee },
            { name: "HTML", icon: Code },
            { name: "CSS", icon: Palette },
            { name: "JavaScript", icon: Braces },
            { name: "TypeScript", icon: Braces },
            { name: "Python(Basic)", icon: Pilcrow },
        ],
    },
    {
        category: "Databases",
        icon: Database,
        list: [
            { name: "MySQL", icon: Database },
            { name: "MongoDB", icon: Database },
            { name: "Firebase", icon: Database },
        ],
    },
    {
      category: "Tools & Soft Skills",
      icon: Wrench,
      list: [
        { name: "GitHub", icon: Github },
        { name: "Figma", icon: Figma },
        { name: "Tableau", icon: BarChart },
        { name: "PowerBI", icon: BarChart },
        { name: "Canva", icon: PenTool },
        { name: "Teamwork", icon: Users },
      ]
    }
  ],
  
  projects: [
    {
      title: "Quiz Master",
      imageIds: ["quiz-master-1", "quiz-master-2"],
      description: "A dynamic quiz application that allows users to test their knowledge on various subjects. Features include timed quizzes, score tracking, a leaderboard, and smooth, responsive quiz interactions for an engaging learning experience.",
      technologies: ["HTML", "CSS", "JS", "Firebase", "Tailwind CSS"],
      sourceCodeUrl: "https://github.com/ayshu717/Quiz-Master",
      liveUrl: "https://quiz-master-sandy.vercel.app/"
    },
    {
      title: "Leave Management System",
      imageIds: ["lms-1"],
      description: "A role-based leave automation platform for Employees, Managers, and HR. I worked on the frontend, building responsive dashboards, smooth leave workflows, and real-time update interfaces for a clear and user-friendly experience.",
      technologies: ["HTML", "CSS", "JS", "FastAPI", "Python", "MongoDB"],
      sourceCodeUrl: "https://github.com/d-ayush/Leave-Management-System",
      liveUrl: ""
    },
    {
      title: "PRAKRITI",
      imageIds: ["prakriti-1"],
      description: "An AI-enabled waste-management platform designed to classify waste, display analytics, and streamline collection processes. Still in development, featuring work on dashboard UI, interactive components, and integration with AI prediction modules.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase", "Tailwind CSS"],
      sourceCodeUrl: "https://github.com/d-ayush/PRAKRITI",
      liveUrl: ""
    }
  ],
  
  cocurricular: [
    {
      title: "StillMeStore Clothing",
      imageIds: ["stillme-1", "stillme-2"],
      description: "A custom apparel brand crafting personalized t-shirts, hoodies, and jackets. From individual designs to bulk college & sports orders, we bring ideas to life with quality and creativity.",
      technologies: ["Communication", "Digital Marketing", "Designing", "Account Handling"],
      instagramUrl: "https://www.instagram.com/stillmestore"
    },
    {
      title: "Flora Flicks",
      imageIds: ["flora-flicks-1", "flora-flicks-2", "flora-flicks-3"],
      description: "Framing the whispers of nature one cloud, one sunset, one moment at a time. A space for Photography, Cinematic Shots, and Cloud Chasing. Reached 500K+ people with visuals of sunsets, silence, and soft hues.",
      technologies: ["Photography", "Cinematic Shots", "Cloud Chasing", "Digital StoryTelling", "Editing"],
      instagramUrl: "https://www.instagram.com/floraflicks_/"
    }
  ],

  footer: {
    quickLinks: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" }
    ]
  }
};
