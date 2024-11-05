"use client";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch";

type Link = {
    name: string;
    path: string;
};

const links: Link[] = [
    {
        name: "Home",
        path: "/",
    },

    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

export default function MobileNav() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <MenuIcon className="text-[32px] text-accent" />
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                <SheetHeader>
                    <div className="mt-2">
                        <ThemeSwitch />
                    </div>
                    <SheetTitle>
                        {/*Logo */}
                        <div className="mt-20 mb-20 text-center text-2xl ">
                            <Link href="/" aria-label="Keller">
                                <h1 className="text-2xl dark:text-white text-black font-semibold">
                                    Keller{""}
                                    <span className="text-accent">.</span>
                                </h1>
                            </Link>
                        </div>
                    </SheetTitle>
                </SheetHeader>
                <SheetDescription></SheetDescription>
                <div>
                    {/*nav */}
                    <nav className="flex flex-col gap-8 items-center justify-center">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                aria-label="Navigate to page"
                                className={`text-xl capitalize hover:text-accent-hover transition-all ${
                                    link.path === pathname &&
                                    "text-accent border-b-2 border-accent"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    );
}
