"use client";

import type React from "react";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Timeline", href: "/#timeline" },
  { name: "Posters", href: "/#posters" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/team" },
  { name: "Announcements", href: "/#announcements" },
  { name: "Sponsors", href: "/#sponsors" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

const Logo = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="relative h-10 w-auto">
      <Image
        src={isDark ? "/logo7.png" : "/logo7.png"}
        alt="TUT logo"
        width={70}
        height={50}
        className="h-10 w-auto object-contain"
        priority
      />
    </div>
  );
};

export default function Header() {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const pathname = usePathname();

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Set initial scroll state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const nav = document.querySelector("nav");
      const target = event.target as Node;

      if (nav && !nav.contains(target) && menuState) {
        setMenuState(false);
      }
    };

    if (menuState) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuState]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0", 10) * -1);
      }
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [menuState]);

  // Close menu on route change
  useEffect(() => {
    setMenuState(false);
  }, [pathname]);

  // Handle menu toggle
  const toggleMenu = useCallback(() => {
    setMenuState((prev) => !prev);
  }, []);

  // Handle menu close
  const closeMenu = useCallback(() => {
    setMenuState(false);
  }, []);

  // Handle link click with proper navigation
  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Close the menu
      closeMenu();

      // Handle hash links on the same page
      if (href.startsWith("/#") && pathname === "/") {
        e.preventDefault();
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          });
        }
      }
    },
    [pathname, closeMenu]
  );

  // Check if link is active
  const isActive = useCallback(
    (href: string) => {
      if (href === "/") {
        return pathname === "/";
      }

      if (href.startsWith("/#")) {
        return false; // We don't highlight hash links as active
      }

      return pathname.startsWith(href);
    },
    [pathname]
  );

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <header className="relative z-50">
      <nav className="fixed z-50 w-full px-2">
        <div
          className={cn(
            "mx-auto mt-2 max-w-8xl px-4 sm:px-6 transition-all duration-500 lg:px-12",
            isScrolled &&
              `${
                isDark ? "bg-black/80" : "bg-white/90"
              } max-w-7xl rounded-2xl border ${
                isDark ? "border-white/10" : "border-gray-200"
              } backdrop-blur-lg lg:px-5 shadow-lg`
          )}
        >
          <div className="relative flex items-center justify-between py-3 lg:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2 z-50 relative"
                onClick={(e) => handleLinkClick(e, "/")}
              >
                <Logo />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <ul className="flex gap-6 text-sm font-medium">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={cn(
                        isDark
                          ? "text-gray-200 hover:text-white"
                          : "text-gray-700 hover:text-gray-900",
                        "block py-2 px-1 transition-colors duration-200 relative",
                        "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-tvh-red",
                        "after:transition-all after:duration-300",
                        isActive(item.href)
                          ? "after:w-full text-tvh-red font-semibold"
                          : "after:w-0 hover:after:w-full"
                      )}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Theme Toggle */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              {/* Mobile Theme Toggle */}
              <div className="lg:hidden">
                <ThemeToggle />
              </div>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMenu}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                aria-expanded={menuState}
                className="relative z-50 flex items-center justify-center w-10 h-10 rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-tvh-red focus:ring-offset-2"
              >
                <span className="sr-only">
                  {menuState ? "Close menu" : "Open menu"}
                </span>
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      menuState
                        ? "rotate-180 scale-0 opacity-0"
                        : "rotate-0 scale-100 opacity-100"
                    } ${isDark ? "text-white" : "text-gray-900"}`}
                  />
                  <X
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      menuState
                        ? "rotate-0 scale-100 opacity-100"
                        : "-rotate-180 scale-0 opacity-0"
                    } ${isDark ? "text-white" : "text-gray-900"}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {menuState && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Panel */}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden transition-transform duration-300 ease-in-out",
            isDark ? "bg-black/95" : "bg-white/95",
            "backdrop-blur-lg border-l",
            isDark ? "border-white/10" : "border-gray-200",
            menuState ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <span
              className={`text-lg font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Menu
            </span>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <X
                className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`}
              />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col h-full">
            <nav className="flex-1 px-4 py-6 overflow-y-auto">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={cn(
                        "flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 active:scale-95",
                        isDark
                          ? "text-gray-200 hover:text-white hover:bg-white/10"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100",
                        isActive(item.href) &&
                          "bg-tvh-red/10 text-tvh-red font-semibold"
                      )}
                    >
                      <span>{item.name}</span>
                      {isActive(item.href) && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-tvh-red"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-3">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn(
                    "w-full justify-center",
                    isDark
                      ? "border-white/20 text-white hover:bg-white/10"
                      : "border-gray-300 text-gray-900 hover:bg-gray-100"
                  )}
                >
                  <Link href="#" onClick={closeMenu}>
                    <span>Login</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="w-full justify-center bg-tvh-red hover:bg-tvh-red/80 text-white"
                >
                  <Link href="#" onClick={closeMenu}>
                    <span>Sign Up</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
