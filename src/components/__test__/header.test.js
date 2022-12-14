import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../../components/header';

afterEach(() => {
  cleanup();
});

test('should render header component', () => {
  // expect(true).toBe(true);
  render(<Header />);

  const headerElement = screen.getByTestId('head');
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent('Hi, I am Mohamed');
});
