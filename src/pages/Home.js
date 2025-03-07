import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
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
import IntroOverlay from '../components/intro-overlay';

const tl = gsap.timeline();

const homeAnimation = completeAnimation => {
  tl.from('.line span', 1.8, {
    y: 100,
    ease: 'power4.out',
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4,
    })
    .to('.overlay-bottom', 1.6, {
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to('.intro-overlay', 0, {
      css: { display: 'none' },
    })
    .from('.gallery-item-image', 1.6, {
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

const Home = ({
  dimensions = { width: window.innerWidth, height: window.innerHeight },
}) => {
  // State management
  const [animationComplete, setAnimationComplete] = useState(false);
  const [preloader, setPreload] = useState(true);
  const [timer, setTimer] = useState(1);

  // Refs
  const ref = useRef(null);
  const intervalId = useRef(null);

  // Custom hooks
  useLocoScroll(!preloader);

  // Animation completion handler
  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  // Clear preloader timer
  const clearPreloader = () => {
    window.clearInterval(intervalId.current);
    setPreload(false);
  };

  // Initialize animation
  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  // Handle viewport height
  useEffect(() => {
    if (dimensions && dimensions.height) {
      const vh = dimensions.height * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }, [dimensions && dimensions.width]);

  // Initialize preloader timer
  useEffect(() => {
    intervalId.current = window.setInterval(() => {
      setTimer(time => time - 1);
    }, 1000);

    return () => clearPreloader();
  }, []);

  // Clear preloader when timer reaches 0
  useEffect(() => {
    if (timer === 0) {
      clearPreloader();
    }
  }, [timer]);

  // Handle scroll initialization after preloader
  useEffect(() => {
    if (!preloader && ref && typeof window !== 'undefined' && window.document) {
      // Scroll initialization logic can go here if needed
    }
  }, [preloader]);

  // SSR safety check
  if (typeof window === 'undefined' || !window.document) {
    return null;
  }

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
          {animationComplete === false && <IntroOverlay />}
          <div className="section">
            <Helmet>
              <title> Home | Mo Magan | Portfolio </title>
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
