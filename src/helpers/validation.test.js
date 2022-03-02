import { validateText } from './validation';

// tests are grouped with describe()
describe('text validation', () => {
  test('passes for valid name', () => {
    expect(validateText('Piotr')).toBeTruthy();
  });
  test('passes for name with Polish characters', () => {
    expect(validateText('Grażyna')).toBeTruthy();
  });
  test('doesnt pass for text with invalid characters', () => {
    expect(validateText('djdks%5')).toBeFalsy();
  });
  test('doesnt pass for empty string', () => {
    expect(validateText('')).toBeFalsy();
  });
});