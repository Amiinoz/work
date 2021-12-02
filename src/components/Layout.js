import React from 'react';
import Footer from './footer/footer';
import Navigation from './navigation/Navigation';
import CustomCursor from '../custom-cursor/cursor';

import MenuManager from './Menu/MenuManager';

const Layout = ({ children }) => {
  return (
    <>
      <CustomCursor />
      <MenuManager>
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </MenuManager>
    </>
  );
};

export default Layout;
