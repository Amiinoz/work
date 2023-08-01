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
        subtitle="Passion"
        heading="Design and Development"
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
            I have a passion for crafting seamless online experiences, I offer a
            comprehensive range of solutions to cater to your digital needs. As
            a skilled web developer, I specialize in building responsive,
            user-friendly websites that not only impress visually but also
            deliver exceptional performance across devices. Whether you require
            a captivating landing page, an e-commerce platform, or a
            full-fledged corporate website, I ensure every project is
            custom-tailored to meet your unique requirements.
          </p>
          <br />

          <p>
            Furthermore, as a UX designer, I place a strong emphasis on user
            research and interaction design to create intuitive interfaces that
            enhance user satisfaction and engagement. By employing wireframes,
            prototypes, and usability testing, I guarantee that each design
            decision aligns with your target audience is preferences and goals.
            By combining cutting-edge technologies with a user-centric approach,
            my services encompass the perfect blend of creativity and
            functionality. As I take pride in delivering projects on time and
            within budget, you can rest assured that your digital aspirations
            are in safe hands. Lets collaborate to transform your ideas into
            reality and create digital experiences that stand out in todays
            competitive landscape. Get in touch, and lets embark on a journey to
            craft a remarkable online presence for your brand.
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
