"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/components/theme-toggle"

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Timeline", href: "/#timeline" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/team" },
  { name: "Announcements", href: "/#announcements" },
  { name: "Sponsors", href: "/#sponsors" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
]

const Logo = () => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="relative h-10 w-auto">
      <Image
        src={isDark ? "/tut_logo_light.png" : "/tut_logo_dark.png"}
        alt="TUT logo"
        width={150}
        height={40}
        className="h-10 w-auto object-contain"
      />
    </div>
  )
}

export default function Header() {
  const [menuState, setMenuState] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector("nav")
      if (nav && !nav.contains(event.target as Node) && menuState) {
        setMenuState(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuState])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [menuState])

  return (
    <header className="relative z-50">
      <nav data-state={menuState ? "active" : ""} className="fixed z-50 w-full px-2 group">
        <div
          className={cn(
            "mx-auto mt-2 max-w-8xl px-6 transition-all duration-500 lg:px-12",
            isScrolled &&
              `${isDark ? "bg-black/70" : "bg-white/90"} max-w-5xl rounded-2xl border ${
                isDark ? "border-white/10" : "border-gray-200"
              } backdrop-blur-lg lg:px-5 shadow-lg`,
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu
                  className={`m-auto size-6 duration-400 ${menuState ? "rotate-180 scale-0 opacity-0" : ""} ${isDark ? "text-white" : "text-gray-900"}`}
                />
                <X
                  className={`absolute inset-0 m-auto size-6 duration-400 ${menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"} ${isDark ? "text-white" : "text-gray-900"}`}
                />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <ul className="flex gap-6 text-sm font-medium">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`${
                        isDark ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-gray-900"
                      } block py-2 px-1 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-tvh-red hover:after:w-full after:transition-all after:duration-300`}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu + Action Buttons */}
            <div
              className={`${isDark ? "bg-black/95" : "bg-white/95"} ${
                menuState ? "block" : "hidden"
              } lg:flex fixed inset-0 top-[73px] z-40 lg:static lg:inset-auto w-full flex-wrap items-center justify-end space-y-8 p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:w-fit lg:gap-6 lg:space-y-0 lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none`}
            >
              <div className="ml-2">
                  <ThemeToggle />
                </div>
              <div className="lg:hidden">
                <ul className="space-y-6 text-base font-medium">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className={`${
                          isDark ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-gray-900"
                        } block py-2 transition-colors duration-200`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                  
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                
                
                
                
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {menuState && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMenuState(false)}
        />
      )}
    </header>
  )
}
