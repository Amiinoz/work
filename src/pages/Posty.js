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

// import ProjectsButton from '../components/work-button/work-button';
import PageGuides from '../components/page-guides/page-guides';
import User from '../assets/posty/user_story.png';
import ComAud from '../assets/posty/posty_ompetitive-audit.png';
import PaperWireframe from '../assets/posty/pepar-wf-1.png';
import DigitlaWirefame1 from '../assets/posty/digital_wireframes-1.png';
import LowFiProto from '../assets/posty/lf-wireframes.webp';
import UsabilityStdy from '../assets/posty/Usability study findings.webp';
import RefineDes1 from '../assets/posty/refine_1.png';
import RefineDes2 from '../assets/posty/refine_2.png';
import MockUp from '../assets/posty/mockup_1.webp';
import Process from '../assets/posty/process.png';
import HfProto from '../assets/posty/hf-wireframes.webp';
import Colors from '../assets/posty/posty_brand-colors.png';
import IconFont from '../assets/posty/posty_brand-iconFont.png';
import ProjLogo from '../assets/posty/posty_brand-logo.png';

// import '../styles/components/projects-template.scss';
import '../styles/components/uxprojects.scss';

const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Posty = ({ title, mainImage, images, columnOffset, nextProject }) => {
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
    const skew = velocity * 0.3;

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
                        src="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
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
                      I am developing an app to help Students and Busy workers
                      manage their social media accounts.
                    </li>
                  </ul>
                  <ul className="year">
                    <li>PRODUCT DURATION</li>
                    <li>July 22</li>
                  </ul>
                  <ul className="year">
                    <li>THE PROBLEM</li>
                    <li>
                      Busy workers and commuters lack the time necessary to
                      prepare a meal.
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
                      Students and busy office workers will benefit from this
                      app by being able to manage social media apps with
                      pomodoro timers. Efficacy will be measured by analyzing
                      the time saved and the emotions of the customer
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
        =========== // process
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>
                    Process <br />
                  </h1>
                  <p>User-centered design process</p>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>DESIGN PROCESS </li>
                      <li>
                        As part of my investigation into how my app could
                        benefit my users, I used a user-centered design process.
                        To come up with multiple solutions, I used user research
                        as a guide. I then tested multiple ideas via usability
                        tests and developed a high-fidelity interactive
                        prototype based on my findings.
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={Process} loading="lazy" />
                  </div>
                </section>
                {/* ================================================
        =========== // understanding  the user
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>
                    Understanding <br /> the User{' '}
                  </h1>
                  <p>
                    User research <br /> Personas <br /> Problem Statement{' '}
                    <br />
                    User journey
                  </p>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>USER RESEARCH SUMMARY</li>
                      <li>
                        In order to determine if my product will be useful to my
                        target audience, I have conducted interviews, empathy
                        maps, and unmoderated usability studies. I identified
                        students and professionals who are busy but would like
                        to balance their work and social lives as the primary
                        users of my app. A user group and research confirmed
                        that users were overwhelmed by information overload and
                        found it difficult to balance work and life
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={User} loading="lazy" />
                  </div>
                </section>
                <br />
                <br />
                <section id="cap">
                  <div className="flex_01">
                    <img src={ComAud} />
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
                  <p>
                    Paper wire-frames <br /> Digital wire-frames <br /> Low
                    fidelity prototypes <br />
                    Usability study
                  </p>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>PAPER WIREFRAMES</li>
                      <li>
                        The first irritation of the paper wireframes was to see
                        if I can address users pain points
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={PaperWireframe} loading="lazy" />
                  </div>
                </section>
                <section id="info" className="flex_info">
                  <h1>
                    Starting <br /> the designing
                  </h1>
                  <p>Wire frames</p>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>DIGITAL WIREFRAMES</li>
                      <li>
                        The goal for the first irritation was to address users
                        pain points
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={DigitlaWirefame1} loading="lazy" />
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
                    <img src={LowFiProto} loading="lazy" />
                    {/* <img src='../assets/posty/low-fi-prototype.svg'> */}
                  </div>
                </section>
                <section id="info" className="flex_info">
                  <h1>
                    Starting <br /> the designing
                  </h1>
                  <p>Usability study</p>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>USABILITY STUDY FINDINGS</li>
                      <li>
                        The usability studies were carried out twice by me. The
                        results of the first study guided the design process
                        from wireframes to mockups. By using a high-fidelity
                        prototype, the second study revealed what aspects of the
                        mockups needed to be improved.
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={UsabilityStdy} loading="lazy" />
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
                  <p>Before and afters</p>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>USERS WANTED SEARCH INPUT FIELD</li>
                      <li>
                        5 out of 5 asked for why there was no search box to look
                        for their social media accounts
                        <br />
                        <br />
                        “Wish there was easier way to look for social media
                        accounts” (P1)
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={RefineDes1} loading="lazy" />
                  </div>
                </section>
                <section id="info" className="flex_info">
                  <h1>
                    Refining <br />
                    the design <br /> based on research
                  </h1>
                  <p>Before and afters</p>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>PEOPLE WANTED CLEAR FOCUS TIMER </li>
                      <li>
                        2 out have clicked the focus banner image to choose time
                        “Wish there was easier way to look for social media
                        accounts” (P1)
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={RefineDes2} loading="lazy" />
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
                  <p>Wire frames</p>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>HIGH FIDELITY MOCK UPS</li>
                      <li></li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={MockUp} loading="lazy" />
                  </div>
                </section>
                <section id="info" className="flex_info">
                  <h1>
                    High fidelity <br />
                    Wireframes{' '}
                  </h1>
                  <p>Hi fidelity</p>

                  <div className="flex_info_item">
                    <ul className="year">
                      <li>HIGH FIDELITY WIRE-FRAMES</li>
                      <li></li>
                    </ul>
                  </div>
                </section>
                <section id="cap">
                  <div className="flex_01">
                    <img src={HfProto} loading="lazy" />
                  </div>
                </section>
                {/* ================================================
        =========== // Accessability consideration
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>Accessability </h1>
                  <p>Considerations </p>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>ONE</li>
                      <li>
                        Easy way to input time for focusing, instead of
                        scrolling to set time
                      </li>
                    </ul>
                    <ul className="year">
                      <li>TWO</li>
                      <li>
                        Adding night mode to accommodate visually challenge
                        users
                      </li>
                    </ul>
                    <ul className="year">
                      <li>THREE</li>
                      <li>Option to enlarge fonts for better readability</li>
                    </ul>
                  </div>
                </section>

                {/* ================================================
        =========== // Branding
        ================================================  */}
                <section id="info" className="flex_info">
                  <h1>Branding</h1>
                  <p>Colors, Icons, Typography, Logo</p>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>BRANDING</li>
                      <li></li>
                    </ul>
                  </div>
                </section>
                <br />
                <br />
                <section id="cap">
                  <div className="flex_01">
                    <img src={Colors} loading="lazy" />
                  </div>
                </section>
                <br />
                <br />
                <section id="cap">
                  <div className="flex_01">
                    <img src={IconFont} loading="lazy" />
                  </div>
                </section>
                <br />
                <br />
                <section id="cap">
                  <div className="flex_01">
                    <img src={ProjLogo} loading="lazy" />
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
                  <p>Takeaways </p>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>IMPACT</li>
                      <li>
                        The app makes users feel like they are focus and
                        intentional about their time by consuming their social
                        media in interval of between study and work
                      </li>
                    </ul>
                    <ul className="year">
                      <li>WHAT I LEARNED</li>
                      <li>
                        Through the design of this app, I have learned a lot
                        about performing good research and usability in order to
                        put the usr at the centre of everything you do.{' '}
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
                  <p>Future Considerations </p>
                  <div className="flex_info_item">
                    <ul className="year">
                      <li>ONE</li>
                      <li>
                        Conduct 3rd round usability study, to improve overall
                        use
                      </li>
                    </ul>
                    <ul className="year">
                      <li>TWO</li>
                      <li>Viability to implementing user requested features</li>
                    </ul>
                    <ul className="year">
                      <li>THREE</li>
                      <li>
                        Present to community leaders and to see if there is
                        interest in going forward to raise funds to develop the
                        app
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <PageGuides nextProject="./Favetees" />
            </main>
          </div>
          {/* <ProjectsButton /> */}
        </motion.div>

        {/* //////////////////////////////    page guides   //
         /////////////// */}
      </Layout>
    </>
  );
};

export default Posty;
