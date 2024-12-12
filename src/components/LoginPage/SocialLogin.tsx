import KakaoButton from "./Button/KakaoButton";
import GoogleButton from "./Button/GoogleButton";
import NaverButton from "./Button/NaverButton";
import "./SocialLogin.css";

const SocialLogin = () => {
  return (
    <div className="social-login">
      <p>간편 로그인</p>
      <div className="social-btns">
        <KakaoButton />
        <GoogleButton />
        <NaverButton />
      </div>
    </div>
  );
};

export default SocialLogin;
