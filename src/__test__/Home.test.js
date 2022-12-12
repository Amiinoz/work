import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '../pages/Home';

describe('Home', () => {
  it('renders Home component', () => {
    render(<Home />);
    screen.debug();
  });
});
