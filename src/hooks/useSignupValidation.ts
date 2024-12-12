export const useSignupValidation = () => {
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const hasValidLength =
      password.length >= 8 && password.length <= 32 && !/\s/.test(password);

    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const typeCount = [hasLetter, hasNumber, hasSpecial].filter(Boolean).length;
    const hasTwoTypes = typeCount >= 2;

    const hasNoConsecutive = !/(.)\1\1/.test(password);

    return {
      hasValidLength: hasValidLength,
      hasTwoTypes,
      hasNoConsecutive,
    };
  };

  const validatePasswordMatch = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };

  return {
    validateEmail,
    validatePassword,
    validatePasswordMatch,
  };
};
