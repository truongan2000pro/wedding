import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function WelcomeCover({ onOpen }: { onOpen: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen(); // Trigger audio and unlock scroll immediately
    setTimeout(() => {
      setShow(false);
    }, 1500);
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-wedding-red"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Left Door */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-wedding-red border-r border-wedding-gold/30 shadow-[10px_0_30px_rgba(0,0,0,0.4)] z-10"
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-pattern opacity-40" />
          </motion.div>

          {/* Right Door */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-wedding-red border-l border-wedding-gold/30 shadow-[-10px_0_30px_rgba(0,0,0,0.4)] z-10"
            exit={{ x: "100%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-pattern opacity-40" />
          </motion.div>

          {/* Center Content / Seal */}
          <motion.div
            className="relative z-20 flex flex-col items-center px-4"
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-28 h-28 md:w-32 md:h-32 mb-8 rounded-full bg-wedding-bg flex items-center justify-center border-4 border-wedding-gold shadow-2xl relative">
              <div className="absolute inset-1 rounded-full border border-wedding-gold/50" />
              <span className="font-serif text-4xl md:text-5xl text-wedding-red">
                A<span className="text-2xl md:text-3xl mx-1">&</span>L
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif text-wedding-gold mb-3 text-center drop-shadow-md">
              Trường An & Ngọc Linh
            </h1>
            <p className="text-white/80 font-serif italic mb-12 tracking-widest text-lg">
              29 . 03 . 2026
            </p>

            <button
              onClick={handleOpen}
              className="px-10 py-4 bg-wedding-gold text-white rounded-full font-serif text-lg tracking-widest uppercase hover:bg-white hover:text-wedding-gold transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transform hover:-translate-y-1"
            >
              Mở Thiệp
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
