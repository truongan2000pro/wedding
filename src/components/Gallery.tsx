import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

// Mock Data for the gallery
// Using high-quality unsplash images with various aspect ratios for the masonry effect
const GALLERY_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    alt: "Wedding Venue Setup",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    alt: "Couple in Traditional Dress",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
    alt: "Wedding Rings",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    alt: "Couple Happy Moment",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    alt: "Wedding Dress Details",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1532712938736-e63b610c1fbf?q=80&w=2073&auto=format&fit=crop",
    alt: "Floral Arrangements",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    alt: "Wedding Cake",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop",
    alt: "Reception Table",
  },
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
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
    // Prevent scrolling when lightbox is open
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
    <section className="py-24 bg-wedding-bg relative" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-wedding-red mb-4">Khoảnh Khắc</h2>
            <div className="w-16 h-[1px] bg-wedding-red/30 mx-auto" />
            <p className="mt-4 text-wedding-red/70 font-sans tracking-wide">
              Lưu giữ những kỷ niệm đẹp nhất
            </p>
          </motion.div>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay with subtle gradient and icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Expand className="w-6 h-6 text-white drop-shadow-md" />
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors z-50"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/60 rounded-full transition-colors z-50 hidden sm:block"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <div className="relative w-full max-w-6xl max-h-[90vh] px-4 flex justify-center items-center">
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 200 }}
                src={GALLERY_IMAGES[selectedImageIndex].url}
                alt={GALLERY_IMAGES[selectedImageIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
              />

              {/* Mobile Swipe Indicators (Visual only, functional requires touch handlers, but users know to click/tap sides) */}
              <div className="absolute bottom-[-40px] left-0 right-0 text-center text-white/50 text-sm sm:hidden tracking-wider">
                {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/60 rounded-full transition-colors z-50 hidden sm:block"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
