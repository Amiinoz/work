import React, { useContext } from 'react';
import { MenuContext } from '../MenuManager';
import cn from 'classnames';
import '../../../styles/components/menuContent.scss';

const internalLinks = [
  {
    url: '/oneup/',
    component: <span>OneUp</span>,
    src: require('../../../assets/oneup/oneup_banner.png').default,
  },
  {
    url: '/tessa/',
    component: <span>Tessa</span>,
    src: require('../../../assets/tessa/tessa_banner.png').default,
  },

  {
    url: '/posty/',
    component: <span>Posty</span>,
    src: require('../../../assets/posty/posty_banner.png').default,
  },

  {
    url: '/Favetees/',
    component: <span>Favetees</span>,
    src: require('../../../assets/favetees/favetees_banner.webp').default,
  },
  {
    url: '/Covid19Tracker/',
    component: <span>Covid tracker</span>,
    src: require('../../../assets/covid19-tracker/covid_banner.jpeg').default,
  },

  {
    url: '/Portfolio/',
    component: <span>Portfolio</span>,
    src: require('../../../assets/portfolio/portfolio_banner.jpeg').default,
  },

  {
    url: '/Garabaldi/',
    component: <span>Garabaldi</span>,
    src: require('../../../assets/garabaldi/garabaldi_banner.avif').default,
  },
];

export default function MenuContent({ component }) {
  const { open } = useContext(MenuContext);

  return (
    <div className="menu-holder " data-testid="menu-content">
      <div className={cn('menu-inside', { open })}>
        <div className="menu-nav-container">
          <ul className="internal-nav-links">
            {internalLinks.map(link => (
              <li key={link.url}>
                <a style={{ display: 'table-cell' }} href={link.url}>
                  {link.component}
                </a>
                <img src={link.src} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
