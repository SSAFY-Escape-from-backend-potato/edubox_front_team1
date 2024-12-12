import KakaoButton from "./Button/KakaoButton";
import GoogleButton from "./Button/GoogleButton";
import NaverButton from "./Button/NaverButton";
import "./SocialLogin.css";

const SocialLogin = ({ text }: { text: string }) => {
  return (
    <div className="social-login">
      <p>{text}</p>
      <div className="social-btns">
        <KakaoButton />
        <GoogleButton />
        <NaverButton />
      </div>
    </div>
  );
};

export default SocialLogin;
