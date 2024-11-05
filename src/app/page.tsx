import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// components
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full ">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-1 xl:pb-6">
                    {/* Text*/}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="xl:text-xl ">Software Developer</span>
                        <h1 className="h2 xl:h1 mb-4 xl:mb-6">
                            Hello, I&apos;m <br />
                            <span className="text-accent">Keller Katlin</span>
                        </h1>
                        <p className="max-w-[635px] mb-6 xl:mb-9 dark:text-white/80 text-black/80">
                            My passion is to create elegant digital experiences
                            that capture the essence of ideas. With skills in a
                            variety of technologies and programming languages, I
                            always strive for excellence and innovation in every
                            project.
                        </p>
                        {/* Button and socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-8">
                            <a href="/cv.pdf" download>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    aria-label="Download CV"
                                    className="uppercase flex items-center gap-2"
                                >
                                    <span>Dowload CV</span>
                                    <Download size={20} />
                                </Button>
                            </a>
                            <div className="mb-1 xl:mb-0">
                                <Socials
                                    containerSyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Photo*/}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
}
