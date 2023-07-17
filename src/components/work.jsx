import React from 'react';

import SectionHeader from './section-header/section-header';

import '../styles/components/work.scss';

const Work = () => {
  return (
    <section className="work-section">
      <SectionHeader
        title="Hello, I am Mohamed"
        subtitle="Creative Developer & UX Designer"
        heading="Based in Calgary"
      />
      {/* <div className="work-wrap"></div> */}
    </section>
  );
};

export default Work;
