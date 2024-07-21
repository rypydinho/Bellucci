import React from 'react';
import './FilterComponent.css';
import { useTranslation } from 'react-i18next';

const FilterComponent = ({ filters, setFilters }) => {
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === 'checkbox' ? (checked ? value : '') : value,
    });
  };

  const handleClear = () => {
    setFilters({});
    const inputs = document.querySelectorAll('.filter-component input');
    inputs.forEach(input => {
      if (input.type === 'checkbox' || input.type === 'radio') {
        input.checked = false;
      }
    });
  };

  return (
    <div className="filter-component">
      <h3>{t('filterComponent.filterFragrances')}</h3>
      <div className="filter-group">
        <div className="filter-column">
          <h4>{t('filterComponent.priceRange')}</h4>
          <label>
            <input
              type="radio"
              name="price"
              value="0-200"
              onChange={handleChange}
            />
            $0 - $200
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="200-224"
              onChange={handleChange}
            />
            $200 - $224
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="225-270"
              onChange={handleChange}
            />
            $225 - $270
          </label>
        </div>
        <div className="filter-column">
          <h4>{t('filterComponent.gender')}</h4>
          <label>
            <input
              type="radio"
              name="gender"
              value="men"
              onChange={handleChange}
            />
            {t('filterComponent.men')}
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="women"
              onChange={handleChange}
            />
            {t('filterComponent.women')}
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="unisex"
              onChange={handleChange}
            />
            {t('filterComponent.unisex')}
          </label>
        </div>
        <div className="filter-column">
          <h4>{t('filterComponent.fragranceFamily')}</h4>
          <label>
            <input
              type="checkbox"
              name="floral"
              value="floral"
              onChange={handleChange}
            />
            {t('filterComponent.floral')}
          </label>
          <label>
            <input
              type="checkbox"
              name="woody"
              value="woody"
              onChange={handleChange}
            />
            {t('filterComponent.woody')}
          </label>
          <label>
            <input
              type="checkbox"
              name="citrus"
              value="citrus"
              onChange={handleChange}
            />
            {t('filterComponent.citrus')}
          </label>
        </div>
      </div>
      <button className="clear-button" onClick={handleClear}>{t('filterComponent.clearFilters')}</button>
    </div>
  );
};

export default FilterComponent;
