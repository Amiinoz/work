import React from 'react';

import './work.scss';
import SectionHeader from '../sectionHeader/SectionHeader';

const Work = () => {
  return (
    <section className="work-section">
      <SectionHeader
        title="work"
        subtitle="Projects"
        heading="These are some of my selected work"
      />
      <div className="work-wrap"></div>
    </section>
  );
};

export default Work;