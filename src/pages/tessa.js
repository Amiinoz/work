/* eslint-disable spaced-comment */
import React, { useEffect, useState } from 'react';
import {
  motion,
  useTransform,
  useViewportScroll,
  useAnimation,
} from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import ScrollForMore from '../components/scrollForMore';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import PageGuides from '../components/page-guides/page-guides';
import User from '../assets/tessa/tessa_user-journey--map.png';
import User1 from '../assets/tessa/tessa_user-story--1.png';
import User2 from '../assets/tessa/tessa_user-story--2.png';
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
import tessaBanner from '../assets/tessa/tessa_banner.png';

import '../styles/components/uxprojects.scss';
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

  return (
    <>
      <Helmet>
        <title> Tessa | Mo Magan Portfolio </title>
        <meta
          name="description"
          content="Tessa is User Experience case study for local shoe business"
        />
      </Helmet>
      <Layout>
        <motion.div
          onAnimationComplete={() => setCanScroll(true)}
          initial="initial"
          animate="animate"
          exit="exit"
          className="proj proj-cont"
        >
          <div className="container">
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
                    <motion.span variants={letter}>Tessa</motion.span>
                  </motion.span>
                </motion.div>
              </div>
            </div>

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
                        src={tessaBanner}
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

                <div className="flex_info_item">
                  <ul className="explanation"></ul>
                </div>
              </section>
              <div>
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
                    <img src={User1} />
                  </div>
                </section>
                <br />

                <section id="cap">
                  <div className="flex_01">
                    <img src={User2} />
                  </div>
                </section>
                <br />
                <br />
                <br />
                <br />
                <section id="cap">
                  <div className="flex_03">
                    <img src={User} />
                  </div>
                </section>

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
                          <a className="link" style={{ color: 'white' }}>
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

                <section id="info" className="flex_info">
                  <h1>
                    Thank <br />
                    you{' '}
                  </h1>
                  <h3>
                    for taking the time <br />
                    to read Tessa case study{' '}
                  </h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>You may check out some of my other projects below</li>
                    </ul>
                  </div>
                </section>
              </div>
              <PageGuides nextProject="./posty" />
            </main>
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default Tessa;
