import React from 'react';
import { Helmet } from 'react-helmet';
import ShortProjectTemplate from '../components/short-project-template/short-project-template';
import BannerImage from '../assets/mosdev/header2.webp';
import infoHeadingImage from '../assets/mosdev/icon.webp';
import MainImage from '../assets/mosdev/mozdev.jpg';
import MosImage from '../assets/mosdev/mozdev.jpg';

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
          infoImage={MainImage}
          ProjectInfoIcon={infoHeadingImage}
          ProjectInfoBody="MosDev Is VsCode dark theme based on Monokai theme colours and
                  inspired by this artwork of my fave raper"
          button1="Marketplace"
          ProjectInfoImage={MosImage}
          ProjectContentTitle="MosDev"
          ProjectContentSubTitle="A dark VsCode theme"
          ProjectContentBody="The inspiration for this theme. Yasin Bay aka Mos Def aka
                    Yasin is an American rapper, singer, songwriter, and actor
                    with classic albums like Black on both sides, Black star,
                    and The Ecstatic in his resume."
          ProjectContentFooter="Art work by Kamoni Khem"
          nextProject="./Airbnb.js"
        />
      </div>
    </>
  );
};

export default MosDev;
