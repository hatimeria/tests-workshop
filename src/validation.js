export const validateText = (text) => (
    text && !/[^a-zA-Z]/.test(text)
);