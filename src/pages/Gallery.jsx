import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import GalleryCard from "../components/GalleryCard";

const galleryItems = [
  {
    title: "Classroom Learning",
    caption: "Empowering children through structured, high-quality education and creative activities.",
    image: "/images/image01.webp",
  },
  {
    title: "Playtime & Recreations",
    caption: "Fostering happiness and social skills through group play, games, and sports.",
    image: "/images/image02.webp",
  },
  {
    title: "Nutritious Meals",
    caption: "Providing healthy, balanced diets daily to support physical growth and overall well-being.",
    image: "/images/image03.webp",
  },
  {
    title: "Creative Workshops",
    caption: "Encouraging artistic expression and hands-on crafting to build confidence.",
    image: "/images/image04.webp",
  },
  {
    title: "Outreach & Community",
    caption: "Partnering with local groups to distribute essentials and support surrounding families.",
    image: "/images/image05.webp",
  },
  {
    title: "Safe Haven",
    caption: "A warm and protective home environment where every child feels secure and loved.",
    image: "/images/image06.webp",
  },
  {
    title: "Individual Mentorship",
    caption: "One-on-one sessions that nurture emotional health and build positive character.",
    image: "/images/image07.webp",
  },
  {
    title: "Skills Training",
    caption: "Teaching practical life skills that prepare older youth for independent futures.",
    image: "/images/image08.webp",
  },
  {
    title: "Celebrating Milestones",
    caption: "Recognizing academic achievements and birthdays, making every child feel special.",
    image: "/images/image09.webp",
  },
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

  // Auto-slide effect that loops back to 0 when reaching the end, pausing on hover or when lightbox is open
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

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(maxIndex, Math.max(0, index)));
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const lightboxPrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const lightboxNext = () => {
    setLightboxIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  // Adjust translate calculation to use percentage based on current index and width of each card slot
  const translatePercent = -(currentIndex * (100 / visibleCards));

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-white py-16"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
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
          {/* Carousel Viewport Wrapper with horizontal overflow hidden and vertical padding for shadows */}
          <div className="overflow-hidden px-1 py-4 -mx-1">
            <div
              className="flex transition-transform duration-500 ease-out -mx-3"
              style={{ transform: `translateX(${translatePercent}%)` }}
            >
              {galleryItems.map((item, index) => (
                <div
                  key={item.title}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 flex"
                >
                  <div className="w-full h-full">
                    <GalleryCard 
                      {...item} 
                      onImageClick={() => openLightbox(index)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Footer */}
          <div className="flex justify-between items-center mt-6 px-2">
            {/* Prev/Next Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-primary hover:border-slate-300 transition-all duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft size={22} className="text-slate-700" />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-primary hover:border-slate-300 transition-all duration-200"
                aria-label="Next slide"
              >
                <ChevronRight size={22} className="text-slate-700" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "bg-accent w-6" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 md:p-8"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-rose-400 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-[110] shadow-lg"
            aria-label="Close viewer"
          >
            <X size={24} />
          </button>

          {/* Navigation Controls and Image Frame */}
          <div className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center">
            {/* Left Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxPrev();
              }}
              className="absolute left-2 md:-left-20 text-white hover:text-amber-400 bg-white/10 hover:bg-white/25 p-4 rounded-full transition-all duration-200 z-[110] shadow-lg backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image Viewer Container */}
            <div
              className="relative overflow-hidden rounded-2xl shadow-2xl max-w-full max-h-[75vh] bg-slate-900 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightboxIndex].image}
                alt={galleryItems[lightboxIndex].title}
                className="object-contain max-w-full max-h-[75vh] w-auto h-auto transition-all duration-300"
              />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 backdrop-blur-sm p-6 text-white border-t border-white/10 text-left">
                <h4 className="text-xl font-bold text-amber-400">
                  {galleryItems[lightboxIndex].title}
                </h4>
                <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                  {galleryItems[lightboxIndex].caption}
                </p>
                <div className="text-xs text-slate-400 mt-2 font-medium">
                  Image {lightboxIndex + 1} of {galleryItems.length}
                </div>
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxNext();
              }}
              className="absolute right-2 md:-right-20 text-white hover:text-amber-400 bg-white/10 hover:bg-white/25 p-4 rounded-full transition-all duration-200 z-[110] shadow-lg backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </motion.main>
  );
}

export default Gallery;
