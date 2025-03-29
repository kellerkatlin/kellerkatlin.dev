import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
//components
import LayoutWrapper from "@/components/LayoutWrapper";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Keller Katlin | Web Developer",
  description: "Keller Katlin's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={jetBrainsMono.variable} lang="en" suppressHydrationWarning>
      <body className="dark:bg-background-dark bg-background-light text-black dark:text-white">
        {/*dark:text-[#3E3E3E] text by Next.js  */}
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
