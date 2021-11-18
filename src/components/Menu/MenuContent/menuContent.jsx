import React, { useContext } from "react";
import { MenuContext } from "../MenuManager";
import { Facebook, Instagram, Youtube, Dribbble, Twitch } from "react-feather";
import cn from "classnames";

import "./menuContent.scss";

const internalLinks = [
  {
    url: "/projects/Favetees/",
    component: <span>Favetees</span>,
    src: require("../../../../public/assets/favetees/projectPrimaryImageNaV.webp"),
  },
  {
    url: "/projects/Covid19Tracker/",
    component: <span>Covid Tracker</span>,
    src: require("../../../../public/assets/covid19-tracker/projectPrimaryImageNav.webp"),
  },

  {
    url: "/projects/Portfolio/",
    component: <span>Portfolio</span>,
    src: require("../../../../public/assets/portfolio/projectPrimaryImageNav.webp"),
  },

  {
    url: "/projects/Garabaldi/",
    component: <span>Garabaldi</span>,
    src: require("../../../../public/assets/garabaldi/projectPrimaryImage.webp"),
  },
  {
    url: "/projects/MosDev/",
    component: <span>VsCode Theme</span>,
    src: require("../../../../public/assets/mosdev/projectPrimaryImageNav.webp"),
  },

  {
    url: "/projects/Weather/",
    component: <span>PWA Weather</span>,
    src: require("../../../../public/assets/weatherApp/projectPrimaryImageNav.webp"),
  },
  // {
  //   url: "contact",
  //   component: <span>Contact</span>,
  //   src: require("../../../../public/assets/garabaldi/proj1/projectPrimaryImage.png"),
  // },
];

export default function MenuContent() {
  const { open } = useContext(MenuContext);
  return (
    <div className="menu-holder">
      <div className={cn("menu-inside", { open })}>
        <div className="menu-nav-container">
          <ul className="internal-nav-links">
            {internalLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.component}</a>
                <img src={link.src} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
