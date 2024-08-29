/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Testimonials from './Testimonials';

export default function Main() {
  
  const { t } = useTranslation();
  
  return (
    <header className="w-full h-full overflow-x-hidden"> {/* Add overflow-x-hidden */}

      {/* Section One */}
      <section className="relative flex items-center justify-center mb-7 h-screen">
        {/* Video Element */}
        <video
          src={"/video/marison.mp4"}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-start justify-center pl-4 md:pl-16 text-white z-30" style={{maxWidth: '50%'}}> {/* Adjust width and removed large margin */}
          <div className="font-montserrat font-black text-4xl md:text-5xl" style={{ color: "#c3ecf7" }}>
            {t('Enhance Your Boating Experience')}
          </div>
          <div className="text-lg md:text-xl mt-2">
            {t('Ultrasonic Anti-Fouling System')}
          </div>
          <div className="text-sm md:text-lg mt-2">
            {t('Efficient and seamless ride on the water; conserves fuel, extends maintenance interval')}
          </div>
          <a href="/contact">
            <button className="bg-white text-black rounded-lg py-4 px-6 text-base font-semibold mt-5 transform transition-transform duration-300 hover:scale-105">
              {t('Start Smooth Sailing')}
            </button>
          </a>
        </div>
      </section>
      
      {/* Section Two */}
      <section className="relative flex flex-row items-center w-full max-w-6xl bg-gray-100 shadow-md rounded-xl p-9 mx-auto mb-16 bg-cover bg-center h-auto m-8" style={{ backgroundImage: `url('/images/main3.jpg')`, borderRadius:30 }}> {/* Adjusted max-width and removed large margin */}
        <div className="flex-1 p-5 text-left mr-5">
          <div className="text-3xl md:text-6xl font-extrabold text-blue-900 mb-6">
            {t('Ultrasonic Anti-Fouling System')}
          </div>
          <div className="text-lg text-gray-700 mb-5">
            {t('M1H')}
          </div>
          <a href='our-story'>
            <button className="bg-white text-blue-900 border-2 border-blue-900 rounded-lg py-2 px-5 font-semibold transform transition-transform duration-300 hover:scale-105 hover:bg-blue-900 hover:text-white">
              {t('Learn More')}
            </button>
          </a>
        </div>
        <img src={"/images/main2.png"} className="flex-1 max-w-lg rounded-lg" alt="Ultrasound System" />
      </section>

      {/* Section Three */}
      <section className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto rounded-lg p-10 mt-20 mb-40 h-auto relative"> {/* Adjusted layout for smaller screens */}
        <img src={"/images/main4.png"} className="w-full lg:max-w-2xl lg:ml-[-5rem] rounded-3xl" alt="Boat System" />
        <div className="flex-1 p-7 mt-10 lg:mt-0 lg:mr-[-10rem]">
          <h2 className="text-4xl font-black text-gray-900">
            {t("Marisonia: The Shield Your Boat Deserves")}
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            {t('MS5')}
          </p>
          <p className="text-lg text-gray-700 mb-10 w-full lg:w-[80%]">
            {t('MS5-2')}
          </p>
          <a href='/how-it-works'>
            <button className="bg-white text-gray-900 border-2 border-gray-900 rounded-lg py-3 px-8 font-bold transform transition-transform duration-300 hover:scale-105 hover:bg-gray-900 hover:text-white">
              {t('How it Works')}
            </button>
          </a>
        </div>
      </section>

      {/* Section Four */}
      <section className="text-center max-w-6xl mx-auto mb-40 bg-cyan-50 rounded-xl py-16 h-auto"> {/* Adjusted padding and height */}
        <h1 className="text-4xl font-black text-gray-900 mb-12">
          {t("MS4")}
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          {t('MS6')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
          <div className="text-center">
            <div className="p-2">
              <img src={"/images/eco-friendly.png"} className="mx-auto mb-2 w-1/4 md:w-1/12" alt="Eco-Friendly Icon" /> {/* Adjusted width */}
              <h5 className="font-black text-gray-900 mb-2">
                {t('Eco-Friendly')}
              </h5>
              <p className="text-lg text-gray-700">
                {t('MS7')}
              </p>
            </div>
            <div className="p-2 mt-10 md:mt-36">
              <img src={"/images/reduceMan.png"} className="mx-auto mb-7 w-1/4 md:w-1/12" alt="Reduce Maintenance Icon" /> {/* Adjusted width */}
              <h5 className="font-black text-gray-900 mb-2">
                {t('Reduce Maintenance')}
              </h5>
              <p className="text-lg text-gray-700">
                {t('MS8')}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={"/images/main5.png"} className="rounded-lg w-full md:w-96 mt-10 md:mt-36" alt="Main Feature" /> {/* Adjusted width and margin */}
          </div>
          <div className="text-center">
            <div className="p-2">
              <img src={"/images/main-Fuel.png"} className="mx-auto mb-4 w-1/4 md:w-1/12" alt="Fuel Consumption Icon" /> {/* Adjusted width */}
              <h5 className="font-black text-gray-900 mb-4 mt-3">
                {t('Fuel Consumption')}
              </h5>
              <p className="text-lg text-gray-700 mb-10 md:mb-44">
                {t('Reduces fuel consumption by up to 30%. Prevents the increase of friction force on the boat by preventing marine organisms from adhering to the boat hull and gear.')}
              </p>
            </div>
            <div className="p-2 mt-10">
              <img src={"/images/settings.png"} className="mx-auto mb-4 w-1/4 md:w-1/12" alt="Easy to Install Icon" /> {/* Adjusted width */}
              <h5 className="font-black text-gray-900 mb-4 mt-3">
                {t('MS9')}
              </h5>
              <p className="text-lg text-gray-700">
                {t('MS10')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials/>
   
      {/* Section Six */}
      <section className="w-full h-full py-16">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="flex-1 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold text-blue-900 mb-10">
              {t('We\'re a professional team offering')}
            </h1>
            <div className="space-y-5">
              <div className="flex items-start space-x-5">
                <img src={"/images/warranty.png"} alt="Rapid Response Guarantee" className="w-10 h-10 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold">
                    {t('Rapid Response Guarantee')}
                  </h3>
                  <p className="text-lg text-gray-700">
                    {t('We pride ourselves on swift response times, ensuring you get the anti-fouling protection you need without delay.')}
                  </p>
                </div>
              </div>
              <div className="h-px bg-gray-300 w-full"></div>
              <div className="flex items-start space-x-5">
                <img src={"/images/madetomeasure.png"} alt="Made-to-Measure Solutions" className="w-10 h-10 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold">
                    {t('Made-to-Measure Solutions')}
                  </h3>
                  <p className="text-lg text-gray-700">
                    {t('Doubles the time to haul out your boat, allowing you to have more time to enjoy your boat.')}
                  </p>
                </div>
              </div>
              <div className="h-px bg-gray-300 w-full"></div>
              <div className="flex items-start space-x-5">
                <img src={"/images/directpersonalizedsupport.png"} alt="Direct, Personalized Support" className="w-10 h-10 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold">
                    {t('Direct, Personalized Support')}
                  </h3>
                  <p className="text-lg text-gray-700">
                    {t('Experience one-on-one attention from our team, dedicated to meeting your specific requirements.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src={"/images/main8.png"} className="w-full md:max-w-lg rounded-lg shadow-md object-cover" alt="Support Team" /> {/* Adjusted width */}
        </div>
      </section>

    </header>
  );
}
