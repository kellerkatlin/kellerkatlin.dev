import Link from "next/link";

//components
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

export default function Header() {
    return (
        <header className="py-8 xl:p-12 dark:text-white text-black ">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="xl:text-4xl md:text-3xl text-2xl font-semibold">
                        Keller<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* desktop nav */}

                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/">
                        <Button
                            className="text-white dark:text-black"
                            aria-label="hire me"
                        >
                            Hire me
                        </Button>
                    </Link>
                    {/* mobile nav */}
                </div>
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}
