import { motion } from "framer-motion";

type AnimationProps = {
    initial?: { [key: string]: string | number };
    animate?: { [key: string]: string | number };
    exit?: { [key: string]: string | number | string[] };
};

const transitionAnimation: AnimationProps = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] },
};

//calculate the reverse index fot staggred delay

const reverseIndex = (index: number) => {
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1;
};
export default function Animation() {
    return (
        <>
            {/* render 6 motion divs, each representing o step of the animation.
            Each div will have the same animation defined by transitionAnimation object. 
            The delay for each div is calculated dynamically based on it's reversed index, 
            creating a staggered effect with deacresing delay for each subsequent step. 
            */}
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={transitionAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-black dark:bg-white relative"
                />
            ))}
        </>
    );
}
