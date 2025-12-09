// src/components/Experience.jsx
import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="
          text-sm font-semibold uppercase tracking-[0.2em] 
          text-slate-500 dark:text-slate-400
        "
      >
        Experience
      </motion.h2>

      <div
        className="
          mt-6 space-y-6 border-l border-slate-200 pl-4 
          dark:border-slate-800 sm:pl-6
        "
      >
        {experience.map((item, index) => (
          <motion.article
  key={item.id}
  initial={{ opacity: 0, x: -12 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.08, duration: 0.4 }}
  className="relative pl-4"
>
  {/* Timeline dot */}
  <div className="absolute left-[-0.55rem] top-1 h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(56,189,248,0.25)]" />

  {/* BIG logo top-right */}
  {item.logo && (
  <a
    href={item.website}
    target="_blank"
    rel="noopener noreferrer"
    className="
      absolute right-4 top-0 
      transition-transform duration-200
      hover:scale-110
    "
  >
    <img
      src={item.logo}
      alt={`${item.company} logo`}
      className="
        h-14 w-14 object-contain 
        opacity-90 
        transition-opacity duration-200
        hover:opacity-100
      "
    />
  </a>
)}


  {/* Role */}
  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
    {item.role}
  </h3>

  {/* Company + location */}
  <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
    {item.company} · {item.location}
  </p>

  {/* Period */}
  <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">
    {item.period}
  </p>

  {/* Bullet points */}
  <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
    {item.bullets.map((line) => (
      <li key={line} className="leading-relaxed">
        • {line}
      </li>
    ))}
  </ul>
</motion.article>

        ))}
      </div>
    </section>
  );
}
