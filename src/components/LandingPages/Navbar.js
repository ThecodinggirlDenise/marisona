import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../../LanguageSwitcher";
import logo from "../../Logo/MarisonaLogo.png";
import { motion, useScroll } from "motion/react";

function Navbar() {
  const { t } = useTranslation();
  const [sidebar, setSidebar] = useState(false);
  const { scrollYProgress } = useScroll();
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }
  }, [sidebar]);

  return (
    <div className="bg-[#1f2f54] text-white py-5 px-6 sm:px-16 w-full flex items-center justify-between h-[90px] absolute top-0 left-0 right-0 z-50 shadow-md">
      <motion.div
        className="progress-bar top-0 left-0 right-0 fixed h-2 bg-[#57aef4]"
        style={{ scaleX: scrollYProgress }}
      />
      {/* Left Section - Logo */}
      <div className="flex items-center mr-auto">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className=" logo h-[50px] pt-2 transition-transform duration-300 ease-in-out hover:scale-110 hide-logo:hidden" // Apply custom class here
          />
        </a>
      </div>

      {/* Center Section - Nav Items for Medium and Larger Screens */}
      <div className="hidden md:flex gap-5 items-center font-bold flex-1 justify-center">
        <Link
          to="/our-story"
          className="text-white text-sm hover:font-extrabold hover:text-[#b0c8e7]"
        >
          {t("Our Story")}
        </Link>
        <Link
          to="/how-it-works"
          className="text-white text-sm hover:font-extrabold hover:text-[#b0c8e7]"
        >
          {t("How It Works")}
        </Link>
        <Link
          to="/products"
          className="text-white text-sm hover:font-extrabold hover:text-[#b0c8e7]"
        >
          {t("Products")}
        </Link>
        <Link
          to="/contact"
          className="text-white text-sm hover:font-extrabold hover:text-[#b0c8e7]"
        >
          {t("Contact")}
        </Link>
        <Link
          to="/fqa"
          className="text-white text-sm hover:font-extrabold hover:text-[#b0c8e7]"
        >
          {t("FQA")}
        </Link>
        <Link
          to="/blog"
          className="text-white text-sm hover:font-extrabold hover:text-[#b0c8e7]"
        >
          {t("Blog")}
        </Link>
        <LanguageSwitcher />
      </div>

      {/* Right Section - Hamburger Menu for Small Screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          <i className="fas fa-bars"></i>{" "}
          {/* Replace with your preferred icon library */}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {sidebar && (
        <div className="fixed inset-0 z-50 flex flex-col items-center bg-white h-[350px] overflow-y-auto shadow-lg transition-transform duration-300 ease-in-out">
          {/* Close Button */}
          <div className="flex justify-between items-center p-3 bg-[#1f2f54] w-full">
            <img src={logo} alt="Logo" className="h-[40px]" />
            <button
              onClick={toggleSidebar}
              className="text-white text-2xl focus:outline-none"
            >
              <i className="fas fa-times"></i>{" "}
              {/* Replace with your preferred icon library */}
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center justify-start w-full pt-4 pb-2 space-y-2">
            <Link
              to="/our-story"
              onClick={toggleSidebar}
              className="text-[#1f2f54] text-lg font-semibold hover:text-gray-700"
            >
              {t("Our Story")}
            </Link>
            <Link
              to="/how-it-works"
              onClick={toggleSidebar}
              className="text-[#1f2f54] text-lg font-semibold hover:text-gray-700"
            >
              {t("How It Works")}
            </Link>
            <Link
              to="/products"
              onClick={toggleSidebar}
              className="text-[#1f2f54] text-lg font-semibold hover:text-gray-700"
            >
              {t("Products")}
            </Link>
            <Link
              to="/contact"
              onClick={toggleSidebar}
              className="text-[#1f2f54] text-lg font-semibold hover:text-gray-700"
            >
              {t("Contact")}
            </Link>
            <Link
              to="/fqa"
              onClick={toggleSidebar}
              className="text-[#1f2f54] text-lg font-semibold hover:text-gray-700"
            >
              {t("FQA")}
            </Link>
            <Link
              to="/blog"
              onClick={toggleSidebar}
              className="text-[#1f2f54] text-lg font-semibold hover:text-gray-700"
            >
              {t("Blog")}
            </Link>

            {/* Language Switcher */}
            <div className="mt-4 text-[#1f2f54] font-semibold text-lg sm:text-white ">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
