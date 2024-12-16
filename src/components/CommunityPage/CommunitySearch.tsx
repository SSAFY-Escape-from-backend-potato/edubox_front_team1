import { useState } from "react";
import "./CommunitySearch.css";

const CommunitySearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 검색 로직 구현
    console.log("Searching for:", searchTerm);
  };

  return (
    <form className="community-search" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="검색어를 입력해주세요"
          className="search-input"
        />
      </div>
    </form>
  );
};

export default CommunitySearch;
