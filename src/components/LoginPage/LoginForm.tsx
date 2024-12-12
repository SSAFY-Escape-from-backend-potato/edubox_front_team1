import { usePasswordVisibility } from "src/hooks/usePasswordVisibility";
import "./LoginForm.css";

const LoginForm = () => {
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility();

  return (
    <form className="login-form">
      <div className="input-group">
        <input type="email" placeholder="이메일" required />
      </div>
      <div className="input-group password-group">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호"
          required
        />
        <button
          type="button"
          className="password-toggle"
          onClick={togglePasswordVisibility}
        >
          <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
        </button>
      </div>
      <button type="submit" className="login-btn">
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
