import { motion } from "motion/react";

export default function Gallery() {
  return (
    <section className="py-24 bg-wedding-bg relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-red mb-4">
            Khoảnh Khắc
          </h2>
          <div className="w-16 h-[1px] bg-wedding-red/30 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image 1: Traditional / Red Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="aspect-[3/4] overflow-hidden relative group"
          >
            {/* Replace src with your actual image URL */}
            <img
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop"
              alt="Trường An & Ngọc Linh"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-wedding-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Image 2: Western / White Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[3/4] overflow-hidden relative group md:mt-16"
          >
            {/* Replace src with your actual image URL */}
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
              alt="Trường An & Ngọc Linh"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
