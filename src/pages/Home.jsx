import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Help from "../components/Help";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonials";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Dry My Tears International";
  }, []);

  return (
    <>
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45 }}>
        <Hero />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: 0.05 }}>
        <Help />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: 0.08 }}>
        <Programs />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: 0.1 }}>
        <Testimonials />
      </motion.div>
    </>
  );
}
