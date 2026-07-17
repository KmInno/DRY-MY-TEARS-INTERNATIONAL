import { useEffect } from "react";
import { motion } from "framer-motion";
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
  useEffect(() => {
    document.title = "Gallery | Dry My Tears International";
  }, []);

  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from everyday life"
          text="A glimpse into the care, learning, and joy that shape life at the orphanage."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07, duration: 0.4 }}>
              <GalleryCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}

export default Gallery;
