/* eslint-disable spaced-comment */
import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectsTemplate from '../components/projects-template/projects-template';

import PortoCover from '../assets/portfolio/cover.jpeg';
import Colors from '../assets/portfolio/colorsTech.png';
import ProjDelImage1 from '../assets/portfolio/typography.webp';
import ProjDelImage2 from '../assets/portfolio/logo.webp';
import ProjDelImage3 from '../assets/portfolio/colors_4.png';
import ProjDelImage4 from '../assets/portfolio/buttons_1.png';
import ProjDelImage5 from '../assets/portfolio/animation_2.png';
import ProjDelImage6 from '../assets/portfolio/icons_2.png';
import ProjFeatImage1 from '../assets/portfolio/scroll.webp';
import ProjFeatImage2 from '../assets/portfolio/accordian.webp';
import ProjFeatImage3 from '../assets/portfolio/contactForm.webp';
import FeatureImage from '../assets/portfolio/FIE3.png';
import ProjImages1 from '../assets/portfolio/mainImages1.jpg';
import ProjImages2 from '../assets/portfolio/mainImage2.jpg';
import ProjImages3 from '../assets/portfolio/mainImage3.jpg';
import ProjImages4 from '../assets/portfolio/portfolio2.mp4';

const Portfolio = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Mo Magan | Portfolio</title>
          <meta name="description" content="Portfolio" />
        </Helmet>
        <ProjectsTemplate
          title="Portfolio"
          mainImage={PortoCover}
          projectInitial="p"
          projectTitle="Portfolio"
          projectIntro="Archiving samples of your work to a portfolio is a terrific approach to keep track of your accomplishments and make note of when you acquired crucial competencies outside of a job or client search."
          client="Client"
          clientName="Me"
          web="Website"
          plus="+"
          technology="technology"
          techUsed="Adobe and firebase"
          projColorImage={Colors}
          role="role"
          roleType="Desing and Development"
          // button
          viewCode="https://github.com/Amiinoz/portfolio-v1"
          year="Year"
          yearOfDev="2021"
          //button
          seeItLive="http://momagan.com"
          ////////////////////////////////////Deliverables///////////////////////
          delivTitle="Deliverables"
          projDelImage1={ProjDelImage1}
          projDelHead1="Typography"
          projDelBody1="I chose playful yet minimalist fonts to grab the attention of the reader"
          projDelImage2={ProjDelImage2}
          projDelHead2="Logo"
          projDelBody2="Minimal logo While the practise adheres to the principle of less is more, the emphasis is on restraint in order to maximise effect."
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
          projFeatHead1="Horizontal scroll"
          projFeatBody1="Effective pricing tables help users compare the different
                      features quickly."
          projFeatImage2={ProjFeatImage2}
          projFeatHead2="Accordion Menu"
          projFeatBody2="Effective pricing tables help users compare the different
                      features quickly."
          projFeatImage3={ProjFeatImage3}
          projFeatHead3="Contact Form"
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
          nextProject="./Garabaldi"
        />
      </div>
    </>
  );
};

export default Portfolio;
