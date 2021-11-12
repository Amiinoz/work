import React, { useState, useRef, useEffect } from 'react';
// import gsap from 'gsap';
import useLocoScroll from './hooks/useLocoScroll';

import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import './styles/App.scss';
import About from './components/about/About';

function App() {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);
  // const [isOpen, setIsOpen] = useState(false);

  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === 'undefined' || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(1);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(time => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === 'undefined' || !window.document) {
    return null;
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  console.log(toggleSidebar);

  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <div className="logo">
            <img
              src="./assets/loader.gif"
              alt="mo magans portfolio preloader"
            />
            <h2>Mohamed Magans Portfolio</h2>
          </div>
        </div>
      ) : (
        <>
          <div
            className="main-container"
            id="main-container"
            data-scroll-container
          >
            <Navigation />
            <Header />
            <About />
          </div>
          ;
        </>
      )}
    </>
  );
}

export default App;
