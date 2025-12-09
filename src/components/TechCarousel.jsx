// src/components/TechCarousel.jsx
import { motion, useAnimation } from "framer-motion";
import { techBadges } from "../data/techBadges";
import { useEffect, useState } from "react";
import TechModal from "./TechModal";

export default function TechCarousel() {
  const controls = useAnimation();
  const [modalOpen, setModalOpen] = useState(false);

  // CONSTANT SPEED (no buttons needed)
  const SCROLL_SPEED = 22;

  const startScroll = () => {
    controls.start({
      x: "-50%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: SCROLL_SPEED,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    startScroll();
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-5">

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

      {/* AUTO-SCROLL CAROUSEL */}
      <motion.div
        className="flex gap-5 mt-6"
        animate={controls}
        style={{ width: "200%" }}
      >
        {[...techBadges, ...techBadges].map((tech, i) => (
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
            <img
              src={tech.logo}
              alt={tech.name}
              className="h-5 w-5 object-contain"
            />

            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>

      {/* MODAL */}
      {modalOpen && <TechModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
