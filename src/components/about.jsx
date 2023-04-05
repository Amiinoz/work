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
          <p data-scroll="" data-offset="2.8">
            Welcome to my portfolio! My name is Mohamed Magan, and I am a
            Creative Developer and UX Designer based in Calgary. I have a
            passion for creating user-friendly and visually appealing designs
            that enhance the user experience. With a focus on accessibility, I
            strive to create intuitive designs that are easy to use for
            everyone. In my work, I have completed several successful projects,
            including OneUp, Tessa, Posty, and Favetees. I have also developed
            Covid19Tracker, a website that provides global data on the pandemic,
            and designed and developed websites for Garabaldi Resorts & Spa and
            other clients.
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
