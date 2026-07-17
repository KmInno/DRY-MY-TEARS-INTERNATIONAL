import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

function Donate() {
  useEffect(() => {
    document.title = "Donate | Dry My Tears International";
  }, []);

  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Donate"
          title="Help provide food, education, and shelter"
          text="Every contribution helps us care for children and create lasting opportunities for their future."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.45 }} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Monthly Support</h3>
            <p className="mt-3 text-slate-600">Sustain ongoing care through regular giving.</p>
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center"
            >
              <button className="w-full rounded-full bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600">
                Give Monthly
              </button>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.45 }} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">One-Time Gift</h3>
            <p className="mt-3 text-slate-600">Make an immediate impact today.</p>
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center"
            >
              <button className="w-full rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700">
                Donate Now
              </button>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.45 }} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Sponsor a Child</h3>
            <p className="mt-3 text-slate-600">Support a child’s daily needs and education.</p>
            <Link to="/contact" className="mt-6 block text-center">
              <button className="w-full rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50">
                Sponsor
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}

export default Donate;
