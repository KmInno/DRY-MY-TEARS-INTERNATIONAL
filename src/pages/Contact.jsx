import SectionHeading from "../components/SectionHeading";

function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          text="Reach out to learn more about our mission, ask questions, or arrange a visit."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900">Contact Details</h2>
            <div className="mt-5 space-y-3 text-slate-600">
              <p><span className="font-semibold text-slate-900">Phone:</span> +231-555-743-687</p>
              <p><span className="font-semibold text-slate-900">Email:</span> drymytearsinternational2@gmail.com</p>
              <p><span className="font-semibold text-slate-900">Location:</span> Asian Community, Monrovia, Liberia</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900">Send a Message</h2>
            <form className="mt-6 space-y-4">
              <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Your Name" />
              <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Email" />
              <textarea className="w-full rounded-2xl border border-slate-300 px-4 py-3" rows="5" placeholder="Message" />
              <button className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
