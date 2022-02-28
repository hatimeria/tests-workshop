export const validateText = (text) => (
  text && /^[\p{L}\p{N}\p{M}-]+$/u.test(text)
);