// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
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
        About
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 0.5 }}
        className="
          mt-4 space-y-4 text-sm leading-relaxed 
          text-slate-600 dark:text-slate-300
        "
      >
        <p>
          I&apos;m a software engineer based in Mexico City with a background in Applied
          Mathematics (ITAM) and several years of experience building backend and frontend
          systems for financial companies.
        </p>
        <p>
          I&apos;ve worked on production Java and Spring Boot services, Angular and React
          frontends, and data-heavy APIs for T. Rowe Price. Now I support the Goldman
          Sachs Data Lake as an L3 engineer, debugging ingestion issues, validating data
          quality, and keeping pipelines healthy.
        </p>
        <p>
          Outside of work, I like teaching programming, designing exercises around
          algorithms and data structures, and building side projects that are as polished
          as products, not just demos.
        </p>
      </motion.div>
    </section>
  );
}
