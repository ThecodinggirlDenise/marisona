import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      {/* Section 1: Blog Header */}
      <section className="w-full max-w-4xl h-[250px] my-32 mb-12 rounded-[33px] flex justify-center items-center relative overflow-hidden bg-white shadow-md">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-[33px] z-10"
          style={{ backgroundImage: 'url("/images/main3.jpg")' }}
        >
          <div className="font-extrabold text-black text-3xl md:text-4xl text-center flex items-center justify-center h-full">
            <h2>BLOG</h2>
          </div>
        </div>
      </section>

      {/* Section 2: Blog Posts */}
      <section className="w-full max-w-6xl">
        <div className="flex flex-wrap justify-center gap-6 p-4 md:p-7 mx-auto">
          {/* Blog Post 1 */}
          <Link
            to="/blogs/ultrasonic-antifouling-system"
            className="flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[30%] bg-white border border-gray-300 rounded-[21px] shadow-md text-inherit no-underline overflow-hidden p-4"
          >
            <img
              src={"/images/Blog-1.jpg"}
              alt="Blog 1"
              className="rounded-[10px] w-full h-auto mb-4"
            />
            <h3 className="mb-2 text-lg text-black font-semibold">
              What is an Ultrasonic Anti-Fouling System?
            </h3>
            <p className="mb-4 text-base font-normal hover:text-[#002fff]">
              Marisonia has developed a revolutionary machine technology
              designed to solve fouling problems
            </p>
            <div className="text-[11px] text-black mt-auto font-bold self-end">
              June 5, 2024
            </div>
          </Link>

          {/* Blog Post 2 */}
          <Link
            to="/blogs/marine-biofouling"
            className="flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[30%] bg-white border border-gray-300 rounded-[21px] shadow-md text-inherit no-underline overflow-hidden p-4"
          >
            <img
              src={"/images/Blog-2.jpg"}
              alt="Blog 2"
              className="rounded-[10px] w-full h-auto mb-4"
            />
            <h3 className="mb-2 text-lg text-black font-semibold">
              Marine Biofouling
            </h3>
            <p className="mb-4 text-base font-normal hover:text-[#002fff]">
              Marine biofouling organisms can affect boats in a variety of ways.
            </p>
            <div className="text-[11px] text-black mt-auto font-bold self-end">
              May 15, 2024
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
