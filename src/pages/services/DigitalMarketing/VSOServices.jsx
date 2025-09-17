import React, { useState } from "react";
import { HiMiniChevronRight } from "react-icons/hi2";

const VSOServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* ===== Intro Section ===== */}
      <section className="max-w-6xl mx-auto px-4 py-5">
        <h1 className="text-3xl md:text-4xl font-bold text-[#294A63] mb-6 text-center">
          Why invest in voice search optimization?
        </h1>
        <p className="text-gray-700 text-left md:text-justify leading-relaxed">
          It is considered an effective tool to increase your market and customers. Recent
          stats show that more than 50% of people use voice search tools for searching
          businesses and business-related queries. Hence, to reach out to such people it is
          necessary to invest in voice search optimization. It is also necessary to ensure
          that the service purchased is quality service and economical as well. For availing
          such benefits you can invest in Bizwoke for the services. As they are reliable,
          economical, and are known to provide customers satisfaction through their quality
          services.
        </p>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-lg text-center text-[#294A63] md:text-4xl font-bold mb-6">
            VSO Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-gray-700 text-center md:text-left">
              <p className="text-justify">
                Voice search optimization enables your pages to appear in the voice search.
                It is a process of optimizing your pages in such a manner that helps the maximum
                number of people to visit your site or app by improving the visibility as well as
                the recommendation rate in the voice search results. It is also essential to approach
                an effective service provider if you are willing to invest in this service. Bizwoke
                is known to provide the best digital marketing services and can help you with voice
                search optimization as well. Call Bizwoke, Rated as the Best VSO Agency in Noida Delhi NCR
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/vso-services/VSO-Services_575x385px_V01.png"
                alt="vso services"
                className="w-full max-w-xs md:max-w-xs h-48 object-contain rounded-lg"/>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-lg text-center text-[#294A63] md:text-4xl font-bold mb-6">
            Benefits one can gain
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="/assets/vso-services/Benefits-one-can-gain_575x385px.png"
                alt="Benefits-one-can-give"
                className="w-full max-w-xs md:max-w-xs h-48 object-contain rounded-lg"
              />
            </div>
            <div className="space-y-4 text-gray-700 text-center md:text-left">
              <p className="text-justify">
                Improves voice search ranking
                The algorithm used in voice search is designed in a manner
                that it gives only those answers that are similar to the question.
                Hence voice search optimization can help you gain more ranking.<br />
                Helps in developing customer’s trust
                People are more likely to trust what the screen shows to them.
                Hence when your page appears through voice search people are more likely to trust your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-lg text-center text-[#294A63] md:text-4xl font-bold mb-6">
            Why choose Bizwoke
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-gray-700 text-center md:text-left">
              <p className="text-justify">
                Known for its SEO services, We have done extensive research on VSO and developed a
                tested process to rank your website top at search engines through our VSO services.<br /> <br />

                the company is known to be the best digital marketing service provider. They aim to provide quality services
                at an economical price which makes them desirable to many customers. They are reviewed as best at what they do
                by many customers which makes them ideal for providing services. It is a great company that helps your business
                grow without being heavy on your pocket.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/vso-services/Why-choose-Bizwoke_575x367px.png"
                alt="why choose Bizwoke"
                className="w-full max-w-xs md:max-w-xs h-48 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VSOServices;
