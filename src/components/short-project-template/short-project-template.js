/* eslint-disable spaced-comment */
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useWindowSize from '../useWindowSize';
import './short-project-template.scss';
import MosImage from '../../assets/mosdev/mozdev.jpg';
import ProjectInfoIcon from '../../assets/mosdev/icon.webp';
import PageGuides from '../../components/page-guides/page-guides';
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const ShortProjectTemplate = ({
  Title,
  Subtitle,
  BannerImage,
  infoHeadingImage,
  infoHeading,
  viewCode,
  viewLive,
  button1,
  button2,
  infoImage,
  ProjectHeading,
  projInfo,
  projInfoBy,
  Images1,
  LanguageHeader,
  Images1Header,
  Images2,
  Images2Header,
  Images3Header,
  Images3,
  ImagesMockHeader,
  ImagesMock,
}) => {
  // Hook

  // const dimensions = {
  //   width: 1400,
  //   height: 800,
  // };

  const animation = useAnimation();
  const [inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const short = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 0.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <>
      <motion.div className="short" ref={short} data-scroll-section>
        <motion.section className="mosdev-container" ref={scrollContainer}>
          <motion.div className="banner">
            <motion.div
              className="banner-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, ...transition },
              }}
            >
              <motion.span variants={firstName}>
                <motion.span>
                  MosDev
                  <br />
                  VsCode Theme
                </motion.span>
              </motion.span>
            </motion.div>

            <motion.div className="banner-image">
              <motion.img
                alt="an image"
                transition={transition}
                borderRadius="40"
                animate={{
                  transition: { delay: 0.6, ...transition },

                  x: window.imageDetails > 1400 ? -800 : -400,
                }}
                src={BannerImage}
              />
            </motion.div>

            <motion.div
              className="scroll"
              initial={{ opacity: 0, y: 80 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.7, ...transition },
              }}
            >
              <h3>Scroll</h3>
            </motion.div>
          </motion.div>

          {/* /////////// info */}
          {/* TODO: */}

          <div className="mos-info">
            <div className="mos-info_icon">
              <img src={ProjectInfoIcon} alt="mosdev icon" data-scroll />
            </div>
            <div className="mos-info_body">
              <h4>
                MosDev Is VsCode dark theme based on Monokai theme colours and
                inspired by this artwork of my fave raper
              </h4>
            </div>
            <div className="mos-info_button">
              <button>{button1}</button>
            </div>
          </div>
          {/* /////////// info */}

          {/* /////////// content */}
          <div className="mos-content">
            <div className="mos-content_image">
              <img src={MosImage} />
            </div>
            <div className="mos-content_text">
              <h2 className="item__content-title">MosDev</h2>
              <h3 className="item__content-subtitle">A dark VsCode theme</h3>
              <div className="item__content-text">
                <p>
                  The inspiration for this theme. Yasin Bay aka Mos Def aka
                  Yasin is an American rapper, singer, songwriter, and actor
                  with classic albums like Black on both sides, Black star, and
                  The Ecstatic in his resume.
                </p>
                <p>Art work by Kamoni Khem</p>
              </div>
            </div>
          </div>
          {/* /////////// content */}
        </motion.section>
      </motion.div>
      <PageGuides nextProject="./Weather" />
    </>
  );
};

export default ShortProjectTemplate;
