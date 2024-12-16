import { Link } from "react-router-dom";
import { Question } from "src/model/Question";
import "./CommunityList.css";

interface CommunityListProps {
  questions: Question[];
  loading?: boolean;
  error?: string | null;
}

const CommunityList: React.FC<CommunityListProps> = ({
  questions,
  loading,
  error,
}) => {
  if (loading) {
    return <div className="community-list-loading">로딩 중...</div>;
  }

  if (error) {
    return <div className="community-list-error">{error}</div>;
  }
  
  return (
    <div className="community-list">
      {questions.map((question) => (
        <Link
          to={`/community/question/${question.id}`}
          key={question.id}
          className="community-item"
        >
          <div className="community-main">
            <h3>{question.title}</h3>
            <p>{question.content}</p>
          </div>
          <div className="community-meta">
            <span>{question.author.name}</span>
            <span>·</span>
            <span>{question.createdAt}</span>
            <span>·</span>
            <span>조회 {question.viewCount}</span>
            <span>·</span>
            <span>댓글 {question.commentCount}</span>
            <span> </span>
          </div>
          <div className="community-likes">
            <i className="fa-solid fa-heart"></i>
            <span>{question.likeCount}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CommunityList;
