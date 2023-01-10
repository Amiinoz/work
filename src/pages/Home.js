import React, { useState, useEffect, useRef } from 'react';
import useLocoScroll from '../hooks/useLocoScroll';
import About from '../components/about';
import Header from '../components/header';
import Services from '../components/services/Services';
import Connect from '../components/contact/connect';
import Spinner from '../assets/looper.gif';
import Gallery from '../components/gallery';
import { Helmet } from 'react-helmet';
import '../styles/App.scss';
import Layout from '../components/Layout';

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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
            <img src={Spinner} alt="mo magans portfolio preloader" />
          </div>
        </div>
      ) : (
        <div className="main-container" id="main-container" data-scroll-section>
          <div className="section">
            <Helmet>
              <title> Home | Mo Magan Portfolio </title>
              <meta
                name="description"
                content="Mohamed Magan is Creative developer & UX designer based in Calgary, Canada"
              />
              <link rel="canonical" href="https://www.momagan.com/" />
            </Helmet>
            <Layout>
              <Header />
              <Gallery />
              <About />
              <Services />
              <Connect />
            </Layout>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
