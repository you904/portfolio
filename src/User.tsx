import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
const Info = {
  name: "Syed Mutahir Riaz",
  stack: [
    "Backend Developer",
    "Python Programmer",
    "Open Source founder"
  ],
  bio: "Passionate backend developer skilled in the MERN stack, especially Node.js. I thrive in team projects, focusing on backend work. My goal is to help organizations connect to the internet, driven by a love for problem-solving. Achievements include a lot of projects but specially building a Twitter backend clone and starting an open-source project.",
};

const ProjectInfo = [
  {
    title: "Entlux E-commerce Store",
    desc: "Developed a full-featured e-commerce store for a UAE-based client to sell stationeryitems. Integrated Stripe for secure payments and implemented robust state management for efficient data handling. Designed an admin panel/dashboard for seamless productmanagement and order tracking.",
    image:
      "enlc.PNG",
    live: false,
    technologies: [
      "Next.js",
      "antd",
      "Order Management",
      "Stripe",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Nodemailer",
      "BCrypt",
      "RESTful API",
      "OTP"
    ],
    link: "https://entlux.com",
    github: "https://github.com/mutahir-riaz",
  },
  {
    title: "CodeCache",
    desc: "An open-source project built with React, Tailwind CSS, and Firebase.Developed a web application that allows users to securely store and access their code from anywhere. Implemented a responsive and intuitive UI, enabling seamless code management and retrieval.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-9e397.appspot.com/o/profile%2Fcodecache.JPG?alt=media&token=c854177f-c69a-47ce-b738-46469c51c291",
    live: true,
    technologies: ["React", "Firebase", "Tailwindcss"],
    link: "https://fir-react-9e397.web.app/",
    github: "https://github.com/you904/code-cache-opensource",
  },
  {
    title: "Chat App",
    desc: "This is a modern, real-time chat application built with React, Firebase, and Tailwind CSS. The app allows users to follow and unfollow other users and send direct messages instantly. It features a sleek, responsive design, ensuring a seamless experience across devices. Powered by Firebase, it delivers fast and reliable real-time communication.",
    image:
      "chat2.JPG",
    live: true,
    technologies: [
      "react",
      ' firebase',
      ' material-ui', "chat-application",
      " formik"," tailwindcss"
    ],
    link: "https://chatapp-beta-gold.vercel.app/",
    github: "https://github.com/mutahir-riaz/chat-app.git",
  },
  {
    title: "BISE Mirpurkhas website ",
    desc: "A website clone of BISE mirpur .",
    image:
      "bisesite.PNG",
    live: true,
    technologies: [
      "Nextjs","Tailwindcss","shdcn"
    ],
    link: "https://bise-mirpur.vercel.app/",
    github: "https://github.com/you904/BISE_MIRPUR",
  },
  {
    title: "Tasty Resturant website ",
    desc: "A Website Built for Tasty Resturant. include a landing page, menu, and About us , reservation form, responsive design.",
    image:
      "webdesign.PNG",
    live: true,
    technologies: [
      "Nextjs","Tailwindcss","shdcn","antd"
    ],
    link: "https://food-web-beryl.vercel.app/",
    github: "https://food-web-beryl.vercel.app/",
  },
  {
    title: "NewsWeek",
    desc: "Stay informed with a captivating news app built with React and the News API. Explore news by category, enjoy infinite scroll, and experience seamless navigation.",
    image:
      "newsweek.PNG",
    live: false,
    technologies: [
      "react","News-api"
    ],
    link: "https://github.com/mutahir-riaz/News-Week",
    github: "https://github.com/mutahir-riaz/News-Week",
  },
  {
    title: "backend-template",
    desc: "This command-line application simplifies the process of setting up a new backend project by initializing a Node.js project, installing essential packages, and creating a structured folder layout with necessary configuration files.",
    image:
      "backendtemp.png",
    live: false,
    technologies: ["JavaScript", "Node.js", "Commander"],
    link: "https://github.com/mutahir-riaz/backend-template",
    github: "https://github.com/mutahir-riaz/backend-template",
  },
  
  {
    title: "Twitter",
    desc: "Backend for a Twitter clone built with Node.js, featuring API routes for user, tweet, and comment management. Implements JWT for secure authentication, role-based access control, and real-time chat with Socket.io. Includes schemas for users, tweets, and comments. Nodemailer handles email verification and OTP-based password resets. Designed for scalability, security, and real-time user interaction.",
    image:
      "backendtemp.png",
    live: false,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Nodemailer",
      "BCrypt",
      "RESTful API",
      "OTP"
    ],
    link: "https://github.com/mutahir-riaz/Twitter",
    github: "https://github.com/mutahir-riaz/Twitter",
  },
  
  
];

const skillsData = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "NextJS",
  "Tailwind",
  "MongoDB",
  "Git",
  "vercel",
  "Bootstrap",
  "Firebase",
  "MaterialUI",
  "Node",
  "Express",
  "Jwt",
  "Otp",
  "Zustand"
];

// AVAILABLE SKILLS



const socialLinks = [
  { link: "https://github.com/mutahir-riaz", icon: IconBrandGithub },
  
  {
    link: "https://www.instagram.com/mutah_irriaz/",
    icon: IconBrandInstagram,
  }
];

const ExperienceInfo = [
  {
    role: "Junior Web Developer",
    company: "Wipro",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/330px-Wipro_Primary_Logo_Color_RGB.svg.png",
    date: "Jul 2023 - Jan 2024",
    desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
    skills: [
      "HTML/CSS",
      "Javascript",
      "Typescript",
      "React",
      "Node,js",
      "Express.js",
      "RestFull API's",
      "MongoDB",
    ],
  },
];

export const EducationInfo = [
  {
    id: 0,
    img: "uos.png",
    school: "University of Sindh - Jamshoro Sindh",
    date: "Feb 2024 - Feb 2028",
    desc: "I am currently pursuing a Bachelor of Science in Data Science and Programming at the University of Sindh. With a strong foundation in data analysis, statistical modeling, and programming, I am passionate about leveraging data to drive impactful solutions. My academic journey has equipped me with skills in Python, machine learning technologies. I am eager to apply my knowledge to real-world challenges and continue learning in the dynamic field of data science and Software Development",
    degree: "Bachelor of Science - Data Science and Programming",
  },
  {
    id: 1,
    img: "GCUH.jpg",
    school: "Government College University of Hyderabad",
    date: "jan 2021 - Apr 2023",
    desc: "I completed my class 12 education at Government College University of Hyderabad, where I studied Pre-Engineering.",
    degree: "Higher Secondary Certificate (Class 12)",
  },
  {
    id: 2,
    img: "te.jpeg",
    school: "The Educator's School",
    date: "Jan 2019 - Dec 2021",
    desc: "I completed my class 10 education at The Educator's School, where I studied Science ",
    degree: "Secondary School Certificate (Class 10)",
  },
];

export { Info, ProjectInfo, socialLinks, skillsData, ExperienceInfo };
