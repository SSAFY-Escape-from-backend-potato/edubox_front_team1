import React from "react";
import CourseCard from "./CourseCard";
import { Course } from "src/model/Course";
import { useScroll } from "../../hooks/useScroll";
import "./CourseList.css";
import { courses as mockupCourses } from "../../api/MockupData";

const courses: Course[] = [...mockupCourses];

const CourseList: React.FC = () => {
  const {
    scrollContainerRef,
    isLeftDisabled,
    isRightDisabled,
    scrollLeft,
    scrollRight,
  } = useScroll();

  return (
    <section className="course-list">
      <h2>인기 강의</h2>
      <div className="course-grid" ref={scrollContainerRef}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="scroll-buttons">
        <button
          className="scroll-btn left"
          onClick={scrollLeft}
          disabled={isLeftDisabled}
        >
          &lt;
        </button>
        <button
          className="scroll-btn right"
          onClick={scrollRight}
          disabled={isRightDisabled}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default CourseList;
