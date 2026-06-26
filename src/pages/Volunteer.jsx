import SectionHeading from "../components/SectionHeading";

function Volunteer() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Volunteer"
          title="Join our team of helpers"
          text="We welcome caring people who want to help with teaching, meals, mentoring, events, and fundraising."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900">Ways to Help</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Teaching and homework support</li>
              <li>• Meal preparation and serving</li>
              <li>• Mentoring and counseling support</li>
              <li>• Event planning and fundraising</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900">Volunteer Form</h2>
            <form className="mt-6 space-y-4">
              <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Full Name" />
              <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Email Address" />
              <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Phone Number" />
              <textarea className="w-full rounded-2xl border border-slate-300 px-4 py-3" rows="4" placeholder="How would you like to help?" />
              <button className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Volunteer;
