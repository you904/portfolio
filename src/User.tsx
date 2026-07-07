import {
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";
const Info = {
  name: "Syed Mutahir Riaz",
  stack: [
    "Data Scientist",
    "AI Engineer",
    "ML Engineer",
  ],
  bio: `
  I work across the full spectrum of data-driven systems, from raw data to deployable intelligent solutions. I build models that handle diverse data types including structured data, text, images, audio, and video, with a focus on scalability and real-world impact.

My work spans predictive modeling, computer vision, voice analysis, retrieval-based systems, and AI-driven automation. I am comfortable working with large, complex datasets and turning them into actionable intelligence. My goal is to move toward AI research and contribute to building more advanced and capable intelligent systems.
`,
};

const ProjectInfo = [
  {
    title: "Retail Sales Forecasting (10M Dataset)",
    desc: "Built a large-scale forecasting pipeline on a 10M-row dataset. Performed heavy EDA, handled sparsity and outliers, and engineered lag, rolling, and trend features. Applied time-aware validation and backtesting, achieving MAE of 1.05 with stable performance.",
    image: "https://res.cloudinary.com/dtzqtpq3o/image/upload/v1783417757/retail_ml_ebe5ay.jpg",
    live: false,
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "XGBoost",
      "Time Series",
      "Feature Engineering",
      "EDA",
      "Forecasting",
      "Backtesting"
    ],
    link: "#",
    github: "#",
  },
  {
    title: "RAG System with Local LLM Optimization",
    desc: "Built a Retrieval-Augmented Generation system using research papers and custom data. Optimized pipeline by chunking, structured extraction, embedding improvements, and context reranking. Reduced response time from 10 minutes to under 10 seconds.",
    image: "https://res.cloudinary.com/dtzqtpq3o/image/upload/v1783417758/rag_system_dtaevw.jpg",
    live: false,
    technologies: [
      "Python",
      "LLM",
      "RAG",
      "Embeddings",
      "SQLite",
      "Vector Search",
      "Prompt Engineering",
      "AI Agents"
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Crime Forecasting System (1M+ Records)",
    desc: "Time-series forecasting system built on 1M+ real-world crime records. Performed full data audit, anomaly detection, and feature engineering including lag and seasonal signals. Evaluated using residual analysis and forecasting stability.",
    image: "https://res.cloudinary.com/dtzqtpq3o/image/upload/v1783417757/crime_ml_fahldl.jpg",
    live: false,
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Time Series",
      "Feature Engineering",
      "EDA"
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Airbnb Occupancy Prediction",
    desc: "End-to-end ML pipeline predicting Airbnb occupancy using real-world data. Included EDA, feature engineering, Random Forest modeling, and SHAP explainability for business insights.",
    image: "https://res.cloudinary.com/dtzqtpq3o/image/upload/v1783417757/airbnb_ml_wv2tfm.jpg",
    live: false,
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Random Forest",
      "EDA",
      "Feature Engineering",
      "SHAP"
    ],
    link: "#",
    github: "#",
  },
  {
    title: "AI vs Human Voice Detection",
    desc: "Deep learning system to classify AI vs human speech using spectrograms, Wav2Vec2 embeddings, CNNs, and LightGBM. Focused on generalization and robustness.",
    image: "https://res.cloudinary.com/dtzqtpq3o/image/upload/v1783417758/voice_ai_nwh0j1.png",
    live: false,
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Wav2Vec2",
      "CNN",
      "LightGBM",
      "Audio Processing"
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Multi-Human Tracking System",
    desc: "Real-time computer vision system for multi-person detection and tracking using live camera feeds with scalable tracking algorithms.",
    image: "https://res.cloudinary.com/dtzqtpq3o/image/upload/v1783417758/cv_tracking_t9ohkj.png",
    live: false,
    technologies: [
      "Python",
      "Computer Vision",
      "OpenCV",
      "Object Detection",
      "Tracking"
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Gracious Global Luxembourg (Charity Platform)",
    desc: "Developed a scalable multi-language charity platform supporting international donations across multiple regions. Implemented secure payment flows, regional adaptability, and strong data privacy practices. Focused on accessibility, performance, and trust-driven user experience for global donors.",
    image: "https://res.cloudinary.com/dtzqtpq3o/image/upload/v1783417761/Gracious_Global_dzniyt.png",
    live: true,
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "i18n",
      "Payment Integration",
      "Data Privacy",
      "API Design"
    ],
    link: "http://gracious-world.vercel.app/en/testing-lang",
    github: "http://gracious-world.vercel.app/en/testing-lang",
  },
  {
    title: "BlueOcean Website (UAE)",
    desc: "Built a full-featured e-commerce platform for a UAE-based travel brand, featuring immersive 3D product interactions using Three.js and GSAP animations. Developed a custom admin panel for product and order management, delivering a visually engaging and high-performance shopping experience.",
    image: "https://res.cloudinary.com/dtzqtpq3o/image/upload/v1783417757/blueOcean_atwqnd.png",
    live: true,
    technologies: [
      "Next.js",
      "Three.js",
      "GSAP",
      "React",
      "Admin Panel",
      "Node.js",
      "MongoDB",
      "UI/UX"
    ],
    link: "https://blue-ocean-deploy.vercel.app/",
    github: "https://blue-ocean-deploy.vercel.app/",
  },
  {
    title: "World Cargo Services Pakistan",
    desc: "Engineered a web platform for a Pakistan-based cargo company to manage shipments, track deliveries, and streamline logistics operations. Designed intuitive dashboards and optimized workflows for real-time tracking and operational efficiency.",
    image: "https://res.cloudinary.com/dtzqtpq3o/image/upload/v1783417763/WCS_Pakistan_faacyg.png",
    live: true,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "Dashboard UI",
      "Authentication",
      "Logistics Systems"
    ],
    link: "https://www.wcspakistan.com/",
    github: "https://www.wcspakistan.com/",
  }
];

const skillsData = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Deep Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "NLP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Computer Vision", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "RAG Systems", icon: "https://cdn.simpleicons.org/openai" },
  { name: "AI Agents", icon: "https://cdn.simpleicons.org/robotframework" },
  { name: "Data Analysis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "Feature Engineering", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Model Training", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "Model Deployment", icon: "https://cdn.simpleicons.org/docker" },
  { name: "MLOps", icon: "https://cdn.simpleicons.org/kubernetes" },
  { name: "Time Series", icon: "https://cdn.simpleicons.org/plotly" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" }
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
    date: "Feb 2024 - Dec 2027",
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
