/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export default function Product() {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      {/* Section 1 */}
      <section className='w-4/5 px-4 flex items-center justify-center mt-5 sm:mt-24'>
        <div className='flex flex-col lg:flex-row justify-center shadow-lg w-full lg:w-[1000px] mt-10 rounded-[2rem] lg:rounded-[7rem] overflow-hidden'>
          <div className='flex flex-col font-montserrat p-6 lg:mt-32 lg:ml-10 text-center lg:text-left'>
            <h2 className='font-extrabold text-blue-950 text-2xl lg:text-3xl mt-24'>
              We can provide tailored solutions for your vessel.
            </h2>
            <p className='mt-4 lg:mt-6 text-sm lg:text-md'>
              Explore our wide range of services.
            </p>
            <button className="text-lg lg:text-[2.05rem] flex items-center justify-center w-full lg:w-72 bg-blue-950 text-white px-6 py-3 mt-6 rounded-3xl font-semibold hover:bg-blue-800 transition-colors">
              Get a Quote
              <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
            </button>
          </div>
          <img src='/images/main2.png' className='w-full lg:w-[500px] mt-6 lg:mt-0 ' />
        </div>
      </section>

      {/* Section 2 */}
      <section className='w-full flex flex-col lg:flex-row justify-center items-center mt-16 lg:mt-36 px-4 font-montserrat'>
        <div className='flex items-center justify-center gap-5 flex-col lg:flex-row'>
          <img src='/images/prooducts1.jpg' className='w-full lg:w-[43rem] rounded-xl h-auto lg:h-[40rem] pl-8' />
          <div className='flex flex-col gap-5 text-center lg:text-left px-4 lg:px-18'>
            <h2 className='text-3xl lg:text-3xl text-blue-950 font-extrabold'>
              Going Green on the Waves: Embrace Environmentally Friendly Boating Solutions
            </h2>
            <h4 className='text-xl lg:text-2xl font-extrabold text-slate-950'>
              Biocide Use in Marine Coatings Faces Growing Regulations
            </h4>
            <p className='text-base lg:text-xl text-black pr-10'>
              Authorities worldwide are increasingly imposing restrictions and bans on biocide use in marine coatings to protect marine life and human health.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className='w-full flex flex-col lg:flex-row justify-center items-center mt-16 lg:mt-36 px-4 font-montserrat'>
        <div className='flex flex-col gap-8 w-full lg:w-[60%]'>
          <h2 className='text-3xl lg:text-3xl text-blue-950 font-extrabold text-center lg:text-left'>
            Green Waves Ahead: Marisonia's Eco-friendly Solution
          </h2>

          {/* Divider Lines */}
          <hr className="border-t border-gray-300 w-full" />

          <h4 className='text-xl lg:text-xl font-extrabold text-slate-950'>
            Invasive Non-Native Species Threat
          </h4>
          <p className='text-base lg:text-xl text-black'>
            Authorities worldwide are increasingly imposing restrictions and bans on biocide use in marine coatings to protect marine life and human health.
          </p>

          {/* Divider Lines */}
          <hr className="border-t border-gray-300 w-full" />

          <h4 className='text-xl lg:text-xl font-extrabold text-slate-950'>
            Safe Ultrasonic Antifouling
          </h4>
          <p className='text-base lg:text-xl text-black'>
            Authorities worldwide are increasingly imposing restrictions and bans on biocide use in marine coatings to protect marine life and human health.
          </p>
          
          <button className="bg-blue-950 text-white rounded-lg py-2 px-5 w-full lg:w-64 font-semibold mt-4 hover:bg-blue-800 transition">
            Get a Quote
            <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
          </button>
        </div>

        {/* Image Section */}
        <img src='/images/Products2.PNG' className='w-[24rem] lg:w-[23rem] mt-10 lg:mt-0 rounded-2xl h-auto lg:h-[48rem] object-cover' />
      </section>

      {/* Technical Specifications Section */}
      <section className="max-w-4xl mx-auto mt-16 p-6 font-montserrat flex flex-col items-center justify-center">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-blue-950 mb-8">
          Technical <span className="text-slate-400">Specifications</span>
        </h2>
        <div className="space-y-8 w-full">
          {[
            {
              title: "Components of the Marisonia Anti-Fouling System",
              content: "The Marisonia anti-fouling system consists of a control box, transducers, and cabling. The number of transducers to be used may vary depending on the length of the vessel."
            },
            {
              title: "Ultrasonic Frequency Scanning Range",
              content: "Marisonia conducts ultrasonic frequency scanning on the transducers within the range of 20-60 kHz."
            },
            {
              title: "Power Supply Specifications and Protection",
              content: "The product can operate with 12/24V power supply. In the event of reverse voltage, the product remains undamaged. It is equipped with a replaceable fuse for short-circuit protection."
            },
            {
              title: "Energy Consumption and Maximum Power Usage",
              content: "On average, the product consumes 6W."
            },
            {
              title: "LED Indicators for Operational Status",
              content: "Marisonia features Power and Info LEDs. The Power LED illuminates in green when the DC-DC converter on the card produces an output. The Info LED flashes in red at different intervals to indicate the connection status of the transducers."
            },
            {
              title: "Device Size",
              content: "Marisonia's control box weighs 800 grams and measures 20x16x6 cm. Each transducer mounted on the boat hull weighs 430 grams and has dimensions of 6x8 cm."
            },
          ].map((item, index) => (
            <div key={index} className="border-b border-slate-300 pb-4">
              <h3 className="text-lg lg:text-xl font-semibold text-blue-950">{item.title}</h3>
              <p className="text-sm lg:text-base text-gray-700 mt-2">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Details Section */}
      <div className="product-page-container flex flex-col lg:flex-row max-w-7xl mx-auto p-6">
        {/* Main Content */}
        <div className="main-content flex-1 pr-0 lg:pr-8">
          <h1 className="text-4xl lg:text-4xl font-bold mb-10 lg:mb-14 mt-10 lg:mt-16 text-black font-montserrat text-center lg:text-left">
            Marisonia Ultrasonic Transducers: Precise Installation for Enhanced Protection
          </h1>
          <p className="text-gray-700 mb-4">
            The Marisonia ultrasonic transducers are easily affixed to the dry side of the surface to be safeguarded. These transducers generate a minuscule, finely modulated pressure pattern within the water layer, disrupting any initial contact with predator species.
          </p>
          <p className="text-gray-700 mb-4">
            Ensuring seamless integration, Marisonia facilitates easy installation through our proficient installation teams, allowing optimal system utilization within a mere half-day timeframe!
          </p>
          
          {/* Images */}
          <div className="images mb-8">
            <img src="/images/Products-3.png" alt="Ultrasonic Transducer Image 1" className="w-full rounded-lg" />
          </div>

          {/* Warranty Section */}
          <h2 className="text-3xl lg:text-2xl font-bold mb-4 text-start text-black font-montserrat">Warranty</h2>
          <p className="text-gray-700 mb-2">
            Marisonia provides a comprehensive 2-year warranty for your assurance.
          </p>
          <h3 className="text-lg lg:text-2xl font-semibold mb-2">Who is Covered?</h3>
          <ul className="list-disc pl-5 text-slate-950">
            <li>Installation of the product must be performed by authorized representatives.</li>
            <li>The control box and the transducers should not be dealt without an authorized representative.</li>
          </ul>
          <p className="text-slate-950 mt-4">
            Please note: This warranty primarily covers durability and quality under specified usage conditions.
          </p>
        </div>

        {/* Sidebar CTA Section */}
        <div className="cta-sidebar w-full lg:w-80 flex-shrink-0 bg-gray-100 p-6 rounded-lg shadow-md mt-10 lg:mt-0 lg:h-80">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-slate-950 font-montserrat text-center lg:text-left">
            Get a Special Pricing for Your Vessels!
          </h2>
          <button className="bg-blue-950 text-white rounded-lg py-2 px-5 w-full lg:w-64 font-semibold mt-4 hover:bg-blue-800 transition">
            Get a Quote
            <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
