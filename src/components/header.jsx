/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ScrollForMore from './scrollForMore';
import WorkButton from '../components/work-button';

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
        <h1 id="header-text" className="line" data-scroll="" data-offset="3.0">
          <span>Creative</span>
          <br />
          <span>Developer</span>
          <br />
          <span>& UX Designer</span>
          <br />
          <span>Based in Calgary</span>
        </h1>
        <div className="scrl">
          <ScrollForMore />
        </div>
        <WorkButton />
      </section>
    </>
  );
};

export default Header;
