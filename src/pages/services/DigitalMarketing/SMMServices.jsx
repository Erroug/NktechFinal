import React from "react";

const SectionTitle = ({ title }) => (
  <div className="flex items-center mb-6">
    <div className="border-t border-dashed border-[#294A63] flex-grow"></div>
    <h2 className="px-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#294A63] text-center">
      {title}
    </h2>
    <div className="border-t border-dashed border-[#294A63] flex-grow"></div>
  </div>
);

const SMMServices = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* ===== Introduction to social media ===== */}
      <SectionTitle title="Introduction to Social Media" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 items-center">
        <div className="flex justify-center">
          <img
            src="/assets/smm-services/social-media.jpg"
            alt="Introduction to social media"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-md object-cover"
          />
        </div>

        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed text-justify">
          Setting up a Facebook Page, Twitter profile, or a YouTube channel is
          not always the best place to start. We recommend an initial research
          exercise to discover the right social media channels for your business.
          We help you understand platforms, explore customer behavior, and decide
          what works best for you.
        </p>
      </div>

      {/* ===== Listening and Engagement ===== */}
      <SectionTitle title="Listening and Engagement" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 items-center">
        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed text-justify">
          Listening involves analyzing social networks to understand what customers
          are saying about your product, industry, and services. We create reports
          highlighting key phrases and topics to help you engage effectively with your
          audience, whether resolving complaints or thanking customers for positive feedback.
        </p>

        <div className="flex justify-center">
          <img
            src="/assets/smm-services/SocialEngagementCycle.jpg"
            alt="Listening and Engagement"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-md object-cover"
          />
        </div>
      </div>

      {/* ===== Social Media Advertising ===== */}
      <SectionTitle title="Social Media Advertising" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 items-center">
        <div className="flex justify-center">
          <img
            src="/assets/smm-services/Social-Media-Advertising-Software.jpg"
            alt="Social Media Advertising"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-md object-cover"
          />
        </div>

        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed text-justify">
          Facebook, Twitter, and LinkedIn all offer advertising opportunities. 
          We guide you through options including geo-targeting or demographic
          selection strategies suited to your business needs.
        </p>
      </div>

      {/* ===== Pricing Section ===== */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-[#294A63] text-left">
          Pricing
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl text-left">
          ₹7,500/- per month per platform + Third-party charges as applicable.
        </p>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="py-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#294A63] text-left">
          FAQs
        </h2>

        <div className="space-y-6">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-[#294A63] mb-2">Q. How will it work?</p>
            <p className="text-gray-600 text-lg sm:text-xl">
              We run a paid campaign on Facebook to increase page likes globally.
              You are charged per like.
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-bold text-[#294A63] mb-2">Q. Will these likes be non-drop?</p>
            <p className="text-gray-600 text-lg sm:text-xl">
              Yes, they are real human likes. Any drops are refilled and maintained for a month.
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-bold text-[#294A63] mb-2">Q. What other social campaigns are offered?</p>
            <p className="text-gray-600 text-lg sm:text-xl">
              Besides Facebook page likes, we also offer other SMM services tailored to your needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SMMServices;
