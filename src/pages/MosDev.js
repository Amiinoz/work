import React from 'react';
import { Helmet } from 'react-helmet';
import ShortProjectTemplate from '../components/ShortProjectTemplate/ShortProjectTemplate';
import BannerImage from '../assets/mosdev/header2.webp';
import infoHeadingImage from '../assets/mosdev/icon.webp';
import MainImage from '../assets/mosdev/mosdefPoster.webp';
import ImagesMock from '../assets/mosdev/theme-image2.webp';
// import Js from '../assets/mosdev/javascript.webp';
// import Css from '../assets/mosdev/css.webp';
// import Html from '../assets/mosdev/html.webp';
import PageGuides from '../components/PageGuides/pageguides';

const MosDev = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Mo Magan Portfolio | MosDev</title>
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
          button1="download"
          viewLive="https://marketplace.visualstudio.com/items?itemName=MosDev.MosDev-Theme"
          button2="Marketplace"
          infoImage={MainImage}
          ProjectHeading="inspiration"
          projInfo="This is the inspiration of these theme. Mos def aka Yasin bay is,
              a American hip hop star."
          projInfoBy="Art work by  Kamoni Khem"
          // Images1Header="Js"
          // Images1={Js}
          // Images2Header="Css"
          // Images2={Css}
          // Images3Header="Html"
          // Images3={Html}
          ImagesMock={ImagesMock}
        />
      </div>
      <PageGuides nextProject="./Weather" />
    </>
  );
};

export default MosDev;
