import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Header.css";

const Header: React.FC = () => {
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
            placeholder="나의 진짜 성장을 도와줄 실무 강의를 찾아보세요."
          />
          <i className="fas fa-search fa"></i>
        </div>
        <div className="auth">
          <button>로그인</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
