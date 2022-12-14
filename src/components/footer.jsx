import React from 'react';

// import '../styles/components/footer.scss';
import '../styles/App.scss';

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

const Footer = () => {
  return (
    <div>
      <section className="footer-section" data-scroll-section>
        <div className="footer">
          <div className="footer__info">
            <p>+1.587.284.1084</p>
            <a href="mailto:momagan@gmail.com?">
              <p>momagan@gmail.com</p>
            </a>
          </div>
          <div className="footer__content">
            <div className="copyr">
              <span>copyright&copy;{new Date().getFullYear()} momagan</span>
            </div>
          </div>

          <ul className="footer__social">
            {socialLinks.map(link => (
              <li key={link.url}>
                <a style={{ display: 'table-cell' }} href={link.url}>
                  {link.component}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;
