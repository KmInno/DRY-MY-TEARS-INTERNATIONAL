import SectionHeading from "../components/SectionHeading";
import GalleryCard from "../components/GalleryCard";

const galleryItems = [
  {
    title: "Learning Time",
    caption: "Children reading and studying together in a calm and supportive environment.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Meal Time",
    caption: "Healthy meals served with warmth and care every day.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Playground Joy",
    caption: "Safe play and outdoor time help children grow with confidence.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Community Support",
    caption: "Volunteers and donors helping create brighter futures for every child.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
  },
];

function Gallery() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from everyday life"
          text="A glimpse into the care, learning, and joy that shape life at the orphanage."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {galleryItems.map((item) => (
            <GalleryCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Gallery;
