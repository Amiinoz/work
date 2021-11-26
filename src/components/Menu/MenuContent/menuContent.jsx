import React, { useContext } from 'react';
import { MenuContext } from '../MenuManager';
// import { Facebook, Instagram, Youtube, Dribbble, Twitch } from 'react-feather';
import cn from 'classnames';
import './menuContent.scss';

const internalLinks = [
  {
    url: '/Favetees/',
    component: <span>Favetees</span>,
    src: 'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80',
  },
  {
    url: '/Covid19Tracker/',
    component: <span>Covid Tracker</span>,
    src: 'https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
  },

  {
    url: '/Portfolio/',
    component: <span>Portfolio</span>,
    src: 'https://images.unsplash.com/photo-1517323197145-72f28d311d51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1738&q=80',
  },

  {
    url: '/Garabaldi/',
    component: <span>Garabaldi</span>,
    src: 'https://images.unsplash.com/photo-1622137276463-5d2b374cad11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80',
  },
  {
    url: '/MosDev/',
    component: <span>VsCode Theme</span>,
    src: 'https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2524&q=80',
  },

  {
    url: '/Weather/',
    component: <span>PWA Weather</span>,
    src: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1208&q=80 ',
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
      <div className={cn('menu-inside', { open })}>
        <div className="menu-nav-container">
          <ul className="internal-nav-links">
            {internalLinks.map(link => (
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
