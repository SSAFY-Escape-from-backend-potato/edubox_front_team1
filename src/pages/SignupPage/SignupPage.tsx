import SignupForm from "../../components/SignupPage/SignupForm";
import SocialLogin from "../../components/common/SocialLogin";
import SignupHeader from "src/components/SignupPage/SignupHeader";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./SignupPage.css";

const SignupPage: React.FC = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <SignupHeader />
        <SignupForm />
        <SocialLogin text="간편 회원가입" />
      </div>
    </div>
  );
};

export default SignupPage;
