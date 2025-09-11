import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// 🔹 Reusable Section Heading Component
const SectionHeading = ({ children }) => (
  <div className="flex items-center justify-center gap-4 mb-12 px-2">
    <div className="flex-1 border-t border-gray-400"></div> {/* Left line */}
    <h2 className="text-2xl sm:text-3xl text-[#294A63] font-bold text-center leading-snug">
      {children}
    </h2>
    <div className="flex-1 border-t border-gray-400"></div> {/* Right line */}
  </div>
);


// 🔹 Reusable Card Component
const Card = ({ title, points, isBig }) => (
  <div
    className={`bg-white ${isBig ? "p-8" : "p-6"} rounded-xl shadow-xl hover:shadow-md transition ${
      isBig ? "md:col-span-2" : ""
    }`}
  >
    <h3
      className={`${
        isBig ? "text-2xl" : "text-xl"
      } font-semibold mb-6 text-blue-700 text-center`}
    >
      {title}
    </h3>
    <div className="flex justify-center">
      <ul className="space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl w-full">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className="text-green-600 w-[22px] h-[22px] flex-shrink-0 mt-[2px]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function IECServices() {
  const offerings = [
    {
      title: "IPC (Interpersonal Communication)",
      points: [
        "Interpersonal Communication (IPC) is the most powerful tool under the Swachh Bharat Mission for driving lasting behavior change. It focuses on direct, face-to-face engagement with citizens through activities like Mohalla meetings, RWA sessions, Safaimitra interactions, school programs, and door-to-door campaigns. IPC ensures that every household understands the importance of segregating wet and dry waste, reducing plastic use, and adopting 3R practices (Reduce, Reuse, Recycle). At Bizwoke, we design cost-effective IPC models that combine community participation and volunteer engagement, ensuring maximum impact while complying with SBM Toolkit norms. IPC is where awareness becomes action.",
      ],
      isBig: true,
    },
    {
      title: "Mid Media",
      points: [
        "Street plays & roadshows",
        "Wall paintings & graffiti art",
        "IEC kiosks & Waste-to-Wonder park activities",
        "Exhibitions & competitions",
      ],
    },
    {
      title: "Mass Media",
      points: ["FM radio jingles", "Newspaper ads & articles", "Local cable TV coverage"],
    },
    {
      title: "Social Media",
      points: ["WhatsApp campaigns", "Short reels & posters", "Swachhata challenges (#MyCleanWard, #SwachhBulandshahr)"],
    },
    {
      title: "Strategic Partnerships",
      points: ["CSR tie-ups for merchandise (jute bags, bins, caps, umbrellas)", "Local NGOs, NCC/NSS, and industry collaborations"],
    },
  ];

  const iecFeatures = [
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
  ];

  const whyChooseUs = [
    "Exclusive focus on ULBs & Government Projects",
    "Backed by NKTech’s infrastructure & manpower",
    "Proven expertise in Swachh Bharat & municipal IEC campaigns",
    "Digital + Physical approach for maximum citizen engagement",
    "Compliance with Swachh Survekshan 2025 Toolkit",
  ];

  const calendar = [
    ["Month 1", "Launch of Digital Campaign + Wall Paintings", "Online + Offline", "SS2025 Toolkit"],
    ["Month 2", "Nukkad Natak in Wards + School Competition", "Offline", "BCC, Citizen Participation"],
    ["Month 3", "Swachhata Pledge Campaign (Online + Ground)", "Both", "Citizen Mobilization"],
    ["Month 4", "Worker Training & Awareness Workshops", "Offline", "Capacity Building"],
    ["Month 5", "Mid-term Review + Report", "Online", "Toolkit Compliance"],
    ["Month 6", "City-Wide Mega Cleanliness Drive", "Both", "High Visibility"],
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[#294A63] text-white text-center py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6"
          >
            Empowering ULBs with Impactful IEC Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl mb-8"
          >
            Driving awareness, participation, and behavioral change through
            digital + on-ground IEC campaigns aligned with Swachh Bharat Mission
            (Urban) and Swachh Survekshan 2025 Toolkit.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.5 }}
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              🚀 Partner with Us
            </motion.button>
            <motion.button
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              📄 Request a Proposal
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 text-center bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>About Our IEC Services</SectionHeading>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify sm:text-center">
            At Bizwoke Nova, we specialize in delivering Information, Education,
            and Communication (IEC) services tailored for Urban Local Bodies
            (ULBs). Our goal is to help municipalities inform citizens, engage
            communities, and create lasting behavioral change in line with Swachh
            Bharat Mission guidelines.
            <br /><br />
            By combining digital outreach and grassroots campaigns, we enable ULBs
            to increase public participation, boost Swachh Survekshan scores, and
            build cleaner, healthier cities.
          </p>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <SectionHeading>Our Offerings</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((offering, i) => (
            <Card key={i} {...offering} />
          ))}
        </div>
      </section>

      {/* IEC Features */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <SectionHeading>Our IEC Features for ULBs</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {iecFeatures.map((feature, i) => (
            <Card key={i} title={feature.title} points={feature.points} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 text-center bg-gray-50">
        <SectionHeading>Why Choose Bizwoke Nova for IEC?</SectionHeading>
        <ul className="max-w-2xl mx-auto space-y-4 text-base sm:text-lg text-gray-700 text-left leading-relaxed">
          {whyChooseUs.map((point, i) => (
            <li key={i} className="flex items-start gap-3 font-medium">
              <CheckCircle className="text-blue-600 w-[22px] h-[22px] flex-shrink-0 mt-[2px]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Calendar Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <SectionHeading>
          <span className="block text-center leading-snug">
            Sample IEC Activities Calendar <br className="md:hidden" /> (ULB Campaign)
          </span>
        </SectionHeading>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-left text-sm md:text-base">
            <thead className="bg-[#294A63] text-white">
              <tr>
                <th className="px-4 py-2">Month</th>
                <th className="px-4 py-2">Key Activity</th>
                <th className="px-4 py-2">Mode</th>
                <th className="px-4 py-2">Toolkit Alignment</th>
              </tr>
            </thead>
            <tbody>
              {calendar.map((row, i) => (
                <tr key={i} className="odd:bg-white even:bg-gray-50 border-t border-gray-200">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="block md:hidden space-y-4">
          {calendar.map((row, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm text-sm">
              <p><span className="font-semibold text-[#294A63]">Month:</span> {row[0]}</p>
              <p><span className="font-semibold text-[#294A63]">Key Activity:</span> {row[1]}</p>
              <p><span className="font-semibold text-[#294A63]">Mode:</span> {row[2]}</p>
              <p><span className="font-semibold text-[#294A63]">Toolkit Alignment:</span> {row[3]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 text-center bg-[#294A63] text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Let’s Build a Cleaner, Smarter Bulandshahr (and Beyond) Together
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
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
