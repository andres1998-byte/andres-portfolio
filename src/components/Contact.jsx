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
  className="mt-4 flex flex-col items-center text-center space-y-4
             text-sm text-slate-600 dark:text-slate-300"
>
        <p>You can reach me through any of the platforms below.</p>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex items-center gap-6 mt-6"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/andr%C3%A9s-villarreal-reyes-1a7474229/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
      h-12 w-12 rounded-full
      bg-slate-200 dark:bg-slate-700
      text-slate-700 dark:text-slate-200
      shadow-sm hover:shadow-md
      hover:bg-slate-300 dark:hover:bg-slate-600
      transition-all duration-200
      hover:scale-110
            "
          >
            {/* LinkedIn SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-7 w-7"
            >
              <path d="M4.98 3.5C4.98 4.61 4.1 5.5 3 5.5S1 4.61 1 3.5 1.89 1.5 3 1.5s1.98.89 1.98 2zM1.2 8.5h3.6v12H1.2v-12zM8.2 8.5h3.4v1.7h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.5v6.6h-3.6v-5.9c0-1.4 0-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1v6h-3.6v-12z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/andres1998-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
      h-12 w-12 rounded-full
      bg-slate-200 dark:bg-slate-700
      text-slate-700 dark:text-slate-200
      shadow-sm hover:shadow-md
      hover:bg-slate-300 dark:hover:bg-slate-600
      transition-all duration-200
      hover:scale-110
            "
          >
            {/* GitHub SVG */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              className="h-7 w-7"
            >
              <path d="M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 10 8.2 11.6.6.1.8-.3.8-.6v-2c-3.3.8-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.7 2.4 1.2 3 .9.1-.7.3-1.2.6-1.5-2.7-.3-5.6-1.4-5.6-6.2 0-1.3.5-2.5 1.2-3.4-.1-.3-.5-1.5.1-3 0 0 1-.3 3.4 1.3a11 11 0 0 1 6.2 0c2.3-1.6 3.3-1.3 3.3-1.3.7 1.5.3 2.7.2 3a5 5 0 0 1 1.3 3.4c0 4.8-2.9 5.9-5.6 6.2.4.3.7 1 .7 2v3c0 .3.2.7.8.6A12.3 12.3 0 0 0 24 12.7 12.2 12.2 0 0 0 12 .5Z"/>
            </svg>
          </a>

          {/* Email */}
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=amvillarreal98@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center
      h-12 w-12 rounded-full
      bg-slate-200 dark:bg-slate-700
      text-slate-700 dark:text-slate-200
      shadow-sm hover:shadow-md
      hover:bg-slate-300 dark:hover:bg-slate-600
      transition-all duration-200
      hover:scale-110"
>

            {/* Gmail SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-7 w-7"
            >
              <path d="M12 13.3 1.5 6.1C1.8 5 2.8 4 4.2 4h15.7c1.3 0 2.3 1 2.6 2.1L12 13.3zm0 2.1 10.5-7.2V18c0 1.1-.9 2-2 2H3.5c-1.1 0-2-.9-2-2V8.2L12 15.4z"/>
            </svg>
          </a>
        </motion.div>

        {/* Email Text Fallback */}
<p className="mt-10 text-sm text-slate-600 dark:text-slate-300 mt-2">
  Email:{" "}
  <a
    href="mailto:amvillarreal98@gmail.com"
    className="text-sky-600 dark:text-sky-400 hover:underline"
  >
    amvillarreal98@gmail.com
  </a>
</p>

        {/* Location */}
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
          Based in Mexico City, Mexico
        </p>
      </motion.div>
    </section>
  );
}
