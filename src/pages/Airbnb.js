import React from 'react';
import Cover from '../assets/airbnb/comingsoon.webp';

import '../styles/components/airbnb.scss';
const Airbnb = () => {
  return (
    <div className="airbnb-container">
      <img alt="an image" src={Cover} />
    </div>
  );
};

export default Airbnb;
