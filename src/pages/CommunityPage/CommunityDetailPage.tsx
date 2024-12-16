import { useParams } from "react-router-dom";
import Header from "../../components/common/Header";
import CommentList from "../../components/CommunityPage/CommentList";
import CommentForm from "../../components/CommunityPage/CommentForm";
import { questions } from "../../api/MockupData";
import { comments } from "../../api/MockupData";
import "./CommunityDetailPage.css";

const CommunityDetailPage = () => {
  const { id } = useParams();

  const question = questions[0]; // 임시 데이터

  return (
    <>
      <Header />
      <div className="community-detail-page">
        <div className="community-detail-header">
          <div className="community-detail-title">
            <h1>{question.title}</h1>
            <div className="community-detail-meta">
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
        <div className="community-detail-content">
          <div className="content-main">
            <p>{question.content}</p>
            {question.tags && (
              <div className="community-tags">
                {question.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="community-actions">
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

export default CommunityDetailPage;
