// All portfolio content lives here so components stay simple
// and content can be updated in one place.

export const personalInfo = {
  name: "Siddharth Rathod",
  role: "Frontend Developer",
  tagline:
    "I build responsive, user-friendly and modern web applications using HTML, CSS, JavaScript and React.",
  location: "Ahmedabad, Gujarat, India",
  email: "siddharthrathod0557@gmail.com",
  phone: "+91 9712531868",
  github: "https://github.com/2101031000201-siddharth",
  linkedin: "https://linkedin.com/in/siddharth-rathod-56960a283",
  experience: "React.js Intern @ Maxgen Technologies",
  availability: "Full-time",
};

export const about = {
  paragraph:
    "I'm a passionate Frontend Developer with a strong foundation in building responsive and interactive web applications. I enjoy turning ideas into clean, efficient code and modern user interfaces. I'm a quick learner, problem solver, and always eager to learn new technologies and improve my skills.",
};

export const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Vite",
  "Tailwind CSS",
  "SQL",
  "Git",
  "GitHub",
  "Python",
  "Responsive Design",
];

export const experience = [
  {
    role: "React.js Intern",
    company: "Maxgen Technologies Pvt. Ltd.",
    duration: "Jan 2025 – Jul 2025",
    points: [
      "Developed responsive web applications using React.js, JavaScript, HTML, and CSS.",
      "Built reusable React components to improve code maintainability and development efficiency.",
      "Participated in code reviews and gained experience with Git and GitHub.",
      "Implemented UI features and optimized application performance.",
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce website built using React.js with product search, sorting, and reusable components.",
    tags: ["React.js", "JavaScript"],
    liveLink: "https://projects-seven-jade.vercel.app",
    githubLink: "https://github.com/2101031000201-siddharth",
    image: `${import.meta.env.BASE_URL}screenshots/ecommerce.png`,
  },
  {
    title: "Rock Paper Scissors Game",
    description:
      "A fun interactive game built using HTML, CSS, and JavaScript with random computer choice generation and score tracking.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://projects-ruvf.vercel.app",
    githubLink: "https://github.com/2101031000201-siddharth",
    image: `${import.meta.env.BASE_URL}screenshots/rockpaperscissors.png`,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website to showcase my skills, projects, and contact information to potential employers.",
    tags: ["React.js", "Tailwind CSS"],
    liveLink: "https://projects-mems.vercel.app",
    githubLink: "https://github.com/2101031000201-siddharth",
    image: `${import.meta.env.BASE_URL}screenshots/portfolio.png`,
  },
];

export const education = [
  {
    degree: "Bachelor of Technology, Information Technology",
    school: "Silver Oak University",
    duration: "2021 - 2026",
    score: "CGPA: 8.16",
  },
  {
    degree: "Higher Secondary (Science - Group A)",
    school: "Vidhyanagar School",
    duration: "May 2021",
    score: "",
  },
];
