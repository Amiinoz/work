import React from 'react';
import SectionHeader from './section-header/section-header';
import '../styles/components/about.scss';

import Mo from '../assets/profile.png';
import Signature from '../assets/signature.svg';

import { GitHub, Twitter, Linkedin, Dribbble } from 'react-feather';

const socialLinks = [
  {
    url: 'https://github.com/Amiinoz',
    component: <GitHub />,
  },

  {
    url: 'https://www.behance.net/momagan',
    component: <Dribbble />,
  },
  {
    url: 'https://twitter.com/dev_mos',
    component: <Twitter />,
  },
  {
    url: 'https://www.linkedin.com/in/momagan/',
    component: <Linkedin />,
  },
];

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
            My name is Mohamed Magan, and I am a user experience designer and
            front-end developer. Passionate about design and development, humble
            and easy going, I value collaboration, and I enjoy seeing people
            succeed. Playing soccer and basketball in my spare time keeps me
            active. I also enjoy photography and fashion. Coaching amateur
            sports in the community keeps me grounded
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

          <ul className="social__icons">
            {socialLinks.map(link => (
              <li key={link.url}>
                <a style={{ display: 'table-cell' }} href={link.url}>
                  {link.component}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
