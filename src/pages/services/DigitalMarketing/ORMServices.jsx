import React from 'react';

const ORMServices = () => {
  const teamMembers = [
    { name: "Google", img: "/assets/orm-services/google-icon-logo-png-transparent-1-e1560335498262.webp" },
    { name: "Facebook", img: "/assets/orm-services/facebook_circle-512-1-e1560335246915.png" },
    { name: "Zomato", img: "/assets/orm-services/zomato-logo-AD6823E433-seeklogo.com-1-e1560334673515.webp" },
    { name: "Tripadvisor", img: "/assets/orm-services/TA_550x370-1-e1560336988288.webp" },
    { name: "Swiggy", img: "/assets/orm-services/swiggy-1-e1560337281725.webp" },
    { name: "Other negative comments", img: "/assets/orm-services/thumbs-down-bad-review-1-e1560338172401.webp" },
  ];

  const SectionHeader = ({ title }) => (
    <div className="flex items-center justify-center mb-8">
      <div className="border-t border-dashed border-[#294A63] flex-grow"></div>
      <h2 className="px-4 text-4xl font-bold text-[#294A63] bg-white whitespace-nowrap text-center">
        {title}
      </h2>
      <div className="border-t border-dashed border-[#294A63] flex-grow"></div>
    </div>
  );

  return (
    <div className="bg-white text-gray-800 w-full m-0 p-0">

      {/* ===== Section Heading ===== */}
      <SectionHeader title="ORM Services" />

      {/* ===== Intro ===== */}
      <div className="container mx-auto px-4">
        <p className="mb-12 leading-relaxed text-xl text-justify">
          ORM (Online Reputation Management) is the way to change the perception of the users about any business in
          a positive way. You need the Best ORM company in Noida for this. In this digital phase, every consumer is
          looking at the reviews before trusting the organisation because of which maintaining the reputation is even
          more important. Basically, it helps to improve the standing of any organisation digitally. It gives an edge
          to the business to monitor what will be perceived when customers are searching for them. It helps in review
          management & negative link removal on google search. This eventually will help the organisation to build
          trust and confidence among their customers and help them increase their business. Our clients say we are
          the “Best ORM Company in Noida” and offering “Best ORM services in Noida” at a very reasonable price.
          <br /><br />
          You can contact us for Google review generation, Facebook review generation, JustDial reviews generation, and Glassdoor
          Review Generation. We have helped more than 100 personal profiles and 250+ corporates to manage their negative reviews
          and negative link in Google Search Result.
          <br /><br />
          We use our best ORM-tested tactics to offer the Best ORM services to our clients. Our clients reviewed us for Our Best ORM
          services. Some of them said that we are the Best ORM company in Noida and a few Best ORM Agencies in Noida at reasonable prices.
          Our mostly clients are in Noida, Gurgaon, Ghaziabad, Delhi, Faridabad, and Meerut.
        </p>
      </div>

      {/* ===== Highlight Box ===== */}
      <div className="bg-[#294a63] text-white flex flex-col justify-center items-center gap-6 text-center py-10 md:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          "Your brand isn’t what you say about it, it is about what social platforms says it is."
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-4xl">
          People end up writing bad reviews on various platforms if they feel dissatisfied with the company or product. Being the Best ORM company, we run digital campaigns to solve our client’s customers queries and ask satisfied customers to post about their positive experiences.
        </p>
        <button className="mt-6 border-2 border-white bg-[#fcb900] text-black font-bold px-8 sm:px-16 lg:px-28 py-2 rounded hover:bg-[#294A63] hover:text-white transition">
          Get Offer
        </button>
      </div>

      {/* ===== Team Section ===== */}
      <div className="bg-white text-gray-800 py-16 px-4">
        <SectionHeader title="Review Management" />

        <p className="text-base md:text-xl text-center max-w-4xl mx-auto leading-relaxed mb-12">
          We will help you to manage the reviews on various social media platforms like.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border border-gray-300 divide-x divide-y divide-gray-300">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6">
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* ===== ORM FAQ’s ===== */}
      <div className="mt-10 px-4">
        <SectionHeader title="ORM FAQ's" />
        <p className="max-w-5xl mx-auto text-xl text-justify">
          What is ORM – Online Reputation Management?<br />
          <strong>Sol.</strong> ORM is the Online Reputation of a Company, Agency, etc. It is done to maintain a good and valuable reputation of a Company, Brand.
        </p>
      </div>

      {/* ===== Popular Searches ===== */}
      <div className="mt-10 px-4">
        <h3 className="mb-4 font-semibold text-4xl text-[#294A63] underline">Popular Searches :</h3>
        <p>
          <a href="https://bizwoke.com" target="_blank" rel="noopener noreferrer"
            className="text-pink-600 text-xl underline hover:text-blue-700 hover:underline">
            Best AEO company in Noida
          </a>.
        </p>
        <p>
          <a href="https://bizwoke.com" target="_blank" rel="noopener noreferrer"
            className="text-pink-600 text-xl underline hover:text-blue-700 hover:underline">
            Best SEO company in Noida
          </a>.
        </p>
      </div>

    </div>
  );
};

export default ORMServices;
