import { render, screen } from "@testing-library/react";
import CommentList from "../components/CommunityPage/CommentList";
import { Comment } from "../model/Comment";

const mockComments: Comment[] = [
  {
    id: 1,
    content: "테스트 답변입니다.",
    author: {
      id: 1,
      name: "답변자",
      profileImage: "test.jpg",
      questionCount: 3,
    },
    createdAt: "2024-01-23",
    updatedAt: "",
    likeCount: 2,
    isAccepted: true,
  },
];

describe("댓글 목록", () => {
  it("댓글을 올바르게 렌더링한다", () => {
    render(<CommentList comments={mockComments} />);

    expect(screen.getByText(mockComments[0].content)).toBeInTheDocument();
    expect(screen.getByText(mockComments[0].author.name)).toBeInTheDocument();
  });

  it("채택된 답변 표시를 한다", () => {
    render(<CommentList comments={mockComments} />);
    expect(screen.getByText("채택된 답변")).toBeInTheDocument();
  });

  it("작성자의 질문 수를 표시한다", () => {
    render(<CommentList comments={mockComments} />);
    expect(
      screen.getByText(`작성한 질문수 ${mockComments[0].author.questionCount}`)
    ).toBeInTheDocument();
  });
});
