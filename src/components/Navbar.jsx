// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const navItems = [
  { id: "about", label: "About & Recommendations"},
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [hovered, setHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Fix: animation won't run before first paint
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 50);
    return () => clearTimeout(t);
  }, []);

  const iconClasses = "h-5 w-5 text-slate-700 dark:text-slate-200";

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          y: isHidden ? -96 : 0, // slide up out of view
          backgroundColor: hovered
            ? theme === "dark"
              ? "rgba(15, 23, 42, 0.9)"
              : "rgba(226, 232, 240, 0.95)"
            : theme === "dark"
              ? "rgba(15, 23, 42, 0.7)"
              : "rgba(226, 232, 240, 0.78)",
          boxShadow: hovered
            ? "0 0 22px rgba(56, 189, 248, 0.20)"
            : "0 4px 20px rgba(0,0,0,0.06)",
          backdropFilter: hovered ? "blur(14px)" : "blur(10px)",
        }}
        whileHover={{ scale: isHidden ? 1 : 1.02 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="
          transform fixed inset-x-0 top-0 z-40 
          border-b border-slate-200/60 dark:border-slate-800/80
        "
      >
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            transform mx-auto flex max-w-5xl items-center 
            justify-between px-4 py-3 sm:px-6 lg:px-8
          "
        >
          {/* Logo */}
          <motion.button
            type="button"
            onClick={() => scrollToSection("hero")}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.2 }}
            className="
              text-sm font-semibold tracking-tight 
              text-slate-900 dark:text-slate-100
            "
          >
            Andrés Villarreal
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 sm:flex">
            {navItems.map((item, index) => (
              <motion.button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.2 + index * 0.07,
                  duration: 0.35,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05 }}
                className="
                  relative text-xs font-medium uppercase tracking-[0.15em]
                  text-slate-500 hover:text-slate-900 
                  dark:text-slate-400 dark:hover:text-slate-100
                  transition-colors
                "
              >
                {item.label}

                {/* Underline animation */}
                <motion.span
                  className="absolute left-0 -bottom-0.5 h-[1px] w-full bg-sky-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ originX: 0 }}
                />
              </motion.button>
            ))}

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="
                inline-flex h-8 w-8 items-center justify-center rounded-full 
                border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 
                dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 
                dark:hover:bg-slate-800 transition-colors
              "
            >
              {theme === "dark" ? (
                <SunIcon className={iconClasses} />
              ) : (
                <MoonIcon className={iconClasses} />
              )}
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="
                inline-flex h-8 w-8 items-center justify-center rounded-full 
                border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 
                dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 
                dark:hover:bg-slate-800 transition-colors
              "
            >
              {theme === "dark" ? (
                <SunIcon className={iconClasses} />
              ) : (
                <MoonIcon className={iconClasses} />
              )}
            </button>

            {/* Mobile menu toggle */}
            <motion.button
              type="button"
              onClick={() => setOpen((v) => !v)}
              whileTap={{ scale: 0.92 }}
              className="
                inline-flex h-9 w-9 items-center justify-center rounded-full
                border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 
                dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100
                dark:hover:bg-slate-800 transition-colors
              "
            >
              {open ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </motion.nav>

        {/* Mobile dropdown */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="
              sm:hidden border-t border-slate-200 bg-slate-50 
              dark:border-slate-800 dark:bg-slate-950
            "
          >
            <div className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setOpen(false);
                  }}
                  className="
                    block w-full rounded-md px-2 py-2 text-left text-sm font-medium
                    text-slate-700 hover:bg-slate-100
                    dark:text-slate-200 dark:hover:bg-slate-900
                  "
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* FLOATING SHOW/HIDE BUTTON WITH FIXED TOOLTIP */}
<div className="fixed bottom-5 right-5 z-[999]">
  <div className="relative flex items-center justify-center">

    {/* Tooltip (absolute, does NOT shift layout) */}
    {hovered && (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="
  absolute -top-10 left-1/2 -translate-x-[70%]
  px-3 py-1 rounded-md text-xs font-medium
  bg-slate-800 text-slate-100 shadow-lg
  dark:bg-slate-200 dark:text-slate-900
  border border-slate-700/30 dark:border-slate-300/30
  whitespace-nowrap
"

      >
        {isHidden ? "Show Navbar" : "Hide Navbar"}
      </motion.div>
    )}

    {/* Button */}
    <motion.button
      onClick={() => setIsHidden((v) => !v)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="
        h-11 w-11 rounded-full 
        bg-slate-200 dark:bg-slate-800 
        shadow-lg shadow-slate-400/30 dark:shadow-slate-900/40
        backdrop-blur-md 
        flex items-center justify-center
        border border-slate-300/40 dark:border-slate-700/40
      "
    >
      {isHidden ? (
        <span className="text-slate-700 dark:text-slate-200 text-xl">▼</span>
      ) : (
        <span className="text-slate-700 dark:text-slate-200 text-xl">▲</span>
      )}
    </motion.button>
  </div>
</div>


    </>
  );
}
