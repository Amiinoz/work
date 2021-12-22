/* eslint-disable spaced-comment */
import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectsTemplate from '../components/projects-template/projects-template';
import TravCover from '../assets/garabaldi/cover.jpeg';
import Colors from '../assets/garabaldi/colorsTeck.png';
import ProjDelImage1 from '../assets/garabaldi/typography.png';
import ProjDelImage2 from '../assets/garabaldi/logo.png';
import ProjDelImage3 from '../assets/garabaldi/colors.png';
import ProjDelImage4 from '../assets/garabaldi/buttons.png';
import ProjDelImage5 from '../assets/garabaldi/animation_1.png';
import ProjDelImage6 from '../assets/garabaldi/icons_1.png';
import ProjFeatImage1 from '../assets/garabaldi/pricetable.png';
import ProjFeatImage2 from '../assets/garabaldi/tourguide.png';
import ProjFeatImage3 from '../assets/garabaldi/testimonial.png';
import FeatureImage from '../assets/garabaldi/feutures_display.png';
import ProjImages1 from '../assets/garabaldi/projectImages1.png';
import ProjImages2 from '../assets/garabaldi/projectImages2.png';
import ProjImages3 from '../assets/garabaldi/projectImages3.png';
import ProjImages4 from '../assets/garabaldi/projectImages4.mp4';

const Garabaldi = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Mo Magan | Garabladi</title>
          <meta name="description" content="Garabaldi" />
        </Helmet>
        <ProjectsTemplate
          title="Garabaldi"
          mainImage={TravCover}
          projectInitial="g"
          projectTitle="Garabaldi"
          projectIntro="Garabaldi is vacationresort that overs tour guides and
                    relaxation spa the Camen islands. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Debitis facere reiciendis
                    eum optio fuga odit neque, et nisi perferendis deserunt
                    nobis"
          client="Client"
          clientName="Garabaldi"
          web="Website"
          plus="+"
          technology="technology"
          techUsed="Adobe CS HTML5, Css, Sass"
          projColorImage={Colors}
          role="role"
          roleType="Desing and Development"
          // button
          viewCode="https://github.com/Amiinoz/garabaldi"
          year="Year"
          yearOfDev="2019"
          //button
          seeItLive="https://garabaldi.netlify.app/"
          ////////////////////////////////////Deliverables///////////////////////
          delivTitle="Deliverables"
          projDelImage1={ProjDelImage1}
          projDelHead1="Typography"
          projDelBody1="Simple yet elegant font that can be used either body or
                    headlines"
          projDelImage2={ProjDelImage2}
          projDelHead2="Logo"
          projDelBody2="The logo is based tropical water lilies can play a large
                    part in emphasizing the beauty and tranquility"
          projDelImage3={ProjDelImage3}
          projDelHead3="Colors"
          projDelBody3="Science says that looking at colours can relax you. That’s
                    right, colours have an enormous impact on us,
                    psychologically, emotionally and even physically."
          projDelImage4={ProjDelImage4}
          projDelHead4="Buttons"
          projDelBody4="Science says that looking at colours can relax you. That’s
                    right, colours have an enormous impact on us,
                    psychologically, emotionally and even physically."
          projDelImage5={ProjDelImage5}
          projDelHead5="Animation"
          projDelBody5="Settle animation leaves a memorable impression to current and potential new customers."
          projDelImage6={ProjDelImage6}
          projDelHead6="Icons"
          projDelBody6="Creating minimal icons that start with great form of recognition, as well as consistent across the set. "
          ////////////////////////////////////Features///////////////////////
          featTitle="Features"
          projFeatImage1={ProjFeatImage1}
          projFeatHead1="Price table"
          projFeatBody1="Effective pricing tables help users compare the different
                      features quickly."
          projFeatImage2={ProjFeatImage2}
          projFeatHead2="Tour guides"
          projFeatBody2="Effective pricing tables help users compare the different
                      features quickly."
          projFeatImage3={ProjFeatImage3}
          projFeatHead3="Testimonials"
          projFeatBody3="Consistency in content, scalability, and a simple layout
                      are some of the most important."
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
          ////////////////////////////////////page guides///////////////////////
          nextProject="./MosDev.js"
        />
        {/* <PageGuides nextProject="./MosDev" /> */}
      </div>
    </>
  );
};

export default Garabaldi;
