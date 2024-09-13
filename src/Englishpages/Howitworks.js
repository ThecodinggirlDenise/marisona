/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/LandingPages/Footer';

function HowItWorks() {
  const { t } = useTranslation();

  return (
    <div className="how-it-works-container flex flex-col items-center w-full mx-auto mt-64">
      {/* Section One */}
      <section className="section-one-howitworks flex flex-col lg:flex-row items-center relative h-auto lg:h-96 rounded-3xl max-w-7xl mt-12 mb-64">
        <div className="text-overlay-box bg-slate-300 p-8 w-full lg:w-[30rem] z-10 lg:ml-60 mt-10 lg:mt-0  text-black text-2xl rounded-lg shadow-lg">
          <h2 className="text-3xl lg:text-4xl font-semibold">{t('HITW1H')}</h2>
          <p className="text-base mt-4 ">{t('HITW2P')}</p>
        </div>
        <img 
          src="/images/boat.jpg" 
          alt="Boat Image" 
          className="w-full lg:w-[50%] h-auto rounded-2xl mt-10 lg:mt-0 shadow-md" 
        />
      </section>

      {/* Section Two */}
      <section className="flex flex-col items-center bg-blue-50 py-8 lg:py-20 h-auto mb-20 rounded-3xl max-w-7xl mx-auto w-[58%]">
        <img 
          src="/images/underwater.png" 
          alt="Underwater Image" 
          className="w-full h-auto max-h-[600px] mt-12 rounded-2xl"
        />
        <div className='flex flex-col items-center justify-center mt-10 px-4 lg:px-16 text-center'>
          <h2 className="text-3xl lg:text-4xl font-black text-black">{t('HITW2H')}</h2>
          <p className="text-base lg:text-lg mt-4 text-gray-500">{t('HITW3P')}</p>
        </div>
      </section>

      {/* Section Three */}
      <section 
        className="section-four-howitworks w-full bg-cover bg-center bg-no-repeat py-20 flex flex-col items-center justify-center" 
        style={{ backgroundImage: "url('/images/main13.png')" }}
      >
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-10">{t('H1H')}</h2>
        <div className="feature-cards grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 rounded-[2rem] max-w-5xl">
          {/* Feature Card Components */}
          {[
            { img: "reducespeed.png", title: t('HITW4H'), text: t('H4P') },
            { img: "increasedFuel.png", title: t('H6H'), text: t('H6P') },
            { img: "decreasedManeruverability.png", title: t('HITW5H'), text: t('H5P') },
            { img: "maintance.png", title: t('H7H'), text: t('H7P') },
          ].map((feature, index) => (
            <div key={index} className="feature-card bg-white p-6 rounded-xl shadow-xl flex flex-col items-center text-center">
              <img src={`/images/${feature.img}`} className="w-16 h-16 mb-5" alt={`${feature.title} Icon`} />
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-600">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Four */}
      <section className="section-three-howitworks flex flex-col lg:flex-row items-center pb-10 relative h-auto rounded-2xl max-w-7xl mx-auto mt-20">
        <img 
          src="/images/solution.png" 
          alt="Solution Image" 
          className="w-full lg:w-[60%] h-auto rounded-2xl shadow-lg mb-10 lg:mb-0" 
        />
        <div className="text-content-OS lg:ml-10 px-4 lg:px-0 text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black">{t('OS')}</h2>
          <p className="text-gray-600 mt-4">{t('OSP')}</p>
        </div>
      </section>

      {/* Section Five */}
      <section className="text-center p-8 font-montserrat">
        <div className="mb-8 flex items-center justify-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 w-full lg:w-[500px] mb-10">
            {t('LHB')}
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 h-auto">
          {[
            { img: "enviromentally friendly.png", title: "Environmental Friendly", text: "Protects ships, preserves seas; harmless to marine life." },
            { img: "EasytoInstall.png", title: "Easy to Install", text: "Proficient Teams, Quick Install: Optimal Use in Half a Day!" },
            { img: "IncreasedPerf.png", title: "Increased Performance", text: "Enhanced Capacity to Sustain Speed and Optimize Boat Performance." },
            { img: "ReducedCost.png", title: "Reduced Costs", text: "Conserves fuel, extends maintenance, lowers costs." },
            { img: "noMoreHaul.png", title: "No More Haul for Cleaning", text: "Prolongs the Maintenance Interval." },
            { img: "IncreasedLeisureTime.png", title: "Increased Leisure Time", text: "Efficient and seamless ride on the water." },
          ].map((card, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-[300px] h-auto bg-white rounded-2xl shadow-md p-6 mb-6">
              <img src={`/images/${card.img}`} alt={card.title} className="w-[90px] h-[90px] mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-base">{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
