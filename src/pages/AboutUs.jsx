function AboutUs() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">About us</p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          We stand with children and families in need.
        </h2>
        <p className="text-lg leading-8 text-slate-600">
          Dry My Tears International is a humanitarian organization committed to restoring dignity,
          safety, and hope for underserved children through compassionate care and practical support.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900">Our Mission</h3>
          <p className="mt-3 text-slate-600">
            To create safe environments where children can learn, heal, and build brighter futures.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900">Our Work</h3>
          <p className="mt-3 text-slate-600">
            We focus on education, health care, child welfare support, and community development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
