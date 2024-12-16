import { useState } from "react";
import Header from "../../components/common/Header";
import QuestionList from "../../components/CommunityPage/QuestionList";
import QuestionFilter from "../../components/CommunityPage/QuestionFilter";
import QuestionSearch from "../../components/CommunityPage/QuestionSearch";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./QuestionPage.css";

const QuestionPage: React.FC = () => {
  const [filter, setFilter] = useState("latest"); // latest, popular, noAnswer

  return (
    <>
      <Header />
      <div className="question-page">
        <div className="question-page-header">
          <h2>커뮤니티</h2>
          <p>함께 공유하고 함께 성장하세요</p>
        </div>
        <div className="question-page-content">
          <div className="question-controls">
            <div className="question-controls-left">
              <QuestionFilter
                currentFilter={filter}
                onFilterChange={setFilter}
              />
            </div>
            <div className="question-controls-right">
              <QuestionSearch />
              <button className="btn-write">질문하기</button>
            </div>
          </div>
          <QuestionList filter={filter} />
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
