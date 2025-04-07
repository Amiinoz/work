import React, { useContext } from 'react';
import { MenuContext } from '../MenuManager';
import cn from 'classnames';
import '../../../styles/components/menuContent.scss';

const internalLinks = [
  {
    url: '/DigitalDivide',
    component: <span>DigitalDivide</span>,
    src: require('../../../assets/digitalDivide/dd.png').default,
  },
  {
    url: '/TheBrdge',
    component: <span>TheBrdge</span>,
    src: require('../../../assets/theBrdge/thebridge-banner.png').default,
  },
  {
    url: '/oneup',
    component: <span>OneUp</span>,
    src: require('../../../assets/oneup/oneup_banner.png').default,
  },

  {
    url: '/posty',
    component: <span>Posty</span>,
    src: require('../../../assets/posty/posty_banner.png').default,
  },

  {
    url: '/Portfolio',
    component: <span>Portfolio</span>,
    src: require('../../../assets/portfolio/portfolio_banner.jpeg').default,
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
