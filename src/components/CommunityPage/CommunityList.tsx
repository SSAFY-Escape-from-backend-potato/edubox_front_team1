import { Link } from "react-router-dom";
import { questions } from "../../api/MockupData";
import "./CommunityList.css";

interface CommunityListProps {
  filter: string;
}

const CommunityList: React.FC<CommunityListProps> = ({ filter }) => {
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
