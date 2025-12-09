// src/components/TechModal.jsx
import { motion } from "framer-motion";
import { techBadges } from "../data/techBadges";

export default function TechModal({ onClose }) {
  return (
    <div
      className="
        fixed inset-0 z-[999]
        bg-black/40 backdrop-blur-sm
        flex items-center justify-center
        p-4
      "
      onClick={onClose} // click outside closes
    >
      <motion.div
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.93 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          relative w-full max-w-4xl 
          bg-white dark:bg-slate-900 
          rounded-xl shadow-xl
          p-8
        "
        style={{ maxHeight: "90vh" }}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute right-4 top-4 
            text-slate-500 hover:text-slate-700 
            dark:text-slate-300 dark:hover:text-white
            text-xl
          "
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
          All Technologies
        </h2>

        {/* GRID WITHOUT SCROLLBAR */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techBadges.map((tech, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center justify-center
                gap-2 p-4
                bg-slate-50 dark:bg-slate-800/50
                border border-slate-200 dark:border-slate-700
                rounded-lg shadow-sm
              "
            >
              <img src={tech.logo} alt={tech.name} className="h-10 w-10" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
