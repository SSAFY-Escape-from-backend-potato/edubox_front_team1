import React from "react";
import Header from "src/components/common/Header";
import Banner from "src/components/MainPage/Banner";
import CourseList from "src/components/MainPage/CourseList";
import "./MainPage.css";

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <Header />
      <Banner />
      <CourseList />
    </div>
  );
};

export default MainPage;
