import React from "react";
import { LuGraduationCap, LuSchool, LuSchool2 } from "react-icons/lu";
import redditProject from "@/public/redditProject.png";
import meeshoProject from "@/public/meeshoProject.png";
import iNotebookProject from "@/public/iNotebookProject.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationalData = [
  {
    title: "Padmabhooshan Vasantraodada Patil Institute Of Technology",
    location: "Sangli,Maharashtra",
    description:
      "Bachelor of Technology, Electronics and Telecommunication Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
  {
    title: "Sangli Highschool and Junior College , Sangli",
    location: "Sangli,Maharashtra",
    description: "Intermediate (Class XII), Science",
    icon: React.createElement(LuSchool2),
    date: "2016 - 2017",
  },
  {
    title: "Sangli Highschool, Sangli.",
    location: "Sangli,Maharashtra",
    description: "Matriculation (Class X), Science",
    icon: React.createElement(LuSchool),
    date: "2014-2015",
  },
] as const;

export const projectsData = [
  {
    title: "Reddit clone website",
    description:
      "This is basically a social media app where users can post after logging in and can upvote and downvote with their specific counts.",
    tags: ["React", "JavaScript", "Bootstrap"],
    imageUrl: redditProject,
  },
  {
    title: "Meesho E-commerse clone website",
    description:
      "The Project is clone of Meesho Ecommerce platform.Where you can filter products in categories.",
    tags: ["React", "JavaScript", "Bootstrap"],
    imageUrl: meeshoProject,
  },
  {
    title: "iNoteBook web application",
    description:
      "A web app for storing note for particular user.Only authorised person can see there note , not any other user.",
    tags: ["React", "JavaScript", "Bootstrap", "MongoDB", "Node.js"],
    imageUrl: iNotebookProject,
  },
] as const;

export const skillsData = [
  "Java",
  "Amazon Web Service",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "Redux",
  "Framer Motion",
] as const;
