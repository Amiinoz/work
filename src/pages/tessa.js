/* eslint-disable spaced-comment */
import React, { useEffect, useState, useRef } from 'react';
import {
  motion,
  useTransform,
  useViewportScroll,
  useAnimation,
} from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import ScrollForMore from '../components/scrollForMore';
import useWindowSize from '../components/useWindowSize';

import Layout from '../components/Layout';

import PageGuides from '../components/page-guides/page-guides';
import User from '../assets/tessa/tessa_user-journey.png';
import ComAud from '../assets/tessa/tessa_com-audit.png';
import SiteMap from '../assets/tessa/tessa_siteMap.png';
import PaperWireframe1 from '../assets/tessa/tessa_paper-wf1.png';
import PaperWireframe2 from '../assets/tessa/tessa_paper-wf2.png';

import DigitlaWirefame1 from '../assets/tessa/tessa_digital-wf1.png';
import DigitlaWirefame2 from '../assets/tessa/tessa_digital-wf2.png';

import LowFiProto from '../assets/tessa/tessa_low-fi.png';
import UsabilityStdy from '../assets/tessa/tessa_usability-study.png';
import RefineDes1 from '../assets/tessa/tessa_refine-design1.png';
import RefineDes2 from '../assets/tessa/tessa_refine-design2.png';
import MockUp1 from '../assets/tessa/tessa_mockup-1.png';
import MockUp2 from '../assets/tessa/tessa_mockup-2.png';

import '../styles/components/projects-template.scss';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Tessa = ({ title, mainImage, images, columnOffset, nextProject }) => {
  const dimensions = {
    width: 524,
    height: 650,
  };

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector('body').classList.add('no-scroll');
    } else {
      document.querySelector('body').classList.remove('no-scroll');
    }
  }, [canScroll]);

  const animation = useAnimation();
  // eslint-disable-next-line no-unused-vars
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  //smooth scrolling with skew
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  // const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Run scroll render once page is loaded.
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
    const skew = velocity * 0.4;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };
  return (
    <>
      <Layout>
        <motion.div
          onAnimationComplete={() => setCanScroll(true)}
          initial="initial"
          animate="animate"
          exit="exit"
          className="proj"
        >
          <div className="container" ref={scrollContainer}>
            {/* ////////////////////////////////////////// */}
            {/* // Title  */}
            <div className="row center top-row">
              <div className="top">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.02, ...transition },
                  }}
                  className="details"
                />
                <motion.div className="proj-container">
                  <motion.span className="title">
                    <motion.span variants={letter}>Posty</motion.span>
                  </motion.span>
                </motion.div>
              </div>
            </div>

            {/* ////////////////////////////////////////// */}
            {/* // Image  */}
            {/* // Image  */}
            <div className="row bottom-row">
              <div className="bottom">
                <div className="image-container-single">
                  <motion.div
                    initial={{
                      y: 0,
                      x: '-47%',
                      dimensions: { dimensions },
                    }}
                    animate={{
                      y: 0,
                      x: 0,
                      width: '100%',

                      height:
                        window.imageDetails > 1440
                          ? 800
                          : 400 || window.imageDetails > 786
                          ? 400
                          : 200,
                      transition: { delay: 0.2, ...transition },
                    }}
                    className="thumbnail-single"
                  >
                    <motion.div
                      className="frame-single"
                      whileHover="hover"
                      transition={transition}
                    >
                      <motion.img
                        src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="an image"
                        transition={transition}
                        style={{ scale }}
                        borderRadius="40"
                        animate={{
                          transition: { delay: 0.5, ...transition },
                          y: window.imageDetails > 1440 ? -800 : -400,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <ScrollForMore />
              </div>
            </div>

            {/* ////////////////////////////////////////// */}
            {/* // Info  */}
            <main className="contents-detail">
              <section id="info" className="flex_info">
                <h1>Project Overview </h1>
                <div className="flex_info_item">
                  <ul className="year">
                    <li>PRODUCT</li>
                    <li>
                      Design web app for existing shoe store, the store’s goal
                      is to offers stylish quality made shoes for all ages in
                      affordable price. The target user is between 15 to 45
                      years old.
                    </li>
                  </ul>
                  <ul className="year">
                    <li>PRODUCT DURATION</li>
                    <li>September 2022 </li>
                  </ul>
                  <ul className="year">
                    <li>THE PROBLEM</li>
                    <li>
                      Despite the business good reputation and loyal local
                      customers, it does not exist online and loses valuable
                      sales.
                    </li>
                  </ul>
                </div>
                <div className="flex_info_item">
                  <ul className="role">
                    <li>MY ROLE</li>
                    <li>UX designer, UX researcher.</li>
                  </ul>
                  <ul className="role">
                    <li>RESPONSIBILITIES</li>
                    <li>
                      Conducting interviews, paper and digital wire-framing, low
                      and high-fidelity prototyping, conducting usability
                      studies, accounting for accessibility, and iterating on
                      designs.
                    </li>
                  </ul>
                  <ul className="role">
                    <li>THE GOAL</li>
                    <li>
                      What can we do to establish an online presence, attract
                      new users, and increase revenue
                    </li>
                  </ul>
                </div>
                {/* <div className="flex_info_item ">
                  <img src="../assets/img/001_posty/project_overview.webp" />
                </div> */}
                <div className="flex_info_item">
                  <ul className="explanation"></ul>
                </div>
              </section>
              <div>
                {/* ================================================
        =========== // understanding  the user
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>
                    Understanding <br /> the User{' '}
                  </h1>
                  <h3>
                    User research <br /> Personas <br /> Problem Statement{' '}
                    <br />
                    User journey
                  </h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>USER RESEARCH SUMMARY</li>
                      <li>
                        As part of my research, I conducted nine interviews with
                        users who like to shop online and buy shoes. The main
                        objective was to discover user needs that were not being
                        met by existing online shoe stores. As a result, I have
                        learned that quality and the user experience journey are
                        not prioritized.
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={User} />
                  </div>
                </section>
                <br />
                <br />
                <br />
                <section id="cap">
                  <div className="flex_01">
                    <img src={ComAud} />
                  </div>
                </section>
                {/* ================================================
                        =========== // Sitemap
                        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>
                    Sitemap <br />
                  </h1>
                  <h3></h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>SITEMAP</li>
                      <li>
                        Navigation and product and promotion ads were the most
                        common challenges experienced by e-commerce users.
                        Creating a really easy-to-navigate structure and
                        reducing clutter and adds was my goal.
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={SiteMap} />
                  </div>
                </section>

                {/* ================================================
                        =========== // Starting the design
                        ================================================  */}
                <section id="cap"></section>
                <section id="info" className="flex_info">
                  <h1>
                    Starting <br /> the designing
                  </h1>
                  <h3>
                    Paper wire-frames <br /> Paper screen size variation(s){' '}
                    <br /> Digital screen size variation(s) <br /> Low fidelity
                    prototypes <br />
                    Usability study
                  </h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>PAPER WIREFRAMES</li>
                      <li>
                        In five different versions, I sketched paper wire frames
                        for my main pages and selected one section based on the
                        user journeys and pain points. The user has limited time
                        before he or she loses interest in the site, so this in
                        this example the primary landing page variations.
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={PaperWireframe2} />
                  </div>
                </section>

                <section id="info" className="flex_info">
                  <h1>
                    Starting <br /> the designing
                  </h1>
                  <h3>Paper wireframe screen size variation(s)</h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>PAPER WIREFRAMES</li>
                      <li>
                        Since 80% of e-commerce sites cater to small devices, my
                        plan was to create a site that could be accessed from
                        any device.
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={PaperWireframe1} />
                  </div>
                </section>

                {/* Digital wireframes  */}
                <section id="info" className="flex_info">
                  <h1>
                    Starting <br /> the designing
                  </h1>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>DIGITAL WIREFRAMES</li>
                      <li>The goal is always to address users pain points</li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={DigitlaWirefame1} />
                  </div>
                </section>

                <section id="info" className="flex_info">
                  <h1>
                    Starting <br /> the designing
                  </h1>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>DIGITAL WIREFRAMES SCREEN SIZE VARIATION(S)</li>
                      <li>The goal is always to address users pain points</li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={DigitlaWirefame2} />
                  </div>
                </section>

                <section id="info" className="flex_info">
                  <h1>
                    Starting <br /> the designing
                  </h1>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>LOW FIDELITY PROTOTYPES</li>
                      <li>
                        A prototype will be created based on a user flow where
                        the user searches for shoes, selects the color, size,
                        and orders the shoes based on the information provided.
                        <br />
                        <h3>
                          {' '}
                          <br />
                          <br />
                          <a
                            className="link"
                            style={{ color: 'white' }}
                            href="https://www.figma.com/file/VlLk05t7vJU3gVHsd3yETs/Posty-Digital_Wireframes?node-id=0%3A1"
                          >
                            Link to prototypes
                          </a>{' '}
                          <br /> <br />
                        </h3>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={LowFiProto} />
                  </div>
                </section>
                <section id="info" className="flex_info">
                  <h1>
                    Starting <br /> the designing
                  </h1>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>USABILITY STUDY FINDINGS</li>
                      <li></li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={UsabilityStdy} />
                  </div>
                </section>
                {/* ================================================
        =========== // Refining the design based on research
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>
                    Refining <br />
                    the design <br /> based on research
                  </h1>
                  <h3>Before and afters</h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>Mockups</li>
                      <li>
                        One of the user insights was that buttons to choose size
                        and color did not work, and my goal was to fix that by
                        making it easy to do so.
                        <br />
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={RefineDes1} />
                  </div>
                </section>
                <br />
                <br />
                <section id="cap">
                  <div className="flex_01">
                    <img src={RefineDes2} />
                  </div>
                </section>

                {/* ================================================
        =========== // mockups
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>
                    Mockups <br />
                    design{' '}
                  </h1>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>HIGH FIDELITY MOCK UPS</li>
                      <li></li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={MockUp1} />
                  </div>
                </section>
                <br />
                <br />
                <br />
                <section id="cap">
                  <div className="flex_01">
                    <img src={MockUp2} />
                  </div>
                </section>

                {/* ================================================
        =========== // Accessability consideration
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>Accessability </h1>
                  <h3>Considerations </h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>ONE</li>
                      <li>
                        I used large check boxes to choose colors and sizes
                      </li>
                    </ul>
                    <ul className="year">
                      <li>TWO</li>
                      <li>Navigating the site is easy and clean</li>
                    </ul>
                    <ul className="year">
                      <li>THREE</li>
                      <li>easy to follow call-to-action buttons</li>
                    </ul>
                  </div>
                </section>
                {/* ================================================
        =========== // Take away
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>Takeaways</h1>
                  <h3>Considerations </h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>IMPACT</li>
                      <li>
                        Users shared that the design was minimal and clear, and
                        it was easy to navigate
                      </li>
                    </ul>
                    <ul className="year">
                      <li>WHAT I LEARNED</li>
                      <li>
                        What I learned from this research and usability test is
                        that shopping can be fun if we place the user in the
                        center of everything we do.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ================================================
        =========== // Next steps
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>
                    Next <br />
                    Steps{' '}
                  </h1>
                  <h3>Considerations </h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>ONE</li>
                      <li>Conduct another usability testing</li>
                    </ul>
                    <ul className="year">
                      <li>TWO</li>
                      <li>See if everything from client needs have been met</li>
                    </ul>
                    <ul className="year">
                      <li>THREE</li>
                      <li>Full stack development</li>
                    </ul>
                  </div>
                </section>
              </div>
              <PageGuides nextProject="./posty" />
            </main>
          </div>
        </motion.div>

        {/* //////////////////////////////    page guides   //
         /////////////// */}
      </Layout>
    </>
  );
};

export default Tessa;
