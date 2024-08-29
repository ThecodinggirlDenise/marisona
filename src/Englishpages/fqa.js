import React, { useState } from 'react';
import '../components/Css/FQA.css';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion__header" onClick={toggleAccordion}>
        <h2 className="accordion__question">{question}</h2>
        <span className="accordion__icon">
          <i className={isOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}></i>
        </span>
      </div>
      <div className={`accordion__content ${isOpen ? 'show' : ''}`}>
        <p className="accordion__answer">{answer}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const data = [
    {
      question: 'What is Marisonia?',
      answer:
        'Marisonia is an system specifically designed to prevent biofouling on ship hulls. It operates by emitting constant ultrasonic waves, creating vibrations on the hull that are imperceptible to humans and marine life. These vibrations effectively prevent the formation of algae, which is the initial stage in the marine biofouling process.',
    },
    {
      question: 'What is antifouling?',
      answer:
        'Antifouling refers to the various methods used to prevent biofouling on ship hulls. Many of the current antifouling techniques are inefficient and can be detrimental to diverse marine ecosystems. A prevalent method involves coating the submerged part of a ship\'s hull with toxic paints. However, this approach not only poses a threat to marine life but also tends to be ineffective in the long term at preventing biofouling.',
    },
    {
      question: 'Why is antifouling so important?',
      answer:
        'Antifouling is crucial as it significantly reduces maintenance costs and lowers fuel expenditure by preventing biofouling that causes drag. It also reduces the need for frequent hull cleaning, saving both time and labor.',
    },
    {
      question: 'How does Marisonia work?',
      answer:
        'Marisonia functions by converting electrical energy into ultrasonic waves. The system consists of a control box that generates these ultrasonic waves, coupled with transducers that emit them onto the ship\'s hull. These transducers are professionally installed inside the hull by authorized technicians which means there will be no visible change in the appearance of the vessel. To maintain its efficacy, the system needs to be operational continuously.',
    },
    {
      question: 'Does Marisonia’s ultrasonic antifouling technology work on all types of material?',
      answer:
        'Marisonia is not effective on all types of materials. It is designed to work on hulls made of fiberglass, steel, aluminium, and iron. However, it is not suitable for wooden hulls.',
    },
    {
      question: 'How much power does the Marisonia ultrasonic antifouling system consume?',
      answer:
        'The system is designed to be environmentally friendly, which includes its power consumption. It consumes ~6W on average.',
    },
    {
      question: 'Does Marisonia disturb fish and/or marine mammals?',
      answer:
        'No, the waves emitted through Marisonia are not an audible sound for fish and marine mammals. The waves emitted are much less powerful than commonly used fish finders and sonar systems.',
    },
    {
      question: 'What is ultrasonic antifouling technology?',
      answer:
        'Ultrasonic antifouling technology prevents marine organisms like algae and barnacles from accumulating on submerged boat and ship surfaces. This method works by emitting low-frequency ultrasonic waves, producing small vibrations on the hull\'s surface. These vibrations deter the attachment and growth of marine life, thus minimizing the necessity for regular hull cleaning and the use of potentially damaging chemical antifouling treatments.',
    },
    {
      question: 'How easy is it to install an ultrasonic antifouling system?',
      answer:
        'Yes, it is easy to install Marisonia. It is strictly advised that the system is installed by authorized personnel for the best possible solution. Depending on the size of the ship (and the number of transducers to be installed) it might take up to a couple of hours to completely finish the installation process.',
    },
    {
      question: 'Does ultrasonic antifouling work in freshwater environments?',
      answer: 'Yes, Marisonia can work in freshwater environments as well.',
    },
    {
      question: 'What maintenance is required for ultrasonic antifouling systems?',
      answer:
        'Marisonia typically does not require regular maintenance under normal conditions. However, if issues arise with any component of the system, such as the control box, transducers, or cables, your dealer will assist with the necessary repair services.',
    },
    {
      question: 'Does Marisonia come with a warranty?',
      answer: 'Yes, Marisonia comes with a 2-year manufacturer guarantee.',
    },
    {
      question: 'Will the application of antifouling paints continue?',
      answer:
        'Using Marisonia alongside antifouling paints enhances the protection of the boat. Marisonia extends the life of current antifouling applications and reduces the frequency of docking. Concurrently, it is also possible and effective to use it without applying toxic paint. The performance of non-toxic paint usage varies depending on the boat\'s fiber thickness, frequency of use, speed, and the sea it is located in.',
    },
    {
      question: 'Can the customer install the product themselves?',
      answer: 'No. For the product to function correctly and effectively, it must be installed by authorized personnel.',
    },
    {
      question: 'Does the boat\'s bottom need to be clean for Marisonia installation?',
      answer:
        'The product can be installed at any time, and it is not mandatory for the boat\'s bottom to be clean. If biological growth is present on the boat’s underside at the time of installation, it will not remove this buildup but will slow its progression. For the product\'s effectiveness to be fully observed, the boat\'s bottom needs to be clean.',
    },
  ];

  return (
    <div className="container">
      <div className="accordion__wrapper">
        <div className="faq-box">
          <span className="faq-text">FAQs</span>
        </div>
        <h1 className="accordion__title">Frequently Asked Questions</h1>
        <p className='BlogParagraph'>
          We provide answers to common questions about Marisonia's anti-fouling system and related topics. If you have a question that isn't addressed here, please feel free to contact us for further assistance.
        </p>
        {data.map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;


