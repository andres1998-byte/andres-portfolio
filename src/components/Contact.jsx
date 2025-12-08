// src/components/Contact.jsx
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
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
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 0.5 }}
        className="
          mt-4 space-y-4 text-sm 
          text-slate-600 dark:text-slate-300
        "
      >
        <p>
          I&apos;m open to remote and hybrid roles, especially around Java, Spring Boot,
          data-driven backends, and modern React frontends.
        </p>

        <div className="space-y-1 text-sm">
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:amvillarreal98@gmail.com"
              className="
                text-sky-600 hover:underline 
                dark:text-sky-400
              "
            >
              amvillarreal98@gmail.com
            </a>
          </p>

          <p>
            <span className="font-medium">Location:</span> Mexico City, Mexico
          </p>
        </div>
      </motion.div>
    </section>
  );
}
