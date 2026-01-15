// data.js - Resume Data

const resumeData = {
    skills: [
        {
            category: "Frontend Core",
            icon: "💻",
            skills: [
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 90 },
                { name: "JavaScript (ES6+)", level: 88 },
                { name: "TypeScript", level: 80 },
                { name: "Responsive Design", level: 92 }
            ]
        },
        {
            category: "Frameworks & Libraries",
            icon: "⚛️",
            skills: [
                { name: "React.js", level: 85 },
                { name: "Tailwind CSS", level: 90 }
            ]
        },
        {
            category: "Tools & Workflow",
            icon: "🛠️",
            skills: [
                { name: "Git/GitHub", level: 87 },
                { name: "VS Code", level: 93 },
                { name: "Chrome DevTools", level: 85 },
                { name: "NPM", level: 82 },
                { name: "Webpack", level: 75 }
            ]
        },
        {
            category: "Backend Basics",
            icon: "🔧",
            skills: [
                { name: "Node.js", level: 78 },
                { name: "RESTful APIs", level: 83 },
                { name: "MySQL", level: 70 }
            ]
        }
    ],

    experience: [
        {
            title: "Web Developer Intern",
            company: "Hex Software (Remote)",
            duration: "2025 – Present",
            technologies: ["HTML", "CSS", "JavaScript"],
            achievements: [
                "Developed responsive and scalable web interfaces using HTML, CSS, and JavaScript while following modern UI and frontend development standards.",
                "Implemented mobile-first layouts and accessibility best practices, improving usability and consistency across multiple device sizes.",
                "Built interactive UI components and optimized user flows to enhance engagement and frontend performance.",
                "Applied clean code principles and reusable component patterns to ensure maintainable and scalable frontend architecture."
            ]
        },
        {
            title: "Web Development Intern",
            company: "Intern Certify, Mumbai",
            duration: "May 2025 – July 2025",
            technologies: ["React.js", "JavaScript", "REST APIs"],
            achievements: [
                "Built reusable React components using component-based architecture, improving development efficiency and code maintainability.",
                "Integrated RESTful APIs and implemented client-side validation to support dynamic and interactive user experiences.",
                "Optimized frontend performance through lazy loading and efficient state management.",
                "Conducted cross-browser testing and resolved UI inconsistencies across Chrome, Firefox, and Safari."
            ]
        }
    ],

    projects: [
        {
            title: "Crypto Trade Analytics Dashboard",
            date: "March 2025 – April 2025",
            technologies: ["JavaScript", "Data Visualization", "UI Design"],
            description: "Designed and developed a real-time crypto analytics dashboard to visualize cryptocurrency price trends and market movements.",
            highlights: [
                "Implemented interactive charts and well-structured layouts to simplify complex trading data for better decision-making.",
                "Focused on clear data representation using visual hierarchy and responsive design principles.",
                "Optimized the dashboard for desktop and mobile devices, ensuring a seamless and consistent user experience."
            ]
        },
        {
            title: "Cybersecurity Platform UI Clone",
            date: "February 2025 – March 2025",
            technologies: ["HTML", "CSS", "JavaScript"],
            description: "Built a modern dashboard UI inspired by real-world cybersecurity platforms to simulate professional-grade interfaces.",
            highlights: [
                "Designed reusable card-based components for challenges, labs, and community modules to improve scalability.",
                "Applied consistent spacing, typography, and layout systems to enhance visual clarity and usability.",
                "Ensured accessibility-friendly design choices and cross-device responsiveness for a polished UI experience."
            ]
        }
    ],

    certifications: [
        {
            icon: "🎓",
            title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
            issuer: "Oracle",
            date: "September 2025",
            description: "Validated expertise in generative AI fundamentals, OCI AI services, model lifecycle concepts, and enterprise-grade AI deployment strategies."
        },
        {
            icon: "☁️",
            title: "Introduction to Generative AI",
            issuer: "Google Cloud",
            date: "June 2025",
            description: "Learned core generative AI concepts including LLMs, prompt design, use cases, and responsible AI practices in cloud-based environments."
        },
        {
            icon: "👁️",
            title: "Build a Computer Vision App with Azure Cognitive Services",
            issuer: "Microsoft",
            date: "December 2025",
            description: "Developed computer vision solutions using Azure Cognitive Services, implementing image analysis workflows and AI-powered vision features."
        },
        {
            icon: "🐍",
            title: "IBM Python 101 for Data Science",
            issuer: "Cognitive Class",
            date: "October 2025",
            description: "Built a strong foundation in Python for data science, covering data structures, control flow, and basic data manipulation techniques."
        },
        {
            icon: "💼",
            title: "Accenture Nordics Software Engineering Job Simulation",
            issuer: "Forage",
            date: "September 2025",
            description: "Simulated real-world software engineering tasks involving frontend and backend development, debugging, and solution design in a professional environment."
        }
    ]
};