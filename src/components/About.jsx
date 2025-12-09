// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  const openPDF = (path) => {
    window.open(path, "_blank");
  };

  return (
    <section id="about" className="scroll-mt-24 space-y-10">

      {/* TITLE + DOWNLOAD CV BUTTON */}
      <div className="flex items-center justify-between">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] 
                     text-slate-500 dark:text-slate-400"
        >
          About
        </motion.h2>

        <a
          href="/Andres_Marcelo_Villarreal_Reyes_CV_English.pdf"
          download
          className="px-4 py-1.5 rounded-full text-xs font-medium
                     bg-sky-600 text-white shadow hover:bg-sky-700 transition"
        >
          Download CV
        </a>
      </div>

      {/* ABOUT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 0.5 }}
        className="mt-4 space-y-4 text-sm leading-relaxed 
                   text-slate-600 dark:text-slate-300"
      >
        <p>
          I&apos;m a software engineer based in Mexico City with a background in 
          Applied Mathematics (ITAM) and years of experience building backend and 
          frontend systems for financial companies.
        </p>

        <p>
          I previously worked on Java/Spring Boot services, Angular & React apps, 
          and large-scale data APIs at T. Rowe Price. I now support the Goldman Sachs 
          Data Lake as an L3 engineer, debugging ingestion issues, validating data 
          quality, and keeping pipelines healthy.
        </p>

        <p>
          Outside of work, I enjoy teaching programming, designing algorithmic 
          exercises, and building polished side projects that feel like full products.
        </p>
      </motion.div>

      {/* ───────────────────────────────────────── */}
      {/* RECOMMENDATIONS SECTION */}
      {/* ───────────────────────────────────────── */}

      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-sm font-semibold uppercase tracking-[0.15em]
                   text-slate-500 dark:text-slate-400"
      >
        Recommendations
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-4">

        {/* Amit Yadav */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 
                        bg-white/60 dark:bg-slate-800/40 shadow-sm">
          <p className="text-slate-700 dark:text-slate-300 text-sm italic">
            “Andres consistently demonstrated exceptional technical capabilities 
            and a systematic approach to complex back-end problems…”
          </p>
          <p className="mt-3 text-xs font-medium text-slate-600 dark:text-slate-400">
            — Amit Yadav, Lead Business Analyst, T. Rowe Price
          </p>
          <button
            onClick={() => openPDF("/Letter of Recommendation for Andres Villarreal.pdf")}
            className="mt-3 text-xs text-sky-600 dark:text-sky-400 hover:underline"
          >
            View Letter
          </button>
        </div>

        {/* Michael Yin */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 
                        bg-white/60 dark:bg-slate-800/40 shadow-sm">
          <p className="text-slate-700 dark:text-slate-300 text-sm italic">
            “A motivated, intelligent, and dependable engineer who often proposed
            elegant solutions and exceeded expectations…”
          </p>
          <p className="mt-3 text-xs font-medium text-slate-600 dark:text-slate-400">
            — Xuecheng (Michael) Yin, Tech Lead, T. Rowe Price
          </p>
          <button
            onClick={() => openPDF("/recommendation-letter-Andres.pdf")}
            className="mt-3 text-xs text-sky-600 dark:text-sky-400 hover:underline"
          >
            View Letter
          </button>
        </div>

        {/* Luis Estrada */}
<div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 
                bg-white/60 dark:bg-slate-800/40 shadow-sm">
  <p className="text-slate-700 dark:text-slate-300 text-sm italic">
    “Andrés demonstrates strong social and professional skills, excels in 
    communication, and builds positive relationships with clients and teammates.”
  </p>
  <p className="mt-3 text-xs font-medium text-slate-600 dark:text-slate-400">
    — Luis Estrada, Software Engineer, Infosys
  </p>
  <button
    onClick={() => openPDF("/Carta recomendacion Luis Estrada.pdf")}
    className="mt-3 text-xs text-sky-600 dark:text-sky-400 hover:underline"
  >
    View Letter
  </button>
</div>

      </div>
    </section>
  );
}
