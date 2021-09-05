export const validateEmail = (email: string) => {

    const validRegex = /^[a-zA-Z0-9.^]+@successive.tech/;

    return validRegex.test(email);
};
