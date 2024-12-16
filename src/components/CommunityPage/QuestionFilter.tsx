import { Dispatch, SetStateAction } from "react";
import "./QuestionFilter.css";

interface QuestionFilterProps {
  currentFilter: string;
  onFilterChange: Dispatch<SetStateAction<string>>;
}

const QuestionFilter: React.FC<QuestionFilterProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  return (
    <div className="question-filter">
      <button
        className={`filter-btn ${currentFilter === "latest" ? "active" : ""}`}
        onClick={() => onFilterChange("latest")}
      >
        최신순
      </button>
      <button
        className={`filter-btn ${currentFilter === "popular" ? "active" : ""}`}
        onClick={() => onFilterChange("popular")}
      >
        인기순
      </button>
      <button
        className={`filter-btn ${currentFilter === "noAnswer" ? "active" : ""}`}
        onClick={() => onFilterChange("noAnswer")}
      >
        답변 대기
      </button>
    </div>
  );
};

export default QuestionFilter;
