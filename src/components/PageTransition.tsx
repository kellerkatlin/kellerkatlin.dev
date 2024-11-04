"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: {
                            delay: 1,
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    }}
                    className="h-screen w-screen fixed dark:bg-background-dark bg-background-light top-0 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    );
}
