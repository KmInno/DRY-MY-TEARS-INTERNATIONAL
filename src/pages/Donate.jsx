import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, BookOpen, Utensils, Home } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

function Donate() {
  useEffect(() => {
    document.title = "Donate | Dry My Tears International";
  }, []);

  const impactAreas = [
    {
      icon: <Utensils className="w-6 h-6 text-amber-500" />,
      title: "Nutritious Meals",
      description: "Ensures no child goes to bed hungry by providing three healthy meals and clean drinking water daily."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      title: "Quality Education",
      description: "Covers school fees, uniforms, textbooks, and supplies so every child can learn and build a brighter future."
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Healthcare",
      description: "Provides medical checkups, emergency care, and hygiene supplies to keep our children healthy and strong."
    },
    {
      icon: <Home className="w-6 h-6 text-emerald-500" />,
      title: "Safe Shelter",
      description: "Maintains a secure, warm, and loving environment with comfortable beds, clothing, and dedicated caretakers."
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
        
        {/* Header */}
        <SectionHeading
          eyebrow="Donate"
          title="Transform a Child's Life Today"
          text="Every contribution, no matter the size, directly supports the care, education, and well-being of our children. Be the reason they smile."
        />

        {/* Primary Donation Call-to-Actions */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <motion.div 
            initial={{ opacity: 0, y: 18 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1, duration: 0.45 }} 
            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 transition-shadow duration-300 hover:shadow-xl"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Monthly Support</h3>
              <p className="mt-3 text-slate-600">Sustain our daily operations and provide consistent, reliable care for the children month after month.</p>
            </div>
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center"
            >
              <button className="w-full rounded-full bg-amber-500 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-amber-600 hover:shadow-lg">
                Give Monthly
              </button>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 18 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.45 }} 
            className="relative flex flex-col justify-between rounded-3xl bg-slate-900 p-8 shadow-xl ring-1 ring-slate-800 transition-shadow duration-300 hover:shadow-2xl"
          >
            {/* "Most Popular" Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-rose-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-sm">
              Greatest Need
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">One-Time Gift</h3>
              <p className="mt-3 text-slate-300">Make an immediate impact today. Your one-time gift helps us cover urgent needs and special projects.</p>
            </div>
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center"
            >
              <button className="w-full rounded-full bg-white px-5 py-3 font-semibold text-slate-900 shadow-md transition hover:bg-slate-100 hover:shadow-lg">
                Donate Now
              </button>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 18 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.45 }} 
            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 transition-shadow duration-300 hover:shadow-xl"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Sponsor a Child</h3>
              <p className="mt-3 text-slate-600">Build a personal connection. Your sponsorship covers a specific child's holistic needs for an entire year.</p>
            </div>
            <Link to="/contact" className="mt-8 block text-center">
              <button className="w-full rounded-full border-2 border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900">
                Become a Sponsor
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Impact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-24 rounded-3xl bg-white p-8 md:p-12 shadow-md ring-1 ring-slate-200"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Your Gift Provides</h2>
            <p className="mt-4 text-slate-600">
              Transparency is our priority. 100% of public donations go directly towards programs that benefit the children in our care.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactAreas.map((area, index) => (
              <div key={index} className="text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-100 shadow-sm">
                  {area.icon}
                </div>
                <h4 className="mt-6 font-semibold text-slate-900">{area.title}</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Other Ways to Help Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-amber-50 px-8 py-10 ring-1 ring-amber-100 md:flex-row md:px-12"
        >
          <div className="text-center md:text-left max-w-xl">
            <h3 className="text-xl font-bold text-amber-900">Other Ways to Help</h3>
            <p className="mt-2 text-amber-800/80">
              We also accept in-kind donations like clothing, educational materials, and non-perishable food. Want to volunteer your time or partner with us?
            </p>
          </div>
          <Link to="/contact" className="shrink-0">
            <button className="rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-amber-700 hover:shadow-lg">
              Contact Us
            </button>
          </Link>
        </motion.div>

      </div>
    </motion.main>
  );
}

export default Donate;