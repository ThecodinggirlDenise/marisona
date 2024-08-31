import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div>
      <section className='w-[70%] h-[250px] my-[23px] mx-auto mb-[90px] ml-[200px] rounded-[33px] flex justify-center items-center relative overflow-hidden bg-white border-none shadow-md'>
        <div className='font-extrabold text-black text-[40px] text-center relative z-10'>
          <h2>BLOG</h2>
        </div>
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-[33px] z-0" style={{ backgroundImage: 'url("/public/images/main3.jpg")' }}></div>
      </section>

      <section>
        <div className='flex flex-wrap justify-center gap-5 p-7 mx-auto'>
          <Link to="/blogs/ultrasonic-antifouling-system" className='flex flex-col items-center text-center w-[30%] bg-white border border-gray-300 rounded-[21px] shadow-md text-inherit no-underline overflow-hidden'>
            <img src={"/images/Blog-1.jpg"} alt="Blog 1" className='rounded-[10px] w-full h-auto mb-2' />
            <h3 className='mb-2 text-[18px] text-black font-semibold'>What is an Ultrasonic Anti-Fouling System?</h3>
            <p className='mb-6 text-[16px] font-normal hover:text-[#002fff]'>Marisonia has developed a revolutionary machine technology designed to solve fouling problems</p>
            <div className="text-[11px] text-black ml-[299px] mt-[4px] font-bold">June 5, 2024</div>
          </Link>
          <Link to="/blogs/marine-biofouling" className='flex flex-col items-center text-center w-[30%] bg-white border border-gray-300 rounded-[21px] shadow-md text-inherit no-underline overflow-hidden'>
            <img src={"/images/Blog-2.jpg"} alt="Blog 2" className='rounded-[10px] w-full h-auto mb-2' />
            <h3 className='mb-2 text-[18px] text-black font-semibold'>Marine Biofouling</h3>
            <p className='mb-6 text-[16px] font-normal hover:text-[#002fff]'>Marine biofouling organisms can affect boats in a variety of ways.</p>
            <div className="text-[11px] text-black ml-[299px] mt-[-6px] font-bold">May 15, 2024</div>
          </Link>
        </div>
      </section>
    </div>
  );
}



