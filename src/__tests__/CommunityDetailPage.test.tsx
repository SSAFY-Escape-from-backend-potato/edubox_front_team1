import { render, screen } from "@testing-library/react";
import CommunityDetailPage from "../pages/CommunityPage/CommunityDetailPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "1" }),
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

jest.mock("../components/common/Header", () => {
  return () => <div data-testid="mock-header">Header</div>;
});

describe("커뮤니티 상세 페이지", () => {
  it("질문 제목과 내용을 표시한다", () => {
    render(<CommunityDetailPage />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/작성/)).toBeInTheDocument();
  });

  it("작성자 정보를 표시한다", () => {
    render(<CommunityDetailPage />);

    const authorImage = screen.getByLabelText("프로필");
    expect(authorImage).toBeInTheDocument();
  });

  it("답변 섹션을 표시한다", () => {
    render(<CommunityDetailPage />);

    expect(screen.getByText(/답변/)).toBeInTheDocument();
  });

  it("좋아요 버튼을 표시한다", () => {
    render(<CommunityDetailPage />);

    expect(screen.getByRole("button", { name: /좋아요/ })).toBeInTheDocument();
  });
});
