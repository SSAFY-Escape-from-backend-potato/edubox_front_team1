import { Course } from "src/model/Course";
import "./CourseCard.css";

interface CourseCardProps {
  key: number;
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ key, course }) => {
  return (
    <div className="course-card" key={key}>
      <img
        className="course-thumbnail"
        src={course.thumbnail}
        alt={course.title}
      />
      <div className="course-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-instructor">{course.instructor}</p>
        <div className="course-rating">
          <span className="rating-star">⭐</span>
          <span className="rating-score">{course.rating}</span>
        </div>
        <p className="course-price">{course.price}</p>
      </div>
    </div>
  );
};

export default CourseCard;
