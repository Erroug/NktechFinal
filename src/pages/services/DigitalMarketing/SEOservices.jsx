import React from "react";

export default function SEOservices() {
  return (
    <section className="bg-gray-50 py-12">
      {/* full width container */}
      <div className="w-full px-4 text-[#294A63]">

        {/* ===== Title with dashed divider ===== */}
        <div className="relative mb-8 text-center">
          <div className="absolute left-0 top-1/2 w-full border-t border-dashed border-[#294A63]"></div>
          <h2 className="relative inline-block bg-gray-50 px-4 text-4xl font-bold text-[#294A63]">
            SEO Services
          </h2>
        </div>

        {/* ===== Intro ===== */}
        <p className="mb-12 text-gray-600 text-lg text-justify leading-relaxed">
          The Clients rated us as the Best SEO service provider in Noida, and Delhi NCR.
          Call @ 8920877101 to know more about our unique{" "}
          {/* 🔗 changed span to anchor */}
          <a
            href="https://bizwoke.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-red-600 underline"
          >
            Guaranteed SEO Ranking
          </a>{" "}
          Services.
          <br /><br />
          SEO services are the backbone of your Digital Marketing plan. Everyone wants to rank
          top at Google or other search engines. At Bizwoke we delivered the best white hat SEO
          services to our clients around the world. Our clients websites are ranking at the top.
          The reviews of our clients like “Best SEO services..” “We are Getting most out of my
          website after SEO services from Bizwoke…” such motivated words make team Bizwoke proud.
          But still, we are working hard and inventing new ideas and methodology to offer Best
          SEO services to our clients. Our team core objective is to give the best ROI to our
          clients on their investment in SEO services. We are based in Noida and providing SEO
          services in Delhi-NCR and Globally. The company has a client base in US, UK, Australia.
          Our Best SEO services are helping the customer to increase the traffic towards the
          website which enhances the visibility of the business. We are offering Best SEO services
          in Noida, Delhi, Ghaziabad and Delhi NCR. We are thankful to our clients for giving us
          such motivating reviews ie “best SEO services in Greater Noida“,
          <span className="font-medium text-red-600"> “Best SEO company“</span>, ”Best SEO services”
          etc. We have our local offices in
          <span className="font-medium text-orange-600"> Noida</span>,
          <span className="font-medium text-orange-600"> Greater Noida</span> and
          <span className="font-medium text-orange-600"> Ghaziabad</span>.
        </p>


        {/* ===== Page Optimization ===== */}
        <SectionTitle title="Page Optimization" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
          <div className="flex justify-center ">
            <img
              src="/assets/seo-services/On-Page-Optimization.jpeg"
              alt="On-Page Optimization"
              className="h-auto w-full max-w-lg rounded-lg"
            />
          </div>
          <List items={[
            "Website Designing",
            "Competitor Analysis Goals Assessment",
            "Keywords Research",
            "XML Sitemaps creation and submission in Google, Yahoo, Bing",
            "Checking of Broken Links",
            "ALT Tag Optimization",
            "HTML Optimization and Modifications",
            "Anchor Text Optimization",
            "Robots.txt Modifications",
            "Meta Verification Code Installation",
            "Google Analytics",
            "Webmaster Installation"
          ]} />
        </div>

        {/* ===== Directory Submissions ===== */}
        <SectionTitle title="Directory Submissions" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
          <List items={[
            "Manual Submissions to a handpicked database of directories with good Alexa ranks and page ranks",
            "Submission to TOP Directories from relevant categories like Dmoz, Yahoo Directory, Jayde etc.",
            "Submission of subpages to top Directories",
            "Verify all the links manually.",
            "Writing an SEO optimized the promotional blog post.",
            "Post published on a niche blog.",
            "The blog will have a relevant PageRank PR1 & Above."
          ]} />
          <div className="flex justify-center">
            <img
              src="/assets/seo-services/off-page-seo-1-504x504-1.png"
              alt="Directory Submissions"
              className="h-auto w-full max-w-lg rounded-lg"
            />
          </div>
        </div>

        {/* ===== Other Services ===== */}
        <SectionTitle title="Other SEO Services" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Column title="Press Release Submissions" items={[
            "Press Release Publication and submit to top PR sites each PR like PRLog, SanePR, PRWeb etc.",
            "Categorized perfectly and personalized service with all manual submission through experts.",
            "100% manual. No automated software will be used to perform submissions.",
            "Detailed report on Press release submission."
          ]} />
          <Column title="Blog Comments" items={[
            "Forum postings and Blog comments – High Traffic forum sites.",
            "Creating the login id with main and relevant sites.",
            "Making the posts in the relevant thread, blogs with your Website URL.",
            "Maintaining the posts."
          ]} />
          <Column title="Article Submissions" items={[
            "Articles Manually promoted to TOP Article sites Each article like ezine, articles, article dashboard etc.",
            "Our experts will register with each article directory, verify email and then submit an article for you.",
            "Detailed report where your article has been published.",
            "We do all the article submissions manually."
          ]} />
          <Column title="Social Bookmarking" items={[
            "Creating the logging id with reputed sites like Digg, delicious, StumbleUpon, Technorati.com.",
            "Bookmarking the relevant, theme-based sites.",
            "Making the bookmark popular in famous sites.",
            "Digging & Maintaining the sites."
          ]} />
          <Column title="Free Blog Setup" items={[
            "Free Blog setup on platforms like WordPress, Blogspot, Tumblr.",
            "Blog post Writing & Publication."
          ]} />
          <Column title="Price" items={["Rs. 2,000 per keyword per month."]} />
        </div>

        {/* ===== Government Projects ===== */}
        <div className="mt-10">
          <h3 className="mb-4 font-semibold text-xl underline">Popular Searches:</h3>
          <p>
            <a href="https://bizwoke.com" target="_blank" rel="noopener noreferrer"
              className="text-blue-600 text-xl hover:underline">
              Best SEO company in Noida
            </a>.
          </p>
          <p>
            <a href="https://bizwoke.com" target="_blank" rel="noopener noreferrer"
              className="text-blue-600 text-xl hover:underline">
              Best SEO company in Noida
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ---------- Small Reusable Components ---------- */
const SectionTitle = ({ title }) => (
  <div className="relative mb-8  text-center">
    <div className="absolute left-0 top-1/2 w-full border-t border-dashed  text-[#294A63]"></div>
    <h2 className="relative inline-block bg-gray-50 px-4 text-4xl font-bold text-[#294A63] ">
      {title}
    </h2>
  </div>
);

const List = ({ items }) => (
  <ul className="list-disc pl-6 space-y-3 text-xl text-gray-600">
    {items.map((i, idx) => <li key={idx}>{i}</li>)}
  </ul>
);

const Column = ({ title, items }) => (
  <div>
    <h3 className="mb-4 text-xl font-semibold underline">{title}</h3>
    <List items={items} />
  </div>
);
