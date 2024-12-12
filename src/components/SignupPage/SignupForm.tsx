import { useState } from "react";
import EmailInput from "./SignupForm/EmailInput";
import PasswordInput from "./SignupForm/PasswordInput";
import PasswordConfirmInput from "./SignupForm/PasswordConfirmInput";
import { usePasswordVisibility } from "../../hooks/usePasswordVisibility";
import { useSignupValidation } from "../../hooks/useSignupValidation";
import "./SignupForm.css";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const { showPassword, togglePasswordVisibility } = usePasswordVisibility();
  const { showPasswordConfirm, togglePasswordConfirmVisibility } =
    usePasswordVisibility();
  const { validateEmail, validatePassword, validatePasswordMatch } =
    useSignupValidation();

  const isValidEmail = validateEmail(email);
  const passwordValidation = validatePassword(password);
  const passwordsMatch = validatePasswordMatch(password, passwordConfirm);

  return (
    <form className="signup-form">
      <EmailInput
        email={email}
        setEmail={setEmail}
        isValidEmail={isValidEmail}
        isEmailVerified={isEmailVerified}
      />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
        passwordValidation={passwordValidation}
      />
      <PasswordConfirmInput
        passwordConfirm={passwordConfirm}
        setPasswordConfirm={setPasswordConfirm}
        showPasswordConfirm={showPasswordConfirm}
        togglePasswordConfirmVisibility={togglePasswordConfirmVisibility}
        passwordsMatch={passwordsMatch}
      />
      <button type="submit" className="signup-submit-btn">
        가입하기
      </button>
    </form>
  );
};

export default SignupForm;
