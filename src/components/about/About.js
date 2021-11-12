import React from 'react';
// import cn from 'classnames';
// import SectionHeader from "../SectionHeader/sectionHeader";

// import gsap from 'gsap';
// import SplitText from '../../utils/Split3.min.js ';
// import useOnScreen from '../../hooks/useOnScreen';

import './about.scss';
// import Services from "../Services/services";

const About = () => {
  return (
    <>
      {/* <SectionHeader
        title="About"
        subtitle="Hello,"
        heading="Nice to meet you"
      /> */}
      <div className="about-container" data-scroll-section>
        <div className="about-container__bio">
          <p>
            My name is Mohamed Magan, I am a software developer & UX designer
            based in beautiful Calgary, Canada. I am passionate about solving
            problems and building rich user-friendly products. I am available
            for full-time roles & freelance projects. <br /> You can check out
            my work, drop me a line and say hi, or share what projects you are
            working on.
          </p>
        </div>

        <div className="about-container__social">
          <div className="socialimage">
            <img
              width="200"
              height="270 "
              src="assets/about_image.webp"
              alt="photo of me"
              data-scroll
            />
          </div>
          <div className="socialsign">
            <img
              width="200"
              height="40"
              src="assets/signature.svg"
              alt="my signature"
              data-scroll
            />
          </div>

          <div className="social__icons">
            <a
              href="https://github.com/Amiinoz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="assets/social/socialgithub.svg"
                alt="github logo"
                data-scroll
              />
            </a>

            <a href="/">
              <img
                src="assets/social/socialbehance.svg"
                alt="behance logo"
                data-scroll
              />
            </a>

            <a
              href="https://www.linkedin.com/in/momagan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="assets/social/sociallinked.svg"
                alt="linkedlin logo"
                data-scroll
              />
            </a>
          </div>
        </div>
      </div>
      {/* <Services /> */}
    </>
  );
};

export default About;
