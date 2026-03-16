import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

// Generate random particles for the bokeh effect once to avoid hydration mismatch/re-renders
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2, // 2px to 6px
  x: Math.random() * 100, // 0 to 100vw
  y: Math.random() * 100, // 0 to 100vh
  duration: Math.random() * 20 + 10, // 10s to 30s
  delay: Math.random() * 5,
}));

export default function Hero() {
  const { scrollY } = useScroll();
  // Parallax effect: background moves slower than the rest of the page
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300]);

  // Prevent scroll when component first mounts for a tiny bit to force reset scroll position if needed,
  // Optional depending on specific needs, ignored for now to keep it standard.

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image Container with Parallax and Ken Burns */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        style={{ y: yParallax }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 30, // Extremely slow scale for cinematic Ken Burns effect
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {/* Mobile Background */}
        <img
          src="/images/gallery/NDQ_7217.jpg"
          alt="Wedding Background Mobile"
          className="md:hidden w-full h-[120vh] -mt-[10vh] object-cover opacity-70"
        />
        {/* Desktop Background */}
        <img
          src="/images/cover/cover.jpg"
          alt="Wedding Background Desktop"
          className="hidden md:block w-full h-[120vh] -mt-[10vh] object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wedding-red/95 via-wedding-red/50 to-black/30" />
      </motion.div>

      {/* Bokeh / Floating Particles Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-wedding-gold/30 blur-[2px]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}vw`,
              top: `${p.y}vh`,
            }}
            animate={{
              y: [0, -100, 0], // Float up and down slightly
              x: [0, Math.random() * 50 - 25, 0], // Float side to side slightly
              opacity: [0.2, 0.8, 0.2], // Pulse opactity
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        {/* Top text & Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mb-8 flex flex-col items-center"
        >
          <p className="text-sm md:text-base font-sans tracking-[0.4em] uppercase mb-4 text-wedding-gold/90 font-light">
            Save the Date
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 1 }}
            className="h-[1px] bg-wedding-gold/50"
          />
        </motion.div>

        {/* Main Names */}
        <div className="relative">
          {/* Subtle glow behind names */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-wedding-gold/10 blur-[60px] rounded-full pointer-events-none" />

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-serif drop-shadow-2xl relative z-10 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 mx-auto pb-4"
          >
            <span className="text-white">
              Trường An
            </span>
            <span className="text-5xl md:text-7xl lg:text-8xl my-2 md:my-0 script-font text-wedding-gold font-normal opacity-90 drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] pb-2 pt-2">
              &
            </span>
            <span className="text-white">
              Ngọc Linh
            </span>
          </motion.h1>
        </div>

        {/* Date and With Love */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 text-center flex flex-col items-center"
        >
          <p className="text-2xl md:text-3xl font-serif tracking-widest text-white/90">
            29 . 03 . 26
          </p>
          <p className="script-font text-4xl mt-4 text-wedding-gold opacity-80 decoration-wedding-gold/30">
            with love
          </p>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          });
        }}
      >
        {/* Elegant Mouse/Pill Shape */}
        <div className="w-[26px] h-[40px] rounded-full border-[1.5px] border-wedding-gold/60 flex justify-center p-[4px] shadow-[0_0_15px_rgba(197,160,89,0.2)] bg-black/10 backdrop-blur-sm">
          <motion.div
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[3px] h-[6px] rounded-full bg-wedding-gold shadow-[0_0_5px_#c5a059]"
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.4em] text-wedding-gold/70 font-sans font-medium">
          Khám Phá
        </span>
      </motion.div>
    </section>
  );
}
