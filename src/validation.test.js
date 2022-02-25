import { validateText } from './validation';

describe('text validation', () => {
    test('works for valid name', () => {
        expect(validateText('Piotr')).toBeTruthy();
    });
    test('works for Polish characters', () => {
        expect(validateText('Grażyna')).toBeTruthy();
    });
    test('works for text with invalid characters', () => {
        expect(validateText('djdks5')).toBeFalsy();
    });
    test('works for empty string', () => {
        expect(validateText('')).toBeFalsy();
    });
});