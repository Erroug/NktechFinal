import React from "react";
import { CheckCircle } from "lucide-react";

const AOEServices = () => {
  const whyBizwokePoints = [
    {
      title: "AI-First Content Strategy",
      desc: "We create content that aligns with how AI tools interpret and deliver answers—clear, concise, and semantically rich.",
    },
    {
      title: "Structured Data & Schema Integration",
      desc: "Bizwoke implements structured data to help search engines understand your content contextually and accurately.",
    },
    {
      title: "Conversational Keyword Targeting",
      desc: "We focus on natural language queries, FAQs, and long-tail keywords that match how users interact with AI-driven platforms.",
    },
    {
      title: "Entity-Based Optimization",
      desc: "Our AEO strategy ensures your brand is recognized as an authoritative entity by both Google and answer engines.",
    },
    {
      title: "Multiplatform Visibility",
      desc: "From web search and voice to AI chatbots, Bizwoke helps you appear everywhere your customers are searching.",
    },
  ];

  const renderDashedHeading = (text) => (
    <div className="flex items-center justify-center mb-8">
      <div className="border-t border-dashed border-[#294A63] flex-grow"></div>
      <h2 className="px-4 text-4xl font-bold text-[#294A63] bg-gray-50 whitespace-nowrap">
        {text}
      </h2>
      <div className="border-t border-dashed border-[#294A63] flex-grow"></div>
    </div>
  );

  return (
    <div className="bg-white text-gray-600">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-1 text-center">
        {renderDashedHeading("Best AEO company in Noida")}
        <p className="  mb-6">
          <span className="font-bold text-xl text-red-600">Bizwoke – The Best AEO Company in Noida</span> for (AI) Answer Engine Optimization or AI Engine Optimization
        </p>
        <p className="text-xl text-gray-600 mb-1">
          Looking for the best AEO company in Noida? Bizwoke offers expert Answer Engine Optimization services to help your brand rank higher 
          in AI-driven search results like Google SGE and ChatGPT.
        </p>
        <img src="/assets/bizwoke-logo.png" alt="Bizwoke Logo" className="mx-auto w-64 h-auto" />
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-1">
        {renderDashedHeading("Introduction")}
        <p className="text-gray-600 text-justify text-xl mb-4">
          The future of search is here—and it’s powered by <b className="text-red-600">Answer Engines</b>
           like <b className="text-red-600">Google’s SGE</b>, Bing AI, and ChatGPT. Traditional SEO alone is no longer enough.
            Businesses need to optimize their content to appear in AI-powered direct answers and conversational results.
             That’s where <b className="text-red-600">Bizwoke</b>, the <b className="text-red-600">best AEO company in Noida</b>, comes in.
        </p>
        <a href="#" className="text-pink-600 font-semibold underline hover:text-blue-700 text-xl">
          Get a Free AI SEO Audit
        </a>
      </section>

      {/* What is AEO */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        {renderDashedHeading("What is AEO in Digital Marketing?")}
        <p className="text-gray-600 text-justify text-xl mb-4">
          AEO stands for <b className="text-red-600">Answer Engine Optimization</b> or <b className="text-red-600">AI Engine Optimization</b>. 
          It’s the next evolution of SEO, focused on optimizing digital content for AI-driven answer engines. Instead of just ranking on Google’s 
          SERPs, AEO ensures your brand shows up directly in answers provided by tools like:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-xl">
          <li>Google SGE (Search Generative Experience)</li>
          <li>ChatGPT</li>
          <li>Bing AI</li>
          <li>Voice Assistants like Alexa, Siri, and Google Assistant</li>
        </ul>
      </section>

      {/* Why Bizwoke */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        {renderDashedHeading("Why Bizwoke is the best AEO Company in Noida?")}
        <p className="text-gray-600 text-xl mb-6 text-justify">
          Bizwoke is among the first digital marketing agencies in Noida to fully embrace and implement <b>
            Answer Engine Optimization (AEO)</b> strategies. Here’s why businesses trust Bizwoke for cutting-edge AEO solutions:
        </p>
        <ul className="space-y-4">
          {whyBizwokePoints.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600">
              <CheckCircle className="text-green-600 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-[#294A63] text-xl">{item.title}</h3>
                <p className="text-xl">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 py-12 bg-gray-50">
        {renderDashedHeading("Bizwoke’s AEO Services Include")}
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-xl">
          <li>Optimizing content for Google SGE and Bing AI</li>
          <li>Creating FAQ-rich, zero-click content</li>
          <li>AI-compatible meta tags and snippets</li>
          <li>Schema markup implementation</li>
          <li>Voice search optimization</li>
          <li>Brand visibility audits for AI-based platforms</li>
        </ul>
        <a href="#" className="text-pink-600 font-semibold underline block mt-4 text-xl">
          Get a Free AI SEO Audit
        </a>
      </section>

      {/* Who Needs AEO */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        {renderDashedHeading("Who Needs AEO?")}
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-xl">
          <li><b>E-commerce brands</b> looking to boost visibility in AI shopping recommendations</li>
          <li><b>Local businesses</b> wanting to appear in voice searches and location-based answers</li>
          <li><b>Content creators & publishers</b> aiming to dominate AI-driven featured snippets</li>
          <li><b>Startups & B2B companies</b> wanting to be the go-to answer in their niche</li>
        </ul>
      </section>

      {/* Future Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-300">
        <h2 className="text-2xl font-bold mb-4">The Future is Answer-Driven – Stay Ahead with Bizwoke</h2>
        <p className="text-gray-600 text-xl leading-relaxed">
          As search engines shift from showing “10 blue links” to direct, conversational answers, your digital
           presence must evolve. <b>Bizwoke</b>, the Best AEO company in Noida, ensures you’re not just on page one, but in <b>answer one</b>.
        </p>
      </section>

      {/* Testimonial */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
        <blockquote className="italic text-gray-600 text-xl">
          “We’ve seen a 3X increase in traffic from voice and AI-driven sources since working with Bizwoke. 
          Their AEO expertise is unmatched in Noida.” – Priya Jain, E-commerce Founder
        </blockquote>
      </section>

      {/* Final Words */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Final Words</h2>
        <p className="text-gray-600 text-xl mb-4">
          If you want your brand to thrive in the age of AI and conversational search, <b>Answer Engine Optimization</b> 
          is non-negotiable. Partner with <b>Bizwoke</b>, Noida’s top digital marketing agency for AEO, and future-proof your visibility today.
        </p>
        <a href="#" className="text-pink-600 font-semibold underline text-xl">
          Ready to Rank in AI Answers? Contact Bizwoke – The Best AEO Company in Noida
        </a>
      </section>

      {/* Visitors FAQ Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-300">
        {renderDashedHeading("Visitors FAQ’s")}
        <div className="space-y-4 text-xl">
          <div>
            <h3 className="font-semibold text-[#294a63] mb-2">Q. What is Google SGE (Search Generative Experience)?</h3>
            <p className="text-justify text-gray-600">
              A. Google SGE (Search Generative Experience) is an experimental feature from Google that uses generative AI
               to enhance traditional search results. It’s part of Google’s broader integration of AI into its search engine,
                allowing users to get more conversational, context-rich, and synthesized answers.
            </p>
          </div>
        </div>
      </section>

      {/* Keywords Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-300">
        {renderDashedHeading("Keywords Used")}
        <p className="text-gray-600 text-xl">
          Bizwoke, best AEO company in Noida, Answer Engine Optimization, digital marketing company in Noida, AI SEO Noida,
           optimize for Google SGE, voice search marketing, ChatGPT SEO
        </p>
      </section>

      {/* Popular Searches Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-300">
        {renderDashedHeading("Popular Searches")}
        <div className="space-y-4 text-xl text-gray-600">
          <p><a href="#" className="text-pink-600 underline text-xl hover:text-blue-700">Best AEO Services in Noida</a></p>
          <p className="text-3xl font-bold">Best AI SEO Company in Noida</p>
          <p className="text-2xl font-bold">Best AEO agency in Noida</p>
          <p className="text-xl font-bold">Best AEO Company in Noida</p>
          <p className="text-xl">SEO powered by <a href="#" className="text-pink-600 underline hover:text-blue-700">the Best SEO company in Delhi NCR</a></p>
          <p className="text-xl">Explore <a href="#" className="text-pink-600 underline hover:text-blue-700">Best SEO company in Noida sector 62 | Noida Portal</a></p>
        </div>
      </section>

    </div>
  );
};

export default AOEServices;
