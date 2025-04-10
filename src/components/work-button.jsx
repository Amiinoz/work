import React, { useContext } from 'react';
import { Plus } from 'react-feather';
import { MenuContext } from './Menu/MenuManager';
import cn from 'classnames';

import '../styles/components/work-button.scss';

export default function WorkButton() {
  const { setOpen, open } = useContext(MenuContext);

  return (
    <button
      className={cn('projects-button', { open })}
      onClick={() => setOpen(!open)}
    >
      <span>Work</span> <Plus />
    </button>
  );
}
