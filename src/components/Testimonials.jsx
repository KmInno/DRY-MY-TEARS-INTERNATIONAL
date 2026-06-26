import React from "react";
import { testimonials } from "../data/siteData";
import TestimonialCard from "./TestimonialCard";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
          text="Hear from our volunteers and supporters."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}