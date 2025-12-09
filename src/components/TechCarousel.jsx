// src/components/TechCarousel.jsx
import { motion } from "framer-motion";
import { techBadges } from "../data/techBadges";
import { useState } from "react";
import TechModal from "./TechModal";

export default function TechCarousel() {
  const [modalOpen, setModalOpen] = useState(false);

  // Split badges into two rows
  const midpoint = Math.ceil(techBadges.length / 2);
  const row1 = techBadges.slice(0, midpoint);
  const row2 = techBadges.slice(midpoint);

  return (
    <div className="relative w-full overflow-hidden pt-10 pb-5">

      {/* SHOW ALL BUTTON — top right */}
      <div className="absolute right-0 top-0 z-20">
        <button
          onClick={() => setModalOpen(true)}
          className="
            px-3 py-1.5 text-xs rounded-full 
            bg-sky-500 text-white shadow-sm
            hover:bg-sky-600 transition
          "
        >
          Show All
        </button>
      </div>

      {/* CAROUSEL CONTAINER */}
      <div className="mt-10 space-y-6">

        {/* === ROW 1 — scroll left === */}
        <motion.div
          className="flex gap-5"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
          style={{ width: "200%" }}
        >
          {[...row1, ...row1].map((tech, i) => (
            <div
              key={i}
              className="
                flex items-center gap-2
                px-5 py-2 rounded-full min-w-max
                border border-slate-300 dark:border-slate-700
                bg-white/80 dark:bg-slate-800/50
                backdrop-blur-sm shadow-sm
              "
            >
              <img src={tech.logo} alt={tech.name} className="h-5 w-5" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* === ROW 2 — scroll right === */}
        <motion.div
          className="flex gap-5"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
          style={{ width: "200%" }}
        >
          {[...row2, ...row2].map((tech, i) => (
            <div
              key={i}
              className="
                flex items-center gap-2
                px-5 py-2 rounded-full min-w-max
                border border-slate-300 dark:border-slate-700
                bg-white/80 dark:bg-slate-800/50
                backdrop-blur-sm shadow-sm
              "
            >
              <img src={tech.logo} alt={tech.name} className="h-5 w-5" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* MODAL */}
      {modalOpen && <TechModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
