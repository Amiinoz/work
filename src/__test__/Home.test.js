import { render, screen } from '@testing-library/react';
// import Home from '../pages/Home';
import Header from '../components/header';

test('should render heading ', () => {
  // render(<Home />);
  render(<Header />);
  const textElement = screen.getByText(/Creative/);
  expect(textElement).toBeTruthy();
});
