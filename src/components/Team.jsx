import React from "react";
import { motion } from "framer-motion";
import { teamMembers } from "../data/siteData";
import SectionHeading from "./SectionHeading";

export default function Team() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="The Hearts Behind the Mission"
          text="Meet our dedicated staff working together to support, inspire, and care for vulnerable children every day."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-300 ring-1 ring-slate-100 flex flex-col h-full"
            >
              <div className="flex justify-center pt-8">
                <div className="relative overflow-hidden w-36 h-36 rounded-full border-4 border-slate-100 shadow-md group-hover:border-accent/30 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-accent mt-1 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 flex-grow">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
