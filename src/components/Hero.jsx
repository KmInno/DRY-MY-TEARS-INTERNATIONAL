import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { stats } from "../data/siteData";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white py-20"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_converted_1.webp"
          alt="Dry My Tears children"
          className="w-full h-full object-cover object-center opacity-45 scale-100 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/25 border border-accent/40 text-rose-400 font-semibold text-sm tracking-wider uppercase mb-6">
            Dry My Tears International
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Caring for children with <span className="text-amber-400">love</span> and <span className="text-amber-400">dignity</span>.
          </h1>

          <p className="mt-6 text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl">
            Providing shelter, education, healthcare, and opportunities for vulnerable children to thrive and build bright futures.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">


          
<Link
  to="/about"
  className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-amber-500/20 transition-all duration-300 inline-block"
>
  Support a Child
</Link>
<Link
  to="/contact"
  className=" border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 "
>
  Learn More
</Link>



            

          </div>
        </motion.div>

        {/* Glassmorphic Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg"
            >
              <span className="block text-3xl font-extrabold text-amber-400">{item.value}</span>
              <span className="block text-xs uppercase tracking-wider text-slate-200 mt-2 font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}