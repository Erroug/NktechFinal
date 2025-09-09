import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion"; 

export default function IECServices() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[#294A63] text-white text-center py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Empowering ULBs with Impactful IEC Solutions
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl mb-8"
        >
          Driving awareness, participation, and behavioral change through
          digital + on-ground IEC campaigns aligned with Swachh Bharat Mission
          (Urban) and Swachh Survekshan 2025 Toolkit.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            🚀 Partner with Us
          </motion.button>

          <motion.button
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            📄 Request a Proposal
          </motion.button>
        </motion.div>
      </div>
    </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl text-[#294A63] font-bold mb-6">About Our IEC Services</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Bizwoke Nova, we specialize in delivering Information, Education,
            and Communication (IEC) services tailored for Urban Local Bodies
            (ULBs). Our goal is to help municipalities inform citizens, engage
            communities, and create lasting behavioral change in line with Swachh
            Bharat Mission guidelines.
            <br />
            <br />
            By combining digital outreach and grassroots campaigns, we enable ULBs
            to increase public participation, boost Swachh Survekshan scores, and
            build cleaner, healthier cities.
          </p>
        </div>
      </section>


                  {/* Highlights Section (Our Offerings) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl text-[#294A63] font-bold text-center mb-12">
          Our Offerings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Big Top Card (IPC) */}
          <div className="md:col-span-2 bg-[#294A63] text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl text-center font-bold mb-6">1. IPC (Interpersonal Communication)</h3>
            <p> Interpersonal Communication (IPC) is the most powerful tool under the Swachh Bharat 
            Mission for driving lasting behavior change. It focuses on direct, face-to-face engagement 
            with citizens through activities like Mohalla meetings, RWA sessions, Safaimitra interactions,
             school programs, and door-to-door campaigns. IPC ensures that every household understands the 
             importance of segregating wet and dry waste, reducing plastic use, and adopting 3R practices
              (Reduce, Reuse, Recycle). At NKTech, we design cost-effective IPC models that combine community
               participation and volunteer engagement, ensuring maximum impact while complying with SBM Toolkit
                norms. IPC is where awareness becomes action. </p>
          </div>

          {/* Mid Media */}
          <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-[#294A63] mb-4">2. Mid Media</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>● Street plays &amp; roadshows</li>
              <li>● Wall paintings &amp; graffiti art</li>
              <li>● IEC kiosks &amp; Waste-to-Wonder park activities</li>
              <li>● Exhibitions &amp; competitions</li>
            </ul>
          </div>

          {/* Mass Media */}
          <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-[#294A63] mb-4">3. Mass Media</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>● FM radio jingles</li>
              <li>● Newspaper ads &amp; articles</li>
              <li>● Local cable TV coverage</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-[#294A63] mb-4">4. Social Media</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>● WhatsApp campaigns</li>
              <li>● Short reels &amp; posters</li>
              <li>● Swachhata challenges (#MyCleanWard, #SwachhBulandshahr)</li>
            </ul>
          </div>

          {/* Strategic Partnerships */}
          <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-[#294A63] mb-4">5. Strategic Partnerships</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>● CSR tie-ups for merchandise (jute bags, bins, caps, umbrellas)</li>
              <li>● Local NGOs, NCC/NSS, and industry collaborations</li>
            </ul>
          </div>

        </div>
      </section>





      {/* IEC Offerings */}
      <section className="py-16 px-6  max-w-6xl mx-auto">
        <h2 className="text-3xl text-[#294A63] font-bold text-center mb-12">
          Our IEC Features for ULBs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              title: "Digital IEC Campaigns",
              points: [
                "Verified & optimized social media accounts (Meta & X)",
                "Awareness posts, infographics, reels & short videos",
                "Citizen contests, polls, and hashtag campaigns",
                "Monthly engagement & compliance reporting",
              ],
            },
            {
              title: "On-Ground IEC Activities",
              points: [
                "Street plays (Nukkad Natak) & public rallies",
                "School & college competitions (essays, debates, art)",
                "Wall paintings, hoardings & sanitation drives",
                "Workshops & training sessions for citizens and workers",
              ],
            },
            {
              title: "Branding & Communication Support",
              points: [
                "Creative content aligned with MoHUA toolkit",
                "Use of SBM logos, mascots & official hashtags",
                "Ward-level customized outreach material",
              ],
            },
            {
              title: "Monitoring & Reporting",
              points: [
                "Monthly impact assessment reports",
                "Swachh Survekshan toolkit compliance checklists",
                "Recommendations to improve ULB scores",
              ],
            },
          ].map((offering, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-700">
                {offering.title}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {offering.points.map((point, j) => (
                  <li key={j} className="flex gap-2 items-start">
                    <CheckCircle className="text-green-600 mt-1" size={18} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl text-[#294A63] font-bold mb-8">
          Why Choose Bizwoke Nova for IEC?
        </h2>
        <ul className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700">
          {[
            "Exclusive focus on ULBs & Government Projects",
            "Backed by NKTech’s infrastructure & manpower",
            "Proven expertise in Swachh Bharat & municipal IEC campaigns",
            "Digital + Physical approach for maximum citizen engagement",
            "Compliance with Swachh Survekshan 2025 Toolkit",
          ].map((point, i) => (
            <li
              key={i}
              className="flex items-center justify-center gap-3 font-medium"
            >
              <CheckCircle className="text-blue-600" size={22} /> {point}
            </li>
          ))}
        </ul>
      </section>

      {/* Calendar Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl text-[#294A63] font-bold text-center mb-8">
          Sample IEC Activities Calendar (ULB Campaign)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-left">
            <thead className="bg-[#294A63] text-white">
              <tr>
                <th className="px-4 py-2">Month</th>
                <th className="px-4 py-2">Key Activity</th>
                <th className="px-4 py-2">Mode</th>
                <th className="px-4 py-2">Toolkit Alignment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Month 1", "Launch of Digital Campaign + Wall Paintings", "Online + Offline", "SS2025 Toolkit"],
                ["Month 2", "Nukkad Natak in Wards + School Competition", "Offline", "BCC, Citizen Participation"],
                ["Month 3", "Swachhata Pledge Campaign (Online + Ground)", "Both", "Citizen Mobilization"],
                ["Month 4", "Worker Training & Awareness Workshops", "Offline", "Capacity Building"],
                ["Month 5", "Mid-term Review + Report", "Online", "Toolkit Compliance"],
                ["Month 6", "City-Wide Mega Cleanliness Drive", "Both", "High Visibility"],
              ].map((row, i) => (
                <tr
                  key={i}
                  className="odd:bg-white even:bg-gray-50 border-t border-gray-200"
                >
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 text-center bg-[#294A63] text-white">
        <h2 className="text-3xl font-bold mb-6">
          Let’s Build a Cleaner, Smarter Bulandshahr (and Beyond) Together
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          With Bizwoke Nova’s IEC expertise, your ULB can create impactful
          campaigns that educate, engage, and empower citizens—ensuring better
          Swachh Survekshan 2025 rankings and sustainable cleanliness.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            📞 Contact Us Today
          </button>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
            📄 Download IEC Proposal
          </button>
        </div>
      </section>
    </div>
  );
}
