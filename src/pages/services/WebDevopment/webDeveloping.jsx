import React from 'react'

const webDeveloping = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      {/* Our Cityportals Section */}
      <section className="w-screen py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6 flex justify-center">
                <img
                  src="/assets/website-developing/711px-PHP-logo.svg_-oebs5gomsurkxvkt6s607r884j3us42w0f4rwrcem8.png"
                  alt="PHP"
                  className="max-w-[120px] md:max-w-[150px] h-auto"
                />
              </div>
              <p className="text-white leading-6">
                PHP (recursive acronym for PHP: Hypertext Preprocessor)
                is a widely-used open source general-purpose scripting
                language that is especially suited for web development and can be embedded into HTML.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6 flex justify-center">
                <img
                  src="/assets/website-developing/Vertical-Logo-2015-e1569483208477-oebsv5ltltxqa69b5vywd9tsnoh16a2rjl2k5190jk.png"
                  alt="PrestaShop"
                  className="max-w-[120px] md:max-w-[150px] h-auto"
                />
              </div>
             
              <p className="text-white leading-6">
              PrestaShop is a freemium, open source e-commerce solution. The software 
              is published under the Open Software License. It is written in the PHP programming
               language with support for the MySQL database management system.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6 flex justify-center">
                <img
                  src="/assets/website-developing/1200px-.NET_Core_Logo.svg_-oebsjulpekgkn0oi6i1fvmj7fu73lc6znmlbc80hds.png"
                  alt=".NET"
                  className="max-w-[120px] md:max-w-[150px] h-auto"
                />
              </div>
           
              <p className="text-white leading-6">
                The DOT NET Framework’s Base Class Library offers user interface,
                database connectivity, data access, cryptography, web application
                development, numeric algorithms, network communications etc.
              </p>
            </div>

            {/* Card 4 */}
            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6 flex justify-center">
                <img
                  src="/assets/website-developing/download-6-oebtntom1x6ke0m5ra39f1dwwr61xxw1hhdp2uqqrk.png"
                  alt="Angular"
                  className="max-w-[120px] md:max-w-[150px] h-auto"
                />
              </div>
             
              <p className="text-white leading-6">
              Angular is a TypeScript-based open-source web application framework led by the Angular Team at 
              Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.
              </p>
            </div>

            {/* Card 5 */}
            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6 flex justify-center">
                <img
                  src="/assets/website-developing/download-5-oebtly08dulx63cgqgu4figq50fmjqfd86eqixj37k.png"
                  alt="Shopify"
                  className="max-w-[120px] md:max-w-[150px] h-auto"
                />
              </div>
             
              <p className="text-white leading-6">
              Shopify Inc. is a Canadian multinational e-commerce company headquartered in Ottawa, Ontario. It is also the name of 
              its proprietary e-commerce platform for online stores and retail point-of-sale systems.
              </p>
            </div>

            {/* Card 6 */}
            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6 flex justify-center">
                <img
                  src="/assets/website-developing/ezgif-4-717ef4fc7b7f-oebu1feiylsyeuutbnrw03t2ei4ac8w70t9o40kmps.png"
                  alt="Magento"
                  className="max-w-[120px] md:max-w-[150px] h-auto"
                />
              </div>
             
              <p className="text-white leading-6">
              Magento is an open-source e-commerce platform written in PHP. The software
               was originally developed by Varien, Inc, a US private company headquartered
                in Culver City, California, with assistance from volunteers. Varien published 
                the first general-availability release of the software on March 31, 2008.
              </p>
            </div>

            {/* Card 7 */}
            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6 flex justify-center">
                <img
                  src="/assets/website-developing/download-4-oebtaqrgxx9wtdm754j67u7zapn5tkyioqjfn84zcw.png"
                  alt="Joomla"
                  className="max-w-[120px] md:max-w-[150px] h-auto"
                />
              </div>
              
              <p className="text-white leading-6">
              Joomla is a free and open-source content management system for publishing web content, developed by 
              Open Source Matters, Inc. It is built on a model–view–controller web application framework that can be used independently of the CMS.
              </p>
            </div>

            {/* Card 8 */}
            <div className="text-center bg-[#1f3f53] p-6 rounded-lg">
              <div className="mb-6 flex justify-center">
                <img
                  src="/assets/website-developing/download-8-oebtve9t3vjpwxm7jjx2i4ll6huhy5y76yki93ikn4.png"
                  alt="WordPress"
                  className="max-w-[120px] md:max-w-[150px] h-auto"
                />
              </div>
              
              <p className="text-white leading-6">
              WordPress is a content management system based on PHP and MySQL that is usually used with the MySQL or MariaDB
               database servers but can also use the SQLite database engine. Features include a plugin architecture and a template system.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default webDeveloping
