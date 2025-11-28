import { Award, Briefcase, Code, Database, FileJson2, Github, Wrench } from 'lucide-react';

export const portfolioData = {
  name: "Ayush Dhanawade",
  title: "Computer Engineering'27 | Student at PVGCOET | Full Stack Developer...",
  bio: "A curious learner and a passionate developer, exploring the endless possibilities of technology. I am driven by the desire to build things that are both useful and beautiful.",
  
  contact: {
    email: "ayushdhanawade33@gmail.com",
    phone: "+91 1234567890",
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
      icon: Award,
      list: [
        { name: "Full Stack Development", icon: Briefcase },
        { name: "Web Development", icon: Code },
        { name: "UI/UX Design", icon: FileJson2 }
      ]
    },
    {
      category: "Languages",
      icon: Code,
      list: [
        { name: "JavaScript", icon: Code },
        { name: "TypeScript", icon: Code },
        { name: "Python", icon: Code },
        { name: "Java", icon: Code },
        { name: "C++", icon: Code }
      ]
    },
    {
      category: "Databases",
      icon: Database,
      list: [
        { name: "MongoDB", icon: Database },
        { name: "MySQL", icon: Database },
        { name: "Firebase", icon: Database }
      ]
    },
    {
      category: "Tools & Soft Skills",
      icon: Wrench,
      list: [
        { name: "Git & GitHub", icon: Github },
        { name: "Node.js", icon: Code },
        { name: "React", icon: Code },
        { name: "Next.js", icon: Code },
        { name: "Teamwork", icon: Briefcase }
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
      title: "Flora Flicks",
      imageIds: ["flora-flicks-1", "flora-flicks-2", "flora-flicks-3"],
      description: "My personal photography page where I share my passion for capturing the beauty of nature, especially flora. It's a visual journey through my lens.",
      technologies: ["Photography", "Lightroom", "Instagram"],
      instagramUrl: "https://www.instagram.com/floraflicks_/"
    }
  ],

  footer: {
    quickLinks: [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" }
    ]
  }
};
