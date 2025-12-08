// src/components/Navbar.jsx
import { useState } from "react";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { id: "about", label: "About" },
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

  const iconClasses = "h-5 w-5 text-slate-700 dark:text-slate-200";

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-40 
        border-b border-slate-200/60 bg-slate-50/80 backdrop-blur 
        dark:bg-slate-950/80 dark:border-slate-800/80
      "
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo / Name */}
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        >
          Andrés Villarreal
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                text-xs font-medium uppercase tracking-[0.15em] 
                text-slate-500 hover:text-slate-900 
                dark:text-slate-400 dark:hover:text-slate-100 
                transition-colors
              "
            >
              {item.label}
            </button>
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
              dark:hover:bg-slate-800 
              transition-colors
            "
          >
            {theme === "dark" ? <SunIcon className={iconClasses} /> : <MoonIcon className={iconClasses} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="
              inline-flex h-8 w-8 items-center justify-center rounded-full 
              border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 
              dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 
              transition-colors
            "
          >
            {theme === "dark" ? <SunIcon className={iconClasses} /> : <MoonIcon className={iconClasses} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="
              inline-flex h-9 w-9 items-center justify-center rounded-full 
              border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 
              dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 
              dark:hover:bg-slate-800 transition-colors
            "
          >
            {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="sm:hidden border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
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
        </div>
      )}
    </header>
  );
}
