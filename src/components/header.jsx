/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ScrollForMore from './scrollForMore';
import WorkButton from '../components/work-button';
import { motion } from 'framer-motion'
import '../styles/App.scss';



// new animation
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9], };
const transition2 = { duration: 1.4,  staggerChildren: 0.5}



const Header = () => {

  return (
    <>
      <section
        data-testid="head"
        className={'header-container'}
        data-scroll-section
      >
        <motion.div
           initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.02, ...transition },
                  }}
         className="welcome-text">
          <p>Hi, I am Mohamed</p>
        </motion.div>
        <motion.h1
         initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.05, ...transition2 },
                  }}

        id="header-text" className="line" data-scroll="" data-offset="3.0">
          <span

          >Creative</span>
          <br />
          <span>Developer</span>
          <br />
          <span>& UX Designer</span>
          <br />
          {/* <span>Based in Calgary</span> */}
        </motion.h1>
        <div className="scrl">
          <ScrollForMore />
        </div>
        <WorkButton />
      </section>
    </>
  );
};

export default Header;
