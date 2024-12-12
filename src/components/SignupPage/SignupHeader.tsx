import "./SignupHeader.css";

const SignupHeader = () => {
  return (
    <div className="signup-header">
      <h2 className="signup-logo">
        <a href="/">EduBox</a>
      </h2>
      <h3 className="signup-title">회원가입</h3>
      <div className="signup-message-slider">
        <div className="slider-content">
          <span className="slide-message">나의 온라인 사수, 에듀박스</span>
          <span className="slide-message">
            에듀박스는 성장기회의 평등을 추구합니다
          </span>
          <span className="slide-message">
            에듀박스에서 다양한 학습의 기회를 얻으세요
          </span>
          <span className="slide-message">
            에듀박스에서 가치를 높이고 성장해 보세요
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupHeader;
