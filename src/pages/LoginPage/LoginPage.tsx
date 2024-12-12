import LoginForm from "src/components/LoginPage/LoginForm";
import LoginMoreAction from "src/components/LoginPage/LoginMoreAction";
import SocialLogin from "src/components/LoginPage/SocialLogin";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h2 className="login-logo">
            <a href="/">EduBox</a>
          </h2>
        </div>
        <LoginForm />
        <LoginMoreAction />
        <SocialLogin />
      </div>
    </div>
  );
};

export default LoginPage;
