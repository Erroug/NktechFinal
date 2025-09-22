import React from 'react'
import { BsDot } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";

const SoftwareDevelopment = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      {/* Section Heading with lines */}
      <div className="flex items-center w-full max-w-5xl mb-6">
        <div className="flex-grow border-t border-dashed border-[#294A63]"></div>
        <h2 className="px-3 text-[#294A63] text-4xl sm:text-3xl md:text-4xl font-bold text-center leading-snug">
          Software Development
        </h2>
        <div className="flex-grow border-t border-dashed border-[#294A63]"></div>
      </div>

      {/* Intro Text */}
      <div className="max-w-7xl mx-auto px-4">
  <p className="text-justify text-gray-600 mb-8 sm:mb-12 text-lg sm:text-xl leading-relaxed">
    At Bizwoke, we specialize in building powerful, custom software solutions tailored to meet
    the specific needs of diverse industries. From educational institutions to retail outlets,
    our software is designed to streamline operations, improve efficiency, and enhance user experience.
  </p>
</div>



      {/* Software Solutions */}
      <div className="w-full max-w-5xl">
      <h2 className="text-left sm:text-left text-[#294A63] text-4xl font-bold mb-4 sm:mb-6  pb-2">
  Our Software Solutions Include:
</h2>


        <ul className="text-gray-600 space-y-4 text-xl text-justify  leading-relaxed">
          {[
            "School Management Software: Simplify student data, attendance, fees, and academic performance with our all-in-one school ERP system.",
            "Hospital & Clinic Management Systems: Efficiently manage appointments, patient records, billing, inventory, and staff across hospitals and clinics.",
            "BizORM – Online Reputation Management Tool: AI-powered software that helps businesses maintain a strong digital presence by managing reviews and feedback intelligently.",
            "Inventory & Invoicing Software: Designed for businesses of all sizes to manage stock, generate invoices, track sales, and streamline financial reporting.",
            "Contractor ERP: Tailored for construction and service-based businesses to handle projects, resource planning, contracts, billing, and reporting.",
            "Point of Sale (POS) Software: Robust and user-friendly POS systems for restaurants, retail shops, and service outlets — with real-time billing, inventory, and customer management.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start">
              <BsDot className="text-[#294A63] text-xl sm:text-2xl flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="w-full max-w-5xl pt-10">
      <h2 className="flex items-center justify-center text-[#294A63] text-4xl sm:text-4xl font-bold mb-4 sm:mb-6">
  <span className="border-t border-dashed border-[#294A63] flex-grow mr-4"></span>
  Why Choose Bizwoke?
  <span className="border-t border-dashed border-[#294A63] flex-grow ml-4"></span>
</h2>


<ul className="text-gray-600 space-y-3 sm:space-y-4 text-xl leading-relaxed">
  {[
    "Custom-built for your business",
    "Scalable & secure systems",
    "Easy-to-use interfaces",
    "Reliable support and updates",
  ].map((point, idx) => (
    <li key={idx} className="flex items-start">
      <GiCheckMark className="text-gray-600 text-2xl mt-1 flex-shrink-0" />
      <span className="ml-2">{point}</span>
    </li>
  ))}
</ul>


        {/* Call To Action */}
        <p className="text-center text-[#294A63] font-medium mt-8 text-xl ">
          📞 Ready to transform your business with smart software?<br />
          <span className="font-semibold">Contact us today for a Free Consultation</span>
        </p>
      </div>
    </div>
  )
}

export default SoftwareDevelopment
