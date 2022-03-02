import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Nameday from './Nameday';
import { rest } from 'msw';
import { server } from '../mocks/server';

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
  // We need to await for list to appear and use findBy
  const list = await screen.findByRole('list');
  expect(list).toBeInTheDocument();

  const namedays = await screen.findAllByRole('listitem');
  expect(namedays).toHaveLength(2);
});

test('handles error', async () => {
  // We can override handlers to test what happens if API return an error
  server.resetHandlers(
    rest.get('https://nameday.abalin.net/api/V1/getname', (req, res, ctx) =>
      res(ctx.status(500))
    )
  );
  render(<Nameday name="Igor" />);
  const button = screen.getByRole('button', { name: 'See your namedays' });
  fireEvent.click(button);
  const errorMessage = await screen.findByText('Sth went wrong, try again');
  expect(errorMessage).toBeInTheDocument();
});

test('renders correctly', () => {
  const tree = renderer
    .create(<Nameday name="Częstogniew" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});