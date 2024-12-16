import { useState } from "react";
import "./CommunitySearch.css";

interface CommunitySearchProps {
  onSearch: (term: string) => void;
}

const CommunitySearch: React.FC<CommunitySearchProps> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <form
      className="community-search"
      onSubmit={handleSubmit}
      data-testid="search-form"
    >
      <div className="search-input-wrapper">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="검색어를 입력해주세요"
          className="search-input"
        />
      </div>
    </form>
  );
};

export default CommunitySearch;
