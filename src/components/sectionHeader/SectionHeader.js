import React from 'react';

import './sectionHeader.scss';

export default function SectionHeader({ title, subtitle, heading, intro }) {
  return (
    // <h6 className="section-header" data-scroll-section>
    //   {title}
    // </h6>

    <div className="section-header" data-scroll-section>
      <div className="header__content">
        <a className="header__content-title">{title}</a>
        <h2 className="header__content-subtitle">{subtitle}</h2>
        <h3 className="header__content-heading">{heading}</h3>
        {/* <p className="header__content-intro">{intro}</p> */}
      </div>
    </div>
  );
}
