"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
//components

import Animation from "./Animation";

export default function TransitionAnimation() {
    const pathname = usePathname();

    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                        <Animation />
                    </div>
                    <motion.div
                        className="h-screen w-screen bg-background-light dark:bg-background-dark fixed top-0 pointer-events-none"
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: 0,
                            transition: {
                                delay: 1,
                                duration: 0.4,
                                ease: "easeInOut",
                            },
                        }}
                    />
                </div>
            </AnimatePresence>
        </>
    );
}
