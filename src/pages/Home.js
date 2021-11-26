import React, { useState, useEffect, useRef } from 'react';
import useLocoScroll from '../hooks/useLocoScroll';

import About from '../components/about/About';
import Banner from '../components/Banner/Banner';

import Services from '../components/services/Services';
import Connect from '../components/Connect/Connect';
import Spinner from '../assets/loader.gif';
import Gallery from '../components/gallery/Gallery';
import { Helmet } from 'react-helmet';
import ContactButton from '../components/ContactButton/contactButton';

import '../styles/App.scss';

const Home = () => {
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

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  // console.log(toggleSidebar);
  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <div className="logo">
            <img src={Spinner} alt="mo magans portfolio preloader" />
            <h2>Mohamed Magan | Portfolio</h2>
          </div>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
        >
          <Helmet>
            <title>Mo Magan | Home </title>
            <meta name="description" content="Home" />
          </Helmet>

          <Banner />
          <About />
          <Services />
          <Gallery />
          <Connect />
          <ContactButton />
        </div>
      )}
    </>
  );
};

export default Home;
