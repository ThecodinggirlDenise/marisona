import React from 'react';
import { useTranslation } from 'react-i18next';

const OurStory = () => {
  const { t } = useTranslation();

  return (
    <div className="our-story-container max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Section One */}
      <section className="section-one-ourstory flex flex-col lg:flex-row items-center mb-10">
        <img
          src="/images/OurStory1.jpg"
          alt="Eco-Maritime"
          className="image-left rounded-lg w-full lg:w-1/2 mt-32 lg:mr-5 mb-5 lg:mb-0"
        />
        <div className="text-content flex-1 px-5 lg:ml-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5">{t('OS1H')}</h2>
          <p className="text-sm sm:text-base mb-4">{t('OS1P')}</p>
        </div>
      </section>

      {/* Section Two */}
      <section className="section-two-ourstory flex flex-col lg:flex-row items-center mb-10">
        <div className="text-content flex-1 px-5 lg:ml-8 mb-5 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5">{t('OS2H')}</h2>
          <p className="text-sm sm:text-base mb-4">{t('OS2P')}</p>
        </div>
        <img
          src="/images/OurStory2.jpg"
          alt="Innovating"
          className="image-right rounded-lg w-full lg:w-2/5 lg:ml-5"
        />
      </section>

      {/* Section Three */}
      <section className="section-three-ourstory flex flex-col lg:flex-row items-center mb-10">
        <img
          src="/images/OurStory3.jpg"
          alt="Mission"
          className="image-left rounded-lg w-full lg:w-1/3 lg:mr-5 mb-5 lg:mb-0"
        />
        <div className="text-content flex-1 px-5 lg:ml-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5">{t('OS3H')}</h2>
          <p className="text-sm sm:text-base mb-4">{t('OS3P')}</p>
        </div>
      </section>
    </div>
  );
}

export default OurStory;
