import React from 'react';
import BackArrow from '../../assets/icons/arrow-right.svg';
import FrontArrow from '../../assets/icons/arrow-right.svg';

import './pageguides.scss';
export default function PageGuides({ nextProject }) {
  return (
    <>
      <div className="pageGuide">
        <div className="backHome">
          <a href="/contact">
            Contact
            <img src={BackArrow} alt="Back to Home icon" />
          </a>
        </div>

        <div className="nextProj">
          <a href={nextProject}>
            <img src={FrontArrow} alt="Back to Home icon" />
            Next Project
          </a>
        </div>
      </div>
    </>
  );
}
