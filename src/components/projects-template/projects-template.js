/* eslint-disable spaced-comment */
import React, { useEffect, useState, useRef } from 'react';
import {
  motion,
  useTransform,
  useViewportScroll,
  useAnimation,
} from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import ScrollForMore from '../scrollForMore';
import useWindowSize from '../useWindowSize';
import Layout from '../Layout';

import ProjectsButton from '../../components/work-button/work-button';
import PageGuides from '../../components/page-guides/page-guides';

import '../../styles/components/projects-template.scss';

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

const ProjectsTemplate = ({
  title,
  mainImage,
  projectInitial,
  projectTitle,
  projectIntro,
  client,
  clientName,
  web,
  plus,
  technology,
  techUsed,
  projColorImage,
  role,
  roleType,

  viewCode,
  year,
  yearOfDev,
  seeItLive,

  delivTitle,
  projDelImage1,
  projDelHead1,
  projDelBody1,

  projDelImage2,
  projDelHead2,
  projDelBody2,

  projDelImage3,
  projDelHead3,
  projDelBody3,

  projDelImage4,
  projDelHead4,
  projDelBody4,

  projDelImage5,
  projDelHead5,
  projDelBody5,

  projDelImage6,
  projDelHead6,
  projDelBody6,

  featTitle,
  projFeatImage1,
  projFeatHead1,
  projFeatBody1,

  projFeatImage2,
  projFeatHead2,
  projFeatBody2,

  projFeatImage3,
  projFeatHead3,
  projFeatBody3,

  featuresImage,

  imagesHead,
  projImgTitle1,
  projImgInfo1,
  projImages1,

  projImgTitle2,
  projImgInfo2,
  projImages2,

  projImgTitle3,
  projImgInfo3,
  projImages3,

  projImgTitle4,
  projImgInfo4,
  projImages4,

  images,
  columnOffset,
  nextProject,
}) => {
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
                    <motion.span variants={letter}>{title}</motion.span>
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
                        src={mainImage}
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
            <div className="proj-info">
              <div className="proj-title">
                <div className="new-beginning">
                  <div className="go">
                    <span>{projectInitial}</span>
                  </div>
                  <div className="content">
                    <h2>{projectTitle}</h2>

                    <p>{projectIntro}</p>
                  </div>
                </div>
              </div>
              <div className="projStart">
                <div className="proj-client">
                  <h4>{client}</h4>

                  <p>{clientName}</p>
                  <br />
                  <br />
                  <i className="bx bxs-window-alt">{web}</i>

                  <br />
                  <br />
                  <i className="bx bxs-window-alt">{plus}</i>
                </div>

                <div className="proj-tech">
                  <h4>{technology}</h4>
                  <p>{techUsed}</p>
                  <div className="proj-color">
                    <img src={projColorImage} />
                  </div>
                </div>

                <div className="proj-role">
                  <h4>{role}</h4>

                  <p>{roleType}</p>
                  <br />
                  <br />
                  <a href={viewCode} target="View Code">
                    <button> Code </button>
                  </a>
                </div>

                <div className="pro-year">
                  <h4>{year}</h4>
                  <p>{yearOfDev}</p>
                  <br />
                  <br />
                  <br />
                  <a href={seeItLive} target="View Live">
                    <button> Live </button>
                  </a>
                </div>
              </div>
              {/* ////////////////////////////////////////// */}
              {/* // Deliverables */}
              <div className="section-deliverables">
                <h2>{delivTitle}</h2>
                <div className="project_deliverables">
                  <div className="deliverables_1">
                    <img src={projDelImage1} alt="Project deliverables one" />
                    <h3>{projDelHead1}</h3>

                    <p>{projDelBody1}</p>
                  </div>
                  <div className="deliverables_2">
                    <img src={projDelImage2} alt="Project deliverables two" />
                    <h3>{projDelHead2}</h3>
                    <p>{projDelBody2}</p>
                  </div>
                  <div className="deliverables_3">
                    <img src={projDelImage3} alt="Project deliverables two" />
                    <h3>{projDelHead3}</h3>
                    <p>{projDelBody3}</p>
                  </div>
                </div>
                <div className="project_deliverables">
                  <div className="deliverables_1">
                    <img src={projDelImage4} alt="Project deliverables four" />
                    <h3>{projDelHead4}</h3>

                    <p>{projDelBody4}</p>
                  </div>
                  <div className="deliverables_2">
                    <img src={projDelImage5} alt="Project deliverables five" />
                    <h3>{projDelHead5}</h3>
                    <p>{projDelBody5}</p>
                  </div>
                  <div className="deliverables_3">
                    <img src={projDelImage6} alt="Project deliverables six" />
                    <h3>{projDelHead6}</h3>
                    <p>{projDelBody6}</p>
                  </div>
                </div>
                {/* ////////////////////////////////////////// */}
                {/* // Features */}
                <div className="features-container">
                  <div className="features">
                    <h2>{featTitle}</h2>
                    <div className="features_1">
                      <img src={projFeatImage1} />
                      <h3>{projFeatHead1}</h3>

                      <p>{projFeatBody1}</p>
                    </div>

                    <div className="features_2">
                      <img src={projFeatImage2} />
                      <h3>{projFeatHead2}</h3>
                      <p>{projFeatBody2}</p>
                    </div>

                    <div className="features_3">
                      <img src={projFeatImage3} />
                      <h3>{projFeatHead3}</h3>
                      <p>{projFeatBody3}</p>
                    </div>
                  </div>

                  <div className="features_image">
                    <img src={featuresImage} />
                  </div>
                </div>
                {/* ////////////////////////////////////////// */}
                {/* // Images */}

                <div className="project-images">
                  <h2>{imagesHead}</h2>
                  <div className="images-content">
                    <div className="item">
                      <div className="item__img-wrap">
                        <div
                          className="item__img item__img--t1"
                          style={{
                            transform: 'translate3d(0px, -7.95308px, 0px)',
                          }}
                        >
                          <img src={projImages1} />
                        </div>
                      </div>
                      <div className="item__caption">
                        <h4 className="item__caption-title">{projImgTitle1}</h4>
                        <p className="item__caption-copy">{projImgInfo1}</p>
                      </div>
                    </div>

                    <div className="item">
                      <div className="item__img-wrap">
                        <div
                          className="item__img item__img--t2"
                          style={{
                            transform: 'translate3d(0px, -7.95308px, 0px)',
                          }}
                        >
                          <img src={projImages2} />
                        </div>
                      </div>
                      <div className="item__caption">
                        <h4 className="item__caption-title">{projImgTitle2}</h4>
                        <p className="item__caption-copy">{projImgInfo2}</p>
                      </div>
                    </div>

                    <div className="item">
                      <div className="item__img-wrap">
                        <div
                          className="item__img item__img--t3"
                          style={{
                            transform: 'translate3d(0px, -7.95308px, 0px)',
                          }}
                        >
                          <img src={projImages3} />
                        </div>
                      </div>
                      <div className="item__caption">
                        <h4 className="item__caption-title">
                          {projImgTitle3}{' '}
                        </h4>
                        <p className="item__caption-copy">{projImgInfo3}</p>
                      </div>
                    </div>

                    <div className="item">
                      <div className="item__img-wrap">
                        <div
                          className="item__img item__img--t3"
                          style={{
                            transform: 'translate3d(0px, -7.95308px, 0px)',
                          }}
                        >
                          <video
                            height="100%"
                            width="100%"
                            loop="true"
                            autoPlay="true"
                            src={projImages4}
                          />
                        </div>
                      </div>
                      <div className="item__caption">
                        <h4 className="item__caption-title">
                          {projImgTitle4}{' '}
                        </h4>
                        <p className="item__caption-copy">{projImgInfo4}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProjectsButton />
        </motion.div>

        {/* //////////////////////////////    page guides   //
         /////////////// */}

        <PageGuides nextProject={nextProject} />
      </Layout>
    </>
  );
};

export default ProjectsTemplate;
