import "./EmailInput.css";
import "./common.css";

interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
  isValidEmail: boolean;
  isEmailVerified: boolean;
}

const EmailInput = ({
  email,
  setEmail,
  isValidEmail,
  isEmailVerified,
}: EmailInputProps) => {
  return (
    <div className="signup-input-group">
      <label className="signup-input-label" htmlFor="email">
        이메일
      </label>
      <div className="signup-input-wrapper">
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@edubox.com"
          required
          aria-invalid={!isValidEmail && email !== ""}
          autoComplete="username"
        />
        <button
          type="button"
          className="verify-email-btn"
          disabled={!isValidEmail}
        >
          인증하기
        </button>
      </div>
      {email !== "" && (
        <>
          {!isValidEmail && (
            <div className="signup-input-message error">
              <i className="fa-solid fa-xmark"></i>
              <p>이메일 형식이 올바르지 않습니다</p>
            </div>
          )}
          {isValidEmail && isEmailVerified && (
            <div className="signup-input-message success">
              <p>인증되었습니다</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EmailInput;
