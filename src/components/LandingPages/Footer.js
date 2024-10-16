import React from "react";

const Footer = () => {
  return (
    <div>
      {/* White Box Section */}
      <div className="bg-white p-6 shadow-lg  relative  rounded-xl mx-5 sm:mx-10">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <h2 className="text-xl font-bold mb-4 md:mb-0 text-center md:text-left">
            Tekneniz için Özel Fiyat Alın!
          </h2>
          <div className="flex flex-col sm:flex-row  gap-4">
            <button className="border border-black px-4 py-2 rounded-md text-black font-semibold hover:bg-gray-200 transition duration-300">
              Fiyat Teklifi Alın
            </button>
            <button className="bg-blue-900 px-4 py-2 rounded-md text-white font-semibold hover:bg-blue-800 transition duration-300">
              Hakkımızda Daha Fazlası
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#1f2f54] text-white mx-5 sm:mx-10 rounded-xl mt-10 sm:-mt-5  ">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            {/* Left Section - Logo */}
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl font-bold">MARISONIA</h1>
            </div>

            {/* Middle Section - Address */}
            <div className="text-center md:text-left">
              <p>Bilkent Cyberpark Tepe Building BO1</p>
              <p>Çankaya, Ankara, TURKEY</p>
              <p>Weteringschans 165, 1017 XD Amsterdam</p>
            </div>

            {/* Right Section - Contact Information */}
            <div className="mt-6 md:mt-0 text-center md:text-right">
              <p>
                Email:{" "}
                <a href="mailto:info@marisonia.com" className="underline">
                  info@marisonia.com
                </a>
              </p>
              <p>Phone: +90 (312) 265 05 09</p>
            </div>
          </div>

          {/* Bottom Section - Powered By */}
          <div className="mt-8 text-center">
            <p>
              Powered by <span className="font-semibold">INFINIA</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
