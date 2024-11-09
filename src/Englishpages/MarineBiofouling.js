/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// Ensure the path is correct
import { Link } from "react-router-dom";
export default function UltrasonicAntiFouling() {
  return (
    <section className="">
      <div className="ultrasonic-container">
        <section className="w-full max-w-8xl h-[480px] my-32 mb-12 rounded-[33px] flex justify-center items-center relative overflow-hidden bg-white ">
          <div
            className="absolute inset-0 w-full max-w-5xl  h-full bg-cover bg-center bg-no-repeat rounded-[33px] z-10 mx-auto "
            style={{
              backgroundImage: 'url("/images/Blog-2.jpg")',
              backgroundSize: "cover",
            }}
          >
            <div className="font-extrabold text-black text-3xl md:text-4xl text-center flex items-center justify-center h-full md:pr-96 bg-black opacity-50 rounded-[33px] ">
              <h1 className="opacity-100 z-10 text-white">Marine Biofouling</h1>
            </div>
          </div>
        </section>

        <div
          className=" w-24  max-w-5xl  h-24 bg-cover bg-center bg-no-repeat rounded-[33px] -mt-20 z-30 relative mx-auto "
          style={{
            backgroundImage: 'url("/images/marinebiofouling.svg")',
            backgroundSize: "cover",
          }}
        ></div>

        <div className="w-full flex justify-center">
          <div className=" max-w-[1100px] flex justify-between w-full text-justify font-lato text-[#586272] ">
            <div className=" w-full sm:w-1/2 flex flex-col gap-5">
              <h1 className="text-4xl  font-semibold  text-center text-black">
                Marine Fouling Organisms and Their Effects on Boats
              </h1>
              <p className="text-sm">
                This article will cover the topics of whatbiofouling is, what
                marine biofouling organisms are, how they affect boats, andwhat
                the ways of biofouling prevention are.
              </p>
              <img src={"/images/Blog-2.jpg"} className="w-[190rem] "></img>
              <h1 className="text-4xl    font-semibold  text-left text-black">
                What is Marine Biofouling?
              </h1>
              <p className=" ">
                Marine biofouling is the process ofunwanted organic materials
                such as bacteria, algae, barnacles, mussels,tubeworms, etc.,
                adhering to certain surfaces submerged in water like shiphulls,
                boats, ropes, renewable energy structures, and similar
                materials. Althoughit is generally known to form on ship hulls,
                this process fundamentally occursanywhere in contact with water,
                such as water inlets, pipe works, and ponds.{" "}
              </p>
              <p>
                {" "}
                The process of marine biofouling takesplace in four stages: At
                the first stage, bacterial and organic materialpresent in the
                water forms a conditioning film around the submerged solid
                surfaceby attaching to the surface; at the second stage, a
                biofilm forms consisting ofmicrobial communities attaching to
                the conditioning film; at the third stage invertebratesand their
                larvae colonize the biofilm; and in the last stage a
                complexcommunity of larger animals and organisms is formed over
                the surface. Since acoat of living organisms forms on immersed
                surfaces or inside parts ofsubmerged materials, this phenomenon
                can lead to reduced performance of systems,watercraft, or
                devices used in waterborne activities due to the
                unwantedconditions it creates.
              </p>
              <h1 className="text-4xl    font-semibold  text-left text-black">
                What are The Most Common Marine Fouling Organisms?
              </h1>
              <p className=" ">
                There are several various biofoulingorganisms, which can be
                categorized into two main headings: microfoulingorganisms and
                macrofouling organisms. As the name suggests, while the
                formerconsists of much smaller structures, such as the formation
                of conditioning filmand biofilm, bacteria, and other organisms,
                the latter is the accumulation of largeranimals/organisms. These
                organisms can be separated into two subcategories aswell.
                Soft-fouling organisms and hard-fouling organisms.
              </p>
              <h1 className="text-xl font-semibold  sm:text-left text-black ">
                Soft (Non-Calcareous) Fouling Organisms
              </h1>
              <p className="-mt-6 ">
                These organisms are the first to cover asolid surface, forming a
                slime-like film, almost for the other organisms tohold onto.
              </p>
              <h1 className="text-xl font-semibold  sm:text-left text-black ">
                Biofilm
              </h1>
              <p className="-mt-6 ">
                Biofilm is a community of bacteria and microbialstructures
                formed via the adhesion of dissolved organisms in water onto a
                solidsurface. These microbial structures hold each other with a
                glue-like matter,enabling the formation of an ecosystem.
              </p>
              <h1 className="text-xl font-semibold  sm:text-left text-black ">
                Algae
              </h1>
              <p className="-mt-6 ">
                Algae can attach to any surface very fast,whether human-made or
                natural, creating a soft and slimy coating.
              </p>
              <h1 className="text-xl font-semibold  sm:text-left text-black ">
                Algae
              </h1>
              <p className="-mt-6 ">
                Algae can attach to any surface very fast,whether human-made or
                natural, creating a soft and slimy coating.
              </p>
              <h1 className="text-xl font-semibold  sm:text-left text-black ">
                Hydroids
              </h1>
              <p className="-mt-6 ">
                Hydroids are jellyfish-like animalsattached to the solid
                surfaces covered with biofilm, contributing to the enlargementof
                fouling organisms.
              </p>
              <h1 className="text-xl font-semibold  sm:text-left text-black ">
                Hard (Calcareous) Fouling Organisms
              </h1>
              <p className="-mt-6 ">
                These organisms, consisting mostly ofinvertebrate animals,
                colonize the ecosystem built on surfaces. They are mostlylarger
                organisms with hard shells and more durability.
              </p>
              <h1 className="text-xl font-semibold  sm:text-left text-black ">
                Barnacles
              </h1>
              <p className="-mt-6 ">
                Barnacles are shelled creatures thatattach themselves to
                surfaces permanently. They are crustaceans; they are relatedto
                crabs and lobsters. They can adhere to other animals. To feed
                themselves,they extend their arm-like structure and catch
                microscopic organisms in the water.
              </p>
              <h1 className="text-xl font-semibold  sm:text-left text-black ">
                Mussels
              </h1>
              <p className="-mt-6 ">
                Mussels are hard-shelled animals that can infesthard surfaces as
                well. Once they are attached to surfaces, they are very hardto
                remove; therefore, it is a costly process to clean them. These
                animalsproduce rapidly, causing even larger damage on the
                surface they are attached toor to the entire ecosystem they are
                a part of.
              </p>
              <h1 className="text-xl font-semibold  sm:text-left text-black ">
                Bryozoans
              </h1>
              <p className="-mt-6 ">
                These invertebrates form mossy and largecolonies. They filter
                out the microorganisms in the water and feed on those.
              </p>
              <h1 className="text-xl font-semibold  sm:text-left text-black ">
                Tube Worms
              </h1>
              <p className="-mt-6 ">
                Tubeworms are sessile organisms, meaningthey are sedentary
                creatures that attach to solid surfaces, creating atube-like
                structure rich in minerals around them, which can be as hard as
                arock. Their structure can make the removal process of these
                biofouling organisms challenging.
              </p>
            </div>
            <div className=" lg:w-1/2  pl-24">
              <div className=" sticky top-[90px]  cta-sidebar w-full  flex-shrink-0 bg-[#1F2F54]  p-10   shadow-md mt-10 lg:mt-0 lg:h-auto py-10 rounded-2xl">
                <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-white font-montserrat text-center lg:text-left">
                  Get a Special Pricing for Your Vessels!
                </h2>
                <Link to="/contact">
                  <button className="bg-white text-black rounded-lg  py-5 px-9   font-semibold mt-4 hover:bg- transition">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-4xl ml-9 mt-12 mb-4  font-extrabold  text-left text-black">
          What is Marine Biofouling?
        </h1>
        <p className="sm:ml-9 text-gray-600">
          Marine biofouling is the process ofunwanted organic materials such as
          bacteria, algae, barnacles, mussels,tubeworms, etc., adhering to
          certain surfaces submerged in water like shiphulls, boats, ropes,
          renewable energy structures, and similar materials. Althoughit is
          generally known to form on ship hulls, this process fundamentally
          occursanywhere in contact with water, such as water inlets, pipe
          works, and ponds.
        </p>
        <br />
        <p className="sm:ml-9 sm:mb-44 text-gray-600">
          The process of marine biofouling takesplace in four stages: At the
          first stage, bacterial and organic materialpresent in the water forms
          a conditioning film around the submerged solid surfaceby attaching to
          the surface; at the second stage, a biofilm forms consisting
          ofmicrobial communities attaching to the conditioning film; at the
          third stage invertebratesand their larvae colonize the biofilm; and in
          the last stage a complexcommunity of larger animals and organisms is
          formed over the surface. Since acoat of living organisms forms on
          immersed surfaces or inside parts ofsubmerged materials, this
          phenomenon can lead to reduced performance of systems,watercraft, or
          devices used in waterborne activities due to the unwantedconditions it
          creates.
        </p>
        <section className="w-full max-w-7xl mx-auto my-16 p-8 bg-blue-900 rounded-3xl flex items-center justify-between">
          {/* Left Side - Image */}
          <div className="w-1/2 flex justify-center h-96 ">
            <img
              src="/images/peronImage.png" // Update with the correct image path
              alt="Special Pricing"
              className="rounded-3xl object-cover"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-1/2 text-white">
            <h2 className="text-6xl font-bold mb-4">
              Get a Special Pricing for Your Vessels!
            </h2>
            <p className="text-lg mb-6">
              You can contact us to protect your boat with Marisonia’s
              innovative technology. Afterwards, our team will get in touch with
              you.
            </p>
            <Link to="/contact">
              <button className="bg-transparent border-2 border-white text-white rounded-lg py-2 px-8 font-semibold hover:bg-white hover:text-blue-900 transition">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
        <section>
          <h1 className="text-4xl ml-9 mt-12 mb-4  font-semibold text-left text-black">
            What are The Most Common Marine Fouling Organisms?
          </h1>
          <p className="sm:mr-56 sm:ml-14 sm:mb-96 text-gray-600">
            There are several various biofoulingorganisms, which can be
            categorized into two main headings: microfoulingorganisms and
            macrofouling organisms. As the name suggests, while the
            formerconsists of much smaller structures, such as the formation of
            conditioning filmand biofilm, bacteria, and other organisms, the
            latter is the accumulation of largeranimals/organisms. These
            organisms can be separated into two subcategories aswell.
            Soft-fouling organisms and hard-fouling organisms. ‍
          </p>
        </section>
        <section>
          <div>
            <h1 className="text-4xl pl-20 mt-24 mb-16 font-bold">
              Other Blogs
            </h1>
          </div>

          <section className="w-full max-w-6xl">
            <Link to="/blog">
              <button className="mt-2 py-2 px-12 sm:ml-[900px] border border-slate-950 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white hover:font-medium">
                Explore All Blogs
              </button>
            </Link>
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
                  Marine biofouling organisms can affect boats in a variety of
                  ways.
                </p>
                <div className="text-[11px] text-black mt-auto font-bold self-end">
                  May 15, 2024
                </div>
              </Link>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}
