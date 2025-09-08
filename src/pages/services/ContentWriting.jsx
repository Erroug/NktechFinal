import React from 'react'

const GraphicDesigning = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <h2 className="text-center text-[#294A63] text-4xl font-bold mb-6 relative w-full">
        <span className="px-4 bg-white relative z-10">Content Writing</span>
        <div className="absolute top-1/2 left-0 w-full border-t border-gray-400 z-0"></div>
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Relevant content is the Great medium of sharing our Lifestyle, Hobbies, Product and Services
        details with our Friends, Colleagues or to target audience. Producing right content to attract and
        educate right audience is what all decent communication called. We At Techstores always belive in
        competing with Trends, and this is the reason we have collaborated with Youth employees who can beat
        with the Era. We are offering different range of content writing. Whether a Blog writing, Some technical
        Guidelines or information, An informative paragraph or happening Lifestyle. All you need to tell us your
        requirements, and will deliver you the Perfect piece of words together.
      </p>


      {/* Our Cityportals Section */}
      <section className="w-screen py-12">

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6">
                <img
                  src="/assets/content-writing/Technical_Content-Writing-400x355-1.jpg"
                  alt="City Portal Features"
                  className="w-full h-auto "
                />
              </div>
              <h3 className="text-orange-500 text-xl font-bold mb-3">
                Technical
              </h3>
              <p className="text-white leading-6">
                High-quality technical content writing. NKtech ensures to put the best words forward
                 to explain the technical information about your Products, Services or Software. 
                 Whether you need to explain some technical features or guidance, we will help you 
                 to explain those terms in the best possible easier manner. We also have a bunch of 
                 technical content writers, who really have a piece of sharp knowledge about the technical zone.
              </p>
            </div>

            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6">
                <img
                  src="/assets/content-writing/Hobbies_Content-Writing-400x355-1.jpg"
                  alt="City Portal Features"
                  className="w-full h-auto "
                />
              </div>
              <h3 className="text-orange-500 text-xl font-bold mb-3">
                Hobby
              </h3>
              <p className="text-white leading-6">
              Blogging, telling a mass audience about fashion, Lifestyle, Books, Travel or maybe some 
              delicious recipes via various social platforms or some written material, is something on
               fire nowadays. Here at NKtech, we appreciate your Hobby, and really would like to put the 
               best words combination forward to tell about. So if you have such need, we are a call away.
              </p>
            </div>

            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6">
                <img
                  src="/assets/content-writing/Normal_Content-Writing-400x355-1.png"
                  alt="Social Media Integration"
                  className="w-full h-auto "
                />
              </div>
              <h3 className="text-orange-500 text-xl font-bold mb-3">
                Normal
              </h3>
              <p className="text-white space-y-2 mb-5">
              Bizwoke ensures to provide a complete package to the Clients. If you have some general requirement on
               any of the topic, will feel great to serve you with our really great Content Writing Team. Also, 
               we really would like to convey the information to your targeted Audience in your way.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>




  )
}

export default GraphicDesigning
