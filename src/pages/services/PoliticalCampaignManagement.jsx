import React from "react";

const PoliticalCampaignManagement = () => {
  return (
    <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
      {/* Header Image - full width */}
      <div className="w-screen mb-8">
        <img
          src="/assets/Banner-polytical.jpg"
          alt="Political Campaign Management"
          className="block w-full h-auto"
        />
      </div>

      {/* Page content */}
      <section className="w-screen bg-[#1f3f53] py-12 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left: Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 bg-white rounded px-4 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 bg-white rounded px-4 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 bg-white rounded px-4 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 bg-white rounded px-4 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <textarea
                rows="8"
                placeholder="You Message"
                className="w-full border border-gray-300 bg-white rounded px-4 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-400"
              ></textarea>
              <button
                type="button"
                className="bg-[#0f4c81] border border-black text-white px-6 py-2 rounded hover:bg-white hover:text-[#0f4c81] transition"
              >
                Submit
              </button>
            </form>

            {/* Right: Copy */}
            <div className="text-xl text-justify leading-7">
              <p>
                Your City is asking to perceive your voice because elections are
                coming. This is the time to raise your Opinions to express your
                own city, who you are and how you will be an effective Elected
                Individual to raise the city in forthcoming. So, join your hands
                with us, Bizwoke is ready for the Election Campaigning:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Ticket Services Section 1 */}
      <section className="w-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="bg-orange-500 text-white px-6 py-3 rounded-lg inline-block">
                <h3 className="text-4xl font-semibold text-center">
                  Pre-Ticket Services with Us:
                </h3>
              </div>
              <ul className="space-y-3 text-xl text-gray-600 text-justify mx-auto w-4/5">
                <li>• Website Designing</li>
                <li>• Search Engine Optimization to top Rank the profile</li>
                <li>
                  • Profile correlation with Senior Politicians & Party Head
                  Office
                </li>
                <li>• Social Media Platform & Profile Management Services</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/Pre-Ticket-Images1_605x259px.png"
                alt="Pre-Ticket Services"
                className="w-full max-w-lg h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Ticket Services Section 2 (Reversed) */}
      <section className="w-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="/assets/Pre-Ticket-Images2.1_605x414px.png"
                alt="Pre-Ticket Services"
                className="w-full max-w-lg h-auto rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-orange-500 text-white px-6 py-3 rounded-lg inline-block">
                <h3 className="text-4xl font-semibold text-center">
                  Pre-Ticket Services with Us:
                </h3>
              </div>
              <ul className="space-y-3 text-xl text-gray-600 text-justify mx-auto w-4/5">
                <li>• Campaign Management and Monitoring</li>
                <li>• Database Management</li>
                <li>
                  • Mobile Promotion</li>
                <li>• Advertising</li>
                <li>• Manpower Services</li>
                <li>• Survey and Canvassing</li>
                <li>• Social Media</li>
                <li>• PR and Media Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Ticket Services Section 3 */}
      <section className="w-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="bg-orange-500 text-white px-6 py-3 rounded-lg inline-block">
                <h3 className="text-4xl font-semibold text-center">
                  Other Services:
                </h3>
              </div>
              <ul className="space-y-3 text-xl text-gray-600 text-justify mx-auto w-4/5">
                <li>• Email Marketing</li>
                <li>• SMS Marketing</li>
                <li>
                  • Call Centres
                </li>
                <li>• Bulk WhatsApp Message</li>
                <li>• Other Offline Promotions</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/Other-Services_605x289px.png"
                alt="Pre-Ticket Services"
                className="w-full max-w-lg h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Cityportals Section */}
      <section className="w-screen py-12">
        <div className="max-w-7xl mx-auto px-6 bg-orange-500 py-4 mb-8 rounded-lg">
          <h2 className="text-center text-white text-4xl font-bold">
            Our Cityportals
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6">
                <img
                  src="/assets/City-Portal-Images1_570x342px.png"
                  alt="City Portal Features"
                  className="w-full h-auto rounded-lg bg-white p-2"
                />
              </div>
              <h3 className="text-orange-500 text-xl font-bold mb-3">
                City Portal BN
              </h3>
              <p className="text-white text-justify leading-6 mx-auto w-4/5">
                We have city portals for more than 50 cities of UP and
                Uttarakhand. We are also developing city portals for 500+ cities
                of India. Our main concern to create city portals to attract
                common people of city.
              </p>
            </div>
            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6">
                <img
                  src="/assets/City-Portal-Images2_570x342px.png"
                  alt="Social Media Integration"
                  className="w-full h-auto rounded-lg bg-white p-2"
                />
              </div>
              <h3 className="text-orange-500 text-xl font-bold mb-3">
                City Portal BN
              </h3>
              <ul className="text-white text-justify mx-auto w-4/5 space-y-2 mb-5">
                <li>Profile Creation on City Portal</li>
                <li>City portal are connected with all social platform</li>
                <li>SEO(Google ranking) on Specific keywords</li>
                <li>Post Sharing on own Social Media Platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company's Own Portal Section */}
      <section className="w-screen py-12">
        <div className="max-w-7xl mx-auto px-6 bg-orange-500 py-4 mb-8 rounded-lg">
          <h2 className="text-center text-white text-4xl font-bold">
            Company’s Own Portal
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News BN */}
          <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
            <img
              src="/assets/newsbn-new1.png"
              alt="News BN"
              className="mx-auto mb-4 bg-white p-3"
            />
            <h3 className="text-orange-500 text-xl font-bold mb-3">News BN</h3>
            <p className="text-white leading-6 text-justify mx-auto w-4/5">
              NewsBN.com is an online news website which covers hyper local and
              national news. We also create news for your campaigning to
              influence your voters and share on social media platforms.
            </p>
          </div>

          {/* C2J Mantra */}
          <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
            <img
              src="/assets/c2j.png"
              alt="C2J Mantra"
              className="mx-auto mb-4 bg-white p-3"
            />
            <h3 className="text-orange-500 text-xl font-bold mb-3">
              C2J Mantra
            </h3>
            <p className="text-white leading-6 text-justify mx-auto w-4/5">
              A placement solution for people looking for jobs and employers who
              need great employees. Provides training from expert trainers in
              Website Development, Digital Marketing, SEO, .Net, Core PHP, etc.
            </p>
          </div>

          {/* Blogs BN */}
          <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
            <img
              src="/assets/BlogBN_Logo_150x50px.png"
              alt="Blogs BN"
              className="mx-auto mb-4 bg-white p-3"
            />
            <h3 className="text-orange-500 text-xl font-bold mb-3">Blogs BN</h3>
            <p className="text-white leading-6 text-justify mx-auto w-4/5">
              BlogsBN.com is a platform for bloggers. Bloggers write different
              kinds of blogs and posts. We can ask our existing bloggers to
              write blogs for you and share them on social media.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Polls of India */}
          <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
            <img
              src="/assets/Polls-Of-India_Logo_v04-2.png"
              alt="Polls Of India"
              className="mx-auto mb-4"
            />
            <h3 className="text-orange-500 text-xl font-bold mb-3">
              Polls Of India
            </h3>
            <p className="text-white leading-6 text-justify mx-auto w-4/5">
              PollsofIndia.com is one of the leading online polling websites.
              Create polls to increase your online reputation and positive buzz
              for your work.
            </p>
          </div>

          {/* Profiles BN */}
          <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
            <img
              src="/assets/ProfileBN_Logo_270x90px_V01-1.png"
              alt="Profiles BN"
              className="mx-auto mb-4 bg-white p-3"
            />
            <h3 className="text-orange-500 text-xl font-bold mb-3">
              Profiles BN
            </h3>
            <p className="text-white leading-6 text-justify mx-auto w-4/5">
              ProfilesBN.com is a social media platform for professionals. Use
              this platform to put a banner of your work, share news, and
              connect with intellectual professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Image - full width */}
      <div className="flex justify-end mb-8 px-4">
        <img
          src="/assets/Form-Image_600x430px.png"
          alt="Political Campaign Management"
          className="rounded-lg max-w-lg w-full h-auto object-contain"
        />
      </div>

      {/* Our Clients Section with Scrolling Logos */}
      <section className="w-screen py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 bg-orange-500 py-4 mb-8 rounded-lg">
          <h2 className="text-center text-white text-4xl font-bold">
            Our Clients
          </h2>
        </div>

        <div className="overflow-hidden whitespace-nowrap relative">
          <div className="animate-marquee flex space-x-16">
            <img
              src="/assets/political-our-client/6-1-150x150.webp"
              alt="Client 1"
              className="h-40"
            />
            <img
              src="/assets/political-our-client/7-1-150x150.webp"
              alt="Client 2"
              className="h-40"
            />
            <img
              src="/assets/political-our-client/8-150x150.webp"
              alt="Client 3"
              className="h-40"
            />
            <img
              src="/assets/political-our-client/9-1-150x150.webp"
              alt="Client 4"
              className="h-40"
            />
            <img
              src="/assets/political-our-client/Amar-Ujala-150x150.webp"
              alt="Client 5"
              className="h-40"
            />
            {/* Repeat for smooth loop */}
            <img
              src="/assets/political-our-client/6-1-150x150.webp"
              alt="Client 1"
              className="h-40"
            />
            <img
              src="/assets/political-our-client/7-1-150x150.webp"
              alt="Client 2"
              className="h-40"
            />
            <img
              src="/assets/political-our-client/8-150x150.webp"
              alt="Client 3"
              className="h-40"
            />
            <img
              src="/assets/political-our-client/9-1-150x150.webp"
              alt="Client 4"
              className="h-40"
            />
          </div>
        </div>
      </section>

      {/* Add marquee animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default PoliticalCampaignManagement;
