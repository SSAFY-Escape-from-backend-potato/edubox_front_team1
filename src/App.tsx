import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import UserPage from "./pages/UserPage/UserPage";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import CommunityDetailPage from "./pages/CommunityPage/CommunityDetailPage";
import CommunityWritePage from "./pages/CommunityPage/CommunityWritePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/community">
            <Route path="question" element={<CommunityPage />} />
            <Route path="question/:id" element={<CommunityDetailPage />} />
            <Route path="write" element={<CommunityWritePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
