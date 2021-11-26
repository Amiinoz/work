import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import './banner.scss';
import { Timeline } from 'gsap/gsap-core';

const Banner = () => {
  let head = useRef(null);
  let content = useRef(null);
  // eslint-disable-next-line prefer-const
  let tl = new Timeline();

  // disable flashing when loading and unloading
  useEffect(() => {
    // content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const headlineFourth = headlineThird.nextSibling;

    TweenMax.to(head, 0, { css: { visibility: 'visible' } });
    // console.log(head);
    // console.log(headlineFirst, headlineSecond, headlineThird, headlineFourth);

    // content animation
    tl.staggerFrom(
      [
        headlineFirst.children,
        headlineSecond.children,
        headlineThird.children,
        headlineFourth.children,
      ],
      1,
      {
        y: 87, // same height in css
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
    );
  }, []);

  return (
    <div className="header-container" data-scroll-section>
      <div className="header" ref={element => (head = element)}>
        <div className="container">
          <div className="header-inner">
            <div className="header-content">
              <div
                className="header-content-inner"
                ref={element => (content = element)}
              >
                <h1>
                  <div className="header-content-line">
                    <div className="header-content-line-inner">Creative</div>
                  </div>
                  <div className="header-content-line">
                    <div className="header-content-line-inner">Developer</div>
                  </div>
                  <div className="header-content-line">
                    <div className="header-content-line-inner">
                      & UX Designer
                    </div>
                  </div>
                  <div className="header-content-line">
                    <div className="header-content-line-inner">
                      Based in Calgary
                    </div>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
