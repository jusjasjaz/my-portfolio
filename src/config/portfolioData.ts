import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://satya00089.github.io/portfolio", // update if you have a custom domain
    pdf: "/resume.pdf",
  },
  personal: {
    name: "Jazmine Lean Dimagiba",
    title: "Junior Frontend Developer",
    headline: "React Native · React · Angular · Ionic",
    // avatar can be a string, an object with { url, label }, or an array of those.
    avatar: [
      // use public root path so Vite serves the static asset from /public/profile.jpg
      { url: "./profile.jpg", label: "" },
      { url: "./profile1.jpg", label: "" },
    ],
    summary:
      "Junior Frontend Developer with 3 years of experience building responsive and user-friendly web applications. I work primarily with React Native and TypeScript, creating reusable components and improving performance and accessibility. I’m comfortable contributing to projects from design to deployment.",
    hero: {
      summary:
        "Junior Frontend Developer (React, Angular, TypeScript). I build responsive and user-friendly interfaces, focusing on clean component structure, performance, accessibility, and integrating REST APIs.",
    },
    contact: {
      email: "jazminelean.dimagiba@gmail.com",
      phone: "+63 9164 109 502",
      location: "Malolos, Bulacan",
      website: "https://satya00089.github.io/portfolio",
      socials: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/jazmine-lean-dimagiba/",
          icon: "SiLinkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/jusjasjaz",
          icon: "SiGithub",
        },
      ],
    },
  },
  highlights: [
    "Jr. Frontend Developer at Xentra Solutions (Jun 2023 - Present)",
    "3 years focused on React/React Native",
    "Experienced with frontend development using React, TypeScript, Tailwind CSS, and REST API integration",
  ],
  skills: [
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          level: 90,
          icon: "SiReact",
          category: "frontend",
          years: 2,
          note: "Used in production since 2024",
        },
        {
          name: "React Native",
          level: 90,
          icon: "SiReact",
          category: "frontend",
          years: 2,
          note: "Used in production since 2024",
        },
        {
          name: "Angular",
          level: 90,
          icon: "SiAngular",
          category: "frontend",
          years: 3,
          note: "Used in production since 2023",
        },
        {
          name: "Ionic Framework",
          level: 90,
          icon: "SiIonic",
          category: "frontend",
          years: 3,
          note: "Used in production since 2023",
        },
        {
          name: "TypeScript",
          level: 85,
          icon: "SiTypescript",
          category: "frontend",
          years: 3,
          note: "Used in production since 2023",
        },
        {
          name: "JavaScript",
          level: 70,
          icon: "SiJavascript",
          category: "frontend",
          years: 5,
          note: "Used in college since 2021",
        },
        {
          name: "HTML5",
          level: 90,
          icon: "SiHtml5",
          category: "frontend",
          years: 5,
          note: "Used in college since 2021",
        },
        {
          name: "CSS3",
          level: 90,
          icon: "SiCss3",
          category: "frontend",
          years: 5,
          note: "Used in college since 2021",
        },
        {
          name: "Tailwind CSS",
          level: 80,
          icon: "SiTailwindcss",
          category: "frontend",
          years: 3,
          note: "Used in production since 2023",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Python",
          level: 88,
          icon: "SiPython",
          category: "backend",
          years: 1,
          note: "Used in college since 2022",
        },
        {
          name: "C++",
          level: 70,
          icon: "SiCplusplus",
          category: "backend",
          years: 2,
          note: "Used in college from 2019-2021",
        },
        {
          name: "Java",
          level: 70,
          icon: "SiJava",
          category: "backend",
          years: 1,
          note: "Used in college from 2020-2022",
        },
      ],
    },
    {
      title: "UI/UX Design",
      skills: [
        {
          name: "Figma",
          level: 85,
          icon: "SiFigma",
          category: "design",
          years: 3,
          note: "Used in production since 2023",
        },
        {
          name: "Adobe XD",
          level: 80,
          icon: "SiAdobexd",
          category: "design",
          years: 2,
          note: "Used in college from 2021-2023",
        },
        {
          name: "Photoshop",
          level: 50,
          icon: "SiAdobephotoshop",
          category: "design",
          years: 4,
          note: "Used in college from 2019-2023",
        },
      ],
    },
    {
      title: "Infrastructure & DevOps",
      skills: [
        {
          name: "AWS",
          level: 50,
          icon: "SiAmazonwebservices",
          category: "devops",
          years: 1,
          note: "Used in production since 2025",
        },
      ],
    },
    {
      title: "Other Tools",
      skills: [
        {
          name: "Git",
          level: 75,
          icon: "SiGit",
          category: "tooling",
          years: 3,
          note: "Used in production since 2023",
        },
        {
          name: "GitHub",
          level: 85,
          icon: "SiGithub",
          category: "tooling",
          years: 3,
          note: "Used in production since 2023",
        },
        {
          name: "Jira",
          level: 70,
          icon: "SiJira",
          category: "tooling",
          years: 3,
          note: "Used in production since 2023",
        },
        {
          name: "Confluence",
          level: 60,
          icon: "SiConfluence",
          category: "tooling",
          years: 3,
          note: "Used in production since 2023",
        },
        {
          name: "VS Code",
          level: 100,
          icon: "SiVisualstudio",
          category: "tooling",
          years: 7,
          note: "Used in college since 2019",
        },
        {
          name: "Xcode",
          level: 75,
          icon: "SiXcode",
          category: "tooling",
          years: 1,
          note: "Used in production since 2025",
        },
        {
          name: "Android Studio",
          level: 70,
          icon: "SiAndroidstudio",
          category: "tooling",
          years: 4,
          note: "Used in college since 2022",
        },
      ],
    },
  ],
  experience: [
    {
      id: "jr-fe-dev",
      title: "Junior Frontend Developer",
      company: "Xentra Infotech Solutions",
      location: "Malolos, Bulacan",
      date: { start: "2024-02", present: true },
      summary:
        "Focused on building mobile applications using React Native, developing responsive and user-friendly interfaces. Worked closely with backend teams to integrate APIs and ensure smooth app performance.",
      bullets: [
        "Developed mobile app features using React Native and TypeScript.",
        "Built reusable components and improved UI/UX for better user experience.",
        "Integrated REST APIs and handled state management within the application.",
        "Tested and debugged issues to ensure app stability across devices.",
        "Collaborated with designers and backend developers to deliver features on time.",
      ],
      tech: [
        "React Native",
        "TailwindCSS",
        "Jest",
        "TypeScript",
        "AWS",
        "Git",
        "Postman",
      ],
    },
    {
      id: "trainee-fe-dev",
      title: "Trainee Frontend Developer",
      company: "Xentra Infotech Solutions",
      location: "Malolos, Bulacan",
      date: { start: "2023-06", end: "2024-02" },
      summary:
        "Focused on building frontend applications using Angular(Web) and Ionic Angular(Mobile), developing mobile-friendly and responsive interfaces. Gradually transitioned to React-based development towards the end of the role.",
      bullets: [
        "Developed mobile and web UI features using Angular(Web) and Ionic Angular(Mobile).",
        "Built responsive layouts and components optimized for cross-platform use.",
        "Integrated frontend applications with backend APIs and handled data binding.",
        "Assisted in debugging and improving existing features based on team feedback.",
        "Gained initial experience with React and TypeScript in preparation for frontend transition.",
      ],
      tech: [
        "Angular", 
        "Ionic", 
        "TypeScript", 
        "TailwindCSS", 
        "Sass", 
        "Figma"
      ],
    },
    {
      id: "intern-ui-dev",
      title: "UI Developer (Intern)",
      company: "Xentra Infotech Solutions",
      location: "Malolos, Bulacan",
      date: { start: "2023-03", end: "2023-06" },
      summary:
        "Focused on UI development using Angular(Web) and Ionic Angular(Mobile), translating design mockups into responsive mobile and web interfaces.",
      bullets: [
        "Developed UI components using Angular(Web) and Ionic Angular(Mobile) based on design mockups.",
        "Implemented responsive layouts for mobile and web interfaces.",
        "Worked closely with designers to convert UI/UX requirements into functional screens.",
        "Ensured consistent styling and alignment across different screen sizes.",
        "Fixed UI issues and improved visual consistency of existing screens.",
      ],
      tech: [
        "Angular", 
        "Ionic", 
        "TypeScript", 
        "TailwindCSS", 
        "Sass", 
        "Figma"
      ],
    },
  ],
  projects: [
    {
      id: "learn-algo",
      title: "Learn Algo",
      description:
        "Interactive visualizations that transform abstract concepts into intuitive understanding. Watch sorting, searching, and ML algorithms execute step-by-step.",
      tags: ["Algorithms", "DSA", "ML", "AI", "Visualization", "Next.js"],
      image:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXpqYWFhbnBraWt3ZXhvajZsdjg5andyMGZzY2VibGg3bXE0MWxwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2PuPWxuLV1FGyh03Ja/giphy.gif",
      href: "https://www.learn-algo.com",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/satya00089/learn-algo",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: false,
    },
    {
      id: "landing-zone-orchestrator",
      title: "Landing Zone Orchestrator",
      description:
        "A production-ready platform that transforms cloud infrastructure provisioning from manual IaC coding to an intuitive, form-driven workflow. Built with React, FastAPI, and MongoDB to generate validated Terraform templates for AWS, Azure, and GCP. Features include schema-driven form builder for VPC, Subnets, IAM, and networking resources, real-time Terraform code generation and validation, JWT-based authentication, MongoDB storage for projects and templates, and multi-cloud support.",
      tags: [
        "Terraform",
        "IaC",
        "React",
        "FastAPI",
        "MongoDB",
        "AWS",
        "Azure",
        "Full Stack",
      ],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGtuYjY1emtsZmNjMXp1czdrdXR5bXE5ZDJheHVvZjY1azZxYnJieiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qzImRjQVb2OUI84mTt/giphy.gif",
      href: "https://orchestrator.next-zen.dev",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/satya00089/landing-zone-orchestrator-ui",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: true,
    },
    {
      id: "diagrammatic",
      title: "Diagrammatic",
      description:
        "Diagrammatic (System Design Playground): A component library and living documentation for a design system.",
      tags: ["System Design", "AI & ML", "React"],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTFnOGF3d3BodjFvY3NhanY5cnl5bmd4Z243aXB5M3hrOHg3d2tmeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WvzQektcJxs0oDFkHq/giphy.gif",
      href: "https://diagrammatic.next-zen.dev",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/satya00089/diagrammatic",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "tic-tac-toe-ai",
      title: "Tic Tac Toe AI",
      description:
        "A minimal Tic-Tac-Toe AI game built with Next.js to understand the Minimax algorithm.",
      tags: ["Next.js", "AI", "Game", "Minimax"],
      image:
        "https://raw.githubusercontent.com/satya00089/tic-tac-toe/main/public/tic-tac-toe.png",
      href: "https://satya00089.github.io/tic-tac-toe/",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/satya00089/tic-tac-toe",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: false,
    },
    {
      id: "mui-color-wheel",
      title: "MUI Color Wheel",
      description:
        "A Material-UI based color wheel component with real-time color picking.",
      tags: ["React", "Material-UI", "NPM Package", "Storybook"],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJxYjhmdTVjam41aWlzczZreGZ2eXc5eThjdDRpMXgxYzVuYTAzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tWnCyw4rmoFY8CmhLV/giphy.gif",
      href: "https://mui-color-wheel.vercel.app/",
      links: [
        {
          label: "Storybook",
          url: "https://mui-color-wheel.vercel.app/",
          icon: "SiStorybook",
        },
        {
          label: "NPM",
          url: "https://www.npmjs.com/package/mui-color-wheel",
          icon: "SiNpm",
        },
        {
          label: "GitHub",
          url: "https://github.com/satya00089/mui-color-wheel",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: true,
    },
    {
      id: "alochona",
      title: "Alochona",
      description:
        "Alochona is an experimental chatbot hosted on Hugging Face Spaces. It uses OpenAI under the hood for responses. This project was built as a way to explore chatbot UIs, Hugging Face deployment, and integrating OpenAI APIs.",
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmc5dDY1c2ZnOGs0ODF0eDkwbzBvMHZ2ZXJvYml2amRmdzN2dnZueSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7AFQj6uviWpwudbOWg/giphy.gif",
      href: "https://huggingface.co/spaces/satya00089/alochona",
      links: [
        {
          label: "Huggingface",
          url: "https://huggingface.co/spaces/satya00089/alochona/tree/main",
          icon: "SiHuggingface",
        },
        {
          label: "GitHub",
          url: "https://github.com/satya00089/alochona",
          icon: "SiGithub",
        },
      ],
      tags: ["Chatbot", "OpenAI", "Hugging Face", "Beginner Project"],
    },
    {
      id: "night-sky",
      title: "Night Skyline",
      description:
        "A breathtaking recreation of the city skyline under a starlit night sky, capturing the serene beauty and glowing atmosphere of the evening.",
      tags: ["React", "CSS"],
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2RjaHAxY3N3enY0d3RldWVpczg2ZTNzMHhsY2dpam0yYnp6bWh2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P2jddT5c9g9OeHI17p/giphy.gif",
      href: "https://satya00089.github.io/night-sky",
      links: [
        {
          label: "Watch",
          url: "https://www.loom.com/share/1516014366e34135a67f5dd4e551fec5",
          icon: "FaPlay",
        },
        {
          label: "GitHub",
          url: "https://github.com/satya00089/night-sky",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: true,
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      school: "Biju Patnaik University of Technology",
      date: "2013-2017",
    },
    {
      degree: "Higher Secondary",
      school: "Bellaguntha Science College",
      date: "2011-2013",
    },
    {
      degree: "High School",
      school: "G.T High School Bellaguntha",
      date: "2011",
    },
  ],
  certifications: [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2022",
      url: "https://www.credly.com/badges/56ba404b-b2ec-49d7-b869-d41c8c88d7b5",
    },
    {
      name: "Terraform Associate",
      issuer: "HashiCorp",
      date: "2023",
    },
  ],
  extras: {
    languages: [{ name: "English", level: "Native" }],
    interests: ["astronomy", "music"],
  },
};

// ---------- SMALL HELPERS ----------
export const tagColors: TagColors = {
  React: "bg-blue-100 text-blue-800",
  CSS: "bg-teal-100 text-teal-800",
  CSS3: "bg-teal-100 text-teal-800",
  Tailwind: "bg-teal-100 text-teal-800",
  Stripe: "bg-purple-100 text-purple-800",
  "Design System": "bg-yellow-100 text-yellow-800",
  D3: "bg-amber-100 text-amber-800",
  Realtime: "bg-green-100 text-green-800",
  Storybook: "bg-pink-100 text-pink-800",
  "NPM Package": "bg-red-100 text-red-800",
  "Material-UI": "bg-indigo-100 text-indigo-800",
  Chatbot: "bg-violet-100 text-violet-800",
  OpenAI: "bg-gray-100 text-gray-800",
  "Hugging Face": "bg-orange-100 text-orange-800",
  Beginner: "bg-cyan-100 text-cyan-800",
  "Beginner Project": "bg-cyan-100 text-cyan-800",
  // Landing Zone Orchestrator tags
  FastAPI: "bg-teal-500 text-white",
  MongoDB: "bg-green-600 text-white",
  Terraform: "bg-purple-600 text-white",
  IaC: "bg-indigo-500 text-white",
  AWS: "bg-orange-500 text-white",
  Azure: "bg-blue-600 text-white",
  GCP: "bg-red-600 text-white",
  Algorithms: "bg-blue-500 text-blue-100",
  DSA: "bg-purple-300 text-purple-900",
  ML: "bg-blue-200 text-blue-800",
  AI: "bg-gray-200 text-gray-800",
  "AI & ML": "bg-amber-100 text-amber-900",
  Visualization: "bg-orange-100 text-purple-900",
  "Next.js": "bg-black text-white",
  "Full Stack": "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
};
