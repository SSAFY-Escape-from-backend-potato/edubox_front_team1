import { useParams } from "react-router-dom";
import Header from "../../components/common/Header";
import CommentList from "../../components/CommunityPage/CommentList";
import CommentForm from "../../components/CommunityPage/CommentForm";
import { questions } from "../../api/MockupData";
import { comments } from "../../api/MockupData";
import "./QuestionDetailPage.css";

const QuestionDetailPage = () => {
  const { id } = useParams();

  const question = questions[0]; // 임시 데이터

  return (
    <>
      <Header />
      <div className="question-detail-page">
        <div className="question-detail-header">
          <div className="question-detail-title">
            <h1>{question.title}</h1>
            <div className="question-detail-meta">
              <div className="author-info">
                <img src={question.author.profileImage} alt="프로필" />
                <span className="author-name">{question.author.name}</span>
              </div>
              <div className="post-info">
                <span>작성 {question.createdAt}</span>
                <span className="divider">·</span>
                <span>조회 {question.viewCount}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="question-detail-content">
          <div className="content-main">
            <p>{question.content}</p>
            {question.tags && (
              <div className="question-tags">
                {question.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="question-actions">
            <div className="like-count">
              <button className="btn-like">
                <i className="fa-solid fa-heart"></i>
                <span>{question.likeCount}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="answers-section">
          <h2>답변 {comments.length}</h2>
          <CommentForm />
          <CommentList comments={comments} />
        </div>
      </div>
    </>
  );
};

export default QuestionDetailPage;
