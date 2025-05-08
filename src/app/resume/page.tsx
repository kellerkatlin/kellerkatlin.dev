"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAngular,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
// about data
type About = {
  title: string;
  description: string;
  info: {
    fieldName: string;
    fieldValue: string;
  }[];
};

const about: About = {
  title: "About Me",
  description: `I am a full-stack developer with a passion for creating beautiful and functional web applications. I have experience working with a variety of technologies, including HTML, CSS, JavaScript, React and Node.js. I am always looking to learn new things and improve my skills, and I am excited to take on new challenges and projects.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Keller Katlin",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+51) 935 264 473",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Peruvian",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "kellerkatlin.k@gmail.com",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Spanish",
    },
  ],
};

// experience data

type Experience = {
  icon: string;
  title: string;
  description: string;
  items: {
    position: string;
    company: string;
    duration: string;
    description: string;
  }[];
};

const experience: Experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: `I have worked on a variety of projects, both independently and as part of a team. Here are some of the projects I have worked on:`,
  items: [
    {
      position: "Full Stack Developer",
      company: "Universidad Nacional de San Martion",
      duration: "2023 - 2023",
      description: `I developed a university social responsibility management system as part of a team, using Next.js for both front-end and back-end development. I implemented server-side logic in Node.js, designed the user interface, and collaborated to ensure full system integration and functionality.`,
    },
    {
      position: "Freelance Full Stack Developer",
      company: "Freelance",
      duration: "2023 - Present",
      description: `I have worked on various projects, including building web applications, maintaining websites, and developing custom client solutions. Notably, I developed a sales and service management system for a plumbing company, building the front-end with Next.js.`,
    },
    {
      position: "Frontend Developer",
      company: "CV Matcher",
      duration: " 2025 - Present",
      description: `I developed responsive interfaces using Angular, Angular Material, TailwindCSS, and TypeScript for an AI-powered CV-matching platform. I consumed APIs and contributed to UI/UX design to improve user experience and increase platform reach. The project was successfully launched to production, supporting early growth and product validation.`,
    },
  ],
};

// education data
type Education = {
  icon: string;
  title: string;
  description: string;
  items: {
    degree: string;
    institution: string;
    duration: string;
    description: string;
  }[];
};

const education: Education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: `I have a degree in computer science from the Universidad Nacional de San Martion. Here are some of the courses I have taken:`,
  items: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Universidad Nacional de San Martion",
      duration: "2018 - 2023",
      description: `I studied computer science at the Universidad Nacional de San Martion, where I learned about a variety of topics, including programming, algorithms, data structures, and software engineering. I also took courses in web development, database management, and computer networks, among others.`,
    },
    {
      degree: "Web Development",
      institution: "Online Course Platform",
      duration: "2023 - present",
      description: `I have taken several online courses to improve my skills in web development, including courses on HTML, CSS, JavaScript, React and Node.js. I am always looking to learn new things and improve my skills, and I am excited to take on new challenges and projects.`,
    },
  ],
};

// skills data
type Skill = {
  title: string;
  description: string;
  skillList: {
    icon: JSX.Element;
    name: string;
  }[];
};

const skills: Skill = {
  title: "My skills",
  description: `I have experience working with a variety of technologies, including:`,
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <BiLogoTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <FaAngular />,
      name: "angular",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },

    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[388px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-black/60 dark:text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="dark:bg-[#09090B] bg-slate-50 max-h-full py-8 px-10 rounded-xl flex flex-col gap-4 shadow-md hover:shadow-lg transition-shadow lg:items-start"
                      >
                        {/* Duración */}
                        <span className="text-accent text-sm font-medium">
                          {item.duration}
                        </span>

                        {/* Posición */}
                        <h3 className="text-2xl font-semibold text-center lg:text-left text-black dark:text-white">
                          {item.position}
                        </h3>

                        {/* Detalles */}
                        <div className="flex flex-col gap-3 mt-4 w-full">
                          {/* Empresa */}
                          <div className="flex items-center gap-2">
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <p className="min-h-[60px] text-lg text-black/80 dark:text-white/80 font-medium flex items-center">
                              {item.company}
                            </p>
                          </div>

                          {/* Descripción */}
                          <div className="flex items-start gap-2">
                            <p className="text-base text-black/60 dark:text-white/60 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-black/60 dark:text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="dark:bg-[#09090B] bg-slate-50 max-h-full py-8 px-10 rounded-xl flex flex-col gap-4 shadow-md hover:shadow-lg transition-shadow lg:items-start"
                      >
                        {/* Duración */}
                        <span className="text-accent text-sm font-medium">
                          {item.duration}
                        </span>

                        {/* Posición */}
                        <h3 className="min-h-[60px] flex items-center text-2xl font-semibold text-center lg:text-left text-black dark:text-white">
                          {item.degree}
                        </h3>

                        {/* Detalles */}
                        <div className="flex flex-col gap-3 mt-4 w-full">
                          {/* Empresa */}
                          <div className="flex items-center gap-2">
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <p className="min-h-[80px] text-lg text-black/80 dark:text-white/80 font-medium flex items-center">
                              {item.institution}
                            </p>
                          </div>

                          {/* Descripción */}
                          <div className="flex items-start gap-2">
                            <p className="text-base text-black/60 dark:text-white/60 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] dark:text-white/60 text-black/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-slate-50 dark:bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] dark:text-white/60 text-black/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((info, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="dark:text-white/60 text-black/60">
                        {info.fieldName}
                      </span>
                      <span className="text-xl">{info.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
