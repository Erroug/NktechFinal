import React from 'react';

const contentWriting = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      {/* Title with line */}
      <div className="flex items-center w-full mb-6">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="mx-4 text-[#294A63] text-2xl sm:text-3xl md:text-4xl font-bold">
          Content Writing
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 px-2">
        Relevant content is the Great medium of sharing our Lifestyle, Hobbies,
        Product and Services details with our Friends, Colleagues or to target
        audience. Producing right content to attract and educate right audience
        is what all decent communication called. We At Techstores always believe
        in competing with Trends, and this is the reason we have collaborated
        with Youth employees who can beat with the Era. We are offering
        different range of content writing. Whether a Blog writing, Some
        technical Guidelines or information, An informative paragraph or
        happening Lifestyle. All you need to tell us your requirements, and we
        will deliver you the Perfect piece of words together.
      </p>

      {/* Our Cityportals Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Card 1 */}
            <div className="text-center bg-[#1f3f53] p-4 sm:p-6 rounded-lg">
              <div className="mb-6">
                <img
                  src="/assets/content-writing/Technical_Content-Writing-400x355-1.jpg"
                  alt="Technical Content"
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
              <h3 className="text-orange-500 text-xl font-bold mb-3">Technical</h3>
              <p className="text-white leading-6">
                High-quality technical content writing. NKtech ensures to put the
                best words forward to explain the technical information about your
                Products, Services or Software...
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center bg-[#1f3f53] p-4 sm:p-6 rounded-lg">
              <div className="mb-6">
                <img
                  src="/assets/content-writing/Hobbies_Content-Writing-400x355-1.jpg"
                  alt="Hobby Content"
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
              <h3 className="text-orange-500 text-xl font-bold mb-3">Hobby</h3>
              <p className="text-white leading-6">
                Blogging, telling a mass audience about fashion, Lifestyle,
                Books, Travel or maybe some delicious recipes via various social
                platforms...
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center bg-[#1f3f53] p-4 sm:p-6 rounded-lg">
              <div className="mb-6">
                <img
                  src="/assets/content-writing/Normal_Content-Writing-400x355-1.png"
                  alt="Normal Content"
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
              <h3 className="text-orange-500 text-xl font-bold mb-3">Normal</h3>
              <p className="text-white leading-6">
                Bizwoke ensures to provide a complete package to the Clients. If
                you have some general requirement on any topic, we will feel
                great to serve you with our Content Writing Team...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contentWriting;
