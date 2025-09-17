import React from "react";
import { CheckCircle } from "lucide-react";

const AOEServices = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Best AEO company in Noida</h1>
        <p className="text-lg mb-6">
          <span className="font-bold">Bizwoke – The Best AEO Company in Noida</span> for (AI) Answer
          Engine Optimization or AI Engine Optimization
        </p>
        <p className="mb-6">
          Looking for the best AEO company in Noida? Bizwoke offers expert Answer
          Engine Optimization services to help your brand rank higher in
          AI-driven search results like Google SGE and ChatGPT.
        </p>
        <div className="flex justify-center">
          <img
            src="/assets/bizwoke-logo.png"
            alt="Bizwoke Logo"
            className="w-100 h-auto"
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-4 py-1">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-4">
          The future of search is here—and it’s powered by <b>Answer Engines</b>{" "}
          like <b>Google’s SGE</b> (Search Generative Experience), Bing AI, and
          ChatGPT. Traditional SEO alone is no longer enough. Businesses need to
          optimize their content to appear in AI-powered direct answers and
          conversational results. That’s where <b>Bizwoke</b>, the
          <b> best AEO company in Noida</b>, comes in.
        </p>
        <a href="#" className="text-pink-600 underline font-semibold">
          Get a Free AI SEO Audit
        </a>
      </section>

      {/* What is AEO */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">What is AEO in Digital Marketing?</h2>
        <p className="mb-4">
          AEO stands for <b>Answer Engine Optimization</b> or <b>AI Engine Optimization</b>.
          It’s the next evolution of SEO, focused on optimizing digital content
          for AI-driven answer engines. Instead of just ranking on Google’s SERPs,
          AEO ensures your brand shows up directly in answers provided by tools like:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Google SGE (Search Generative Experience)</li>
          <li>ChatGPT</li>
          <li>Bing AI</li>
          <li>Voice Assistants like Alexa, Siri, and Google Assistant</li>
        </ul>
      </section>

      {/* Why Bizwoke */}
{/* Why Bizwoke */}
<section className="max-w-4xl mx-auto px-4 py-8">
  <h2 className="text-2xl font-bold mb-6">
    Why Bizwoke is the Best AEO Company in Noida
  </h2>
  <p className="mb-6">
    Bizwoke is among the first digital marketing agencies in Noida to fully
    embrace and implement <b>Answer Engine Optimization (AEO)</b> strategies.
    Here’s why businesses trust Bizwoke for cutting-edge AEO solutions:
  </p>
  <ul className="space-y-4">
    {[
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
    ].map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      </li>
    ))}
  </ul>
</section>


      {/* Services */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Bizwoke’s AEO Services Include:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Optimizing content for Google SGE and Bing AI</li>
          <li>Creating FAQ-rich, zero-click content</li>
          <li>AI-compatible meta tags and snippets</li>
          <li>Schema markup implementation</li>
          <li>Voice search optimization</li>
          <li>Brand visibility audits for AI-based platforms</li>
        </ul>
        <a href="#" className="text-pink-600 font-semibold underline block mt-4">
          Get a Free AI SEO Audit
        </a>
      </section>

      {/* Who Needs AEO */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Who Needs AEO?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <b>E-commerce brands</b> looking to boost visibility in AI shopping
            recommendations
          </li>
          <li>
            <b>Local businesses</b> wanting to appear in voice searches and
            location-based answers
          </li>
          <li>
            <b>Content creators & publishers</b> aiming to dominate AI-driven
            featured snippets
          </li>
          <li>
            <b>Startups & B2B companies</b> wanting to be the go-to answer in
            their niche
          </li>
        </ul>
      </section>

      {/* Future Section */}
<section className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-200">
  <h2 className="text-2xl font-bold mb-4">
    The Future is Answer-Driven – Stay Ahead with Bizwoke
  </h2>
  <p className="text-gray-700 leading-relaxed">
    As search engines shift from showing “10 blue links” to direct,
    conversational answers, your digital presence must evolve. <b>Bizwoke</b>, 
    the Best AEO company in Noida, ensures you’re not just on page one, 
    but in <b>answer one</b>.
  </p>
</section>


      {/* Testimonial */}
      <section className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
        <blockquote className="italic text-gray-700">
          “We’ve seen a 3X increase in traffic from voice and AI-driven sources
          since working with Bizwoke. Their AEO expertise is unmatched in Noida.”
          – Priya Jain, E-commerce Founder
        </blockquote>
      </section>

      {/* Final Words */}
      <section className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Final Words</h2>
        <p className="mb-4">
          If you want your brand to thrive in the age of AI and conversational
          search, <b>Answer Engine Optimization</b> is non-negotiable. Partner
          with <b>Bizwoke</b>, Noida’s top digital marketing agency for AEO, and
          future-proof your visibility today.
        </p>
        <a href="#" className="text-pink-600 font-semibold underline">
          Ready to Rank in AI Answers? Contact Bizwoke – The Best AEO Company in
          Noida
        </a>
      </section>

      {/* Visitors FAQ Section */}
<section className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-200">
  <h2 className="text-2xl font-bold mb-6">Visitors FAQ’s :</h2>
  <div className="space-y-4">
    <div>
      <h3 className="font-semibold text-lg mb-2">
        Q. What is Google SGE (Search Generative Experience)?
      </h3>
      <p className="text-gray-700 leading-relaxed">
        A. Google SGE (Search Generative Experience) is an experimental feature from
        Google that uses generative AI to enhance traditional search results. It’s part
        of Google’s broader integration of AI into its search engine, allowing users to
        get more conversational, context-rich, and synthesized answers.
      </p>
    </div>
  </div>
</section>

{/* Keywords Section */}
<section className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-200">
  <h2 className="text-2xl font-bold mb-4">Keywords Used:</h2>
  <p className="text-gray-700 leading-relaxed">
    Bizwoke, best AEO company in Noida, Answer Engine Optimization, digital marketing
    company in Noida, AI SEO Noida, optimize for Google SGE, voice search marketing,
    ChatGPT SEO
  </p>
</section>

{/* Popular Searches Section */}
<section className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-200">
  <h2 className="text-2xl font-bold mb-4">Popular Searches :</h2>

  <p className="text-xl leading-loose">
    <a
      href="#"
      className="text-pink-600 underline hover:text-blue-800"
    >
      Best AEO Services in Noida
    </a>
  </p>

  <p className="text-3xl font-bold leading-loose">
    
      Best AI SEO Company in Noida
  </p>

  <p className="text-2xl font-bold leading-loose">

      Best AEO agency in Noida
  </p>

  <p className="text-xl leading-loose font-bold">
      Best AEO Company in Noida
  </p>

  <p className="text-xl leading-loose"> SEO powered by&nbsp;
    <a
      href="#"
      className="text-pink-600 underline hover:text-blue-800"
    >
       the Best SEO company in Delhi NCR
    </a>
  </p>

  <p className="text-xl leading-loose"> Explore&nbsp;
    <a
      href="#"
      className="text-pink-600 underline hover:text-blue-800"
    >
      Best SEO company in Noida sector 62 | Noida Portal
    </a>
  </p>
</section>

    </div>
  );
};

export default AOEServices;
