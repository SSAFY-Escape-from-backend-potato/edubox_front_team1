import PasswordValidationList from "./PasswordValidationList";
import "./PasswordInput.css";
import "./common.css";

interface PasswordInputProps {
  password: string;
  setPassword: (password: string) => void;
  showPassword: boolean;
  togglePasswordVisibility: () => void;
  passwordValidation: {
    hasTwoTypes: boolean;
    hasValidLength: boolean;
    hasNoConsecutive: boolean;
  };
}

const PasswordInput = ({
  password,
  setPassword,
  showPassword,
  togglePasswordVisibility,
  passwordValidation,
}: PasswordInputProps) => {
  return (
    <div className="signup-input-group">
      <label className="signup-input-label" htmlFor="password">
        비밀번호
      </label>
      <div className="signup-input-wrapper signup-password-group">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해 주세요"
          required
          aria-invalid={
            password !== "" &&
            (!passwordValidation.hasTwoTypes ||
              !passwordValidation.hasValidLength ||
              !passwordValidation.hasNoConsecutive)
          }
        />
        <button
          type="button"
          className="signup-password-toggle"
          onClick={togglePasswordVisibility}
          aria-label="비밀번호 보기"
        >
          <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
        </button>
      </div>
      <PasswordValidationList
        password={password}
        passwordValidation={passwordValidation}
      />
    </div>
  );
};

export default PasswordInput;
