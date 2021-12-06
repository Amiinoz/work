import React from 'react';
import Logo from '../../assets/logo_yellow.webp';

import './navigation.scss';
import Menu from '../Menu/menu';

const Navigation = () => {
  return (
    <div className="nav" data-scroll-section>
      <div className="container fluid ">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/" target="Home">
              <img
                src={Logo}
                alt="Mo Magan site logo"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-4"
                data-scroll-position="top"
              />
            </a>
          </div>
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="4"
            data-scroll-position="top"
          >
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
