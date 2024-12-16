import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import CommunityList from "../../components/CommunityPage/CommunityList";
import CommunityFilter from "../../components/CommunityPage/CommunityFilter";
import CommunitySearch from "../../components/CommunityPage/CommunitySearch";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./CommunityPage.css";

const CommunityPage: React.FC = () => {
  const [filter, setFilter] = useState("latest"); // latest, popular, noAnswer

  return (
    <>
      <Header />
      <div className="community-page">
        <div className="community-page-header">
          <h2>커뮤니티</h2>
          <p>함께 공유하고 함께 성장하세요</p>
        </div>
        <div className="community-page-content">
          <div className="community-controls">
            <div className="community-controls-left">
              <CommunityFilter
                currentFilter={filter}
                onFilterChange={setFilter}
              />
            </div>
            <div className="community-controls-right">
              <CommunitySearch />
              <Link to="/community/write" className="btn-write">
                질문하기
              </Link>
            </div>
          </div>
          <CommunityList filter={filter} />
        </div>
      </div>
    </>
  );
};

export default CommunityPage;
