import { useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Users, Lightbulb } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Team from "../components/Team";

function About() {
  useEffect(() => {
    document.title = "About Us | Dry My Tears International";
  }, []);

  const coreValues = [
    {
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      title: "Compassion",
      text: "We treat every child with the love and care they deserve, creating a true sense of family."
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-500" />,
      title: "Safety",
      text: "Providing a secure, nurturing environment where children can heal and grow without fear."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-amber-500" />,
      title: "Empowerment",
      text: "Through education and life skills, we give children the tools to build their own independent futures."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Community",
      text: "We believe it takes a village, working alongside local leaders and global supporters."
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
          eyebrow="About Us"
          title="We stand with vulnerable children"
          text="Dry My Tears International is committed to restoring dignity, safety, and hope through compassionate care, education, and practical support."
        />

        {/* Hero / Mission Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 18 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1, duration: 0.45 }} 
              className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 transition-shadow duration-300 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-slate-900">Our Mission</h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-lg font-medium italic">
                "Touch a life. Dry a tear. Inspire a future."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 18 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2, duration: 0.45 }} 
              className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 transition-shadow duration-300 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-slate-900">Our Work</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our work focuses on education, healthcare, child welfare support, and community development so each child can thrive at home and in school. We aim to break the cycle of poverty by addressing both immediate needs and long-term goals.
              </p>
            </motion.div>
          </div>

          {/* Featured Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="relative h-[450px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200"
          >
            <img
              src="/images/image05.webp"
              alt="Children playing safely"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* NEW: Core Values Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every interaction we have with the children in our care.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-200 text-center sm:text-left hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100 mx-auto sm:mx-0">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-24 border-t border-slate-200/60 bg-white pt-16">
        <Team />
      </div>
    </motion.main>
  );
}

export default About;