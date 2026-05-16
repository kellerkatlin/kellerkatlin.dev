"use client";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaPython,
  FaDocker,
} from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiSvelte,
  SiFastapi,
} from "react-icons/si";
import { TbBrain } from "react-icons/tb";
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
  description: `Fullstack developer focused on applied AI and product. I build LangGraph agents, multimodal conversational platforms, e-commerce and SaaS in production. Founder of two active businesses (P&T Store and Enfocalab) with hands-on operational experience in sales, electronic invoicing and automation. Currently pursuing a Master's in Information Technology at UNSM.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Keller Katlin",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+51) 935 064 473",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
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
  description: `I work as an AI / Fullstack Engineer building agentic systems and web products, while running my own businesses on the side. Most recent work first:`,
  items: [
    {
      position: "AI / Fullstack Engineer",
      company: "Micelio (Remote · Chile)",
      duration: "May 2026 - Present",
      description: `Freelance, part-time. Part of the engineering team building Karman, a LangGraph + FastAPI marketing AI agent for LoopMe. Contributing to multimodal Gemini & Grok integration, RAG, real-time voice, and the Open WebUI fork (SvelteKit 5) that serves the conversational UI. Dockerized deployment with Langfuse observability.`,
    },
    {
      position: "Founder & CEO",
      company: "P&T Store (Peru)",
      duration: "2024 - Present",
      description: `One-product e-commerce running nationwide on COD (cash on delivery). Built the platform end-to-end. AI-assisted after-sales automation on top of Chatwoot (CRM). AI-augmented Meta Ads optimization: creative generation and testing, audience targeting and CPA/ROAS analysis accelerated with AI tooling. Full logistics operation: suppliers, courier and after-sales.`,
    },
    {
      position: "Founder & CEO",
      company: "Enfocalab (Mexico)",
      duration: "2025 - Present",
      description: `Digital product targeting the Mexican market. Designed the offer, website and acquisition funnel. AI-augmented Meta Ads optimization for lead generation and offer validation.`,
    },
    {
      position: "Fullstack Developer (Freelance)",
      company: "Coderline (Remote · Chile)",
      duration: "Nov 2025 - May 2026",
      description: `Built a management system for a Chilean meat-products company: inventory, orders, customers and reports. Also implemented their corporate website from scratch, with design and improvement iterations. Stack: React, Node.js and relational databases; REST API integration and data modeling.`,
    },
    {
      position: "Frontend Developer",
      company: "CV Matcher (Remote · Peru)",
      duration: "Jan 2025 - Oct 2025",
      description: `Built responsive interfaces with Angular, TailwindCSS and TypeScript for an AI-powered CV-matching platform. Consumed AI APIs and contributed to UI/UX, shipping the MVP to production.`,
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
  description: `Bachelor in Systems & Informatics Engineering from UNSM, currently pursuing a Master's in Information Technology at the same university.`,
  items: [
    {
      degree: "M.Sc. in Information Technology",
      institution: "Universidad Nacional de San Martín (UNSM)",
      duration: "In progress",
      description: `Master of Science with a specialization in Information Technology at UNSM Postgraduate School, Tarapoto. Focus on applied technology and research aligned with my own business projects.`,
    },
    {
      degree: "Bachelor of Systems & Informatics Engineering",
      institution: "Universidad Nacional de San Martín (UNSM)",
      duration: "2018 - 2024",
      description: `Bachelor's degree granted on September 2nd, 2024. Studies in programming, algorithms, data structures, software engineering, web development, databases and computer networks.`,
    },
    {
      degree: "Certified Junior JavaScript Developer",
      institution: "Certificates.dev",
      duration: "2024",
      description: `Official certification of competence as a Junior JavaScript Developer.`,
    },
    {
      degree: "React & TypeScript (+10 Projects)",
      institution: "Udemy",
      duration: "2025 · 57h",
      description: `Complete React and TypeScript course building 10+ projects.`,
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
  description: `Languages, frameworks and platforms I use day-to-day:`,
  skillList: [
    {
      icon: <BiLogoTypescript />,
      name: "typescript",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaAngular />,
      name: "angular",
    },
    {
      icon: <SiSvelte />,
      name: "svelte",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiFastapi />,
      name: "fastapi",
    },
    {
      icon: <TbBrain />,
      name: "langgraph",
    },
    {
      icon: <BiLogoPostgresql />,
      name: "postgresql",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaDocker />,
      name: "docker",
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
