import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
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
    <motion.main 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.45 }} 
      className="min-h-screen bg-slate-50 py-16"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch with us"
          text="Reach out to learn more about our mission, ask questions, or arrange a visit to the orphanage."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.1, duration: 0.5 }} 
            className="lg:col-span-5 space-y-8 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 transition-shadow duration-300 hover:shadow-xl sm:p-10"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Contact Details</h2>
              <p className="mt-3 text-slate-600">
                We'd love to hear from you. Our team is always ready to answer your questions and welcome new supporters.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100 text-slate-700 shadow-sm">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <p className="mt-1 text-slate-600">+231-555-743-687</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100 text-slate-700 shadow-sm">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="mt-1 text-slate-600 break-all">drymytearsinternational23@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100 text-slate-700 shadow-sm">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Location</h3>
                  <p className="mt-1 text-slate-600 leading-relaxed">
                    Asian Community<br />
                    Monrovia, Liberia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Message Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.5 }} 
            className="lg:col-span-7 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10"
          >
            <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
            <p className="mt-2 text-slate-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center rounded-2xl bg-emerald-50 py-12 px-6 text-center ring-1 ring-emerald-200"
                >
                  <CheckCircle2 className="h-16 w-16 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-bold text-emerald-900">Message Sent!</h3>
                  <p className="mt-3 text-emerald-700 leading-relaxed max-w-sm">
                    Thank you, <strong className="font-semibold">{formData.name}</strong>. Your message has been safely received. We will reply to <strong>{formData.email}</strong> shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  {error && (
                    <div className="rounded-xl bg-rose-50 p-4 text-sm font-medium text-rose-700 ring-1 ring-rose-200">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">Your Name</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/10"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/10"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/10"
                      rows="5"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2 mt-4 rounded-xl bg-slate-900 px-6 py-4 font-bold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg active:scale-[0.98]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}

export default Contact;