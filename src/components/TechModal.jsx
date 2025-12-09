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
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.22 }}
        className="
          relative 
          w-full max-w-5xl 
          bg-white dark:bg-slate-900 
          rounded-xl shadow-lg 
          p-6
          flex flex-col items-center
        "
        style={{
          maxHeight: "90vh",    // ensure it never overflows screen
        }}
      >
        {/* Close Button */}
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

        <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100 self-start">
          All Technologies
        </h2>

        {/* AUTO-FITTING GRID 
            - More rows if needed
            - Boxes shrink so everything fits inside modal
        */}
        <div
          className="
            grid gap-4 
            w-full
          "
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
          }}
        >
          {techBadges.map((tech, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center 
                p-3 
                bg-slate-50 dark:bg-slate-800/60
                border border-slate-200 dark:border-slate-700 
                rounded-lg shadow-sm
              "
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-8 w-8 mb-2 object-contain"
              />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
