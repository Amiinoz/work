import React from 'react';

import SectionHeader from './section-header/section-header';

import '../styles/components/work.scss';

const Work = () => {
  return (
    <section className="work-section">
      <SectionHeader
        title="Work"
        subtitle="Selected Projects"
        heading="Design & Development"
        // id="slc-proj"
      />
      {/* <div className="work-wrap"></div> */}
    </section>
  );
};

export default Work;
