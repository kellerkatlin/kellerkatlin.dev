"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div>Loading</div>;

    if (resolvedTheme === "dark") {
        return (
            <SunIcon
                className="hover:text-accent"
                onClick={() => setTheme("light")}
            />
        );
    }

    if (resolvedTheme === "light") {
        return (
            <MoonIcon
                className="text-black hover:text-accent"
                onClick={() => setTheme("dark")}
            />
        );
    }
}
