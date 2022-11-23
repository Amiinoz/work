import React from 'react';
import Github from '../assets/social/socialgithub.svg';
import LinkedIn from '../assets/social/sociallinked.svg';
import Twitter from '../assets/social/socialtwitter.svg';
import '../styles/components/footer.scss';

const Footer = () => {
  return (
    <div>
      <section className="footer-section" data-scroll-section>
        <div className="footer">
          <div className="footer__info">
            <p>+1.587.284.1084</p>
            <p>momagan@gmail.com</p>
          </div>
          <div className="footer__content">
            <div className="copyr">
              <span>copyright&copy;{new Date().getFullYear()}</span>
            </div>
          </div>

          <div className="footer__social">
            <span>
              <a
                href="https://github.com/Amiinoz"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Github} alt="Github site link" />
              </a>

              <a
                href="https://www.linkedin.com/in/momagan/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LinkedIn} alt="LinkedIn site link" />
              </a>

              <a
                href="https://twitter.com/dev_mos"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Twitter} alt="Twitter site link" />
              </a>
            </span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
