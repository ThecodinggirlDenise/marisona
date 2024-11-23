/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
function Product() {
  const { t } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Add this line
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Section 1 */}
      <section
        className={`relative flex flex-col md:flex-row  m-44 items-center w-full max-w-6xl bg-gray-100 shadow-md rounded-xl p-5 md:p-9 mx-auto mb-16 bg-cover bg-center h-auto ${
          isSidebarOpen ? "hidden" : ""
        }`}
        style={{
          backgroundImage: `url('/images/main3.jpg')`,
          borderRadius: 30,
        }}
      >
        {" "}
        {/* Hide when sidebar is open */}
        <div className="flex-1 p-5 text-left mr-0 md:mr-5">
          <div className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6  ">
            {t("PH1")}
          </div>
          <div className="text-lg text-gray-700 mb-5">{t("PH1P")}</div>
          <a href="/contact">
            <button className="text-lg lg:text-[1rem] flex items-center justify-center w-full lg:w-52 bg-blue-950 text-white px-6 py-3 mt-6 rounded-xl font-semibold hover:bg-blue-800 transition-colors">
              {t("GAQ")}
            </button>
          </a>
        </div>
        <img
          src={"/images/main2.png"}
          className=" max-w-lg rounded-lg  object-cover h-96 -mt-8"
          alt="Ultrasound System"
        />
      </section>
      {/* Section 2 */}
      <section className=" w-full flex flex-col lg:flex-row justify-center items-center mt-16 lg:mt-44 px-4 font-montserrat max-w-5xl">
        <div className="flex items-center justify-center gap-5 flex-col lg:flex-row">
          <img
            src="/images/prooducts1.jpg"
            className="w-full lg:w-[33rem] rounded-xl h-auto lg:h-[30rem] "
          />
          <div className="flex flex-col gap-5 text-center lg:text-left px-4 lg:px-18">
            <h2 className="text-3xl lg:text-4xl text-blue-950 font-extrabold">
              {t("PH2H")}
            </h2>
            <h4 className="text-xl lg:text-lg font-extrabold text-slate-950">
              {t("PH2SH")}
            </h4>
            <p className="text-base lg:text-lg text-black ">{t("PH2P")}</p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full flex flex-col lg:flex-row justify-center items-center mt-16 lg:mt-36 px-4 font-montserrat max-w-5xl gap-5">
        <div className="flex flex-col  w-full lg:w-1/2 gap-4">
          <h2 className="text-3xl lg:text-2xl text-blue-950 font-extrabold text-center lg:text-left">
            {t("PH3H")}
          </h2>

          {/* Divider Lines */}
          <hr className="border-t border-gray-300 w-full" />

          <h4 className="text-xl lg:text-xl font-extrabold text-slate-950">
            {t("PH3SH1")}
          </h4>
          <p className="text-base lg:text-xl text-black">{t("PH3P1")}</p>

          {/* Divider Lines */}
          <hr className="border-t border-gray-300 w-full" />

          <h4 className="text-xl lg:text-xl font-extrabold text-slate-950">
            {t("PH3SH2")}
          </h4>
          <p className="text-base lg:text-xl text-black">{t("PH3P2")}</p>
          <a href="/contact">
            <button className="bg-blue-950 text-white rounded-lg py-2 px-5 w-full lg:w-64 font-semibold mt-4 hover:bg-blue-800 transition">
              {t("GAQ")}
              <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="h-full w-full sm:w-1/2  border-black relative  ">
          <img
            src="/images/Products2.PNG"
            className="w-[24rem] lg:w-full mt-10 lg:mt-0 rounded-2xl h-auto lg:h-full  "
          />
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="max-w-4xl mx-auto mt-16 p-6 font-montserrat flex flex-col items-center justify-center">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-blue-950 mb-8">
          {t("Tech")} <span className="text-slate-400"> {t("Spec")}</span>
        </h2>
        <div className="space-y-8 w-full">
          {[
            {
              title: t("COMAST"),
              content: t("COMASTC"),
            },
            {
              title: t("PSSAP"),
              content: t("PSSAPC"),
            },
            {
              title: t("PSSAP"),
              content: t("PSSAPC1"),
            },
            {
              title: t("ECMPU"),
              content: t("ECMPUC"),
            },
            {
              title: t("LED"),
              content: t("LEDC"),
            },
            {
              title: t("DS"),
              content: t("DSC"),
            },
          ].map((item, index) => (
            <div key={index} className="border-b border-slate-300 pb-4">
              <h3 className="text-lg lg:text-sm font-semibold text-blue-950">
                {item.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-700 mt-2">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Details Section */}
      <div className="product-page-container flex flex-col lg:flex-row max-w-7xl mx-auto p-6">
        {/* Main Content */}
        <div className="main-content flex-1 pr-0 lg:pr-8">
          <h1 className="text-4xl lg:text-4xl font-bold mb-10 lg:mb-14 mt-10 lg:mt-16 text-black font-montserrat text-center lg:text-left">
            {t("PL")}
          </h1>
          <p className="text-gray-700 mb-4">{t("PL2")}</p>
          <p className="text-gray-700 mb-4">{t("PL3")}</p>

          {/* Images */}
          <div className="images mb-8">
            <img
              src="/images/Products-3.png"
              alt="Ultrasonic Transducer Image 1"
              className="w-full rounded-lg"
            />
          </div>

          {/* Warranty Section */}
          <h2 className="text-3xl lg:text-2xl font-bold mb-4 text-start text-black font-montserrat">
            {t("W")}
          </h2>
          <p className="text-gray-700 mb-2">{t("WP")}</p>
          <h3 className="text-lg lg:text-2xl font-semibold mb-2">{t("WIC")}</h3>
          <ul className="list-disc pl-5 text-slate-950 mb-8">
            {t("WICP")}
            <li>{t("WICP1")}</li>
            <li>{t("WICP2")}</li>
          </ul>
          <p className="text-slate-950 mt-4">{t("WICP3")}</p>
        </div>

        {/* Sidebar CTA Section */}
        <div className=" sticky top-[90px] cta-sidebar w-full lg:w-80 flex-shrink-0 bg-gray-100 p-6 rounded-lg shadow-md mt-10 lg:mt-0 lg:h-80">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-slate-950 font-montserrat text-center lg:text-left">
            {t("GASP")}
          </h2>
          <a href="/contact">
            <button className="bg-blue-950 text-white rounded-lg py-2 px-5 w-full lg:w-64 font-semibold mt-4 hover:bg-blue-800 transition">
              {t("GAQ")}
              <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Product;
