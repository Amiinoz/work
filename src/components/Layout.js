import React from 'react';
import Footer from './footer';
import Navigation from './navigation/Navigation';

import MenuManager from './Menu/MenuManager';

const Layout = ({ children }) => {
  return (
    <>
      <MenuManager>
        <div>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </MenuManager>
    </>
  );
};

export default Layout;
