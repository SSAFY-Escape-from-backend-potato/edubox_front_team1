import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/atoms/userAtom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <a href="/">EduBox</a>
        </div>
        <ul className="menu">
          <li>
            <a href="/courses">강의</a>
          </li>
          <li>
            <a href="/roadmap">로드맵</a>
          </li>
          <li>
            <a href="/mentors">멘토링</a>
          </li>
          <li>
            <a href="/community">커뮤니티</a>
          </li>
        </ul>
        <div className="search">
          <input
            type="text"
            id="search-input"
            placeholder="나의 진짜 성장을 도와줄 실무 강의를 찾아보세요."
          />
          <i className="fas fa-search fa"></i>
        </div>
        <div className="auth">
          {user ? (
            <button onClick={() => navigate("/logout")}>로그아웃</button>
          ) : (
            <button onClick={() => navigate("/login")}>로그인</button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
