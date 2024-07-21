import React, { useState } from 'react';
import './MenFragrances.css';

const filterProducts = (products, filters) => {
  let filteredProducts = products;

  if (filters.price) {
    const [min, max] = filters.price.split('-').map(Number);
    filteredProducts = filteredProducts.filter(
      (product) => parseFloat(product.price.substring(1)) >= min && parseFloat(product.price.substring(1)) <= max
    );
  }

  if (filters.floral) {
    filteredProducts = filteredProducts.filter((product) =>
      product.notes.includes('floral')
    );
  }

  if (filters.woody) {
    filteredProducts = filteredProducts.filter((product) =>
      product.notes.includes('woody')
    );
  }

  if (filters.citrus) {
    filteredProducts = filteredProducts.filter((product) =>
      product.notes.includes('citrus')
    );
  }

  if (filters.gender) {
    filteredProducts = filteredProducts.filter(
      (product) => product.gender === filters.gender
    );
  }

  return filteredProducts;
};

const MenFragrances = ({ filters, onAddToBag }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const products = [
    { id: 1, name: 'For Men', image: `${process.env.PUBLIC_URL}/formen.jpeg`, price: '$160', notes: ['woody'], gender: 'men' },
    { id: 2, name: 'Suave', image: `${process.env.PUBLIC_URL}/suave.jpeg`, price: '$170', notes: ['citrus'], gender: 'men' },
    { id: 3, name: 'Damascus', image: `${process.env.PUBLIC_URL}/damascus.jpeg`, price: '$220', notes: ['floral'], gender: 'men' },
    { id: 4, name: 'XVI', image: `${process.env.PUBLIC_URL}/XVI.jpeg`, price: '$250', notes: ['woody'], gender: 'men' },
  ];

  const filteredProducts = filterProducts(products, filters);

  const handleAddToBag = (product) => {
    onAddToBag(product);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000); // Hide message after 3 seconds
  };

  return (
    <section id="men-fragrances" className="men-fragrances">
      <h2>Men's Fragrances</h2>
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-overlay">
              <div className="product-name-overlay">{product.name}</div>
            </div>
            <p>{product.price}</p>
            <button onClick={() => handleAddToBag(product)}>Add to Bag</button>
          </div>
        ))}
      </div>
      {showConfirmation && <div className="confirmation-message">Item has been added to bag</div>}
    </section>
  );
};

export default MenFragrances;
