import React from 'react'

const GraphicDesigning = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <h2 className="text-center text-[#294A63] text-3xl font-semibold mb-6 relative w-full">
        <span className="px-4 bg-white relative z-10">Our Big Step</span>
        <div className="absolute top-1/2 left-0 w-full border-t border-gray-400 z-0"></div>
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Innovativeness is the fundamental principle of visual correspondence. ‘How you state’ is
        as a lot of significant as ‘what you state’ to offer your expression to champion. Normally,
        this aptitude isn’t some tea for everything except it must be created by hatching the
        thoughts and sustaining them enthusiastically to convey the ideal effect.
        <br />
        Regardless of whether you need best logo plan or best visiting card structures or
        stationery plan or standees or handouts or site/online networking illustrations,
        we give all sort of Graphic structure administrations. Get in touch with us for any of
        your visual communication benefits like Logo, Social Media Post, Company Identity, site,
        online life promoting and so forth.
      </p>


 {/* Our Cityportals Section */}
      <section className="w-screen py-12">
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6">
                <img
                  src="/assets/graphic-designing/Company-Identity-1-400x355-1.png"
                  alt="City Portal Features"
                  className="w-full h-auto "
                />
              </div>
              <h3 className="text-orange-500 text-xl font-bold mb-3">
              Company Identity
              </h3>
              <p className="text-white leading-6">
              Create your own unique company identity design with our team.
               Whether you are looking for spectacular or some stunning flyers
                design, our team of talented designers are always ready to fulfill
                 your business needs.
              </p>
            </div>

            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6">
                <img
                  src="/assets/graphic-designing/Social-Media-Post-400x355-1.png"
                  alt="City Portal Features"
                  className="w-full h-auto "
                />
              </div>
              <h3 className="text-orange-500 text-xl font-bold mb-3">
              Social Post Design
              </h3>
              <p className="text-white leading-6">
              Social media posts design is the need of every business and 
              this work demands top-notch creativity and this is the quality 
              which makes our team different and designs the best posts which 
              can convey the message in the best way.
              </p>
            </div>

            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6">
                <img
                    src="/assets/graphic-designing/Logo-Designs-400x355-1.png"
                  alt="Social Media Integration"
                  className="w-full h-auto "
                />
              </div>
              <h3 className="text-orange-500 text-xl font-bold mb-3">
              Logo
              </h3>
              <p className="text-white space-y-2 mb-5">
              Here at Nktech, you can easily get a customized and unique logo 
              design for your business. Our team of designers has already worked
               with a lot of brands and always ready to serve you our work which you love the most.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>




  )
}

export default GraphicDesigning
