import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import GalleryCard from "../components/GalleryCard";

// Added titles and captions to prevent undefined errors in the lightbox
const galleryItems = [
  { image: "/images/image01.webp", title: "Morning Care", caption: "Starting the day with smiles." },
  { image: "/images/image02.webp", title: "Classroom", caption: "Learning and growing together." },
  { image: "/images/image03.webp", title: "Playtime", caption: "Outdoor activities and fun." },
  { image: "/images/image04.webp", title: "Art Class", caption: "Expressing creativity." },
  { image: "/images/image05.webp", title: "Lunch Time", caption: "Nutritious meals for everyone." },
  { image: "/images/image06.webp", title: "Reading", caption: "Quiet time in the library." },
  { image: "/images/image07.webp", title: "Sports", caption: "Teamwork on the field." },
  { image: "/images/image08.webp", title: "Music", caption: "Discovering hidden talents." },
  { image: "/images/image09.webp", title: "Celebration", caption: "Birthday festivities." },
  { image: "/images/img33.jpeg", title: "Community", caption: "Building lifelong friendships." },
  { image: "/images/img22.jpeg", title: "Mentorship", caption: "Guidance from our volunteers." },
  { image: "/images/images666.jpeg", title: "Garden", caption: "Learning to grow our own food." },
  { image: "/images/images555.jpeg", title: "Crafts", caption: "Handmade projects." },
  { image: "/images/images222.jpeg", title: "Evening", caption: "Winding down the day." },
  { image: "/images/image33.jpeg", title: "Hope", caption: "Looking towards a bright future." },
];

function Gallery() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    document.title = "Gallery | Dry My Tears International";

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, galleryItems.length - visibleCards);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused || maxIndex === 0 || lightboxIndex !== null) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex, lightboxIndex]);

  // Lightbox Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const prevSlide = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  const goToSlide = (index) => setCurrentIndex(Math.min(maxIndex, Math.max(0, index)));

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const lightboxPrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };
  const lightboxNext = () => {
    setLightboxIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const translatePercent = -(currentIndex * (100 / visibleCards));

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-slate-50 py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from everyday life"
          text="A glimpse into the care, learning, and joy that shape life at the orphanage."
        />

        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Viewport Wrapper */}
          <div className="overflow-hidden px-2 py-6 -mx-2">
            <motion.div
              animate={{ x: `${translatePercent}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex -mx-3"
            >
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 flex"
                >
                  <div className="w-full h-full transform transition-transform duration-300 hover:-translate-y-1">
                    <GalleryCard
                      {...item}
                      onImageClick={() => openLightbox(index)}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Navigation Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 px-2 gap-4">
            {/* Prev/Next Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 hover:text-slate-900 transition-all duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 hover:text-slate-900 transition-all duration-200"
                aria-label="Next slide"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex flex-wrap justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx
                      ? "bg-slate-800 w-8"
                      : "bg-slate-300 w-2.5 hover:bg-slate-400"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-[110]"
              aria-label="Close viewer"
            >
              <X size={24} />
            </button>

            {/* Navigation Controls and Image Frame */}
            <div className="relative w-full max-w-6xl max-h-[85vh] flex items-center justify-center group">
              {/* Left Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  lightboxPrev();
                }}
                className="absolute left-2 md:-left-16 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition-all duration-200 z-[110] backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Image Viewer Container */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl bg-black flex items-center justify-center border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryItems[lightboxIndex].image}
                  alt={galleryItems[lightboxIndex].title}
                  className="object-contain max-w-full max-h-[75vh] w-auto h-auto"
                />

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-12 text-white text-left">
                  <h4 className="text-xl font-bold tracking-wide">
                    {galleryItems[lightboxIndex].title || "Gallery Image"}
                  </h4>
                  <p className="mt-1 text-sm text-slate-300">
                    {galleryItems[lightboxIndex].caption}
                  </p>
                  <div className="text-xs text-slate-400 mt-3 font-medium uppercase tracking-wider">
                    {lightboxIndex + 1} / {galleryItems.length}
                  </div>
                </div>
              </motion.div>

              {/* Right Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  lightboxNext();
                }}
                className="absolute right-2 md:-right-16 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition-all duration-200 z-[110] backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}

export default Gallery;