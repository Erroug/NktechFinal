import React from 'react'

const WebDesigning = () => {
  return (
    <div className="flex flex-col items-center justify-center">

      {/* ✅ Fullscreen Top Image */}
      <div className="w-full h-[40vh] sm:h-[60vh] relative">
        <img
          src="/assets/website-designing/banner-web-development-1.png"
          alt="Web Designing Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ✅ Content Section */}
      <div className="flex flex-col items-center justify-center px-4 mt-8 sm:mt-12">
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed">
          Searching for website designing company or Website development company in Noida, Ghaziabad 
          or Greater Noida. We offer best Website designing services at very competitive price.
          <br /><br />
          Among a large number of web development companies operating in India, NK Tech holds a respectable
          position. We offer a wide range of web development styles and solutions...
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
              <p className="text-white leading-6">
                We begin the process with a perfect planning as we believe that planning 
                plays a vital role in every process...
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
              <p className="text-white leading-6">
                The next stage after planning is creating interfaces considering your business theme...
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
              <p className="text-white leading-6">
                Our team of skilled web developers works on the final design and further creates front-end interfaces...
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
