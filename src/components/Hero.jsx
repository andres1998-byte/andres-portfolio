// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="pt-4">
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        {/* Text side */}
        <div className="flex-1 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="
              inline-flex items-center gap-2 rounded-full 
              border border-sky-200/70 bg-sky-50/60 
              px-3 py-1 text-xs font-medium text-sky-700 
              dark:border-sky-500/40 dark:bg-sky-500/10 dark:text-sky-300
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            Data Lake L3 Engineer (Goldman Sachs · via Infosys)
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            I build reliable, modern systems for
            <span className="block text-sky-600 dark:text-sky-400">
              finance and data platforms.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300"
          >
            I&apos;m Andrés, a full-stack engineer focused on Java, Spring, React, and
            cloud-first architectures. I&apos;ve worked on production systems for
            T. Rowe Price and now support the Data Lake platform at Goldman Sachs
            as an L3 engineer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="
                inline-flex items-center justify-center rounded-full 
                bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-50 shadow-sm 
                hover:bg-slate-800 
                dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 
                transition-colors
              "
            >
              View projects
            </a>

            <a
              href="#contact"
              className="
                inline-flex items-center justify-center rounded-full 
                border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 
                hover:bg-slate-100 
                dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900 
                transition-colors
              "
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.5 }}
            className="flex flex-wrap gap-2 text-[11px] text-slate-500 dark:text-slate-400"
          >
            <span className="rounded-full border border-slate-200 px-3 py-1 dark:border-slate-700">
              Java · Spring Boot · REST APIs
            </span>
            <span className="rounded-full border border-slate-200 px-3 py-1 dark:border-slate-700">
              React · TypeScript · Tailwind
            </span>
            <span className="rounded-full border border-slate-200 px-3 py-1 dark:border-slate-700">
              AWS · Data platforms · L3 support
            </span>
          </motion.div>
        </div>

        {/* Simple visual / placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative hidden flex-1 items-center justify-center md:flex"
        >
          <div
  className="
    relative h-64 w-64 rounded-3xl 
    bg-gradient-to-br from-sky-500/20 via-transparent to-transparent
    shadow-[0_0_80px_rgba(56,189,248,0.45)] 
    dark:from-sky-400/20 dark:via-transparent dark:to-transparent
    flex items-center justify-center
  "
>
  <img
    src="/src/assets/Andres.jpeg"
    alt="Andrés Villarreal"
    className="
      h-64 w-64 rounded-3xl object-cover 
      border border-slate-200/40 dark:border-slate-700/40
    "
  />
</div>


        </motion.div>
      </div>
    </section>
  );
}
