import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

// import CustomCursor from "../CustomCursor/cursor";
// import MenuManager from './Menu/MenuManager';

const Layout = ({ children }) => {
  return (
    <>
      {/* <CustomCursor /> */}
      {/* <MenuManager> */}
      <div className="main-container" id="main-container" data-scroll-container>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
      {/* </MenuManager> */}
    </>
  );
};

export default Layout;
