import React from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-content">
        <h2>{t('header.welcome')}</h2>
        <p>{t('header.description')}</p>
        <a href="#customize-section"><button className="header-button">{t('header.discover')}</button> </a>
      </div>
    </header>
  );
};

export default Header;
