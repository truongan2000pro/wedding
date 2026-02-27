import { motion } from "motion/react";

export default function Invitation() {
  return (
    <section className="py-24 md:py-32 px-6 bg-wedding-bg bg-pattern relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-sm p-10 md:p-16 rounded-[40px] shadow-xl shadow-wedding-red/5 border border-wedding-red/10"
        >
          <div className="w-16 h-16 mx-auto mb-8 text-wedding-red">
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

          <h2 className="text-4xl md:text-5xl font-serif text-wedding-red mb-6">
            Trân Trọng Kính Mời
          </h2>

          <div className="w-24 h-[1px] bg-wedding-red/30 mx-auto mb-10" />

          <p className="text-lg md:text-xl leading-relaxed text-wedding-text/80 mb-8 font-serif italic">
            Tới dự buổi tiệc chung vui cùng gia đình chúng tôi
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-wedding-red mb-12">
            <div className="text-center bg-wedding-bg/50 p-6 rounded-3xl w-full md:w-auto">
              <p className="text-sm tracking-widest uppercase mb-3">Nhà Trai</p>
              <p className="font-serif text-2xl">Vũ Dương Bằng</p>
              <p className="font-serif text-2xl">Vũ Thị Liên</p>
              <p className="text-sm mt-3 text-wedding-text/60 italic">
                Chú rể Trường An
              </p>
            </div>

            <div className="hidden md:block w-[1px] h-32 bg-wedding-red/20" />

            <div className="text-center bg-wedding-bg/50 p-6 rounded-3xl w-full md:w-auto">
              <p className="text-sm tracking-widest uppercase mb-3">Nhà Gái</p>
              <p className="font-serif text-2xl">Đinh Văn Long</p>
              <p className="font-serif text-2xl">Ngô Thị Bích Ngọc</p>
              <p className="text-sm mt-3 text-wedding-text/60 italic">
                Cô dâu Ngọc Linh
              </p>
            </div>
          </div>

          <p className="text-xl md:text-2xl font-serif text-wedding-red italic">
            Sự hiện diện của Quý khách là niềm vinh hạnh cho gia đình chúng tôi!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
