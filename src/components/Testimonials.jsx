import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/siteData";
import TestimonialCard from "./TestimonialCard";
import SectionHeading from "./SectionHeading";
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 24 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ duration: 0.5 }} 
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
          text="Hear from our volunteers and supporters."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((item, index) => (
            <motion.div 
              key={item.name} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex flex-col h-full rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200/80 transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Star Rating Header */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(item.rating || 5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-amber-400 fill-amber-400" 
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <TestimonialCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}