import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "15px",
        },
        screens: {
            sm: "658px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },
        fontFamily: {
            primary: "var(--font-jetbrainsMono)",
        },
        extend: {
            colors: {
                primary: {
                    light: "#f0e7db",
                    DEFAULT: "#1f2937",
                    dark: "#0f172a",
                },
                accent: {
                    DEFAULT: "#4B9BEB", // SlateBlue
                    hover: "#3a7fc3", // DarkSlateBlue
                    dark: "#4b0082", // Indigo
                },
                background: {
                    light: "#ffffff",
                    DEFAULT: "#00000",
                    dark: "#000000",
                },
                foreground: {
                    light: "#333333",
                    DEFAULT: "#eaeaea",
                    dark: "#cccccc",
                },
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [tailwindcssAnimate],
};

export default config;
