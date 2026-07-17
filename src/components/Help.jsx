import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const whatWeDo = [
  {
    title: "Shelter & Safety",
    text: "A secure home with consistent supervision, comfort, and care.",
  },
  {
    title: "Food & Nutrition",
    text: "Balanced meals that keep children healthy and energized.",
  },
  {
    title: "Learning Support",
    text: "School supplies, tutoring, and educational guidance.",
  },
  {
    title: "Emotional Care",
    text: "A supportive environment that helps children heal and grow.",
  },
];

const helpWays = [
  {
    title: "Donate",
    text: "Give monthly or make a one-time contribution to support daily needs.",
  },
  {
    title: "Volunteer",
    text: "Share your time by teaching, mentoring, cooking, or organizing activities.",
  },
  {
    title: "Sponsor a Child",
    text: "Help cover school, food, clothing, and healthcare for one child.",
  },
  {
    title: "Partner With Us",
    text: "Work with us as a business, church, school, or community group.",
  },
];

function Help() {
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="What We Do"
            title="Support that meets real needs"
            text="We focus on the essentials that help children feel safe, grow strong, and build confidence for the future."
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whatWeDo.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.05 }} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-slate-900 px-8 py-10 text-white shadow-2xl lg:px-12 lg:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="How You Can Help"
              title="Your support changes lives"
              text="There are many simple ways to make a difference—through giving, volunteering, partnerships, and sponsorship."
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {helpWays.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.05 }} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: 0.1 }} className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
            >
              Get Involved <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+231555743687"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Call Now
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Help;
