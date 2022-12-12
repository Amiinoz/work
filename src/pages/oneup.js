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
import User from '../assets/oneup/user_story.png';
import DigitlaWirefame1 from '../assets/oneup/oneup_wireframes-1.png';
import LowFiProto from '../assets/oneup/oneup_lowFi-proto.png';
import UsabilityStdy1 from '../assets/oneup/oneup_usablity-para.png';
import UsabilityStdy2 from '../assets/oneup/oneup_usability-find.png';

import RefineDes1 from '../assets/oneup/oneup_refine-1.png';
import MockUp from '../assets/oneup/oneup_mockup1.webp';
import Sitemap from '../assets/oneup/oneup_sitemap.png';

import HfProto from '../assets/oneup/oneup_hiFi-proto.webp';
import ComAudit from '../assets/oneup/oneup-comm.png';
import Ideation from '../assets/oneup/oneup_paper-wireframes.png';
import UserJourney from '../assets/oneup/oneup_user-journey.png';
import ResDesign from '../assets/oneup/oneup_respponsive.webp';
import Banner from '../assets/oneup/oneup_banner.png';

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

const OneUp = ({ title, mainImage, images, columnOffset, nextProject }) => {
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
                    <motion.span variants={letter}>OneUP</motion.span>
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
                      x: '-110%',
                      dimensions: { dimensions },
                    }}
                    animate={{
                      y: 0,
                      x: 0,
                      width: '100%',

                      height:
                        window.imageDetails > 1440
                          ? 1440
                          : 800 || window.imageDetails > 786
                          ? 800
                          : 400,
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
                        src={Banner}
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
                      I amm creating an app to help inner-city teens who
                      struggle to balance school their environment and family
                      dynamics connect with mentors who have once been in their
                      shoes.
                    </li>
                  </ul>
                  <ul className="year">
                    <li>PRODUCT DURATION</li>
                    <li>September 22</li>
                  </ul>
                  <ul className="year">
                    <li>THE PROBLEM</li>
                    <li>
                      Inner-city youth find it difficult to navigate the
                      Canadian education system as well as their environment and
                      parents who are unreachable.
                    </li>
                  </ul>
                </div>
                <div className="flex_info_item">
                  <ul className="role">
                    <li>MY ROLE</li>
                    <li>
                      UX designer designing an app from conception to delivery
                    </li>
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
                      By connecting and receiving guidance and mentorship from
                      University students who have once walked in their shoes,
                      disadvantaged youth may benefit from my app.
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
                        A primary user group identified through research is
                        young black teens who struggle to navigate Canadian
                        education system and their needs. The study confirmed
                        initial assumptions about ideal users, but also revealed
                        that a number of factors preventing users from
                        navigating the educational system and succeeding,
                        including socioeconomic, institutions, environment,
                        racism, and a lack of communication between parents and
                        children.
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={User} />
                  </div>
                </section>

                {/* ================================================
        =========== // Competitive audit
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>
                    Competitive
                    <br /> audit{' '}
                  </h1>
                  <h3>Analysis</h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>SUMMARY</li>
                      <li>
                        I researched a few companies were done, however not much
                        was learned as most of these companies are for-profit
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={ComAudit} />
                  </div>
                </section>

                {/* ================================================
        =========== // Ideation
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>Ideation</h1>
                  <h3>Crazy 8 Design</h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>INITIAL SKETCHES</li>
                      <li>
                        From the beginning, my sketching goals were to place the
                        user at the center of everything the app does
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={Ideation} />
                  </div>
                </section>
                {/* ================================================
        =========== // User journey
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>User</h1>
                  <h3>Zaks journey</h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>UNDERSTANDING THE USER</li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={UserJourney} />
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
                    Digital wire-frames <br /> Low fidelity prototypes <br />
                    Usability study
                  </h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>DIGITAL WIREFRAMES</li>
                      <li>
                        As a result of the ideation process, I have created
                        initial designs for the OneUp app, with the focus on
                        providing an easy method for finding and booking mentors
                      </li>
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
                      <li>LOW FIDELITY PROTOTYPES</li>
                      <li>
                        I developed a low-fidelity prototype based on the
                        digital wireframes. I connected social media accounts
                        and set up a Pomodoro timer as the primary user flow.
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
                    {/* <img src='../assets/posty/low-fi-prototype.svg'> */}
                  </div>
                </section>
                <section id="info" className="flex_info">
                  <h1>
                    Starting <br /> the designing
                  </h1>
                  <h3>
                    Usability study: parameters <br /> Usability study: findings
                  </h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>USABILITY STUDY FINDINGS</li>
                      <li></li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={UsabilityStdy1} />
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={UsabilityStdy2} />
                  </div>
                </section>
                {/* ================================================
        =========== // Refining the design based on research
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>
                    Refining <br />
                    the design
                  </h1>
                  <h3>
                    Mockups <br />
                    High-fidelity prototype
                    <br />
                    Accessibility
                  </h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>BEFORE AND AFTERS</li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={RefineDes1} />
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
                    <img src={MockUp} />
                  </div>
                </section>
                <section id="info" className="flex_info">
                  <h1>
                    High fidelity <br />
                    Wireframes{' '}
                  </h1>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>HIGH FIDELITY WIRE-FRAMES</li>
                      <li></li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={HfProto} />
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
                        The first accessibility consideration would be a voice
                        to text search
                      </li>
                    </ul>
                    <ul className="year">
                      <li>TWO</li>
                      <li>
                        Next accessibility consideration for OneUp app would be
                        larger fonts
                      </li>
                    </ul>
                    <ul className="year">
                      <li>THREE</li>
                      <li>Night mode for users with sensitive eyes</li>
                    </ul>
                  </div>
                </section>
                {/* ================================================
        =========== // Responsive Design
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>
                    Responsive Design
                    <br />{' '}
                  </h1>
                  <h3>
                    Information architecture <br /> Responsive design
                  </h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>SITEMAP</li>
                      <li>
                        The sitemap is meant to organize a table of contents for
                        the website, which is important to the credibility and
                        SEO of the website.
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={Sitemap} />
                  </div>
                </section>
                <section id="info" className="flex_info">
                  <h1>
                    Responsive Design
                    <br />{' '}
                  </h1>
                  <h3>
                    Information architecture <br /> Responsive design
                  </h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>WEBSITE</li>
                      <li>
                        The app will be used for mentor connections and the
                        complementary website will provide educational and
                        additional resources.{' '}
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={ResDesign} />
                  </div>
                </section>
                {/* ================================================
        =========== // Going forward
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>
                    Going <br />
                    forward{' '}
                  </h1>
                  <h3>Takeaways </h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>IMPACT</li>
                      <li>
                        Users expressed that the app can be very helpful since
                        the mentors are from their community and they can relate
                      </li>
                    </ul>
                    <ul className="year">
                      <li>WHAT I LEARNED</li>
                      <li>
                        What I learned trying to solve the challenges inner-city
                        youth face in their daily life is huge and can not be
                        solved by one app, however, matching mentors with youth
                        could be a tremendous help.
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
                      <li>
                        Present my solution to the community youth leaders and
                        get their input,
                      </li>
                    </ul>
                    <ul className="year">
                      <li>TWO</li>
                      <li>But a team of developers develops the app itself</li>
                    </ul>
                    <ul className="year">
                      <li>THREE</li>
                      <li>
                        Perform two additional usability tests with community
                        input
                      </li>
                    </ul>
                  </div>
                </section>
                {/* ================================================
        =========== // Thank you
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>
                    Thank <br />
                    you{' '}
                  </h1>
                  <h3>for taking the time to read OneUp case study </h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>You may check out some of my other projects below</li>
                    </ul>
                  </div>
                </section>
              </div>
              <PageGuides nextProject="./tessa" />
            </main>
          </div>
        </motion.div>

        {/* //////////////////////////////    page guides   //
         /////////////// */}
      </Layout>
    </>
  );
};

export default OneUp;
