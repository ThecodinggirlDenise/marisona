/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/LandingPages/Footer';
function HowItWorks() {
  const { t } = useTranslation();

  return (
    <div className="how-it-works-container flex flex-col items-center w-full mx-auto  ">
      <section className="section-one-howitworks  flex items-center mb-20 relative h-96 rounded-3xl max-w-7xl mt-12 b">
        
      <div className="text-overlay-box absolute rounded-lg bg-slate-300 p-8 w-[30rem] z-10 ml-60 mt-[26REM]  font-semibold text-black text-2xl h-auto shadow-lg">
    <h2 className="text-4xl">{t('HITW1H')}</h2>
    <p className="text-m mt-4">{t('HITW2P')}</p>
  </div>   
        <img 
  src="/images/boat.jpg" 
  alt="Boat Image" 
  className="float-right ml-[38rem] mt-96 w-[60%] h-auto rounded-2xl mr-4 shadow-md" 
/>
      </section>

      <section className="flex flex-col  m-[39rem] pb-8 pt-20 bg-blue-50 h-auto  items-center mb-20 rounded-3xl max-w-7xl">
    
          <img src="/images/underwater.png" alt="Underwater Image" className=" w-full  h-[600px] mt-12 " />
       <div className='flex flex-col items-center justify-center mt-20 mx-56'>
          <h2 className="text-4xl font-black text-black">{t('HITW2H')}</h2>

    <p className="text-sm mt-4 text-gray-500">{t('HITW3P')}</p>
  </div>  
      </section>

<section className="section-four-howitworks w-full ">
  <section 
    className="div-four w-full bg-cover bg-center bg-no-repeat py-20 flex flex-col items-center justify-center" 
    style={{ backgroundImage: "url('/images/main13.png')" }}>
    
    <h2 className="text-4xl font-extrabold text-black mb-10 ">{t('H1H')}</h2>
    
    <div className="feature-cards grid grid-cols-1 md:grid-cols-2 gap-16  rounded-[8rem]">
      <div className="feature-card bg-white p-6 rounded-xl shadow-xl flex flex-col ">
        <img src="/images/reducespeed.png" className="w-[6rem] h-[6rem] mb-5" alt="Reduce Speed Icon" />
        <h3 className="text-2xl font-bold mb-3 text-gray-600">{t('HITW4H')}</h3>
        <p className="text-gray-600 w-[37rem]">{t('H4P')}</p>
      </div>
      
      <div className="feature-card bg-white p-6 rounded-xl shadow-xl flex flex-col ">
        <img src="/images/increasedFuel.png" className="w-[6rem] h-[6rem] mb-5" alt="Increased Fuel Usage Icon" />
        <h3 className="text-2xl font-bold mb-3 text-gray-600">{t('H6H')}</h3>
        <p className="text-gray-600 w-[37rem]">{t('H6P')}</p>
      </div>
      
      <div className="feature-card bg-white p-6 rounded-xl shadow-xl flex flex-col  ">
        <img src="/images/decreasedManeruverability.png" className="w-[6rem] h-[6rem] mb-5" alt="Decreased Maneuverability Icon" />
        <h3 className="text-2xl font-bold mb-3 text-gray-600">{t('HITW5H')}</h3>
        <p className="text-gray-600 w-[37rem]">{t('H5P')}</p>
      </div>
      
      <div className="feature-card bg-white p-6 rounded-xl shadow-xl flex flex-col ">
        <img src="/images/maintance.png" className="w-[6rem] h-[6rem] mb-5" alt="More Frequent Maintenance Icon" />
        <h3 className="text-2xl font-bold mb-3 text-gray-600">{t('H7H')}</h3>
        <p className="text-gray-600 w-[37rem]">{t('H7P')}</p>
      </div>
    </div>
  </section>
  <section className="section-three-howitworks flex items-center pb-10 relative h-auto rounded-2xl max-w-7xl mx-auto mt-[14rem]">
  <img src="/images/solution.png" alt="Solution Image" className="image-left w-[60%] h-auto rounded-2xl shadow-lg" />
  
  <div className="text-content-OS pb-40  ml-[13rem]">
    <h2 className="text-3xl font-extrabold text-black">{t('OS')}</h2>
    <p className="text-gray-600 mt-4 w-[38.5rem]">{t('OSP')}</p>
  </div>
</section>

<section className=" text-center p-8 font-montserrat">
        <div className="mb-8  flex items-center justify-center">
          <h2 className="text-5xl font-extrabold  text-gray-800 w-[500px] mb-20">
            {t('LHB')}
          </h2>
        </div>
        <div className="flex items-center justify-center gap-6 h-[700px]">
          <div className='flex flex-col items-center gap-6 justify-end h-full'>
          <div className="flex flex-col items-center justify-center w-[388px] h-[282px] bg-white rounded-[30px] shadow-md p-6">
            <img src="/images/enviromentally friendly.png" alt="Environmental Friendly" className="w-[90px] h-[90px] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Environmental Friendly</h3>
            <p className="text-gray-600 text-lg">Protects ships, preserves seas; harmless to marine life.</p>
          </div>
          <div className=" flex flex-col items-center justify-center  w-[388px] h-[282px] bg-white rounded-[30px] shadow-md p-6 ">
            <img src="/images/EasytoInstall.png" alt="Easy to Install" className="w-[90px] h-[90px] mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Easy to Install</h3>
            <p className="text-gray-600 text-lg">Proficient Teams, Quick Install: Optimal Use in Half a Day!</p>
          </div>
          </div>
          <div className='flex flex-col items-center  gap-6 justify-start h-full'>
          <div className=" flex flex-col items-center justify-center  w-[388px] h-[282px] bg-white rounded-[30px] shadow-md p-6">
            <img src="/images/IncreasedPerf.png" alt="Increased Performance" className="w-[90px] h-[90px] mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Increased Performance</h3>
            <p className="text-gray-600 text-lg">Enhanced Capacity to Sustain Speed and Optimize Boat Performance.</p>
          </div>
          <div className=" flex flex-col items-center justify-center  w-[388px] h-[282px] bg-white rounded-[30px] shadow-md p-6">
            <img src="/images/ReducedCost.png" alt="Reduced Cost" className="w-[90px] h-[90px] mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Reduced Costs</h3>
            <p className="text-gray-600 text-lg">Conserves fuel, extends maintenance, lowers costs.</p>
          </div>
          </div>
          <div className='flex flex-col items-center justify-end gap-6 h-full'>
          <div className=" flex flex-col items-center justify-center  w-[388px] h-[282px] bg-white rounded-[30px] shadow-md p-6">
            <img src="/images/noMoreHaul.png" alt="No More Haul" className="w-[90px] h-[90px] mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">No More Haul for Cleaning</h3>
            <p className="text-gray-600 text-lg">Prolongs the Maintenance Interval.</p>
          </div>
          <div className=" flex flex-col items-center justify-center  w-[388px] h-[282px] bg-white rounded-[30px] shadow-md p-6">
            <img src="/images/IncreasedLeisureTime.png" alt="Increased Leisure" className="w-[90px] h-[90px] mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Increased Leisure Time</h3>
            <p className="text-gray-600 text-lg">Efficient and seamless ride on the water.</p>
          </div>
        </div>
        </div>
      </section>

</section>



    </div>
  );
}

export default HowItWorks;
