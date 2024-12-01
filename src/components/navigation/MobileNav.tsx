"use client";
import { useState } from "react";

export default function MobileNav({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      className={`${
        isOpen ? "bg-black shadow-md" : "bg-transparent"
      } ml-2 mt-2 py-3 w-max px-4 rounded-2xl fixed top-0 transform transition-opacity duration-200`}
    >
      <div className="flex flex-col gap-6">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none w-max"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white stroke-current transform duration-200"
              width="24"
              height="24"
            >
              <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white stroke-current rotate-90 transform duration-200"
              width="24"
              height="24"
            >
              <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
            </svg>
          )}
        </button>
        <div
          className={`transform transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </nav>
  );
}
