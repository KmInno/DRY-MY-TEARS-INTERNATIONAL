import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Utensils, HeartHandshake, CalendarHeart, CheckCircle2 } from "lucide-react";
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

  const opportunities = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      title: "Education & Tutoring",
      desc: "Help children with homework, reading, and basic math. Your patience can spark a lifelong love for learning."
    },
    {
      icon: <Utensils className="w-6 h-6 text-amber-500" />,
      title: "Kitchen & Nutrition",
      desc: "Assist our kitchen staff in preparing and serving nutritious daily meals for the children."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-rose-500" />,
      title: "Mentorship & Play",
      desc: "Spend quality time listening, playing sports, doing arts and crafts, and being a positive role model."
    },
    {
      icon: <CalendarHeart className="w-6 h-6 text-emerald-500" />,
      title: "Events & Fundraising",
      desc: "Organize local charity events, manage donation drives, or help us spread awareness in the community."
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.45 }} 
      className="min-h-screen bg-slate-50 py-16"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Volunteer"
          title="Share your time, change a life"
          text="Whether you have a few hours a week or want to join us for a special project, your presence means the world to our children."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">How You Can Help</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Volunteers are the heartbeat of our organization. We match your unique skills and interests with the greatest needs of our children.
              </p>
            </div>

            <div className="space-y-6">
              {opportunities.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: The Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.5 }} 
            className="lg:col-span-7 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10"
          >
            <h2 className="text-2xl font-bold text-slate-900">Application Form</h2>
            <p className="mt-2 text-slate-600 mb-8">Tell us a little bit about yourself and how you'd like to get involved.</p>
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center rounded-2xl bg-emerald-50 py-12 px-6 text-center ring-1 ring-emerald-200"
                >
                  <CheckCircle2 className="h-16 w-16 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-bold text-emerald-900">Application Received!</h3>
                  <p className="mt-3 text-emerald-700 leading-relaxed max-w-sm">
                    Thank you, <strong className="font-semibold">{formData.name}</strong>. We're thrilled you want to help! We will reach out to you at <strong>{formData.email}</strong> within 48 hours.
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
                      <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-amber-500/10"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">Phone Number</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-amber-500/10"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-amber-500/10"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Areas of Interest</label>
                    <textarea
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-amber-500/10"
                      rows="4"
                      placeholder="Tell us a bit about your skills and how you'd like to help..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full mt-4 rounded-xl bg-amber-500 px-6 py-4 font-bold text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg active:scale-[0.98]"
                  >
                    Submit Application
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

export default Volunteer;