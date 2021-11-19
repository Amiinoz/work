import React from 'react';

// import Menu from '../Menu/menu';
import Logo from '../../assets/logo_yellow.webp';
import './navbar.scss';

export default function Navbar() {
  return (
    <>
      <div className="nav-wrap" data-scroll-section>
        <a href="/" target="Home">
          <img
            src={Logo}
            className="nav-container"
            alt="mo magan's portfolio logo"
          />
        </a>
      </div>
      {/* <Menu /> */}
    </>
  );
}
