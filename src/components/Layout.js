import React from 'react';
import Navigation from './navigation/Navigation';

import MenuManager from './Menu/MenuManager';

const Layout = ({ children }) => {
  return (
    <>
      <MenuManager>
        <div>
          <Navigation />
          <main>{children}</main>
        </div>
      </MenuManager>
    </>
  );
};

export default Layout;
