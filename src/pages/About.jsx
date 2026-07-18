import { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Team from "../components/Team";

function About() {
  useEffect(() => {
    document.title = "About Us | Dry My Tears International";
  }, []);

  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="We stand with vulnerable children and families"
          text="Dry My Tears International is committed to restoring dignity, safety, and hope through compassionate care, education, and practical support."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.45 }} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-semibold text-slate-900">Our Mission</h2>
              <p className="mt-4 text-slate-600 leading-8">
               "Touch a life.Dry a tear.Inspire a future."
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.45 }} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-semibold text-slate-900">Our Work</h2>
              <p className="mt-4 text-slate-600 leading-8">
                Our work focuses on education, healthcare, child welfare support, and community development so each child can thrive at home and in school.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="relative h-[450px] overflow-hidden rounded-3xl shadow-md ring-1 ring-slate-200"
          >
            <img
              src="/images/image05.webp"
              alt="Children playing safely"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="mt-16">
        <Team />
      </div>
    </motion.main>
  );
}

export default About;
