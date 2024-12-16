import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CommunityList from "../components/CommunityPage/CommunityList";
import { Question } from "../model/Question";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

const mockQuestions: Question[] = [
  {
    id: 1,
    title: "테스트 질문",
    content: "테스트 내용입니다.",
    author: {
      id: 1,
      name: "작성자",
      profileImage: "https://picsum.photos/300/207",
    },
    createdAt: "2024-01-23",
    likeCount: 5,
    commentCount: 3,
    viewCount: 100,
    tags: ["react", "typescript"],
  },
];

describe("커뮤니티 목록", () => {
  const renderWithRouter = (props: any) => {
    render(
      <BrowserRouter>
        <CommunityList {...props} />
      </BrowserRouter>
    );
  };

  it("로딩 상태를 표시한다", () => {
    renderWithRouter({ questions: [], loading: true });
    expect(screen.getByText("로딩 중...")).toBeInTheDocument();
  });

  it("에러 메시지를 표시한다", () => {
    const errorMessage = "데이터를 불러오는데 실패했습니다";
    renderWithRouter({ questions: [], error: errorMessage });
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("질문 목록을 올바르게 렌더링한다", () => {
    renderWithRouter({ questions: mockQuestions });

    expect(screen.getByText(mockQuestions[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockQuestions[0].content)).toBeInTheDocument();
    expect(screen.getByText(mockQuestions[0].author.name)).toBeInTheDocument();
  });

  it("질문 항목에 메타 정보를 표시한다", () => {
    renderWithRouter({ questions: mockQuestions });

    expect(
      screen.getByText(`조회 ${mockQuestions[0].viewCount}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`댓글 ${mockQuestions[0].commentCount}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockQuestions[0].likeCount.toString())
    ).toBeInTheDocument();
  });
});
