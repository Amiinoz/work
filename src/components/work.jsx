import React from 'react';

import SectionHeader from './section-header/section-header';

import '../styles/components/work.scss';

const Work = () => {
  return (
    <section className="work-section">
      <SectionHeader title="work" subtitle="Projects" heading="Selected work" />
      <div className="work-wrap"></div>
    </section>
  );
};

export default Work;
