import React from 'react';
import { Helmet } from 'react-helmet';
import ShortProjectTemplate from '../components/short-project-template/short-project-template';
import BannerImage from '../assets/mosdev/header2.webp';
import infoHeadingImage from '../assets/mosdev/icon.webp';
import MainImage from '../assets/mosdev/mozdev.jpg';
import ImagesMock from '../assets/mosdev/theme-image2.webp';

const MosDev = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Mo Magan | MosDev</title>
          <meta name="description" content="VsCode Theme" />
        </Helmet>
        <ShortProjectTemplate
          Title="MosDev"
          Subtitle="Theme"
          BannerImage={BannerImage}
          infoHeadingImage={infoHeadingImage}
          infoHeading=" MosDev Is VsCode dark theme based on Monokai theme colours and
              inspired by this artwork of my fave raper."
          viewCode="https://marketplace.visualstudio.com/items?itemName=MosDev.MosDev-Theme"
          button1="Marketplace"
          // viewLive="https://marketplace.visualstudio.com/items?itemName=MosDev.MosDev-Theme"
          // button2="Marketplace"
          infoImage={MainImage}
          ProjectHeading="inspiration"
          projInfo="This is the inspiration of these theme. Mos def aka Yasin bay is,
              a American hip hop star."
          projInfoBy="Art work by  Kamoni Khem"
          ImagesMock={ImagesMock}
          nextProject="./Airbnb.js"
        />
      </div>
    </>
  );
};

export default MosDev;
