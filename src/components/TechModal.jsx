// src/components/TechModal.jsx
import { techBadges } from "../data/techBadges";
import { motion } from "framer-motion";

export default function TechModal({ onClose }) {
  return (
    <div
      className="
        fixed inset-0 z-40
        bg-black/60 backdrop-blur-sm
        flex items-center justify-center
      "
      onClick={onClose} // close on background click
    >
      {/* STOP CLICK PROPAGATION */}
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="
          bg-white dark:bg-slate-800 
          rounded-xl p-6 shadow-2xl max-h-[80vh]
          overflow-y-auto w-[90%] max-w-2xl
        "
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
            All Technologies
          </h2>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
          >
            ✕
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {techBadges.map((tech, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center gap-2 
                p-3 rounded-lg
                bg-slate-100 dark:bg-slate-700/40
              "
            >
              <img src={tech.logo} alt={tech.name} className="h-8 w-8" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
