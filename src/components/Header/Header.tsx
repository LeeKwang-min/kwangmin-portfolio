"use client";

import { useEffect, useState } from "react";
import {
  FaBars,
  FaBriefcase,
  FaCode,
  FaHome,
  FaLightbulb,
  FaLink,
  FaUser,
} from "react-icons/fa";

interface IHeaderProps {
  scrollTo: (_: string) => void;
}

function Header({ scrollTo }: IHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "Intro", icon: <FaHome />, href: "intro" },
    { name: "About", icon: <FaUser />, href: "about" },
    { name: "Skills", icon: <FaCode />, href: "skills" },
    { name: "Links", icon: <FaLink />, href: "links" },
    { name: "Projects", icon: <FaLightbulb />, href: "projects" },
    { name: "Career", icon: <FaBriefcase />, href: "career" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1
            className={`text-2xl font-bold ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <span className="md:hidden">{`LKM's`}</span>
            <span className="hidden md:inline">{`Kwangmin's 포트폴리오`}</span>
          </h1>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled
                ? "text-gray-600 hover:text-gray-900"
                : "text-white hover:text-gray-200"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollTo(item.href);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-600 hover:bg-gray-100"
                    : "text-white hover:bg-gray-800"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
