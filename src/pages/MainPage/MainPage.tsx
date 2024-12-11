import React from "react";
import Banner from "src/components/MainPage/Banner";
import CourseList from "src/components/MainPage/CourseList";
import "./MainPage.css";

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <Banner />
      <CourseList />
    </div>
  );
};

export default MainPage;
