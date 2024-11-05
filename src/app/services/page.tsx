"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

type Service = {
    num: string;
    title: string;
    description: string;
    href: string;
};

const services: Service[] = [
    {
        num: "01",
        title: "Web Develpment",
        description: "We provide web development services for your business",
        href: "/services",
    },
    {
        num: "02",
        title: "Mobile App Development",
        description:
            "We provide mobile app development services for your business",
        href: "/services",
    },
    {
        num: "03",
        title: "SEO",
        description: "We provide SEO services for your business",
        href: "/services",
    },
    {
        num: "04",
        title: "Digital Marketing",
        description: "We provide digital marketing services for your business",
        href: "/services",
    },
];

export default function Services() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeIn",
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex-1 flex flex-col justify-center gap-6 group"
                        >
                            {/* top */}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-500">
                                    {service.num}
                                </div>

                                <Link
                                    aria-label="Learn more"
                                    href={service.href}
                                    className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all flex justify-center items-center hover:-rotate-45 "
                                >
                                    <BsArrowDownRight className="text-black text-3xl" />
                                </Link>
                            </div>
                            {/* title */}
                            <h2 className="text-[40px] font-bold leading-none dark:text-white text-black group-hover:text-accent transition-all duration-500">
                                {service.title}
                            </h2>
                            {/* description */}
                            <p className="text-black/60 dark:text-white/60 ">
                                {service.description}
                            </p>
                            {/* border */}
                            <div className="border-b border-black/20 dark:border-white/20 w-full"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
