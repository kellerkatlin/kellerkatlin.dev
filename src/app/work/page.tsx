"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

type Project = {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: {
    name: string;
  }[];
  image: string;
  live: string;
  github: string;
};
const projects: Project[] = [
  {
    num: "01",
    category: "frontend",
    title: "CV MATCHER",
    description:
      "I developed responsive interfaces using Angular, Angular Material, TailwindCSS, and TypeScript for an AI-powered CV-matching platform. I consumed APIs and contributed to UI/UX design to improve user experience and increase platform reach. The project was successfully launched to production, supporting early growth and product validation.",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "Scss",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Angular 17",
      },
      {
        name: "Tailwind CSS",
      },
    ],
    image: "/assets/work/project4.png",
    live: "https://www.cvmatcher.app/",
    github: "https://www.cvmatcher.app/",
  },

  {
    num: "02",
    category: "frontend",
    title: "SMT El Tarapotino",
    description:
      "I created a web system for managing inventory and services for a plumbing company. It includes managing inventory, services, and employee assignments, using Next.js, PrimeReact, PrimeFlex, TypeScript, Zustand, and consuming a Java Spring Boot API.",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "Css 3",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Next.js",
      },
      {
        name: "Zustand",
      },
      {
        name: "PrimeReact",
      },
    ],
    image: "/assets/work/project3.png",
    live: "https://smteltarapotino.com",
    github: "https://github.com/kellerkatlin/smtel-frontend",
  },
  {
    num: "03",
    category: "frontend",
    title: "Patient Follow-Up",
    description:
      "I created a patient follow-up app using React, TypeScript, and Zustand for state management. It supports adding, updating, and removing patients, with persistence through LocalStorage.",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "Css 3",
      },
      {
        name: "TypeScript",
      },
      {
        name: "React",
      },
      {
        name: "Zustand",
      },
    ],
    image: "/assets/work/project2.png",
    live: "https://pacientes-zustand-kellerkatlin.vercel.app/",
    github: "https://github.com/kellerkatlin/pacientes-zustand",
  },
  {
    num: "04",
    category: "frontend",
    title: "GuitarLa",
    description:
      "I created GuitarLa, a shopping cart app using React, TypeScript, and useReducer for state management. It supports adding, updating, and removing items, with persistence through LocalStorage.",

    stack: [
      {
        name: "Html 5",
      },
      {
        name: "Css 3",
      },
      {
        name: "TypeScript",
      },
      {
        name: "React",
      },
    ],
    image: "/assets/work/project1.png",
    live: "https://guitarla-ts-use-reducer-react-kellerkatlin.vercel.app",
    github: "https://github.com/kellerkatlin/guitarla-ts-useReducer-react",
  },
];

export default function Work() {
  const [project, setProject] = useState<Project | null>(projects[0]);
  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold  text-outline">
                {project?.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-black dark:text-white group-hover:text-accent transition-all duration-500 capitalize ">
                {project?.category} project
              </h2>
              {/* project description */}
              <p className="dark:text-white/60 text-black/60 ">
                {project?.description}
              </p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project?.stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent ">
                    {stack.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* boder */}
              <div className="border border-black/20 dark:border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link
                  href={project?.live || "/work"}
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  aria-label="live project"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        aria-label="live"
                        className="w-[70px] h-[70px] rounded-full bg-black/5 dark:bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight
                          aria-label="liveicon"
                          className="text-black dark:text-white text-3xl group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent aria-label="live projects">
                        <p> Live Projects</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link
                  href={project?.github || "/work"}
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  aria-label="github project"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        aria-label="github"
                        className="w-[70px] h-[70px] rounded-full bg-black/5 dark:bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub
                          aria-label="githubico"
                          className="text-black dark:text-white text-3xl group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent aria-label="githubrepository">
                        <p> Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] bg-white w-auto relative group flex justify-center items-center ">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full dark:bg-black/10 bg-white/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons  */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-white dark:text-black text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
                iconsStyles="text-[22px] "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
