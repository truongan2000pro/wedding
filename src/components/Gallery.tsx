import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

// Gallery image data with identified landscape photos first
const GALLERY_IMAGES = [
  { id: 1, url: "/images/gallery/Lume-678.jpg", alt: "Khoảnh khắc cưới 1", isLandscape: true },
  { id: 2, url: "/images/gallery/Lume-682.jpg", alt: "Khoảnh khắc cưới 2", isLandscape: true },
  { id: 3, url: "/images/gallery/Lume-379.jpg", alt: "Khoảnh khắc cưới 3" },
  { id: 4, url: "/images/gallery/Lume-594.jpg", alt: "Khoảnh khắc cưới 4" },
  { id: 5, url: "/images/gallery/NDQ_5001.jpg", alt: "Khoảnh khắc cưới 5" },
  { id: 6, url: "/images/gallery/NDQ_5177.jpg", alt: "Khoảnh khắc cưới 6" },
  { id: 7, url: "/images/gallery/NDQ_5578.jpg", alt: "Khoảnh khắc cưới 7" },
  { id: 8, url: "/images/gallery/NDQ_5634.jpg", alt: "Khoảnh khắc cưới 8" },
  { id: 9, url: "/images/gallery/NDQ_5774.jpg", alt: "Khoảnh khắc cưới 9" },
  { id: 10, url: "/images/gallery/NDQ_5776.jpg", alt: "Khoảnh khắc cưới 10" },
  { id: 11, url: "/images/gallery/NDQ_6035.jpg", alt: "Khoảnh khắc cưới 11" },
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => (prev !== null && prev < GALLERY_IMAGES.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_IMAGES.length - 1));
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    },
    [selectedImageIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, selectedImageIndex]);

  const closeLightbox = () => setSelectedImageIndex(null);

  const nextImage = (e: any) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev !== null && prev < GALLERY_IMAGES.length - 1 ? prev + 1 : 0));
  };

  const prevImage = (e: any) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_IMAGES.length - 1));
  };

  return (
    <section className="py-24 bg-wedding-bg relative overflow-hidden" id="gallery">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-wedding-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-wedding-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-wedding-gold font-serif italic text-lg mb-2 block tracking-widest uppercase">Our Memories</span>
            <h2 className="text-4xl md:text-6xl font-serif text-wedding-red mb-6 drop-shadow-sm">Khoảnh Khắc</h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-wedding-red/20" />
              <div className="w-2 h-2 rounded-full rotate-45 border border-wedding-red/40" />
              <div className="w-12 h-[1px] bg-wedding-red/20" />
            </div>
            <p className="mt-4 text-wedding-text/60 font-sans tracking-[0.2em] uppercase text-xs md:text-sm">
              Lưu giữ những kỷ niệm đẹp nhất của chúng mình
            </p>
          </motion.div>
        </div>

        {/* Custom Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: [0.21, 1.11, 0.81, 0.99] }}
              className={`
                relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500
                ${image.isLandscape ? "lg:col-span-3 aspect-video sm:col-span-2" : "lg:col-span-2 aspect-[3/4.5]"}
              `}
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-wedding-red/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100 border border-white/20">
                  <Expand className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  <p className="text-white text-xs tracking-[0.3em] uppercase hidden sm:block">View Moment</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Fullscreen Viewer */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md overflow-hidden p-4 md:p-10"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={closeLightbox}
              className="absolute top-8 right-8 p-3 text-white/50 hover:text-white transition-colors z-[110]"
            >
              <X className="w-10 h-10 stroke-1" />
            </motion.button>

            {/* Controls */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none z-[110]">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={prevImage}
                className="pointer-events-auto cursor-pointer p-4 text-white/40 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm hidden md:block"
              >
                <ChevronLeft className="w-8 h-8 stroke-1" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={nextImage}
                className="pointer-events-auto cursor-pointer p-4 text-white/40 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm hidden md:block"
              >
                <ChevronRight className="w-8 h-8 stroke-1" />
              </motion.button>
            </div>

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center max-w-7xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  src={GALLERY_IMAGES[selectedImageIndex].url}
                  alt={GALLERY_IMAGES[selectedImageIndex].alt}
                  className="max-w-full max-h-full object-contain shadow-[0_30px_100px_rgba(0,0,0,0.5)] cursor-default"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>

              {/* Status Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 font-sans tracking-[0.5em] text-[10px] md:text-xs">
                {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
              </div>
            </div>

            {/* Tap areas for mobile */}
            <div className="absolute inset-y-0 left-0 w-1/4 z-[105] md:hidden" onClick={(e) => { e.stopPropagation(); prevImage(e); }} />
            <div className="absolute inset-y-0 right-0 w-1/4 z-[105] md:hidden" onClick={(e) => { e.stopPropagation(); nextImage(e); }} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
