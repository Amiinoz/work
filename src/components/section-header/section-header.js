import React from 'react';

import '../../styles/components/section-header.scss';

export default function SectionHeader({ title, subtitle, heading, intro }) {
  return (
    <div className="section-header" data-scroll-section>
      <div
        className="header__content"
        data-scroll
        data-scroll-delay="0.02"
        data-scroll-speed="0.5"
      >
        <a
          className="header__content-title"
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="0.5"
        >
          {title}
        </a>
        <h2
          className="header__content-subtitle"
          data-scroll
          data-scroll-delay="0.06"
          data-scroll-speed="0.5"
        >
          {subtitle}
        </h2>
        <h3
          className="header__content-heading"
          data-scroll
          data-scroll-delay="0.07"
          data-scroll-speed="0.5"
        >
          {heading}
        </h3>
      </div>
    </div>
  );
}
