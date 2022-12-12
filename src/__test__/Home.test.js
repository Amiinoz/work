import { render, screen } from '@testing-library/react';
import Header from '../components/header';

test('should render heading ', () => {
  render(<Header />);
  const textElement = screen.getByText(/Creative/);
  expect(textElement).toBeTruthy();
});
