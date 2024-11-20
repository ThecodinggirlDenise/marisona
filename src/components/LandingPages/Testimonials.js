import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h1 className="text-sm md:text-base font-bold border border-solid border-gray-500 w-40 mx-auto rounded-md">
          {t("Testimonials")}
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mt-4">
          {t("Marisonia from Customer Perspective")}
        </h2>
      </div>
      <div className="flex justify-center mb-8">
        <a href="/contact">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">
            {t("Get a Quote")}
          </button>
        </a>
      </div>
      <div className="w-4/5 mx-auto">
        <Glider
          hasArrows
          hasDots
          slidesToShow={1}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 300,
                duration: 0.25,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                itemWidth: 250,
                duration: 0.25,
              },
            },
          ]}
        >
          <div className="p-5 bg-blue-50 rounded-xl shadow-lg mx-2">
            <img
              src="/images/card1.jpg"
              className="w-full h-auto rounded-lg"
              alt="Testimonial"
            />
            <p className="mt-4 text-gray-700">
              {t(
                "I have had Marisonia installed on my boat for almost a year now, and the difference is very clear compared to the boats moored next to me in Bitez. While mold and algae are visibly accumulating on the neighboring boats, my hull remains very clean."
              )}
            </p>
            <h5 className="mt-4 font-semibold text-blue-900">Ali K.</h5>
            <p className="text-gray-500">Beneteau Cyclades 41 ft. / Bodrum</p>
          </div>
          <div className="p-5 bg-blue-50 rounded-xl shadow-lg mx-2">
            <img
              src="/images/CARDTWO.jpg"
              className="w-full h-auto rounded-lg"
              alt="Testimonial"
            />
            <p className="mt-4 text-gray-700">
              {t(
                "I cleaned the bottom of my boat and applied antifouling paint. 2 months later, Marisonia was installed. When my boat was taken out of the water 6 months after that, the condition of the bottom was very impressive. I will continue this season without cleaning the bottom."
              )}
            </p>
            <h5 className="mt-4 font-semibold text-blue-900">Yelda C.</h5>
            <p className="text-gray-500">Sancak SVT 9.20 / İstanbul</p>
          </div>
          <div className="p-5 bg-blue-50 rounded-xl shadow-lg mx-2">
            <img
              src="/images/CARD3.jpg"
              className="w-full h-auto rounded-lg"
              alt="Testimonial"
            />
            <p className="mt-4 text-gray-700">
              {t(
                "My boat spent the winter in Büyükçekmece Marina, Istanbul. Marisonia has been active for a full year. The view captured by the marina diver was wonderful. Normally, algae reaching almost arm's length were not visible."
              )}
            </p>
            <h5 className="mt-4 font-semibold text-blue-900">METE K.</h5>
            <p className="text-gray-500">Hunter 33.5 / San Francisco</p>
          </div>
          <div className="p-5 bg-blue-50 rounded-xl shadow-lg mx-2">
            <img
              src="/images/Ëma Denizcilik.jpg"
              className="w-full h-auto rounded-lg"
              alt="Testimonial"
            />
            <p className="mt-4 text-gray-700">{t("D1")}</p>
            <h5 className="mt-4 font-semibold text-blue-900">Ema Denizcilik</h5>
          </div>
          <div className="p-5 bg-blue-50 rounded-xl shadow-lg mx-2">
            <img
              src="/images/anotolia yatch.jpg"
              className="w-full h-auto rounded-lg"
              alt="Testimonial"
            />
            <p className="mt-4 text-gray-700">{t("P1")}</p>
            <h5 className="mt-4 font-semibold text-blue-900">Anatoli Yacht</h5>
          </div>
          <div className="p-5 bg-blue-50 rounded-xl shadow-lg mx-2">
            <img
              src="/images/Tend Yacht.jpg"
              className="w-full h-auto rounded-lg"
              alt="Testimonial"
            />
            <p className="mt-4 text-gray-700">{t("C1")}</p>
            <h5 className="mt-4 font-semibold text-blue-900">TendR Yacht</h5>
          </div>
        </Glider>
      </div>
    </section>
  );
};

export default Testimonials;
