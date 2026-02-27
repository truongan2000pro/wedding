import { motion } from "motion/react";

export default function Events() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-red mb-4">
            Sự Kiện
          </h2>
          <div className="w-16 h-[1px] bg-wedding-red/30 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 relative">
          {/* Lễ Thành Hôn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="border border-wedding-red/10 pt-20 pb-12 px-8 md:px-12 relative bg-wedding-bg rounded-t-[140px] rounded-b-[40px] shadow-lg shadow-wedding-red/5"
          >
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-wedding-red/5 p-4 rounded-full text-wedding-red">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="w-8 h-8"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            <h3 className="text-2xl font-serif text-center text-wedding-red mb-8 uppercase tracking-widest mt-4">
              Lễ Thành Hôn
            </h3>

            <div className="space-y-6 text-center">
              <div>
                <p className="text-sm uppercase tracking-wider text-wedding-text/60 mb-1">
                  Thời gian
                </p>
                <p className="text-xl font-serif text-wedding-red">
                  16:00 | 29.03.2026
                </p>
                <p className="text-sm mt-1 italic">Chủ Nhật</p>
                <p className="text-sm mt-1 italic">
                  Tức ngày 11 tháng 02 năm Bính Ngọ
                </p>
              </div>

              <div className="w-12 h-[1px] bg-wedding-red/20 mx-auto" />

              <div>
                <p className="text-sm uppercase tracking-wider text-wedding-text/60 mb-1">
                  Địa điểm
                </p>
                <p className="text-lg font-serif text-wedding-red mb-2">
                  Tại Nhà Riêng
                </p>
                <p className="text-sm leading-relaxed">
                  Xóm 15 Tây Lạc, Đồng Sơn, Nam Trực, Nam Định
                </p>
              </div>
            </div>
          </motion.div>

          {/* Lễ Vu Quy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-wedding-red/10 pt-20 pb-12 px-8 md:px-12 relative bg-wedding-bg rounded-t-[140px] rounded-b-[40px] shadow-lg shadow-wedding-red/5"
          >
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-wedding-red/5 p-4 rounded-full text-wedding-red">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="w-8 h-8"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            <h3 className="text-2xl font-serif text-center text-wedding-red mb-8 uppercase tracking-widest mt-4">
              Lễ Vu Quy
            </h3>

            <div className="space-y-6 text-center">
              <div>
                <p className="text-sm uppercase tracking-wider text-wedding-text/60 mb-1">
                  Thời gian
                </p>
                <p className="text-xl font-serif text-wedding-red">
                  09:00 | 29.03.2026
                </p>
                <p className="text-sm mt-1 italic">Chủ Nhật</p>
                <p className="text-sm mt-1 italic">
                  Tức ngày 11 tháng 02 năm Bính Ngọ
                </p>
              </div>

              <div className="w-12 h-[1px] bg-wedding-red/20 mx-auto" />

              <div>
                <p className="text-sm uppercase tracking-wider text-wedding-text/60 mb-1">
                  Địa điểm
                </p>
                <p className="text-lg font-serif text-wedding-red mb-2">
                  Tại Nhà Riêng
                </p>
                <p className="text-sm leading-relaxed">
                  19 Đỗ Hành, Hai Bà Trưng, Hà Nội
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tiệc Cưới Chung */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-12 border border-wedding-red/20 pt-20 pb-12 px-8 md:px-12 relative bg-wedding-red text-white rounded-[40px] shadow-xl"
        >
          <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/10 p-4 rounded-full text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="w-8 h-8"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          <h3 className="text-2xl font-serif text-center mb-8 uppercase tracking-widest mt-4">
            Tiệc Cưới Chung
          </h3>

          <div className="space-y-6 text-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-white/60 mb-1">
                Thời gian
              </p>
              <p className="text-2xl font-serif text-wedding-gold">
                11:00 | 29.03.2026
              </p>
              <p className="text-sm mt-1 italic">Chủ Nhật</p>
            </div>

            <div className="w-12 h-[1px] bg-white/20 mx-auto" />

            <div>
              <p className="text-sm uppercase tracking-wider text-white/60 mb-1">
                Địa điểm
              </p>
              <p className="text-xl font-serif mb-2">
                Trung Tâm Tiệc Cưới STAR GALAXY
              </p>
              <p className="text-sm leading-relaxed">Tại Sảnh Tầng 4</p>
              <p className="text-sm leading-relaxed">
                Số 87 Láng Hạ, Đống Đa, Hà Nội
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
