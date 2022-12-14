import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuContent from '../Menu/MenuContent/menuContent';

afterEach(() => {
  cleanup();
});

test('should render header component', () => {
  // expect(true).toBe(true);
  render(<MenuContent />);

  const menuElement = screen.getByTestId('menu-content');
  expect(menuElement).toBeInTheDocument();

  const linkEl1 = screen.getByRole('link', { name: 'OneUp' });
  expect(linkEl1).toHaveAttribute('href', '/oneup/');

  const linkEl2 = screen.getByRole('link', { name: 'Tessa' });
  expect(linkEl2).toHaveAttribute('href', '/tessa/');

  const linkEl3 = screen.getByRole('link', { name: 'Posty' });
  expect(linkEl3).toHaveAttribute('href', '/posty/');

  const linkEl4 = screen.getByRole('link', { name: 'Favetees' });
  expect(linkEl4).toHaveAttribute('href', '/Favetees/');

  const linkEl5 = screen.getByRole('link', { name: 'Covid tracker' });
  expect(linkEl5).toHaveAttribute('href', '/Covid19Tracker/');

  const linkEl6 = screen.getByRole('link', { name: 'Portfolio' });
  expect(linkEl6).toHaveAttribute('href', '/Portfolio/');

  const linkEl7 = screen.getByRole('link', { name: 'Garabaldi' });
  expect(linkEl7).toHaveAttribute('href', '/Garabaldi/');
});
