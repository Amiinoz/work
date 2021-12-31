import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import TechStack from '../../assets/techUsed.webp';

import './services.scss';
import SectionHeader from '../section-header/section-header';

const accordionIds = [
  {
    id: 0,
    title: 'Design',
    results: [
      'App design',
      'Branding',
      'UI and UX design',
      'Interaction Design',
      'Visual Design',
    ],
  },
  {
    id: 1,
    title: 'Development',
    results: [
      'Front end Development',
      'Back end Development',
      'Hositing',
      'Depolyment',
      'Maintainance',
    ],
  },
  {
    id: 2,
    title: 'Digital',
    results: [
      'Digital marketing',
      'Social media strategies',
      'Email and Subscription',
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
        subtitle="Skills"
        heading="In Development & Design"
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
          <h4>
            Good product development— <br />
            starts with a passion for visual strategy.
          </h4>
          <p>
            With a focus on eye-pleasing clean minimal design, user-friendly,
            highly secure, and scalable..
            <br />
            <br /> Using the latest development technologies, I can develop
            everything from mobile web development solutions and responsive
            website designs to unique e-commerce and intranet experiences.
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
