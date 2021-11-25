import React from 'react';
import { Helmet } from 'react-helmet';
import ShortProjectTemplate from '../components/ShortProjectTemplate/ShortProjectTemplate';
import BannerImage from '../assets/weatherApp/header.webp';
import infoHeadingImage from '../assets/weatherApp/weatherIcon.webp';
import MainImage from '../assets/weatherApp/mainHead.png';

import ImagesMock from '../assets/weatherApp/responsive.webp';
import PageGuides from '../components/PageGuides/pageguides';

const Weather = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Mo Magan | Weather</title>
          <meta name="description" content="Progressive weather App" />
        </Helmet>
        <ShortProjectTemplate
          Title="Progressive"
          Subtitle="Weather App"
          BannerImage={BannerImage}
          infoHeadingImage={infoHeadingImage}
          infoHeading=" MosDev Is VsCode dark theme based on Monokai theme colours and
              inspired by this artwork of my fave raper."
          viewCode="https://marketplace.visualstudio.com/items?itemName=MosDev.MosDev-Theme"
          button1="view"
          viewLive="https://marketplace.visualstudio.com/items?itemName=MosDev.MosDev-Theme"
          button2="Marketplace"
          infoImage={MainImage}
          ProjectHeading="Progressive web app"
          ImagesMock={ImagesMock}
        />
      </div>
      <PageGuides nextProject="./Favetees" />
    </>
  );
};

export default Weather;
