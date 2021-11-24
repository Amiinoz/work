// import React, { useRef } from 'react';
// // import { NavLink } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Logo from '../../assets/logo_yellow.webp';
// import Menu from '../Menu/menu';
// import './navigation.scss';

// const Navigation = () => {
//   // eslint-disable-next-line no-unused-vars
//   let navCon = useRef(null);
//   // eslint-disable-next-line no-unused-vars
//   let menCon = useRef(null);

//   return (
//     <motion.div
//       className="nav"
//       initial={{ y: -45, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 1.5, delay: 1.5, ease: [0.6, 0.5, -0.01, 0.9] }}
//       data-scroll-section
//     >
//       <div className="container fluid ">
//         <div
//           className="row v-center space-between"
//           ref={element => (navCon = element)}
//         >
//           <div className="logo">
//             <a href="/" target="Home">
//               <img src={Logo} alt="Mo Magan ite logo" />
//             </a>
//           </div>
//           <div ref={element => (menCon = element)}>
//             {/* <button>
//               <span></span>
//               <span></span>
//             </button> */}
//             <Menu />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Navigation;

import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import Logo from '../../assets/logo_yellow.webp';
import Menu from '../Menu/menu';

import { useInView } from 'react-intersection-observer';
import './navigation.scss';

const Navigation = () => {
  const animation = useAnimation();
  const [headRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-72px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  return (
    <motion.div
      ref={headRef}
      animate={animation}
      initial="hidden"
      className="nav"
      data-scroll-section
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.2,
            delay: 0.7,
            ease: [0.6, 0.5, -0.01, 0.9],
          },
        },
        hidden: { opacity: 0, y: -45 },
      }}
    >
      <div className="container fluid ">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/" target="Home">
              <img src={Logo} alt="Mo Magan ite logo" />
            </a>
          </div>
          <div>
            <Menu />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;
