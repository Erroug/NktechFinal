import React from 'react';
import { motion } from "framer-motion";
const aboutImg = "/assets/about/content_img1_grey.jpg";

const AboutUs = () => {
  return (
    <section className="flex items-center gap-8 px-50 py-20">
      {/* Left side - Image */}
      <motion.img
        src={aboutImg}
        alt="About NKTech"
        className="w-1/2 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Right side - Content */}
      <motion.div
        className="w-1/2"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          We are a digital solutions company focused on results, quality and
          long-term partnerships.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
