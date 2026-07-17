import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/siteData";
import TestimonialCard from "./TestimonialCard";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
          text="Hear from our volunteers and supporters."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((item, index) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.05 }}>
              <TestimonialCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}