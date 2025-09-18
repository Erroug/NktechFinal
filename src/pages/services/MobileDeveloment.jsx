import React from 'react'

const MobileDeveloment = () => {
  return (
    
        <div className="flex flex-col items-center justify-center px-4">
          <h2 className="text-center text-[#294A63] text-4xl font-bold mb-6 relative w-full">
            <span className="px-4 bg-white relative z-10">Mobile App Development</span>
            <div className="absolute top-1/2 left-0 w-full border-t border-gray-400 z-0"></div>
          </h2>
    
          <p className="text-center text-gray-600 max-w-3xl text-justify mx-auto mb-12">
          Two significant and related patterns previously significantly affecting everyday tasks
           at a quickly developing number of organizations. Regardless of whether you’re a person with
            an unmistakable application thought, or an endeavor intending to arrive at your intended interest
             group and drive your piece of the overall industry through Custom App improvement, porting a web 
             application to versatile or planning your WAP website, we will tune in to your necessities and sustain 
             your thoughts through our procedure and carry the world to your fingertips.
          </p>
    
    
          {/* Our Cityportals Section */}
          <section className="w-screen py-12">
    
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-100">
                <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
                  <div className="mb-6">
                    <img
                      src="/assets/mobile-app-dev/Mobile-Application-Development_E-Commerce-400x355-1.png"
                      alt="City Portal Features"
                      className="w-full h-auto "
                    />
                  </div>
                  <h3 className="text-orange-500 text-xl font-bold mb-3">
                    E-Commerce
                  </h3>
                  <p className="text-white text-justify leading-6">
                  All we want is a handy solution, an application that supports mobile. You can 
                  access it anytime anywhere. All we want you to come up with a business idea and 
                  our team of experts will convert that into a handy mobile application. Shopping 
                  cart, buy or sale on a single click, post your requirement, development of your own 
                  business mobile application. We have a team of experts, who will help you out by developing
                   a mobile application which facilitate to perform all E-Commerce functions.
                  </p>
                </div>
    
                <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
                  <div className="mb-6">
                    <img
                      src="/assets/mobile-app-dev/Mobile-Application-Development_Basic-400x355-1.png"
                      alt="City Portal Features"
                      className="w-full h-auto "
                    />
                  </div>
                  <h3 className="text-orange-500 text-xl font-bold mb-3">
                    Basic
                  </h3>
                  <p className="text-white text-justify 0leading-6">
                  Understanding the right need, at the right time, and targeting to the
                   right audience is the essence of successful Business. Question is, how to
                    communicate with your audience. Are offline promotional activities enough?
                     The answer is: No. Make your business-related information more accessible to
                      your audience, with the help of a website or the application which supports a mobile too.
                  </p>
                </div>
              </div>
            </div>
          </section>
    
        </div>
  )
}

export default MobileDeveloment