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

import Banner from '../assets/digitalDivide/dd-banner.png';
import { Helmet } from 'react-helmet';
import ScrollForMore from '../components/scrollForMore.js';
import Solution1 from '../assets/digitalDivide/dd-1.webp';
import Solution2 from '../assets/digitalDivide/dd-2.webp';
import Solution3 from '../assets/digitalDivide/dd-3.webp';
import Solution4 from '../assets/digitalDivide/dd-4.webp';
import Solution5 from '../assets/digitalDivide/dd-5.webp';

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

const DigitalDivide = ({
  title,
  mainImage,
  images,
  columnOffset,
  nextProject,
}) => {
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
          <title> Digital Divide | Bridging the gap</title>
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
                    <motion.span variants={letter}>DigitalDivide</motion.span>
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
                <h1> NDA </h1>
                <div className="flex_info_item">
                  <ul className="year">
                    <li>
                      This Ux design case study contains non disclosure
                      agreement
                    </li>
                  </ul>
                </div>
                <div className="flex_info_item">
                  <ul className="role">
                    <li>Non disclosure agreement notice</li>
                    <li>Anonymized to protect the client&lsquo;s identity.</li>
                    <li>
                      Generalized to avoid revealing proprietary information.
                    </li>
                    <li>Modified with placeholder data where necessary.</li>
                  </ul>
                </div>

                <div className="flex_info_item">
                  <ul className="explanation"></ul>
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1> OVERVIEW </h1>
                <div className="flex_info_item">
                  <ul className="year">
                    <li>TIMELINE</li>
                    <li>16 weeks</li>
                  </ul>
                </div>
                <div className="flex_info_item">
                  <ul className="role">
                    <li>MY ROLE | TEAM</li>
                    <li>Junior UX Developer | Confidential </li>
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
                    <li>CLIENT INDUSTRY</li>
                    <li> Municipal Government</li>
                  </ul>
                </div>
              </section>

              <section id="info" className="flex_info">
                <h1>User Research & Insights</h1>
                <div className="flex_info_item">
                  <ul className="year">
                    <li>Research Methodology</li>
                    <li>
                      Conducted contextual inquiries with assistive technology
                      users.
                    </li>
                    <li>
                      Analyzed survey responses about digital service usage and
                      barriers.
                    </li>
                    <li>
                      Performed competitive analysis of existing municipal
                      digital services.
                    </li>
                    <li>Created user personas based on research findings.</li>
                  </ul>
                </div>
                <div className="flex_info_item">
                  <ul className="role">
                    <li>
                      <li>
                        Exact research participant numbers, specific competitor
                        names, and detailed methodology are omitted due to NDA
                        restrictions.
                      </li>
                    </li>
                  </ul>
                </div>

                <div className="flex_info_item">
                  <ul className="explanation"></ul>
                </div>
              </section>

              <section id="info" className="flex_info">
                <h1>Key Insights </h1>
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
              <section id="cap">
                <div className="flex_01">
                  <img src={Solution4} />
                </div>
              </section>
              <section id="cap">
                <div className="flex_01">
                  <img src={Solution5} />
                </div>
              </section>

              <section id="info" className="flex_info"></section>

              <section id="info" className="flex_info">
                <h1>
                  Implementation <br /> Details
                </h1>
                <p>Technical Approach</p>
                <div className="flex_info_item">
                  <ul className="year">
                    The implementation leveraged WCAG 2.1 AA compliance as the
                    baseline for all interface components, Axure RP for creating
                    interactive prototypes with screen reader compatibility, and
                    NVDA/JAWS/VoiceOver integration testing for assistive
                    technology validation.
                    <br />
                    <br />
                    <h3>NDA Code Modification Note</h3>
                    The examples shown use generalized patterns and modified
                    code structures. Specific service integrations, proprietary
                    accessibility frameworks, and municipal data handling
                    protocols have been abstracted while maintaining technical
                    accuracy.
                  </ul>
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1>Impact & Outcomes</h1>
                <p>Key Metrics</p>
                <div className="flex_info_item">
                  <ul className="year">
                    <h3>User Satisfaction</h3> <i>Confidential</i> <br /> Users
                    reported improved satisfaction with the accessibility of
                    digital services
                    <br />
                    <br />
                    <h3>Task Completion</h3> <i>Confidential</i> <br /> Users
                    with disabilities successfully completed core tasks without
                    additional assistance.
                    <br />
                    <br />
                    <h3>Adoption Rate</h3> <i>Confidential</i> <br /> Increase
                    in usage of digital services by persons with disabilities
                  </ul>
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1>Metrics</h1>
                <p>Note</p>
                <div className="flex_info_item">
                  <ul className="year">
                    Exact metrics have been modified to comply with NDA
                    requirements. The relative improvements and general trends
                    accurately represent the project outcomes.
                  </ul>
                </div>
              </section>
              <section id="info" className="flex_info">
                <h1>User</h1>
                <p>Feedback</p>
                <div className="flex_info_item">
                  <ul className="year">
                    <i>
                      &quot; The new interface is much easier to navigate with
                      my screen reader. I can finally access city services
                      independently.&quot;
                    </i>
                    <br />
                    — Blind user, 45
                    <br />
                    <br />
                    <i>
                      &quot; The ability to Navigate easly has made a huge
                      difference in my ability to use these services.&quot;
                    </i>
                    <br />— Motor skills Challenges user, 52
                  </ul>
                </div>
              </section>

              <PageGuides nextProject="./tessa" />
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default DigitalDivide;
