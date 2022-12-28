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
          <h4>What I am currently working on?</h4>
          <p>
            I assisted small business and stakeholders in developing a viable
            product for their business by improving the user experience through
            planning and conducting usability studies, creating sitemaps and
            wireframes, and enhancing their product as a whole. Moreover, I
            assist them in building scalable websites that are minimal, elegant,
            and functional.
          </p>

          <h4>What i bring to the table?</h4>
          <p>
            As someone with experience in the creative industry, I have
            developed a strong passion for creating beautiful and user-friendly
            designs. I have a keen eye for detail and a strong focus on
            delivering amazing user experiences. My goal is always to create the
            best possible experience for the user, whether it’s through a
            website, app, or any other type of digital product. I truly believe
            that good design can make a difference in people’s lives and I am
            very excited to be able to contribute to making the world a more
            beautiful and user-friendly place.
          </p>

          <h4>Why I love to work this industry?</h4>
          <p>
            I love the design industry because it is constantly changing and
            evolving. There is always something new to learn, and new
            technologies and approaches to design are constantly emerging. I
            also love the challenge of designing for different user needs and
            find the process of designing solutions to problems both creatively
            and intellectually stimulating. The design industry is also a great
            place to collaborate with others and build relationships, both
            professional and personal.
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
