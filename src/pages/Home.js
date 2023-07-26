import React, { useState, useEffect, useRef } from 'react';
import useLocoScroll from '../hooks/useLocoScroll';
import About from '../components/about';
import Header from '../components/header';
import Gallery from '../components/gallery';
import Connect from '../components/contact/connect';
import Spinner from '../assets/looper.gif';
import { Helmet } from 'react-helmet';
import Services from '../components/services/Services';
import '../styles/App.scss';
import Layout from '../components/Layout';

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(1);

  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref.current) {
      if (typeof window === 'undefined' || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const clear = () => {
    clearInterval(id.current);
    setPreload(false);
  };

  const id = useRef(null);

  useEffect(() => {
    id.current = setInterval(() => {
      setTimer(time => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

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
        <div
          className="main-container"
          id="main-container"
          data-scroll-section
          ref={ref}
        >
          <div className="section">
            <Helmet>
              <title>{`Home | Mo Magan Portfolio`}</title>
              <meta
                name="description"
                content="Mohamed Magan is Creative developer & UX designer based in Calgary, Canada"
              />
              <link rel="canonical" href="https://www.momagan.com/" />
            </Helmet>
            <Layout>
              <Header toggleSidebar={toggleSidebar} />
              <Gallery toggleSidebar={toggleSidebar} />
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
