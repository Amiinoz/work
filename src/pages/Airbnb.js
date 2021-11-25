import React from 'react';
import Cover from '../assets/airbnb/comingsoon.webp';
import { Helmet } from 'react-helmet';

import '../styles/components/airbnb.scss';
const Airbnb = () => {
  return (
    <>
      <Helmet>
        <title>Mo Magan | Airbnb Clone </title>
        <meta name="description" content="Not Found" />
      </Helmet>
      <div className="airbnb-container">
        <img alt="an image" src={Cover} />
      </div>
    </>
  );
};

export default Airbnb;
