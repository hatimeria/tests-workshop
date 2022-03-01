import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Nameday from './Nameday';

test('renders button', () => {
  render(<Nameday name="Mieszko" />);
  const button = screen.getByRole('button', { name: 'See your namedays' });
  expect(button).toBeInTheDocument();
});

test('doesnt render button if name wasnt passed', () => {
  render(<Nameday name="" />);
  const button = screen.queryByRole('button', { name: 'See your namedays' });
  expect(button).not.toBeInTheDocument();
});

test('nameday is displayed when the button is clicked', async () => {
  render(<Nameday name="Igor" />);
  const button = screen.getByRole('button', { name: 'See your namedays' });
  fireEvent.click(button);
  const list = await screen.findByRole('list');
  expect(list).toBeInTheDocument();

  const namedays = await screen.findAllByRole('listitem');
  expect(namedays).toHaveLength(2);
});

test('renders correctly', () => {
  const tree = renderer
    .create(<Nameday name="Częstogniew" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});