import Profile from "../../components/UserPage/Profile";
import Courses from "../../components/UserPage/Courses";
import Settings from "src/components/UserPage/Settings";
import { useUserPage } from "src/hooks/useUserPage";
import "./UserPage.css";

const UserPage: React.FC = () => {
  const { activeTab, userProfile, handleTabChange, updateProfile } =
    useUserPage();

  return (
    <div className="user-page">
      <section className="profile-header">
        <div className="profile-header-content">
          <div className="profile-image">
            <img src={userProfile.image} alt="프로필 이미지" loading="lazy" />
          </div>
          <div className="profile-info">
            <h1>{userProfile.name}</h1>
            <p className="email">{userProfile.email}</p>
          </div>
        </div>
      </section>
      <nav className="profile-nav">
        <ul>
          <li>
            <button
              className={`nav-button ${
                activeTab === "profile" ? "active" : ""
              }`}
              onClick={() => handleTabChange("profile")}
            >
              프로필
            </button>
          </li>
          <li>
            <button
              className={`nav-button ${
                activeTab === "courses" ? "active" : ""
              }`}
              onClick={() => handleTabChange("courses")}
            >
              수강 중인 강의
            </button>
          </li>
          <li>
            <button
              className={`nav-button ${
                activeTab === "settings" ? "active" : ""
              }`}
              onClick={() => handleTabChange("settings")}
            >
              설정
            </button>
          </li>
        </ul>
      </nav>
      <div className="profile-content">
        {activeTab === "profile" && <Profile userProfile={userProfile} />}
        {activeTab === "courses" && <Courses />}
        {activeTab === "settings" && (
          <Settings userProfile={userProfile} onUpdateProfile={updateProfile} />
        )}
      </div>
    </div>
  );
};

export default UserPage;
