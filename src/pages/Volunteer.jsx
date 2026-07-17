import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

function Volunteer() {
  useEffect(() => {
    document.title = "Volunteer | Dry My Tears International";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, interest } = formData;
    if (!name.trim() || !email.trim() || !phone.trim() || !interest.trim()) {
      setError("Please fill out all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Volunteer"
          title="Join our team of helpers"
          text="We welcome caring people who want to help with teaching, meals, mentoring, events, and fundraising."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.45 }} className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900">Ways to Help</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Teaching and homework support</li>
              <li>• Meal preparation and serving</li>
              <li>• Mentoring and counseling support</li>
              <li>• Event planning and fundraising</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.45 }} className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900">Volunteer Form</h2>
            {submitted ? (
              <div className="mt-6 rounded-2xl bg-emerald-50 p-6 text-center text-emerald-800 ring-1 ring-emerald-600/10">
                <h3 className="text-lg font-semibold">Application Received!</h3>
                <p className="mt-2 text-sm leading-6">
                  Thank you, <strong className="font-semibold">{formData.name}</strong>, for your willingness to help.
                  We have received your application and will contact you via email at <strong>{formData.email}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {error && (
                  <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700 ring-1 ring-red-600/10">
                    {error}
                  </div>
                )}
                <div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <textarea
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
                    rows="4"
                    placeholder="How would you like to help?"
                  />
                </div>
                <button type="submit" className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600">
                  Submit Application
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}

export default Volunteer;
