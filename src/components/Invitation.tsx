import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "motion/react";
import React, { useState } from "react";

// Wax Seal "喜" (Double Happiness) SVG
const WaxSeal = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
    {/* Outer decorative ring */}
    <circle cx="50" cy="50" r="46" fill="#c5a059" />
    <circle cx="50" cy="50" r="43" fill="none" stroke="#a07830" strokeWidth="1.5" strokeDasharray="3 2" />
    <circle cx="50" cy="50" r="38" fill="#b8922a" />
    {/* Double Happiness (囍) character */}
    <g fill="#7a5500" transform="translate(50,50) scale(0.55)">
      {/* Left 喜 */}
      <g transform="translate(-25, 0)">
        <rect x="-12" y="-42" width="24" height="6" rx="1" />
        <rect x="-12" y="-32" width="24" height="6" rx="1" />
        <rect x="-14" y="-26" width="28" height="5" rx="1" />
        <rect x="-12" y="-10" width="24" height="5" rx="1" />
        <rect x="-12" y="2" width="24" height="5" rx="1" />
        <rect x="-14" y="10" width="28" height="5" rx="1" />
        <rect x="-3" y="-42" width="6" height="88" />
      </g>
      {/* Right 喜 */}
      <g transform="translate(25, 0)">
        <rect x="-12" y="-42" width="24" height="6" rx="1" />
        <rect x="-12" y="-32" width="24" height="6" rx="1" />
        <rect x="-14" y="-26" width="28" height="5" rx="1" />
        <rect x="-12" y="-10" width="24" height="5" rx="1" />
        <rect x="-12" y="2" width="24" height="5" rx="1" />
        <rect x="-14" y="10" width="28" height="5" rx="1" />
        <rect x="-3" y="-42" width="6" height="88" />
      </g>
      {/* Vertical separator */}
      <rect x="-2" y="-42" width="4" height="88" />
    </g>
  </svg>
);

// The Envelope SVG (front body + flap)
const EnvelopeBody = ({ isOpen }: { isOpen: boolean }) => (
  <svg viewBox="0 0 400 260" className="w-full h-full absolute inset-0" preserveAspectRatio="none">
    {/* Main Envelope Body */}
    <rect x="0" y="20" width="400" height="240" rx="4" fill="#901A1E" />
    {/* Bottom triangle fold lines (decorative) */}
    <polygon points="0,260 200,160 400,260" fill="#7a1518" />
    {/* Side fold lines */}
    <polygon points="0,20 0,260 200,160" fill="#a01e22" />
    <polygon points="400,20 400,260 200,160" fill="#7a1518" />
    {/* Gold inner border */}
    <rect x="8" y="28" width="384" height="224" rx="2" fill="none" stroke="#c5a059" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
    {/* Top flap */}
    <motion.polygon
      points="0,20 400,20 200,140"
      fill={isOpen ? "#b02025" : "#901A1E"}
      style={{
        transformOrigin: "200px 20px",
        rotateX: isOpen ? -180 : 0,
      }}
      animate={{ rotateX: isOpen ? -180 : 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    />
    {/* Gold border on flap */}
    <motion.polygon
      points="0,20 400,20 200,140"
      fill="none"
      stroke="#c5a059"
      strokeWidth="1.5"
      opacity="0.4"
      style={{
        transformOrigin: "200px 20px",
        rotateX: isOpen ? -180 : 0,
      }}
      animate={{ rotateX: isOpen ? -180 : 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    />
  </svg>
);

// --- The Invitation Card Content ---
function InvitationCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="bg-white/95 backdrop-blur-md p-8 md:p-14 rounded-sm shadow-[0_20px_60px_rgba(144,26,30,0.15)] border border-wedding-gold/20 relative"
    >
      {/* Inner Border */}
      <div className="absolute inset-4 border border-wedding-gold/30 pointer-events-none" style={{ transform: "translateZ(20px)" }} />

      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        {/* Decorative Top */}
        <div className="w-20 mx-auto mb-6 text-wedding-gold opacity-80">
          <svg viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="1" className="w-full">
            <path d="M10,15 Q25,0 40,15 T70,15" /><circle cx="50" cy="15" r="4" fill="currentColor" /><circle cx="50" cy="15" r="8" strokeDasharray="2 2" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-wedding-red mb-4 drop-shadow-sm">Trân Trọng Kính Mời</h2>
        <p className="text-base md:text-xl leading-relaxed text-wedding-text/80 mb-8 font-serif italic tracking-wide">Tới dự buổi tiệc chung vui cùng gia đình chúng tôi</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 text-wedding-red mb-10 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-wedding-gold/40 to-transparent" />
          <div className="text-center w-full md:w-1/2 px-4 group">
            <p className="text-xs tracking-[0.3em] text-wedding-gold uppercase mb-3">Nhà Trai</p>
            <p className="font-serif text-xl md:text-2xl mb-1 group-hover:scale-105 transition-transform">Vũ Dương Bằng</p>
            <p className="font-serif text-xl md:text-2xl mb-3 group-hover:scale-105 transition-transform">Vũ Thị Liên</p>
            <div className="flex items-center justify-center gap-2 text-wedding-text/60 italic">
              <div className="w-5 h-[1px] bg-wedding-gold/30" /><span className="text-sm">Chú rể</span><span className="font-serif text-base text-wedding-red">Trường An</span><div className="w-5 h-[1px] bg-wedding-gold/30" />
            </div>
          </div>
          <div className="text-center w-full md:w-1/2 px-4 group mt-6 md:mt-0">
            <p className="text-xs tracking-[0.3em] text-wedding-gold uppercase mb-3">Nhà Gái</p>
            <p className="font-serif text-xl md:text-2xl mb-1 group-hover:scale-105 transition-transform">Đinh Văn Long</p>
            <p className="font-serif text-xl md:text-2xl mb-3 group-hover:scale-105 transition-transform">Ngô Thị Bích Ngọc</p>
            <div className="flex items-center justify-center gap-2 text-wedding-text/60 italic">
              <div className="w-5 h-[1px] bg-wedding-gold/30" /><span className="text-sm">Cô dâu</span><span className="font-serif text-base text-wedding-red">Ngọc Linh</span><div className="w-5 h-[1px] bg-wedding-gold/30" />
            </div>
          </div>
        </div>
        {/* Decorative Bottom */}
        <div className="w-32 mx-auto my-4 text-wedding-gold opacity-60">
          <svg viewBox="0 0 200 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full">
            <line x1="0" y1="10" x2="80" y2="10" /><polygon points="100,2 105,10 100,18 95,10" fill="currentColor" /><line x1="120" y1="10" x2="200" y2="10" />
          </svg>
        </div>
        <p className="text-lg md:text-xl font-serif text-wedding-red italic mt-4">Sự hiện diện của Quý khách là niềm vinh hạnh<br className="hidden md:block" /> cho gia đình chúng tôi!</p>
      </div>
    </motion.div>
  );
}

// --- Main Component ---
export default function Invitation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 md:py-32 px-6 bg-wedding-bg bg-pattern relative perspective-1000 overflow-hidden" id="invitation">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wedding-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-wedding-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-red mb-3">Thiệp Mời</h2>
          <div className="w-20 h-[1px] bg-wedding-red/30 mx-auto" />
          {!isOpen && (
            <p className="mt-4 text-wedding-text/60 font-sans text-sm tracking-widest uppercase animate-pulse">
              Nhấn vào phong bì để mở thiệp
            </p>
          )}
        </motion.div>

        {/* === ENVELOPE SCENE === */}
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* --- CLOSED ENVELOPE --- */
            <motion.div
              key="envelope"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto cursor-pointer group w-full max-w-[380px] md:max-w-[525px]"
              style={{ aspectRatio: "4/2.7" }}
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.03, y: -6 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Outer wrapper for idle floating animation */}
              <motion.div
                className="w-full h-full"
                animate={{ y: [0, -10, 0], rotate: [-0.8, 0.8, -0.8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Envelope Body */}
                <EnvelopeBody isOpen={false} />

                {/* Wax Seal — centered on the flap fold */}
                <motion.div
                  className="absolute z-10 rounded-full shadow-[0_4px_20px_rgba(197,160,89,0.5)]"
                  style={{ width: 80, height: 80, top: "calc(50% - 32px)", left: "calc(50% - 40px)" }}
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                >
                  <WaxSeal />
                </motion.div>

                {/* Hover hint glow */}
                <div className="absolute inset-0 rounded-sm bg-wedding-gold/0 group-hover:bg-wedding-gold/5 transition-colors duration-300 pointer-events-none" />
              </motion.div>
            </motion.div>
          ) : (
            /* --- OPEN: REVEALED INVITATION CARD --- */
            <motion.div
              key="card"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="text-center"
              style={{ perspective: 1200 }}
            >
              <InvitationCard />
              {/* Re-seal hint */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={() => setIsOpen(false)}
                className="mt-8 text-xs tracking-widest uppercase text-wedding-text/40 hover:text-wedding-gold transition-colors duration-300 font-sans"
              >
                ✕ Đóng thiệp
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
