import React from "react";
import { CheckCircle } from "lucide-react";

const AOEServices = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Best AEO company in Noida</h1>
        <p className="text-lg mb-6">
          <span className="font-bold">NKTech – The Best AEO Company in Noida</span> for (AI) Answer
          Engine Optimization or AI Engine Optimization
        </p>
        <p className="mb-6">
          Looking for the best AEO company in Noida? NKTech offers expert Answer
          Engine Optimization services to help your brand rank higher in
          AI-driven search results like Google SGE and ChatGPT.
        </p>
        <div className="flex justify-center">
          <img
            src="/nklogo.png"
            alt="NK Tech Logo"
            className="w-60 h-auto"
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-4">
          The future of search is here—and it’s powered by <b>Answer Engines</b>{" "}
          like <b>Google’s SGE</b> (Search Generative Experience), Bing AI, and
          ChatGPT. Traditional SEO alone is no longer enough. Businesses need to
          optimize their content to appear in AI-powered direct answers and
          conversational results. That’s where <b>NKTech</b>, the
          <b> best AEO company in Noida</b>, comes in.
        </p>
        <a href="#" className="text-pink-600 font-semibold">
          Get a Free AI SEO Audit
        </a>
      </section>

      {/* Why NKTech */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">
          Why NKTech is the Best AEO Company in Noida
        </h2>
        <ul className="space-y-4">
          {[
            {
              title: "AI-First Content Strategy",
              desc: "We create content that aligns with how AI tools interpret and deliver answers—clear, concise, and semantically rich.",
            },
            {
              title: "Structured Data & Schema Integration",
              desc: "NKTech implements structured data to help search engines understand your content contextually and accurately.",
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
              desc: "From web search and voice to AI chatbots, NKTech helps you appear everywhere your customers are searching.",
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
        <h2 className="text-2xl font-bold mb-6">NKTech’s AEO Services Include:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Optimizing content for Google SGE and Bing AI</li>
          <li>Creating FAQ-rich, zero-click content</li>
          <li>AI-compatible meta tags and snippets</li>
          <li>Schema markup implementation</li>
          <li>Voice search optimization</li>
          <li>Brand visibility audits for AI-based platforms</li>
        </ul>
        <a href="#" className="text-pink-600 font-semibold block mt-4">
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

      {/* Testimonial */}
      <section className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
        <blockquote className="italic text-gray-700">
          “We’ve seen a 3X increase in traffic from voice and AI-driven sources
          since working with NKTech. Their AEO expertise is unmatched in Noida.”
          – Priya Jain, E-commerce Founder
        </blockquote>
      </section>

      {/* Final Words */}
      <section className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Final Words</h2>
        <p className="mb-4">
          If you want your brand to thrive in the age of AI and conversational
          search, <b>Answer Engine Optimization</b> is non-negotiable. Partner
          with <b>NKTech</b>, Noida’s top digital marketing agency for AEO, and
          future-proof your visibility today.
        </p>
        <a href="#" className="text-pink-600 font-semibold">
          Ready to Rank in AI Answers? Contact NKTech – The Best AEO Company in
          Noida
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} NKTech. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AOEServices;
