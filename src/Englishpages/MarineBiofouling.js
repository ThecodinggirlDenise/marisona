/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// Ensure the path is correct

export default function UltrasonicAntiFouling() {
  return (
    <section className="w-full max-w-8xl h-[480px] my-32 mb-24 rounded-[33px] flex justify-center items-center relative overflow-hidden bg-white ">
      <div
        className="absolute inset-0 w-full max-w-5xl  h-full bg-cover bg-center bg-no-repeat rounded-[33px] z-10 mx-auto "
        style={{
          backgroundImage: 'url("/images/Blog-2.jpg")',
          backgroundSize: "cover",
        }}
      >
        <div className="font-extrabold text-black text-3xl md:text-4xl text-center flex items-center justify-center h-full md:pr-96 bg-black opacity-50 rounded-[33px] ">
          <h2 className="opacity-100 z-10 text-white ml-96">
            Marine Biofouling
          </h2>
          <p className="text-white ">
            Marine biofouling organisms can affect boats in a variety of ways.
          </p>
        </div>
      </div>
      <div
        className=" w-24  max-w-5xl  h-72  bg-center bg-no-repeat rounded-[33px] mt-[30rem] z-30 relative mx-auto "
        style={{
          backgroundImage: 'url("/images/MARINE.svg")',
        }}
      ></div>
    </section>
  );
}
