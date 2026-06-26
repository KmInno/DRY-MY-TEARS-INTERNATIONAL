import SectionHeading from "../components/SectionHeading";

function About() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="We stand with vulnerable children and families"
          text="Dry My Tears International is committed to restoring dignity, safety, and hope through compassionate care, education, and practical support."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900">Our Mission</h2>
            <p className="mt-4 text-slate-600 leading-8">
              We create safe and nurturing environments where children can learn, heal, and build brighter futures with dignity and confidence.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900">Our Work</h2>
            <p className="mt-4 text-slate-600 leading-8">
              Our work focuses on education, healthcare, child welfare support, and community development so each child can thrive at home and in school.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
