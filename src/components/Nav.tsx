"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";
type LinkProps = {
    name: string;
    path: string;
};

const links: LinkProps[] = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link) => (
                <Link
                    key={link.path}
                    href={link.path}
                    aria-label="navigation"
                    className={`${
                        link.path === pathname &&
                        "text-accent border-b-2 border-accent"
                    } capitalize font-medium hover:text-accent transition-all `}
                >
                    {link.name}
                </Link>
            ))}
            <ThemeSwitch />
        </nav>
    );
}
