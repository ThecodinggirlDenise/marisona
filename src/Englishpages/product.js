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
      <h4 className='text-2xl font-extrabold text-slate-950 w-[39rem]'>Invasive Non-Native Species Threat</h4>
      <p className='text-2xl text-black w-[36rem]'>
        Authorities worldwide are increasingly imposing restrictions and bans on biocide use in marine coatings to protect marine life and human health.
      </p>
      <h4 className='text-2xl font-extrabold text-slate-950 w-[39rem]'>Safe Ultrasonic Antifouling</h4>
      <p className='text-2xl text-black w-[36rem]'>
        Authorities worldwide are increasingly imposing restrictions and bans on biocide use in marine coatings to protect marine life and human health.
      </p>
    </div>
    {/* Reduce or remove the left margin on the image */}
    <img src='/images/Products2.PNG' className='w-[43rem] ml-4 rounded-2xl h-[48rem]' />
  </div>
</section>

    </>
  );
}
