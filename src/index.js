import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n'; // Import the i18n configuration
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
