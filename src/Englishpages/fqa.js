import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Create a reference for the content

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 mb-4 bg-white rounded-xl w-full sm:w-[100%] md:w-[100%] lg:w-[80%] xl:w-[70%] mt-[30px] sm:mt-[40px] lg:mt-[90px] shadow-lg mx-auto">
      <div
        className="flex justify-between items-center gap-4 cursor-pointer p-4 sm:p-6 lg:p-8"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#242e4c] text-left">
          {question}
        </h2>
        <span className="bg-black w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center rounded-full text-white flex-shrink-0">
          <i
            className={isOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}
          ></i>
        </span>
      </div>
      {/* Dynamically controlled max-height for smooth transition */}
      <div
        ref={contentRef}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
        style={{
          maxHeight: isOpen ? contentRef.current.scrollHeight + "px" : "0px",
        }}
      >
        <p className="p-4 sm:p-6 lg:p-8 font-medium text-left text-[14px] sm:text-[16px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const { t } = useTranslation();
  const data = [
    {
      question: t("Q1"),
      answer: t("A1"),
    },
    {
      question: t("Q2"),
      answer: t("A2"),
    },
    {
      question: t("Q3"),
      answer: t("A3"),
    },
    {
      question: t("Q4"),
      answer: t("A4"),
    },
    {
      question: t("Q5"),
      answer: t("A5"),
    },
    {
      question: t("Q6"),
      answer: t("A6"),
    },
    {
      question: t("Q7"),
      answer: t("A7"),
    },
    {
      question: t("Q8"),
      answer: t("A8"),
    },
    {
      question: t("Q9"),
      answer: t("A9"),
    },
    {
      question: t("Q10"),
      answer: t("A10"),
    },
    {
      question: t("Q11"),
      answer: t("A11"),
    },
    {
      question: t("Q12"),
      answer: t("A12"),
    },
    {
      question: t("Q13"),
      answer: t("Q13"),
    },
    {
      question: t("Q14"),
      answer: t("A14"),
    },
    {
      question: t("Q15"),
      answer: t("A15"),
    },
  ];

  return (
    <div className="w-full mx-auto min-h-screen p-8 grid place-items-center">
      <div className="rounded-[2.5rem] flex flex-col items-center w-full max-w-[1000px] p-8 sm:p-12 lg:p-20 text-center">
        <div className="inline-block bg-[#40507a] text-white rounded-lg py-2 px-4 font-bold mb-8">
          <span className="text-lg font-bold ">FAQs</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl  max-w-xl text-center font-bold text-black   mb-8">
          {t("FQA1")}
        </h1>
        <p className="mt-4 mb-12 text-base sm:text-lg lg:text-xl text-black">
          {t("FAQC")}
        </p>
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
