function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>
    </div>
  );
}

export default SectionHeading;
