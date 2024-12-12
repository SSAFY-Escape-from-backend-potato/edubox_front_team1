import "./common.css";

interface PasswordConfirmInputProps {
  passwordConfirm: string;
  setPasswordConfirm: (passwordConfirm: string) => void;
  showPasswordConfirm: boolean;
  togglePasswordConfirmVisibility: () => void;
  passwordsMatch: boolean;
}

const PasswordConfirmInput = ({
  passwordConfirm,
  setPasswordConfirm,
  showPasswordConfirm,
  togglePasswordConfirmVisibility,
  passwordsMatch,
}: PasswordConfirmInputProps) => {
  return (
    <div className="signup-input-group">
      <label className="signup-input-label" htmlFor="passwordConfirm">
        비밀번호 확인
      </label>
      <div className="signup-input-wrapper signup-password-group">
        <input
          id="passwordConfirm"
          type={showPasswordConfirm ? "text" : "password"}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="비밀번호를 한번 더 입력해 주세요"
          required
          aria-invalid={passwordConfirm !== "" && !passwordsMatch}
        />
        <button
          type="button"
          className="signup-password-toggle"
          onClick={togglePasswordConfirmVisibility}
          aria-label="비밀번호 확인 보기"
        >
          <i
            className={`fas ${showPasswordConfirm ? "fa-eye-slash" : "fa-eye"}`}
          ></i>
        </button>
      </div>
      {passwordConfirm !== "" && !passwordsMatch && (
        <div className="signup-input-message error">
          <i className="fa-solid fa-xmark"></i>
          <p>비밀번호가 일치하지 않습니다</p>
        </div>
      )}
    </div>
  );
};

export default PasswordConfirmInput;
