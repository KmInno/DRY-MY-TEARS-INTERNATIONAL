function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-8 text-slate-700">{text}</p>
    </div>
  );
}

export default SectionHeading;
