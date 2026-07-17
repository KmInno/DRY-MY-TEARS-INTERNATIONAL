function GalleryCard({ title, caption, image, onImageClick }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col h-full">
      <div 
        className="relative overflow-hidden w-full h-72 sm:h-80 md:h-[350px] lg:h-[400px] cursor-pointer"
        onClick={onImageClick}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 flex-grow">
          {caption}
        </p>
      </div>
    </div>
  );
}

export default GalleryCard;
