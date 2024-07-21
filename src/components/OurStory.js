import React from 'react';
import './OurStory.css';
import { useTranslation } from 'react-i18next';

const OurStory = () => {
  const { t } = useTranslation();

  return (
    <section className="our-story" id="our-story">
      <h2>{t('ourStory.title')}</h2>
      <div className="story-content">
        <img src={`${process.env.PUBLIC_URL}/sansopiro.jpeg`} alt="Our Story" />
        <div className="story-text">
          <p>{t('ourStory.paragraph1')}</p>
          <p>{t('ourStory.paragraph2')}</p>
          <p>{t('ourStory.paragraph3')}</p>
          <p>{t('ourStory.paragraph4')}</p>
          <p>{t('ourStory.paragraph5')}</p>
          <p>{t('ourStory.paragraph6')}</p>
          
        </div>
      </div>
    </section>
  );
};

export default OurStory;
