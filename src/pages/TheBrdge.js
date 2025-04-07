/* eslint-disable spaced-comment */
import React, { useEffect, useState } from 'react';
import {
  motion,
  useTransform,
  useViewportScroll,
  useAnimation,
} from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import Layout from '../components/Layout.js';
import PageGuides from '../components/page-guides/page-guides.js';

import Banner from '../assets/theBrdge/thebridge-banner.png';
import { Helmet } from 'react-helmet';
import ScrollForMore from '../components/scrollForMore.js';
import Solution1 from '../assets/theBrdge/thebrdge-banner2.png';
import Findings from '../assets/theBrdge/thebrdge-findings.png';
import Recommendations from '../assets/theBrdge/thebrdge-recommendations.png';

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

const TheBrdge = ({ title, mainImage, images, columnOffset, nextProject }) => {
  const dimensions = {
    width: 1200,
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
          <title> Enhancing the User Experience for The BRDGE</title>
          <meta name="description" content="An Accessibility-Focus Ux Study" />
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
                    <motion.span variants={letter}>TheBrdge</motion.span>
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
                        alt="DigitalDivide Project banner"
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
                    <li>8 weeks</li>
                  </ul>
                </div>
                <div className="flex_info_item">
                  <ul className="role">
                    <li>MY ROLE | TEAM</li>
                    <li>UX Developer | IncluCity </li>
                  </ul>
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1> </h1>
                <div className="flex_info_item">
                  <ul className="year">
                    <li>TOOLS</li>
                    <li>
                      Figma, Axure RP, NVDA, JAWS, VoiceOver, WCAG 2.1
                      guidelines
                    </li>
                  </ul>
                </div>
                <div className="flex_info_item">
                  <ul className="role">
                    <li>CLIENT | INDUSTRY</li>
                    <li> TheBrdge | Service </li>
                  </ul>
                </div>
              </section>

              <section id="info" className="flex_info">
                <h1>Project Overview</h1>
                <div className="flex_info_item">
                  <ul className="year">
                    <li></li>
                    <li>
                      The BRDGE is a Calgary-based platform connecting customers
                      with authentic, home-style meals from local caterers and
                      chefs. It empowers chefs from diverse backgrounds by
                      handling marketing, logistics, and operations, allowing
                      them to focus on cooking. The platform aims to deliver
                      high-quality, affordable meals while fostering cultural
                      diversity in the food industry.
                    </li>
                  </ul>
                </div>
                <div className="flex_info_item">
                  <ul className="role">
                    <li>
                      <li>
                        <h3>Objective</h3>
                        The primary goal of this UX research project was to
                        identify usability barriers within the ordering process
                        on The BRDGE&apos; s website and provide actionable
                        recommendations to enhance user experience. The study
                        also aimed to understand users&apos; perceptions of the
                        platform and its services while ensuring accessibility
                        for a diverse audience.
                      </li>
                    </li>
                  </ul>
                </div>

                <div className="flex_info_item">
                  <ul className="explanation"></ul>
                </div>
              </section>

              <section id="info" className="flex_info">
                <h1> </h1>
                <div className="flex_info_item">
                  <ul className="year">
                    <li></li>
                  </ul>
                </div>
                <div className="flex_info_item">
                  <ul className="role">
                    <li></li>
                  </ul>
                </div>
              </section>
              <section id="cap">
                <div className="flex_01">
                  <img src={Solution1} />
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1> Research Methodology </h1>
                <div className="flex_info_item">
                  <ul className="year">
                    <li>Testing Scope</li>
                  </ul>
                </div>
                <div className="flex_info_item">
                  <ul className="role">
                    <li>
                      <h3>Focus Areas</h3>
                      Accessibility assessment, usability testing, and heuristic
                      analysis.
                    </li>
                    <li>
                      <h3>Objectives</h3>

                      <li>
                        Improve the ordering process by identifying barriers.
                      </li>
                      <li>Understand user perceptions of the service.</li>
                      <li>
                        Locate usability issues in the registration process.
                      </li>
                    </li>
                  </ul>
                </div>

                <div className="flex_info_item">
                  <ul className="explanation"></ul>
                </div>
              </section>

              <section id="info" className="flex_info"></section>

              <section id="info" className="flex_info">
                <h1>Participants</h1>
                <p>Demographics & Ordering Habits</p>
                <div className="flex_info_item">
                  <ul className="year">
                    <h3>7 participants</h3>
                    from diverse ethnocultural backgrounds (e.g., Nigerian,
                    Slovenian-Ukrainian, Chinese-Canadian). Varied demographics:
                    newcomers to Canada, individuals over 65, LGBTQ+, and users
                    with diverse abilities.
                    <br />
                    <br />
                    <h3>Frequency</h3> ranged from once a week to a few times a
                    year. Preferred cuisines included Nigerian, Filipino,
                    Vietnamese, and Italian foods.
                  </ul>
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1>Testing </h1>
                <p>Methods</p>
                <div className="flex_info_item">
                  <ul className="year">
                    <h3>1. User Testing:</h3> Conducted seven qualitative tests
                    (45 minutes each) on the desktop version of the website.
                    <br />
                    Sessions included discovery questions about the business
                    model and usability-focused tasks on navigation and
                    ordering.
                    <br />
                    <br />
                    <h3>2. Heuristic Analysis:</h3>Evaluated the website against
                    Nielsen’s ten usability heuristics.
                    <br />
                    <br />
                    <h3>3. Analysis Techniques:</h3> Data clustering and
                    thematic analysis were used to identify patterns in user
                    feedback.
                  </ul>
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1>Key </h1>
                <p>Findings</p>

                <div className="flex_info_item">
                  <ul className="year">
                    <h3>Positive Insights.</h3>
                    Users responded positively to food images, finding them
                    visually appealing. Most testers found the food pricing fair
                    after understanding portion sizes. Error messages were
                    concise and easy to understand.
                    <br />
                    <br />
                  </ul>
                </div>
              </section>
              <section id="cap">
                <div className="flex_01">
                  <img src={Findings} />
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1>Challenges </h1>
                <p>Identified</p>
                <div className="flex_info_item">
                  <ul className="year">
                    <h3>Negatively Insights.</h3>
                    1. Trust Issues. - Poor design negatively impacted user
                    trust in the service. <br /> 2. Information Clarity. - Users
                    were confused about portion sizes, prices, and delivery
                    terms. - Important details were often overlooked due to
                    small or unclear text. <br /> 3. Navigation Issues. -
                    Filtering options lacked clarity (e.g., no &quot;clear
                    filter&quot; button). - Users faced difficulties
                    understanding active filters and their application. <br />{' '}
                    4. Visual Design Problems: - Inconsistent use of images
                    (e.g., identical photos for different dishes) caused
                    confusion. - Overlapping elements like pop-ups disrupted
                    navigation. <br /> 5. Performance Concerns. - Slow page
                    loading without feedback frustrated users.
                    <br />
                    <br />
                  </ul>
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1>Recommendations </h1>
                <p></p>

                <div className="flex_info_item"></div>
              </section>
              <section id="cap">
                <div className="flex_01">
                  <img src={Recommendations} />
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1>Improving </h1>
                <p>Information </p>

                <div className="flex_info_item">
                  <ul className="year">
                    <h3>Clarity</h3>
                    Clearly communicate portion sizes with visual examples or
                    comparative descriptions.
                    <br />
                    Provide detailed descriptions for menu items that match
                    their pictures; include disclaimers when they differ.
                    <br />
                  </ul>
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1>Enhancing </h1>
                <p>Navigation </p>
                <div className="flex_info_item">
                  <ul className="year">
                    <h3>Filter</h3>
                    Add a &quot;clear filter&quot button at the top of filter
                    menus for better usability.
                    <br />
                    Use chips or visual indicators to show active filters.
                    <br />
                  </ul>
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1>Optimizing </h1>
                <p>Visual Design </p>
                <div className="flex_info_item">
                  <ul className="year">
                    <h3>Refresh</h3>
                    Update dish cards with unique and accurate photos of each
                    menu item.
                    <br />
                    Simplify layouts by reducing overlapping elements and
                    excessive bright colors.
                    <br />
                  </ul>
                </div>
              </section>

              <section id="info" className="flex_info">
                <h1>Impact</h1>
                <p>Recommendations </p>
                <div className="flex_info_item">
                  <ul className="year">
                    <h3>Change is good</h3>
                    By addressing these issues, The BRDGE has improved user
                    trust, reduced friction in the ordering process, and created
                    a more inclusive experience for its diverse audience. These
                    changes led to higher user satisfaction and increased order
                    completions.
                    <br />
                    <br />
                  </ul>
                </div>
              </section>

              <PageGuides nextProject="./oneup" />
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default TheBrdge;
