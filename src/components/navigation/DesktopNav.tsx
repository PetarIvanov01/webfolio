"use client";
import { useEffect, useRef } from "react";

export default function DesktopNav({
  children,
}: {
  children: React.ReactNode;
}) {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (navRef) {
      const navigationHeight = navRef.current?.offsetHeight || 40;
      document.documentElement.style.setProperty(
        "--scroll-padding",
        navigationHeight + "px"
      );
    }
    return () => {
      navRef.current = null;
    };
  }, [navRef]);

  return (
    <nav
      ref={navRef}
      className="mt-2 w-max rounded-2xl bg-black bg-opacity-75 fixed top-0 shadow-md mx-auto px-8 py-4 left-0 right-0 max-md:hidden"
    >
      {children}
    </nav>
  );
}
