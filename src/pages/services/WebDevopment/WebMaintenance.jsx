import React from "react";

const WebMaintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 max-w-4xl mx-auto">
      {/* Heading with dashed divider */}
      <div className="relative mb-10 text-center w-full">
        <div className="absolute left-1/2 top-1/2 w-full max-w-3xl -translate-x-1/2 border-t border-dashed border-[#294A63]"></div>
        <h2 className="relative inline-block bg-gray-50 px-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#294A63]">
          Web Maintenance & Designing Services
        </h2>
      </div>

      {/* Paragraphs */}
      <p className="text-justify text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
        Bizwoke is a successful web designing company, offering Ecommerce Website
        Designing, Graphic Designing, Website Redesigning and Mobile Website
        Designing services to businesses.
      </p>

      <p className="text-justify text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
        While many organizations provide these services, we ensure affordable
        pricing with fast turnaround. As a reputed website design company, we
        believe in offering the most cost-effective services to our esteemed
        clients. Our team of highly qualified and expert professionals is
        capable of completing any project efficiently within the stipulated
        time.
      </p>

      <p className="text-justify text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
        With over 9 years of experience, we have built a reputation as an
        eminent web designing company in India, assuring positive returns on
        client investment. Your investment in us is your chance to ensure
        success within the best range.
      </p>

      <p className="text-justify text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
        Bizwoke is India’s leading interactive Web Designing services provider
        based in Ghaziabad, India. We focus specifically on delivering all
        website designing solutions including Ecommerce Website Designing,
        Custom Web Designing, Small Business Web Design, Website Redesigning and
        Mobile Website Designing services.
      </p>
    </div>
  );
};

export default WebMaintenance;
