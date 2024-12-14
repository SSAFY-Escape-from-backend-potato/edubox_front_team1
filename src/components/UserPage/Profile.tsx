import "./Profile.css";

interface ProfileProps {
  userProfile: {
    bio: string;
    completedCourses: number;
    reviews: number;
  };
}

const Profile: React.FC<ProfileProps> = ({ userProfile }: ProfileProps) => {
  return (
    <div className="profile-section">
      <div className="profile-card">
        <h2>소개</h2>
        <p>{userProfile.bio || "자기소개가 없습니다."}</p>
      </div>
      <div className="profile-card">
        <h2>활동</h2>
        <div className="activity-stats">
          <div className="stat-item">
            <span className="stat-value">{userProfile.completedCourses}</span>
            <span className="stat-label">수강 완료 강의</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{userProfile.reviews}</span>
            <span className="stat-label">작성한 리뷰</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
