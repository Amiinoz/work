/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import '../../styles/components/header.scss';

const Header = () => {
  return (
    <section className={'header-container'} data-scroll-section>
      <h1 id="header-text" data-scroll="" data-offset="3.0">
        Creative
        <br />
        Developer
        <br />
        & UX Designer
        <br />
        Based in Calgary
      </h1>
    </section>
  );
};

export default Header;
