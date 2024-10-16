/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// Ensure the path is correct

export default function UltrasonicAntiFouling() {
  return (
    <div className="ultrasonic-container">
      <section className="w-full max-w-8xl h-[250px] my-32 mb-12 rounded-[33px] flex justify-center items-center relative overflow-hidden bg-white shadow-md">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-[33px] z-10"
          style={{
            backgroundImage: 'url("/images/Blog-2.jpg")',
            backgroundSize: "cover",
          }}
        >
          <div className="font-extrabold text-white text-3xl md:text-4xl text-center flex items-center justify-left h-full">
            <h2>Marine Biofouling</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
