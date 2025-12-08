// src/components/Projects.jsx
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
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
        Projects
      </motion.h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="
              group flex flex-col rounded-2xl 
              border border-slate-200 bg-slate-50/60 p-4 shadow-sm 
              hover:shadow-md 
              dark:border-slate-800 dark:bg-slate-900/40
            "
          >
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {project.name}
            </h3>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full bg-slate-100 px-2.5 py-1 
                    text-[11px] font-medium text-slate-600
                    group-hover:bg-slate-200
                    dark:bg-slate-800 dark:text-slate-300 
                    dark:group-hover:bg-slate-700
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-4 text-xs font-medium text-sky-600 hover:text-sky-700 
                  dark:text-sky-400 dark:hover:text-sky-300
                "
              >
                View project ↗
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
