import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselSection.css';

const CarouselSection = () => {
  const [bgColor, setBgColor] = useState('#FFFFFF'); // Default background color
  const { t } = useTranslation();

  const handleSlideChange = (index) => {
    switch (index) {
      case 0:
        setBgColor('#15173F');
        break;
      case 1:
        setBgColor('#2D2E67'); // Cinnamon
        break;
      case 2:
        setBgColor('#544D7D'); // Pine Green
        break;
      case 3:
        setBgColor('#6C4571');
        break;
      default:
        setBgColor('#F5F5FF'); // Default background color
    }
  };

  return (
    <section className="carousel-section" style={{ backgroundColor: bgColor }}>
      <h2>{t('carousel.title')}</h2>
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} onChange={handleSlideChange}>
        <div>
          <img src={`${process.env.PUBLIC_URL}/tropical.jpeg`} alt="Image 1" />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/blue.jpeg`} alt="Image 2" />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/purp.jpeg`} alt="Image 3" />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/purple.jpeg`} alt="Image 4" />
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselSection;
