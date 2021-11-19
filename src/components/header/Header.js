import React from 'react';
// import gsap from 'gsap';
// import SplitText from '../../utils/Split3.min.js ';

import './header.scss';

export default function Header() {
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
