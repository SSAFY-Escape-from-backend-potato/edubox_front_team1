import "./LoginMoreAction.css";

const LoginMoreAction = () => {
  return (
    <p className="login-more-action">
      <a href="/signin/find/email" className="more-action__text">
        이메일 찾기
      </a>
      <span className="more-action-divider">|</span>
      <a href="/signin/find/password" className="more-action__text">
        비밀번호 찾기
      </a>
      <span className="more-action-divider">|</span>
      <a
        href="/signup"
        className="more-action__text more-action__text--sign-up"
      >
        회원가입
      </a>
    </p>
  );
};

export default LoginMoreAction;
