import React, { useState } from 'react';
import './CommunicateWithPerfumist.css';

const CommunicateWithPerfumist = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendAnother = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="communicate-section" className="communicate-section">
      <h2>Communicate with Our Perfumers</h2>
      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      ) : (
        <div>
          <p>Thank you for your message! Our perfumer will get back to you shortly.</p>
          <button onClick={handleSendAnother} className="submit-button">Send Another Message</button>
        </div>
      )}
    </section>
  );
};

export default CommunicateWithPerfumist;
