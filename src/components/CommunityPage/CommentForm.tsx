import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import "./CommentForm.css";

const CommentForm: React.FC = () => {
  const [content, setContent] = useState<string | undefined>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 댓글 제출 로직
    console.log("Submit comment:", content);
    setContent("");
  };

  const handleChange = (value?: string) => {
    setContent(value || "");
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="md-editor-wrapper" data-color-mode="light">
        {/* @ts-ignore */}
        <MDEditor
          value={content}
          onChange={handleChange}
          preview="edit"
          height={300}
          visibleDragbar={false}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
          textareaProps={{
            placeholder: "답변을 작성해주세요.\n마크다운 문법을 지원합니다.",
          }}
        />
      </div>
      <div className="comment-form-footer">
        <div className="markdown-guide">
          <a
            href="https://www.markdownguide.org/basic-syntax/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-circle-info"></i>
            마크다운 사용법
          </a>
        </div>
        <button
          type="submit"
          className="btn-submit"
          disabled={!content?.trim()}
        >
          답변 등록
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
