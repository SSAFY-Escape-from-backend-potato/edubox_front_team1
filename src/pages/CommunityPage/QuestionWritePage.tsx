import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import TagInput from "../../components/CommunityPage/TagInput";
import rehypeSanitize from "rehype-sanitize";
import "./QuestionWritePage.css";

const QuestionWritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<string | undefined>("");
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 연동
    console.log({ title, content, tags });
    navigate("/community");
  };

  return (
    <div className="question-write-page">
      <div className="question-write-header">
        <h1>질문하기</h1>
        <p>프로그래밍과 관련된 질문을 해주세요.</p>
      </div>
      <form className="question-write-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목에 핵심 내용을 요약해보세요."
            className="title-input"
          />
        </div>
        <div className="form-group">
          <TagInput tags={tags} onChange={setTags} />
        </div>
        <div className="form-group" data-color-mode="light">
          {/* @ts-ignore */}
          <MDEditor
            value={content}
            onChange={setContent}
            preview="edit"
            height={400}
            visibleDragbar={false}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]],
            }}
            textareaProps={{
              placeholder:
                "질문 내용을 작성해주세요.\n마크다운 문법을 지원합니다.",
            }}
          />
        </div>
        <div className="form-actions">
          <button
            type="button"
            className="btn-cancel"
            onClick={() => navigate(-1)}
          >
            취소
          </button>
          <button
            type="submit"
            className="btn-submit"
            disabled={!title.trim() || !content?.trim()}
          >
            등록하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionWritePage;
