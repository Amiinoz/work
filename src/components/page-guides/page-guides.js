import React from 'react';
import BackArrow from '../../assets/icons/arrow-right.svg';
import FrontArrow from '../../assets/icons/arrow-right.svg';

import '../../styles/components/page-guides.scss';

export default function PageGuides({ nextProject }) {
  return (
    <>
      <div className="page-guides">
        <div className="backHome">
          <a href="/">
            Home
            <img src={BackArrow} alt="Back to Home icon" />
          </a>
        </div>

        <div className="nextProj">
          <a href={nextProject}>
            <img src={FrontArrow} alt="To next project" />
            Next Project
          </a>
        </div>
      </div>
    </>
  );
}
