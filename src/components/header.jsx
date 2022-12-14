/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ScrollForMore from './scrollForMore';

// import '../styles/components/header.scss';
import '../styles/App.scss';

const Header = () => {
  return (
    <>
      <section
        data-testid="head"
        className={'header-container'}
        data-scroll-section
      >
        <div className="welcome-text">
          <p>Hi, I am Mohamed</p>
        </div>
        <h1 id="header-text" data-scroll="" data-offset="3.0">
          Creative
          <br />
          Developer
          <br />
          & UX Designer
          <br />
          Based in Calgary
        </h1>
        <div className="scrl">
          <ScrollForMore />
        </div>
      </section>
    </>
  );
};

export default Header;
