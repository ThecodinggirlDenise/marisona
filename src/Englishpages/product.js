/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export default function Product() {
  return (
    <>
  <section>
  <div className='flex justify-center shadow-lg w-[1000px] ml-[37rem] mt-17 rounded-[7rem] '>

<div className='flex flex-col font-montserrat mt-64 font-extrabold text-blue-950 text-5xl ml-10 '>
  <h2>
  We can provide tailored solutions for your vessel.
  </h2>
  <p className='mt-6 text-md'>
  Explore our wide range of services.
  </p>
  <button className=" text-[2.05rem] flex items-center w-72 bg-blue-950 text-white px-6 py-3 mt-6 rounded-3xl font-semibold hover:bg-blue-800 transition-colors">
              Get a Quote
              <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
            </button>
</div>
<img src='/images/main2.png' className='w-[500px] mt-[90px]'/>
    </div>
  </section>
  <section className='w-full flex justify-center items-center mt-36 font-montserrat'>
  <div className='flex items-center justify-center gap-5'>
      <img src='/images/prooducts1.jpg'className='w-[43rem] ml-[10rem] rounded-2xl h-[48rem]'/>
      <div className='flex flex-col gap-5'>
        <h2 className='text-5xl w-[28rem] text-blue-950 font-extrabold '>
        Going Green on the Waves: Embrace Environmentally Friendly Boating Solutions
        </h2>
        <div className='w-6 '></div>
        <h4 className='text-2xl font-extrabold text-slate-950 w-[39rem]'>Biocide Use in Marine Coatings Faces Growing Regulations</h4>
        <p className='text-2xl text-black w-[36rem]'>
        Authorities worldwide are increasingly imposing restrictions and bans on biocide use in marine coatings to protect marine life and human health.
        </p>
      </div>
    </div>
  </section>
  <section className='w-full flex justify-center items-center mt-36 font-montserrat'>
  <div className='flex items-center justify-center'>
    <div className='flex flex-col gap-8'>
      <h2 className='text-5xl w-[28rem] text-blue-950 font-extrabold'>
        Green Waves Ahead: Marisonia's Eco-friendly Solution
      </h2>

      {/* First Divider Line */}
      <hr className="border-t border-gray-300 w-full" />

      <h4 className='text-2xl font-extrabold text-slate-950 w-[39rem]'>Invasive Non-Native Species Threat</h4>
      <p className='text-2xl text-black w-[36rem]'>
        Authorities worldwide are increasingly imposing restrictions and bans on biocide use in marine coatings to protect marine life and human health.
      </p>

      {/* Second Divider Line */}
      <hr className="border-t border-gray-300 w-full" />

      <h4 className='text-2xl font-extrabold text-slate-950 w-[39rem]'>Safe Ultrasonic Antifouling</h4>
      <p className='text-2xl text-black w-[36rem]'>
        Authorities worldwide are increasingly imposing restrictions and bans on biocide use in marine coatings to protect marine life and human health.
      </p>
      
      <button className="bg-blue-950 text-white rounded-lg py-2 px-5 w-64 font-semibold mt-4 hover:bg-blue-800 transition">
        Get a Quote
        <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
      </button>
    </div>

    {/* Image Section */}
    <img src='/images/Products2.PNG' className='w-[43rem] ml-4 rounded-2xl h-[48rem]' />
  </div>
</section>
<section class="max-w-4xl mx-auto mt-16 p-6 font-montserrat ml-[35rem]">
  <h2 class="text-3xl font-extrabold text-blue-950 mb-8">
    Technical<span class="text-slate-400">Specifications</span>
  </h2>
  <div class="space-y-8">
    <div class="border-b border-slate-300 pb-4">
      <h3 class="text-lg font-semibold text-blue-950">
        Components of the Marisonia Anti-Fouling System
      </h3>
      <p class="text-base text-gray-700 mt-2">
        The Marisonia anti-fouling system consists of a control box, transducers, and cabling. The number of transducers to be used may vary depending on the length of the vessel.
      </p>
    </div>

    <div class="border-b border-slate-300 pb-4">
      <h3 class="text-lg font-semibold text-blue-950">
        Ultrasonic Frequency Scanning Range
      </h3>
      <p class="text-base text-gray-700 mt-2">
        Marisonia conducts ultrasonic frequency scanning on the transducers within the range of 20-60 kHz.
      </p>
    </div>

    <div class="border-b border-slate-300 pb-4">
      <h3 class="text-lg font-semibold text-blue-950">
        Power Supply Specifications and Protection
      </h3>
      <p class="text-base text-gray-700 mt-2">
        The product can operate with 12/24V power supply. In the event of reverse voltage, the product remains undamaged. It is equipped with a replaceable fuse for short-circuit protection.
      </p>
    </div>

    <div class="border-b border-slate-300 pb-4">
      <h3 class="text-lg font-semibold text-blue-950">
        Energy Consumption and Maximum Power Usage
      </h3>
      <p class="text-base text-gray-700 mt-2">
        On average, the product consumes 6W.
      </p>
    </div>

    <div class="border-b border-slate-300 pb-4">
      <h3 class="text-lg font-semibold text-blue-950">
        LED Indicators for Operational Status
      </h3>
      <p class="text-base text-gray-700 mt-2">
        Marisonia features Power and Info LEDs. The Power LED illuminates in green when the DC-DC converter on the card produces an output. The Info LED flashes in red at different intervals to indicate the connection status of the transducers.
      </p>
    </div>

    <div class="border-b border-slate-300 pb-4">
      <h3 class="text-lg font-semibold text-blue-950">
        Device Size
      </h3>
      <p class="text-base text-gray-700 mt-2">
        Marisonia's control box weighs 800 grams and measures 20x16x6 cm. Each transducer mounted on the boat hull weighs 430 grams and has dimensions of 6x8 cm.
      </p>
    </div>
  </div>
</section>

    </>
  );
}
