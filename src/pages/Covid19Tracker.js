/* eslint-disable spaced-comment */
import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectsTemplate from '../components/projects-template/projects-template';

import MainImage from '../assets/covid19-tracker/cover.jpeg';
import Colors from '../assets/covid19-tracker/colorsSmall.png';
import ProjDelImage1 from '../assets/covid19-tracker/typography.png';
import ProjDelImage2 from '../assets/covid19-tracker/logo.png';
import ProjDelImage3 from '../assets/covid19-tracker/colors.png';
import ProjDelImage4 from '../assets/covid19-tracker/globalIcon.png';
import ProjDelImage5 from '../assets/covid19-tracker/charts.png';
import ProjDelImage6 from '../assets/covid19-tracker/infoCard.png';
import ProjFeatImage1 from '../assets/covid19-tracker/recoveredIcon.png';
import ProjFeatImage2 from '../assets/covid19-tracker/infectedIcons.png';
import ProjFeatImage3 from '../assets/covid19-tracker/deathsIcon.png';
import FeatureImage from '../assets/covid19-tracker/FIE2.png';
import ProjImages1 from '../assets/covid19-tracker/projectImages1.jpg';
import ProjImages2 from '../assets/covid19-tracker/projectImages2.jpg';
import ProjImages3 from '../assets/covid19-tracker/projectImages3.jpg';
import ProjImages4 from '../assets/covid19-tracker/website.mp4';

const Covid19Tracker = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Covid Tracker | Mo Magan Portfolio</title>
          <meta
            name="description"
            content="Covid Tracker is an app that tracks covid infections around the world"
          />
        </Helmet>
        <ProjectsTemplate
          title="Covid19 Tracker"
          mainImage={MainImage}
          projectInitial="C"
          projectTitle="Covid Tracker"
          projectIntro="Covid19 Tracker is Covid-19 globalTracker"
          client="Client"
          clientName="Projects"
          web=" Web App"
          plus="+"
          technology="technology"
          techUsed="React,  react-charts and Material Ui"
          projColorImage={Colors}
          role="role"
          roleType="Full Stack Development"
          // button
          viewCode="https://github.com/Amiinoz/covid-19-tracker"
          year="Year"
          yearOfDev="2021"
          //button
          seeItLive="https://covid-19-globaltracker.netlify.app/"
          delivTitle="Deliverables"
          projDelImage1={ProjDelImage1}
          projDelHead1="Typography"
          projDelBody1="Helvetica is one of the most famous and popular typefaces in the world."
          projDelImage2={ProjDelImage2}
          projDelHead2="Logo"
          projDelBody2="Clean logo supporting theme color"
          projDelImage3={ProjDelImage3}
          projDelHead3="Colors"
          projDelBody3="Colors representing hope, resilience and perseverance of the human spirit"
          projDelImage4={ProjDelImage4}
          projDelHead4="Global Data"
          projDelBody4="Showcasing global and local data collected"
          projDelImage5={ProjDelImage5}
          projDelHead5="Charts"
          projDelBody5="Organizing large amounts of data clearly and concisely to interpret current virus trends."
          projDelImage6={ProjDelImage6}
          projDelHead6="Cards"
          projDelBody6="Cards to display demographics for the 3 main sections and changes. "
          featTitle="Features"
          projFeatImage1={ProjFeatImage1}
          projFeatHead1="Recovered"
          projFeatBody1="Population that recovered from Covid-19 infection Globaly ."
          projFeatImage2={ProjFeatImage2}
          projFeatHead2="Invected"
          projFeatBody2=" Amount of population that got invected with Covid-19."
          projFeatImage3={ProjFeatImage3}
          projFeatHead3="Deaths"
          projFeatBody3="Amount of people that died from Covid-19 Globaly R.I.P."
          featuresImage={FeatureImage}
          ////////////////////////////////////Images///////////////////////
          imagesHead="High fidelity Mockups"
          projImgTitle1="Mockups"
          projImgInfo1="Stepping outside of the traditional formats used for client
                    reviews and creating a custom-tailored approach."
          projImages1={ProjImages1}
          projImgTitle2="Design"
          projImgInfo2=" Getting your clients to get involve in your process and creativity as much as the final product."
          projImages2={ProjImages2}
          projImgTitle3="Mobile"
          projImgInfo3=" More and More customers use mobile and tablet devices to browse online hence the importance of having responsive site."
          projImages3={ProjImages3}
          projImgTitle4="Website"
          projImgInfo4="Everything comes together; the deliverables, features and design."
          projImages4={ProjImages4}
          nextProject="./Portfolio"
        />
      </div>
    </>
  );
};

export default Covid19Tracker;
