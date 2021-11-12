import React from 'react';
// import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo_yellow.webp';
import './navigation.scss';

const Navigation = () => {
  return (
    <div className="nav">
      <div className="container fluid ">
        <div className="row v-center space-between">
          <div className="logo">
            {/* <NavLink to="/" exact>
              <Logo />
            </NavLink> */}
            {/* <Logo /> */}
            <img src={Logo} alt="Mo Magan ite logo" />
          </div>
          <div className="menu">
            <button>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
