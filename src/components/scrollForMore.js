import React from 'react';
import { motion } from 'framer-motion';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const ScrollForMore = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 1.2, ...transition },
      }}
      className="scroll-for-more"
    >
      <div className="icon">
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 41 75.8"
          enableBackground="new 0 0 41 75.8"
        >
          <line
            fill="#1F00DF"
            stroke="#000000"
            strokeWidth="2"
            strokeMiterlimit="10"
            x1="20.5"
            y1="0"
            x2="20.5"
            y2="38"
          />
          <line
            id="l0"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeMiterlimit="10"
            x1="20.5"
            y1="38"
            x2="20.5"
            y2="73.5"
          />
          <line
            id="l1"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeMiterlimit="10"
            x1="19.9"
            y1="75"
            x2="40.4"
            y2="60.7"
          />
          <line
            id="l2"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeMiterlimit="10"
            x1="0.6"
            y1="60.7"
            x2="21.1"
            y2="75"
          />
        </svg>
      </div>
      <div className="text">Scroll</div>
    </motion.div>
  );
};

export default ScrollForMore;
