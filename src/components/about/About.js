import React from 'react';
import SectionHeader from '../section-header/section-header';

import './about.scss';
import Mo from '../../assets/profile.png';
import Signature from '../../assets/signature.svg';
import Github from '../../assets/social/socialgithub.svg';
import Behance from '../../assets/social/socialbehance.svg';
import Linked from '../../assets/social/sociallinked.svg';

const About = () => {
  return (
    <>
      <SectionHeader
        title="About"
        subtitle="Hello,"
        heading="Nice to meet you"
        id="about"
      />
      <div className="about-container" data-scroll-section>
        <div className="about-container__bio">
          <p data-scroll="" data-offset="2.8">
            My name is Mohamed Magan, I am a software developer & UX designer
            based in beautiful Calgary, Canada. I am passionate about solving
            problems and building rich user-friendly products. I am available
            for full-time roles & freelance projects. <br /> You can check out
            my work, drop me a line and say hi, or share what projects you are
            working on.
          </p>
        </div>

        <div className="about-container__social">
          <div className="socialimage" data-scroll data-scroll-speed="0.9">
            <img
              width="200"
              height="270 "
              src={Mo}
              alt="photo of me"
              data-scroll
            />
          </div>
          <div className="socialsign" data-scroll>
            <img
              width="200"
              height="40"
              src={Signature}
              alt="my signature"
              data-scroll
            />
          </div>

          <div
            className="social__icons"
            data-scroll
            data-scroll-delay="0.02"
            data-scroll-speed="0.5"
          >
            <a
              href="https://github.com/Amiinoz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="github logo" />
            </a>

            <a href="https://www.behance.net/momagan">
              <img src={Behance} alt="behance logo" />
            </a>

            <a
              href="https://www.linkedin.com/in/momagan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linked} alt="linkedlin logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
