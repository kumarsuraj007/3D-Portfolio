import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Nodejs Developer",
      icon: backend,
    },
    {
      title: "Fresher",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Node.js Developer",
      company_name: "Saffron Chariot",
      // icon: Saffron,
      iconBg: "#383E56",
      date: "July 2022 - December 2022",
      points: [
        "Developing web applications using React.js, Express.js and other related technologies.",
        "Experience in designing and implementing RESTful APIs for communication between front-end and back-end systems",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Basic knowledge of using version control systems like Git to collaborate on codebases and track changes",
      ],
    },
    {
      title: "Training",
      company_name: "C-dac",
      // icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - May 2023",
      points: [
        "Learned about typescript, javascript and angular.",
        "Have basic knowledge of angular and typescript.",
        "Created projects related to javascript and angular .",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Blog Site",
      description:
        "Web-based platform that allows users to upload, delete, and and see the blog page created by another user. This projects also have authentication feature.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      // image: carrent,
      source_code_link: "https://github.com/kumarsuraj007/Blog-Site-MERN",
    },
    {
      name: "Ecommerce",
      description:
        "Web application with the feature of oAuth authentication and payment method.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      // image: jobit,
      source_code_link: "https://github.com/kumarsuraj007/Ecommerce",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };