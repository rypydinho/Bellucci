import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cart, totalPrice, onRemoveFromCart }) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [shippingNumber, setShippingNumber] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    let errors = {};

    if (!email.includes('@')) {
      errors.email = 'Please enter a valid email.';
    }
    if (!firstName) {
      errors.firstName = 'First name is required.';
    }
    if (!lastName) {
      errors.lastName = 'Last name is required.';
    }
    if (!address) {
      errors.address = 'Address is required.';
    }
    if (!city) {
      errors.city = 'City is required.';
    }
    if (!region) {
      errors.region = 'Region is required.';
    }
    if (!postalCode) {
      errors.postalCode = 'Postal code is required.';
    }
    if (!phoneNumber.match(/^\d+$/)) {
      errors.phoneNumber = 'Please enter a valid phone number.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleShipClick = () => {
    if (validateFields()) {
      const randomShippingNumber = `SH${Math.floor(Math.random() * 1000000)}`;
      setShippingNumber(randomShippingNumber);
      setIsOrdered(true);
      setError('');
    } else {
      setError('Please fill in all shipping information fields.');
    }
  };

  const handleRemoveItem = (id) => {
    onRemoveFromCart(id);
  };

  return (
    <section id="checkout-section" className="checkout-section">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your bag is empty. Please add items to your bag.</p>
      ) : isOrdered ? (
        <div className="shipping-message">
          <h3>Thank you for your purchase!</h3>
          <p>Your order has been processed and is ready to ship.</p>
          <p>Shipping Number: {shippingNumber}</p>
        </div>
      ) : (
        <div className="checkout-container">
          <div className="shipping-info">
            <h3>Shipping Information</h3>
            <input 
              type="text" 
              placeholder="E-mail Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <div className="name-fields">
              <input 
                type="text" 
                placeholder="First Name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            {errors.firstName && <p className="error">{errors.firstName}</p>}
            {errors.lastName && <p className="error">{errors.lastName}</p>}
            <input 
              type="text" 
              placeholder="Address" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <p className="error">{errors.address}</p>}
            <input 
              type="text" 
              placeholder="City" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {errors.city && <p className="error">{errors.city}</p>}
            <div className="region-postal">
              <input 
                type="text" 
                placeholder="Region" 
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="Postal Code" 
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            {errors.region && <p className="error">{errors.region}</p>}
            {errors.postalCode && <p className="error">{errors.postalCode}</p>}
            <input 
              type="text" 
              placeholder="Phone Number" 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          </div>
          <div className="order-summary">
            <h3>Your Order Summary</h3>
            {cart.map((item, index) => (
              <div key={index} className="order-item">
                <p>{item.name}</p>
                <p>Qty: {item.quantity}</p>
                <p>Total: ${item.quantity * parseFloat(item.price.substring(1))}</p>
                <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
            ))}
            <div className="total">
              <h4>Total: {totalPrice}</h4>
            </div>
          </div>
          <button className="ship-button" onClick={handleShipClick}>Order Now</button>
          {error && <p className="error">{error}</p>}
        </div>
      )}
    </section>
  );
};

export default Checkout;
