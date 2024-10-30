import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CarouselSection from './components/CarouselSection';
import MenFragrances from './components/MenFragrances';
import WomenFragrances from './components/WomenFragrances';
import Customize from './components/Customize';
import OurStory from './components/OurStory';
import CommunicateWithPerfumist from './components/CommunicateWithPerfumist';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import FilterComponent from './components/FilterComponent';
import './App.css';


const App = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({});
  const [currentSection, setCurrentSection] = useState('');


  const handleAddToBag = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setShowCheckout(true);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleCartClick = () => {
    setShowCheckout(true);
  };

  const totalPrice = cart.reduce((total, item) => total + item.quantity * parseFloat(item.price.substring(1)), 0);

  return (
    <div className="App">
      <Navbar onCartClick={handleCartClick} />
      <Header />
      <main>
        <CarouselSection />
        <FilterComponent filters={filters} setFilters={setFilters} currentSection={currentSection} />
        <div id="men-fragrances" onClick={() => setCurrentSection('MenFragrances')}>
          <MenFragrances filters={filters} onAddToBag={handleAddToBag} />
        </div>
        <div className="separator"></div>
        <div id="women-fragrances" onClick={() => setCurrentSection('WomenFragrances')}>
          <WomenFragrances filters={filters} onAddToBag={handleAddToBag} />
        </div>
        <div className="separator"></div>
        <Customize onAddToBag={handleAddToBag} />
        <div className="separator"></div>
        <OurStory />
        <div className="separator"></div>
        <CommunicateWithPerfumist />
        {showCheckout && <Checkout cart={cart} totalPrice={`$${totalPrice.toFixed(2)}`} onRemoveFromCart={handleRemoveFromCart} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;