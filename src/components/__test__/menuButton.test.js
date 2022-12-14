import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import MenuButton from '../Menu/MenuButton/menuButton';

afterEach(() => {
  cleanup();
});

test('renders Menu and checks link are not broken component', () => {
  // expect(true).toBe(true);
  render(<MenuButton />);

  // const headerElement = screen.getByTestId('head');
  // expect(headerElement).toBeInTheDocument();
  // expect(headerElement).toHaveTextContent('Hi, I am Mohamed');
});
