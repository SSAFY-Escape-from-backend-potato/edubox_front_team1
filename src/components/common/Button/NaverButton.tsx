import "../SocialLogin.css";

const NaverButton = () => {
  return (
    <button className="naver-btn" aria-label="네이버 로그인">
      <svg
        width="40"
        height="40"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_403_243)">
          <path
            d="M18 20H2C0.9 20 0 19.1 0 18V2C0 0.9 0.9 0 2 0H18C19.1 0 20 0.9 20 2V18C20 19.1 19.1 20 18 20Z"
            fill="#03C75A"
          />
          <path
            d="M12.35 10.25L8.20002 4.19995H4.65002V15.8H8.65002V9.74995L12.8 15.8H16.35V4.19995H12.35V10.25Z"
            fill="white"
          />
        </g>
      </svg>
    </button>
  );
};

export default NaverButton;
