"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavbarItem {
  title: string;
  url: string;
}

interface NavBarProps {
  content: NavbarItem[];
}

export default function NavBar({ content }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if a link is active
  const isActive = (url: string) => {
    if (url === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(url);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 items-center">
        {content.map((item) => (
          <li
            key={item.title}
            className={`transition ${
              isActive(item.url)
                ? "text-purple-400 font-semibold"
                : "hover:text-purple-400"
            }`}
          >
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile/Tablet Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile/Tablet Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
        }`}
      >
        <ul className="px-6 py-4 space-y-4 max-w-7xl mx-auto">
          {content.map((item, index) => (
            <li
              key={item.title}
              className={`transition-all duration-200 transform ${
                isActive(item.url)
                  ? "text-purple-400 font-semibold"
                  : "hover:text-purple-400"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              <Link
                href={item.url}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
