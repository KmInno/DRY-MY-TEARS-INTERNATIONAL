import React from "react";
import { motion } from "framer-motion";
import { programs } from "../data/siteData";
import ProgramCard from "./ProgramCard";
import SectionHeading from "./SectionHeading";

export default function Programs() {
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} id="programs" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Our Programs"
          title="Helping Children Thrive"
          text="Programs focused on education, care, protection, and growth."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
          {programs.map((program, index) => (
            <motion.div key={program.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.05 }}>
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}