import React from 'react';
import './section-header.scss';

export default function SectionHeader({ title, subtitle, heading, intro }) {
  return (
    <div className="section-header" data-scroll-section>
      <div className="header__content">
        <a className="header__content-title">{title}</a>
        <h2 className="header__content-subtitle">{subtitle}</h2>
        <h3 className="header__content-heading">{heading}</h3>
      </div>
    </div>
  );
}
