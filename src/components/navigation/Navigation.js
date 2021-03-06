import React from 'react';
import Logo from '../../assets/logo_yellow.webp';
import useLocoScroll from '../../hooks/useLocoScroll';

import '../../styles/components/navigation.scss';

import Menu from '../Menu/menu';

const Navigation = () => {
  useLocoScroll();
  return (
    <div className="nav">
      <div className="container fluid ">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/" target="Home">
              <img src={Logo} alt="Mo Magan site logo" />
            </a>
          </div>
          <div>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
