import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <>
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </>,
  document.getElementById('root'),
);

reportWebVitals();
