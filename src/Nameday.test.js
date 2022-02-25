import { render, screen } from '@testing-library/react';
import Nameday from './Nameday';

test('renders button', () => {
    render(<Nameday />);
    const button = screen.getByRole('button', { name: 'See your namedays' });
    expect(button).toBeInTheDocument();
});

test('nameday is displayed when the button is clicked', () => {

});