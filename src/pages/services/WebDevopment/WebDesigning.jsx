import React from 'react'

const WebDesigning = () => {
  return (
    <div className="flex flex-col items-center justify-center">

      {/* ✅ Fullscreen Top Image – No Cropping */}
      <div className="w-full relative">
        <img
          src="/assets/website-designing/banner-web-development-1.png"
          alt="Web Designing Banner"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ✅ Content Section */}
      <div className="flex flex-col items-center justify-center px-4 mt-8 sm:mt-12">
  <p className="text-justify text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed">
    Searching for website designing company or Website development company in Noida, Ghaziabad or Greater Noida. We offer 
    best Website designing services at very competitive price.<br/><br/>

    Among a large number of web development companies operating in India, Bizwoke holds a respectable position. We offer a 
    wide range of web development styles and solutions. We are known for professional services in website designing and Website
    development. Web developers working at Bizwoke are capable of delivering and executing the best possible web solutions for your
    business. Our web developers possess expertise to improve your existing website, and thus ensuring a great Digital marketing 
    campaign or business application.<br/><br/>

    We have India’s best web development team in perfect combination with the most comprehensive web development process in the
    industry. This innovative web development process makes A-One Innovation Noida’s best web development company which is way 
    ahead than the rest. All the Web development Companies use programming languages and code to create a perfect web model. 
    We employ a wide range of web development technologies like: HTML/XHTML, PHP, Java Script/AJAX, XML and Web Magnet.<br/><br/>

    Our company has been offering its web development services for more than 8 years to clients from all over the world. We make 
    sure that all our clients are 100% satisfied with our web development services with best quality solutions and excellent services.
  </p>
</div>


      {/* ✅ Three Cards Section */}
      <section className="w-full py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

            {/* Card 1 */}
            <div className="text-center bg-[#1f3f53] p-4 sm:p-6 rounded-lg">
              <div className="mb-6">
                <img
                  src="/assets/website-designing/NKtech-Image.png"
                  alt="City Portal Features"
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
              <h3 className="text-orange-500 text-xl font-bold mb-3">
                Website Planning
              </h3>
              <p className="text-white text-justify leading-6">
              We begin the process with a perfect planning as we believe 
              that planning plays a vital role in every process. The basic 
              structural design of web project is made at the first phase of
               the process, where we consider your aspirations, ideas, business
                goals, vision, trade-module and budget. All these things are combined
                 together and a development plan is made along with an estimated timeline.
                  Design details like color, programming languages, CMS types etc., are 
                  visualized, planned and finalized at this stage.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center bg-[#1f3f53] p-4 sm:p-6 rounded-lg">
              <div className="mb-6">
                <img
                  src="/assets/website-designing/web-1.png"
                  alt="Website Designing"
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
              <h3 className="text-orange-500 text-xl font-bold mb-3">
                Website Designing
              </h3>
              <p className="text-white text-justify leading-6">
              The next stage after planning is creating interfaces 
              considering your business theme, brand and synopsis of 
              planning. Special efforts are taken to make these interfaces 
              effective, user-friendly and technically perfect. Our team timely
               checks these interfaces considering all the aspects from the business
                point of view and revenue-generation. Client’s feedbacks and suggestions
                 are taken into consideration and implemented before finalizing the website design.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center bg-[#1f3f53] p-4 sm:p-6 rounded-lg">
              <div className="mb-6">
                <img
                  src="/assets/website-designing/PHP-Development-e1526283175962.png"
                  alt="Website Development"
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
              <h3 className="text-orange-500 text-xl font-bold mb-3">
                Website Development
              </h3>
              <p className="text-white text-justify leading-6">
              Our team of skilled web developers works on the final design and 
              further creates front-end interfaces. Our expert team of web developers 
              converts the first stage of planning into excellent web pages using the
               final coding of the website and by adding CMS & other features. Our 
               development team works in complete co-ordination with the latest up to
                date technology, thus executing & validating as per the latest W3C levels.
                 Every aspect is timely checked by our team including the source code review,
                  identification of HTML issues if any. Every aspect of web development is 
                  religiously executed, monitored and quality checked by our highly professional team.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ✅ Bottom Two-Column List */}
      <section className="w-full py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

          {/* Left Column */}
          <div>
            <h3 className="text-[#294A63] text-lg sm:text-xl font-semibold mb-4">
              We have done
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-base sm:text-lg">
              <li>Website development for schools</li>
              <li>Website development for colleges</li>
              <li>Website development for hospitals</li>
              <li>Website development for doctors</li>
              <li>Website development for hotels</li>
              <li>Website development for politicians</li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-[#294A63] text-lg sm:text-xl font-semibold mb-4">
              Type of websites we developed
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-base sm:text-lg">
              <li>Online Shopping carts</li>
              <li>Realestate portals</li>
              <li>Online Education portal</li>
              <li>Job portal</li>
              <li>Matrimonial portals</li>
              <li>City Portals</li>
              <li>Medical Portals</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  )
}

export default WebDesigning
