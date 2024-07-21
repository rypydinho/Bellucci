import React, { useState } from 'react';
import './WomenFragrances.css';

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

const WomenFragrances = ({ filters, onAddToBag }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const products = [
    { id: 1, name: 'La Femme', image: `${process.env.PUBLIC_URL}/woman.jpeg`, price: '$180', notes: ['floral'], gender: 'women' },
    { id: 2, name: 'Santo', image: `${process.env.PUBLIC_URL}/santo1.jpeg`, price: '$170', notes: ['woody'], gender: 'women' },
    { id: 3, name: 'Regina', image: `${process.env.PUBLIC_URL}/regina.jpeg`, price: '$210', notes: ['citrus'], gender: 'women' },
    { id: 4, name: 'Afrodisiaca', image: `${process.env.PUBLIC_URL}/afrodisiaca.jpeg`, price: '$260', notes: ['woody'], gender: 'women' },
  ];

  const filteredProducts = filterProducts(products, filters);

  const handleAddToBag = (product) => {
    onAddToBag(product);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000); // Hide message after 3 seconds
  };

  return (
    <section id="women-fragrances" className="women-fragrances">
      <h2>Women's Fragrances</h2>
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

export default WomenFragrances;
