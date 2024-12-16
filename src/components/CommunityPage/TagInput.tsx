import { useState } from "react";
import "./TagInput.css";

interface TagInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
  maxTags?: number;
}

const TagInput: React.FC<TagInputProps> = ({
  tags,
  onChange,
  maxTags = 10,
}) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === ",") && tags.length < maxTags) {
      e.preventDefault();
      const newTag = input.trim();
      if (newTag && !tags.includes(newTag)) {
        onChange([...tags, newTag]);
      }
      setInput("");
    } else if (e.key === "Backspace" && !input && tags.length > 0) {
      onChange(tags.slice(0, -1));
    }
  };

  const removeTag = (indexToRemove: number) => {
    onChange(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="tag-input-container">
      <div className="tag-list">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
            <button
              type="button"
              onClick={() => removeTag(index)}
              className="tag-remove"
            >
              ×
            </button>
          </span>
        ))}
        {tags.length < maxTags && (
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              tags.length === 0 ? "태그를 설정하세요 (최대 10개)" : ""
            }
            className="tag-input"
          />
        )}
      </div>
      {tags.length >= maxTags && (
        <p className="tag-limit-message">
          태그는 최대 {maxTags}개까지만 입력할 수 있습니다.
        </p>
      )}
    </div>
  );
};

export default TagInput;
