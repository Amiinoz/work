/* eslint-disable spaced-comment */
import React, { useEffect, useState } from 'react';
import {
  motion,
  useTransform,
  useViewportScroll,
  useAnimation,
} from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import Layout from '../components/Layout';
import PageGuides from '../components/page-guides/page-guides';
import User from '../assets/oneup/oneup-user_story.png';
import UserInterview from '../assets/oneup/oneup-user_interview.png';

import DigitlaWirefame1 from '../assets/oneup/digital-wireframes-1.png';
import DigitlaWirefame2 from '../assets/oneup/digital-wireframes-2.png';

import DigitlaWirefame3 from '../assets/oneup/digital-wireframes-3.png';

import LowFiProto from '../assets/oneup/oneup_lowFi-proto.svg';
import UsabilityStdy1 from '../assets/oneup/oneup_usablity-para.png';
import UsabilityStdy2 from '../assets/oneup/oneup_usability-find.png';
import RefineDes1 from '../assets/oneup/oneup_refine-1.png';
import MockUp from '../assets/oneup/oneup_mockup1.png';
import Sitemap from '../assets/oneup/oneup_sitemap.svg';
import StickerSheet from '../assets/oneup/Sticker-sheet.png';
import ComAudit from '../assets/oneup/oneup-com_anly.png';
import Painpoints from '../assets/oneup/onup-painpoints.png';

import Ideation from '../assets/oneup/oneup_paper-wireframes.svg';
import UserJourney from '../assets/oneup/oneup_user-journey.png';
import ResDesign from '../assets/oneup/oneup_respponsive.webp';
import Banner from '../assets/oneup/oneup_banner.png';
import { Helmet } from 'react-helmet';
import ScrollForMore from '../components/scrollForMore.js';
import Solution1 from '../assets/oneup/oneup_solution1.png';
import Solution2 from '../assets/oneup/oneup_solution2.png';
import Solution3 from '../assets/oneup/oneup_solution3.png';

import '../styles/components/uxprojects.scss';

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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

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
      <Layout>
        <Helmet>
          <title> OneUP | Mo Magan Portfolio</title>
          <meta
            name="description"
            content="OneUp is Google design challenge app that matches Mentors to inner-city youth"
          />
        </Helmet>
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
                  <motion.span className="title title-name">
                    <motion.span variants={letter}>OneUP</motion.span>
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
                          ? 1440
                          : 800 || window.imageDetails > 786
                          ? 800
                          : 400,
                      transition: { delay: 0.2, ...transition },
                    }}
                    className="thumbnail-single"
                    alt="Project banner"
                  >
                    <motion.div
                      className="frame-single"
                      whileHover="hover"
                      transition={transition}
                    >
                      <motion.img
                        src={Banner}
                        alt="OneUp Project banner"
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

            <div className="contents-detail">
              <section id="info" className="flex_info">
                <h1> OVERVIEW </h1>
                <div className="flex_info_item">
                  <ul className="year">
                    <li>TIMELINE</li>
                    <li>August 2022 - September 2022</li>
                  </ul>
                </div>
                <div className="flex_info_item">
                  <ul className="role">
                    <li>MY ROLE</li>
                    <li>Google non-profit Ux design challenge for students</li>
                  </ul>
                </div>

                <div className="flex_info_item">
                  <ul className="explanation"></ul>
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1>THE PROBLEM </h1>
                <div className="flex_info_item">
                  <ul className="year">
                    <li></li>
                    <li>
                      inner-city kids often struggle to balance their personal
                      lives and education due to various challenges such as lack
                      of resources, limited access to academic support, and
                      exposure to negative social influences.
                    </li>
                  </ul>
                </div>
                <div className="flex_info_item">
                  <ul className="role">
                    <li>
                      This leads to a high dropout rate, poor academic
                      performance, and limited future opportunities
                    </li>
                    <li>
                      As a result, there is a pressing need to address this
                      issue and design solutions that can help these students
                      effectively manage their time and resources to achieve
                      academic success while also addressing their personal
                      needs and challenge
                    </li>
                  </ul>
                </div>

                <div className="flex_info_item">
                  <ul className="explanation"></ul>
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1>THE SOLUTION </h1>
                <div className="flex_info_item">
                  <ul className="year">
                    <li>
                      A potential solution to help inner-city kids balance their
                      life and education is to develop a comprehensive digital
                      platform that provides personalized resources and support.
                    </li>
                    <li></li>
                  </ul>
                </div>
                <div className="flex_info_item">
                  <ul className="role">
                    <li></li>
                    <li>
                      This platform would address the specific challenges faced
                      by these students and help them navigate their academic
                      and personal lives.
                    </li>
                  </ul>
                </div>
              </section>

              <section id="cap">
                <div className="flex_01">
                  <img src={Solution1} />
                </div>
              </section>
              <section id="cap">
                <div className="flex_01">
                  <img src={Solution2} />
                </div>
              </section>
              <section id="cap">
                <div className="flex_01">
                  <img src={Solution3} />
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
                      These research questions would help gather insights from
                      inner-city kids about their current experiences,
                      challenges, and needs in balancing their academic and
                      personal lives. The findings would inform the design and
                      development of a digital platform that effectively
                      addresses their unique requirements and helps them achieve
                      academic success while navigating their personal
                      circumstances.
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={UserInterview} />
                  </div>
                </section>
                <section id="cap">
                  <h3>USER RESEARCH SUMMARY</h3>
                  <p>
                    A primary user group identified through research is young
                    teens who struggle to navigate Canadian education system and
                    their needs. The study confirmed initial assumptions about
                    ideal users, but also revealed that a number of factors
                    preventing users from navigating the educational system and
                    succeeding, including socioeconomic, institutions,
                    environment, racism, and a lack of communication between
                    parents and children.
                  </p>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={User} />
                  </div>
                </section>

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
                <section id="cap">
                  <div className="flex_01">
                    <img src={Painpoints} />
                  </div>
                </section>

                <section id="info" className="flex_info">
                  <h1>Ideation</h1>
                  <h3>INITIAL SKETCHES</h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>
                        From the beginning, my sketching goals were to place the
                        user at the center of everything the app does
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={Ideation} />
                  </div>
                </section>

                <section id="info" className="flex_info">
                  <h1>User</h1>
                  <h3>Zaks journey</h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>UNDERSTANDING THE USER</li>
                    </ul>
                  </div>
                </section>
                <br />
                <br />
                <section id="cap">
                  <div className="flex_01">
                    <img src={UserJourney} />
                  </div>
                </section>

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
                  <div className="flex_01">
                    <img src={DigitlaWirefame2} />
                  </div>
                  <div className="flex_01">
                    <img src={DigitlaWirefame3} />
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
                    Sticker sheet <br />{' '}
                  </h1>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>STYYLE GUIDE</li>
                      <li></li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={StickerSheet} />
                  </div>
                </section>

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

                <section id="info" className="flex_info">
                  <h1>
                    Thank <br />
                    you{' '}
                  </h1>
                  <h3>
                    for taking the time <br /> to read OneUp case study{' '}
                  </h3>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>You may check out some of my other projects below</li>
                    </ul>
                  </div>
                </section>
              </div>
              <PageGuides nextProject="./tessa" />
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default OneUp;
