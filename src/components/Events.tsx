import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Heart, BookHeart, Church } from "lucide-react";

export default function Events() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"], // Start when container top enters bottom of viewport, end when container bottom enters bottom
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section className="py-32 bg-wedding-bg relative overflow-hidden" id="events">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10" ref={containerRef}>
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-wedding-red mb-6 drop-shadow-sm">
              Sự Kiện
            </h2>
            <div className="w-24 h-[1px] bg-wedding-red/30 mx-auto" />
            <p className="mt-6 text-wedding-text/70 font-sans tracking-widest uppercase text-sm">
              Timeline of our special day
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Main Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-wedding-red/10 -translate-x-1/2 rounded-full" />

          {/* Animated Timeline Scroll Progress */}
          <motion.div
            className="absolute left-1/2 top-0 w-[2px] bg-wedding-gold -translate-x-1/2 rounded-full origin-top shadow-[0_0_10px_#c5a059]"
            style={{ height: timelineHeight }}
          />

          <div className="space-y-16 md:space-y-32">
            {/* Event 1: Lễ Vu Quy (Left) */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
              {/* Timeline Center Node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.5, type: "spring" }}
                className="absolute left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-wedding-red border-[3px] md:border-4 border-wedding-bg z-10 flex items-center justify-center shadow-[0_0_15px_rgba(144,26,30,0.3)]"
              >
                <Heart className="w-4 h-4 md:w-6 md:h-6 text-wedding-gold" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 50, x: 0 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[45%] md:pr-12 md:text-right mt-12 md:mt-0"
              >
                <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg shadow-wedding-red/5 border border-wedding-red/10 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-wedding-gold/20 hover:border-wedding-gold/40 transition-all duration-500">
                  <h3 className="text-3xl font-serif text-wedding-red mb-2">Lễ Vu Quy</h3>
                  <p className="font-serif text-xl tracking-widest text-wedding-gold mb-6">
                    09:00 | 29.03.2026
                  </p>
                  <div className="space-y-4 text-wedding-text/80 leading-relaxed text-sm md:text-base">
                    <p className="italic">Chủ Nhật - Tức 11/02 Bính Ngọ</p>
                    <div className="w-12 h-[1px] bg-wedding-red/20 md:ml-auto group-hover:bg-wedding-gold/50 transition-colors duration-500" />
                    <p className="font-medium">Tại Nhà Gái</p>
                    <p>12 Đỗ Hành, Hai Bà Trưng, Hà Nội</p>
                  </div>
                </div>
              </motion.div>

              {/* Spacer for right side */}
              <div className="hidden md:block w-[45%]" />
            </div>

            {/* Event 2: Lễ Thành Hôn (Right) */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
              {/* Timeline Center Node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                className="absolute left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-wedding-red border-[3px] md:border-4 border-wedding-bg z-10 flex items-center justify-center shadow-[0_0_15px_rgba(144,26,30,0.3)]"
              >
                <BookHeart className="w-4 h-4 md:w-6 md:h-6 text-wedding-gold" />
              </motion.div>

              {/* Spacer for left side */}
              <div className="hidden md:block w-[45%]" />

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 50, x: 0 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[45%] md:pl-12 mt-12 md:mt-0 md:text-left"
              >
                <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg shadow-wedding-red/5 border border-wedding-red/10 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-wedding-gold/20 hover:border-wedding-gold/40 transition-all duration-500">
                  <h3 className="text-3xl font-serif text-wedding-red mb-2">Lễ Thành Hôn</h3>
                  <p className="font-serif text-xl tracking-widest text-wedding-gold mb-6">
                    16:00 | 29.03.2026
                  </p>
                  <div className="space-y-4 text-wedding-text/80 leading-relaxed text-sm md:text-base">
                    <p className="italic">Chủ Nhật - Tức 11/02 Bính Ngọ</p>
                    <div className="w-12 h-[1px] bg-wedding-red/20 group-hover:bg-wedding-gold/50 transition-colors duration-500" />
                    <p className="font-medium">Tại Nhà Riêng</p>
                    <p>Xóm 15 Tây Lạc, Đồng Sơn, Nam Trực, Nam Định</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Event 3: Tiệc Cưới Chung (Center/Bottom) */}
            <div className="relative flex flex-col items-center justify-center w-full mt-16 md:mt-32">
              {/* Timeline Center Node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.5, type: "spring", delay: 0.4 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-wedding-red border-[3px] md:border-4 border-wedding-bg z-10 flex items-center justify-center shadow-[0_0_20px_rgba(144,26,30,0.5)]"
              >
                <Church className="w-4 h-4 md:w-5 md:h-5 text-wedding-gold" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1 }}
                className="w-full md:w-2/3 lg:w-1/2 mt-12"
              >
                <div className="bg-wedding-red text-white p-1 rounded-[40px] shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-wedding-gold/20 via-transparent to-black/30 pointer-events-none" />

                  <div className="border border-white/20 rounded-[36px] p-8 md:p-12 text-center bg-wedding-red/90 backdrop-blur-sm relative z-10">
                    <h3 className="text-3xl md:text-4xl font-serif mb-3">Tiệc Cưới Chung</h3>
                    <p className="font-serif text-2xl tracking-widest text-wedding-gold mb-8">
                      11:00 | 29.03.2026
                    </p>

                    <div className="space-y-4 text-white/90 leading-relaxed">
                      <p className="italic text-white/70">Sự hiện diện của quý vị là vinh hạnh cho gia đình</p>
                      <div className="w-16 h-[1px] bg-wedding-gold/50 mx-auto my-6" />
                      <p className="text-xl font-medium font-serif">Trung Tâm Tiệc Cưới STAR GALAXY</p>
                      <p className="text-sm">Tại Sảnh Tầng 4</p>
                      <p className="text-sm">Số 87 Láng Hạ, Đống Đa, Hà Nội</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Separator to Gallery */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-black/5 to-transparent flex items-end justify-center pb-8 p-0 m-0 z-0">
        <div className="w-32 opacity-40 text-wedding-gold/80 mb-[-2rem]">
          <svg viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="1" className="w-full">
            <path d="M10,15 Q25,30 40,15 T70,15" />
            <path d="M10,15 Q25,0 40,15 T70,15" />
            <circle cx="40" cy="15" r="3" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
}
