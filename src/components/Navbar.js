import React from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = ({ onCartClick }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav>
      <div className="logo">
        <a href="#home"> <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Logo"/> </a>
      </div>
      <ul className="nav-links">
        <li><a href="#men-fragrances">{t('navbar.men')}</a></li>
        <li><a href="#women-fragrances">{t('navbar.women')}</a></li>
        <li><a href="#customize-section">{t('navbar.customize')}</a></li>
        <li><a href="#our-story">{t('navbar.ourStory')}</a></li>
      </ul>
      <div className="shopping-cart">
        <a href="#checkout-section" onClick={onCartClick}> <img src={`${process.env.PUBLIC_URL}/shop.png`} alt="Shopping Cart"/> </a>
      </div>
      <div className="language-toggle" onClick={toggleLanguage}>
        {i18n.language === 'en' ? 'FR' : 'EN'}
      </div>
    </nav>
  );
};

export default Navbar;
