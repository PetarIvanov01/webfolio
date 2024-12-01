"use client";

import { useEffect, useState } from "react";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function NavBar({ children }: { children: React.ReactNode }) {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      const WIDTH_MOBILE = 768;
      const width = window.innerWidth;

      if (WIDTH_MOBILE > width) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return isMobile ? (
    <MobileNav>{children}</MobileNav>
  ) : (
    <DesktopNav>{children}</DesktopNav>
  );
}
