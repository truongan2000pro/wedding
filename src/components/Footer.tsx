import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="py-24 bg-wedding-red text-white text-center relative overflow-hidden isolate z-50 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 mx-auto mb-8 text-wedding-gold">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            Trường An & Ngọc Linh
          </h2>

          <p className="script-font text-3xl md:text-4xl text-wedding-gold mb-12">
            Thank you for celebrating with us
          </p>

          <div className="w-24 h-[1px] bg-white/30 mx-auto mb-8" />

          <p className="text-sm tracking-widest uppercase text-white/60">
            29 . 03 . 2026
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
