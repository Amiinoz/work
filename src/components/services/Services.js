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
    title: 'Design',
    results: [
      'UX design',
      'User research',
      'Information architecture',
      'Interaction design',
      'Visual design',
      'Usability testing',
    ],
  },
  {
    id: 1,
    title: 'Development',
    results: ['Front end Development', 'Basic database setup', 'Depolyment'],
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
      'Blog post',
      'React and Framer motion',
      'PWA Weather app',
      'Awwwards remake',
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
        subtitle=" Crafting Seamless Digital Experiences"
        heading="Design and Development"
        id="work-header"
      />
      <div ref={aboutRef} data-scroll-section className="service-container">
        <div
          className="service-container__intro"
          data-scroll
          data-scroll-delay="0.03"
          data-scroll-speed="0.6"
        >
          <p>
            I&apos;m passionate about creating seamless online experiences that
            drive real results. Whether you need a captivating landing page, a
            robust e-commerce platform, or a corporate website, I tailor each
            project to meet your unique needs. My approach combines
            user-friendly design with exceptional performance across all
            devices.
          </p>

          <p>
            As a UX designer, I focus on user research and interaction design to
            craft intuitive interfaces that boost engagement and satisfaction. I
            use wireframes, prototypes, and usability testing to ensure every
            design decision aligns with your audience&apos;s preferences and
            goals. Let&apos;s collaborate to transform your ideas into a
            competitive digital advantage that stands out in today&apos;s
            landscape.
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
