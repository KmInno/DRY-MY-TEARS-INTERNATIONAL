import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Dry My Tears International";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
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
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          text="Reach out to learn more about our mission, ask questions, or arrange a visit."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.45 }} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900">Contact Details</h2>
            <div className="mt-5 space-y-3 text-slate-600">
              <p><span className="font-semibold text-slate-900">Phone:</span> +231-555-743-687</p>
              <p><span className="font-semibold text-slate-900">Email:</span> drymytearsinternational2@gmail.com</p>
              <p><span className="font-semibold text-slate-900">Location:</span> Asian Community, Monrovia, Liberia</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.45 }} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900">Send a Message</h2>
            {submitted ? (
              <div className="mt-6 rounded-2xl bg-emerald-50 p-6 text-center text-emerald-800 ring-1 ring-emerald-600/10">
                <h3 className="text-lg font-semibold">Message Sent!</h3>
                <p className="mt-2 text-sm leading-6">
                  Thank you, <strong className="font-semibold">{formData.name}</strong>.
                  Your message has been successfully received. We will respond to you at <strong>{formData.email}</strong> shortly.
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
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-slate-950 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-slate-950 focus:outline-none"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-slate-950 focus:outline-none"
                    rows="5"
                    placeholder="Message"
                  />
                </div>
                <button type="submit" className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}

export default Contact;
