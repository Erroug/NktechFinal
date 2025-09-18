import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/AboutUs.jsx";
import Services from "./pages/services/Services.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import ServicesSection from "./components/ServicesSection .jsx";

// Digital Marketing Pages
import DigitalMarketing from "./pages/services/DigitalMarketing/DigitalMarketing.jsx";
import AEOServices from "./pages/services/DigitalMarketing/AEOServices.jsx";
import SeoServices from "./pages/services/DigitalMarketing/SEOservices.jsx";
import ORMServices from "./pages/services/DigitalMarketing/ORMServices.jsx";
import SMMServices from "./pages/services/DigitalMarketing/SMMServices.jsx";
import SMOServices from "./pages/services/DigitalMarketing/SMOServices.jsx";
import PPCServices from "./pages/services/DigitalMarketing/PPCServices.jsx";
import VSOServices from "./pages/services/DigitalMarketing/VSOServices.jsx";

// Web Development
import WebDevelopment from "./pages/services/WebDevopment/WEbDevelopment.jsx";
import WebDesigning from "./pages/services/WebDevopment/WebDesigning.jsx";
import WebMaintanence from "./pages/services/WebDevopment/WebMaintenance.jsx";
import WebDeveloping from "./pages/services/WebDevopment/webDeveloping.jsx";

// Other Services
import IECServices from "./pages/services/IECServices.jsx";
import MobileDevelopment from "./pages/services/MobileDeveloment.jsx";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment.jsx";
import ContentWriting from "./pages/services/ContentWriting.jsx";
import GraphicDesigning from "./pages/services/GraphicDesigning.jsx";
import PoliticalCampaignManagement from "./pages/services/PoliticalCampaignManagement.jsx";
import SoftwareAndApps from "./pages/SoftwareApps.jsx";

// portfolio
import Portfolio from "./pages/portfolio/Portfolio.jsx";

// Contact Subpages
import ContactUs from "./pages/contacts/ContactUs.jsx";
import NoidaContact from "./pages/contacts/NoidaContact.jsx";
import GurugramContact from "./pages/contacts/GurugramContact.jsx";
import AustraliaContact from "./pages/contacts/AustraliaContacts.jsx";

import Cart from "./pages/Cart.jsx";

// ✅ import the ScrollToTop helper
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />   {/* ✅ added here */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}>
          <Route path="digitalmarketing/:key" element={<ServicesSection />} />

          {/* Digital Marketing */}
          <Route path="digitalmarketing" element={<DigitalMarketing />} />
          <Route path="digitalmarketing/aeoservices" element={<AEOServices />} />
          <Route path="digitalmarketing/seoservices" element={<SeoServices />} />
          <Route path="digitalmarketing/ormservices" element={<ORMServices />} />
          <Route path="digitalmarketing/smmservices" element={<SMMServices />} />
          <Route path="digitalmarketing/smoservices" element={<SMOServices />} />
          <Route path="digitalmarketing/ppcservices" element={<PPCServices />} />
          <Route path="digitalmarketing/vsoservices" element={<VSOServices />} />

          {/* Web Development */}
          <Route path="webdevelopment" element={<WebDevelopment />} />
          <Route path="webdevelopment/webdesigning" element={<WebDesigning />} />
          <Route path="webdevelopment/webmaintanence" element={<WebMaintanence />} />
          <Route path="webdevelopment/webdeveloping" element={<WebDeveloping />} />

          {/* Other Services */}
          <Route path="IECServices" element={<IECServices/>}/>
          <Route path="mobiledevelopment" element={<MobileDevelopment />} />
          <Route path="softwaredevelopment" element={<SoftwareDevelopment />} />
          <Route path="contentwriting" element={<ContentWriting />} />
          <Route path="graphicdesign" element={<GraphicDesigning />} />
          <Route path="politicalcampaignmanagement" element={<PoliticalCampaignManagement />} />
        </Route>

        <Route path="/portfolio" element={<Portfolio />} />

        {/* Contact Pages */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact/noida" element={<NoidaContact />} />
        <Route path="/contact/gurugram" element={<GurugramContact />} />
        <Route path="/contact/australia" element={<AustraliaContact />} />

        {/*software and apps*/}
        <Route path="/softwareandapps" element={<SoftwareAndApps />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* ✅ Always visible footer */}
      <Footer />
    </>
  );
}

export default App;
