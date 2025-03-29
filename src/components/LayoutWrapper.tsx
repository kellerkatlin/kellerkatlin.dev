"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import TransitionAnimation from "@/components/TransitionAnimation";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayoutOn = ["/thanks"];
  const shouldHideLayout = hideLayoutOn.includes(pathname);

  if (shouldHideLayout) {
    return <>{children}</>; // sin Header ni transiciones
  }

  return (
    <>
      <Header />
      <TransitionAnimation />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
