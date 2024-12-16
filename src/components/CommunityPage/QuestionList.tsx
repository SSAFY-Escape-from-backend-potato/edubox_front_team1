import { Link } from "react-router-dom";
import { questions } from "../../api/MockupData";
import "./QuestionList.css";

interface QuestionListProps {
  filter: string;
}

const QuestionList: React.FC<QuestionListProps> = ({ filter }) => {
  return (
    <div className="question-list">
      {questions.map((question) => (
        <Link
          to={`/community/question/${question.id}`}
          key={question.id}
          className="question-item"
        >
          <div className="question-main">
            <h3>{question.title}</h3>
            <p>{question.content}</p>
          </div>
          <div className="question-meta">
            <span>{question.author.name}</span>
            <span>·</span>
            <span>{question.createdAt}</span>
            <span>·</span>
            <span>조회 {question.viewCount}</span>
            <span>·</span>
            <span>댓글 {question.commentCount}</span>
            <span> </span>
          </div>
          <div className="question-likes">
            <i className="fa-solid fa-heart"></i>
            <span>{question.likeCount}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuestionList;
