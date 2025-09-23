import React from 'react';
import { motion } from "framer-motion";

const aboutImg = "/assets/about/content_img1_grey.jpg";

const AboutUs = () => {
  return (
    <div className="px-6 lg:px-20 py-16 space-y-16  text-[18px] leading-relaxed">
      {/* Top Section: Image + Intro */}
      <section className="flex flex-col lg:flex-row items-start gap-12">
        {/* Left side - Image */}
        <motion.img
          src={aboutImg}
          alt="About NKTech"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
          // initial={{ opacity: 0, x: -30 }}
          // animate={{ opacity: 1, x: 0 }}
          // transition={{ duration: 0.5 }}
        />

        {/* Right side - Intro */}
        <motion.div
          className="w-full lg:w-1/2"
          // initial={{ opacity: 0, x: 30 }}
          // animate={{ opacity: 1, x: 0 }}
          // transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl text-[#294A63] font-bold mb-6">ABOUT US</h2>
          <p className="text-justify text-xl text-gray-600 ">
            Bizwoke is one of the Best SEO Company in Noida and also Best Digital Marketing 
            Company in Noida, India. We are also a well-known SEO company in Ghaziabad. 
            Website Designing Company in Ghaziabad, Noida, and Delhi, India. 
            We began our operations as Digital Marketing Agency in the year 2012 and since then 
            have grown by leaps and bounds. From the very beginning, we have stayed true to our core 
            beliefs and have delivered an exceptional experience for our customers. 
            We have more than 500 satisfied customers over the globe and delivered more than 1000 
            projects in the last 12 years. Our expertise in Digital marketing services includes SEO, 
            PPC, SMO, and content writing. We have made websites and done SEO for Hotels, Hospitals, 
            FMCG companies, Doctors, Clinics, Schools, and Colleges.
          </p>
        </motion.div>
      </section>

      {/* New Section: Company Journey */}
      <motion.section
        // initial={{ opacity: 0, y: 40 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.6 }}
        className="w-full"
      >
        <p className="text-justify text-xl text-gray-600  mb-6">
          We began our operations as Website Development and Digital Marketing Agency in the year 
          2010 and since then have grown by leaps and bounds. From the very beginning we have stayed 
          true to our core beliefs and have delivered an exceptional experience for our customers. 
          We have more than 550 satisfied customers over the globe and delivered more than 1000 
          projects in the last 12 years. Our expertise in Software Development, Website Designing & 
          Development, Digital marketing services which includes SEO, PPC, SMO and content writing. 
          We have developed websites and done SEO for Colleges, Universities, Hotels, Hospitals, FMCG 
          companies, Doctors, Clinics, and multiple product based companies.
        </p>

        <h3 className="text-xl font-bold text-[#294A63] mt-6 mb-2">Our Big Step :</h3>
        <p className="text-justify text-xl text-gray-600 mb-6">
          We have made a local ecosystem portal for cities where one can find local businesses, Jobs, 
          News, Events, citizens and many more for that specific city. We made it in the shape of a 
          city portal and currently live in 30 cities and we are planning to come to 500 cities in 
          the next few years.
        </p>

        <h3 className="text-xl font-bold text-[#294A63] mt-6 mb-2">Vision</h3>
        <p className="text-justify text-xl text-gray-600 mb-6">
          Our Vision is to expand globally and provide the best IT Services all over the globe through 
          local. To provide optimal IT solutions and consulting thinking according to the customers 
          needs and capabilities.
        </p>

        <h3 className="text-xl font-bold text-[#294A63] mt-6 mb-2">Mission</h3>
        <p className="text-justify text-xl text-gray-600 ">
          Dedicated to bringing innovation and creating value for customers by developing products 
          and services of technological excellence.
        </p>
      </motion.section>

      {/* New Section: Awards and Achievements */}
      <motion.section
        // initial={{ opacity: 0, y: 40 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl font-bold text-[#294A63] mb-8">AWARDS AND ACHIEVEMENTS:</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h3 className="font-semibold underline text-[#294A63] mb-4">WINNER OF:</h3>
            <ul className="list-disc pl-6 text-xl text-gray-600 space-y-2">
              <li>Best Digital Marketing Company in Delhi NCR of the Year 2015.</li>
              <li>Best Digital Marketing Company in Western UP of the Year 2016.</li>
              <li>Best Digital Marketing Company in Delhi NCR of the Year 2016.</li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="font-semibold text-[#294A63] underline mb-4">SHORTLISTED IN:</h3>
            <ul className="list-disc text-xl pl-6 text-gray-600 space-y-2">
              <li>Top 20 Google Service provider company in India (Year 2017)</li>
              <li>Top 20 Fastest growing Digital Marketing company in India (Year 2017)</li>
            </ul>
          </div>
        </div>

        {/* Government Projects */}
        <div className="mt-10">
          <h3 className="font-semibold text-[#294A63] underline mb-4">GOVERNMENT PROJECTS:</h3>
          <ul className="list-disc text-xl pl-6 text-gray-600 space-y-2">
            <li>Working with more than 15 Municipal corporations nationwide for “Swachh Bharat Mission” project</li>
            <li>Digital marketing of Ministry of Cooperation, Govt of India</li>
            <li>Digital marketing of Khaadi Gramodhyog Board, Uttrakhand</li>
            <li>Digital Marketing Partner of India Smart Cities events</li>
            <li>Digital Marketing Partner of Indo-Latin American business summit, 2016</li>
            <li>Digital Marketing Partner of UP Investor Business summit, 2018</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
