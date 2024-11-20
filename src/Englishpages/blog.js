import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      {/* Section 1: Blog Header */}
      <section className="w-full max-w-7xl h-[250px] my-32 mb-12 rounded-[33px] flex justify-center items-center relative overflow-hidden bg-white shadow-md">
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
      <section className="w-full max-w-9xl">
        <div className="flex flex-wrap justify-center gap-6 ">
          {/* Blog Post 1 */}
          <a
            href="/blogs/ultrasonic-antifouling-system"
            className="flex flex-col w-full sm:w-[45%] lg:w-[25%] bg-white border border-gray-300 rounded-[21px] shadow-md text-inherit no-underline overflow-hidden "
          >
            <img src={"/images/Blog-1.jpg"} alt="Blog 1" className=" c" />{" "}
            <div className="p-5 flex flex-col items-center ">
              <h3 className="mb-2 text-lg  text-black font-semibold">
                What is an Ultrasonic Anti-Fouling System?
              </h3>

              <p className="mb-4 text-base font-normal text-[#002fff] text-center">
                Marisonia has developed a revolutionary machine technology
                designed to solve fouling problems
              </p>
              <div className="text-[11px] text-black font-bold  w-full justify-end flex ">
                June 5, 2024
              </div>
            </div>
          </a>

          {/* Blog Post 2 */}
          <a
            href="/blogs/marine-biofouling"
            className="flex flex-col w-full sm:w-[45%] lg:w-[25%] bg-white border border-gray-300 rounded-[21px] shadow-md text-inherit no-underline overflow-hidden "
          >
            <img
              src={"/images/Blog-2.jpg"}
              alt="Blog 1"
              className=" w-full h-auto mb-4"
            />{" "}
            <div className="p-5 flex flex-col items-center ">
              <h3 className="mb-2 text-lg  text-black font-semibold">
                Marine Biofouling
              </h3>

              <p className="mb-4 text-base font-normal text-[#002fff] text-center">
                Marine biofouling organisms can affect boats in a variety of
                ways.
              </p>
              <div className="text-[11px] text-black font-bold  w-full justify-end flex ">
                June 5, 2024
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
