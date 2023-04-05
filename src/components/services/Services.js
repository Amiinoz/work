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
          <h4>Collaboration</h4>
          <p>
            My approach to design is centered on collaboration, and I enjoy
            working with small businesses and stakeholders to help them develop
            viable products. I conduct usability studies, create sitemaps and
            wireframes, and enhance the overall product design to improve the
            user experience. Outside of work, I stay active by playing soccer
            and basketball, and I volunteer in my community to stay grounded.
            Thank you for taking the time to visit my portfolio, and please feel
            free to contact me with any questions or opportunities for
            collaboration.
          </p>

          <h4>Skills</h4>
          <p>
            In addition to my experience and skills in the creative industry, I
            bring a strong passion for creating beautiful and user-friendly
            designs to the table. With a keen eye for detail and a focus on
            delivering amazing user experiences, my goal is always to create the
            best possible experience for the user, whether it’s through a
            website, app, or any other type of digital product. I truly believe
            that good design can make a difference in people’s lives, and I am
            excited to contribute to making the world a more beautiful and
            user-friendly place.
          </p>

          <h4>I love what I do</h4>
          <p>
            I love working in the design industry because it is constantly
            changing and evolving, providing new opportunities to learn and
            grow. The challenge of designing for different user needs is both
            creatively and intellectually stimulating, and I find the process of
            designing solutions to problems extremely rewarding. Collaborating
            with others and building relationships, both professional and
            personal, is also a highlight of working in this industry.
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
