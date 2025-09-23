import React, { useState } from "react";
import { HiMiniChevronRight } from "react-icons/hi2";

const PPCServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why PPC is Important?",
      answer:
        "PPC provides a company with the ability to advertise based on unique search requests between companies and real customers. The data you receive from PPC may also include useful information that can help direct many important business decisions. This allows you to know how many leads your ads have generated."
    },
    {
      question: "How are my advertising costs determined?",
      answer:
        "The amount you pay depends on many factors, including: – what your claimants want to pay – how well you wrote your ad – how big your ad is – how good your landing page is and your ad How effective."
    },
    {
      question: "How can I find the right keyword in ad?",
      answer:
        "When creating an ad you should choose a set of keywords that will prompt your ad to show based on popular search queries. Choosing keywords can greatly affect your ad, so you have to choose smartly. Fortunately, there are tools available to help you choose the right keywords. View the Keyword Tool, Google Keyword Planner or Keyword Tool List."
    },
    {
      question: "How do I learn to target PPC ad?",
      answer:
        "Although search engines vary, these three basic targeting options are mostly used: – Devices: You can choose the devices you want to target, such as desktops and smartphones – Geographic area: a given geographic area You can also target people. – Language: You can select the language you want to target."
    },
    {
      question: "How do I review my campaign on PPC?",
      answer:
        "While more than 80 percent of businesses have not reviewed their PPC promotion in more than a month, you need to see the ad regularly. PPC experts suggest monthly campaign check-ins to get the strongest results. Conversely, brand-new campaigns should be monitored daily."
    }
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* ===== Intro Section ===== */}
<section className="max-w-6xl mx-auto px-4">
<div className="flex items-center mb-6">
  <div className="flex-grow border-t border-dashed border-[#294A63]"></div>

  <h1 className="px-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#294A63] text-center whitespace-nowrap">
    PPC Services
  </h1>

  <div className="flex-grow border-t border-dashed border-[#294A63]"></div>
</div>


  <p className="text-gray-600  text-xl text-justify leading-relaxed md:leading-loose">
    Searching for PPC Management Services or
    <span className="text-red-500"> Website development company in Noida</span>,
    Ghaziabad or Greater Noida. We offer Best PPC Management
    Services in Noida at very competitive price.
  </p>

  <p className="text-gray-600 text-xl text-justify leading-relaxed md:leading-loose">
    Among a large number of Digital Marketing Companies operating in
    India, NK Tech holds a respectable position. We offer a wide range of
    PPC Management Service and solutions. We are known for professional
    services in
    <span className="text-red-500"> SEO Company in Noida</span>
    and Website development. Digital Marketers working at Bizwoke are capable
    of delivering and executing the best possible ROI for your business.
    Our PPC Managers possess expertise to improve your existing PPC,
    ensuring a great Digital marketing campaign or business application.
  </p>

  <p className="text-gray-600 text-xl text-justify leading-relaxed md:leading-loose">
    We have
    <span className="text-red-500"> India’s best digital marketing team</span>
    in perfect combination with the most comprehensive SEO managers
    process in the industry. This innovative Digital Marketing process
    makes A-One Innovation Noida’s PPC Management company which is way
    ahead of the rest.
  </p>

  <p className="text-gray-600 text-xl text-justify leading-relaxed md:leading-loose">
    Our company has been offering its Digital Marketing for more than 8
    years to clients from all over the world. We make sure that all our
    clients are 100% satisfied with our Digital Marketing with the best
    quality solutions and excellent services.
  </p>
</section>


      {/* ===== Section 1: PPC Services ===== */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center mb-6">
  <div className="flex-grow border-t border-dashed border-[#294A63]"></div>

  <h1 className="px-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#294A63] text-center whitespace-nowrap">
    PPC Services
  </h1>

  <div className="flex-grow border-t border-dashed border-[#294A63]"></div>
</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-gray-600 text-center md:text-left">
              <ul className="space-y-2 text-xl list-inside list-disc">
                <li>Landing page optimization and development</li>
                <li>Keyword research and selection</li>
                <li>Creative development</li>
                <li>Bid management</li>
                <li>Conversion & Call Tracking</li>
                <li>Campaign management and analysis</li>
              </ul>
            </div>
            <div className="flex justify-center">
  <img
    src="/assets/ppc-services/ppc-removebg-preview-300x300-1.png"
    alt="PPC Services"
    className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] object-contain rounded-lg"
  />
</div>
          </div>
        </div>
      </section>

      {/* ===== Platforms Banner ===== */}
<section className="bg-gray-50 py-10">
  <div className="max-w-[1800px] mx-auto px-2">
    <img
      src="/assets/ppc-services/brand.jpg"
      alt="PPC Platforms"
      className="w-full h-auto mx-auto object-contain rounded-lg"
    />
  </div>
</section>


      {/* ===== Section 2: PPC Audit ===== */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="border-t border-dashed width-auto flex-grow"></div>
          <h3 className="text-lg text-center text-[#294A63] md:text-4xl font-bold px-4 whitespace-nowrap">
            PPC Audit
          </h3>
          <div className="border-t border-dashed width-auto flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="/assets/ppc-services/ppc_audit-removebg-preview-200x200-1.png"
                alt="PPC Audit"
                className="w-full max-w-xs md:max-w-xs h-48 object-contain rounded-lg"
              />
            </div>
            <div className="space-y-4 text-gray-600 text-center md:text-left">
              <p className="text-xl text-justify"> 
                This is for customers who do not necessarily want to close their PPC providers 
                but are not aware of the flaws in their current campaigns and PPC management services. 
                Our best PPC experts will comb through your account and give you the same advice that we eat in your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 3: Facebook Ads ===== */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className=" flex items-center mb-6 ">
            <div className="border-t border-dashed width-full flex-grow "></div> 

          <h3 className="text-lg text-center text-[#294A63] md:text-4xl font-bold px-4">
            Facebook Ads
          </h3>
          <div className="border-t border-dashed width-full flex-grow "></div> 
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-gray-600 text-center md:text-left">
              <p className="text-justify text-xl">
                Facebook has made its way into almost every home and Facebook advertising
                is the perfect complement to any search marketing campaign. With 1.79 Billion daily
                active users worldwide, Facebook is a major social media platform and also a great advertising platform.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/ppc-services/facebook_ads-rg-200x200-1.png"
                alt="Facebook Ads"
                className="w-full max-w-xs md:max-w-xs h-48 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 4: Google Adwords ===== */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
           <div className=" flex items-center mb-6 ">
            <div className="border-t border-dashed width-full flex-grow "></div> 

          <h3 className="text-lg text-center text-[#294A63] md:text-4xl font-bold px-4">
            Google Adwords
          </h3>
          <div className="border-t border-dashed width-full flex-grow "></div> 
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="/assets/ppc-services/google-ads-1-200x200-1.png"
                alt="Google Adwords"
                className="w-full max-w-xs md:max-w-xs h-48 object-contain rounded-lg"
              />
            </div>
            <div className="space-y-4 text-gray-600 text-center md:text-left">
              <p className="text-justify text-xl"> 
                Whatever your target audience searches on Google, your name will be
                placed on the top searches. With Google accounting for 2/3 of all Google
                searches, AdWord is the most effective Pay Per Click advertising. Google
                AdWords enrollment also gives you the ability to conduct keyword testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 5: Shopping ===== */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
        <div className=" flex items-center mb-6 ">
            <div className="border-t border-dashed width-full flex-grow "></div> 

          <h3 className="text-lg text-center text-[#294A63] md:text-4xl font-bold px-4">
            Shopping
          </h3>
          <div className="border-t border-dashed width-full flex-grow "></div> 
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-gray-600 text-center md:text-left">
              <p className="text-justify text-xl">
                Google provides shopping ads to allow you to show different products
                directly in search results. Shopping ads appear above organic listings
                for almost all terms centered around commercial products and even sometimes above standard paid search ads.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/ppc-services/shopping_ad-removebg-preview-200x200-1.png"
                alt="Shopping"
                className="w-full max-w-xs md:max-w-xs h-48 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 6: Remarketing ===== */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
        <div className=" flex items-center mb-6 ">
            <div className="border-t border-dashed width-full flex-grow "></div> 

          <h3 className="text-lg text-center text-[#294A63] md:text-4xl font-bold px-4">
            Remarketing
          </h3>
          <div className="border-t border-dashed width-full flex-grow "></div> 
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="/assets/ppc-services/remarketing-digital-marketing-vector-removebg-200x200-1.png"
                alt="Remarketing"
                className="w-full max-w-xs md:max-w-xs h-48 object-contain rounded-lg"
              />
            </div>
            <div className="space-y-4 text-gray-600 text-center md:text-left">
              <p className="text-justify text-xl">
                We offer full re-marketing services including campaign
                development and management services. Our expertise ensures
                that companies are more likely to invest their advertising
                money on users rather than throwing mud on the wall and expecting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="w-full px-4 py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-[#294A63] mb-6 text-left">
          FAQ's
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-2">
              <button
                className="w-full flex items-start gap-2 text-left text-blue-700 underline font-medium text-lg md:text-xl cursor-pointer"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <HiMiniChevronRight
                  className={`mt-1 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-90" : ""
                  }`}
                />
                <span>{faq.question}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <h2 className="text-2xl md:text-4xl font-bold text-[#294A63] mt-12 mb-4">
        Price
      </h2>
      <p className="text-xl font-semibold text-gray-600">
        Rs. 15,000/- per month per platform + Third party charges as Actual
      </p>
    </div>
  );
};

export default PPCServices;
