import React from "react";

const SectionTitle = ({ title }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-[#294A63] mb-6 text-center md:text-left">
    {title}
  </h2>
);

const SMMServices = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* ===== Introduction to social media ===== */}
      <SectionTitle title="Introduction to Social Media" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
        <div className="flex justify-center">
          <img
            src="/assets/seo-services/.jpeg"
            alt="Introduction to social media"
            className="h-auto w-full max-w-lg rounded-lg shadow-md"
          />
        </div>

        {/* Paragraph 1st */}
        <p className="text-gray-700 leading-relaxed text-justify">
          Setting up a Facebook Page, Twitter profile or a YouTube channel is
          not always the best place to start. We recommend an initial research
          exercise to help discover what social media channel is right for you.
          We will help you understand the different social networks and
          platforms, explore how your customers use them and decide what social
          networks are right for you and your customers.
        </p>
      </div>

      {/* ===== Directory Submissions ===== */}
      <SectionTitle title="Listening and Engagement" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
        <p className="text-gray-700 leading-relaxed text-justify">
        The next step is to find out what you customers are talking about. We simply call this ‘listening’.
        This process is about delving into the various social networks and understanding what customers are saying about 
        your product, your industry and your service.<br/><br/>

        We take the most important phrases and topics in your business and create a report to help you divulge and understand this information.<br/><br/>

        The next step is to start to ‘engage’ with your audience. We will help you explore the right way to respond through social channels whether you are solving a complaint or thanking your customer for a compliment.
        </p>
        <div className="flex justify-center">
          <img
            src="/assets/seo-services/.png"
            alt="Listening and Engagement"
            className="h-auto w-full max-w-lg rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* ===== Pricing Section ===== */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#294A63]">Pricing</h2>
        <p className="text-gray-700">
          ₹7,500/- per month per platform + Third party charges as applicable.
        </p>
      </section>

      {/* ===== FAQ Section ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-[#294A63]">FAQs</h2>

        <div className="mb-4">
          <p className="font-medium text-gray-800">Q. How will it work?</p>
          <p className="text-gray-700">
            We will run a paid campaign on Facebook to increase page likes.
            Facebook will promote your page globally. You will be charged per
            like.
          </p>
        </div>

        <div className="mb-4">
          <p className="font-medium text-gray-800">Q. Will these likes be non-drop?</p>
          <p className="text-gray-700">
            Yes, they will be real human likes. If any drops occur, we will
            refill and maintain likes for a month.
          </p>
        </div>

        <div className="mb-4">
          <p className="font-medium text-gray-800">
            Q. What other social campaigns are offered?
          </p>
          <p className="text-gray-700">
            Besides Facebook page likes, we also offer other SMM services based
            on your needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SMMServices;
