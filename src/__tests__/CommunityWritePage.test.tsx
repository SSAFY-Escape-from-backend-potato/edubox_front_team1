import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CommunityWritePage from "../pages/CommunityPage/CommunityWritePage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("커뮤니티 글쓰기 페이지", () => {
  jest.clearAllMocks();

  it("제목 입력창을 렌더링한다", () => {
    render(
      <BrowserRouter>
        <CommunityWritePage />
      </BrowserRouter>
    );

    expect(
      screen.getByPlaceholderText("제목에 핵심 내용을 요약해보세요.")
    ).toBeInTheDocument();
  });

  it("마크다운 에디터를 렌더링한다", () => {
    render(
      <BrowserRouter>
        <CommunityWritePage />
      </BrowserRouter>
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("태그 입력 컴포넌트를 렌더링한다", () => {
    render(
      <BrowserRouter>
        <CommunityWritePage />
      </BrowserRouter>
    );

    expect(
      screen.getByPlaceholderText(/태그를 입력해주세요/)
    ).toBeInTheDocument();
  });

  it("필수 입력값이 없으면 등록 버튼이 비활성화된다", () => {
    render(
      <BrowserRouter>
        <CommunityWritePage />
      </BrowserRouter>
    );

    const submitButton = screen.getByText("등록하기");
    expect(submitButton).toBeDisabled();
  });
});
