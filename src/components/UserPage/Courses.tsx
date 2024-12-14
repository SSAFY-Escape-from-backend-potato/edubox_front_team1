import "./Courses.css";

const Courses: React.FC = () => {
  return (
    <div className="courses-section">
      <div className="courses-grid">
        <div className="empty-courses">
          <p>수강 중인 강의가 없습니다.</p>
          <a href="/courses" className="btn-primary">
            강의 둘러보기
          </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
