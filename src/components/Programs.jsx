import React from "react";
import { programs } from "../data/siteData";
import ProgramCard from "./ProgramCard";
import SectionHeading from "./SectionHeading";

export default function Programs() {
  return (
    <section id="programs" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Our Programs"
          title="Helping Children Thrive"
          text="Programs focused on education, care, protection, and growth."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              {...program}
            />
          ))}
        </div>
      </div>
    </section>
  );
}