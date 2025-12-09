// src/components/Hero.jsx
import { motion } from "framer-motion";
import profileImg from "../assets/Andres.jpeg";
import TechCarousel from "./TechCarousel";

export default function Hero() {
  return (
    <section id="hero" className="pt-20 space-y-14">
      
      {/* === TOP SECTION: TEXT + PHOTO === */}
      <div className="flex flex-col gap-12 md:flex-row md:items-center">
        
        {/* LEFT SIDE — TEXT */}
        <div className="flex-1 space-y-8">
          
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="
              inline-flex items-center gap-2 rounded-full 
              border border-sky-300/40 bg-sky-100/40 dark:border-sky-500/40 
              dark:bg-sky-500/10 px-4 py-1.5 text-xs font-medium 
              text-sky-700 dark:text-sky-300 shadow-sm backdrop-blur-sm
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            Software Engineer · Goldman Sachs
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl leading-tight"
          >
            I design and build modern, reliable software systems —
            <span className="block text-sky-600 dark:text-sky-400 mt-1">
              from backend services to clean, elegant front-ends.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300"
          >
            I'm Andrés — a full-stack engineer specializing in Java, Spring, 
            React, distributed systems, and cloud-native development.  
            Previously at T. Rowe Price; now working on engineering initiatives 
            at Goldman Sachs.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="
                inline-flex items-center justify-center rounded-full 
                bg-slate-900 px-6 py-2.5 text-sm font-medium text-slate-50 shadow 
                hover:bg-slate-800 transition-all 
                dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                inline-flex items-center justify-center rounded-full 
                border border-slate-300 px-6 py-2.5 text-sm font-medium 
                text-slate-700 hover:bg-slate-100 transition-all 
                dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900
              "
            >
              Get in Touch
            </a>
          </motion.div>

        </div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative flex-1 flex items-center justify-center"
        >
          <div
            className="
              relative h-64 w-64 md:h-72 md:w-72 rounded-3xl 
              bg-gradient-to-br from-sky-500/20 via-transparent to-transparent
              shadow-[0_0_80px_rgba(56,189,248,0.45)] 
              dark:from-sky-400/20 flex items-center justify-center
            "
          >
            <img
              src={profileImg}
              alt="Andrés Villarreal"
              className="
                h-full w-full rounded-3xl object-cover 
                border border-slate-200/40 dark:border-slate-700/40
              "
            />
          </div>
        </motion.div>
      </div>

      {/* === FULL-WIDTH CAROUSEL BELOW HERO === */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full flex justify-center"
      >
        <div className="w-full max-w-5xl px-4">
          <TechCarousel />
        </div>
      </motion.div>

    </section>
  );
}
