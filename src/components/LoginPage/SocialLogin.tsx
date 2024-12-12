import KakaoButton from "./KakaoButton";
import GoogleButton from "./GoogleButton";
import NaverButton from "./NaverButton";
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
