import { cleanup, render, screen } from "@testing-library/react";
import Header from "../components/common/Header";

afterEach(() => {
  cleanup();
});

describe("Header", () => {
  it("로고가 화면에 표시된다", () => {
    render(<Header />);
    const logo = screen.getByText("EduBox");
    expect(logo).toBeInTheDocument();
  });

  it("메뉴 항목들이 화면에 표시된다", () => {
    render(<Header />);
    const menuItems = ["강의", "로드맵", "멘토링", "커뮤니티"];
    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("검색 input이 존재한다", () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText(
      "나의 진짜 성장을 도와줄 실무 강의를 찾아보세요."
    );
    expect(searchInput).toBeInTheDocument();
  });

  it("로그인 버튼이 존재한다", () => {
    render(<Header />);
    const loginButton = screen.getByText("로그인");
    expect(loginButton).toBeInTheDocument();
  });
});
