import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import TechStack from '../../assets/techUsed.webp';

import '../../styles/App.scss';

import SectionHeader from '../section-header/section-header';

const accordionIds = [
  {
    id: 0,
    title: 'Development',
    results: [
      'Front end Development',
      'Basic database & API call setup',
      'Deployment',
    ],
  },
  {
    id: 1,
    title: 'Design',
    results: ['UX design', 'UI development'],
  },
];

const projectArchive = [
  {
    id: 0,
    title: 'Projects Archive',
    results: [
      'Vanilla Js Chat app',
      'Budget ap',
      'Web news scrapper ',
      'React and Framer motion',
      'WebGL Portfolio',
      'Dice game',
    ],
  },
];

const Services = ({ text }) => {
  const [expanded, setExpanded] = useState(0);
  const animation = useAnimation();
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-250px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  return (
    <>
      <SectionHeader
        title="Service"
        subtitle="Design & Development"
        heading="Passion"
        id="work-header"
      />
      <div
        ref={aboutRef}
        animate={animation}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
          },
          hidden: { opacity: 0, y: 72 },
        }}
        data-scroll-section
        className="service-container"
      >
        <div
          className="service-container__intro"
          data-scroll
          data-scroll-delay="0.03"
          data-scroll-speed="0.6"
        >
          <p>
            I am passionate about creating beautiful and user-friendly designs
            that provide exceptional user experiences across various digital
            platforms. It is my belief that good design can positively impact
            the lives of people.
          </p>
          <br />
          <p>
            I work closely with small businesses and stakeholders to develop
            successful products through a user-centric design approach. This
            involves conducting user research, usability studies, sitemaps,
            wireframes, and enhanced product design to improve the user
            experience. In my free time, I enjoy sports and volunteering within
            my community.
          </p>
          <br />
          <p>
            Thank you for taking the time to view my portfolio. If you have any
            inquiries or collaboration opportunities, please do not hesitate to
            contact me.
          </p>

          <span>
            <img src={TechStack} alt="Technology used" />
          </span>
        </div>

        <div className="service-container__accordion">
          <h3>Services</h3>
          {accordionIds.map((details, index) => (
            <Accordion
              key={index}
              details={details}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))}
          <br />
          <br />

          <h3>Projects </h3>
          {projectArchive.map((details, index) => (
            <Accordion
              key={index}
              details={details}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <motion.div
        className="accordionHeader"
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        whileHover={{
          color: '#000000',
        }}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
      >
        <motion.div className="accordionIcon">
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </motion.div>
        {details.title}
      </motion.div>
      <motion.div
        className="accordionContent"
        key="content"
        animate={{ height: isOpen ? '120%' : '0' }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </motion.div>
    </>
  );
};

export default Services;
