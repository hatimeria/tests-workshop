import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const message = screen.getByText('Hello stranger!');
  expect(message).toBeInTheDocument();
});

test('renders input and button', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  expect(input.value).toBe('');
});

test('display name after sending form', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  const message = screen.getByText('Hello stranger!');
  fireEvent.change(input, { target: { value: 'Julia' } });
  expect(message.textContent).toBe('Hello Julia!');
});