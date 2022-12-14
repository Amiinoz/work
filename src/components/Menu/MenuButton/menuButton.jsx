import React, { useContext } from 'react';
import { MenuContext } from '../MenuManager';
import cn from 'classnames';

import '../../../styles/components/menuButton.scss';

export default function MenuButton() {
  const { open, setOpen } = useContext(MenuContext);
  return (
    <div className={cn('menu-button-wrap', { open })}>
      <button
        data-testid="menuButton"
        className="menu-button"
        onClick={props => setOpen(!open)}
      >
        <span />
      </button>
    </div>
  );
}
