import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

const NoidaContact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Heading */}
      <h2 className="text-center text-[#294A63] text-2xl md:text-3xl font-semibold mb-2">
        Our Journey
      </h2>
      <div className="w-24 mx-auto border-b border-gray-400 mb-6"></div>

      {/* Description */}
      <p className="pt-7 text-center text-gray-600 mb-12">
        Starting as a Digital Marketing Agency, we have expanded into Website
        Development, Software Development, and other IT solutions. Our
        dedication to our core values has fueled our growth over the past
        decade.
      </p>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Form */}
        <div className="pt-10 md:pt-20 md:col-span-2 space-y-4">
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
            <h3 className="text-lg pt-8 font-semibold">Phone</h3>
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

          <div>
            <h3 className="text-lg pt-8 font-semibold">Address</h3>
            <a href="address" className="text-blue-600 hover:underline">
              307B 3rd Floor I Thum Tower - A, Sector 62, Noida 201301
            </a>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <h2 className="text-center text-[#294A63] pt-8 text-3xl md:text-4xl font-semibold mb-4">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
        <div>
          <p className="text-gray-600 text-lg mb-5">
            NKTech is a leading SEO and Digital Marketing Company in Noida,
            India. We also serve as a renowned SEO and Website Designing Company
            in Ghaziabad, Noida, and Delhi. Since our inception in 2012, we have
            consistently delivered exceptional services, helping businesses grow
            by leveraging our expertise in SEO, PPC, SMO, and content writing.
          </p>

          <p className="text-gray-600 text-lg mb-5">
            With over 550 satisfied customers worldwide and 1000+ successful
            projects delivered, we are trusted by clients from diverse sectors,
            including Hotels, Hospitals, FMCG companies, Doctors, Clinics,
            Schools, Colleges, and many more.
          </p>

          <h3 className="text-xl font-bold text-[#294A63] pt-5 pb-5">
            Our Journey
          </h3>

          <p className="text-gray-600 text-lg">
            Started as a Digital Marketing Agency, we have expanded into Website
            Development, Software Development, and other IT solutions. Our
            dedication to our core values has fueled our growth over the past
            decade.
          </p>
        </div>

        <div>
          <ul className="space-y-6 text-lg">
            {[
              "SEO Services",
              "ORM Services",
              "Website Designing",
              "Website Maintenance",
              "SMO Services",
              "SMM Services",
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

      {/* Our Expertise */}
      <div className="mt-20">
        <h2 className="text-center text-[#294A63] text-3xl font-semibold mb-10 relative">
          <span className="px-4 bg-white relative z-10">Our Expertise</span>
          <div className="absolute top-1/2 left-0 w-full border-t border-gray-400 z-0"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div>
            <img
              src="/assets/digital-marketing.jpg"
              alt="Our Expertise"
              className="w-full h-auto object-cover rounded shadow"
            />
          </div>

          {/* Right: Bullet Points */}
          <div className="space-y-4 text-gray-700 text-lg">
            <p>• <strong>Digital Marketing:</strong> SEO, PPC, SMO, and content writing.</p>
            <p>• <strong>Website Services:</strong> Designing and development tailored to your business needs.</p>
            <p>• <strong>Software Development:</strong> Innovative software solutions to drive business efficiency.</p>
            <p>• <strong>Industry Reach:</strong> Experience in working with Colleges, Universities, FMCG companies, Doctors, Clinics, and various product-based businesses.</p>
          </div>
        </div>
      </div>

      {/* Our Big Step */}
      <div className="mt-20">
        <h2 className="text-center text-[#294A63] text-3xl font-semibold mb-6 relative">
          <span className="px-4 bg-white relative z-10">Our Big Step</span>
          <div className="absolute top-1/2 left-0 w-full border-t border-gray-400 z-0"></div>
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We have developed a unique local ecosystem portal for cities, enabling
          users to find local businesses, jobs, news, events, and much more. <br />
          Currently live in 30 cities, we aim to expand to 500 cities in the
          coming years.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Vision",
              text: "To expand globally and provide exceptional IT services worldwide, focusing on localized solutions tailored to customer needs and capabilities."
            },
            {
              title: "Mission",
              text: "To bring innovation and create value for customers through technologically excellent products and services."
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 text-center transition"
              style={{ boxShadow: "0 0 30px rgba(0,0,0,0.3)" }}
            >
              <h3 className="text-xl font-semibold text-[#294A63] mb-3 relative">
                <span className="px-2 bg-white relative z-10">{item.title}</span>
                <div className="absolute top-1/2 left-0 w-full border-t border-gray-300 z-0"></div>
              </h3>
              <p className="text-gray-600 text-justify">{item.text}</p>
            </div>
          ))}

          {/* Awards */}
          <div
            className="bg-white rounded-lg p-6 text-center transition"
            style={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.3)" }}
          >
            <h3 className="text-xl font-semibold text-[#294A63] mb-3 relative">
              <span className="px-2 bg-white relative z-10">
                Awards and Achievements
              </span>
              <div className="absolute top-1/2 left-0 w-full border-t border-gray-300 z-0"></div>
            </h3>
            <div className="text-gray-600 text-left space-y-2">
              <p><strong>• Winner of:</strong></p>
              <p>Best Digital Marketing Company in Delhi NCR (2015, 2016)</p>
              <p>Best Digital Marketing Company in Western UP (2016)</p>
              <br />
              <p><strong>• Shortlisted in:</strong></p>
              <p>Top 20 Google Service Provider Company in India (2017)</p>
              <p>Top 20 Fastest Growing Digital Marketing Companies in India (2017)</p>
            </div>
          </div>

          {/* Government Projects */}
          <div
            className="bg-white rounded-lg p-6 text-center transition"
            style={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.3)" }}
          >
            <h3 className="text-xl font-semibold text-[#294A63] mb-3 relative">
              <span className="px-2 bg-white relative z-10">
                Government Projects
              </span>
              <div className="absolute top-1/2 left-0 w-full border-t border-gray-300 z-0"></div>
            </h3>
            <div className="text-gray-600 text-left space-y-2">
              <p>We proudly contribute to national initiatives and partnerships:</p>
              <p>• Worked with 15+ Municipal Corporations nationwide for the Swachh Bharat Mission.</p>
              <p>• Digital marketing for Ministry of Cooperation, Govt. of India.</p>
              <p><strong>• Partnered with:</strong></p>
              <p>Khaadi Gramodhyog Board, Uttarakhand</p>
              <p>India Smart Cities Events</p>
              <p>Indo-Latin American Business Summit (2016)</p>
              <p>UP Investor Business Summit (2018)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-20">
        <h2 className="text-center text-[#294A63] text-3xl font-semibold mb-6">
          Our Location
        </h2>
        <div className="w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps?q=28.626926687249124,77.37272088356492&hl=en&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default NoidaContact;
