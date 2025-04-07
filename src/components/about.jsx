import React from 'react';
import SectionHeader from './section-header/section-header';
import '../styles/App.scss';

import Mo from '../assets/profile.png';
import Signature from '../assets/signature.svg';

import { GitHub, Linkedin, Dribbble } from 'react-feather';

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
          <p data-scroll="">
            I’m Mohamed Magan, a Front-End Developer and UX Designer based in
            Calgary, AB. My tech journey has been quite eventful, allowing me to
            refine my skills in user-centric design and digital accessibility.
            Recently, I completed two exciting projects that challenged me
            significantly. I helped improve a client’s (under NDA) online
            services to make them more accessible for individuals with various
            abilities. Prior to that, I revamped The BRDGE&apos;s digital
            platform, which significantly enhanced user engagement and increased
            chef orders.
          </p>
          <p>
            When I’m not coding or designing, I’m actively involved in the tech
            community. I love volunteering at events like DevFest and Startup
            Weekend. I’m also very passionate about digital equity and
            environmental sustainability. These activities keep me engaged,
            inspire my creativity, and remind me of my purpose: making a real
            difference through technology.
          </p>
        </div>

        <div className="about-container__social">
          <div className="socialimage" data-scroll data-scroll-speed="0.9">
            <img
              width="200"
              height="250 "
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
