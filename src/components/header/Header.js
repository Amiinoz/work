import React from 'react';
// import gsap from 'gsap';
// import SplitText from '../../utils/Split3.min.js ';

import './header.scss';

export default function Header() {
  // useEffect(() => {
  //   const split = new SplitText('#header-text', {
  //     type: 'lines',
  //     linesClass: 'lineChildren',
  //   });

  //   const splitParent = new SplitText('#header-text', {
  //     type: 'lines',
  //     linesClass: 'lineParent',
  //   });

  //   gsap.to(split.lines, {
  //     duration: 1,
  //     y: 0,
  //     opacity: 1,
  //     stagger: 0.1,
  //     ease: 'power2',
  //   });
  // }, []);

  // const useMousePosition = () => {
  //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  //   useEffect(() => {
  //     const updateMousePosition = event => {
  //       setMousePosition({ x: event.clientX, y: event.clientY });
  //     };

  //     window.addEventListener('mousemove', updateMousePosition);

  //     return () => window.removeEventListener('mousemove', updateMousePosition);
  //   }, []);

  //   return mousePosition;
  // };

  // const { x, y } = useMousePosition();
  // console.log(x, y);

  return (
    <section className={'header-container'} data-scroll-section>
      <h1 id="header-text">
        Creative
        <br />
        Developer
        <br />
        & UX Designer
        <br />
        Based in Calgary
      </h1>
    </section>
  );
}
