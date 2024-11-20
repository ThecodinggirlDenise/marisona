import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./Englishpages/blog";
import UltrasonicAntiFouling from "./Englishpages/UltrasonicAntiFouling";
import MarineBiofouling from "./Englishpages/MarineBiofouling";
import Main from "./components/LandingPages/Main";
import Navbar from "../src/components/LandingPages/Navbar";
import Footer from "./components/LandingPages/Footer";
import "./index.css";
import OurStory from "./Englishpages/ourstory";
import Product from "./Englishpages/product";
import ContactUs from "./Englishpages/contactus";
import HowItWorks from "./Englishpages/Howitworks";
import Accordion from "./Englishpages/fqa";
import PrivacyPolicy from "./Englishpages/PrivacyPolicy";
import "./global.css";
import "./i18n";
import Testimonials from "./components/LandingPages/Testimonials";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/our-story" element={<OurStory />} />{" "}
          {/* Update these paths as needed */}
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/fqa" element={<Accordion />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blogs/ultrasonic-antifouling-system"
            element={<UltrasonicAntiFouling />}
          />
          <Route
            path="/blogs/marine-biofouling"
            element={<MarineBiofouling />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<PrivacyPolicy />} />
          <Route path="/testimonials" element={<Testimonials />} />{" "}
          {/* Add this line */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
