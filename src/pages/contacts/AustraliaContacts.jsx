import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

const AustraliaContact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}

      {/* Description */}



 
      <div className="relative mb-8 text-center">
          <div className="absolute left-0 top-1/2 w-full border-t border-dashed border-[#294A63]"></div>
          <h2 className="relative inline-block bg-gray-50 px-4 text-4xl font-bold text-[#294A63]">
            Our Services
          </h2>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 pt-10">
        <div>
          <p className=" px-13 text-xl  text-center text-justify text-gray-600">We are one of the 
            best SEO company in Noida and ORM company in Noida, India. We are also well-known SEO 
            company in Ghaziabad. Website Designing Company in Ghaziabad, Noida and Delhi, India.
             We began our operations as Best Digital Marketing Agency in the year 2012 and since 
             then have grown by leaps and bounds. From the very beginning, we have stayed true to
              our core beliefs and have delivered an exceptional experience for our customers. 
              We have more than 500 satisfied customers over the globe and delivered more than 1000
               projects in last 12 years. Our expertise in Digital marketing services which includes SEO,
                PPC, SMO and content writing. We have made websites and done SEO for Hotels, Hospitals, 
                FMCG companies, Doctors, Clinics, Schools and Colleges.</p>
        </div>

        <div className="">
          <ul className="text-xl space-y-5  text-sm  ">
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
                <FaChevronRight className="text-[#294A63] hover:text-orange-400 transition-colors cursor-pointer " /> {service}
              </li>
            ))}
          </ul>

        </div>

      </div>

     {/* Contact Section */}
     <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
        {/* Form */}
        <div className="pt-20 md:col-span-2 space-y-4">
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
            <a
              href="address"
              className="text-blue-600 hover:underline"
            >
              307B 3rd Floor I Thum Tower - A, sector 62 Noida 201301
            </a>
          </div> */}
        </div>
      </div>

    </section>
  );
};
export default AustraliaContact
