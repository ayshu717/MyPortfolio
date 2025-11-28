import { Award, Briefcase, Code, Database, FileJson2, Github, Users, Wrench, Rocket, Coffee, BarChart, Figma, PenTool, Camera, Film, BrainCircuit, Palette, Puzzle, Clock, Users2, Brain, AlarmClock, Pilcrow, Languages, Braces } from 'lucide-react';

export const portfolioData = {
  name: "Ayush Dhanawade",
  title: "Computer Engineering'27 | Student at PVGCOET | Frontend Developer | Photographer @ Flora Flicks | Building @stillmestore",
  bio: "A curious learner and a passionate developer, exploring the endless possibilities of technology. I am driven by the desire to build things that are both useful and beautiful.",
  
  contact: {
    email: "717ayush@gmail.com",
    phone: "9322022740",
    address: "Pune, Maharashtra, India",
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID_HERE"
  },

  socials: {
    github: "https://github.com/d-ayush",
    linkedin: "https://www.linkedin.com/in/ayush-dhanawade-089602288/",
    instagram: "https://www.instagram.com/d_ayush_33/",
  },

  resumeUrl: "/Ayush_Dhanawade_Resume.pdf",

  about: {
    title: "About Me",
    description: "I am a Computer Engineering student at Pune Vidhyarthi Griha's College of Engineering and Technology. My journey in the world of programming started with a simple 'Hello, World!' and has since grown into a full-fledged passion for building scalable and user-friendly web applications. I thrive on challenges and am constantly seeking to learn new technologies and improve my craft. When I'm not coding, you can find me behind the lens, capturing moments, or exploring new creative endeavors."
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
      description: "A dynamic quiz application that allows users to test their knowledge on various subjects. Features include timed quizzes, score tracking, and a leaderboard.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "MongoDB"],
      sourceCodeUrl: "https://github.com/d-ayush/Quiz-Master",
      liveUrl: "https://quiz-master-sandy.vercel.app/"
    },
    {
      title: "Leave Management System",
      imageIds: ["lms-1"],
      description: "A comprehensive system for managing employee leave requests. It streamlines the process of requesting, approving, and tracking leaves within an organization.",
      technologies: ["Java", "Swing", "MySQL"],
      sourceCodeUrl: "https://github.com/d-ayush/Leave-Management-System",
      liveUrl: ""
    },
    {
      title: "PRAKRITI",
      imageIds: ["prakriti-1"],
      description: "An initiative website aimed at promoting environmental awareness. The site features articles, event information, and ways for users to get involved in conservation efforts.",
      technologies: ["HTML", "CSS", "JavaScript"],
      sourceCodeUrl: "https://github.com/d-ayush/PRAKRITI",
      liveUrl: "https://d-ayush.github.io/PRAKRITI/"
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
      technologies: ["Photography", "Cinematic Shots", "Cloud Chasing"],
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