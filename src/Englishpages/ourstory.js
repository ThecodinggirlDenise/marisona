import React from 'react';
import { useTranslation } from 'react-i18next';

const OurStory = () => {
  const { t } = useTranslation();

  return (
    <div className="our-story-container max-w-5xl mx-auto py-16 bg-white">
      <section className="section-one-ourstory flex items-center mb-10">
        <img
          src="/images/OurStory1.jpg"
          alt="Eco-Maritime"
          className="image-left rounded-lg w-1/2 mr-5"
        />
        <div className="text-content flex-1 px-5 ml-24">
          <h2 className="text-3xl font-bold mb-5">{t('OS1H')}</h2>
          <p className="text-base mb-4">{t('OS1P')}</p>
        </div>
      </section>

      <section className="section-two-ourstory flex items-center mb-10">
        <div className="text-content flex-1 px-5 ml-24">
          <h2 className="text-3xl font-bold mb-5">{t('OS2H')}</h2>
          <p className="text-base mb-4">{t('OS2P')}</p>
        </div>
        <img
          src="/images/OurStory2.jpg"
          alt="Innovating"
          className="image-right rounded-lg w-2/5 ml-5"
        />
      </section>

      <section className="section-three-ourstory flex items-center mb-10">
        <img
          src="/images/OurStory3.jpg"
          alt="Mission"
          className="image-left rounded-lg w-1/3 mr-5"
        />
        <div className="text-content flex-1 px-5 ml-24">
          <h2 className="text-3xl font-bold mb-5">{t('OS3H')}</h2>
          <p className="text-base mb-4">{t('OS3P')}</p>
        </div>
      </section>
    </div>
  );
}

export default OurStory;
