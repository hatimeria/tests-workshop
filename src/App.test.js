import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders welcome message', () => {
  // render component first
  render(<App />);
  // use screen and getBy function to get DOM element
  const message = screen.getByText(/hello stranger!/i);
  // we make an assertion
  expect(message).toBeInTheDocument();
});

test('renders input with no default value', () => {
  render(<App />);
  // getByRole - ARIA role
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

// some content is repeated. we can always group tests into describe()
// and make setup for all of them with beforeEach(() => {})
test('display error message if name is incorrect', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: '2454%' } });
  const error = screen.getByRole('alert');
  expect(error).toBeInTheDocument();
});

// Snapshot test
test('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});