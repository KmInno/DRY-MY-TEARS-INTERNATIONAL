function GalleryCard({ title, caption, image }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <img src={image} alt={title} className="h-64 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">{caption}</p>
      </div>
    </div>
  );
}

export default GalleryCard;
