import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const message = screen.getByText('Hello stranger!');
  expect(message).toBeInTheDocument();
});

test('renders input with no default value', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  expect(input.value).toBe('');
});

test('displays name after sending form', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  const message = screen.getByText('Hello stranger!');
  fireEvent.change(input, { target: { value: 'Julia' } });
  expect(message.textContent).toBe('Hello Julia!');
});

test('display error message if name is incorrect', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: '2454%' } });
  const error = screen.getByRole('alert');
  expect(error).toBeInTheDocument();
});