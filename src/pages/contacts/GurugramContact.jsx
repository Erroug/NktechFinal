import React from "react";
import { FaChevronRight } from "react-icons/fa";

const GurugramContact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      {/* Services Section */}
      <div className="relative mb-8 text-center">
          <div className="absolute left-0 top-1/2 w-full border-t border-dashed border-[#294A63]"></div>
          <h2 className="relative inline-block bg-gray-50 px-4 text-4xl font-bold text-[#294A63]">
            Our Services
          </h2>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
        <div>
            <p className="px-13 text-xl text-center text-justify text-gray-600">
          We are one of the best SEO company in Noida and ORM company in Noida, India. We are
           also well-known SEO company in Ghaziabad. Website Designing Company in Ghaziabad,
            Noida and Delhi, India. We began our operations as Best Digital Marketing Agency
             in the year 2012 and since then have grown by leaps and bounds. From the very 
             beginning, we have stayed true to our core beliefs and have delivered an exceptional 
             experience for our customers. We have more than 500 satisfied customers over the globe 
             and delivered more than 1000 projects in last 12 years. Our expertise in Digital marketing 
             services which includes SEO, PPC, SMO and content writing. We have made websites and done
              SEO for Hotels, Hospitals, FMCG companies, Doctors, Clinics, Schools and Colleges.
          </p>
        </div>

        <div>
          <ul className="text-xl space-y-5 text-sm">
            {[
              "SEO Services",
              "ORM Services",
              "SMM Services",
              "SMO Services",
              "PPC Services",
              "VSO Services",
              "Website Designing",
              "SMM Maintenance",
            ].map((service, i) => (
              <li
                key={i}
                className="flex items-center gap-2 border-b border-gray-600 pb-2 hover:text-orange-400 transition-colors cursor-pointer"
              >
                <FaChevronRight className="text-[#294A63] hover:text-orange-400 transition-colors cursor-pointer" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-20">
        {/* Form */}
        <div className="md:col-span-2 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black-500"
          ></textarea>
          <button className="bg-[#093256] text-white px-6 py-2 rounded hover:bg-[#0f4c81] transition">
            Submit
          </button>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg pt-30 font-semibold">Phone</h3>
            <a
              href="tel:+91 7836055511"
              className="text-blue-600 underline hover:underline"
            >
              +91 7836055511
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Mail</h3>
            <a
              href="mailto:info@bizwoke.in"
              className="text-red-500 underline hover:underline"
            >
              info@bizwoke.in
            </a>
          </div>
          {/* <div>
            <h3 className="text-lg pt-30 font-semibold">Address</h3>
            <a href="address" className="text-blue-600 hover:underline">
              307B 3rd Floor I Thum Tower - A, sector 62 Noida 201301
            </a>
          </div> */}
        </div>
      </div>

      {/* Location Map */}
      <div className="pt-16">
      <div className="relative mb-8 text-center">
          <div className="absolute left-0 top-1/2 w-full border-t border-dashed border-[#294A63]"></div>
          <h2 className="relative inline-block bg-gray-50 px-4 text-4xl font-bold text-[#294A63]">
          {/* Our Location - DLF Tower, 8th Rd, Cyber City, Gurugram */}
          Our Location

          </h2>
        </div>
        <div className="w-full h-96">
          <iframe
            title="DLF Tower, Cyber City Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.2680241741443!2d77.08999387495741!3d28.494580375745415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193e0cdd85a7%3A0x4fef2585086ed2b8!2sDLF%20Tower%2C%208th%20Rd%2C%20DLF%20Cyber%20City%2C%20DLF%20Phase%202%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1693812345678"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer Placeholder */}
      <>
        <footer />
      </>
    </section>
  );
};

export default GurugramContact;
