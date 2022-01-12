/* eslint-disable spaced-comment */
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useWindowSize from '../useWindowSize';
import './short-project-template.scss';
// import PageGuides from '../../components/page-guides/page-guides';
import Layout from '../Layout';
import ScrollForMore from '../scrollForMore';
import ProjectsButton from '../../components/work-button/work-button';

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
  button1,
  ProjectInfoIcon,
  ProjectInfoBody,
  ProjectInfoImage,
  ProjectContentTitle,
  ProjectContentSubTitle,
  ProjectContentBody,
  ProjectContentFooter,
}) => {
  // Hook

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
      <Layout>
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
                    {Title}
                    <br />
                    {Subtitle}
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
                <ScrollForMore />
              </motion.div>
            </motion.div>

            <div className="mos-info">
              <div className="mos-info_icon">
                <img src={ProjectInfoIcon} alt="mosdev icon" data-scroll />
              </div>
              <div className="mos-info_body">
                <h4>{ProjectInfoBody}</h4>
              </div>
              <div className="mos-info_button">
                <button>{button1}</button>
              </div>
            </div>

            <div className="mos-content">
              <div className="mos-content_image">
                <img src={ProjectInfoImage} />
              </div>
              <div className="mos-content_text">
                <h2 className="item__content-title">{ProjectContentTitle}</h2>

                <h3 className="item__content-subtitle">
                  {ProjectContentSubTitle}
                </h3>

                <div className="item__content-text">
                  <p>{ProjectContentBody}</p>

                  <p>{ProjectContentFooter}</p>
                </div>
              </div>
            </div>
          </motion.section>
          <ProjectsButton />
        </motion.div>
        {/* <PageGuides nextProject="./Weather" /> */}
      </Layout>
    </>
  );
};

export default ShortProjectTemplate;
