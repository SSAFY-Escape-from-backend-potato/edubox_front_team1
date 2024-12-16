import { Comment } from "../../model/Comment";
import "./CommentList.css";

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <div key={comment.id} className="comment-item">
          <div className="comment-header">
            <div className="author-info">
              <img
                src={comment.author.profileImage}
                alt="프로필"
                loading="lazy"
              />
              <span className="author-name">{comment.author.name}</span>
              <span className="post-stats">
                작성한 질문수 {comment.author.questionCount}
              </span>
            </div>
            <div className="comment-meta">
              <span>작성 {comment.createdAt}</span>
              {comment.updatedAt && (
                <>
                  <span className="divider">·</span>
                  <span className="updated">수정됨</span>
                </>
              )}
            </div>
          </div>
          <div className="comment-content">
            <p>{comment.content}</p>
          </div>
          <div className="comment-actions">
            <button className="btn-like">
              <i className="fa-solid fa-heart"></i>
              <span>{comment.likeCount}</span>
            </button>
            {comment.isAccepted && (
              <span className="accepted-answer">
                <i className="fa-solid fa-check"></i>
                채택된 답변
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
