import { useState } from "react";

export const usePasswordVisibility = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  return {
    showPassword,
    showPasswordConfirm,
    togglePasswordVisibility,
    togglePasswordConfirmVisibility,
  };
};
