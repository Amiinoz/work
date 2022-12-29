/* eslint-disable spaced-comment */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectsTemplate from '../components/projects-template/projects-template';
import ProjDelImage1 from '../assets/favetees/typography_1.png';
import ProjDelImage2 from '../assets/favetees/logo_1.png';
import ProjDelImage3 from '../assets/favetees/colors_1.png';
import ProjDelImage4 from '../assets/favetees/buttons-image.png';

import FaveCover from '../assets/favetees/favetees_banner.webp';
import Colors from '../assets/favetees/colorsSmall_1.png';
import ProjDelImage5 from '../assets/favetees/animation.png';
import ProjDelImage6 from '../assets/favetees/icons.png';
import ProjFeatImage1 from '../assets/favetees/shoppingCartIcon.png';
import ProjFeatImage2 from '../assets/favetees/paymentIcon.png';
import ProjFeatImage3 from '../assets/favetees/checkOutIcon.png';
import FeatureImage from '../assets/favetees/feu1.png';
import ProjImages1 from '../assets/favetees/projectImages1_1.jpg';
import ProjImages2 from '../assets/favetees/projectImages2_2.jpg';
import ProjImages3 from '../assets/favetees/projectImages3_1.jpg';
import ProjImages4 from '../assets/favetees/faveteesInAction.mp4';

const Favetees = () => {
  return (
    <>
      <div data-scroll-section>
        <Helmet>
          <title>Favetees | Mo Magan Portfolio</title>
          <meta
            name="description"
            content="Favetees is eCommerce project website that sells t-shirts"
          />
          <link rel="canonical" href="https://momagan.com/favetees" />
        </Helmet>
        <ProjectsTemplate
          title="favetees"
          mainImage={FaveCover}
          projectInitial="F"
          projectTitle="Favetees"
          projectIntro="Favetees is a fully functional eCommerce application using commerce.js. and Stripe, with shopping cart secure Stripe payment and global shipment."
          client="Client"
          clientName="Projects"
          web="eCommerce site"
          plus="+"
          technology="technology"
          techUsed="React, Commerce.js and Stripe"
          projColorImage={Colors}
          role="role"
          roleType="Full Stack Development"
          viewCode="https://github.com/Amiinoz/favetees"
          year="Year"
          yearOfDev="2021"
          seeItLive="https://favetees.netlify.app/"
          delivTitle="Deliverables"
          projDelImage1={ProjDelImage1}
          projDelHead1="Typography"
          projDelBody1="Roboto features friendly and open curves, ideal for eCommerce site."
          projDelImage2={ProjDelImage2}
          projDelHead2="Logo"
          projDelBody2="Simple yet elegant. the logo has initials with compass"
          projDelImage3={ProjDelImage3}
          projDelHead3="Colors"
          projDelBody3="The red is associated with the heat of passion and love. while blue represents trust."
          projDelImage4={ProjDelImage4}
          projDelHead4="Buttons"
          projDelBody4="Large and bright button for action call."
          projDelImage5={ProjDelImage5}
          projDelHead5="Animation"
          projDelBody5="Slider to show case new product launch and promotions."
          projDelImage6={ProjDelImage6}
          projDelHead6="Icons"
          projDelBody6="Simple clear and cohesive icons to guide customers to your target. "
          featTitle="Features"
          projFeatImage1={ProjFeatImage1}
          projFeatHead1="Shopping Cart"
          projFeatBody1="shopping cart on an online retailer's site is a piece of software that facilitates the purchase of a product or service."
          projFeatImage2={ProjFeatImage2}
          projFeatHead2="Stripe Payments"
          projFeatBody2="Providing the best payment methods to your visitors while maintaining as many sales as possible and high level security."
          projFeatImage3={ProjFeatImage3}
          projFeatHead3="Global Shipping"
          projFeatBody3="Selling beyond your borders can be an important growth area for your business."
          featuresImage={FeatureImage}
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
          nextProject="./Covid19Tracker"
        />
      </div>
    </>
  );
};

export default Favetees;
