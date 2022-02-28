import { render, screen, fireEvent } from '@testing-library/react';
import Nameday from './Nameday';

test('renders button', () => {
  render(<Nameday />);
  const button = screen.getByRole('button', { name: 'See your namedays' });
  expect(button).toBeInTheDocument();

  const list = screen.queryByRole('list');
  expect(list).not.toBeInTheDocument();
});

test('nameday is displayed when the button is clicked', () => {
  render(<Nameday />);
  const button = screen.getByRole('button', { name: 'See your namedays' });
  fireEvent.click(button);
  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
});